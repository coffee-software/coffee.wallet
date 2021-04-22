import {Wallet} from "../Wallet";
import {PortfolioItem} from "../PortfolioItem";
import {ListItemWidget} from "./ListItemWidget";
import {CoinAddressIcon} from "./CoinAddressIcon";
import {OsPlugins} from "../OsPlugins";
import {OnlineCoinHandler} from "../Handlers/BaseCoinHandler";

export class PortfolioItemWidget extends ListItemWidget {

    wallet : Wallet
    id: number
    item: PortfolioItem

    amountSpan: HTMLElement
    valueSpan: HTMLElement

    refreshButton: HTMLElement

    constructor(wallet : Wallet, id: number) {
        super()
        this.wallet = wallet;
        this.id = id;
        this.item = wallet.portfolio[id];

        let padding = document.createElement("div");
        padding.classList.add('padding');
        this.centerCell.appendChild(padding);
        let icon = (new CoinAddressIcon(wallet.handler, PortfolioItem.isAddress(this.item) ? this.item.address : null)).element;
        padding.appendChild(icon);

        this.leftCell.innerHTML = '<div class="value">' + this.item.toString() + '</div><div class="amount">' + this.item.label + '</div>';

        var amountContainer = document.createElement("div");
        var valueContainer = document.createElement("div");
        this.rightCell.appendChild(valueContainer).classList.add('value');
        this.rightCell.appendChild(amountContainer).classList.add('amount');

        this.amountSpan = document.createElement("span");
        this.valueSpan = document.createElement("span");
        amountContainer.appendChild(this.amountSpan);
        valueContainer.appendChild(this.valueSpan);

        if (wallet.isOnline() && PortfolioItem.isAddress(this.item)) {
            this.leftButtons.appendChild(ListItemWidget.createButton('receive', 'receive', function(){ this.onreceive(this); }.bind(this)));
            let historyUrl = (wallet.handler as OnlineCoinHandler).explorerLinkAddr(this.item.address);

            this.leftButtons.appendChild(ListItemWidget.createButton('link', 'history', function(){
                OsPlugins.openInSystemBrowser(historyUrl);
            }));

            this.refreshButton = ListItemWidget.createButton('refresh', 'refresh', this.refreshBalance.bind(this));
            this.refreshButton.classList.add('spinner');
            this.rightButtons.appendChild(this.refreshButton);
        }

        this.rightButtons.appendChild(ListItemWidget.createButton('edit', 'edit', function(){ this.onedit(this)}.bind(this)));
        this.rightButtons.appendChild(ListItemWidget.createButton('removef', 'remove', function(){ this.onremove(this)}.bind(this)));

        this.slidingRow.addEventListener('click', function(){ this.onclick(this)}.bind(this));

        this.updateBalanceAndValue();
    }

    public onclick: (item: PortfolioItemWidget) => void;
    public onreceive: (item: PortfolioItemWidget) => void;
    public onremove: (item: PortfolioItemWidget) => void;
    public onedit: (item: PortfolioItemWidget) => void;

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