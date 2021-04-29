import {Wallet} from "../Wallet";
import {PortfolioItem} from "../PortfolioItem";
import {ListItemWidget} from "./ListItemWidget";
import {CoinAddressIcon} from "./CoinAddressIcon";
import {OsPlugins} from "../OsPlugins";
import {Balance, OnlineCoinHandler} from "../Handlers/BaseCoinHandler";
import {Strings} from "../Tools/Strings";
import {Engine} from "../Engine";

export class PortfolioItemWidget extends ListItemWidget {

    wallet : Wallet
    engine: Engine
    id: number
    item: PortfolioItem

    amountSpan: HTMLElement
    valueSpan: HTMLElement

    refreshButton: HTMLElement

    constructor(engine: Engine, wallet : Wallet, id: number) {
        super()
        this.engine = engine;
        this.wallet = wallet;
        this.id = id;
        this.item = wallet.portfolio[id];

        let padding = document.createElement("div");
        padding.classList.add('padding');
        this.centerCell.appendChild(padding);
        let icon = (new CoinAddressIcon(wallet.handler, PortfolioItem.isAddress(this.item) ? this.item.address : null)).element;
        padding.appendChild(icon);
        let label = '';
        if (PortfolioItem.isAddress(this.item)) {
            label = '[' + Strings.shortAddr(this.item.address, 13) + ']'
        } else if (PortfolioItem.isBalance(this.item)) {
            label = this.item.balance + ' ' + wallet.handler.code
        }
        this.leftCell.innerHTML = '<div class="value">' + label + '</div><div class="amount">' + this.item.label + '</div>';

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

    private refreshLock : boolean = false;
    refreshBalance() {
        if (this.refreshLock) {
            return false;
        }
        this.refreshLock = true;
        this.refreshButton.classList.add('spinning');

        this.wallet.getPortfolioItemBalance(this.item).then(function(balance : Balance){
            this.updateBalanceAndValue();
            this.refreshLock = false;
        }.bind(this));

        setTimeout(this.refreshButtonStop.bind(this), 1000);
    }

    private refreshButtonStop() {
        if (!this.refreshLock) {
            this.refreshButton.classList.remove('spinning');
        } else {
            setTimeout(this.refreshButtonStop.bind(this), 1000);
        }
    }

    updateBalanceAndValue() {
        this.amountSpan.innerHTML =
            this.engine.getValueString(this.wallet.getCachedPortfolioItemBalance(this.item));

        this.valueSpan.innerHTML =
            this.engine.getFiatValueString(this.wallet.getCachedPortfolioItemBalance(this.item));
    }
}