import {StorageInterface} from "./Engine";

type OsPlugins = {
    getStorage: () => StorageInterface
    checkForUpdates: (callback:() => void) => void
    hideNativeSplash: () => void
}

declare global {
    var __OS_PLUGINS__: OsPlugins;
}

export var OsPlugins = __OS_PLUGINS__;
