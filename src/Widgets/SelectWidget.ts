import {Widget} from "./Widget";


export class SelectWidget implements Widget {

    element: HTMLSelectElement
    onChange: (value:any) => void

    constructor(onChange: (value:any) => void) {
        this.element = document.createElement('select');
        this.onChange = onChange
        this.element.onchange = this.onElementChange.bind(this)
    }

    setOptions(options: any[]|{ [code: string]: { name: string } }, selected: number|string) {
        this.element.innerHTML = '';
        if (Array.isArray(options)) {
            for (let i = 0; i < options.length; i++) {
                this.element.add(new Option(options[i], options[i], false, options[i] == selected));
            }
        } else {
            for (let key in options) {
                this.element.add(new Option(options[key].name, key, false, key == selected));
            }
        }
        this.onChange && this.onChange(selected);
    }

    getValue() {
        return this.element.value;
    }

    setValue(value: any) {
        this.element.value = value;
        this.onChange && this.onChange(value);
    }

    private onElementChange(event : Event) {
        this.onChange((event.target as any).value)
    }
}