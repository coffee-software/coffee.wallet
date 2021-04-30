import {Engine} from "./Engine";
import {fastTap} from "./Tools/Fasttap";
import {OsPlugins} from "./OsPlugins";
import {Logger} from "./Tools/Logger";
import {WalletWidget} from "./Widgets/WalletWidget";
import {Wallet} from "./Wallet";
import {isOnlineCoinHanlder} from "./AllCoinHandlers";
import {PortfolioItemWidget} from "./Widgets/PortfolioItemWidget";
import {ListItemWidget} from "./Widgets/ListItemWidget";
import {CoinAddressIcon} from "./Widgets/CoinAddressIcon";
import {PortfolioAddress, PortfolioBalance, PortfolioItem} from "./PortfolioItem";
import {AddressInputWidget} from "./Widgets/AddressInputWidget";
import {BaseCoinHandler, NewTransaction, OnlineCoinHandler} from "./Handlers/BaseCoinHandler";
import {Version} from "./Tools/Changelog";
import {CoinButtonWidget} from "./Widgets/CoinButtonWidget";
import {SelectWidget} from "./Widgets/SelectWidget";
import {AmountInputWidget} from "./Widgets/AmountInputWidget";
import {Widget} from "./Widgets/Widget";
import {BigNum} from "./Core/BigNum";
import {SliderInputWidget} from "./Widgets/SliderInputWidget";
import {BaseExchangeProvider} from "./ExchangeProviders/BaseExchangeProvider";
import {Strings} from "./Tools/Strings";
import {PaymentURI} from "./Tools/PaymentURI";

export class App {

    walletsWidgets: { [code: string] : WalletWidget } = {}
    engine: Engine
    logger: Logger
    lastOpenedUrl : string = null
    exchangeableCoinsCache : { [code: string] : string[] } = {}

    openUrl(url:string) : void {
        //make sure data is loaded
        if (this.lastOpenedUrl != url) {
            let app = this;
            this.onDataLoaded(function (callback) {
                app.alertInfo('opening url: ' + url);
                app.handleUrlOpened(url, callback);
            });
        }
    }

