import {Balance, NewTransaction, NewTransactionWrapper} from "../Handlers/BaseCoinHandler";

export class ReceiveMessageTransaction extends NewTransactionWrapper {


    getRightIcon(): string {
        return '<img class="coinIcon" src="coins/' + this.handler.icon + '.svg"/>';
    }

    getLeftIcon(): string {
        return '<img class="coinIcon" src="icons/messageglyph.png"/>';
    }

    getSummary(): { [p: string]: string|Balance } {
        let ret = super.getSummary();
        return ret;
    }

    getDescriptionHtml(): string {
        return 'Somebody used "Send via message" function to send you ' + this.handler.ticker + '. Click "confirm" to proceed and transfer contents to your wallet.';
    }

}
