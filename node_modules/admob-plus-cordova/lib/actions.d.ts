import { MobileAd } from './api';
export declare function createAd<Ad extends MobileAd, O = ConstructorParameters<typeof Ad>[0]>(cls: {
    new (opts: O): Ad;
    type: string;
}, opts: O): Promise<InstanceType<typeof MobileAd>>;
