"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BigNum_1 = require("../BigNum");
var AmountInputWidget = (function () {
    function AmountInputWidget(handler, priceProvider) {
        this.handler = handler;
        this.priceProvider = priceProvider;
        this.element = document.createElement("div");
        this.element.classList.add('amount-input');
        this.amountInput = this.createInput('amount', handler.ticker);
        var divider = document.createElement("div");
        divider.classList.add('equalizer');
        divider.innerHTML = '=';
        this.element.append(divider);
        this.valueInput = this.createInput('equivalent', priceProvider.unit);
        this.amountInput.onfocus = this.validate.bind(this, true);
        this.amountInput.onblur = this.validate.bind(this, false);
        this.amountInput.onchange = this.updateValue.bind(this);
        this.amountInput.onkeyup = this.updateValue.bind(this);
        this.valueInput.onfocus = this.validate.bind(this, true);
        this.valueInput.onblur = this.validate.bind(this, false);
        this.valueInput.onchange = this.updateAmount.bind(this);
        this.valueInput.onkeyup = this.updateAmount.bind(this);
        this.legendElement = document.createElement("div");
        this.legendElement.classList.add('legend');
        this.element.append(this.legendElement);
    }
    AmountInputWidget.prototype.setValue = function (value) {
        this.amountInput.value = value === null ? '' : value.toFixed(this.handler.decimals);
        this.updateValue();
    };
    AmountInputWidget.prototype.getValue = function () {
        return this.amountInput.value ? parseFloat(this.amountInput.value) : null;
    };
    AmountInputWidget.prototype.createInput = function (label, unit) {
        var element = document.createElement("input");
        element.type = 'number';
        element.step = '0.000000000001';
        var unitElement = document.createElement("span");
        unitElement.classList.add('unit');
        unitElement.innerHTML = unit;
        var labelElement = document.createElement("label");
        labelElement.innerHTML = label;
        var field = document.createElement("div");
        field.classList.add('field');
        field.append(element);
        field.append(unitElement);
        field.append(labelElement);
        this.element.append(field);
        return element;
    };
    AmountInputWidget.prototype.updateValue = function () {
        var amount = this.amountInput.value;
        var price = this.priceProvider.getPrice(this.handler);
        if (amount && price) {
            this.valueInput.value = (parseFloat(amount) * price).toFixed(2);
        }
        else {
            this.valueInput.value = '';
        }
        this.onchange && this.onchange(parseFloat(this.amountInput.value));
    };
    AmountInputWidget.prototype.updateAmount = function () {
        var value = this.valueInput.value;
        if (value === '') {
            this.amountInput.value = '';
        }
        else {
            var price = this.priceProvider.getPrice(this.handler);
            this.amountInput.value = BigNum_1.BigNum.fromFloat(parseFloat(value) / price, this.handler.decimals).toFloat(this.handler.decimals).toFixed(this.handler.decimals);
        }
        this.onchange && this.onchange(parseFloat(this.amountInput.value));
    };
    AmountInputWidget.prototype.validate = function (focus) {
        if (focus === void 0) { focus = false; }
        var valid = false;
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
    };
    return AmountInputWidget;
}());
exports.AmountInputWidget = AmountInputWidget;
//# sourceMappingURL=AmountInputWidget.js.map