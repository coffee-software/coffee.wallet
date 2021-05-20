
type ConfigData = {
    changelly: {
        apiKey: string,
        apiSecret: string
    },
    now: {
        apiKey: string
    },
    admob: {
        publisherId: string,
        interstitialAdId: string
    },
    infuraKey: string,
    airdrop: {
        coin: string
        parentCoin: string
        secret: string
        endpoint: string
    }
    integrationMnemonic1: string|null
    integrationMnemonic2: string|null

}

declare global {
    var __CONFIG_DATA__: ConfigData;
}

export var Config = __CONFIG_DATA__;