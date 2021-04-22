import {OnlineCoinHandler} from "../Handlers/BaseCoinHandler";

export class AddressInputWidget {

    handler : OnlineCoinHandler
    element: HTMLElement
    input: HTMLInputElement
    legend: HTMLElement
    onChange: (value:any) => void

    constructor(handler : OnlineCoinHandler) {
        this.handler = handler;
        this.element = document.createElement('div');
        this.element.classList.add('field');
        this.input = document.createElement('input');
        this.input.onfocus = this.focus.bind(this);
        this.input.onblur = this.validate.bind(this);
        this.input.required = true;
        this.element.append(this.input)
        let label = document.createElement('label');
        label.innerHTML = 'address';
        this.element.append(label)
        this.legend = document.createElement('div');
        this.legend.classList.add('legend')
        this.element.append(this.legend)
    }

    focus() {
        this.element.classList.remove('invalid');
        this.element.classList.remove('valid');
        this.legend.innerHTML = '';
        this.element.classList.toggle(
            'filled',
            this.input.value != '' || this.input == document.activeElement
        );
    }

    validate() {
        this.focus()
        let valid = this.handler.validateAddress(this.input.value);
        this.element.classList.add(valid ? 'valid' : 'invalid');
        if (!valid) {
            this.legend.innerHTML = 'invalid address';
        }
        return valid;
    }

    getValue() {
        return this.input.value;
    }

    setValue(value: string) {
        this.input.value = value;
    }
}