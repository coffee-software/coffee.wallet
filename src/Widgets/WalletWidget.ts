import {ListItemWidget} from "./ListItemWidget";
import {Wallet} from "../Wallet";
import {Engine} from "../Engine";
import {Balance} from "../Handlers/BaseCoinHandler";

export class WalletWidget extends ListItemWidget {

    private wallet : Wallet
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

    onlineBalance: Balance
    portfolioBalance: Balance

    refreshLock: boolean = false

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

        this.refreshButton = ListItemWidget.createButton('refresh', 'refresh', this.refreshButtonClick.bind(this));
        this.refreshButton.classList.add('spinner');

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

    async refreshButtonClick(){
        if (this.refreshLock) {
            return false;
        }
        this.refreshLock = true;
        this.refreshButton.classList.add('spinning');
        await this.refreshOffline()
        await this.refreshOnline()
        this.refreshButton.classList.remove('spinning');
        this.refreshLock = false;
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