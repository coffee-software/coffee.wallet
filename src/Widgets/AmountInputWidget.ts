import {BaseCoinHandler} from "../Handlers/BaseCoinHandler";
import {BasePriceProvider} from "../PriceProviders/BasePriceProvider";
import {BigNum} from "../Core/BigNum";
import {Widget} from "./Widget";

export class AmountInputWidget implements Widget  {

    public element: HTMLDivElement;
    public amountInput: HTMLInputElement;
    public valueInput: HTMLInputElement;
    public legendElement: HTMLDivElement;
    private handler: BaseCoinHandler;
    private priceProvider: BasePriceProvider;

    public onchange: (value:number) => void;

    public setValue(value:number|null) {
        this.amountInput.value = value === null ? '' : value.toFixed(this.handler.decimals)
        this.updateValue()
    }

    public getBigNumValue(decimals: number) : BigNum|null {
        let ret = this.getValue()
        return ret ? BigNum.fromFloat(ret, decimals) : null
    }

    public getValue() : number|null {
        return this.amountInput.value ? parseFloat(this.amountInput.value) : null
    }

    constructor(handler: BaseCoinHandler, priceProvider: BasePriceProvider) {

        this.handler = handler;
        this.priceProvider = priceProvider;
        this.element = document.createElement("div");
        this.element.classList.add('amount-input');

        this.amountInput = this.createInput('amount', handler.ticker);

        let divider = document.createElement("div");
        divider.classList.add('equalizer')
        divider.innerHTML = '='
        this.element.append(divider);

        this.valueInput = this.createInput('equivalent', priceProvider.unit);

        this.amountInput.onfocus = this.validate.bind(this, true)
        this.amountInput.onblur = this.validate.bind(this, false)
        this.amountInput.onchange = this.updateValue.bind(this)
        this.amountInput.onkeyup = this.updateValue.bind(this)

        this.valueInput.onfocus = this.validate.bind(this, true)
        this.valueInput.onblur = this.validate.bind(this, false)
        this.valueInput.onchange = this.updateAmount.bind(this)
        this.valueInput.onkeyup = this.updateAmount.bind(this)

        this.legendElement = document.createElement("div");
        this.legendElement.classList.add('legend')
        this.element.append(this.legendElement);
    }

    createInput(label: string, unit: string) : HTMLInputElement {

        let element = document.createElement("input");
        element.type = 'number'
        element.step = '0.000000000001'
        //element.required = true

        let unitElement = document.createElement("span");
        unitElement.classList.add('unit')
        unitElement.innerHTML = unit

        let labelElement = document.createElement("label");
        labelElement.innerHTML = label

        let field = document.createElement("div");
        field.classList.add('field')
        field.append(element);
        field.append(unitElement);
        field.append(labelElement);

        this.element.append(field);

        return element;
    }

    updateValue() {
        let amount = this.amountInput.value;
        let price = this.priceProvider.getPrice(this.handler)
        if (amount && price) {
            this.valueInput.value = (parseFloat(amount) * price).toFixed(2);
        } else {
            this.valueInput.value = '';
        }
        this.onchange && this.onchange(parseFloat(this.amountInput.value));
    }

    updateAmount() {
        let value = this.valueInput.value;
        if (value === '') {
            this.amountInput.value = '';
        } else {
            let price = this.priceProvider.getPrice(this.handler)
            this.amountInput.value = BigNum.fromFloat(parseFloat(value) / price, this.handler.decimals).toFloat(this.handler.decimals).toFixed(this.handler.decimals);
        }
        this.onchange && this.onchange(parseFloat(this.amountInput.value));
    }

    validate(focus: boolean = false) : boolean {
        let valid = false;
        this.legendElement.innerHTML = '';

        this.element.classList.remove('invalid');
        this.element.classList.remove('valid');
        this.element.classList.toggle('filled', this.amountInput.value != '' || this.amountInput == document.activeElement || this.valueInput == document.activeElement);

        if (!focus) {
            valid = parseFloat(this.amountInput.value) > 0;
            this.element.classList.add(valid ? 'valid' : 'invalid');
            if (!valid) {
                this.legendElement.innerHTML = 'invalid amount';
            }
        }
        return valid;
    }
}