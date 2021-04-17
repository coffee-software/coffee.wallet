

export class SelectWidget {

    element: HTMLSelectElement
    onChange: (value:any) => void

    constructor(onChange: (value:any) => void) {
        this.element = document.createElement('select');
        this.onChange = onChange
        this.element.onchange = this.onElementChange.bind(this)
    }

    setOptions(options: any[], selected: number|string) {
        this.element.innerHTML = '';
        for (let i = 0; i < options.length; i++) {
            if (typeof options[i] == "string") {
                this.element.add(new Option(options[i], options[i], false, options[i] == selected));
            } else if ('name' in options[i]) {
                this.element.add(new Option(options[i].name, i.toString(), false, i == selected));
            }
        }
        this.onChange && this.onChange(selected);
    }

    getValue() {
        return this.element.value;
    }

    setValue(value: string) {
        this.element.value = value;
        this.onChange && this.onChange(value);
    }

    private onElementChange(event : Event) {
        this.onChange((event.target as any).value)
    }
}