import { MobileAd, MobileAdOptions } from './shared';
export declare class GenericAd<S = Record<string, any>> extends MobileAd {
    private _init;
    constructor(opts: MobileAdOptions);
    isLoaded(): Promise<boolean>;
    load(): Promise<void>;
    show(opts?: S): Promise<boolean>;
    protected init(): Promise<void>;
}
export default class AppOpenAd extends GenericAd {
}
