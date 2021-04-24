import {Widget} from "./Widget";


export class SliderInputWidget implements Widget {

    element: HTMLElement
    input: HTMLInputElement
    onChange: (value: any) => void
    options: number[]

    constructor(onChange: (value: any) => void) {
        this.element = document.createElement('div');
        this.element.classList.add('range-input');
        this.input = document.createElement('input');
        this.input.type = "range";
        this.input.min = "0";
        this.input.max = "100";
        this.input.step = "1";
        this.onChange = onChange;
        this.element.append(this.input);
        document.body.append(this.element);
        (window as any).rangeSlider.create(this.input, {
            polyfill: true,
            vertical: false,
            min: 0,
            max: 100,
            step: 1,
            value: 50,
            borderRadius: 10,
        });
        this.options = [];
        this.input.oninput = this.onElementChange.bind(this)
        this.element.addEventListener ("touchstart", this.input.focus.bind(this.input));
    }

    private onElementChange(event : Event) {
        this.onChange((event.target as any).value)
    }

    setOptions(options: number[]) {
        this.options = options;
        (this.input as any).rangeSlider.update({min: 0, max: options.length -1, value: Math.floor((options.length - 1) / 2)});
    }

    getValue(): number {
        let idx = parseInt(this.input.value);
        if (idx in this.options) {
            return this.options[idx];
        } else {
            return null;
        }
    }
}