    constructor() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    }

    onDeviceReady() {
        var footButtons = document.getElementById('foot').children;
        for (let i = 0; i < footButtons.length; i++) {
            fastTap(footButtons[i] as HTMLElement);
        }
        var buttons = document.getElementsByTagName('button');
        for (let i = 0; i < buttons.length; i++) {
            fastTap(buttons[i]);
        }

        this.tabWallets();
        document.addEventListener('backbutton', this.onBackButton.bind(this), false);
        document.getElementById('popupContent').addEventListener("scroll", this.togglePopupHeaderFix.bind(this), false);
        window.onresize = this.onResize.bind(this);
        this.onResize();

        this.engine = new Engine(
            OsPlugins.getStorage(),
            {
                error: this.alertError.bind(this),
                info: this.alertInfo.bind(this),
                success: this.alertSuccess.bind(this),
            },
            window.localStorage
        );
        this.logger = new Logger(OsPlugins.getStorage());
        let app = this;
        this.engine.init().then(function() {
            app.updatePricesFromProvider();
            OsPlugins.checkForUpdates(function(){
                app.onEngineLoaded();
            });
        });

        (window as any).PullToRefresh.init({
            triggerElement: '#walletsTab',
            mainElement: '#wallets',
            distMax: 84,
            distReload: 60,
            iconArrow: '<div class="spinner"><img src="icons/refresh.png" alt="refresh"></div>',
            iconRefreshing: '<div class="spinner spinning"><img src="icons/refresh.png" alt="refresh"></div>',
            getStyles: function() { return ''; },
            onRefresh: this.updatePricesFromProvider.bind(this),
            shouldPullToRefresh: function() {
                return !document.querySelector('#walletsTab').scrollTop;
            }
        });
        this.setExchangeableCoins()
        this.logger.log("info", null, "application started");
    }

    setExchangeableCoins() {
        let app = this;
        this.exchangeableCoinsCache = this.engine.cache.get('exchangeableCoins', {});
        for (var key in this.engine.allExchangeProviders) {
            var provider = this.engine.allExchangeProviders[key];
            provider.getCurrencies().then((function(key: string, currencies: string[]){
                app.exchangeableCoinsCache[key] = currencies;
                app.engine.cache.set('exchangeableCoins', app.exchangeableCoinsCache);
            }).bind(this, key));
        }
    }

    onEngineLoaded () {
        OsPlugins.hideNativeSplash();
        document.getElementById('loading').classList.remove('show');
        let app = this;
        if (!(this.engine.keychainCreated())) {
            this.saveVersion();
            this.createNewWallet();
        } else {
            this.showChangelogIfVersionUpdated(function(){
                app.showExportKeysReminderIfRequired(function(){
                    for (var key in app.engine.wallets) {
                        app.walletsWidgets[key] = app.addWalletWidget(app.engine.wallets[key]);
                    }
                    app.updateAllValues();
                    app.onDataLoaded();
                });
            });
        }
    }

    resizingTimer: any = null
    onResize() {
        document.body.classList.toggle('desktop', window.innerWidth > 660);
        document.body.classList.add('resizing');
        clearTimeout(this.resizingTimer);
        this.resizingTimer = setTimeout(function () {
            document.body.classList.remove('resizing');
        }, 400);
    }

    togglePopupHeaderFix() {
        //sticky popup header
        var headerSize = 0;
        var children = document.getElementById('popupContent').children;
        for (var c=0; c < children.length; c++) {
            if ((children[c] as HTMLElement).style.display == 'block') {
                headerSize = ((children[c] as HTMLElement).firstElementChild as HTMLElement).offsetHeight;
            }
        }
        document.getElementById('popupHead').classList.toggle('expand', document.getElementById('popupContent').scrollTop >= headerSize - 62); //85
    }

    tabWallets() {
        this.setTabActive(1)
    }
    tabHistory() {
        this.setTabActive(0)
        this.reloadHistory()
    }

    tabTools() {
        this.setTabActive(2)
    }

    onBackButton() {
        if (this.lockDialogOpened) {
            this.lockDialogCanCancel && this.lockDialogCancel();
        } else if (document.getElementById('formPopup').classList.contains('show')) {
            this.closeForm();
        } else if (document.getElementById('popup').classList.contains('show')) {
            this.closePopup();
        }
    }

    setTabActive(n : number) {
        document.getElementById('swiper').classList.remove('tab0');
        document.getElementById('swiper').classList.remove('tab1');
        document.getElementById('swiper').classList.remove('tab2');
        document.getElementById('swiper').classList.add('tab' + n);

        for (var i = 0; i < document.getElementById('foot').children.length; i++) {
            if (i == n) {
                document.getElementById('foot').children[i].classList.add('active');
            } else {
                document.getElementById('foot').children[i].classList.remove('active');
            }
        }
    }

    populateHistoryLogs(logs: any[]) {
        document.getElementById('history').innerHTML = '';
        for (var i=0; i< logs.length; i++) {
            var li = document.createElement('li');
            var html = logs[i].message;
            if ('coin' in logs[i]) {
                html = this.preParseCoinMsg(html, logs[i].coin, true);
            }
            if (('coin' in logs[i]) && (logs[i].coin in this.engine.allCoinHandlers)) {
                html = '<img width="36" src="coins/' + this.engine.allCoinHandlers[logs[i].coin].icon + '.svg"/>' + html;
            }
            li.innerHTML = '<div class="msg ' + logs[i].severity + '"><div class="ts">' + (new Date(logs[i].ts)).toLocaleString()  + '</div><div>' + html + '</div></div><div class="stitch2"></div>';
            document.getElementById('history').appendChild(li);
        }

    }

    reloadHistory() {
        this.logger.getLogs(this.populateHistoryLogs.bind(this));
    }

    async updatePricesFromProvider() : Promise<void> {
        this.netError = false;
        this.updateAllValues();
        document.getElementById('refresh').classList.add('spinning');
        document.getElementById('refresh').classList.remove('error');
        let handlers : { [code: string] : BaseCoinHandler } = {};
        for (let k in this.engine.wallets){
            handlers[k] = this.engine.wallets[k].handler;
        }
        await this.engine.priceProvider.updatePrices(handlers);
        this.updateAllValues();
        document.getElementById('refresh').classList.remove('spinning');
        document.getElementById('refresh').classList.toggle('error', this.netError);
    }


    alertError(html: string, coinCode: string = null, debug: any = null) {
        this.alertMessage(html, coinCode, 'error');
    }
    alertInfo(html: string, coinCode: string = null, debug: any = null) {
        this.alertMessage(html, coinCode, 'info');
    }
    alertSuccess(html: string, coinCode: string = null, debug: any = null) {
        this.alertMessage(html, coinCode, 'success');
    }

    private preParseCoinMsg(msg : string, coinCode: string, allowLinks: boolean = false) {
        if ((typeof(msg) == 'string') && (coinCode in this.engine.allCoinHandlers)){
            let handler = this.engine.allCoinHandlers[coinCode];
            if (isOnlineCoinHanlder(handler)) {
                let link = handler.explorerLinkTx.bind(handler);
                msg = msg.replace(/\<u\>\w+\<\/u\>/, function (match: any) {
                    console.log(handler, match);
                    var tx = match.substring(3, match.length - 4);
                    var txShort = tx.substring(0, 6) + '..' + tx.substring(tx.length - 4, tx.length);
                    return allowLinks ? ('<a href="#" onclick="OsPlugins.openInSystemBrowser(\'' + link(tx) + '\');">' + txShort + '</a>') : ('<u>' + txShort + '</u>');
                });
            }
        }
        return msg;
    }

    private alertMessage(html: string, coinCode: string, type: string, debug: any = null) {
        this.logger.log(type, coinCode, html, debug);
        var alertTxt = this.preParseCoinMsg(html, coinCode);
        this.alertMessagePopup(type, alertTxt.length > 100 ? alertTxt.substr(0,98) + '...' : alertTxt);
    }

    private alertMessagePopup(type: string, html: string) {
        var msgDiv = document.createElement('div');
        msgDiv.classList.add('msg');
        msgDiv.classList.add(type);
        msgDiv.innerHTML = html;

        var closer = document.createElement("a");
        closer.classList.add('closer');
        var img = document.createElement("img");
        img.setAttribute('src', 'icons/close.png');
        closer.appendChild(img);
        closer.onclick = function(){ document.getElementById('messages').removeChild(msgDiv); msgDiv = null; };
        fastTap(closer);

        msgDiv.appendChild(closer);
        document.getElementById('messages').appendChild(msgDiv);
        setTimeout(function(){ msgDiv && msgDiv.classList.add('fadingout'); }, 5000);
        setTimeout(function(){ msgDiv && document.getElementById('messages').removeChild(msgDiv); }, 7000);
    }

    public onJsError(msg : any, url : any, line : any, col : any, error : any) {
        var log = msg;
        log += !url ? '' : '\nurl: ' + url;
        log += !line ? '' : '\nline: ' + line;
        log += !col ? '' : '\ncolumn: ' + col;
        log += !error ? '' : '\nerror: ' + error;
        this.alertMessagePopup('error', log);
    }

    addWalletWidget(data: Wallet) : WalletWidget {
        let widget = new WalletWidget(this.engine, data)
        widget.onclick = this.popupCoinInfo.bind(this)
        widget.onportfolio = this.popupOfflineAssets.bind(this, data, null)
        widget.onreceive = this.popupReceivePayment.bind(this, data, null)
        widget.onsend = this.popupSendPayment.bind(this, data, null)

        widget.onclick = this.popupCoinInfo.bind(this, widget, data)
        document.getElementById('walletsList').appendChild(widget.element);
        return widget;
    }

    openPopup(id: string, title: string, previousPopupCall: () => void = null) {

        this.previousPopupCall = previousPopupCall;
        document.getElementById('popup').classList.add('show');

        this.showOneChildOf('popupContent', id);

        document.getElementById('popupContent').scrollTop = 0;
        this.togglePopupHeaderFix();
        document.getElementById('popupTitle').innerHTML = title;
    }

    showOneChildOf(parentId : string, childId: string) {
        var children = document.getElementById(parentId).children;
        for (var c=0; c < children.length; c++) {
            (children[c] as HTMLElement).style.display = 'none';
        }
        document.getElementById(childId).style.display = 'block';
    }

    popupCoinInfo(walletWidget: WalletWidget, wallet: Wallet) {
        this.openPopup('coinInfoPopup', wallet.handler.ticker);
        (document.getElementById('coinInfoIcon') as HTMLImageElement).src = 'coins/' + wallet.handler.icon + '.svg';
        document.getElementById('coinInfoName').innerHTML = wallet.handler.ticker;
        document.getElementById('coinInfoSubName').innerHTML = wallet.handler.name;
        document.getElementById('coinInfoCurrentPrice').innerHTML =
            'current price: ' + this.engine.priceProvider.convert(1, wallet.handler);

        document.getElementById('coinInfoButtons').innerHTML = '';

        if (wallet.isOnline()) {
            document.getElementById('coinInfoButtons').appendChild(ListItemWidget.createButton('receive', 'receive', this.popupReceivePayment.bind(this, wallet, null)));
            document.getElementById('coinInfoButtons').appendChild(ListItemWidget.createButton('send', 'send', this.popupSendPayment.bind(this, wallet, null)));
        }
        document.getElementById('coinInfoButtons').appendChild(wallet.isOnline() ? walletWidget.refreshButton2 : ListItemWidget.createButton('refresh', 'refresh', null));
        document.getElementById('coinInfoButtons').appendChild(ListItemWidget.createButton('list', 'portfolio', this.popupOfflineAssets.bind(this, wallet, null)));

        var advanced = document.createElement('ul');
        advanced.classList.add('advancedActions');

        if (wallet.canSendViaMessage()) {
            advanced.appendChild(this.createAdvancedOption('message', 'send via message', this.popupSendSocial.bind(this, wallet)));
        }

        for( let provider in this.exchangeableCoinsCache) {
            if (this.exchangeableCoinsCache[provider].indexOf(wallet.handler.code) > -1) {
                advanced.appendChild(this.createAdvancedOption(
                    'sell',
                    'sell coin (' + provider + ')',
                    this.popupExchange.bind(this, provider, wallet.handler.code, null)
                ));
                advanced.appendChild(this.createAdvancedOption(
                    'buy',
                    'buy coin (' + provider + ')',
                    this.popupExchange.bind(this, provider, null, wallet.handler.code)
                ));
            }
        }

        if (isOnlineCoinHanlder(wallet.handler)) {
            advanced.appendChild(this.createAdvancedOption('link', 'history (external)', OsPlugins.openInSystemBrowser.bind(OsPlugins, wallet.handler.explorerLinkAddr(wallet.getReceiveAddress()))));
            advanced.appendChild(this.createAdvancedOption('import', 'import private key', this.showImportPrivateKeyPopup.bind(this, wallet.handler)));
        }

        var links = '<ul>';
        for (var name in wallet.handler.links) {
            links += '<li><a href="#" onclick="OsPlugins.openInSystemBrowser(\'' + wallet.handler.links[name] + '\');">' + name + '</a></li>';
        }
        links += '</ul>';

        advanced.appendChild(this.createAdvancedOption(
            'about',
            'about',
            this.confirmBeforeContinue.bind(
                this,
                wallet.handler.name + ' (' + wallet.handler.ticker + ')',
                '<div style="text-align:center;"><img width="64" src="coins/' + wallet.handler.icon + '.svg"/></div>' +
                wallet.handler.description + links,
                function(){},
                'close',
                null,
                null
            )
        ));

        var superAdvanced = document.createElement('ul');
        superAdvanced.classList.add('advancedActions');
        if (wallet.isOnline()) {
            superAdvanced.appendChild(this.createAdvancedOption('key', 'show private key', this.showExportPrivateKeyPopup.bind(this, wallet)));
        }
        if (walletWidget.onlineBalance.total().isZero() && walletWidget.portfolioBalance.total().isZero()) {
            superAdvanced.appendChild(this.createAdvancedOption('remove', 'remove wallet', this.removeCoin.bind(this, wallet)));
        }

        document.getElementById('coinInfoWallet').innerHTML = '<div style="overflow:auto; padding: 0 12px;">' +
            '<div style="float:left; text-align:left;">' +
            'wallet:<br/>' +
            (wallet.isOnline() ? (
                '<strong id="coinInfoValueContainer"></strong><br/>' +
                '<span id="coinInfoBalanceContainer"></span>') : 'Not supported yet.<br/>Portfolio use only.') +
            '</div>' +
            '<div style="float:right; text-align:right;">' +
            'portfolio:<br/>' +
            '<strong id="coinInfoPortfolioValueContainer"></strong><br/>' +
            '<span id="coinInfoPortfolioBalanceContainer"></span>' +
            '</div>';

        if (wallet.isOnline()) {
            document.getElementById('coinInfoBalanceContainer').appendChild(walletWidget.onlineAmountFull);
            document.getElementById('coinInfoValueContainer').appendChild(walletWidget.onlineValueFull);
        }

        document.getElementById('coinInfoPortfolioBalanceContainer').appendChild(walletWidget.offlineAmountFull);
        document.getElementById('coinInfoPortfolioValueContainer').appendChild(walletWidget.offlineValueFull);

        document.getElementById('coinInfoActions').innerHTML = '';
        document.getElementById('coinInfoActions').append(advanced);
        if (superAdvanced.children.length>0) {
            document.getElementById('coinInfoActions').append('danger zone');
            document.getElementById('coinInfoActions').append(superAdvanced);
        }
    }

    createAdvancedOption(icon: string, text: string, callback: ()=>void) {
        let li = document.createElement('li');
        let button = document.createElement('button');
        let img = document.createElement("img");
        img.setAttribute('src', 'icons/' + icon + '.png');
        button.appendChild(img);
        button.appendChild(document.createTextNode(text));
        button.onclick = callback;
        fastTap(button);
        li.appendChild(button);
        return li;
    }

    lockDialogOpened: boolean = false
    lockDialogAuthenticate: boolean = false
    lockDialogConfirmCallback: () => void = null
    lockDialogCancelCallback: () => void = null
    lockDialogCanCancel: boolean = false
    previousPopupCall: () => void = null

    confirmBeforeContinue(title: string, message: string, confirmCallback: () => void, confirmText: string = null, cancelText: string = null, cancelCallback: () => void = null) {
        this.lockDialogOpened = true;
        this.lockDialogAuthenticate = false;

        this.lockDialogConfirmCallback = confirmCallback;
        this.lockDialogCancelCallback = cancelCallback;

        document.getElementById('lockPopup').classList.remove('hidden');
        document.getElementById('lockPopupConfirm').classList.remove('hidden');
        document.getElementById('lockPopupConfirmText').innerHTML = confirmText ? confirmText : 'confirm';
        this.lockDialogCanCancel = !!cancelText;
        document.getElementById('lockPopupCancel').classList.toggle('hidden', !this.lockDialogCanCancel);
        document.getElementById('lockPopupCancelText').innerHTML = cancelText ? cancelText : 'cancel';
        document.getElementById('lockTitle').innerHTML = title;
        document.getElementById('lockMessage').innerHTML = message;
    }

    authenticateBeforeContinue(title: string, message: string, authCallback: () => void) {
        this.confirmBeforeContinue(title, message, authCallback, 'confirm', 'cancel');
        this.lockDialogAuthenticate = true;
    }

    lockDialogCancel() {
        this.lockDialogOpened = false;
        document.getElementById('lockPopup').classList.add('hidden');
        this.lockDialogConfirmCallback = null;
        var callback = this.lockDialogCancelCallback;
        this.lockDialogCancelCallback = null;
        callback && callback();
    }

    lockDialogConfirm() {
        this.lockDialogOpened = false;
        document.getElementById('lockPopup').classList.add('hidden');

        this.lockDialogCancelCallback = null;
        var callback = this.lockDialogConfirmCallback;
        this.lockDialogConfirmCallback = null;

        if (this.lockDialogAuthenticate) {
            OsPlugins.authenticateUser(callback);
        } else {
            callback();
        }
    }

    openForm(id: string) {
        document.getElementById("container").classList.add('blur');
        document.getElementById("nav").classList.add('blur');
        document.getElementById("popupHead").classList.add('blur');
        document.getElementById("popupContent").classList.add('blur');
        document.getElementById('formPopup').classList.add('show');
        this.showOneChildOf('formPopup', id);
    }

    closeForm() {
        document.getElementById("container").classList.remove('blur');
        document.getElementById("nav").classList.remove('blur');
        document.getElementById("popupHead").classList.remove('blur');
        document.getElementById("popupContent").classList.remove('blur');
        document.getElementById("formPopup").classList.remove('show');
    }

    closePopup() {
        document.getElementById("popup").classList.remove('show');
        if (this.previousPopupCall) {
            this.previousPopupCall();
        }
        this.previousPopupCall = null;
    }

    removeCoinConfirm(wallet: Wallet) {
        for (let key in this.engine.wallets) {
            if (this.engine.wallets[key] == wallet) {
                delete this.engine.wallets[key];
                this.walletsWidgets[key].element.outerHTML = ''
                delete this.walletsWidgets[key];
                this.engine.saveData();
                break;
            }
        }
        this.closePopup();
    }

    removeCoin(wallet: Wallet) {
        this.confirmBeforeContinue(
            'Are you sure you want to remove ' + wallet.handler.ticker + ' coin? ',
            'Private keys and offline wallets data will still be available in database and will be restored when you re-enable this coin.',
            this.removeCoinConfirm.bind(this, wallet),
            'remove',
            'cancel',
            null
        );
    }

    offlineAssetWallet : Wallet = null

    popupOfflineAssets(wallet: Wallet, idToUpdate: number = null) {
        document.getElementById('offlineAssets').innerHTML = '';
        for (var i = 0; i < wallet.portfolio.length; i ++) {
            var item = new PortfolioItemWidget(this.engine, wallet, i);
            document.getElementById('offlineAssets').appendChild(item.element);
            item.onremove = this.removeOfflieAsset.bind(this)
            item.onreceive = this.receiveOfflineAsset.bind(this)
            item.onclick = this.popupOfflineAssetDetails.bind(this)
            item.onedit = this.popupEditOfflineAsset.bind(this)
            if (typeof idToUpdate != 'undefined' && idToUpdate == i) {
                item.refreshBalance();
            }
        }
        this.openPopup('offlineAssetsPopup', wallet.handler.ticker + ' portfolio');
        (document.getElementById('offlineAssetsIcon') as HTMLImageElement).src = 'coins/' + wallet.handler.icon + '.svg';
        document.getElementById('offlineAssetsTitle').innerHTML = wallet.handler.ticker + ' portfolio';
        document.getElementById('offlineAssetsSubtitle').innerHTML = 'Your ' + wallet.handler.name + ' assets';
        document.getElementById('addAddressButton').classList.toggle('hidden', !('getBalance' in wallet.handler));
        document.getElementById('newAddressButton').classList.toggle('hidden', !('newRandomPrivateKey' in wallet.handler));
        this.offlineAssetWallet = wallet;
    }

    removeOfflieAssetConfirm(item: PortfolioItemWidget) {
        this.offlineAssetWallet.portfolio.splice(item.id, 1);
        this.engine.saveData();
        this.popupOfflineAssets(this.offlineAssetWallet);
    }

    removeOfflieAsset(item: PortfolioItemWidget) {
        this.confirmBeforeContinue(
            'Are you sure you want to remove this portfolio item? ',
            'Private keys and offline wallets data will still be available in database and will be restored when you re-enable this coin.',
            this.removeOfflieAssetConfirm.bind(this, item),
            'remove',
            'cancel',
            null
        );
    }

    activeAsset : PortfolioItemWidget = null

    receiveOfflineAsset(item: PortfolioItemWidget) {
        this.popupReceivePayment(item.wallet, (item.item as PortfolioAddress).address);
    }

    popupOfflineAssetDetails(item: PortfolioItemWidget) {

        this.activeAsset = item;
        this.openPopup('offlineAssetDetails', this.offlineAssetWallet.handler.ticker + ' portfolio asset', this.popupOfflineAssets.bind(this, this.offlineAssetWallet));
        (document.getElementById('offlineAssetCoinIcon') as HTMLImageElement).src = 'coins/' + this.offlineAssetWallet.handler.icon + '.svg'

            document.getElementById('offlineAssetIcon').innerHTML = '';
        let icon = (new CoinAddressIcon(item.wallet.handler, PortfolioItem.isAddress(item.item) ? item.item.address : null)).element;
        document.getElementById('offlineAssetIcon').appendChild(icon);

        document.getElementById('offlineAssetName').innerHTML = item.item.label;
        document.getElementById('offlineAssetSubName').innerHTML = this.offlineAssetWallet.handler.ticker + ' portfolio asset';

        document.getElementById('offlineAssetButtons').innerHTML = '';

        if (PortfolioItem.isAddress(item.item)) {
            document.getElementById('offlineAssetButtons').appendChild(ListItemWidget.createButton('receive', 'receive', item.onreceive.bind(item)));
            document.getElementById('offlineAssetButtons').appendChild(item.refreshButton ? item.refreshButton : ListItemWidget.createButton('refresh', 'refresh', null));
        } else {
            document.getElementById('offlineAssetButtons').appendChild(ListItemWidget.createButton('removef', 'remove', item.onremove.bind(item)));
            var spacer = document.createElement('div');
            spacer.className = 'button';
            document.getElementById('offlineAssetButtons').appendChild(spacer);
        }

        document.getElementById('offlineAssetButtons').appendChild(ListItemWidget.createButton('edit', 'edit', item.onedit.bind(item, item)));

        document.getElementById('offlineAssetActions').innerHTML = '';

        if (PortfolioItem.isAddress(item.item)) {
            var advanced = document.createElement('ul');
            advanced.classList.add('advancedActions');
            advanced.appendChild(this.createAdvancedOption('link', 'history (external)', function() {
                OsPlugins.openInSystemBrowser(
                    this.activeAsset.wallet.handler.explorerLinkAddr(
                        (this.activeAsset.item as PortfolioAddress).address
                    )
                );
            }));
            //TODO
            advanced.appendChild(this.createAdvancedOption('import', 'transfer to online wallet', this.showImportPrivateKeyPopup.bind(this, item.wallet.handler, item.item.address)));

            advanced.appendChild(this.createAdvancedOption('remove', 'remove', item.onremove.bind(this)));

            document.getElementById('offlineAssetActions').append(advanced);

            document.getElementById('offlineAssetInfo').innerHTML = '<p>This is an address in your portfolio that you are tracking.</p>' +
                '<p><strong>warning: </strong>Coffee Wallet does not know the private key for this address. Use only if you have it secured.</p>' +
                '<p>addr:&nbsp;<strong>' + (this.activeAsset.item as PortfolioAddress).address + '</strong></p>' +
                '<p>balance:&nbsp;<strong id="offlineAssetInfoBalanceContainer"></strong></p>' +
                '<p>value:&nbsp;<strong id="offlineAssetInfoValueContainer"></strong></p>';

            document.getElementById('offlineAssetInfoBalanceContainer').appendChild(item.amountSpan);
            document.getElementById('offlineAssetInfoValueContainer').appendChild(item.valueSpan);

        } else {
            document.getElementById('offlineAssetInfo').innerHTML = '<p>This is a static balance in your portfolio.</p>' +
                '<p>balance: <strong id="offlineAssetInfoBalanceContainer"></strong></p>' +
                '<p>value: <strong id="offlineAssetInfoValueContainer"></strong></p>';
            document.getElementById('offlineAssetInfoBalanceContainer').appendChild(item.amountSpan);
            //' + asset.data.balance + ' ' + app.offlineAssetWallet.handler.code + '
            document.getElementById('offlineAssetInfoValueContainer').appendChild(item.valueSpan);
        }

    }

    editAsset: boolean
    portfolioEditAddressInput: AddressInputWidget

    popupEditOfflineAsset(item: PortfolioItemWidget) {

        this.activeAsset = item;
        if (PortfolioItem.isAddress(item.item)) {
            document.getElementById('addOfflineAssetAddrDiv').classList.remove('hidden');
            document.getElementById('addOfflineAssetAddrTools').classList.remove('hidden');
            document.getElementById('addOfflineAssetBalanceDiv').classList.add('hidden');
            document.getElementById('addOfflineAssetAddrDiv').innerHTML = ''
            let input = new AddressInputWidget(item.wallet.handler as OnlineCoinHandler);
            document.getElementById('addOfflineAssetAddrDiv').append(input.element)
            this.portfolioEditAddressInput = input;
        } else if(PortfolioItem.isBalance(item.item)) {
            document.getElementById('addOfflineAssetAddrDiv').classList.add('hidden');
            document.getElementById('addOfflineAssetAddrTools').classList.add('hidden');
            document.getElementById('addOfflineAssetBalanceDiv').classList.remove('hidden');
            (document.getElementById('addOfflineAssetBalance') as HTMLInputElement).value = item.item.balance.toString();
            this.portfolioEditAddressInput = null;
        }

        (document.getElementById('addOfflineAssetComment') as HTMLInputElement).value = item.item.label;

        document.getElementById('addOfflineAssetPopupSave').innerHTML = 'save';
        this.editAsset = true;
        this.openForm('addOfflineAssetPopup');
        (document.getElementById('addOfflineAssetPopupIcon') as HTMLImageElement).src = 'coins/' + item.wallet.handler.icon + '.svg';
    }

    popupAddOfflineAsset(type: string) {

        document.getElementById('addOfflineAssetAddrDiv').innerHTML = '';
        if (type == 'address') {
            let input = new AddressInputWidget(this.offlineAssetWallet.handler as OnlineCoinHandler)
            document.getElementById('addOfflineAssetAddrDiv').append(input.element);
            this.portfolioEditAddressInput = input;
        } else {
            this.portfolioEditAddressInput = null;
        }
        (document.getElementById('addOfflineAssetBalance') as HTMLInputElement).value = '';
        (document.getElementById('addOfflineAssetComment') as HTMLInputElement).value = '';
        document.getElementById('addOfflineAssetAddrDiv').classList.toggle('hidden', type == 'balance');
        document.getElementById('addOfflineAssetAddrTools').classList.toggle('hidden', type == 'balance');
        document.getElementById('addOfflineAssetBalanceDiv').classList.toggle('hidden', type == 'address');

        document.getElementById('addOfflineAssetPopupSave').innerHTML = 'add';
        this.editAsset = false;
        this.openForm('addOfflineAssetPopup');
        (document.getElementById('addOfflineAssetPopupIcon') as HTMLImageElement).src = 'coins/' + this.offlineAssetWallet.handler.icon + '.svg';
    }

    popupAddNewAddress() {

        let handler = this.offlineAssetWallet.handler as OnlineCoinHandler
        var coinCode = this.offlineAssetWallet.handler.ticker;
        var coinName = this.offlineAssetWallet.handler.name;
        var randomPriv = handler.newRandomPrivateKey();
        var randomAddr = handler.addressFromPrivateKey(randomPriv);
        var randomPrivImg = this.generatePngWithQRCode(randomPriv, 350);
        var randomAddrImg = this.generatePngWithQRCode(coinName + ':' + randomAddr, 280);

        var html = '<html><h1>' + coinCode + ' wallet</h1>' +
            '<div style="text-align:right;"><h2>public key (address)</h2><img src="' + randomAddrImg + '"><h3>' + coinName + ':' + randomAddr + '</h3></div>'+
            '<hr/>' +
            '<h2>private key (secret)</h2><img src="' + randomPrivImg + '"><h3>' + randomPriv + '</h3>'+
            '<div style="position:absolute; bottom:0; right:0; text-align:right;">Share the public key to accept coins. <br/>Keep private key secret and safe. It allows your coins to be spent. '+
            '<br/>Generated by Coffee Wallet ' + Version.version + '</div>'+
            '</html>';

        var app = this;

        function proceed(){

            app.offlineAssetWallet.portfolio.push(
                new PortfolioAddress('paper wallet', randomAddr)
            );
            app.engine.saveData();
            //refresh list
            app.popupOfflineAssets(app.offlineAssetWallet);
            app.confirmBeforeContinue(
                'wallet created',
                '<strong>warning:</strong> Coffee Wallet <strong>does not</strong> store private keys for your portfolio! ' +
                'Use this address <strong>only</strong> after making the pdf you just saved secure. ' +
                'You will be able to spend funds from this wallet as long as you will have access to its private key!',
                function(){}
            );
        }

        OsPlugins.generatePDF(html, coinCode + '-wallet',function(){
            proceed();
        },function(err) {
            app.alertError('error generating pdf wallet ' + err);
        });

    }

    saveOfflineAsset(){

        let item = null;
        if (this.portfolioEditAddressInput) {
            console.log(this.portfolioEditAddressInput);
            if (!this.portfolioEditAddressInput.validate()) {
                return false;
            }
            item = new PortfolioAddress(
                (document.getElementById('addOfflineAssetComment') as HTMLInputElement).value,
                this.portfolioEditAddressInput.getValue()
            )
        } else {
            item = new PortfolioBalance(
                (document.getElementById('addOfflineAssetComment') as HTMLInputElement).value,
                parseFloat((document.getElementById('addOfflineAssetBalance') as HTMLInputElement).value) || 0.0
            )
        }

        var idToUpdate = 0;
        if (this.editAsset) {
            idToUpdate = this.activeAsset.id;
            this.offlineAssetWallet.portfolio[idToUpdate] = item;
        } else {
            idToUpdate = this.offlineAssetWallet.portfolio.length
            this.offlineAssetWallet.portfolio.push(item);
        }
        this.engine.saveData();

        this.closeForm();
        this.popupOfflineAssets(this.offlineAssetWallet, idToUpdate);
    }

    generatePngWithQRCode(text: string, size: number) {
        var tmpElement = document.createElement('div');
        var qrcode = new (window as any).QRCode(tmpElement, {
            text: text,
            width: size,
            height: size,
            colorDark : "#000000",
            colorLight : "#ffffff"
        });
        return qrcode._oDrawing._elCanvas.toDataURL("image/png");
    }

    dataLoaded : boolean = false
    onDataLoadedCallback : (next: () => void) => void = null

    onDataLoaded(callback: (next: () => void) => void = null) {
        if (typeof callback == 'undefined') {
            this.dataLoaded = true;
            if (this.onDataLoadedCallback) {
                this.onDataLoadedCallback(function(){
                    //app.initAirdrop();
                });
            } else {
                //app.initAirdrop();
            }
        } else {
            //TODO chain:
            if (this.dataLoaded) {
                callback(function() {

                });
            } else {
                this.onDataLoadedCallback = callback;
            }
        }
    }

    handleUrlOpened(url: string, callback: () => void) {
        var parts = url.split('/');
        //TODO
        /*
        if (parts.length == 4 && parts[0] == 'coffee:' && !parts[3].startsWith('?')) {
            this.handleReceiveMessage(parts[2], parts[3], callback);
        } else {
            //ignore callback not to show airdrop info on url open different than receive via msg.
            this._parseTransactionText(url, this.handlePaymentURI.bind(this));
        }*/
    }

    netError: boolean = false

    setNoNetError() {
        this.netError = true;
        document.getElementById('refresh').classList.add('error');
    }

    updateAllValues() {
        var totalOnline = 0;
        var totalOffline = 0;
        var orders : {key: string, sortby:number}[] = [];
        for (let key in this.walletsWidgets) {
            var walletOnline = this.walletsWidgets[key].updateOnlineValue();
            var walletOffline = this.walletsWidgets[key].updateOfflineValue();
            totalOnline += walletOnline;
            totalOffline += walletOffline;
            orders.push({
                key:key,
                sortby:walletOnline + walletOffline
            });
        }
        orders.sort(function(a, b) {
            return a.sortby - b.sortby;
        });
        for (var i = orders.length - 1; i >= 0; i--) {
            var row = this.walletsWidgets[orders[i].key].element;
            row.parentNode.appendChild(row);
        }
        document.getElementById('grandTotal').innerHTML = this.engine.priceProvider.formatMoney(totalOnline + totalOffline);
        document.getElementById('totalOnline').innerHTML = this.engine.priceProvider.formatMoney(totalOnline);
    }

    showExportPrivateKeyPopup(wallet: Wallet) {
        let app = this;
        this.authenticateBeforeContinue(
            'See your ' + wallet.handler.ticker + ' Private Key',
            'Are you sure you want to see your private key? It gives full access to your ' + wallet.handler.ticker + ' online wallet. '
            + 'Keep it safe.',
            function() {
                let pk = (wallet.handler as OnlineCoinHandler).getPrivateKey(app.engine.keychain).privateKey.toString('hex');
                app.confirmBeforeContinue(
                    'your ' + wallet.handler.ticker + ' private key',
                    pk,
                    function() {},
                    'done'
                );
            }
        );
    }

    toggleAll(className: string, show: boolean) {
        var elements = document.getElementsByClassName(className);
        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.toggle('hidden', !show);
        }
    }

    importingHandler: OnlineCoinHandler
    importingAddress: string

    showImportPrivateKeyPopup(handler: OnlineCoinHandler, address: string) {
        this.openForm('importPrivateKeyPopup');
        (document.getElementById("importPrivateKeyIcon") as HTMLImageElement).src = 'coins/' + handler.icon + '.svg';
        this.importingHandler = handler;
        this.importingAddress = address;
        (document.getElementById('importPrivateKeyInput') as HTMLInputElement).value = '';
    }

    importPrivateKey() {
        var pk = (document.getElementById('importPrivateKeyInput') as HTMLInputElement).value;
        var addr = this.importingHandler.addressFromPrivateKey(pk);
        var valid = this.importingHandler.validateAddress(addr);

        if (this.importingAddress && (this.importingAddress != addr)) {
            this.alertInfo('warning: this seems to be Private Key for a different wallet');
        }
        document.getElementById('loading').classList.add('show');
        /* TODO
        app.importingHandler.getBalance(addr, function(balance, unconfirmed){
            document.getElementById('loading').classList.remove('show');
            if (app.importingHandler.systemValuesCompare(0, balance) == 0) {
                app.alertError('<strong>warning:</strong> This wallet is empty.');
            }
            if (app.importingHandler.systemValuesCompare(0, unconfirmed) != 0) {
                app.alertError('<strong>warning:</strong> This wallet contains unconfirmed balance. Transaction can fail.');
            }
            var wallet = {
                handler: app.importingHandler,
                data: {
                    coin: app.importingHandler.code,
                    privateKey: pk,
                    addr : addr
                }
            };
            app.popupSendPayment(wallet, balance);
            document.getElementById('sendCoinAddr').value =
                app.wallets[app.importingHandler.code].data.addr;
            app.validateAddr('sendCoinAddr');

        }, function(error) {
            document.getElementById('loading').classList.remove('show');
            app.alertError(error);
        });*/
    }

    showExportKeysReminderIfRequired(callback: () => void) {
        if (this.engine.settings.get('keyBackedUp', false)) {
            return callback();
        }
        var counter = this.engine.settings.get('keyBackedUpReminderCounter', 0);
        counter ++;
        if (counter > 2) counter = 0;
        this.engine.settings.set('keyBackedUpReminderCounter', counter);
        if (counter == 0) {
            this.confirmBeforeContinue(
                'backup your keys',
                '<p>All your private keys are generated from a <b>12-word BIP39 phrase</b>. It is extremely important that you <b>backup</b> this phrase safely.</p>' +
                '<p>This reminder will keep showing up until you use <b>"backup wallets"</b> menu option.</p>',
                callback
            );
        } else {
            callback();
        }
    }

    exportAllKeys() {

        var mnemonicParts = this.engine.keychain.mnemonic.split(' ');
        var mnemonicMessage = '<ol class="mnemonic">';
        for (var i =0; i<mnemonicParts.length; i++) {
            mnemonicMessage += '<li><span>' + mnemonicParts[i] + '</span></li>';
        }
        mnemonicMessage += '</ol>';
        let app = this;
        this.authenticateBeforeContinue(
            'Backup Wallets',
            'On the next screen, you will see your 12-word BIP39 recovery passphrase. It might be used to recover your keys if you loose access to this device. <br/><ul>' +
            '<li>Don\'t show your mnemonic to anyone.</li>' +
            '<li>Do not take a screenshot.</li>' +
            '<li>Do not send it over unencrypted network.</li>' +
            '<li>Write it down and store in a secure location.</li></ul>',
            function() {
                app.confirmBeforeContinue(
                    'your backup phrase',
                    mnemonicMessage,
                    app.validateMnemonicBackup.bind(app, null),
                    'done',
                    'remind&nbsp;later'
                );
            }
        );
    }

    validateMnemonicBackup(invalidMnemonic: string = null) {
        var input = document.createElement("textarea");
        input.id = input.name = "mnemonic";
        (input as HTMLTextAreaElement).rows = 3;
        let app = this;
        this.confirmBeforeContinue(
            'Backup Wallets',
            '<p>To make sure you have properly backed up your mnemonic. Please enter the recovery phrase you just backed up below.</p>',
            function() {
                var mnemonic = input.value.split(' ').map(function(e){ return e.trim().toLowerCase();}).filter(function (e) {return e != '';}).join(' ');
                if (app.engine.validateMnemonic(mnemonic) && (app.engine.keychain.mnemonic == mnemonic)) {
                    app.engine.settings.set('keyBackedUp', true);
                    app.alertInfo('mnemonic successfully backed up');
                } else {
                    app.validateMnemonicBackup(mnemonic);
                }
            },
            'confirm',
            'remind&nbsp;later'
        );
        document.getElementById('lockMessage').appendChild(input);
        if (invalidMnemonic) {
            input.value = invalidMnemonic;
            var div = document.createElement("div");
            div.className = "red";
            div.innerHTML = "this phrase is invalid or it is not your mnemonic!";
            document.getElementById('lockMessage').appendChild(div);
        }
    }

    addOrActivateCoin(code: string, callback: ()=>void) {
        let app = this;
        if (code in this.walletsWidgets) {
            this.walletsWidgets[code].setActive(true);
            callback();
        } else if (code in this.engine.allCoinHandlers) {
            this.engine.addWallet(code, []);
            this.engine.saveData().then(function(){
                let widget = app.addWalletWidget(app.engine.wallets[code]);
                app.walletsWidgets[code] = widget;
                widget.setActive(true);
                callback();
            });
        } else {
            app.alertError('unknown coin ' + code);
        }
    }

    exchangeProviderSelect: SelectWidget
    exchangeSellCoinSelect: SelectWidget
    exchangeBuyCoinSelect: SelectWidget
    exchangeSellAmount: AmountInputWidget
    exchangeBuyAmount: AmountInputWidget

    doExchange() {
        //TODO!!!!!
        var provider = this.engine.allExchangeProviders[this.exchangeProviderSelect.getValue()];

        var sellCoin = this.exchangeSellCoinSelect.getValue();
        var sellAmount = this.exchangeSellAmount.getValue();
        var buyCoin = this.exchangeBuyCoinSelect.getValue();
        var buyAmount = this.exchangeBuyAmount.getValue();
        //var fee = app.exchangeDefaultFees[provider.key + sellCoin];
        console.log(sellCoin, sellAmount, buyCoin, buyAmount);

        provider.createTransaction(sellCoin, buyCoin, sellAmount, this.engine.wallets[buyCoin].getReceiveAddress()).then(
            this.confirmAndSendTransaction.bind(this)
        ).catch(
            this.alertError.bind(this)
        );


        /*var onTransactionSuccess = function () {
            app.closePopup();
            setTimeout(function() { app.wallets[sellCoin].refreshOnline(); }, 3000);
            setTimeout(function() { app.alertInfo('Please refresh your ' + buyCoin + ' balance in few minutes.', buyCoin); }, 4000);
        };
        provider.createTransaction(
            sellCoin,
            buyCoin,
            app.engine.wallets[sellCoin].handler.systemValueToFloatValue(sellAmmount),
            app.engine.wallets[buyCoin].getReceiveAddress(),
            function(ret){
                if ('payinAddress' in ret) {
                    app.alertInfo( provider.name + ' exchange id ' + ret.id + ' started.', sellCoin, ret);

                    app.authenticateBeforeContinue(
                        '<table class="transactionSummary">' +
                        '<tr class="first"><td><img class="coinIcon" src="coins/' + app.wallets[sellCoin].handler.icon + '.svg"/></td><td><img style="width:65%" src="icons/sendglyph.png"/></td><td><img class="coinIcon" src="coins/' + app.wallets[buyCoin].handler.icon + '.svg"/></td></tr>' +
                        '<tr class="second"><td>' + app.engine.shortAmount(displaySellAmount, sellCoin, 13) + '</td><td></td><td>' + app.engine.shortAmount(buyAmmount, buyCoin, 13) + '</td></tr>' +
                        '</table>',
                        '<table class="niceTable">' +
                        '<tr><th colspan="2" style="width:26%;">payinAddress:</th></tr><tr><td colspan="2">' + ret.payinAddress + '</td></tr>' +
                        '<tr><th colspan="2">amount:</th></tr><tr><td style="width:50%;">' + displaySellAmount + ' ' + sellCoin + '</td><td>' + app.engine.priceProvider.convert(app.wallets[sellCoin].handler.systemValueToFloatValue(sellAmmount), sellCoin) + '</td></tr>' +
                        '<tr><th colspan="2">fee:</th></tr><tr><td>' + app.wallets[sellCoin].handler.getFeeDisplay(fee) + '</td><td>' + app.wallets[sellCoin].handler.getFeeValueDisplay(fee) + '</td></tr>' +
                        '<tr><th colspan="2">estimated return:</th></tr><tr><td>' + (buyAmmount) + ' ' + buyCoin + '</td><td>' + app.engine.priceProvider.convert(buyAmmount, buyCoin) + '</td></tr>' +
                        '<tr><th colspan="2">' + provider.name + ' ID:</th></tr><tr><td colspan="2">' + ret.id + '</td></tr>' +
                        '</table>'
                        ,
                        function(){
                            app.wallets[sellCoin].handler.sendPayment(app.wallets[sellCoin].data.privateKey, ret.payinAddress, sellAmmount, fee);
                            onTransactionSuccess();
                        }
                    );
                } else {
                    //provider handled transaction in a custom way
                    onTransactionSuccess();
                }
            }
        );*/
    }

    /*
    updateExchange: function(force) {
        var provider = allExchangeProviders[app.exchangeProviderSelect.getValue()];
        if ((provider.key != app.lastExchangeProvider) || ((typeof force != 'undefined') && force)) {
            document.getElementById("exchangeShortDescription").innerHTML = provider.shortDescription;
            document.getElementById("exchangeLink").innerHTML = '<a href="#" onclick="OsPlugins.openInSystemBrowser(\'' + provider.url + '\');">' + provider.url + '</a>';
            document.getElementById("exchangeIcon").src = 'img/exchanges/' + provider.key + '.png';

            (new Select(document.getElementById("exchangeSellCoin"))).setOptions({}, null);
            (new Select(document.getElementById("exchangeBuyCoin"))).setOptions({}, null);
            app.lastExchangeProvider = provider.key;
            app.getExchangeableCoins(provider, function(currencies){
                var available = {'':{'name': '- please select -'}};
                for (var i in currencies) {
                    if (currencies[i] in app.wallets) {
                        available[currencies[i]] = {'name': currencies[i]};
                    }
                }
                (new Select(document.getElementById("exchangeSellCoin"))).setOptions(available, sellCoin);
                (new Select(document.getElementById("exchangeBuyCoin"))).setOptions(available, buyCoin);
                app.updateExchange();
            });
        }

        var sellCoin = document.getElementById("exchangeSellCoin").value;
        var sellAmmount = document.getElementById("exchangeSellAmmount").value;
        var buyCoin = document.getElementById("exchangeBuyCoin").value;

        var fee = null;

        if (sellCoin) {
            var feeCacheKey = provider.key + sellCoin;
            if (feeCacheKey in app.exchangeDefaultFees) {
                fee = app.exchangeDefaultFees[feeCacheKey];
                document.getElementById("exchangeSellFee").innerHTML = provider.getFeeDisplay(sellCoin, fee);
            } else {
                document.getElementById("exchangeSellFee").innerHTML = 'pending...';
                provider.getFeeEstimate(sellCoin, function(fee){
                    app.exchangeDefaultFees[feeCacheKey] = fee;
                    app.updateExchange();
                });
            }
            //TODO system value
            var maxSell = app.wallets[sellCoin].data.balance - (fee === null ? 0 : app.engine.wallets[sellCoin].handler.estimateFeeFloat(fee));
            document.getElementById("exchangeSellMax").textContent = maxSell > 0 ? maxSell : 0;
            document.getElementById("exchangeSellValue").innerHTML = app.engine.priceProvider.convert(sellAmmount, app.engine.wallets[sellCoin]);
        } else {
            document.getElementById("exchangeSellMax").textContent = '';
            document.getElementById("exchangeSellValue").textContent = '';
            document.getElementById("exchangeSellFee").textContent = '';
        }

        var goodPair = sellCoin && buyCoin && (sellCoin != buyCoin);
        if (goodPair) {
            var minKey = sellCoin + '#' + buyCoin;
            if (minKey in app.exchangeMinAmmounts[provider.key]) {
                document.getElementById("exchangeSellMin").textContent = app.exchangeMinAmmounts[provider.key][minKey];
            } else {
                document.getElementById("exchangeSellMin").textContent = '';
                provider.getMinAmount(sellCoin, buyCoin, function(ret){
                    app.exchangeMinAmmounts[provider.key][minKey] = ret;
                    document.getElementById("exchangeSellMin").textContent = app.exchangeMinAmmounts[provider.key][minKey];
                });
            }
        } else {
            document.getElementById("exchangeSellMin").textContent = '';
        }

        if (goodPair && (sellAmmount > 0)) {
            provider.estimateExchangeAmount(
                sellCoin,
                buyCoin,
                parseFloat(sellAmmount),
                function(ret){
                    document.getElementById("exchangeBuyAmmount").value = ret;
                    document.getElementById("exchangeBuyValue").innerHTML = app.engine.priceProvider.convert(ret, app.engine.wallets[buyCoin]);
                }
            );
        } else {
            document.getElementById("exchangeBuyAmmount").value = 0;
            document.getElementById("exchangeBuyValue").textContent = '';
        }
        document.getElementById("exchangeButton").disabled = !(goodPair && (sellAmmount > 0) && (fee !== null));
    },
    */

    popupExchange(providerKey: string, sellCoinCode: string, buyCoinCode: string) {

        this.exchangeProviderSelect = new SelectWidget(this.exchangeSetProvider.bind(this));
        this.setWidget('exchangeProvider', this.exchangeProviderSelect);


        var includeTestCoins = this.engine.settings.testCoinsEnabled();
        var availableProviders : { [key:string]: BaseExchangeProvider } = {};
        //this.exchangeDefaultFees = {};
        //this.exchangeMinAmmounts = {};

        for (var key in this.engine.allExchangeProviders) {
            if (includeTestCoins || (this.engine.allExchangeProviders[key].testNet === false)) {
                availableProviders[key] = this.engine.allExchangeProviders[key];
            }
            //this.exchangeMinAmmounts[i] = {};
        }
        this.exchangeProviderSelect.setOptions(availableProviders, providerKey ? providerKey : null);




        /*this.exchangeSellAmount = new AmountInputWidget(function(value){

        });
        this.setWidget('exchangeProvider', this.exchangeProviderSelect);*/

        /*document.getElementById("exchangeSellAmmount").value = 0;*/
        this.openPopup('exchangePopup', 'Exchange');
        this.exchangeSetProvider(providerKey);
        //app.settings.set('airdropTaskExchange', true);
    }

    exchangeSetProvider(providerKey: string) {
        console.log("SWITCHING PROVIDER:", providerKey);
        console.log(this.exchangeableCoinsCache);
        console.log(this.exchangeableCoinsCache[providerKey]);


        this.exchangeSetSellCoin(null);
        this.exchangeSetBuyCoin(null);
    }

    exchangeSetSellCoin(sellCoin: string) {
        console.log("SWITCHING SELL COIN:", sellCoin);
        let providerKey = this.exchangeProviderSelect.getValue()
        let currentBuyCoin = this.exchangeBuyCoinSelect ? this.exchangeBuyCoinSelect.getValue() : null;
        this.exchangeBuyCoinSelect = new SelectWidget(this.exchangeSetBuyCoin.bind(this), true);
        this.setWidget('exchangeBuyCoin', this.exchangeBuyCoinSelect);
        let options = this.exchangeableCoinsCache[providerKey].slice();
        options.splice( options.indexOf(sellCoin),1)
        this.exchangeBuyCoinSelect.setOptions(options, currentBuyCoin);

        //
        if (sellCoin in this.engine.allCoinHandlers) {
            this.exchangeSellAmount = new AmountInputWidget(this.engine.allCoinHandlers[sellCoin], this.engine.priceProvider);
            this.setWidget('exchangeSellAmount', this.exchangeSellAmount);
        }
    }

    exchangeSetBuyCoin(buyCoin: string|null) {
        console.log("SWITCHING BUY COIN:", buyCoin);
        let providerKey = this.exchangeProviderSelect.getValue()
        let currentSellCoin = this.exchangeSellCoinSelect ? this.exchangeSellCoinSelect.getValue() : null;
        this.exchangeSellCoinSelect = new SelectWidget(this.exchangeSetSellCoin.bind(this), true);
        this.setWidget('exchangeSellCoin', this.exchangeSellCoinSelect);
        let options = this.exchangeableCoinsCache[providerKey].slice();
        options.splice( options.indexOf(buyCoin),1)
        this.exchangeSellCoinSelect.setOptions(options, currentSellCoin);

        if (buyCoin in this.engine.allCoinHandlers) {
            this.exchangeBuyAmount = new AmountInputWidget(this.engine.allCoinHandlers[buyCoin], this.engine.priceProvider);
            this.setWidget('exchangeBuyAmount', this.exchangeBuyAmount);
        }
    }

    cancelSentViaMessage(coin: string, pk: string) {
        this.confirmBeforeContinue(
            'Revert sent coins',
            'Are you sure you want to REVERT this? Recipients of message will no longer be able to redeem those coins. They will be transfered back to your wallet',
            this.handleReceiveMessage.bind(this, coin, pk),
            'revert',
            'cancel'
        );
    }

    popupSendViaMessage() {
        this.openPopup('sendViaMessagePopup', 'send via message');
        //app.settings.set('airdropTaskSendViaMessage', true);
        this.logger.getLogs(function(logs){
            if (logs.length > 0){
                document.getElementById('sendViaMessageHistory').innerHTML = '';
                for (var i=0; i< logs.length; i++) {
                    var tr = document.createElement('tr');
                    var cancelLinkHtml = '<a href="#" onclick="app.cancelSentViaMessage(\'' + logs[i].data.coin + '\',\'' + logs[i].data.pk + '\');">CANCEL</a>';
                    var resendLinkHtml = '<a href="#" onclick="app.sendSocialPaymentShare(\'' + logs[i].data.coin + '\', \'\', \'' + logs[i].data.pk + '\');">RESEND</a>';

                    tr.innerHTML = '<td>' + (new Date(logs[i].ts)).toUTCString()  + '</td><td>'
                        + logs[i].description + '</td><td>'
                        + cancelLinkHtml + '&nbsp;' + resendLinkHtml + '</td>';
                    document.getElementById('sendViaMessageHistory').appendChild(tr);
                }
            }
        }, 'sendasmessage');
        //coin shortcuts
        document.getElementById('sendViaMessageButtons').innerHTML = '';
        var empty = true;
        let app = this;
        for (var coin in this.walletsWidgets){
            if (this.walletsWidgets[coin].wallet.canSendViaMessage()) {
                empty = false;
                document.getElementById('sendViaMessageButtons').appendChild(
                    (new CoinButtonWidget(
                        coin,
                        this.walletsWidgets[coin].wallet.handler,
                        false,
                        function(coin, handler) {
                        if (app.walletsWidgets[coin].onlineBalance.total().isZero()) {
                            app.alertInfo('Can\'t sent via message. Wallet is empty.', coin);
                        } else {
                            app.popupSendSocial(app.walletsWidgets[coin].wallet);
                        }
                    }
                    )).element
                );
            }
        }
        if (empty) {
            document.getElementById('sendViaMessageButtons').innerHTML = 'You have no coins that can be sent via message.';
        }
    }

    filterAddCoinPopup() {
        var query = (document.getElementById('addCoinFilter') as HTMLInputElement).value.toUpperCase();
        var includeTestCoins = this.engine.settings.testCoinsEnabled();
        var onlySupported = (document.getElementById('addCoinOnlySupported') as HTMLInputElement).checked;
        var limit = 24;
        var allCoins = document.getElementById('allCoins');
        while (allCoins.firstChild) { allCoins.removeChild(allCoins.firstChild); }
        let app = this;
        for (var i=0;i<this.searchCoinsIndex.length; i++){
            var coin = this.searchCoinsIndex[i];
            var show = coin.search.indexOf(query) != -1;
            if (onlySupported) show = show && this.engine.isOnline(this.engine.allCoinHandlers[coin.code]);
            if (!includeTestCoins) show = show && (!(this.engine.allCoinHandlers[coin.code].testCoin));
            if (show) {
                limit --;
                if (limit >= 0) {
                    if (!(this.searchCoinsIndex[i].button)) {
                        this.searchCoinsIndex[i].button = new CoinButtonWidget(
                            coin.code,
                            this.engine.allCoinHandlers[coin.code],
                            coin.code in this.walletsWidgets,
                            function(code, handler){
                                app.closePopup();
                                setTimeout(function(){
                                    app.addOrActivateCoin(code, function(){});
                                }, 100);
                            }
                        );
                    }
                    allCoins.appendChild(this.searchCoinsIndex[i].button.element);
                }
            }
        }
        if (limit == 24) {
            document.getElementById('moreCoins').innerHTML = 'No coins found for given query.';
        } else if (limit >= 0) {
            document.getElementById('moreCoins').innerHTML = '';
        } else {
            document.getElementById('moreCoins').innerHTML = '' + -limit + ' more coins matches.<br/> Please enter more specific query.';
        }
    }
    popupGenerated = false
    searchCoinsIndex: { code: string, search:string, button?: CoinButtonWidget}[] = [];

    generateAddCoinPopup() {
        if (!this.popupGenerated) {
            this.popupGenerated = true;
            document.getElementById('addCoinFilter').onkeyup = this.filterAddCoinPopup.bind(this);
            document.getElementById('addCoinFilter').onchange = this.filterAddCoinPopup.bind(this);
            document.getElementById('addCoinOnlySupported').onchange = this.filterAddCoinPopup.bind(this);

            for (var code in this.engine.allCoinHandlers) {
                this.searchCoinsIndex.push({
                    'code': code,
                    'search': (this.engine.allCoinHandlers[code].ticker + ' ' + this.engine.allCoinHandlers[code].name).toUpperCase()
                });
            }
        }
        this.filterAddCoinPopup();
    }

    popupAddCoin() {
        this.openPopup('addCoinPopup', 'add cryptos');
        setTimeout(this.generateAddCoinPopup.bind(this), 100);
    }

    popupHelp() {
        this.openPopup('helpPopup', 'Help');
        document.getElementById('helpPopupVersion').innerHTML =
            'version <strong>' + Version.version + '</strong> for <strong>' + OsPlugins.getPlatformName() + '</strong>';
    }

    priceProviderSelect : SelectWidget
    priceUnitSelect : SelectWidget

    popupSettingsUpdateUnits(value:string) {
        this.priceUnitSelect.setOptions(this.engine.allPriceProviders[value].availableUnits, this.engine.priceProvider.unit);
    }

    popupSettings() {
        this.openPopup('settingsPopup', 'Settings');
        if (this.priceProviderSelect == null) {

            this.priceProviderSelect = new SelectWidget(this.popupSettingsUpdateUnits.bind(this));
            document.getElementById('priceProviderSlot').append(this.priceProviderSelect.element);
            this.priceProviderSelect.setOptions(this.engine.allPriceProviders, this.engine.priceProvider.name);
            this.priceUnitSelect = new SelectWidget(function(){});
            document.getElementById('priceUnitSlot').append(this.priceUnitSelect.element);
            this.popupSettingsUpdateUnits(this.engine.priceProvider.name);
        }

        this.priceProviderSelect.setValue(this.engine.priceProvider.name);
        this.priceUnitSelect.setValue(this.engine.priceProvider.unit);
        (document.getElementById('settingsEnableTestCoins') as HTMLInputElement).checked = this.engine.settings.testCoinsEnabled();
    }

    saveSettings() {
        this.closePopup();
        this.engine.settings.setTestCoinsEnabled((document.getElementById('settingsEnableTestCoins')as HTMLInputElement).checked);
        this.engine.setPriceProvider(
            this.priceProviderSelect.getValue(),
            this.priceUnitSelect.getValue()
        );
        this.updatePricesFromProvider();
    }

    handlePaymentURI(uri: PaymentURI) {

        if ('escrowPrivateKey' in uri.args) {
            return this.handleReceiveMessage(uri.args.coinCode, uri.args.escrowPrivateKey, null);
        }

        if (!uri.args.coin && uri.args.coinCode && (uri.args.coinCode in this.engine.allCoinHandlers)) {
            uri.args.coin = Strings.slugify(this.engine.allCoinHandlers[uri.args.coinCode].name);
        }
        if (!uri.args.coin) {
            this.alertError('unknown coin');
            return;
        }

        this.alertInfo('detected ' + uri.args.coin + ' address');
        for (var key in this.walletsWidgets) {
            if (Strings.slugify(this.walletsWidgets[key].wallet.handler.name) == uri.args.coin) {
                if (this.walletsWidgets[key].wallet.isOnline()) {
                    this.popupSendPayment(this.walletsWidgets[key].wallet, null);
                    this.pasteToSendForm(uri);
                } else {
                    this.alertError(uri.args.coin + ' payemnts are not yet supported');
                }
                return;
            }
        }
        this.alertInfo(uri.args.coin + ' is not in your active wallets or is unknown');
    }

    pasteToSendForm(uri: PaymentURI) {
        // TODO:
        // var afterSendCallback = ('callback' in args ? args['callback'] : null);

        if (uri.args.coin) {
            if (Strings.slugify(this.sendWallet.handler.name) != uri.args.coin) {
                this.alertInfo('Warning: This seems like a ' + uri.args.coin + ' address but you are sending ' + this.sendWallet.handler.name + '!');
            }
        }
        this.sendAddressInputWidget.setValue(uri.address)
        this.sendAddressInputWidget.validate()

        if ('amount' in uri.args && uri.args.amount){
            this.sendAmountInputWidget.setValue(uri.args.amount)
            this.sendAmountInputWidget.validate()
        }
    }

    pasteAnyClipboard() {
        this.pasteClipboard(this.handlePaymentURI.bind(this));
    }
    scanAnyQrCode() {
        this.scanQrCode(this.handlePaymentURI.bind(this));
    }

    pasteClipboard(callback: (uri: PaymentURI) => void) {
        var that = this;
        OsPlugins.pasteFromClipboard(function(text){
            PaymentURI.fromString(text).then(callback);
        });
    }

    scanQrCode(callback: (uri: PaymentURI) => void) {
        OsPlugins.scanQRCode(
            function (result: string) {
                PaymentURI.fromString(result).then(callback);
            },
            function (error:string) {
                this.alertError("QR scan failed: " + error);
            }.bind(this)
        );
    }

    /*
    pasteToField(field: string, addr: string, args: any) {
        (document.getElementById(field) as HTMLInputElement).value = addr;
    }
    */

    popupSendSocial(wallet: Wallet) {
        //TODO
        /*
        this.popupSendPayment(wallet, wallet.data.systemBalance);
        this.toggleAll('normalSend', false);
        this.toggleAll('socialSend', true);
        */
    }

    setWidget (slotId:string, widget: Widget) {
        document.getElementById(slotId).innerHTML = '';
        document.getElementById(slotId).append(widget.element);
    }

    sendWallet: Wallet
    sendAmountInputWidget: AmountInputWidget
    sendAddressInputWidget: AddressInputWidget
    sendFeeInputWidget: SliderInputWidget
    afterSendCallback: () => void
    sendOutgoingTransaction: NewTransaction = null

    popupSendPayment(wallet: Wallet, afterSendCallback: () => void) {
        this.openForm('sendPaymentPopup');

        this.sendOutgoingTransaction = null;
        (document.getElementById('sendPaymentIcon') as HTMLImageElement).src = 'coins/' + wallet.handler.icon + '.svg';
        this.toggleAll('normalSend', true);
        this.toggleAll('socialSend', false);

        this.sendAmountInputWidget = new AmountInputWidget(wallet.handler, this.engine.priceProvider)
        this.setWidget('sendCoinAmountInput', this.sendAmountInputWidget);
        this.sendAmountInputWidget.onchange = this.sendCoinUpdateTransaction.bind(this);
        delete this.sendFeeInputWidget;
        this.sendFeeInputWidget = new SliderInputWidget(this.sendCoinUpdateTransaction.bind(this))
        this.setWidget('sendCoinFeeDiv', this.sendFeeInputWidget);

        //TODO wallet.getCachedBalance().total().toFloat(wallet.handler.decimals)
        //this.sendMaxBalance = (typeof sendMaxBalance == 'undefined') ? null : sendMaxBalance;
        //app.sendForceTotal = null;
        this.afterSendCallback = (typeof afterSendCallback == 'undefined') ? null : afterSendCallback;
        this.sendAddressInputWidget = new AddressInputWidget(wallet.handler as OnlineCoinHandler, 'recipient address')
        this.setWidget('sendCoinAddrDiv', this.sendAddressInputWidget);
        this.sendWallet = wallet;

        document.getElementById('sendCoinFeeInfo').classList.add('default');
        //document.getElementById('sendCoinBalanceAfter').classList.toggle('default', typeof sendMaxBalance != 'undefined');

        this.sendCoinUpdateTransaction();

        let app = this;
        (wallet.handler as OnlineCoinHandler).getFeeOptions().then(function(fees){
            //TODO race condition here
            app.sendFeeInputWidget.setOptions(fees);
            app.sendCoinUpdateTransaction();
        });
    }

    sendCoinSetMax() {
        console.log(this.sendWallet.getCachedBalance().total().toFloat(this.sendWallet.handler.decimals))
        /*
        if (app.sendMaxBalance) {
            app.sendForceTotal = app.sendMaxBalance;
            document.getElementById('sendCoinBalanceAfter').classList.remove('default');
            document.getElementById('sendCoinAmount').readOnly = true;
            document.getElementById('sendCoinValue').readOnly = true;
            document.getElementById('sendCoinAmount').value = app.sendWallet.handler.systemValueToDisplayValue(app.sendForceTotal);
            app.coinUpdateValue('sendCoin', app.sendWallet.handler);
            app.sendCoinValidateAmount('sendCoin');
            app.sendCoinUpdateTransaction();
        }*/
    }

    sendCoinUpdateBalanceAfter(){
        /*var balanceAfter = '?';
        var hasError = false;
        if (this.sendWallet && (app.sendMaxBalance !== null)) {

            var systemBalanceAfter = app.sendMaxBalance;
            if (document.getElementById('sendCoinAmount').value) {
                var systemAmount = app.sendWallet.handler.floatValueToSystemValue(parseFloat(document.getElementById('sendCoinAmount').value));
                systemBalanceAfter = this.sendWallet.handler.systemValuesDiff(systemBalanceAfter, systemAmount);
            }
            if (this.sendFees && (document.getElementById('sendCoinFee').value in this.sendFees)) {
                var fee = this.sendFees[document.getElementById('sendCoinFee').value];
                if (!('feeCoin' in this.sendWallet.handler)) {
                    systemBalanceAfter = this.sendWallet.handler.systemValuesDiff(systemBalanceAfter, this.sendWallet.handler.getFeeTotalCost(fee));
                }
            }
            balanceAfter = this.sendWallet.handler.systemValueToDisplayValue(systemBalanceAfter);
            hasError = this.sendWallet.handler.systemValueToFloatValue(systemBalanceAfter) < 0;
            balanceAfter = balanceAfter + '&nbsp;(' + app.engine.priceProvider.convert(app.sendWallet.handler.systemValueToFloatValue(systemBalanceAfter), this.sendWallet.handler) + ')';
        }
        document.getElementById('balanceAfter').classList.toggle('red', hasError);
        document.getElementById('balanceAfter').innerHTML = balanceAfter;*/
    }

    sendCoinUpdateTransaction(){
        console.log("PREPARING");
        this.sendOutgoingTransaction = null
        //
        let fee = this.sendFeeInputWidget.getValue();
        let address = this.sendAddressInputWidget.getValue();
        let amount = this.sendAmountInputWidget.getBigNumValue(this.sendWallet.handler.decimals);
        amount = amount ? amount : new BigNum("0");
        console.log(address, amount, fee);
        let app = this;
        this.sendWallet.prepareTransaction(address, amount, fee).then(function (transaction) {
            console.log("PREPARED");
            console.log(transaction);
            document.getElementById('feeAmount').innerHTML = transaction.getFeeDisplay();
            document.getElementById('feeTime').innerHTML = transaction.getFeeETA();
            app.sendOutgoingTransaction = transaction
        })
    }

    sendCoinUpdateFee(){
        /*app.sendCoinUpdateBalanceAfter();
        if (this.sendFees && (document.getElementById('sendCoinFee').value in this.sendFees)) {
            var fee = this.sendFees[document.getElementById('sendCoinFee').value];
            if (app.sendForceTotal) {
                if ('feeCoin' in this.sendWallet.handler) {
                    document.getElementById('sendCoinAmount').value = this.sendWallet.handler.systemValueToDisplayValue(
                        app.sendForceTotal
                    );
                } else {
                    document.getElementById('sendCoinAmount').value = this.sendWallet.handler.systemValueToDisplayValue(
                        this.sendWallet.handler.systemValuesDiff(app.sendForceTotal, this.sendWallet.handler.getFeeTotalCost(fee))
                    );
                }
                app.coinUpdateValue('sendCoin', app.sendWallet.handler);
                app.sendCoinValidateAmount('sendCoin');
            }
            document.getElementById('feeAmount').innerHTML =
                this.sendWallet.handler.getFeeDisplay(fee) + '&nbsp;(' + this.sendWallet.handler.getFeeValueDisplay(fee) + ')';
            document.getElementById('feeTime').innerHTML = fee[1] + 'min';
        } else {
            document.getElementById('feeAmount').innerHTML = 'unknown';
            document.getElementById('feeTime').innerHTML = 'unknown';
        }*/
    }

    sendPaymendProceed(transaction: NewTransaction) {

        transaction.send();
        /* TODO
                       app.sendWallet.handler.sendPayment(app.sendWallet.data.privateKey, addr, systemAmount, fee, app.afterSendCallback ? function(txid) {
                           app.alertInfo('sending payment notification to: ' + app.afterSendCallback);
                           var http = new XMLHttpRequest();
                           http.open('POST', app.afterSendCallback);
                           var body = [];
                           var data = {
                               'transaction_id': txid,
                               'from_address': app.sendWallet.data.addr,
                               'to_address': addr,
                               'amount': floatAmount,
                               'coin': app.sendWallet.handler.name
                           };
                           for (var d in data) body.push(d + '=' + encodeURIComponent(data[d]));
                           http.onreadystatechange = function() {
                               if ( http.readyState == 4 ) {
                                   app.alertInfo('status: ' + this.status);
                               }
                           }
                           http.send(body.join('&'));

                       } : null);*/
        this.closeForm();
    }

    sendPayment() {
        if (!(this.sendAddressInputWidget.validate() && this.sendAmountInputWidget.validate() && this.sendFeeInputWidget.getValue())) {
            this.alertError('please wait for fees update');
            return;
        }
        this.confirmAndSendTransaction(this.sendOutgoingTransaction);
    }

    confirmAndSendTransaction(transaction: NewTransaction) {
        let summary = transaction.getSummary()
        let tableContent = '';
        for (var label in summary) {
            tableContent += '<tr><th colspan="2">' + label + ':</th></tr><tr><td colspan="2">' + summary[label] + '</td></tr>';
        }
        /*
        var coin = this.sendWallet.handler.ticker;
        var fee = this.sendFeeInputWidget.getValue();
        var addr = document.getElementById('sendCoinAddr').value;

        var systemAmount = 0;
        if (app.sendForceTotal) {
            if ('feeCoin' in app.sendWallet.handler) {
                systemAmount = app.sendForceTotal;
            } else {
                systemAmount = app.sendWallet.handler.systemValuesDiff(app.sendForceTotal, app.sendWallet.handler.getFeeTotalCost(fee));
            }
        } else {
            systemAmount = app.sendWallet.handler.floatValueToSystemValue(parseFloat(document.getElementById('sendCoinAmount').value));
        }
        var floatAmount = app.sendWallet.handler.systemValueToFloatValue(systemAmount);
        var displayAmount = app.sendWallet.handler.systemValueToDisplayValue(systemAmount);
        */
        //app.engine.priceProvider.convert(floatAmount, this.sendWallet.handler) +
        this.authenticateBeforeContinue(
            '<table class="transactionSummary">' +
            '<tr class="first"><td>' + transaction.getLeftIcon() + '</td><td><img style="width:65%" src="icons/sendglyph.png"/></td><td>' +  transaction.getRightIcon() + '</td></tr>' +
            '<tr class="second"><td>' + transaction.getLeftLabel() + '</td><td></td><td>' + transaction.getRightLabel() + '</td></tr>' +
            '</table>',
            '<table class="niceTable">' + tableContent + '</table>',
            this.sendPaymendProceed.bind(this, transaction)
        );
    }

    /*
    sendSocialPaymentShare(coin, displayAmount, tmpPrivateKey) {
        var receiveLink = coin + '/' + tmpPrivateKey; //'coffee://' +
        var subject = displayAmount + ' ' + coin + ' for you!';
        var message = subject + '\n' +
            'To receive ' + displayAmount + ' ' + coin + ' go to:\n' +
            'https://wallet.coffee/receive#' + receiveLink;

        OsPlugins.shareDialog(subject, message, function() {
            app.alertInfo('If you sent the message, recipient will be able to withdraw this transfer.');
        }, function(msg) {
            app.alertError('Sharing failed with message: ' + msg);
        });
    }

    sendSocialPaymentCommit(coin, amount, fee) {

        var tmpPrivateKey = app.sendWallet.handler.newRandomPrivateKey();
        var tmpAddr = app.sendWallet.handler.addrFromPrivateKey(tmpPrivateKey);


        var displayAmount = app.sendWallet.handler.systemValueToDisplayValue(amount);

        Logger.logTransaction('sendasmessage', 'sent ' + displayAmount + ' ' + coin + ' as message', {coin:coin, pk:tmpPrivateKey});

        app.alertInfo('Sending to blockchain escrow...');
        app.sendWallet.handler.sendPayment(app.sendWallet.data.privateKey, tmpAddr, amount, fee);
        app.closeForm();

        app.sendSocialPaymentShare(coin, displayAmount, tmpPrivateKey);
    }

    sendSocialPayment() {

        if (!(this.sendCoinValidateAmount('sendCoin') && this.sendCoinValidateFee())) {
            return;
        }

        var coin = this.sendWallet.handler.code;
        var fee = this.sendFees[document.getElementById('sendCoinFee').value];
        var amount = this.sendWallet.handler.floatValueToSystemValue(parseFloat(document.getElementById('sendCoinAmount').value));
        var displayAmount = app.sendWallet.handler.systemValueToDisplayValue(amount);

        this.confirmBeforeContinue(
            'Warning!',
            '<p>"Send via message" feature is designed only to send <b>tiny ammounts</b> beetween two <b>trusted</b> parties when the receiver does not have a wallet yet.</p>' +
            '<p>It is as safe as the sending medium is. For example, if you are sending via email, everyone that has access to contents of this email (including sender) will be able to withdraw money before the recipient.</p>' +
            '<ul>' +
            '<li>Send only tiny ammounts.</li>' +
            '<li>Advise the recipient to withdraw ASAP.</li>' +
            '<li>Send over encrypted medium if possible.</li>' +
            '<li>Advise the recipient to use regular transfers hereafter.</li>' +
            '</ul>'
            ,
            function(){
                app.authenticateBeforeContinue(
                    '<table class="transactionSummary">' +
                    '<tr class="first"><td><img class="coinIcon" src="coins/' + app.sendWallet.handler.icon + '.svg"/></td><td><img style="width:65%" src="icons/sendglyph.png"/></td><td><img style="width:100%" src="icons/messageglyph.png"/></td></tr>' +
                    '<tr class="second"><td>' + app.engine.shortAmount(displayAmount, coin, 13) + '</td><td></td><td></td></tr>' +
                    '</table>',
                    '<table class="niceTable">' +
                    '<tr><th colspan="2">amount:</th></tr><tr><td style="width:50%;">' + displayAmount + ' ' + coin + '</td><td>' + app.engine.priceProvider.convert(app.sendWallet.handler.systemValueToFloatValue(amount), this.sendWallet.handler) + '</td></tr>' +
                    '<tr><th colspan="2">fee:</th></tr><tr><td>' + app.sendWallet.handler.getFeeDisplay(fee) + '</td><td>' + app.sendWallet.handler.getFeeValueDisplay(fee) + '</td></tr>' +
                    '</table>' +
                    '<p>You will see your device share dialog in next step and will be able to select send medium.</p>' +
                    '<p><strong>Warning:</strong> this feature uses an intermediate, escrow wallet. Recipient of this message will have to pay another network fee to claim it.</p>'
                    ,
                    function(){
                        app.sendSocialPaymentCommit(coin, amount, fee);
                    }
                );
            }
        );
    }

    proceedToReceiveMessage(handler, privateKey, balance, unconfirmed, defaultFee, callback) {

        var amount = handler.systemValuesDiff(balance, handler.getFeeTotalCost(defaultFee));
        var displayTotal = handler.systemValueToDisplayValue(balance);
        var displayAmount = handler.systemValueToDisplayValue(amount);
        //issues
        var warning = '';
        var hideConfirm = false;
        if (handler.systemValuesCompare(0, balance) != -1) {
            warning = '<strong>error:</strong> Escrow wallet is empty. Was it already claimed? If this is a fresh transfer please try again in a minute.';
            hideConfirm = true;
        } else if (handler.systemValuesCompare(0, amount) != -1) {
            warning = '<strong>error:</strong> Escrow wallet balance is less than required fee.';
            hideConfirm = true;
        } else if (handler.systemValuesCompare(0, unconfirmed) != 0) {
            warning = '<strong>warning:</strong> Escrow transaction is not yet confirmed. You can continue but in case of problems please try again after few minutes.';
        }

        app.confirmBeforeContinue(
            '<table class="transactionSummary">' +
            '<tr class="first"><td><img class="coinIcon" src="icons/messageglyph.png"/></td><td><img style="width:65%" src="icons/sendglyph.png"/></td><td><img style="width:100%" src="coins/' + handler.icon + '.svg"/></td></tr>' +
            '<tr class="second"><td></td><td></td><td>' + app.engine.shortAmount(displayAmount, handler.code, 13) + '</td></tr>' +
            '</table>',
            'Somebody used "Send via message" function to send you ' + handler.code + '. Click "claim" to proceed and transfer contents to your wallet.' +
            '<table class="niceTable">' +
            '<tr><th colspan="2">total message content:</th></tr><tr><td style="width:50%;">' + displayTotal + ' ' + handler.code + '</td><td>' + app.engine.priceProvider.convert(handler.systemValueToFloatValue(balance), handler) + '</td></tr>' +
            '<tr><th colspan="2">transaction fee:</th></tr><tr><td>' + handler.getFeeDisplay(defaultFee) + '</td><td>' + handler.getFeeValueDisplay(defaultFee) + '</td></tr>' +
            '<tr><th colspan="2">you will receive:</th></tr><tr><td style="width:50%;">' + displayAmount + ' ' + handler.code + '</td><td>' + app.engine.priceProvider.convert(handler.systemValueToFloatValue(amount), handler) + '</td></tr>' +
            '</table>' +
            '<p>' + warning + '</p>',
            function(){
                app.addOrActivateCoin(handler.code, function(){
                    handler.sendPayment(
                        privateKey,
                        app.wallets[handler.code].data.addr,
                        amount,
                        defaultFee
                    );
                    //TODO this is a temporary hack before the update loop/queue
                    for (var i=1; i<10; i++) {
                        setTimeout(function() { app.wallets[handler.code].refreshOnline(); }, 5000 * i * i);
                    }
                    callback && callback();
                });
            },
            'claim',
            'cancel',
            function() {
                callback && callback();
            }
        );
        if (hideConfirm) {
            document.getElementById('lockPopupConfirm').classList.add('hidden');
        }
    }
    */

    handleReceiveMessage(code: string, privateKey: string, callback: () => void) {
        //TODO use keychain
        /*
        if ((code in app.engine.allCoinHandlers) && app.engine.isOnline(app.engine.allCoinHandlers[code]) && app.engine.allCoinHandlers[code].canSendViaMessage()) {
            var handler = app.engine.allCoinHandlers[code];
            handler.getBalance(handler.addrFromPrivateKey(privateKey), function(balance, unconfirmed){
                setTimeout(function() {
                    var fees = handler.getFees(function(fees){
                        var defaultFee = fees[Math.floor((fees.length - 1) / 2)];
                        app.proceedToReceiveMessage(handler, privateKey, balance, unconfirmed, defaultFee, callback);
                    });
                }, 1000);
            }, function (error, code) {
                app.alertError(error, code);
                callback && callback();
            });
        } else {
            app.alertError('Don\'t know how to receive ' + coin);
            callback && callback();
        }*/
    }

    receivingWallet: Wallet
    receivingAddress: string
    receiveAmountInputWidget: AmountInputWidget

    popupReceivePayment(wallet: Wallet, addr: string) {
        this.openForm('receivePaymentPopup');
        (document.getElementById('receivePaymentIcon') as HTMLImageElement).src = 'coins/' + wallet.handler.icon + '.svg';
        //document.getElementById('receiveCoinLabel').innerHTML = '';
        (document.getElementById('receiveCoinAddr') as HTMLTextAreaElement).value = '';
        document.getElementById('receiveCoinQrcode').innerHTML = '';


        document.getElementById('receiveCoinAmountInput').innerHTML = '';
        this.receiveAmountInputWidget = new AmountInputWidget(wallet.handler, this.engine.priceProvider)
        this.receiveAmountInputWidget.onchange = this.updateReceivePaymentCode.bind(this)
        document.getElementById('receiveCoinAmountInput').append(
            this.receiveAmountInputWidget.element
        );

        document.getElementById('receiveCoinBottom').classList.remove('custom-amount');

        if (addr == null) {
            document.getElementById('receiveCoinNote').innerHTML = '';
        } else {
            document.getElementById('receiveCoinNote').innerHTML = 'This is an imported address,<br/> use it only if you control its private key!';
        }
        var addrString = addr == null ? (wallet.handler as OnlineCoinHandler).getReceiveAddr(this.engine.keychain) : addr;
        document.getElementById('receiveCoinIdenticon').innerHTML = '';
        document.getElementById('receiveCoinIdenticon').appendChild((new CoinAddressIcon(wallet.handler, addrString)).element);

        this.receivingWallet = wallet;
        this.receivingAddress = addrString;
        this.updateReceivePaymentCode(null);
        //TODO button:
        //setTimeout(app.updateReceivingWallet, 3000);
    }

    copyReceiveCoinAddrToClp() {
        OsPlugins.copyToClipboard((document.getElementById('receiveCoinAddr') as HTMLInputElement).value);
        this.alertInfo('copied code to clipboard', this.receivingWallet.handler.code);
    }

    shareReceivePaymentCode() {
        var message = 'currency: ' + this.receivingWallet.handler.ticker + '\naddress: ' + this.receivingAddress;

        var value = this.receiveAmountInputWidget.getValue();
        if (value) {
            message += '\namount: ' + value;
        }
        message += '\nlink: \n' + 'https://wallet.coffee/request.html#' + this.updateReceivePaymentCode(value);
        let app = this;
        OsPlugins.shareDialog('', message, function() {
            app.alertInfo('Any recipients will be able to use code to make a payment.');
        }, function(msg) {
            app.alertError('Sharing failed with message: ' + msg);
        });
    }

    updateReceivePaymentCode(value: number) {

        var code = Strings.slugify(this.receivingWallet.handler.name) + ':' + this.receivingAddress;
        document.getElementById('setAmountLabel').innerHTML = 'set amount';
        if (value) {
            code = code + '?amount=' + value.toFixed(this.receivingWallet.handler.decimals);
            document.getElementById('setAmountLabel').innerHTML = 'change amount';
        }
        (document.getElementById('receiveCoinAddr') as HTMLInputElement).value = code;
        document.getElementById('receiveCoinQrcode').innerHTML = '';
        new (window as any).QRCode(document.getElementById('receiveCoinQrcode'), {
            text: code,
            width: 256,
            height: 256,
            colorLight: '#ffffff',
            colorDark: '#463f3a'
        });
        return code;
    }
    /*
    updateReceivingWallet() {
        if (document.getElementById("formPopup").classList.contains('show')) {
            if (document.getElementById('receivePaymentPopup').style.display == 'block') {
                //console.log('refresh');
                app.receivingWallet.refreshOnline(function(){
                    setTimeout(app.updateReceivingWallet, 3000);
                });
            }
        }
    }*/

    saveVersion() {
        this.engine.settings.set('appVersion', Version.version);
    }

    showChangelogIfVersionUpdated(callback: ()=>void) {
        var oldVersion = this.engine.settings.get('appVersion', '0.1.7');
        if (oldVersion != Version.version) {
            this.saveVersion();
            var changelist = '';
            for (var i in Version.changelog) {
                if (Version.versionCompare(Version.changelog[i].version, oldVersion) != 1) break;
                changelist += '<b>version ' + Version.changelog[i].version + '</b> ' + Version.changelog[i].date + '<ul>';
                for (var j in Version.changelog[i].changes) {
                    changelist += '<li>' + Version.changelog[i].changes[j] + '</li>';
                }
                changelist += '</ul>';
            }
            this.confirmBeforeContinue(
                'updated to ' + Version.version,
                '<p>Your were running ' + oldVersion + ' previously. ' + (changelist != '' ? 'Below is a complete list of changes.' : 'Thanks for updating.') + '</p>' +
                changelist,
                function(){
                    callback();
                }
            );
        } else {
            callback();
        }
    }

    recoverWallet(invalidMnemonic: string = null) {
        var input = document.createElement("textarea");
        input.id = input.name = "mnemonic";
        (input as HTMLTextAreaElement).rows = 3;
        let app = this;
        this.confirmBeforeContinue(
            'Recover Wallet',
            '<p>Enter your recovery phrase.</p><p>Recovery phrase should be 12 english lowercase words separated by single spaces.</p>',
            function() {
                var mnemonic = input.value.split(' ').map(function(e){ return e.trim().toLowerCase();}).filter(function (e) {return e != '';}).join(' ');
                if (app.engine.validateMnemonic(mnemonic)) {
                    //validate
                    app.engine.recoverKeychain(mnemonic);
                    app.engine.saveData();
                    app.initRecoveredWallet();
                } else {
                    app.recoverWallet(mnemonic);
                }
            },
            'recover',
            'cancel',
            app.createNewWallet.bind(app)
        );
        document.getElementById('lockMessage').appendChild(input);
        if (typeof invalidMnemonic != "undefined") {
            input.value = invalidMnemonic;
            var div = document.createElement("div");
            div.className = "red";
            div.innerHTML = "this phrase is invalid!";
            document.getElementById('lockMessage').appendChild(div);
        }
    }

    initNewWallet() {
        let app = this;
        app.addOrActivateCoin('BTC', function(){
            app.addOrActivateCoin('ETH', function(){
                app.confirmBeforeContinue(
                    'Wallet Created',
                    '<p>New random recovery phrase for all your wallets has been created. It is <b>extremely important</b> that you backup this phrase in case you lose access to this device. '+
                    'You can do this at any time using "backup wallets" menu option.</p>' +
                    '<div style="text-align:center">' +
                    '<img src="coins/btc.svg" width="32" alt="BTC">&nbsp; &nbsp; &nbsp;' +
                    '<img src="coins/eth.svg" width="32" alt="ETH">' +
                    '</div>' +
                    '<p>Bitcoin and Ethereum wallets are already added for your convinience. You can add different coins using "add wallet" option. Use "help" menu option for more info. </p>',
                    function() {
                        app.onDataLoaded();
                    },
                    'ok'
                );
            });
        });
    }

    initRecoveredWallet() {
        let app = this;
        this.confirmBeforeContinue(
            'Wallet Recovered',
            '<p>All your new wallets will be generated using your recovery phrase.<p>' +
            '<p>Please <strong>add wallets</strong> you were holding and refresh balances.<p>',
            function() {
                app.onDataLoaded();
            },
            'ok'
        );
    }

    createNewWallet() {
        let app = this;
        app.confirmBeforeContinue(
            'Welcome!',
            '<p>' +
            'Coffee Wallet is an open source, cross-platform, multi-currency blockchain wallet and portfolio.' +
            '</p>' +
            '<p>' +
            'It has been built with extreme care, but it comes with <b>no warranties</b> of any kind. ' +
            'Coffee Wallet does not provide financial services. It uses third party providers to access blockchains.' +
            '</p>' +
            '<p>' +
            'All private keys are generated from a secure seed recovery phrase that will now be generated. ' +
            'If you already have your secret phrase you can <a href="javascript:app.recoverWallet()">recover your wallet</a>.' +
            '</p>',
            function() {
                app.engine.createNewKeychain();
                app.engine.saveData();
                app.initNewWallet();
            },
            'create wallet'
        );
    }
}