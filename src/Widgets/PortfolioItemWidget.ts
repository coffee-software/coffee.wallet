import {Wallet} from "../Wallet";
import {PortfolioItem} from "../PortfolioItem";
import {ListItemWidget} from "./ListItemWidget";
import {CoinAddressIcon} from "./CoinAddressIcon";


export class PortfolioItemWidget extends ListItemWidget {

    wallet : Wallet
    id: number

    amountSpan: HTMLElement
    valueSpan: HTMLElement

    refreshButton: HTMLElement

    constructor(wallet : Wallet, id: number) {
        super()
        this.wallet = wallet;
        this.id = id;
        let item = wallet.portfolio[id];

        let padding = document.createElement("div");
        padding.classList.add('padding');
        this.centerCell.appendChild(padding);
        let icon = (new CoinAddressIcon(wallet.handler, PortfolioItem.isAddress(item) ? item.address : null)).element;
        padding.appendChild(icon);

        this.leftCell.innerHTML = '<div class="value">' + item.toString() + '</div><div class="amount">' + item.label + '</div>';

        var amountContainer = document.createElement("div");
        var valueContainer = document.createElement("div");
        this.rightCell.appendChild(valueContainer).classList.add('value');
        this.rightCell.appendChild(amountContainer).classList.add('amount');

        this.amountSpan = document.createElement("span");
        this.valueSpan = document.createElement("span");
        amountContainer.appendChild(this.amountSpan);
        valueContainer.appendChild(this.valueSpan);

        if (wallet.isOnline() && PortfolioItem.isAddress(item)) {
            this.leftButtons.appendChild(this.createButton('receive', 'receive', function(){
                //app.popupReceivePayment(that.wallet, that.data.addr);
            }));
            this.leftButtons.appendChild(this.createButton('link', 'history', function(){
                //osPlugins.openInSystemBrowser(wallet.handler.explorerLinkAddr(data.addr));
            }));


            //buttonsRight.appendChild(createButton('refresh', 'refresh', function(){that.refreshAmount();}));
            this.refreshButton = this.createButton('refresh', 'refresh', this.refreshBalance.bind(this));
            this.refreshButton.classList.add('spinner');
            this.rightButtons.appendChild(this.refreshButton);
        }

        this.rightButtons.appendChild(this.createButton('edit', 'edit', function(){
            //app.popupEditOfflineAsset(that);
        }));
        this.rightButtons.appendChild(this.createButton('removef', 'remove', this.removeAsset.bind(this)));

        this.slidingRow.addEventListener('click', function ( event ) {
            //app.flushUxHint('swipe');
            //app.popupOfflineAssetDetails(that);
        });

        this.updateBalanceAndValue();
    }

    removeAsset() {
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
    };

    refreshBalance() {
        /*
        var spinner = function() {
            that.refreshButton.classList.toggle('spinning', that.running);
            if (that.running) {
                setTimeout(spinner, 1000);
            }
        };
        if (!that.running) {
            that.running = true;
            if (that.refreshButton) spinner();
            that.wallet.checkForOfflineAssetChange(that.id - 1, function(){
                this.updateBalanceAndValue();
                that.running = false;
            });
        }*/
    }

    updateBalanceAndValue() {
        /*

        this.amount.innerHTML = app.priceProvider.formatMoney(this.data.balance, this.wallet.handler.code, 5);
        var value = this.data.balance * app.priceProvider.getPrice(this.wallet.handler.code);
        this.value.innerHTML = app.priceProvider.formatMoney(value, app.priceProvider.getUnit());
        return value;
         */
    }
}