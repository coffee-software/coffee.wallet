import {StorageInterface} from "./Engine";

type OsPlugins = {
    getPlatformName: () => string
    getStorage: () => StorageInterface
    checkForUpdates: (callback: () => void) => void
    hideNativeSplash: () => void
    authenticateUser: (callback: () => void) => void
    openInSystemBrowser: (url: string) => void
    generatePDF: (html: string, fileName: string, success: () => void, error: (message:string) => void) => void
    scanQRCode: (success: (result:string) => void, error: (message:string) => void) => void
    pasteFromClipboard: (success: (content:string) => void) => void
    copyToClipboard: (content: string) => void
    shareDialog: (subject: string, message: string, success: () => void, error: (message:string) => void) => void
}

declare global {
    var __OS_PLUGINS__: OsPlugins;
}

export var OsPlugins = __OS_PLUGINS__;
