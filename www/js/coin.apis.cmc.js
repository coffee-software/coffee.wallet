'use strict'

//automatic list from coinmarketcap api

var otherCoins = [{
    name: "bitcoin",
    code: "BTC",
    longname: "Bitcoin",
    description: "Bitcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoin/"
    }
},{
    name: "ethereum",
    code: "ETH",
    longname: "Ethereum",
    description: "Ethereum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ethereum/"
    }
},{
    name: "ripple",
    code: "XRP",
    longname: "Ripple",
    description: "Ripple coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ripple/"
    }
},{
    name: "bitcoin-cash",
    code: "BCH",
    longname: "Bitcoin Cash",
    description: "Bitcoin Cash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoin-cash/"
    }
},{
    name: "cardano",
    code: "ADA",
    longname: "Cardano",
    description: "Cardano coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cardano/"
    }
},{
    name: "litecoin",
    code: "LTC",
    longname: "Litecoin",
    description: "Litecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/litecoin/"
    }
},{
    name: "stellar",
    code: "XLM",
    longname: "Stellar",
    description: "Stellar coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/stellar/"
    }
},{
    name: "neo",
    code: "NEO",
    longname: "NEO",
    description: "NEO coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/neo/"
    }
},{
    name: "eos",
    code: "EOS",
    longname: "EOS",
    description: "EOS coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/eos/"
    }
},{
    name: "nem",
    code: "XEM",
    longname: "NEM",
    description: "NEM coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nem/"
    }
},{
    name: "iota",
    code: "MIOTA",
    longname: "IOTA",
    description: "IOTA coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/iota/"
    }
},{
    name: "dash",
    code: "DASH",
    longname: "Dash",
    description: "Dash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dash/"
    }
},{
    name: "monero",
    code: "XMR",
    longname: "Monero",
    description: "Monero coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/monero/"
    }
},{
    name: "tron",
    code: "TRX",
    longname: "TRON",
    description: "TRON coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tron/"
    }
},{
    name: "lisk",
    code: "LSK",
    longname: "Lisk",
    description: "Lisk coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/lisk/"
    }
},{
    name: "tether",
    code: "USDT",
    longname: "Tether",
    description: "Tether coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tether/"
    }
},{
    name: "vechain",
    code: "VEN",
    longname: "VeChain",
    description: "VeChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vechain/"
    }
},{
    name: "ethereum-classic",
    code: "ETC",
    longname: "Ethereum Classic",
    description: "Ethereum Classic coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ethereum-classic/"
    }
},{
    name: "qtum",
    code: "QTUM",
    longname: "Qtum",
    description: "Qtum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/qtum/"
    }
},{
    name: "bitcoin-gold",
    code: "BTG",
    longname: "Bitcoin Gold",
    description: "Bitcoin Gold coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoin-gold/"
    }
},{
    name: "populous",
    code: "PPT",
    longname: "Populous",
    description: "Populous coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/populous/"
    }
},{
    name: "icon",
    code: "ICX",
    longname: "ICON",
    description: "ICON coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/icon/"
    }
},{
    name: "raiblocks",
    code: "XRB",
    longname: "Nano",
    description: "Nano coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/raiblocks/"
    }
},{
    name: "omisego",
    code: "OMG",
    longname: "OmiseGO",
    description: "OmiseGO coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/omisego/"
    }
},{
    name: "zcash",
    code: "ZEC",
    longname: "Zcash",
    description: "Zcash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zcash/"
    }
},{
    name: "steem",
    code: "STEEM",
    longname: "Steem",
    description: "Steem coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/steem/"
    }
},{
    name: "binance-coin",
    code: "BNB",
    longname: "Binance Coin",
    description: "Binance Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/binance-coin/"
    }
},{
    name: "bytecoin-bcn",
    code: "BCN",
    longname: "Bytecoin",
    description: "Bytecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bytecoin-bcn/"
    }
},{
    name: "verge",
    code: "XVG",
    longname: "Verge",
    description: "Verge coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/verge/"
    }
},{
    name: "stratis",
    code: "STRAT",
    longname: "Stratis",
    description: "Stratis coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/stratis/"
    }
},{
    name: "siacoin",
    code: "SC",
    longname: "Siacoin",
    description: "Siacoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/siacoin/"
    }
},{
    name: "status",
    code: "SNT",
    longname: "Status",
    description: "Status coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/status/"
    }
},{
    name: "bitshares",
    code: "BTS",
    longname: "BitShares",
    description: "BitShares coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitshares/"
    }
},{
    name: "digixdao",
    code: "DGD",
    longname: "DigixDAO",
    description: "DigixDAO coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/digixdao/"
    }
},{
    name: "maker",
    code: "MKR",
    longname: "Maker",
    description: "Maker coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/maker/"
    }
},{
    name: "veritaseum",
    code: "VERI",
    longname: "Veritaseum",
    description: "Veritaseum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/veritaseum/"
    }
},{
    name: "aeternity",
    code: "AE",
    longname: "Aeternity",
    description: "Aeternity coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aeternity/"
    }
},{
    name: "walton",
    code: "WTC",
    longname: "Walton",
    description: "Walton coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/walton/"
    }
},{
    name: "waves",
    code: "WAVES",
    longname: "Waves",
    description: "Waves coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/waves/"
    }
},{
    name: "augur",
    code: "REP",
    longname: "Augur",
    description: "Augur coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/augur/"
    }
},{
    name: "0x",
    code: "ZRX",
    longname: "0x",
    description: "0x coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/0x/"
    }
},{
    name: "kucoin-shares",
    code: "KCS",
    longname: "KuCoin Shares",
    description: "KuCoin Shares coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kucoin-shares/"
    }
},{
    name: "rchain",
    code: "RHOC",
    longname: "RChain",
    description: "RChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rchain/"
    }
},{
    name: "dogecoin",
    code: "DOGE",
    longname: "Dogecoin",
    description: "Dogecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dogecoin/"
    }
},{
    name: "decred",
    code: "DCR",
    longname: "Decred",
    description: "Decred coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/decred/"
    }
},{
    name: "hshare",
    code: "HSR",
    longname: "Hshare",
    description: "Hshare coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hshare/"
    }
},{
    name: "kyber-network",
    code: "KNC",
    longname: "Kyber Network",
    description: "Kyber Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kyber-network/"
    }
},{
    name: "ardor",
    code: "ARDR",
    longname: "Ardor",
    description: "Ardor coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ardor/"
    }
},{
    name: "komodo",
    code: "KMD",
    longname: "Komodo",
    description: "Komodo coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/komodo/"
    }
},{
    name: "ark",
    code: "ARK",
    longname: "Ark",
    description: "Ark coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ark/"
    }
},{
    name: "zilliqa",
    code: "ZIL",
    longname: "Zilliqa",
    description: "Zilliqa coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zilliqa/"
    }
},{
    name: "gas",
    code: "GAS",
    longname: "Gas",
    description: "Gas coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gas/"
    }
},{
    name: "loopring",
    code: "LRC",
    longname: "Loopring",
    description: "Loopring coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/loopring/"
    }
},{
    name: "basic-attention-token",
    code: "BAT",
    longname: "Basic Attention Token",
    description: "Basic Attention Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/basic-attention-token/"
    }
},{
    name: "electroneum",
    code: "ETN",
    longname: "Electroneum",
    description: "Electroneum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/electroneum/"
    }
},{
    name: "dentacoin",
    code: "DCN",
    longname: "Dentacoin",
    description: "Dentacoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dentacoin/"
    }
},{
    name: "digibyte",
    code: "DGB",
    longname: "DigiByte",
    description: "DigiByte coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/digibyte/"
    }
},{
    name: "dragonchain",
    code: "DRGN",
    longname: "Dragonchain",
    description: "Dragonchain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dragonchain/"
    }
},{
    name: "aelf",
    code: "ELF",
    longname: "aelf",
    description: "aelf coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aelf/"
    }
},{
    name: "revain",
    code: "R",
    longname: "Revain",
    description: "Revain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/revain/"
    }
},{
    name: "byteball",
    code: "GBYTE",
    longname: "Byteball Bytes",
    description: "Byteball Bytes coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/byteball/"
    }
},{
    name: "pivx",
    code: "PIVX",
    longname: "PIVX",
    description: "PIVX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pivx/"
    }
},{
    name: "zclassic",
    code: "ZCL",
    longname: "ZClassic",
    description: "ZClassic coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zclassic/"
    }
},{
    name: "bytom",
    code: "BTM",
    longname: "Bytom",
    description: "Bytom coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bytom/"
    }
},{
    name: "qash",
    code: "QASH",
    longname: "QASH",
    description: "QASH coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/qash/"
    }
},{
    name: "golem-network-tokens",
    code: "GNT",
    longname: "Golem",
    description: "Golem coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/golem-network-tokens/"
    }
},{
    name: "nebulas-token",
    code: "NAS",
    longname: "Nebulas",
    description: "Nebulas coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nebulas-token/"
    }
},{
    name: "pillar",
    code: "PLR",
    longname: "Pillar",
    description: "Pillar coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pillar/"
    }
},{
    name: "bitcore",
    code: "BTX",
    longname: "Bitcore",
    description: "Bitcore coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcore/"
    }
},{
    name: "gxshares",
    code: "GXS",
    longname: "GXShares",
    description: "GXShares coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gxshares/"
    }
},{
    name: "iostoken",
    code: "IOST",
    longname: "IOStoken",
    description: "IOStoken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/iostoken/"
    }
},{
    name: "ethos",
    code: "ETHOS",
    longname: "Ethos",
    description: "Ethos coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ethos/"
    }
},{
    name: "dent",
    code: "DENT",
    longname: "Dent",
    description: "Dent coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dent/"
    }
},{
    name: "cindicator",
    code: "CND",
    longname: "Cindicator",
    description: "Cindicator coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cindicator/"
    }
},{
    name: "cryptonex",
    code: "CNX",
    longname: "Cryptonex",
    description: "Cryptonex coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cryptonex/"
    }
},{
    name: "syscoin",
    code: "SYS",
    longname: "Syscoin",
    description: "Syscoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/syscoin/"
    }
},{
    name: "smartcash",
    code: "SMART",
    longname: "SmartCash",
    description: "SmartCash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/smartcash/"
    }
},{
    name: "aion",
    code: "AION",
    longname: "Aion",
    description: "Aion coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aion/"
    }
},{
    name: "salt",
    code: "SALT",
    longname: "SALT",
    description: "SALT coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/salt/"
    }
},{
    name: "factom",
    code: "FCT",
    longname: "Factom",
    description: "Factom coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/factom/"
    }
},{
    name: "power-ledger",
    code: "POWR",
    longname: "Power Ledger",
    description: "Power Ledger coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/power-ledger/"
    }
},{
    name: "singularitynet",
    code: "AGI",
    longname: "SingularityNET",
    description: "SingularityNET coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/singularitynet/"
    }
},{
    name: "monacoin",
    code: "MONA",
    longname: "MonaCoin",
    description: "MonaCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/monacoin/"
    }
},{
    name: "funfair",
    code: "FUN",
    longname: "FunFair",
    description: "FunFair coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/funfair/"
    }
},{
    name: "kin",
    code: "KIN",
    longname: "Kin",
    description: "Kin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kin/"
    }
},{
    name: "nxt",
    code: "NXT",
    longname: "Nxt",
    description: "Nxt coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nxt/"
    }
},{
    name: "zcoin",
    code: "XZC",
    longname: "ZCoin",
    description: "ZCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zcoin/"
    }
},{
    name: "reddcoin",
    code: "RDD",
    longname: "ReddCoin",
    description: "ReddCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/reddcoin/"
    }
},{
    name: "enigma-project",
    code: "ENG",
    longname: "Enigma",
    description: "Enigma coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/enigma-project/"
    }
},{
    name: "particl",
    code: "PART",
    longname: "Particl",
    description: "Particl coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/particl/"
    }
},{
    name: "ignis",
    code: "IGNIS",
    longname: "Ignis",
    description: "Ignis coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ignis/"
    }
},{
    name: "bancor",
    code: "BNT",
    longname: "Bancor",
    description: "Bancor coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bancor/"
    }
},{
    name: "nexus",
    code: "NXS",
    longname: "Nexus",
    description: "Nexus coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nexus/"
    }
},{
    name: "tenx",
    code: "PAY",
    longname: "TenX",
    description: "TenX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tenx/"
    }
},{
    name: "request-network",
    code: "REQ",
    longname: "Request Network",
    description: "Request Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/request-network/"
    }
},{
    name: "maidsafecoin",
    code: "MAID",
    longname: "MaidSafeCoin",
    description: "MaidSafeCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/maidsafecoin/"
    }
},{
    name: "iconomi",
    code: "ICN",
    longname: "Iconomi",
    description: "Iconomi coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/iconomi/"
    }
},{
    name: "wax",
    code: "WAX",
    longname: "WAX",
    description: "WAX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/wax/"
    }
},{
    name: "gamecredits",
    code: "GAME",
    longname: "GameCredits",
    description: "GameCredits coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gamecredits/"
    }
},{
    name: "gnosis-gno",
    code: "GNO",
    longname: "Gnosis",
    description: "Gnosis coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gnosis-gno/"
    }
}];
