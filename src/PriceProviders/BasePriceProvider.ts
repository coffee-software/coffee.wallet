import {BaseCoinHandler} from "../Handlers/BaseCoinHandler";
import {CacheWrapper} from "../Engine";

export abstract class BasePriceProvider {

    abstract name: string;
    abstract availableUnits: string[];
    defaultUnit: string;
    cache: CacheWrapper
    unit: string
    prices: { [code: string] : number } = {};

    constructor(cache: CacheWrapper, unit: string) {
        this.cache = cache;
        this.unit = unit;
    }

    getCache(unit: string): void {
        this.prices = this.cache.get(this.name + '_prices_' + this.unit, {});
    }

    async updatePrices(handlers: { [code: string] : BaseCoinHandler }): Promise<void> {
        await this.fetchPrices(handlers);
        this.cache.set(this.name + '_prices_' + this.unit, this.prices);
    }

    abstract fetchPrices(handlers: { [code: string] : BaseCoinHandler }): Promise<void>;

    getPrice(code: string): number {
        /*if (!(this.unit in this.availableUnits)) {
            throw new Error('Unknown unit ' + this.unit);
        }*/
        if (code in this.prices) {
            return this.prices[code];
        } else {
            return 0;
        }
    }

    formatMoney(value: number, unit: string, decimals: number = 2) {
        return value.toFixed(decimals).replace(
            /./g,
            function (c, i, a) {
                return i && c !== "." && ((a.length - i) % 3 === 0) && (a.length - i > decimals) ? '&nbsp;' + c : c;
            }) + '&nbsp;' + unit;
    }

    convert(amount: number, code: string) {
        if (code in this.prices) {
            return this.formatMoney(amount * this.getPrice(code), this.unit);
        } else {
            return '? ' + this.unit;
        }
    }
}

