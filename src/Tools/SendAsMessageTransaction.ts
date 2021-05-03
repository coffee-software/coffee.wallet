import {Balance, NewTransaction, NewTransactionWrapper} from "../Handlers/BaseCoinHandler";

export class SendAsMessageTransaction extends NewTransactionWrapper {


    getRightIcon(): string {
        return '<img class="coinIcon" src="icons/messageglyph.png"/>';
    }

    getSummary(): { [p: string]: string|Balance } {
        let ret = super.getSummary();
        ret['info'] =
            '<p>You will see your device share dialog in next step and will be able to select send medium.</p>' +
            '<p><strong>Warning:</strong> this feature uses an intermediate, escrow wallet. Recipient of this message will have to pay another network fee to claim it.</p>'
        return ret;
    }



}
