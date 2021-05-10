import {BaseCoinHandler} from "../Handlers/BaseCoinHandler";
import {CacheWrapper} from "../Engine";

export abstract class BasePriceProvider {

    abstract name: string;
    abstract availableUnits: string[];
    defaultUnit: string;
    cache: CacheWrapper
    unit: string
    prices: { [code: string] : number } = null;

    constructor(cache: CacheWrapper, unit: string = null) {
        this.cache = cache;
        this.unit = unit;
    }

    init(): void {
        if (this.unit == null) {
            this.unit = this.defaultUnit
        }
        if (this.prices == null) {
            this.prices = this.cache.get(this.name + '_prices_' + this.unit, {});
        }
    }

    async updatePrices(handlers: { [code: string] : BaseCoinHandler }): Promise<void> {
        this.init();
        await this.fetchPrices(handlers);
        this.cache.set(this.name + '_prices_' + this.unit, this.prices);
    }

    abstract fetchPrices(handlers: { [code: string] : BaseCoinHandler }): Promise<void>;

    getPrice(handler: BaseCoinHandler): number {
        this.init();
        if (this.availableUnits.indexOf(this.unit) < 0) {
            throw new Error('Unknown unit ' + this.unit);
        }
        if (handler.code in this.prices) {
            return this.prices[handler.code];
        } else {
            return 0;
        }
    }

    formatMoney(value: number, unit: string = null, decimals: number = 2) {
        if (unit == null) {
            unit = this.unit;
        }
        return value.toFixed(decimals).replace(
            /./g,
            function (c, i, a) {
                return i && c !== "." && ((a.length - i) % 3 === 0) && (a.length - i > decimals) ? '&nbsp;' + c : c;
            }) + '&nbsp;' + unit;
    }

    convert(amount: number, handler: BaseCoinHandler) {
        this.init();
        if (handler.code in this.prices) {
            return this.formatMoney(amount * this.getPrice(handler), this.unit);
        } else {
            return '? ' + this.unit;
        }
    }
}

