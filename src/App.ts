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
import {OnlineCoinHandler} from "./Handlers/BaseCoinHandler";
import {Version} from "./Tools/Changelog";

export class App {

    walletsWidgets: WalletWidget[] = []
    engine: Engine
    logger: Logger
    lastOpenedUrl : string = null

    openUrl(url:string) : void {
        //make sure data is loaded
        if (this.lastOpenedUrl != url) {
            //TODO
            /*app.onDataLoaded(function (callback) {
                app.alertInfo('opening url: ' + url);
                app.handleUrlOpened(url, callback);
            });*/
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
            //TODO
            /*
            app.priceProviderSelect = new Select(document.getElementById("priceProvider"));
            app.priceUnitSelect = new Select(document.getElementById("priceUnit"));
            app.priceProviderSelect.onChange(function(value){
                app.priceUnitSelect.setOptions(app.engine.allPriceProviders[value].availableUnits, app.engine.priceProvider.unit);
            });
            app.priceProviderSelect.setOptions(app.engine.allPriceProviders, app.engine.allPriceProviders.indexOf(app.engine.priceProvider));
            */
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

        this.logger.log("info", null, "application started");

    }

    onEngineLoaded () {
        OsPlugins.hideNativeSplash();
        document.getElementById('loading').classList.remove('show');

        if (!(this.engine.keychainCreated())) {
            //TODO
            /*app.saveVersion();
            app.createNewWallet();*/
        } else {
            //TODO
            //this.showChangelogIfVersionUpdated(function(){
            //    this.showExportKeysReminderIfRequired(function(){
                    for (var key in this.engine.wallets) {
                        this.walletsWidgets.push(
                            this.addWalletWidget(this.engine.wallets[key])
                        );
                    }
                    //app.updateAllValues();
                    //app.onDataLoaded();
                //});
            //});
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
        //TODO
        var headerSize = 0;
        var children = document.getElementById('popupContent').childNodes;
        for (var c=0; c < children.length; c++) {
            if ((children[c].nodeType != 3) && ((children[c] as HTMLElement).style.display == 'block')){
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
    reloadHistory() {
        //TODO
        /*Logger.getLogs(function(logs){
            document.getElementById('history').innerHTML = '';
            for (var i=0; i< logs.length; i++) {
                var li = document.createElement('li');
                var html = logs[i].message;
                if ('coin' in logs[i]) {
                    html = app.preParseCoinMsg(html, logs[i].coin, true);
                }
                if (('coin' in logs[i]) && (logs[i].coin in allCoinApis)) {
                    html = '<img width="36" src="coins/' + allCoinApis[logs[i].coin].icon + '.svg"/>' + html;
                } else {
                    //html = '<img src="coins/empty.svg"/>' + html;
                }

                li.innerHTML = '<div class="msg ' + logs[i].severity + '"><div class="ts">' + (new Date(logs[i].ts)).toLocaleString()  + '</div><div>' + html + '</div></div><div class="stitch2"></div>';
                //logs[i].coin
                document.getElementById('history').appendChild(li);
            }
            //console.log(logs);
        });*/
    }

    async updatePricesFromProvider() : Promise<void> {
        //TODO
        /*
        var that = this;
        var spinner = function(){
            document.getElementById('refresh').classList.toggle('spinning', that.spinning);
            if (that.spinning) {
                setTimeout(spinner, 1000);
            } else {
                //dependant
                document.getElementById('refresh').classList.toggle('error', that.netError);
                callback && callback();
            }
        };
        that.spinning = true;
        that.netError = false;
        spinner();
        app.updateAllValues();

        //TODO only wallets
        await this.engine.priceProvider.updatePrices(this.engine.allCoinHandlers);
        app.engine.updatePrices(function(){
            app.updateAllValues();
            app.spinning = false;
        });*/
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
        //TODO
        /*if ((typeof(msg) == 'string') && (coin in app.engine.allCoinHandlers) && ('explorerLinkTx' in app.engine.allCoinHandlers[coin])) {
            msg = msg.replace(/\<u\>\w+\<\/u\>/, function(match){
                var tx = match.substring(3, match.length-4);
                var txShort = tx.substring(0, 6) + '..' + tx.substring(tx.length-4, tx.length);
                return allowLinks ? ('<a href="#" onclick="osPlugins.openInSystemBrowser(\'' + app.engine.allCoinHandlers[coin].explorerLinkTx(tx) + '\');">' + txShort + '</a>') : ('<u>' + txShort + '</u>');
            });
        }*/
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
        //console.log(msg, url, line, col, error);
    }

    addWalletWidget(data: Wallet) : WalletWidget {
        let widget = new WalletWidget(this.engine, data)
        widget.onclick = this.popupCoinInfo.bind(this)
        widget.onportfolio = this.popupOfflineAssets.bind(this, data)
        //widget.onreceive = this.popupReceivePayment.bind(this)
        //widget.onsend = this.popupSendPayment.bind(this)

        widget.onclick = this.popupCoinInfo.bind(this, widget, data)
        widget.onclick = this.popupCoinInfo.bind(this, widget, data)
        document.getElementById('walletsList').appendChild(widget.element);
        return widget;
    }

    openPopup(id: string, title: string, previousPopupCall: () => void = null) {

        this.previousPopupCall = previousPopupCall;
        document.getElementById('popup').classList.add('show');

        //this.setCurrentCoinIcon(bgimg);
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
            //document.getElementById('coinInfoButtons').appendChild(createButton('receive', 'receive', function(){app.popupReceivePayment(wallet);}));
            //document.getElementById('coinInfoButtons').appendChild(createButton('send', 'send', function(){app.popupSendPayment(wallet, wallet.data.systemBalance);}));
        }
        //document.getElementById('coinInfoButtons').appendChild(wallet.isOnline() ? walletWidget.refreshButton2 : createButton('refresh', 'refresh', null));
        document.getElementById('coinInfoButtons').appendChild(ListItemWidget.createButton('list', 'portfolio', this.popupOfflineAssets.bind(this, wallet)));

        var advanced = document.createElement('ul');
        advanced.classList.add('advancedActions');

        /*
        if (wallet.canSendViaMessage()) {
            advanced.appendChild(this.createAdvancedOption('message', 'send via message', this.popupSendSocial.bind(this, wallet)));
        }

        if ('exchangeableCoinsCache' in app && (app.exchangeableCoinsCache.indexOf(wallet.handler.code) != -1)) {
            advanced.appendChild(app.createAdvancedOption('sell', 'sell coin', function(){
                app.popupExchange(wallet.handler.code, null);
            }));
            advanced.appendChild(app.createAdvancedOption('buy', 'buy coin', function(){
                app.popupExchange(null, wallet.handler.code);
            }));
        }

        if ('explorerLinkAddr' in wallet.handler) {
            advanced.appendChild(app.createAdvancedOption('link', 'history (external)', function(){
                osPlugins.openInSystemBrowser(wallet.handler.explorerLinkAddr(wallet.data.addr));
            }));
        }

        if ('sendPayment' in wallet.handler) {
            advanced.appendChild(app.createAdvancedOption('import', 'import private key', function(){
                app.showImportPrivateKeyPopup(wallet.handler);
            }));
        }

        //advanced.appendChild(app.createAdvancedOption('send', 'export private key', app.showExportPrivateKeyPopup.bind(app, advancedWallet)));


        */
        var links = '<ul>';
        for (var name in wallet.handler.links) {
            links += '<li><a href="#" onclick="osPlugins.openInSystemBrowser(\'' + wallet.handler.links[name] + '\');">' + name + '</a></li>';
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


        if (walletWidget.onlineBalance.total().isZero() && walletWidget.portfolioBalance.total().isZero()) {
            advanced.appendChild(this.createAdvancedOption('remove', 'remove wallet', this.removeCoin.bind(this, wallet)));
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
        //TODO
        /*this.data.hideWallet(key, function(){
            app.wallets[key].row.outerHTML = '';
            delete app.wallets[key].row;
            delete app.wallets[key];
        });*/
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
            var item = new PortfolioItemWidget(wallet, i);
            document.getElementById('offlineAssets').appendChild(item.element);
            item.onremove = this.removeOfflieAsset.bind(this)
            //TODO item.onreceive = this.receiveOfflieAsset.bind(this)  //app.popupReceivePayment(that.wallet, that.data.addr);
            item.onreceive = function () {}
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

    removeOfflieAsset(item: PortfolioItemWidget) {
        alert(item.id);
        (navigator as any).notification.confirm(
            'Are you sure you want to remove this asset?',
            function (buttonIndex : number) {
                if (buttonIndex == 1) {
                    /*app.data.deleteOfflineAsset(that.wallet.handler.code, that.id);
                    //refresh ids and refresh balance:
                    that.wallet.refreshOffline(false);
                    app.popupOfflineAssets(app.offlineAssetWallet);*/
                }
            },
            'Remove Asset',
            ['Remove','Cancel']
        );
    }

    activeAsset : PortfolioItemWidget = null

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

        document.getElementById('offlineAssetButtons').appendChild(ListItemWidget.createButton('edit', 'edit', item.onedit.bind(item)));

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
            //advanced.appendChild(this.createAdvancedOption('import', 'transfer to online wallet', this.showImportPrivateKeyPopup.bind(this, wallet.handler, data.addr)));

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

        if (PortfolioItem.isAddress(item.item)) {
            document.getElementById('addOfflineAssetAddrDiv').classList.remove('hidden');
            document.getElementById('addOfflineAssetAddrTools').classList.remove('hidden');
            document.getElementById('addOfflineAssetBalanceDiv').classList.add('hidden');
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

        let input = new AddressInputWidget(this.offlineAssetWallet.handler as OnlineCoinHandler)
        document.getElementById('addOfflineAssetAddrDiv').append(input.element);
        this.portfolioEditAddressInput = input;
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

        if (this.portfolioEditAddressInput){
            if (!this.portfolioEditAddressInput.validate()) {
                return false;
            }
        }

        let item = null;
        if (this.portfolioEditAddressInput) {
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
            this.offlineAssetWallet.portfolio[idToUpdate - 1] = item;
        } else {
            idToUpdate = this.offlineAssetWallet.portfolio.length + 1
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

    /*

    targetScroll: 0,
    scrollToTargetTimer: null,
    netError: false,

    setNoNetError : function() {
        this.netError = true;
        document.getElementById('refresh').classList.add('error');
    },

    scrollToTarget : function(){

        var width = document.scrollingElement.offsetWidth;
        document.body.onscroll = null;
        var targetScroll = Math.floor(this.targetScroll * width);

        if (targetScroll > document.scrollingElement.scrollLeft) {
            document.scrollingElement.scrollLeft = Math.ceil(
                document.scrollingElement.scrollLeft + ((targetScroll - document.scrollingElement.scrollLeft) / 3));
        } else {
            document.scrollingElement.scrollLeft = Math.floor(
                document.scrollingElement.scrollLeft - ((document.scrollingElement.scrollLeft - targetScroll) / 3));
        }
        //console.log(document.scrollingElement.scrollLeft, targetScroll);
        if (document.scrollingElement.scrollLeft != targetScroll) {
            this.scrollToTargetTimer = setTimeout(this.scrollToTarget.bind(this), 10);
        } else {
            //temporary disable this feature:
            window.onresize = app.scrollToTarget.bind(app);
            document.body.onscroll = app.scrollToTarget.bind(app);
        }
    },

    popupHistory: function() {
        //app.openPopup('historyPopup', 'History');
        //app.reloadHistory();
        //document.getElementById('historyPopup').appendChild(document.getElementById('history'));
    },

    initAirdrop: function() {
        //airdrop is finished
        return;
        setTimeout(function() {
            airdrop.getLeft(function(left, message){
                if (left > app.airdropMaxReward) {
                    app.toggleAll('airdrop-button', true);
                    if (!((config.airdrop.coin in app.data.wallets) && app.data.wallets[config.airdrop.coin].picked)) {
                        if (!app.lockDialogOpened) {
                            app.confirmBeforeContinue(
                                'Coffee Tokens Airdrop',
                                '<p>Coffee Token (CFT) is a utility token for Coffee Wallet Project. You can find out more <a href="#" onclick="osPlugins.openInSystemBrowser(\'https://tokens.coffee/\')">here</a>.</p>' +
                                '<div style="text-align:center"><img src="coins/cft.svg" width="32" alt="CFT"></div>' +
                                '<p>To promote the application we offer <strong>' + app.airdropMaxReward + '&nbsp;CFT</strong> for each user. You can get your tokens now or later at any time using "tools" tab.</p>' +
                                '<p>' + message + '</p>',
                                function(){
                                    app.popupAirdrop();
                                },
                                'get&nbsp;now',
                                'later'
                            );
                        }
                    };
                }
            });
        }, 1000);
    },

    collectAirdrop: function() {
        airdrop.collectAirdrop(function(txn){
            app.alertSuccess('Tokens were sent successfully. Your wallet should be updated in a minute. TXN: <u>' + txn + '</u>. ', config.airdrop.coin);
            for (var i=1; i<7; i++) {
                setTimeout(function() { app.wallets[config.airdrop.coin].refreshOnline(); }, 5000 * i * i);
            }
            app.popupAirdrop2();
        },function(message){
            app.alertError(message);
        });
    },

    popupAirdrop: function() {
        if ((config.airdrop.coin in app.data.wallets) && app.data.wallets[config.airdrop.coin].picked) {
            return app.popupAirdrop2();
        }

        app.openPopup('airdropPopup', 'Coffee&nbsp;Tokens&nbsp;Airdrop', 'coins/cft.svg');

        document.getElementById('airdropTasks').innerHTML = '';
        var total = 0;
        for (var i=0; i< airdrop.tasks.length; i++) {
            var completed = airdrop.tasks[i][3]();
            var tr1 = document.createElement('tr');
            if (completed) {
                total += airdrop.tasks[i][2];
                tr1.classList.add('completed');
            }
            if (airdrop.tasks[i][2] == 0) {
                tr1.innerHTML += '<th colspan="2">(optional) ' + airdrop.tasks[i][0] + '</th>';
            } else {
                tr1.innerHTML += '<th>' + airdrop.tasks[i][0] + '</th>';
                tr1.innerHTML += '<td class="reward">' + airdrop.tasks[i][2]  + ' ' + config.airdrop.coin + '</td>';
            }

            if (completed) {
                tr1.innerHTML += '<td class="status"><img src="icons/tick.png" width="22" /></td>';
            } else {
                var takeAction = document.createElement('button');
                takeAction.innerHTML = 'go';
                takeAction.onclick = airdrop.tasks[i][4];
                var td = document.createElement('td');
                td.appendChild(takeAction);
                tr1.appendChild(td);
            }
            document.getElementById('airdropTasks').appendChild(tr1);

            var tr2 = document.createElement('tr');
            tr2.innerHTML = '<td class="description" colspan="3">' + airdrop.tasks[i][1]  + '</td>';
            document.getElementById('airdropTasks').appendChild(tr2);
        }

        document.getElementById('airdropTotal').innerHTML = '' + total + ' ' + config.airdrop.coin;

        airdrop.getLeft(function(left, message){
            document.getElementById('collectAirdropButton').classList.toggle('hidden', left == 0);
            document.getElementById('airdropStatus').innerHTML = message;
        });
    },

    popupAirdrop2: function() {
        app.openPopup('airdropPopup2', 'Coffee&nbsp;Tokens&nbsp;Airdrop', 'coins/cft.svg');
        var addr = app.data.wallets[config.airdrop.coin].addr;
        var linkTxt = 'https://wallet.coffee/install?r=' + addr.substring(2, 18);
        document.getElementById('airdropRefLink').innerHTML = linkTxt;

        document.getElementById('airdropRefLinkQR').innerHTML = '';
        new QRCode(document.getElementById('airdropRefLinkQR'), {
            text: linkTxt,
            width: 160,
            height: 160,
            colorLight: '#ffffff',
            colorDark: '#463f3a'
        });

        airdrop.getLeft(function(left, message){
            document.getElementById('airdropStatus2').innerHTML = message;
        });
    },


    updateAllValues: function() {
        var totalOnline = 0;
        var totalOffline = 0;
        var orders = [];
        for (var key in app.wallets) {
            var walletOnline = app.wallets[key].updateOnlineValue();
            var walletOffline = app.wallets[key].updateOfflineValue();
            totalOnline += walletOnline;
            totalOffline += walletOffline;
            orders.push([key, walletOnline + walletOffline]);
        }
        orders.sort(function(a, b) {
            return a[1] - b[1];
        });
        for (var i = orders.length - 1; i >= 0; i--) {
            var row = app.wallets[orders[i][0]].row;
            row.parentNode.appendChild(row);
        }

        document.getElementById('grandTotal').innerHTML = app.engine.priceProvider.formatMoney(totalOnline + totalOffline);
        document.getElementById('totalOnline').innerHTML = app.engine.priceProvider.formatMoney(totalOnline);

    },



    setCurrentCoinIcon: function(img) {
        if (img) {
            var icons = document.getElementsByClassName("coinBig");
            for (var i = 0; i < icons.length; i++) {
                icons[i].src = img;
            }
        }
    },

    toggleAll: function(className, show) {
        var elements = document.getElementsByClassName(className);
        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.toggle('hidden', !show);
        }
    },

    showExportPrivateKeyPopup: function(wallet) {
        app.authenticateBeforeContinue(
            'Export ' + wallet.handler.code + ' Private Key',
            'Are you sure you want to see your private key? It gives full access to your ' + wallet.handler.code + ' online wallet. '
            + 'Don\'t show it to any one. Don\'t take a screenshot.',
            function() {
                app.openForm('exportPrivateKeyPopup', wallet.handler.code + ' private key', 'coins/' + wallet.handler.icon + '.svg');
                document.getElementById('privateKeyValue').innerHTML = wallet.data.privateKey;
            }
        );
    },

    showImportPrivateKeyPopup: function(handler, address) {
        app.openForm('importPrivateKeyPopup', 'import ' + handler.code + ' private key', 'coins/' + handler.icon + '.svg');
        app.importingHandler = handler;
        app.importingAddress = address;
        document.getElementById('importPrivateKeyInput').value = '';
    },

    importPrivateKey: function(){
        var pk = document.getElementById('importPrivateKeyInput').value;
        var addr = app.importingHandler.addrFromPrivateKey(pk);
        var valid = app.importingHandler.validateAddress(addr);

        if (app.importingAddress && (app.importingAddress != addr)) {
            app.alertInfo('warning: this seems to be Private Key for a different wallet');
        }
        document.getElementById('loading').classList.add('show');
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
        });
    },

    showExportKeysReminderIfRequired: function(callback) {
        if (app.engine.settings.get('keyBackedUp', false)) {
            callback(false);
        }
        var counter = app.engine.settings.get('keyBackedUpReminderCounter', 0);
        counter ++;
        if (counter > 2) counter = 0;
        app.engine.settings.set('keyBackedUpReminderCounter', counter);
        if (counter == 0) {
            this.confirmBeforeContinue(
                'backup your keys',
                '<p>All your private keys are generated from a <b>12-word BIP39 phrase</b>. It is extremely important that you <b>backup</b> this phrase safely.</p>' +
                '<p>This reminder will keep showing up until you use <b>"backup wallets"</b> menu option.</p>',
                function(){
                    callback(true);
                }
            );
        } else {
            callback(false);
        }
    },

    exportAllKeys: function() {

        var mnemonicParts = app.engine.keychain.mnemonic.split(' ');
        var mnemonicMessage = '<ol class="mnemonic">';
        for (var i =0; i<mnemonicParts.length; i++) {
            mnemonicMessage += '<li><span>' + mnemonicParts[i] + '</span></li>';
        }
        mnemonicMessage += '</ol>';

        app.authenticateBeforeContinue(
            'Backup Wallets',
            'On the next screen, you will see your 12-word BIP39 recovery passphrase. It might be used to recover your keys if you loose access to this device. <br/><ul>' +
            '<li>Don\'t show your mnemonic to anyone.</li>' +
            '<li>Do not take a screenshot.</li>' +
            '<li>Do not send it over unencrypted network.</li>' +
            '<li>Write it down and store in a secure location.</li></ul>',
            function() {
                app.engine.settings.get('keyBackedUp', false);
                app.confirmBeforeContinue(
                    'your backup phrase',
                    mnemonicMessage,
                    function() {
                        app.engine.settings.set('keyBackedUp', true);
                    },
                    'done'
                    //'remind&nbsp;later'
                );
            }
        );
    },

    importAllKeys: function() {
        var element = document.createElement('input');
        element.type = "file";
        document.body.appendChild(element);
        element.click();
        element.onchange = function(event){
            var fr = new FileReader();
            fr.onload = function(event) {
                alert(event.target.result);
            };
            fr.readAsText(event.target.files[0]);
            document.body.removeChild(element);
        };
    },


    doExchange: function() {
        //TODO!!!!!
        var provider = allExchangeProviders[app.exchangeProviderSelect.getValue()];

        var sellCoin = document.getElementById("exchangeSellCoin").value;
        var sellAmmount = app.wallets[sellCoin].handler.floatValueToSystemValue(parseFloat(document.getElementById("exchangeSellAmmount").value));
        var buyCoin = document.getElementById("exchangeBuyCoin").value;
        var fee = app.exchangeDefaultFees[provider.key + sellCoin];
        var buyAmmount = document.getElementById("exchangeBuyAmmount").value;

        var displaySellAmount = app.wallets[sellCoin].handler.systemValueToDisplayValue(sellAmmount);
        var onTransactionSuccess = function () {
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
        );
    },
    updateExchange: function(force) {
        var provider = allExchangeProviders[app.exchangeProviderSelect.getValue()];
        if ((provider.key != app.lastExchangeProvider) || ((typeof force != 'undefined') && force)) {
            document.getElementById("exchangeShortDescription").innerHTML = provider.shortDescription;
            document.getElementById("exchangeLink").innerHTML = '<a href="#" onclick="osPlugins.openInSystemBrowser(\'' + provider.url + '\');">' + provider.url + '</a>';
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

    getExchangeableCoins: function(provider, callback) {
        provider.getCurrencies(function(currencies){
            var ret = new Array();
            for (var i in currencies) {
                var key = currencies[i].toUpperCase();
                if (key in allCoinApis && 'sendPayment' in allCoinApis[key]) {
                    ret.push(key);
                }
            }
            callback(ret);
        });
    },

    popupExchange: function(sellCoin, buyCoin) {

        var includeTestCoins = app.engine.settings.testCoinsEnabled();
        var availableProviders = {};
        this.exchangeDefaultFees = {};
        this.exchangeMinAmmounts = {};

        for (var i in allExchangeProviders) {
            if (includeTestCoins || (allExchangeProviders[i].testNet === false)) {
                availableProviders[i] = allExchangeProviders[i];
            }
            this.exchangeMinAmmounts[i] = {};
        }
        this.exchangeProviderSelect.setOptions(availableProviders);


        document.getElementById("exchangeSellAmmount").value = 0;
        this.openPopup('exchangePopup', 'Exchange');
        app.settings.set('airdropTaskExchange', true);

        app.updateExchange(true);
    },
    cancelSentViaMessage: function(coin, pk) {
        navigator.notification.confirm('Are you sure you want to CANCEL this? Recipients of message will no longer be able to redeem those coins.',
            function(){
                app.handleReceiveMessage(coin, pk);
            });
    },
    popupSendViaMessage: function() {
        this.openPopup('sendViaMessagePopup', 'send via message', 'icons/messageglyph.png');
        app.settings.set('airdropTaskSendViaMessage', true);

        Logger.getLogs(function(logs){
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
        for (var coin in app.wallets){
            if (app.canSendViaMessage(app.wallets[coin].handler)) {
                empty = false;
                document.getElementById('sendViaMessageButtons').appendChild(new CoinButton(
                    app.wallets[coin].handler,
                    false,
                    function(coin){
                        if (app.wallets[coin.code].data.balance != 0 ) {
                            app.popupSendSocial(app.wallets[coin.code]);
                        } else {
                            app.alertInfo('Can\'t sent via message. Wallet is empty.', coin.code);
                        }
                    }
                ));
            }
        }
        if (empty) {
            document.getElementById('sendViaMessageButtons').innerHTML = 'You have no coins that can be sent via message.';
        }
    },

    filterAddCoinPopup: function() {
        var query = document.getElementById('addCoinFilter').value.toUpperCase();
        var includeTestCoins = app.engine.settings.testCoinsEnabled();
        var onlySupportedWrite = document.getElementById('addCoinOnlySupported').checked;
        var limit = 24;
        var allCoins = document.getElementById('allCoins');
        while (allCoins.firstChild) { allCoins.removeChild(allCoins.firstChild); }

        for (var i=0; i< app.allCoinApisByRank.length; i++){
            var coin = app.allCoinApisByRank[i];
            var show = coin.search.indexOf(query) != -1;
            //if (onlySupportedRead) show = show && ('getBalance' in coin);
            if (onlySupportedWrite) show = show && ('explorerLinkAddr' in app.engine.allCoinHandlers[coin.code]);
            if (!includeTestCoins) show = show && (!(app.engine.allCoinHandlers[coin.code].testCoin));
            if (show) {
                limit --;
                if (limit >= 0) {
                    if (!('_button' in app.engine.allCoinHandlers[coin.code])) {
                        app.engine.allCoinHandlers[coin.code]._button = new CoinButton(
                            coin.code,
                            app.engine.allCoinHandlers[coin.code],
                            coin.code in app.wallets,
                            function(code, handler){
                                app.closePopup();
                                setTimeout(function(){
                                    app.addOrActivateCoin(code, function(){
                                        console.log(coin);
                                        console.log(handler);
                                        app.engine.allCoinHandlers[code]._button.classList.add('active');
                                    });
                                }, 100);
                            }
                        );
                    }
                    allCoins.appendChild(app.engine.allCoinHandlers[coin.code]._button);
                }
            }
        }
        if (limit == 24) {
            document.getElementById('moreCoins').innerHTML = 'No coins found for given query.';
        } else if (limit >= 0) {
            document.getElementById('moreCoins').innerHTML = '';
        } else {
            document.getElementById('moreCoins').innerHTML = '' + -limit + ' more coins matches.<br/> Please enter more specific query.';
        };
    },

    popupAddCoin: function() {
        this.openPopup('addCoinPopup', 'add cryptos');
        setTimeout(function(){
            if (typeof app.popupGenerated == 'undefined') {
                app.popupGenerated = true;
                document.getElementById('addCoinFilter').onkeyup = app.filterAddCoinPopup;
                document.getElementById('addCoinFilter').onchange = app.filterAddCoinPopup;
                document.getElementById('addCoinOnlySupported').onchange = app.filterAddCoinPopup;

                app.allCoinApisByRank = new Array();
                for (var code in app.engine.allCoinHandlers) {
                    app.allCoinApisByRank.push({
                        'code': code,
                        'search': (app.engine.allCoinHandlers[code].ticker + ' ' + app.engine.allCoinHandlers[code].name).toUpperCase()
                    });
                }
            }
            app.filterAddCoinPopup();
        }, 100);
    },

    popupHelp: function() {
        this.openPopup('helpPopup', 'Help');
        document.getElementById('helpPopupVersion').innerHTML =
            'version <strong>' + window.version + '</strong> for <strong>' + device.platform + '</strong>';
    },

    popupSettings: function() {
        this.openPopup('settingsPopup', 'Settings');

        this.priceProviderSelect.setValue(app.engine.allPriceProviders.indexOf(app.engine.priceProvider));
        this.priceUnitSelect.setValue(app.engine.priceProvider.unit);

        document.getElementById('settingsEnableTestCoins').checked = this.engine.settings.testCoinsEnabled();

    },
    savePriceSettings: function() {
        this.closePopup();
        this.engine.settings.setTestCoinsEnabled(document.getElementById('settingsEnableTestCoins').checked);

        app.engine.setPriceProvider(
            parseInt(this.priceProviderSelect.getValue()),
            this.priceUnitSelect.getValue()
        );

        this.updateMarketCap();
    },
    handleAnyQRCode: function(addr, args) {

        if ('escrowPrivateKey' in args) {
            return app.handleReceiveMessage(args.coinCode, args.escrowPrivateKey);
        }

        if (!args.coin && args.coinCode && (args.coinCode in allCoinApis)) {
            args.coin = allCoinApis[args.coinCode].name;
        }
        if (!args.coin) {
            this.alertError('unknown code');
            return;
        }

        this.alertInfo('detected ' + args.coin + ' address');
        for (var key in this.wallets) {
            if (this.wallets[key].handler.name == args.coin) {
                if ('sendPayment' in this.wallets[key].handler) {
                    var afterSendCallback = ('callback' in args ? args['callback'] : null);
                    this.popupSendPayment(this.wallets[key], this.wallets[key].data.systemBalance, afterSendCallback);
                    this.pasteToSendForm(addr, args);
                } else {
                    this.alertError('coin ' + args.coin + ' is not yet supported');
                }
                return;
            }
        }
        this.alertInfo('coin ' + args.coin + ' is not in your active wallets or is unknown');
    },

    pasteToSendForm: function(addr, args) {
        if (args.coin) {
            if (this.sendWallet.handler.name != args.coin) {
                this.alertInfo('Warning: This seems like a ' + args.coin + ' address but you are sending ' + this.sendWallet.handler.name + '!');
            }
        }
        document.getElementById('sendCoinAddr').value = addr;
        app.validateAddr('sendCoinAddr');

        if ('amount' in args && args.amount){
            document.getElementById('sendCoinAmount').value = parseFloat(args.amount);
            app.coinUpdateValue('sendCoin', app.sendWallet.handler);
            app.sendCoinValidateAmount('sendCoin');
        }
    },
    _parseTransactionText: function(text, callback) {
        if (text.startsWith('coffee:')) {
            var parts = text.split('/');

            if (parts.length == 4 && parts[1] == '' && parts[0] == 'coffee:' && !parts[3].startsWith('?')) {
                return callback(null, {
                    coinCode : parts[2],
                    escrowPrivateKey : parts[3]
                });
            } else if (parts.length == 4 && parts[1] == '' && parts[0] == 'coffee:') {
                text = parts[2] + parts[3];
            } else if (parts.length == 3 && parts[1] == '' && parts[0] == 'coffee:') {
                text = parts[2];
            } else {
                app.alertError('unknown url format: ' + text);
                return;
            }
        }

        //check if text is a plain address or transaction info:
        //https://github.com/bitcoin/bips/blob/master/bip-0021.mediawiki#Simpler syntax
        var a = text.split('?', 2);
        var argsStr = (a.length > 1) ? a[1] : '';
        var addr = a[0];

        var args = {};

        var b = addr.split(':', 2);
        if (b.length >1) {
            args.coin = b[0];
            addr = b[1];
        }

        argsStr.split('&').forEach(function(e){
            var kp = e.split('=', 2);
            if (kp.length>1) args[kp[0]] = decodeURIComponent(kp[1]);
        });
        if ('r' in args) {
            app.alertInfo('BIP72 address found. quering for payment details...');

            var oReq = new XMLHttpRequest();
            oReq.open("GET", args.r);
            oReq.addEventListener("load", function(){
                var paymentRequest = JSON.parse(this.responseText);
                //console.log(paymentRequest);
                var coin = 'unknown';
                if (paymentRequest.currency == 'BTC' && paymentRequest.network == 'main') coin = 'bitcoin';
                if (paymentRequest.currency == 'BTC' && paymentRequest.network == 'test') coin = 'bitcoin-test';
                if (paymentRequest.currency == 'BCH' && paymentRequest.network == 'main') coin = 'bitcoin-cash';

                if (paymentRequest.outputs.length != 1) {
                    app.alertError('payment requests with multiple outputs are not supported. sorry.');
                } else {
                    callback(paymentRequest.outputs[0].address, {'coin': coin, 'amount': paymentRequest.outputs[0].amount / 100000000});
                }
            });
            oReq.setRequestHeader('Accept', 'application/payment-request');
            //oReq.setRequestHeader('Accept', 'application/bitcoin-paymentrequest');
            oReq.send();
        } else {
            callback(addr, args);
        }
    },
    pasteAnyClipboard: function() {
        app.pasteClipboard(app.handleAnyQRCode.bind(app));
    },
    scanAnyQrCode: function() {
        app.scanQrCode(app.handleAnyQRCode.bind(app));
    },
    pasteClipboard: function(callback) {
        var that = this;
        osPlugins.pasteFromClipboard(function(text){
            that._parseTransactionText(text, callback);
        });
    },
    scanQrCode: function(callback) {
        osPlugins.scanQRCode(
            function (result) {
                if (!result.canceled) {
                    app._parseTransactionText(result.text, callback);
                }
            },
            function (error) {
                app.alertError("QR scan failed: " + error);
            },
            {
                preferFrontCamera : false, // iOS and Android
                showFlipCameraButton : true, // iOS and Android
                showTorchButton : true, // iOS and Android
                torchOn: true, // Android, launch with the torch switched on (if available)
                prompt : "Place addres or transaction barcode inside the scan area", // Android
            }
        );
    },

    pasteToField: function(field, addr, args) {
        document.getElementById(field).value = addr;
    },

    popupSendSocial: function(wallet) {
        this.popupSendPayment(wallet, wallet.data.systemBalance);
        this.toggleAll('normalSend', false);
        this.toggleAll('socialSend', true);
    },

    popupSendPayment: function(wallet, sendMaxBalance, afterSendCallback) {
        app.openForm('sendPaymentPopup', 'send ' + wallet.handler.ticker, 'coins/' + wallet.handler.icon + '.svg');

        app.toggleAll('normalSend', true);
        app.toggleAll('socialSend', false);

        document.getElementById('sendCoinAmountInput').innerHTML = '';
        app.sendAmountInputWidget = new engine.AmountInputWidget(wallet.handler, app.engine.priceProvider)
        app.sendAmountInputWidget.onchange = function() {
            //TODO: sendCoinUpdateBalanceAfter();
        }
        document.getElementById('sendCoinAmountInput').append(
            app.sendAmountInputWidget.element
        );
        //disable value edit for coins with no value


        app.sendMaxBalance = (typeof sendMaxBalance == 'undefined') ? null : sendMaxBalance;
        app.sendForceTotal = null;
        app.afterSendCallback = (typeof afterSendCallback == 'undefined') ? null : afterSendCallback;

        app.validateAddr('sendCoinAddr', true);
        app.sendWallet = wallet;

        app.sendFees = [];
        document.getElementById('sendCoinFee').rangeSlider.update({min: 0, max: 0, value: 0});

        document.getElementById('sendCoinFeeInfo').classList.add('default');
        document.getElementById('sendCoinBalanceAfter').classList.toggle('default', typeof sendMaxBalance != 'undefined');

        app.sendCoinUpdateFee();

        wallet.handler.getFeeOptions().then(function(fees){
            document.getElementById('sendCoinFee').rangeSlider.update({min: 0, max: fees.length - 1, value: Math.floor((fees.length - 1) / 2)})
            app.sendFees = fees;
            app.sendCoinUpdateFee();
        });
    },
    sendCoinSetMax: function() {
        if (app.sendMaxBalance) {
            app.sendForceTotal = app.sendMaxBalance;
            document.getElementById('sendCoinBalanceAfter').classList.remove('default');
            document.getElementById('sendCoinAmount').readOnly = true;
            document.getElementById('sendCoinValue').readOnly = true;
            document.getElementById('sendCoinAmount').value = app.sendWallet.handler.systemValueToDisplayValue(app.sendForceTotal);
            app.coinUpdateValue('sendCoin', app.sendWallet.handler);
            app.sendCoinValidateAmount('sendCoin');
            app.sendCoinUpdateFee();
        }
    },
    validateAddr: function(element, focus) {
        var valid = false;
        var elem = document.getElementById(element);
        elem.parentElement.classList.remove('invalid');
        elem.parentElement.classList.remove('valid');
        elem.parentElement.lastElementChild.innerHTML = '';

        elem.parentElement.classList.toggle('filled', elem.value != '' || elem == document.activeElement);

        if (typeof focus == 'undefined') {

            valid = (element == 'addOfflineAssetAddr' ? app.offlineAssetWallet : this.sendWallet).handler.validateAddress(elem.value);

            elem.parentElement.classList.add(valid ? 'valid' : 'invalid');
            if (!valid) {
                elem.parentElement.lastElementChild.innerHTML = 'invalid address';
            }
        }
        return valid;
    },

    sendCoinValidateFee: function() {
        if (this.sendFees && (document.getElementById('sendCoinFee').value in this.sendFees)) {
            return true;
        } else {
            app.alertError('please wait for fees update');
            return false;
        }
    },

    sendCoinUpdateBalanceAfter: function(){
        var balanceAfter = '?';
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
        document.getElementById('balanceAfter').innerHTML = balanceAfter;
    },

    sendCoinUpdateFee: function(){
        app.sendCoinUpdateBalanceAfter();
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
        }
    },

    authenticateBeforeContinue: function(title, message, authCallback) {
        //message = message; // + '<br/>If your device supports fingerprint/face scanner you will be asked to authenticate.';
        this.confirmBeforeContinue(title, message, authCallback, 'confirm', 'cancel');
        this.lockDialogAuthenticate = true;
    },


    sendSocialPaymentShare: function(coin, displayAmount, tmpPrivateKey) {
        var receiveLink = coin + '/' + tmpPrivateKey; //'coffee://' +
        var subject = displayAmount + ' ' + coin + ' for you!';
        var message = subject + '\n' +
            'To receive ' + displayAmount + ' ' + coin + ' go to:\n' +
            'https://wallet.coffee/receive#' + receiveLink;

        osPlugins.shareDialog(subject, message, function() {
            app.alertInfo('If you sent the message, recipient will be able to withdraw this transfer.');
        }, function(msg) {
            app.alertError('Sharing failed with message: ' + msg);
        });
    },

    sendSocialPaymentCommit: function(coin, amount, fee) {

        var tmpPrivateKey = app.sendWallet.handler.newRandomPrivateKey();
        var tmpAddr = app.sendWallet.handler.addrFromPrivateKey(tmpPrivateKey);


        var displayAmount = app.sendWallet.handler.systemValueToDisplayValue(amount);

        Logger.logTransaction('sendasmessage', 'sent ' + displayAmount + ' ' + coin + ' as message', {coin:coin, pk:tmpPrivateKey});

        app.alertInfo('Sending to blockchain escrow...');
        app.sendWallet.handler.sendPayment(app.sendWallet.data.privateKey, tmpAddr, amount, fee);
        app.closeForm();

        app.sendSocialPaymentShare(coin, displayAmount, tmpPrivateKey);
    },
    sendSocialPayment: function() {

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
    },

    addOrActivateCoin: function(code, callback) {
        if (code in app.wallets) {
            app.wallets[code].setActive(true);
            callback();
        } else if (code in app.engine.allCoinHandlers) {
            app.engine.addWallet(code, []);
            app.engine.saveData().then(function(){
                app.wallets[code] = app.addWalletWidget(app.engine.wallets[code]);
                app.wallets[code].setActive(true);
                callback();
            });
        } else {
            app.alertError('unknown coin ' + coin);
        }
    },

    proceedToReceiveMessage: function(handler, privateKey, balance, unconfirmed, defaultFee, callback) {

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
    },

    handleReceiveMessage: function(code, privateKey, callback) {
        //TODO use keychain
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
        }
    },

    handleUrlOpened: function(url, callback) {
        var parts = url.split('/');
        if (parts.length == 4 && parts[0] == 'coffee:' && !parts[3].startsWith('?')) {
            app.handleReceiveMessage(parts[2], parts[3], callback);
        } else {
            //ignore callback not to show airdrop info on url open different than receive via msg.
            app._parseTransactionText(url, app.handleAnyQRCode.bind(app));
        }
    },

    onDataLoaded: function(callback) {
        if (typeof callback == 'undefined') {
            app.dataLoaded = true;
            if ('onDataLoadedCallback' in app) {
                app.onDataLoadedCallback(function(){
                    app.initAirdrop();
                });
            } else {
                app.initAirdrop();
            }
        } else {
            //TODO chain:
            if ('dataLoaded' in app && app.dataLoaded == true) {
                callback();
            } else {
                app.onDataLoadedCallback = callback;
            }
        }
    },

    sendPayment: function() {

        if (!(this.validateAddr('sendCoinAddr') && app.sendAmountInputWidget.validate() && this.sendCoinValidateFee())) {
            return;
        }

        var coin = this.sendWallet.handler.ticker;
        var fee = this.sendFees[document.getElementById('sendCoinFee').value];
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

        app.authenticateBeforeContinue(
            '<table class="transactionSummary">' +
            '<tr class="first"><td><img class="coinIcon" src="coins/' + app.sendWallet.handler.icon + '.svg"/></td><td><img style="width:65%" src="icons/sendglyph.png"/></td><td>' + app.engine.getCoinAddrIcon(app.sendWallet.handler, addr).outerHTML + '</td></tr>' +
            '<tr class="second"><td>' + app.engine.shortAmount(displayAmount, coin, 13) + '</td><td></td><td>' + app.engine.shortAddr(addr, 13) + '</td></tr>' +
            '</table>',
            '<table class="niceTable">' +
            '<tr><th colspan="2" style="width:26%;">recipient:</th></tr><tr><td colspan="2">' + addr + '</td></tr>' +
            '<tr><th colspan="2">amount:</th></tr><tr><td style="width:50%;">' + displayAmount + ' ' + coin + '</td><td>' + app.engine.priceProvider.convert(floatAmount, this.sendWallet.handler) + '</td></tr>' +
            '<tr><th colspan="2">fee:</th></tr><tr><td>' + app.sendWallet.handler.getFeeDisplay(fee) + '</td><td>' + app.sendWallet.handler.getFeeValueDisplay(fee) + '</td></tr>' +
            '</table>'
            ,
            function(){
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

                } : null);
                app.closeForm();
            }
        );
    },
    copyReceiveCoinAddrToClp: function() {
        osPlugins.copyToClipboard(document.getElementById('receiveCoinAddr').value);
        app.alertInfo('copied code to clipboard', app.receivingWallet.handler.code);
    },
    shareReceivePaymentCode: function() {
        var message = 'currency: ' + app.receivingWallet.handler.ticker + '\naddress: ' + app.receivingAddr;

        var value = app.receiveAmountInputWidget.getValue();
        if (value) {
            message += '\namount: ' + value;
        }
        message += '\nlink: \n' + 'https://wallet.coffee/request.html#' + this.updateReceivePaymentCode();

        osPlugins.shareDialog('', message, function() {
            app.alertInfo('Any recipients will be able to use code to make a payment.');
        }, function(msg) {
            app.alertError('Sharing failed with message: ' + msg);
        });
    },
    updateReceivePaymentCode: function(value) {

        var code = app.receivingWallet.handler.name + ':' + app.receivingAddr;
        document.getElementById('setAmountLabel').innerHTML = 'set amount';
        if (value) {
            code = code + '?amount=' + value.toFixed(app.receivingWallet.handler.decimals);
            document.getElementById('setAmountLabel').innerHTML = 'change amount';
        }
        document.getElementById('receiveCoinAddr').value = code;
        document.getElementById('receiveCoinQrcode').innerHTML = '';
        new QRCode(document.getElementById('receiveCoinQrcode'), {
            text: code,
            width: 256,
            height: 256,
            colorLight: '#ffffff',
            colorDark: '#463f3a'
        });
        return code;
    },

    popupReceivePayment: function(wallet, addr) {
        this.openForm('receivePaymentPopup', 'receive ' + wallet.handler.ticker, 'coins/' + wallet.handler.icon + '.svg');
        //document.getElementById('receiveCoinLabel').innerHTML = '';
        document.getElementById('receiveCoinAddr').value = '';
        document.getElementById('receiveCoinQrcode').innerHTML = '';


        document.getElementById('receiveCoinAmountInput').innerHTML = '';
        app.receiveAmountInputWidget = new engine.AmountInputWidget(wallet.handler, app.engine.priceProvider)
        app.receiveAmountInputWidget.onchange = app.updateReceivePaymentCode.bind(this)
        document.getElementById('receiveCoinAmountInput').append(
            app.receiveAmountInputWidget.element
        );

        document.getElementById('receiveCoinBottom').classList.remove('custom-amount');

        if (addr == null) {
            //document.getElementById('receiveCoinLabel').innerHTML = 'Your ' + wallet.handler.code + ' address is:';
            document.getElementById('receiveCoinNote').innerHTML = '';
        } else {
            //document.getElementById('receiveCoinLabel').innerHTML = '' + wallet.handler.code + ' offline address:';
            document.getElementById('receiveCoinNote').innerHTML = 'This is an imported address,<br/> use it only if you control its private key!';
        }
        var addrString = addr == null ? wallet.handler.getReceiveAddr(app.engine.keychain) : addr;
        document.getElementById('receiveCoinIdenticon').innerHTML = '';
        document.getElementById('receiveCoinIdenticon').appendChild(app.engine.getCoinAddrIcon(wallet.handler, addrString));

        this.receivingWallet = wallet;
        this.receivingAddr = addrString;
        this.updateReceivePaymentCode();

        //TODO button:
        //setTimeout(app.updateReceivingWallet, 3000);
    },

    updateReceivingWallet: function() {
        if (document.getElementById("formPopup").classList.contains('show')) {
            if (document.getElementById('receivePaymentPopup').style.display == 'block') {
                //console.log('refresh');
                app.receivingWallet.refreshOnline(function(){
                    setTimeout(app.updateReceivingWallet, 3000);
                });
            }
        }
    },

    saveVersion: function() {
        app.engine.settings.set('appVersion', window.version);
    },
    showChangelogIfVersionUpdated: function(callback) {
        var oldVersion = app.engine.settings.get('appVersion', '0.1.7');
        if (oldVersion != window.version) {
            app.saveVersion();
            var changelist = '';
            for (var i in window.changelog) {
                if (versionCompare(window.changelog[i].version, oldVersion) != 1) break;
                changelist += '<b>version ' + window.changelog[i].version + '</b> ' + window.changelog[i].date + '<ul>';
                for (var j in window.changelog[i].changes) {
                    changelist += '<li>' + window.changelog[i].changes[j] + '</li>';
                }
                changelist += '</ul>';
            }
            this.confirmBeforeContinue(
                'updated to ' + window.version,
                '<p>Your were running ' + oldVersion + ' previously. ' + (changelist != '' ? 'Below is a complete list of changes.' : 'Thanks for updating.') + '</p>' +
                changelist,
                function(){
                    callback(true);
                }
            );
        } else {
            callback(false);
        }
    },

    flushUxHint: function(file) {
        document.getElementById("uxHint").innerHTML = '<img src="img/' + file + '.png"/>';
        document.getElementById('uxHint').classList.add('blink');
        setTimeout(function(){document.getElementById('uxHint').classList.remove('blink');}, 1000);
    },

    recoverWallet: function(invalidMnemonic) {
        var input = document.createElement("textarea");
        input.id = input.name = "mnemonic";
        input.rows = "3";
        app.confirmBeforeContinue(
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
    },

    initNewWallet: function() {
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
    },

    initRecoveredWallet: function() {
        app.confirmBeforeContinue(
            'Wallet Recovered',
            '<p>All your new wallets will be generated using your recovery phrase.<p>' +
            '<p>Please <strong>add wallets</strong> you were holding and refresh balances.<p>',
            function() {
                app.onDataLoaded();
            }),
            'ok';

    },

    createNewWallet: function() {

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
                var mnemonic = engine.bitcoin.generateNewMnemonic();
                app.data.wallets.bip39 = {
                    enabled : false,
                    mnemonic: mnemonic,
                    seedHex: engine.bitcoin.mnemonicToSeedHex(mnemonic)
                };
                app.data.save();
                app.initNewWallet();
            },
            'create wallet'
            //document.getElementById('lockMessage').appendChild();
        );

    },


    onDeviceReady: function() {


        rangeSlider.create(document.getElementById('sendCoinFee'), {
            polyfill: true,
            vertical: false,
            min: 0,
            max: 100,
            step: 1,
            value: 50,
            borderRadius: 10,
        });



        document.getElementById('sendCoinFee').parentElement.addEventListener ("touchstart", function() {
            document.getElementById('sendCoinFee').focus();
        });

        this.exchangeProviderSelect = new Select(document.getElementById("exchangeProvider"));
        this.exchangeableCoinsCache = [];
        for (var key in app.engine.allExchangeProviders) {
            var provider = allExchangeProviders[key];
            app.getExchangeableCoins(
                provider,
                function(list) {
                    for (var i in list){
                        if (app.exchangeableCoinsCache.indexOf(list[i]) == -1) {
                            app.exchangeableCoinsCache.push(list[i]);
                        }
                    }
                }
            );
        }

    }
    */

}