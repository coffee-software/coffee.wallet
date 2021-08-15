import { GenericAd } from './app-open';
export default class NativeAd extends GenericAd<{
    x: number;
    y: number;
    width: number;
    height: number;
}> {
    hide(): Promise<unknown>;
}
