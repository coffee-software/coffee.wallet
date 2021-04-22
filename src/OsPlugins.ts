import {StorageInterface} from "./Engine";

type OsPlugins = {
    getStorage: () => StorageInterface
    checkForUpdates: (callback: () => void) => void
    hideNativeSplash: () => void
    authenticateUser: (callback: () => void) => void
    openInSystemBrowser: (url: string) => void
    generatePDF: (html: string, fileName: string, success: () => void, error: (message:string) => void) => void
}

declare global {
    var __OS_PLUGINS__: OsPlugins;
}

export var OsPlugins = __OS_PLUGINS__;
