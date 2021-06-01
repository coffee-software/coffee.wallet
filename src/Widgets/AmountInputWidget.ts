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
    private customError: string = null;

    public onchange: (value:number) => void;

    public setValue(value:number|null) {
        this.amountInput.value = (value === null) ? '' : value.toFixed(this.handler.decimals)
        this.updateValue()
        this.validate()
    }

    public getBigNumValue() : BigNum|null {
        let ret = this.getValue()
        return ret ? BigNum.fromFloat(ret, this.handler.decimals) : null
    }

    /** @deprecated **/
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

        this.amountInput.onfocus = this.onFocus.bind(this)
        this.amountInput.onblur = this.onBlur.bind(this)
        this.amountInput.oninput = this.updateValue.bind(this)

        this.valueInput.onfocus = this.onFocus.bind(this)
        this.valueInput.onblur = this.onBlur.bind(this)
        this.valueInput.oninput = this.updateAmount.bind(this)

        let price = this.priceProvider.getPrice(this.handler)
        if (!price) {
            this.valueInput.readOnly = true;
            this.valueInput.type = 'text'
        }

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
        field.classList.add('side')
        field.append(element);
        field.append(unitElement);
        field.append(labelElement);

        this.element.append(field);

        return element;
    }

    setReadonly(readonly: boolean) {
        this.amountInput.readOnly = readonly;
        let price = this.priceProvider.getPrice(this.handler)
        this.valueInput.readOnly = !price && readonly;
    }

    updateValue() {
        this.customError = null;
        let amount = this.amountInput.value;
        let price = this.priceProvider.getPrice(this.handler)
        if (amount && price) {
            this.valueInput.value = (parseFloat(amount) * price).toFixed(2);
        } else if (amount ) {
            this.valueInput.value = '?'
        } else {
            this.valueInput.value = '';
        }
        this.validate();
        this.onchange && this.onchange(parseFloat(this.amountInput.value));
    }

    updateAmount() {
        this.customError = null;
        let value = this.valueInput.value;
        if (value === '') {
            this.amountInput.value = '';
        } else {
            let price = this.priceProvider.getPrice(this.handler)
            this.amountInput.value = BigNum.fromFloat(parseFloat(value) / price, this.handler.decimals).toFloat(this.handler.decimals).toFixed(this.handler.decimals);
        }
        this.validate();
        this.onchange && this.onchange(parseFloat(this.amountInput.value));
    }

    setError(message: string) {
        this.customError = message;
        this.validate();
    }

    onFocus() {
        this.legendElement.innerHTML = '';
        this.element.classList.remove('invalid');
        this.element.classList.remove('valid');
        this.element.classList.toggle('filled', this.amountInput.value != '' || this.amountInput == document.activeElement || this.valueInput == document.activeElement);
    }

    validate() {
        this.onFocus();
        let valid = (this.customError === null) && (parseFloat(this.amountInput.value) > 0);
        this.element.classList.add(valid ? 'valid' : 'invalid');
        if (!valid) {
            this.legendElement.innerHTML = (this.customError === null) ? 'invalid amount' : this.customError;
        }
    }

    onBlur() {
        this.validate();
    }

}