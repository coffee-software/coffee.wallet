import {ListItemWidget} from "./ListItemWidget";
import {Wallet} from "../Wallet";
import {Engine} from "../Engine";
import {Balance} from "../Handlers/BaseCoinHandler";

export class WalletWidget extends ListItemWidget {

    wallet : Wallet
    private engine: Engine

    onlineAmount : HTMLElement
    onlineAmountFull : HTMLElement
    onlineValue : HTMLElement
    onlineValueFull : HTMLElement
    offlineAmount : HTMLElement
    offlineAmountFull : HTMLElement
    offlineValue : HTMLElement
    offlineValueFull : HTMLElement

    refreshButton : HTMLElement
    refreshButton2 : HTMLElement

    onlineBalance: Balance
    portfolioBalance: Balance

    refreshLock: number = 0

    constructor(engine: Engine, wallet : Wallet) {
        super();
        this.wallet = wallet;
        this.engine = engine;

        this.centerCell.innerHTML = '<div style="padding:0 13px;"><img class="coinIcon" src="coins/' + this.wallet.handler.icon + '.svg" alt="' + this.wallet.handler.ticker + '"/></div>';

        this.leftCell.classList.add('online');

        this.onlineAmount = document.createElement("div");
        this.onlineAmountFull = document.createElement("span");
        this.onlineValue = document.createElement("div");
        this.onlineValueFull = document.createElement("span");

        this.leftCell.appendChild(this.onlineValue).classList.add('value');
        this.leftCell.appendChild(this.onlineAmount).classList.add('amount');

        if (this.wallet.isOnline()) {
            this.leftButtons.appendChild(ListItemWidget.createButton('receive', 'receive',  function(){this.onreceive(this, wallet)}.bind(this)));
            this.leftButtons.appendChild(ListItemWidget.createButton('send', 'send',  function(){this.onsend(this, wallet)}.bind(this)));
        } else {
            this.leftCell.classList.add('disabled');
        }

        this.rightCell.classList.add('offline');

        this.offlineAmount = document.createElement("div");
        this.offlineAmountFull = document.createElement("span");
        this.offlineValue = document.createElement("div");
        this.offlineValueFull = document.createElement("span");

        this.rightCell.appendChild(this.offlineValue).classList.add('value');
        this.rightCell.appendChild(this.offlineAmount).classList.add('amount');

        this.refreshButton = ListItemWidget.createButton('refresh', 'refresh', this.wallet.isOnline() ? this.refreshButtonClick.bind(this) : null);
        this.refreshButton.classList.add('spinner');

        this.refreshButton2 = ListItemWidget.createButton('refresh', 'refresh', this.wallet.isOnline() ? this.refreshButtonClick.bind(this) : null);
        this.refreshButton2.classList.add('spinner');

        this.rightButtons.appendChild(this.refreshButton);
        this.rightButtons.appendChild(ListItemWidget.createButton('list', 'portfolio', function(){this.onportfolio(this, wallet)}.bind(this)));

        this.refreshOffline();
        this.refreshOnline();

        //this.refreshButtonClick();

        this.slidingRow.addEventListener('click', function(){this.onclick(this, wallet)}.bind(this));
    }

    public onclick: (value:WalletWidget, wallet:Wallet) => void;
    public onportfolio: (value:WalletWidget, wallet:Wallet) => void;
    public onreceive: (value:WalletWidget, wallet:Wallet) => void;
    public onsend: (value:WalletWidget, wallet:Wallet) => void;

    private refreshButtonClick(){
        if (this.refreshLock > 0) {
            return false;
        }
        this.refreshLock = 2;
        this.refreshButton.classList.add('spinning');
        this.refreshButton2.classList.add('spinning');
        this.refreshOffline().then(function(){this.refreshLock--}.bind(this))
        this.refreshOnline().then(function(){this.refreshLock--}.bind(this))
        setTimeout(this.refreshButtonStop.bind(this), 1000);
    }

    private refreshButtonStop() {
        if (this.refreshLock == 0) {
            this.refreshButton.classList.remove('spinning');
            this.refreshButton2.classList.remove('spinning');
        } else {
            setTimeout(this.refreshButtonStop.bind(this), 1000);
        }
    }

    updateOfflineValue() : number {
        this.offlineValueFull.innerHTML = this.offlineValue.innerHTML = this.engine.getFiatValueString(this.portfolioBalance);
        return this.engine.getFiatValue(this.portfolioBalance);
    }

    updateOnlineValue() {
        this.onlineValueFull.innerHTML = this.onlineValue.innerHTML = this.engine.getFiatValueString(this.onlineBalance);
        return this.engine.getFiatValue(this.onlineBalance);
    }

    async refreshOffline() {
        this.portfolioBalance = this.wallet.getCachedPortfolioTotal();
        this.portfolioBalance = await this.wallet.getPortfolioTotal();
        this.offlineAmount.innerHTML = this.engine.getValueString(this.portfolioBalance);
        this.offlineAmountFull.innerHTML = this.engine.getValueString(this.portfolioBalance);
        this.updateOfflineValue();
    }

    async refreshOnline() {
        this.onlineBalance = this.wallet.getCachedBalance();
        this.onlineAmount.innerHTML = this.engine.getValueString(this.onlineBalance)
        this.onlineAmountFull.innerHTML = this.engine.getValueString(this.onlineBalance)
        this.updateOnlineValue();
        if (this.wallet.isOnline()) {
            this.onlineBalance = await this.wallet.getBalance();
            this.leftCell.classList.toggle('unconfirmed', !this.onlineBalance.unconfirmed.isZero());
            this.onlineAmount.innerHTML = this.engine.getValueString(this.onlineBalance)
            this.onlineAmountFull.innerHTML = this.engine.getValueString(this.onlineBalance)
            this.updateOnlineValue();
        }
    }
}