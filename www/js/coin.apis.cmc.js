'use strict'

//automatic list from coinmarketcap api

var otherCoins = [{
    name: "bitcoin",
    code: "BTC",
    icon: "btc",
    longname: "Bitcoin",
    description: "Bitcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoin/"
    }
},{
    name: "ripple",
    code: "XRP",
    icon: "xrp",
    longname: "XRP",
    description: "XRP coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ripple/"
    }
},{
    name: "ethereum",
    code: "ETH",
    icon: "eth",
    longname: "Ethereum",
    description: "Ethereum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ethereum/"
    }
},{
    name: "stellar",
    code: "XLM",
    icon: "xlm",
    longname: "Stellar",
    description: "Stellar coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/stellar/"
    }
},{
    name: "bitcoin-cash",
    code: "BCH",
    icon: "bch",
    longname: "Bitcoin Cash",
    description: "Bitcoin Cash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoin-cash/"
    }
},{
    name: "eos",
    code: "EOS",
    icon: "eos",
    longname: "EOS",
    description: "EOS coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/eos/"
    }
},{
    name: "litecoin",
    code: "LTC",
    icon: "ltc",
    longname: "Litecoin",
    description: "Litecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/litecoin/"
    }
},{
    name: "tether",
    code: "USDT",
    icon: "usdt",
    longname: "Tether",
    description: "Tether coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tether/"
    }
},{
    name: "bitcoin-sv",
    code: "BSV",
    icon: "bsv",
    longname: "Bitcoin SV",
    description: "Bitcoin SV coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoin-sv/"
    }
},{
    name: "cardano",
    code: "ADA",
    icon: "ada",
    longname: "Cardano",
    description: "Cardano coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cardano/"
    }
},{
    name: "tron",
    code: "TRX",
    icon: "trx",
    longname: "TRON",
    description: "TRON coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tron/"
    }
},{
    name: "monero",
    code: "XMR",
    icon: "xmr",
    longname: "Monero",
    description: "Monero coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/monero/"
    }
},{
    name: "iota",
    code: "MIOTA",
    icon: "miota",
    longname: "IOTA",
    description: "IOTA coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/iota/"
    }
},{
    name: "binance-coin",
    code: "BNB",
    icon: "bnb",
    longname: "Binance Coin",
    description: "Binance Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/binance-coin/"
    }
},{
    name: "dash",
    code: "DASH",
    icon: "dash",
    longname: "Dash",
    description: "Dash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dash/"
    }
},{
    name: "nem",
    code: "XEM",
    icon: "xem",
    longname: "NEM",
    description: "NEM coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nem/"
    }
},{
    name: "neo",
    code: "NEO",
    icon: "neo",
    longname: "NEO",
    description: "NEO coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/neo/"
    }
},{
    name: "ethereum-classic",
    code: "ETC",
    icon: "etc",
    longname: "Ethereum Classic",
    description: "Ethereum Classic coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ethereum-classic/"
    }
},{
    name: "zcash",
    code: "ZEC",
    icon: "zec",
    longname: "Zcash",
    description: "Zcash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zcash/"
    }
},{
    name: "maker",
    code: "MKR",
    icon: "mkr",
    longname: "Maker",
    description: "Maker coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/maker/"
    }
},{
    name: "bitcoin-gold",
    code: "BTG",
    icon: "btg",
    longname: "Bitcoin Gold",
    description: "Bitcoin Gold coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoin-gold/"
    }
},{
    name: "dogecoin",
    code: "DOGE",
    icon: "doge",
    longname: "Dogecoin",
    description: "Dogecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dogecoin/"
    }
},{
    name: "tezos",
    code: "XTZ",
    icon: "xtz",
    longname: "Tezos",
    description: "Tezos coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tezos/"
    }
},{
    name: "vechain",
    code: "VET",
    icon: "vet",
    longname: "VeChain",
    description: "VeChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vechain/"
    }
},{
    name: "ontology",
    code: "ONT",
    icon: "ont",
    longname: "Ontology",
    description: "Ontology coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ontology/"
    }
},{
    name: "omisego",
    code: "OMG",
    icon: "omg",
    longname: "OmiseGO",
    description: "OmiseGO coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/omisego/"
    }
},{
    name: "waves",
    code: "WAVES",
    icon: "waves",
    longname: "Waves",
    description: "Waves coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/waves/"
    }
},{
    name: "0x",
    code: "ZRX",
    icon: "zrx",
    longname: "0x",
    description: "0x coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/0x/"
    }
},{
    name: "basic-attention-token",
    code: "BAT",
    icon: "bat",
    longname: "Basic Attention Token",
    description: "Basic Attention Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/basic-attention-token/"
    }
},{
    name: "trueusd",
    code: "TUSD",
    icon: "tusd",
    longname: "TrueUSD",
    description: "TrueUSD coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/trueusd/"
    }
},{
    name: "paxos-standard-token",
    code: "PAX",
    icon: "pax",
    longname: "Paxos Standard Token",
    description: "Paxos Standard Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/paxos-standard-token/"
    }
},{
    name: "decred",
    code: "DCR",
    icon: "dcr",
    longname: "Decred",
    description: "Decred coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/decred/"
    }
},{
    name: "qtum",
    code: "QTUM",
    icon: "qtum",
    longname: "Qtum",
    description: "Qtum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/qtum/"
    }
},{
    name: "usd-coin",
    code: "USDC",
    icon: "usdc",
    longname: "USD Coin",
    description: "USD Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/usd-coin/"
    }
},{
    name: "lisk",
    code: "LSK",
    icon: "lsk",
    longname: "Lisk",
    description: "Lisk coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/lisk/"
    }
},{
    name: "bitcoin-diamond",
    code: "BCD",
    icon: "bcd",
    longname: "Bitcoin Diamond",
    description: "Bitcoin Diamond coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoin-diamond/"
    }
},{
    name: "bytecoin-bcn",
    code: "BCN",
    icon: "bcn",
    longname: "Bytecoin",
    description: "Bytecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bytecoin-bcn/"
    }
},{
    name: "digibyte",
    code: "DGB",
    icon: "dgb",
    longname: "DigiByte",
    description: "DigiByte coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/digibyte/"
    }
},{
    name: "zilliqa",
    code: "ZIL",
    icon: "zil",
    longname: "Zilliqa",
    description: "Zilliqa coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zilliqa/"
    }
},{
    name: "nano",
    code: "NANO",
    icon: "nano",
    longname: "Nano",
    description: "Nano coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nano/"
    }
},{
    name: "bitshares",
    code: "BTS",
    icon: "bts",
    longname: "BitShares",
    description: "BitShares coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitshares/"
    }
},{
    name: "icon",
    code: "ICX",
    icon: "icx",
    longname: "ICON",
    description: "ICON coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/icon/"
    }
},{
    name: "aeternity",
    code: "AE",
    icon: "ae",
    longname: "Aeternity",
    description: "Aeternity coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aeternity/"
    }
},{
    name: "aurora",
    code: "AOA",
    icon: "aoa",
    longname: "Aurora",
    description: "Aurora coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aurora/"
    }
},{
    name: "verge",
    code: "XVG",
    icon: "xvg",
    longname: "Verge",
    description: "Verge coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/verge/"
    }
},{
    name: "siacoin",
    code: "SC",
    icon: "sc",
    longname: "Siacoin",
    description: "Siacoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/siacoin/"
    }
},{
    name: "factom",
    code: "FCT",
    icon: "fct",
    longname: "Factom",
    description: "Factom coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/factom/"
    }
},{
    name: "pundi-x",
    code: "NPXS",
    icon: "npxs",
    longname: "Pundi X",
    description: "Pundi X coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pundi-x/"
    }
},{
    name: "chainlink",
    code: "LINK",
    icon: "link",
    longname: "Chainlink",
    description: "Chainlink coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/chainlink/"
    }
},{
    name: "steem",
    code: "STEEM",
    icon: "steem",
    longname: "Steem",
    description: "Steem coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/steem/"
    }
},{
    name: "bytom",
    code: "BTM",
    icon: "btm",
    longname: "Bytom",
    description: "Bytom coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bytom/"
    }
},{
    name: "populous",
    code: "PPT",
    icon: "ppt",
    longname: "Populous",
    description: "Populous coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/populous/"
    }
},{
    name: "golem-network-tokens",
    code: "GNT",
    icon: "gnt",
    longname: "Golem",
    description: "Golem coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/golem-network-tokens/"
    }
},{
    name: "stratis",
    code: "STRAT",
    icon: "strat",
    longname: "Stratis",
    description: "Stratis coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/stratis/"
    }
},{
    name: "augur",
    code: "REP",
    icon: "rep",
    longname: "Augur",
    description: "Augur coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/augur/"
    }
},{
    name: "komodo",
    code: "KMD",
    icon: "kmd",
    longname: "Komodo",
    description: "Komodo coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/komodo/"
    }
},{
    name: "qash",
    code: "QASH",
    icon: "qash",
    longname: "QASH",
    description: "QASH coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/qash/"
    }
},{
    name: "nexo",
    code: "NEXO",
    icon: "nexo",
    longname: "Nexo",
    description: "Nexo coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nexo/"
    }
},{
    name: "decentraland",
    code: "MANA",
    icon: "mana",
    longname: "Decentraland",
    description: "Decentraland coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/decentraland/"
    }
},{
    name: "holo",
    code: "HOT",
    icon: "hot",
    longname: "Holo",
    description: "Holo coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/holo/"
    }
},{
    name: "electroneum",
    code: "ETN",
    icon: "etn",
    longname: "Electroneum",
    description: "Electroneum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/electroneum/"
    }
},{
    name: "status",
    code: "SNT",
    icon: "snt",
    longname: "Status",
    description: "Status coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/status/"
    }
},{
    name: "cryptonex",
    code: "CNX",
    icon: "cnx",
    longname: "Cryptonex",
    description: "Cryptonex coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cryptonex/"
    }
},{
    name: "maidsafecoin",
    code: "MAID",
    icon: "maid",
    longname: "MaidSafeCoin",
    description: "MaidSafeCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/maidsafecoin/"
    }
},{
    name: "huobi-token",
    code: "HT",
    icon: "ht",
    longname: "Huobi Token",
    description: "Huobi Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/huobi-token/"
    }
},{
    name: "dai",
    code: "DAI",
    icon: "dai",
    longname: "Dai",
    description: "Dai coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dai/"
    }
},{
    name: "revain",
    code: "R",
    icon: "r",
    longname: "Revain",
    description: "Revain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/revain/"
    }
},{
    name: "ardor",
    code: "ARDR",
    icon: "ardr",
    longname: "Ardor",
    description: "Ardor coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ardor/"
    }
},{
    name: "dex",
    code: "DEX",
    icon: "dex",
    longname: "DEX",
    description: "DEX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dex/"
    }
},{
    name: "wax",
    code: "WAX",
    icon: "wax",
    longname: "WAX",
    description: "WAX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/wax/"
    }
},{
    name: "odem",
    code: "ODE",
    icon: "ode",
    longname: "ODEM",
    description: "ODEM coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/odem/"
    }
},{
    name: "iostoken",
    code: "IOST",
    icon: "iost",
    longname: "IOST",
    description: "IOST coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/iostoken/"
    }
},{
    name: "kucoin-shares",
    code: "KCS",
    icon: "kcs",
    longname: "KuCoin Shares",
    description: "KuCoin Shares coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kucoin-shares/"
    }
},{
    name: "gemini-dollar",
    code: "GUSD",
    icon: "gusd",
    longname: "Gemini Dollar",
    description: "Gemini Dollar coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gemini-dollar/"
    }
},{
    name: "mobilego",
    code: "MGO",
    icon: "mgo",
    longname: "MobileGo",
    description: "MobileGo coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mobilego/"
    }
},{
    name: "theta-token",
    code: "THETA",
    icon: "theta",
    longname: "Theta Token",
    description: "Theta Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/theta-token/"
    }
},{
    name: "waltonchain",
    code: "WTC",
    icon: "wtc",
    longname: "Waltonchain",
    description: "Waltonchain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/waltonchain/"
    }
},{
    name: "metaverse",
    code: "ETP",
    icon: "etp",
    longname: "Metaverse ETP",
    description: "Metaverse ETP coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/metaverse/"
    }
},{
    name: "moac",
    code: "MOAC",
    icon: "moac",
    longname: "MOAC",
    description: "MOAC coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/moac/"
    }
},{
    name: "mithril",
    code: "MITH",
    icon: "mith",
    longname: "Mithril",
    description: "Mithril coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mithril/"
    }
},{
    name: "wanchain",
    code: "WAN",
    icon: "wan",
    longname: "Wanchain",
    description: "Wanchain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/wanchain/"
    }
},{
    name: "insight-chain",
    code: "INB",
    icon: "inb",
    longname: "Insight Chain",
    description: "Insight Chain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/insight-chain/"
    }
},{
    name: "pivx",
    code: "PIVX",
    icon: "pivx",
    longname: "PIVX",
    description: "PIVX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pivx/"
    }
},{
    name: "reddcoin",
    code: "RDD",
    icon: "rdd",
    longname: "ReddCoin",
    description: "ReddCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/reddcoin/"
    }
},{
    name: "ravencoin",
    code: "RVN",
    icon: "rvn",
    longname: "Ravencoin",
    description: "Ravencoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ravencoin/"
    }
},{
    name: "elastos",
    code: "ELA",
    icon: "ela",
    longname: "Elastos",
    description: "Elastos coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/elastos/"
    }
},{
    name: "aion",
    code: "AION",
    icon: "aion",
    longname: "Aion",
    description: "Aion coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aion/"
    }
},{
    name: "ark",
    code: "ARK",
    icon: "ark",
    longname: "Ark",
    description: "Ark coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ark/"
    }
},{
    name: "gxchain",
    code: "GXS",
    icon: "gxs",
    longname: "GXChain",
    description: "GXChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gxchain/"
    }
},{
    name: "bitcoin-private",
    code: "BTCP",
    icon: "btcp",
    longname: "Bitcoin Private",
    description: "Bitcoin Private coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoin-private/"
    }
},{
    name: "monacoin",
    code: "MONA",
    icon: "mona",
    longname: "MonaCoin",
    description: "MonaCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/monacoin/"
    }
},{
    name: "bancor",
    code: "BNT",
    icon: "bnt",
    longname: "Bancor",
    description: "Bancor coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bancor/"
    }
},{
    name: "crypto-com",
    code: "MCO",
    icon: "mco",
    longname: "Crypto.com",
    description: "Crypto.com coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/crypto-com/"
    }
},{
    name: "hypercash",
    code: "HC",
    icon: "hc",
    longname: "HyperCash",
    description: "HyperCash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hypercash/"
    }
},{
    name: "centrality",
    code: "CENNZ",
    icon: "cennz",
    longname: "Centrality",
    description: "Centrality coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/centrality/"
    }
},{
    name: "polymath-network",
    code: "POLY",
    icon: "poly",
    longname: "Polymath",
    description: "Polymath coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/polymath-network/"
    }
},{
    name: "zcoin",
    code: "XZC",
    icon: "xzc",
    longname: "Zcoin",
    description: "Zcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zcoin/"
    }
},{
    name: "sirin-labs-token",
    code: "SRN",
    icon: "srn",
    longname: "SIRIN LABS Token",
    description: "SIRIN LABS Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sirin-labs-token/"
    }
},{
    name: "power-ledger",
    code: "POWR",
    icon: "powr",
    longname: "Power Ledger",
    description: "Power Ledger coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/power-ledger/"
    }
},{
    name: "aelf",
    code: "ELF",
    icon: "elf",
    longname: "aelf",
    description: "aelf coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aelf/"
    }
},{
    name: "mixin",
    code: "XIN",
    icon: "xin",
    longname: "Mixin",
    description: "Mixin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mixin/"
    }
},{
    name: "loopring",
    code: "LRC",
    icon: "lrc",
    longname: "Loopring",
    description: "Loopring coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/loopring/"
    }
},{
    name: "nxt",
    code: "NXT",
    icon: "nxt",
    longname: "Nxt",
    description: "Nxt coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nxt/"
    }
},{
    name: "linkey",
    code: "LKY",
    icon: "lky",
    longname: "Linkey",
    description: "Linkey coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/linkey/"
    }
},{
    name: "digixdao",
    code: "DGD",
    icon: "dgd",
    longname: "DigixDAO",
    description: "DigixDAO coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/digixdao/"
    }
},{
    name: "quarkchain",
    code: "QKC",
    icon: "qkc",
    longname: "QuarkChain",
    description: "QuarkChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/quarkchain/"
    }
},{
    name: "gold-bits-coin",
    code: "GBC",
    icon: "gbc",
    longname: "Gold Bits Coin",
    description: "Gold Bits Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gold-bits-coin/"
    }
},{
    name: "zencash",
    code: "ZEN",
    icon: "zen",
    longname: "Horizen",
    description: "Horizen coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zencash/"
    }
},{
    name: "free-coin",
    code: "FREE",
    icon: "free",
    longname: "FREE Coin",
    description: "FREE Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/free-coin/"
    }
},{
    name: "cybermiles",
    code: "CMT",
    icon: "cmt",
    longname: "CyberMiles",
    description: "CyberMiles coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cybermiles/"
    }
},{
    name: "nebulas-token",
    code: "NAS",
    icon: "nas",
    longname: "Nebulas",
    description: "Nebulas coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nebulas-token/"
    }
},{
    name: "loom-network",
    code: "LOOM",
    icon: "loom",
    longname: "Loom Network",
    description: "Loom Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/loom-network/"
    }
},{
    name: "digitex-futures",
    code: "DGTX",
    icon: "dgtx",
    longname: "Digitex Futures",
    description: "Digitex Futures coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/digitex-futures/"
    }
},{
    name: "stasis-eurs",
    code: "EURS",
    icon: "eurs",
    longname: "STASIS EURS",
    description: "STASIS EURS coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/stasis-eurs/"
    }
},{
    name: "tenx",
    code: "PAY",
    icon: "pay",
    longname: "TenX",
    description: "TenX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tenx/"
    }
},{
    name: "veritaseum",
    code: "VERI",
    icon: "veri",
    longname: "Veritaseum",
    description: "Veritaseum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/veritaseum/"
    }
},{
    name: "endor-protocol",
    code: "EDR",
    icon: "edr",
    longname: "Endor Protocol",
    description: "Endor Protocol coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/endor-protocol/"
    }
},{
    name: "boscoin",
    code: "BOS",
    icon: "bos",
    longname: "BOScoin",
    description: "BOScoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/boscoin/"
    }
},{
    name: "smartlands",
    code: "SLT",
    icon: "slt",
    longname: "Smartlands",
    description: "Smartlands coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/smartlands/"
    }
},{
    name: "nasdacoin",
    code: "NSD",
    icon: "nsd",
    longname: "Nasdacoin",
    description: "Nasdacoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nasdacoin/"
    }
},{
    name: "proximax",
    code: "XPX",
    icon: "xpx",
    longname: "ProximaX",
    description: "ProximaX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/proximax/"
    }
},{
    name: "dropil",
    code: "DROP",
    icon: "drop",
    longname: "Dropil",
    description: "Dropil coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dropil/"
    }
},{
    name: "dentacoin",
    code: "DCN",
    icon: "dcn",
    longname: "Dentacoin",
    description: "Dentacoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dentacoin/"
    }
},{
    name: "nectar",
    code: "NEC",
    icon: "nec",
    longname: "Nectar",
    description: "Nectar coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nectar/"
    }
},{
    name: "funfair",
    code: "FUN",
    icon: "fun",
    longname: "FunFair",
    description: "FunFair coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/funfair/"
    }
},{
    name: "singularitynet",
    code: "AGI",
    icon: "agi",
    longname: "SingularityNET",
    description: "SingularityNET coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/singularitynet/"
    }
},{
    name: "dragonchain",
    code: "DRGN",
    icon: "drgn",
    longname: "Dragonchain",
    description: "Dragonchain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dragonchain/"
    }
},{
    name: "kyber-network",
    code: "KNC",
    icon: "knc",
    longname: "Kyber Network",
    description: "Kyber Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kyber-network/"
    }
},{
    name: "waykichain",
    code: "WICC",
    icon: "wicc",
    longname: "WaykiChain",
    description: "WaykiChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/waykichain/"
    }
},{
    name: "bhpcash",
    code: "BHPC",
    icon: "bhpc",
    longname: "BHPCash",
    description: "BHPCash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bhpcash/"
    }
},{
    name: "gas",
    code: "GAS",
    icon: "gas",
    longname: "Gas",
    description: "Gas coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gas/"
    }
},{
    name: "kin",
    code: "KIN",
    icon: "kin",
    longname: "Kin",
    description: "Kin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kin/"
    }
},{
    name: "syscoin",
    code: "SYS",
    icon: "sys",
    longname: "Syscoin",
    description: "Syscoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/syscoin/"
    }
},{
    name: "storj",
    code: "STORJ",
    icon: "storj",
    longname: "Storj",
    description: "Storj coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/storj/"
    }
},{
    name: "xyo-network",
    code: "XYO",
    icon: "xyo",
    longname: "XYO Network",
    description: "XYO Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/xyo-network/"
    }
},{
    name: "eidoo",
    code: "EDO",
    icon: "edo",
    longname: "Eidoo",
    description: "Eidoo coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/eidoo/"
    }
},{
    name: "enigma",
    code: "ENG",
    icon: "eng",
    longname: "Enigma",
    description: "Enigma coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/enigma/"
    }
},{
    name: "thekey",
    code: "TKY",
    icon: "tky",
    longname: "THEKEY",
    description: "THEKEY coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/thekey/"
    }
},{
    name: "bread",
    code: "BRD",
    icon: "brd",
    longname: "Bread",
    description: "Bread coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bread/"
    }
},{
    name: "civic",
    code: "CVC",
    icon: "cvc",
    longname: "Civic",
    description: "Civic coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/civic/"
    }
},{
    name: "enjin-coin",
    code: "ENJ",
    icon: "enj",
    longname: "Enjin Coin",
    description: "Enjin Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/enjin-coin/"
    }
},{
    name: "gochain",
    code: "GO",
    icon: "go",
    longname: "GoChain",
    description: "GoChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gochain/"
    }
},{
    name: "bibox-token",
    code: "BIX",
    icon: "bix",
    longname: "Bibox Token",
    description: "Bibox Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bibox-token/"
    }
},{
    name: "groestlcoin",
    code: "GRS",
    icon: "grs",
    longname: "Groestlcoin",
    description: "Groestlcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/groestlcoin/"
    }
},{
    name: "byteball",
    code: "GBYTE",
    icon: "gbyte",
    longname: "Byteball Bytes",
    description: "Byteball Bytes coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/byteball/"
    }
},{
    name: "dent",
    code: "DENT",
    icon: "dent",
    longname: "Dent",
    description: "Dent coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dent/"
    }
},{
    name: "genesis-vision",
    code: "GVT",
    icon: "gvt",
    longname: "Genesis Vision",
    description: "Genesis Vision coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/genesis-vision/"
    }
},{
    name: "nuls",
    code: "NULS",
    icon: "nuls",
    longname: "Nuls",
    description: "Nuls coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nuls/"
    }
},{
    name: "salt",
    code: "SALT",
    icon: "salt",
    longname: "SALT",
    description: "SALT coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/salt/"
    }
},{
    name: "fusion",
    code: "FSN",
    icon: "fsn",
    longname: "Fusion",
    description: "Fusion coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fusion/"
    }
},{
    name: "pumapay",
    code: "PMA",
    icon: "pma",
    longname: "PumaPay",
    description: "PumaPay coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pumapay/"
    }
},{
    name: "particl",
    code: "PART",
    icon: "part",
    longname: "Particl",
    description: "Particl coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/particl/"
    }
},{
    name: "cortex",
    code: "CTXC",
    icon: "ctxc",
    longname: "Cortex",
    description: "Cortex coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cortex/"
    }
},{
    name: "smartcash",
    code: "SMART",
    icon: "smart",
    longname: "SmartCash",
    description: "SmartCash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/smartcash/"
    }
},{
    name: "dynamic-trading-rights",
    code: "DTR",
    icon: "dtr",
    longname: "Dynamic Trading Rights",
    description: "Dynamic Trading Rights coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dynamic-trading-rights/"
    }
},{
    name: "substratum",
    code: "SUB",
    icon: "sub",
    longname: "Substratum",
    description: "Substratum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/substratum/"
    }
},{
    name: "request-network",
    code: "REQ",
    icon: "req",
    longname: "Request Network",
    description: "Request Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/request-network/"
    }
},{
    name: "storm",
    code: "STORM",
    icon: "storm",
    longname: "Storm",
    description: "Storm coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/storm/"
    }
},{
    name: "apis",
    code: "APIS",
    icon: "apis",
    longname: "APIS",
    description: "APIS coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/apis/"
    }
},{
    name: "peercoin",
    code: "PPC",
    icon: "ppc",
    longname: "Peercoin",
    description: "Peercoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/peercoin/"
    }
},{
    name: "credo",
    code: "CREDO",
    icon: "credo",
    longname: "Credo",
    description: "Credo coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/credo/"
    }
},{
    name: "rlc",
    code: "RLC",
    icon: "rlc",
    longname: "iExec RLC",
    description: "iExec RLC coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rlc/"
    }
},{
    name: "iconomi",
    code: "ICN",
    icon: "icn",
    longname: "Iconomi",
    description: "Iconomi coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/iconomi/"
    }
},{
    name: "cindicator",
    code: "CND",
    icon: "cnd",
    longname: "Cindicator",
    description: "Cindicator coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cindicator/"
    }
},{
    name: "odyssey",
    code: "OCN",
    icon: "ocn",
    longname: "Odyssey",
    description: "Odyssey coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/odyssey/"
    }
},{
    name: "eternal-token",
    code: "XET",
    icon: "xet",
    longname: "ETERNAL TOKEN",
    description: "ETERNAL TOKEN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/eternal-token/"
    }
},{
    name: "nexus",
    code: "NXS",
    icon: "nxs",
    longname: "Nexus",
    description: "Nexus coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nexus/"
    }
},{
    name: "tokenomy",
    code: "TEN",
    icon: "ten",
    longname: "Tokenomy",
    description: "Tokenomy coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tokenomy/"
    }
},{
    name: "bezant",
    code: "BZNT",
    icon: "bznt",
    longname: "Bezant",
    description: "Bezant coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bezant/"
    }
},{
    name: "rchain",
    code: "RHOC",
    icon: "rhoc",
    longname: "RChain",
    description: "RChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rchain/"
    }
},{
    name: "everipedia",
    code: "IQ",
    icon: "iq",
    longname: "Everipedia",
    description: "Everipedia coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/everipedia/"
    }
},{
    name: "prizm",
    code: "PZM",
    icon: "pzm",
    longname: "PRIZM",
    description: "PRIZM coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/prizm/"
    }
},{
    name: "ignis",
    code: "IGNIS",
    icon: "ignis",
    longname: "Ignis",
    description: "Ignis coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ignis/"
    }
},{
    name: "gifto",
    code: "GTO",
    icon: "gto",
    longname: "Gifto",
    description: "Gifto coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gifto/"
    }
},{
    name: "moeda-loyalty-points",
    code: "MDA",
    icon: "mda",
    longname: "Moeda Loyalty Points",
    description: "Moeda Loyalty Points coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/moeda-loyalty-points/"
    }
},{
    name: "credits",
    code: "CS",
    icon: "cs",
    longname: "Credits",
    description: "Credits coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/credits/"
    }
},{
    name: "optimal-shelf-availability-token",
    code: "OSA",
    icon: "osa",
    longname: "Optimal Shelf Availability Token",
    description: "Optimal Shelf Availability Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/optimal-shelf-availability-token/"
    }
},{
    name: "mainframe",
    code: "MFT",
    icon: "mft",
    longname: "Mainframe",
    description: "Mainframe coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mainframe/"
    }
},{
    name: "telcoin",
    code: "TEL",
    icon: "tel",
    longname: "Telcoin",
    description: "Telcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/telcoin/"
    }
},{
    name: "c20",
    code: "C20",
    icon: "c20",
    longname: "CRYPTO20",
    description: "CRYPTO20 coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/c20/"
    }
},{
    name: "matrix-ai-network",
    code: "MAN",
    icon: "man",
    longname: "Matrix AI Network",
    description: "Matrix AI Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/matrix-ai-network/"
    }
},{
    name: "emercoin",
    code: "EMC",
    icon: "emc",
    longname: "Emercoin",
    description: "Emercoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/emercoin/"
    }
},{
    name: "vertcoin",
    code: "VTC",
    icon: "vtc",
    longname: "Vertcoin",
    description: "Vertcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vertcoin/"
    }
},{
    name: "neblio",
    code: "NEBL",
    icon: "nebl",
    longname: "Neblio",
    description: "Neblio coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/neblio/"
    }
},{
    name: "einsteinium",
    code: "EMC2",
    icon: "emc2",
    longname: "Einsteinium",
    description: "Einsteinium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/einsteinium/"
    }
},{
    name: "pillar",
    code: "PLR",
    icon: "plr",
    longname: "Pillar",
    description: "Pillar coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pillar/"
    }
},{
    name: "santiment",
    code: "SAN",
    icon: "san",
    longname: "Santiment Network Token",
    description: "Santiment Network Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/santiment/"
    }
},{
    name: "noah-coin",
    code: "NOAH",
    icon: "noah",
    longname: "Noah Coin",
    description: "Noah Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/noah-coin/"
    }
},{
    name: "vitae",
    code: "VITAE",
    icon: "vitae",
    longname: "Vitae",
    description: "Vitae coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vitae/"
    }
},{
    name: "arbitrage",
    code: "ARB",
    icon: "arb",
    longname: "ARBITRAGE",
    description: "ARBITRAGE coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/arbitrage/"
    }
},{
    name: "poet",
    code: "POE",
    icon: "poe",
    longname: "Po.et",
    description: "Po.et coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/poet/"
    }
},{
    name: "gnosis-gno",
    code: "GNO",
    icon: "gno",
    longname: "Gnosis",
    description: "Gnosis coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gnosis-gno/"
    }
},{
    name: "streamr-datacoin",
    code: "DATA",
    icon: "data",
    longname: "Streamr DATAcoin",
    description: "Streamr DATAcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/streamr-datacoin/"
    }
},{
    name: "buggyra-coin-zero",
    code: "BCZERO",
    icon: "bczero",
    longname: "Buggyra Coin Zero",
    description: "Buggyra Coin Zero coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/buggyra-coin-zero/"
    }
},{
    name: "quant",
    code: "QNT",
    icon: "qnt",
    longname: "Quant",
    description: "Quant coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/quant/"
    }
},{
    name: "dmarket",
    code: "DMT",
    icon: "dmt",
    longname: "DMarket",
    description: "DMarket coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dmarket/"
    }
},{
    name: "tokenpay",
    code: "TPAY",
    icon: "tpay",
    longname: "TokenPay",
    description: "TokenPay coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tokenpay/"
    }
},{
    name: "wagerr",
    code: "WGR",
    icon: "wgr",
    longname: "Wagerr",
    description: "Wagerr coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/wagerr/"
    }
},{
    name: "raiden-network-token",
    code: "RDN",
    icon: "rdn",
    longname: "Raiden Network Token",
    description: "Raiden Network Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/raiden-network-token/"
    }
},{
    name: "cube",
    code: "AUTO",
    icon: "auto",
    longname: "Cube",
    description: "Cube coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cube/"
    }
},{
    name: "oneroot-network",
    code: "RNT",
    icon: "rnt",
    longname: "OneRoot Network",
    description: "OneRoot Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/oneroot-network/"
    }
},{
    name: "amo-coin",
    code: "AMO",
    icon: "amo",
    longname: "AMO Coin",
    description: "AMO Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/amo-coin/"
    }
},{
    name: "unobtanium",
    code: "UNO",
    icon: "uno",
    longname: "Unobtanium",
    description: "Unobtanium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/unobtanium/"
    }
},{
    name: "energi",
    code: "NRG",
    icon: "nrg",
    longname: "Energi",
    description: "Energi coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/energi/"
    }
},{
    name: "aragon",
    code: "ANT",
    icon: "ant",
    longname: "Aragon",
    description: "Aragon coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aragon/"
    }
},{
    name: "burst",
    code: "BURST",
    icon: "burst",
    longname: "Burst",
    description: "Burst coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/burst/"
    }
},{
    name: "bnktothefuture",
    code: "BFT",
    icon: "bft",
    longname: "BnkToTheFuture",
    description: "BnkToTheFuture coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bnktothefuture/"
    }
},{
    name: "iotex",
    code: "IOTX",
    icon: "iotx",
    longname: "IoTeX",
    description: "IoTeX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/iotex/"
    }
},{
    name: "ost",
    code: "OST",
    icon: "ost",
    longname: "OST",
    description: "OST coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ost/"
    }
},{
    name: "tomochain",
    code: "TOMO",
    icon: "tomo",
    longname: "TomoChain",
    description: "TomoChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tomochain/"
    }
},{
    name: "nucleus-vision",
    code: "NCASH",
    icon: "ncash",
    longname: "Nucleus Vision",
    description: "Nucleus Vision coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nucleus-vision/"
    }
},{
    name: "skycoin",
    code: "SKY",
    icon: "sky",
    longname: "Skycoin",
    description: "Skycoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/skycoin/"
    }
},{
    name: "republic-protocol",
    code: "REN",
    icon: "ren",
    longname: "Republic Protocol",
    description: "Republic Protocol coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/republic-protocol/"
    }
},{
    name: "scryinfo",
    code: "DDD",
    icon: "ddd",
    longname: "Scry.info",
    description: "Scry.info coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/scryinfo/"
    }
},{
    name: "safe-exchange-coin",
    code: "SAFEX",
    icon: "safex",
    longname: "Safe Exchange Coin",
    description: "Safe Exchange Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/safe-exchange-coin/"
    }
},{
    name: "truechain",
    code: "TRUE",
    icon: "true",
    longname: "TrueChain",
    description: "TrueChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/truechain/"
    }
},{
    name: "wowbit",
    code: "WWB",
    icon: "wwb",
    longname: "Wowbit",
    description: "Wowbit coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/wowbit/"
    }
},{
    name: "amber",
    code: "AMB",
    icon: "amb",
    longname: "Ambrosus",
    description: "Ambrosus coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/amber/"
    }
},{
    name: "medx",
    code: "MEDX",
    icon: "medx",
    longname: "MediBloc [ERC20]",
    description: "MediBloc [ERC20] coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/medx/"
    }
},{
    name: "high-performance-blockchain",
    code: "HPB",
    icon: "hpb",
    longname: "High Performance Blockchain",
    description: "High Performance Blockchain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/high-performance-blockchain/"
    }
},{
    name: "bluzelle",
    code: "BLZ",
    icon: "blz",
    longname: "Bluzelle",
    description: "Bluzelle coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bluzelle/"
    }
},{
    name: "bridgecoin",
    code: "BCO",
    icon: "bco",
    longname: "BridgeCoin",
    description: "BridgeCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bridgecoin/"
    }
},{
    name: "bitcny",
    code: "BITCNY",
    icon: "bitcny",
    longname: "bitCNY",
    description: "bitCNY coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcny/"
    }
},{
    name: "box-token",
    code: "BOX",
    icon: "box",
    longname: "BOX Token",
    description: "BOX Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/box-token/"
    }
},{
    name: "utrust",
    code: "UTK",
    icon: "utk",
    longname: "UTRUST",
    description: "UTRUST coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/utrust/"
    }
},{
    name: "quantum-resistant-ledger",
    code: "QRL",
    icon: "qrl",
    longname: "Quantum Resistant Ledger",
    description: "Quantum Resistant Ledger coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/quantum-resistant-ledger/"
    }
},{
    name: "ubiq",
    code: "UBQ",
    icon: "ubq",
    longname: "Ubiq",
    description: "Ubiq coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ubiq/"
    }
},{
    name: "nav-coin",
    code: "NAV",
    icon: "nav",
    longname: "NavCoin",
    description: "NavCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nav-coin/"
    }
},{
    name: "tokenclub",
    code: "TCT",
    icon: "tct",
    longname: "TokenClub",
    description: "TokenClub coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tokenclub/"
    }
},{
    name: "crypterium",
    code: "CRPT",
    icon: "crpt",
    longname: "Crypterium",
    description: "Crypterium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/crypterium/"
    }
},{
    name: "ethos",
    code: "ETHOS",
    icon: "ethos",
    longname: "Ethos",
    description: "Ethos coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ethos/"
    }
},{
    name: "whitecoin",
    code: "XWC",
    icon: "xwc",
    longname: "WhiteCoin",
    description: "WhiteCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/whitecoin/"
    }
},{
    name: "metal",
    code: "MTL",
    icon: "mtl",
    longname: "Metal",
    description: "Metal coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/metal/"
    }
},{
    name: "quantstamp",
    code: "QSP",
    icon: "qsp",
    longname: "Quantstamp",
    description: "Quantstamp coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/quantstamp/"
    }
},{
    name: "ruff",
    code: "RUFF",
    icon: "ruff",
    longname: "Ruff",
    description: "Ruff coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ruff/"
    }
},{
    name: "swarm-fund",
    code: "SWM",
    icon: "swm",
    longname: "Swarm",
    description: "Swarm coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/swarm-fund/"
    }
},{
    name: "salus",
    code: "SLS",
    icon: "sls",
    longname: "SaluS",
    description: "SaluS coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/salus/"
    }
},{
    name: "blocknet",
    code: "BLOCK",
    icon: "block",
    longname: "Blocknet",
    description: "Blocknet coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blocknet/"
    }
},{
    name: "jibrel-network",
    code: "JNT",
    icon: "jnt",
    longname: "Jibrel Network",
    description: "Jibrel Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/jibrel-network/"
    }
},{
    name: "steem-dollars",
    code: "SBD",
    icon: "sbd",
    longname: "Steem Dollars",
    description: "Steem Dollars coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/steem-dollars/"
    }
},{
    name: "libra-credit",
    code: "LBA",
    icon: "lba",
    longname: "Cred",
    description: "Cred coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/libra-credit/"
    }
},{
    name: "smartmesh",
    code: "SMT",
    icon: "smt",
    longname: "SmartMesh",
    description: "SmartMesh coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/smartmesh/"
    }
},{
    name: "darcio-ecosystem-coin",
    code: "DEC",
    icon: "dec",
    longname: "Darico Ecosystem Coin",
    description: "Darico Ecosystem Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/darcio-ecosystem-coin/"
    }
},{
    name: "time-new-bank",
    code: "TNB",
    icon: "tnb",
    longname: "Time New Bank",
    description: "Time New Bank coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/time-new-bank/"
    }
},{
    name: "ethlend",
    code: "LEND",
    icon: "lend",
    longname: "ETHLend",
    description: "ETHLend coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ethlend/"
    }
},{
    name: "gulden",
    code: "NLG",
    icon: "nlg",
    longname: "Gulden",
    description: "Gulden coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gulden/"
    }
},{
    name: "digitalnote",
    code: "XDN",
    icon: "xdn",
    longname: "DigitalNote",
    description: "DigitalNote coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/digitalnote/"
    }
},{
    name: "cryptaur",
    code: "CPT",
    icon: "cpt",
    longname: "Cryptaur",
    description: "Cryptaur coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cryptaur/"
    }
},{
    name: "ecoreal-estate",
    code: "ECOREAL",
    icon: "ecoreal",
    longname: "Ecoreal Estate",
    description: "Ecoreal Estate coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ecoreal-estate/"
    }
},{
    name: "e-dinar-coin",
    code: "EDR-1",
    icon: "edr-1",
    longname: "E-Dinar Coin",
    description: "E-Dinar Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/e-dinar-coin/"
    }
},{
    name: "breezecoin",
    code: "BRZC",
    icon: "brzc",
    longname: "Breezecoin",
    description: "Breezecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/breezecoin/"
    }
},{
    name: "zip",
    code: "ZIP",
    icon: "zip",
    longname: "Zipper",
    description: "Zipper coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zip/"
    }
},{
    name: "babb",
    code: "BAX",
    icon: "bax",
    longname: "BABB",
    description: "BABB coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/babb/"
    }
},{
    name: "bitbay",
    code: "BAY",
    icon: "bay",
    longname: "BitBay",
    description: "BitBay coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitbay/"
    }
},{
    name: "own",
    code: "CHX",
    icon: "chx",
    longname: "Own",
    description: "Own coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/own/"
    }
},{
    name: "tronclassic",
    code: "TRXC",
    icon: "trxc",
    longname: "TRONCLASSIC",
    description: "TRONCLASSIC coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tronclassic/"
    }
},{
    name: "loki",
    code: "LOKI",
    icon: "loki",
    longname: "Loki",
    description: "Loki coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/loki/"
    }
},{
    name: "nix",
    code: "NIX",
    icon: "nix",
    longname: "NIX",
    description: "NIX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nix/"
    }
},{
    name: "cosmo-coin",
    code: "COSM",
    icon: "cosm",
    longname: "Cosmo Coin",
    description: "Cosmo Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cosmo-coin/"
    }
},{
    name: "zrcoin",
    code: "ZRC",
    icon: "zrc",
    longname: "ZrCoin",
    description: "ZrCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zrcoin/"
    }
},{
    name: "sonm",
    code: "SNM",
    icon: "snm",
    longname: "SONM",
    description: "SONM coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sonm/"
    }
},{
    name: "leocoin",
    code: "LEO",
    icon: "leo",
    longname: "LEOcoin",
    description: "LEOcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/leocoin/"
    }
},{
    name: "cybervein",
    code: "CVT",
    icon: "cvt",
    longname: "CyberVein",
    description: "CyberVein coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cybervein/"
    }
},{
    name: "nexty",
    code: "NTY",
    icon: "nty",
    longname: "Nexty",
    description: "Nexty coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nexty/"
    }
},{
    name: "adx-net",
    code: "ADX",
    icon: "adx",
    longname: "AdEx",
    description: "AdEx coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/adx-net/"
    }
},{
    name: "ttc-protocol",
    code: "TTC",
    icon: "ttc",
    longname: "TTC Protocol",
    description: "TTC Protocol coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ttc-protocol/"
    }
},{
    name: "wings",
    code: "WINGS",
    icon: "wings",
    longname: "Wings",
    description: "Wings coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/wings/"
    }
},{
    name: "propy",
    code: "PRO",
    icon: "pro",
    longname: "Propy",
    description: "Propy coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/propy/"
    }
},{
    name: "wabi",
    code: "WABI",
    icon: "wabi",
    longname: "WaBi",
    description: "WaBi coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/wabi/"
    }
},{
    name: "moss-coin",
    code: "MOC",
    icon: "moc",
    longname: "Moss Coin",
    description: "Moss Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/moss-coin/"
    }
},{
    name: "red-pulse",
    code: "PHX",
    icon: "phx",
    longname: "Red Pulse Phoenix",
    description: "Red Pulse Phoenix coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/red-pulse/"
    }
},{
    name: "data",
    code: "DTA",
    icon: "dta",
    longname: "DATA",
    description: "DATA coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/data/"
    }
},{
    name: "tripio",
    code: "TRIO",
    icon: "trio",
    longname: "Tripio",
    description: "Tripio coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tripio/"
    }
},{
    name: "apollo-currency",
    code: "APL",
    icon: "apl",
    longname: "Apollo Currency",
    description: "Apollo Currency coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/apollo-currency/"
    }
},{
    name: "casinocoin",
    code: "CSC",
    icon: "csc",
    longname: "CasinoCoin",
    description: "CasinoCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/casinocoin/"
    }
},{
    name: "medibloc",
    code: "MED",
    icon: "med",
    longname: "MediBloc [QRC20]",
    description: "MediBloc [QRC20] coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/medibloc/"
    }
},{
    name: "wepower",
    code: "WPR",
    icon: "wpr",
    longname: "WePower",
    description: "WePower coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/wepower/"
    }
},{
    name: "loopring-neo",
    code: "LRN",
    icon: "lrn",
    longname: "Loopring [NEO]",
    description: "Loopring [NEO] coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/loopring-neo/"
    }
},{
    name: "blockv",
    code: "VEE",
    icon: "vee",
    longname: "BLOCKv",
    description: "BLOCKv coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blockv/"
    }
},{
    name: "naga",
    code: "NGC",
    icon: "ngc",
    longname: "NAGA",
    description: "NAGA coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/naga/"
    }
},{
    name: "ripio-credit-network",
    code: "RCN",
    icon: "rcn",
    longname: "Ripio Credit Network",
    description: "Ripio Credit Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ripio-credit-network/"
    }
},{
    name: "rotharium",
    code: "RTH",
    icon: "rth",
    longname: "Rotharium",
    description: "Rotharium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rotharium/"
    }
},{
    name: "aston",
    code: "ATX",
    icon: "atx",
    longname: "Aston",
    description: "Aston coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aston/"
    }
},{
    name: "poa-network",
    code: "POA",
    icon: "poa",
    longname: "POA Network",
    description: "POA Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/poa-network/"
    }
},{
    name: "viacoin",
    code: "VIA",
    icon: "via",
    longname: "Viacoin",
    description: "Viacoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/viacoin/"
    }
},{
    name: "modum",
    code: "MOD",
    icon: "mod",
    longname: "Modum",
    description: "Modum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/modum/"
    }
},{
    name: "stakenet",
    code: "XSN",
    icon: "xsn",
    longname: "Stakenet",
    description: "Stakenet coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/stakenet/"
    }
},{
    name: "insolar",
    code: "INS",
    icon: "ins",
    longname: "Insolar",
    description: "Insolar coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/insolar/"
    }
},{
    name: "storiqa",
    code: "STQ",
    icon: "stq",
    longname: "Storiqa",
    description: "Storiqa coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/storiqa/"
    }
},{
    name: "singulardtv",
    code: "SNGLS",
    icon: "sngls",
    longname: "SingularDTV",
    description: "SingularDTV coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/singulardtv/"
    }
},{
    name: "vibe",
    code: "VIBE",
    icon: "vibe",
    longname: "VIBE",
    description: "VIBE coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vibe/"
    }
},{
    name: "arcblock",
    code: "ABT",
    icon: "abt",
    longname: "Arcblock",
    description: "Arcblock coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/arcblock/"
    }
},{
    name: "dew",
    code: "DEW",
    icon: "dew",
    longname: "DEW",
    description: "DEW coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dew/"
    }
},{
    name: "quanta-utility-token",
    code: "QNTU",
    icon: "qntu",
    longname: "Quanta Utility Token",
    description: "Quanta Utility Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/quanta-utility-token/"
    }
},{
    name: "tokencard",
    code: "TKN",
    icon: "tkn",
    longname: "TokenCard",
    description: "TokenCard coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tokencard/"
    }
},{
    name: "spankchain",
    code: "SPANK",
    icon: "spank",
    longname: "SpankChain",
    description: "SpankChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/spankchain/"
    }
},{
    name: "selfkey",
    code: "KEY",
    icon: "key",
    longname: "Selfkey",
    description: "Selfkey coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/selfkey/"
    }
},{
    name: "iot-chain",
    code: "ITC",
    icon: "itc",
    longname: "IoT Chain",
    description: "IoT Chain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/iot-chain/"
    }
},{
    name: "fantom",
    code: "FTM",
    icon: "ftm",
    longname: "Fantom",
    description: "Fantom coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fantom/"
    }
},{
    name: "litecoin-cash",
    code: "LCC",
    icon: "lcc",
    longname: "Litecoin Cash",
    description: "Litecoin Cash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/litecoin-cash/"
    }
},{
    name: "cashaa",
    code: "CAS",
    icon: "cas",
    longname: "Cashaa",
    description: "Cashaa coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cashaa/"
    }
},{
    name: "covesting",
    code: "COV",
    icon: "cov",
    longname: "Covesting",
    description: "Covesting coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/covesting/"
    }
},{
    name: "truedeck",
    code: "TDP",
    icon: "tdp",
    longname: "TrueDeck",
    description: "TrueDeck coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/truedeck/"
    }
},{
    name: "xtrabytes",
    code: "XBY",
    icon: "xby",
    longname: "XTRABYTES",
    description: "XTRABYTES coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/xtrabytes/"
    }
},{
    name: "mobius",
    code: "MOBI",
    icon: "mobi",
    longname: "Mobius",
    description: "Mobius coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mobius/"
    }
},{
    name: "xinfin-network",
    code: "XDCE",
    icon: "xdce",
    longname: "XinFin Network",
    description: "XinFin Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/xinfin-network/"
    }
},{
    name: "metronome",
    code: "MET",
    icon: "met",
    longname: "Metronome",
    description: "Metronome coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/metronome/"
    }
},{
    name: "origintrail",
    code: "TRAC",
    icon: "trac",
    longname: "OriginTrail",
    description: "OriginTrail coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/origintrail/"
    }
},{
    name: "zclassic",
    code: "ZCL",
    icon: "zcl",
    longname: "ZClassic",
    description: "ZClassic coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zclassic/"
    }
},{
    name: "boolberry",
    code: "BBR",
    icon: "bbr",
    longname: "Boolberry",
    description: "Boolberry coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/boolberry/"
    }
},{
    name: "district0x",
    code: "DNT",
    icon: "dnt",
    longname: "district0x",
    description: "district0x coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/district0x/"
    }
},{
    name: "bitcoin-interest",
    code: "BCI",
    icon: "bci",
    longname: "Bitcoin Interest",
    description: "Bitcoin Interest coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoin-interest/"
    }
},{
    name: "napoleonx",
    code: "NPX",
    icon: "npx",
    longname: "NaPoleonX",
    description: "NaPoleonX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/napoleonx/"
    }
},{
    name: "scroll",
    code: "SCRL",
    icon: "scrl",
    longname: "SCRL",
    description: "SCRL coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/scroll/"
    }
},{
    name: "edgeless",
    code: "EDG",
    icon: "edg",
    longname: "Edgeless",
    description: "Edgeless coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/edgeless/"
    }
},{
    name: "lockchain",
    code: "LOC",
    icon: "loc",
    longname: "LockTrip",
    description: "LockTrip coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/lockchain/"
    }
},{
    name: "cloakcoin",
    code: "CLOAK",
    icon: "cloak",
    longname: "CloakCoin",
    description: "CloakCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cloakcoin/"
    }
},{
    name: "genaro-network",
    code: "GNX",
    icon: "gnx",
    longname: "Genaro Network",
    description: "Genaro Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/genaro-network/"
    }
},{
    name: "achain",
    code: "ACT",
    icon: "act",
    longname: "Achain",
    description: "Achain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/achain/"
    }
},{
    name: "coss",
    code: "COSS",
    icon: "coss",
    longname: "COSS",
    description: "COSS coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/coss/"
    }
},{
    name: "loyalcoin",
    code: "LYL",
    icon: "lyl",
    longname: "LoyalCoin",
    description: "LoyalCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/loyalcoin/"
    }
},{
    name: "content-neutrality-network",
    code: "CNN",
    icon: "cnn",
    longname: "Content Neutrality Network",
    description: "Content Neutrality Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/content-neutrality-network/"
    }
},{
    name: "timicoin",
    code: "TMC",
    icon: "tmc",
    longname: "Timicoin",
    description: "Timicoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/timicoin/"
    }
},{
    name: "gincoin",
    code: "GIN",
    icon: "gin",
    longname: "GINcoin",
    description: "GINcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gincoin/"
    }
},{
    name: "aurumcoin",
    code: "AU",
    icon: "au",
    longname: "AurumCoin",
    description: "AurumCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aurumcoin/"
    }
},{
    name: "electra",
    code: "ECA",
    icon: "eca",
    longname: "Electra",
    description: "Electra coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/electra/"
    }
},{
    name: "namecoin",
    code: "NMC",
    icon: "nmc",
    longname: "Namecoin",
    description: "Namecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/namecoin/"
    }
},{
    name: "tierion",
    code: "TNT",
    icon: "tnt",
    longname: "Tierion",
    description: "Tierion coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tierion/"
    }
},{
    name: "clams",
    code: "CLAM",
    icon: "clam",
    longname: "Clams",
    description: "Clams coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/clams/"
    }
},{
    name: "vite",
    code: "VITE",
    icon: "vite",
    longname: "VITE",
    description: "VITE coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vite/"
    }
},{
    name: "qlink",
    code: "QLC",
    icon: "qlc",
    longname: "QLC Chain",
    description: "QLC Chain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/qlink/"
    }
},{
    name: "bitusd",
    code: "BITUSD",
    icon: "bitusd",
    longname: "bitUSD",
    description: "bitUSD coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitusd/"
    }
},{
    name: "all-sports",
    code: "SOC",
    icon: "soc",
    longname: "All Sports",
    description: "All Sports coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/all-sports/"
    }
},{
    name: "blox",
    code: "CDT",
    icon: "cdt",
    longname: "Blox",
    description: "Blox coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blox/"
    }
},{
    name: "medishares",
    code: "MDS",
    icon: "mds",
    longname: "MediShares",
    description: "MediShares coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/medishares/"
    }
},{
    name: "pchain",
    code: "PAI",
    icon: "pai",
    longname: "PCHAIN",
    description: "PCHAIN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pchain/"
    }
},{
    name: "metadium",
    code: "META",
    icon: "meta",
    longname: "Metadium",
    description: "Metadium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/metadium/"
    }
},{
    name: "mercury",
    code: "MER",
    icon: "mer",
    longname: "Mercury",
    description: "Mercury coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mercury/"
    }
},{
    name: "refereum",
    code: "RFR",
    icon: "rfr",
    longname: "Refereum",
    description: "Refereum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/refereum/"
    }
},{
    name: "counterparty",
    code: "XCP",
    icon: "xcp",
    longname: "Counterparty",
    description: "Counterparty coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/counterparty/"
    }
},{
    name: "hydrogen",
    code: "HYDRO",
    icon: "hydro",
    longname: "Hydro",
    description: "Hydro coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hydrogen/"
    }
},{
    name: "parkingo",
    code: "GOT",
    icon: "got",
    longname: "ParkinGo",
    description: "ParkinGo coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/parkingo/"
    }
},{
    name: "dignity",
    code: "DIG",
    icon: "dig",
    longname: "Dignity",
    description: "Dignity coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dignity/"
    }
},{
    name: "repo",
    code: "REPO",
    icon: "repo",
    longname: "REPO",
    description: "REPO coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/repo/"
    }
},{
    name: "horuspay",
    code: "HORUS",
    icon: "horus",
    longname: "HorusPay",
    description: "HorusPay coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/horuspay/"
    }
},{
    name: "pascal-coin",
    code: "PASC",
    icon: "pasc",
    longname: "Pascal Coin",
    description: "Pascal Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pascal-coin/"
    }
},{
    name: "bitkan",
    code: "KAN",
    icon: "kan",
    longname: "BitKan",
    description: "BitKan coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitkan/"
    }
},{
    name: "asch",
    code: "XAS",
    icon: "xas",
    longname: "Asch",
    description: "Asch coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/asch/"
    }
},{
    name: "patron",
    code: "PAT",
    icon: "pat",
    longname: "Patron",
    description: "Patron coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/patron/"
    }
},{
    name: "legolas-exchange",
    code: "LGO",
    icon: "lgo",
    longname: "LGO Exchange",
    description: "LGO Exchange coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/legolas-exchange/"
    }
},{
    name: "internet-node-token",
    code: "INT",
    icon: "int",
    longname: "Internet Node Token",
    description: "Internet Node Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/internet-node-token/"
    }
},{
    name: "haven-protocol",
    code: "XHV",
    icon: "xhv",
    longname: "Haven Protocol",
    description: "Haven Protocol coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/haven-protocol/"
    }
},{
    name: "airswap",
    code: "AST",
    icon: "ast",
    longname: "AirSwap",
    description: "AirSwap coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/airswap/"
    }
},{
    name: "b2bx",
    code: "B2B",
    icon: "b2b",
    longname: "B2BX",
    description: "B2BX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/b2bx/"
    }
},{
    name: "doc-com-token",
    code: "MTC",
    icon: "mtc",
    longname: "doc.com Token",
    description: "doc.com Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/doc-com-token/"
    }
},{
    name: "primecoin",
    code: "XPM",
    icon: "xpm",
    longname: "Primecoin",
    description: "Primecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/primecoin/"
    }
},{
    name: "blocktix",
    code: "TIX",
    icon: "tix",
    longname: "Blocktix",
    description: "Blocktix coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blocktix/"
    }
},{
    name: "iht-real-estate-protocol",
    code: "IHT",
    icon: "iht",
    longname: "IHT Real Estate Protocol",
    description: "IHT Real Estate Protocol coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/iht-real-estate-protocol/"
    }
},{
    name: "humanscape",
    code: "HUM",
    icon: "hum",
    longname: "Humanscape",
    description: "Humanscape coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/humanscape/"
    }
},{
    name: "fortuna",
    code: "FOTA",
    icon: "fota",
    longname: "Fortuna",
    description: "Fortuna coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fortuna/"
    }
},{
    name: "restart-energy-mwat",
    code: "MWAT",
    icon: "mwat",
    longname: "Restart Energy MWAT",
    description: "Restart Energy MWAT coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/restart-energy-mwat/"
    }
},{
    name: "faircoin",
    code: "FAIR",
    icon: "fair",
    longname: "FairCoin",
    description: "FairCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/faircoin/"
    }
},{
    name: "lympo",
    code: "LYM",
    icon: "lym",
    longname: "Lympo",
    description: "Lympo coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/lympo/"
    }
},{
    name: "apex",
    code: "CPX",
    icon: "cpx",
    longname: "Apex",
    description: "Apex coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/apex/"
    }
},{
    name: "dero",
    code: "DERO",
    icon: "dero",
    longname: "Dero",
    description: "Dero coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dero/"
    }
},{
    name: "deepbrain-chain",
    code: "DBC",
    icon: "dbc",
    longname: "DeepBrain Chain",
    description: "DeepBrain Chain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/deepbrain-chain/"
    }
},{
    name: "sophiatx",
    code: "SPHTX",
    icon: "sphtx",
    longname: "SophiaTX",
    description: "SophiaTX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sophiatx/"
    }
},{
    name: "happycoin",
    code: "HPC",
    icon: "hpc",
    longname: "Happycoin",
    description: "Happycoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/happycoin/"
    }
},{
    name: "bitcore",
    code: "BTX",
    icon: "btx",
    longname: "Bitcore",
    description: "Bitcore coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcore/"
    }
},{
    name: "mothership",
    code: "MSP",
    icon: "msp",
    longname: "Mothership",
    description: "Mothership coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mothership/"
    }
},{
    name: "everex",
    code: "EVX",
    icon: "evx",
    longname: "Everex",
    description: "Everex coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/everex/"
    }
},{
    name: "linda",
    code: "LINDA",
    icon: "linda",
    longname: "Linda",
    description: "Linda coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/linda/"
    }
},{
    name: "peerplays-ppy",
    code: "PPY",
    icon: "ppy",
    longname: "Peerplays",
    description: "Peerplays coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/peerplays-ppy/"
    }
},{
    name: "etherparty",
    code: "FUEL",
    icon: "fuel",
    longname: "Etherparty",
    description: "Etherparty coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/etherparty/"
    }
},{
    name: "game",
    code: "GTC",
    icon: "gtc",
    longname: "Game.com",
    description: "Game.com coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/game/"
    }
},{
    name: "eosdac",
    code: "EOSDAC",
    icon: "eosdac",
    longname: "eosDAC",
    description: "eosDAC coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/eosdac/"
    }
},{
    name: "bottos",
    code: "BTO",
    icon: "bto",
    longname: "Bottos",
    description: "Bottos coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bottos/"
    }
},{
    name: "bulwark",
    code: "BWK",
    icon: "bwk",
    longname: "Bulwark",
    description: "Bulwark coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bulwark/"
    }
},{
    name: "dock",
    code: "DOCK",
    icon: "dock",
    longname: "Dock",
    description: "Dock coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dock/"
    }
},{
    name: "alqo",
    code: "XLQ",
    icon: "xlq",
    longname: "ALQO",
    description: "ALQO coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/alqo/"
    }
},{
    name: "yoyow",
    code: "YOYOW",
    icon: "yoyow",
    longname: "YOYOW",
    description: "YOYOW coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/yoyow/"
    }
},{
    name: "presearch",
    code: "PRE",
    icon: "pre",
    longname: "Presearch",
    description: "Presearch coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/presearch/"
    }
},{
    name: "universa",
    code: "UTNP",
    icon: "utnp",
    longname: "Universa",
    description: "Universa coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/universa/"
    }
},{
    name: "appcoins",
    code: "APPC",
    icon: "appc",
    longname: "AppCoins",
    description: "AppCoins coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/appcoins/"
    }
},{
    name: "ion",
    code: "ION",
    icon: "ion",
    longname: "ION",
    description: "ION coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ion/"
    }
},{
    name: "bitnewchain",
    code: "BTN",
    icon: "btn",
    longname: "BitNewChain",
    description: "BitNewChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitnewchain/"
    }
},{
    name: "gamecredits",
    code: "GAME",
    icon: "game",
    longname: "GameCredits",
    description: "GameCredits coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gamecredits/"
    }
},{
    name: "melon",
    code: "MLN",
    icon: "mln",
    longname: "Melon",
    description: "Melon coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/melon/"
    }
},{
    name: "spindle",
    code: "SPD",
    icon: "spd",
    longname: "SPINDLE",
    description: "SPINDLE coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/spindle/"
    }
},{
    name: "envion",
    code: "EVN",
    icon: "evn",
    longname: "Envion",
    description: "Envion coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/envion/"
    }
},{
    name: "bitcoin-green",
    code: "BITG",
    icon: "bitg",
    longname: "Bitcoin Green",
    description: "Bitcoin Green coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoin-green/"
    }
},{
    name: "primalbase",
    code: "PBT",
    icon: "pbt",
    longname: "Primalbase Token",
    description: "Primalbase Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/primalbase/"
    }
},{
    name: "robotina",
    code: "ROX",
    icon: "rox",
    longname: "Robotina",
    description: "Robotina coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/robotina/"
    }
},{
    name: "realtract",
    code: "RET",
    icon: "ret",
    longname: "RealTract",
    description: "RealTract coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/realtract/"
    }
},{
    name: "decent",
    code: "DCT",
    icon: "dct",
    longname: "DECENT",
    description: "DECENT coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/decent/"
    }
},{
    name: "monetha",
    code: "MTH",
    icon: "mth",
    longname: "Monetha",
    description: "Monetha coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/monetha/"
    }
},{
    name: "bitcoin-atom",
    code: "BCA",
    icon: "bca",
    longname: "Bitcoin Atom",
    description: "Bitcoin Atom coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoin-atom/"
    }
},{
    name: "seele",
    code: "SEELE",
    icon: "seele",
    longname: "Seele",
    description: "Seele coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/seele/"
    }
},{
    name: "playgroundz",
    code: "IOG",
    icon: "iog",
    longname: "Playgroundz",
    description: "Playgroundz coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/playgroundz/"
    }
},{
    name: "travala",
    code: "AVA",
    icon: "ava",
    longname: "Travala",
    description: "Travala coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/travala/"
    }
},{
    name: "aeon",
    code: "AEON",
    icon: "aeon",
    longname: "Aeon",
    description: "Aeon coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aeon/"
    }
},{
    name: "nkn",
    code: "NKN",
    icon: "nkn",
    longname: "NKN",
    description: "NKN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nkn/"
    }
},{
    name: "polybius",
    code: "PLBT",
    icon: "plbt",
    longname: "Polybius",
    description: "Polybius coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/polybius/"
    }
},{
    name: "feathercoin",
    code: "FTC",
    icon: "ftc",
    longname: "Feathercoin",
    description: "Feathercoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/feathercoin/"
    }
},{
    name: "sentinel-protocol",
    code: "UPP",
    icon: "upp",
    longname: "Sentinel Protocol",
    description: "Sentinel Protocol coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sentinel-protocol/"
    }
},{
    name: "0chain",
    code: "ZCN",
    icon: "zcn",
    longname: "0chain",
    description: "0chain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/0chain/"
    }
},{
    name: "ino-coin",
    code: "INO",
    icon: "ino",
    longname: "INO COIN",
    description: "INO COIN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ino-coin/"
    }
},{
    name: "cobinhood",
    code: "COB",
    icon: "cob",
    longname: "Cobinhood",
    description: "Cobinhood coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cobinhood/"
    }
},{
    name: "ternio",
    code: "TERN",
    icon: "tern",
    longname: "Ternio",
    description: "Ternio coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ternio/"
    }
},{
    name: "viberate",
    code: "VIB",
    icon: "vib",
    longname: "Viberate",
    description: "Viberate coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/viberate/"
    }
},{
    name: "library-credit",
    code: "LBC",
    icon: "lbc",
    longname: "LBRY Credits",
    description: "LBRY Credits coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/library-credit/"
    }
},{
    name: "lunyr",
    code: "LUN",
    icon: "lun",
    longname: "Lunyr",
    description: "Lunyr coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/lunyr/"
    }
},{
    name: "daps-token",
    code: "DAPS",
    icon: "daps",
    longname: "DAPS Token",
    description: "DAPS Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/daps-token/"
    }
},{
    name: "numeraire",
    code: "NMR",
    icon: "nmr",
    longname: "Numeraire",
    description: "Numeraire coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/numeraire/"
    }
},{
    name: "primas",
    code: "PST",
    icon: "pst",
    longname: "Primas",
    description: "Primas coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/primas/"
    }
},{
    name: "adtoken",
    code: "ADT",
    icon: "adt",
    longname: "adToken",
    description: "adToken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/adtoken/"
    }
},{
    name: "rublix",
    code: "RBLX",
    icon: "rblx",
    longname: "Rublix",
    description: "Rublix coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rublix/"
    }
},{
    name: "cpchain",
    code: "CPC",
    icon: "cpc",
    longname: "CPChain",
    description: "CPChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cpchain/"
    }
},{
    name: "paccoin",
    code: "$PAC",
    icon: "$pac",
    longname: "PACcoin",
    description: "PACcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/paccoin/"
    }
},{
    name: "minexcoin",
    code: "MNX",
    icon: "mnx",
    longname: "MinexCoin",
    description: "MinexCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/minexcoin/"
    }
},{
    name: "vipstar-coin",
    code: "VIPS",
    icon: "vips",
    longname: "Vipstar Coin",
    description: "Vipstar Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vipstar-coin/"
    }
},{
    name: "te-food",
    code: "TFD",
    icon: "tfd",
    longname: "TE-FOOD",
    description: "TE-FOOD coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/te-food/"
    }
},{
    name: "bit-z-token",
    code: "BZ",
    icon: "bz",
    longname: "Bit-Z Token",
    description: "Bit-Z Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bit-z-token/"
    }
},{
    name: "paragon",
    code: "PRG",
    icon: "prg",
    longname: "Paragon",
    description: "Paragon coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/paragon/"
    }
},{
    name: "bankex",
    code: "BKX",
    icon: "bkx",
    longname: "BANKEX",
    description: "BANKEX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bankex/"
    }
},{
    name: "atn",
    code: "ATN",
    icon: "atn",
    longname: "ATN",
    description: "ATN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/atn/"
    }
},{
    name: "kickico",
    code: "KICK",
    icon: "kick",
    longname: "KickCoin",
    description: "KickCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kickico/"
    }
},{
    name: "moneytoken",
    code: "IMT",
    icon: "imt",
    longname: "Moneytoken",
    description: "Moneytoken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/moneytoken/"
    }
},{
    name: "latoken",
    code: "LA",
    icon: "la",
    longname: "LATOKEN",
    description: "LATOKEN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/latoken/"
    }
},{
    name: "sakura-bloom",
    code: "SKB",
    icon: "skb",
    longname: "Sakura Bloom",
    description: "Sakura Bloom coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sakura-bloom/"
    }
},{
    name: "toacoin",
    code: "TOA",
    icon: "toa",
    longname: "ToaCoin",
    description: "ToaCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/toacoin/"
    }
},{
    name: "aeron",
    code: "ARN",
    icon: "arn",
    longname: "Aeron",
    description: "Aeron coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aeron/"
    }
},{
    name: "zen-protocol",
    code: "ZP",
    icon: "zp",
    longname: "Zen Protocol",
    description: "Zen Protocol coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zen-protocol/"
    }
},{
    name: "agrello-delta",
    code: "DLT",
    icon: "dlt",
    longname: "Agrello",
    description: "Agrello coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/agrello-delta/"
    }
},{
    name: "tv-two",
    code: "TTV",
    icon: "ttv",
    longname: "TV-TWO",
    description: "TV-TWO coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tv-two/"
    }
},{
    name: "pepe-cash",
    code: "PEPECASH",
    icon: "pepecash",
    longname: "Pepe Cash",
    description: "Pepe Cash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pepe-cash/"
    }
},{
    name: "swftcoin",
    code: "SWFTC",
    icon: "swftc",
    longname: "SwftCoin",
    description: "SwftCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/swftcoin/"
    }
},{
    name: "tatatu",
    code: "TTU",
    icon: "ttu",
    longname: "TaTaTu",
    description: "TaTaTu coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tatatu/"
    }
},{
    name: "diamond",
    code: "DMD",
    icon: "dmd",
    longname: "Diamond",
    description: "Diamond coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/diamond/"
    }
},{
    name: "unikoin-gold",
    code: "UKG",
    icon: "ukg",
    longname: "Unikoin Gold",
    description: "Unikoin Gold coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/unikoin-gold/"
    }
},{
    name: "zeepin",
    code: "ZPT",
    icon: "zpt",
    longname: "Zeepin",
    description: "Zeepin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zeepin/"
    }
},{
    name: "bismuth",
    code: "BIS",
    icon: "bis",
    longname: "Bismuth",
    description: "Bismuth coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bismuth/"
    }
},{
    name: "blockmason",
    code: "BCPT",
    icon: "bcpt",
    longname: "BlockMason Credit Protocol",
    description: "BlockMason Credit Protocol coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blockmason/"
    }
},{
    name: "html-coin",
    code: "HTML",
    icon: "html",
    longname: "HTMLCOIN",
    description: "HTMLCOIN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/html-coin/"
    }
},{
    name: "bean-cash",
    code: "BITB",
    icon: "bitb",
    longname: "Bean Cash",
    description: "Bean Cash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bean-cash/"
    }
},{
    name: "bit-tube",
    code: "TUBE",
    icon: "tube",
    longname: "BitTube",
    description: "BitTube coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bit-tube/"
    }
},{
    name: "safeinsure",
    code: "SINS",
    icon: "sins",
    longname: "SafeInsure",
    description: "SafeInsure coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/safeinsure/"
    }
},{
    name: "revolutionvr",
    code: "RVR",
    icon: "rvr",
    longname: "RevolutionVR",
    description: "RevolutionVR coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/revolutionvr/"
    }
},{
    name: "ice-rock-mining",
    code: "ROCK2",
    icon: "rock2",
    longname: "ICE ROCK MINING",
    description: "ICE ROCK MINING coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ice-rock-mining/"
    }
},{
    name: "swissborg",
    code: "CHSB",
    icon: "chsb",
    longname: "SwissBorg",
    description: "SwissBorg coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/swissborg/"
    }
},{
    name: "xaurum",
    code: "XAUR",
    icon: "xaur",
    longname: "Xaurum",
    description: "Xaurum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/xaurum/"
    }
},{
    name: "winding-tree",
    code: "LIF",
    icon: "lif",
    longname: "Winding Tree",
    description: "Winding Tree coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/winding-tree/"
    }
},{
    name: "nanjcoin",
    code: "NANJ",
    icon: "nanj",
    longname: "NANJCOIN",
    description: "NANJCOIN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nanjcoin/"
    }
},{
    name: "flo",
    code: "FLO",
    icon: "flo",
    longname: "FLO",
    description: "FLO coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/flo/"
    }
},{
    name: "global-currency-reserve",
    code: "GCR",
    icon: "gcr",
    longname: "Global Currency Reserve",
    description: "Global Currency Reserve coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/global-currency-reserve/"
    }
},{
    name: "weshow-token",
    code: "WET",
    icon: "wet",
    longname: "WeShow Token",
    description: "WeShow Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/weshow-token/"
    }
},{
    name: "shift",
    code: "SHIFT",
    icon: "shift",
    longname: "Shift",
    description: "Shift coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/shift/"
    }
},{
    name: "callisto-network",
    code: "CLO",
    icon: "clo",
    longname: "Callisto Network",
    description: "Callisto Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/callisto-network/"
    }
},{
    name: "scorum-coins",
    code: "SCR",
    icon: "scr",
    longname: "Scorum Coins",
    description: "Scorum Coins coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/scorum-coins/"
    }
},{
    name: "six-domain-chain",
    code: "SDA",
    icon: "sda",
    longname: "Six Domain Chain",
    description: "Six Domain Chain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/six-domain-chain/"
    }
},{
    name: "switcheo",
    code: "SWTH",
    icon: "swth",
    longname: "Switcheo",
    description: "Switcheo coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/switcheo/"
    }
},{
    name: "everus",
    code: "EVR",
    icon: "evr",
    longname: "Everus",
    description: "Everus coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/everus/"
    }
},{
    name: "hiveterminal-token",
    code: "HVN",
    icon: "hvn",
    longname: "Hiveterminal Token",
    description: "Hiveterminal Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hiveterminal-token/"
    }
},{
    name: "spacechain",
    code: "SPC",
    icon: "spc",
    longname: "SpaceChain",
    description: "SpaceChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/spacechain/"
    }
},{
    name: "crown",
    code: "CRW",
    icon: "crw",
    longname: "Crown",
    description: "Crown coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/crown/"
    }
},{
    name: "online",
    code: "OIO",
    icon: "oio",
    longname: "Online",
    description: "Online coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/online/"
    }
},{
    name: "divi",
    code: "DIVI",
    icon: "divi",
    longname: "Divi",
    description: "Divi coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/divi/"
    }
},{
    name: "xel",
    code: "XEL",
    icon: "xel",
    longname: "XEL",
    description: "XEL coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/xel/"
    }
},{
    name: "sureremit",
    code: "RMT",
    icon: "rmt",
    longname: "SureRemit",
    description: "SureRemit coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sureremit/"
    }
},{
    name: "graft",
    code: "GRFT",
    icon: "grft",
    longname: "Graft",
    description: "Graft coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/graft/"
    }
},{
    name: "lamden",
    code: "TAU",
    icon: "tau",
    longname: "Lamden",
    description: "Lamden coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/lamden/"
    }
},{
    name: "mass-vehicle-ledger",
    code: "MVL",
    icon: "mvl",
    longname: "Mass Vehicle Ledger",
    description: "Mass Vehicle Ledger coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mass-vehicle-ledger/"
    }
},{
    name: "phore",
    code: "PHR",
    icon: "phr",
    longname: "Phore",
    description: "Phore coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/phore/"
    }
},{
    name: "digix-gold-token",
    code: "DGX",
    icon: "dgx",
    longname: "Digix Gold Token",
    description: "Digix Gold Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/digix-gold-token/"
    }
},{
    name: "blackmoon",
    code: "BMC",
    icon: "bmc",
    longname: "Blackmoon",
    description: "Blackmoon coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blackmoon/"
    }
},{
    name: "firstblood",
    code: "1ST",
    icon: "1st",
    longname: "FirstBlood",
    description: "FirstBlood coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/firstblood/"
    }
},{
    name: "hi-mutual-society",
    code: "HMC",
    icon: "hmc",
    longname: "Hi Mutual Society",
    description: "Hi Mutual Society coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hi-mutual-society/"
    }
},{
    name: "qunqun",
    code: "QUN",
    icon: "qun",
    longname: "QunQun",
    description: "QunQun coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/qunqun/"
    }
},{
    name: "decent-bet",
    code: "DBET",
    icon: "dbet",
    longname: "DecentBet",
    description: "DecentBet coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/decent-bet/"
    }
},{
    name: "soarcoin",
    code: "SOAR",
    icon: "soar",
    longname: "Soarcoin",
    description: "Soarcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/soarcoin/"
    }
},{
    name: "bloomtoken",
    code: "BLT",
    icon: "blt",
    longname: "Bloom",
    description: "Bloom coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bloomtoken/"
    }
},{
    name: "ceek-vr",
    code: "CEEK",
    icon: "ceek",
    longname: "CEEK VR",
    description: "CEEK VR coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ceek-vr/"
    }
},{
    name: "blackcoin",
    code: "BLK",
    icon: "blk",
    longname: "BlackCoin",
    description: "BlackCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blackcoin/"
    }
},{
    name: "ink",
    code: "INK",
    icon: "ink",
    longname: "Ink",
    description: "Ink coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ink/"
    }
},{
    name: "havven",
    code: "HAV",
    icon: "hav",
    longname: "Havven",
    description: "Havven coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/havven/"
    }
},{
    name: "halalchain",
    code: "HLC",
    icon: "hlc",
    longname: "HalalChain",
    description: "HalalChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/halalchain/"
    }
},{
    name: "business-credit-alliance-chain",
    code: "BCAC",
    icon: "bcac",
    longname: "Business Credit Alliance Chain",
    description: "Business Credit Alliance Chain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/business-credit-alliance-chain/"
    }
},{
    name: "distributed-credit-chain",
    code: "DCC",
    icon: "dcc",
    longname: "Distributed Credit Chain",
    description: "Distributed Credit Chain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/distributed-credit-chain/"
    }
},{
    name: "brahmaos",
    code: "BRM",
    icon: "brm",
    longname: "BrahmaOS",
    description: "BrahmaOS coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/brahmaos/"
    }
},{
    name: "dadi",
    code: "DADI",
    icon: "dadi",
    longname: "DADI",
    description: "DADI coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dadi/"
    }
},{
    name: "mark-space",
    code: "MRK",
    icon: "mrk",
    longname: "MARK.SPACE",
    description: "MARK.SPACE coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mark-space/"
    }
},{
    name: "consensus",
    code: "SEN",
    icon: "sen",
    longname: "Consensus",
    description: "Consensus coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/consensus/"
    }
},{
    name: "dxchain-token",
    code: "DX",
    icon: "dx",
    longname: "DxChain Token",
    description: "DxChain Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dxchain-token/"
    }
},{
    name: "electrifyasia",
    code: "ELEC",
    icon: "elec",
    longname: "Electrify.Asia",
    description: "Electrify.Asia coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/electrifyasia/"
    }
},{
    name: "insureum",
    code: "ISR",
    icon: "isr",
    longname: "Insureum",
    description: "Insureum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/insureum/"
    }
},{
    name: "fuzex",
    code: "FXT",
    icon: "fxt",
    longname: "FuzeX",
    description: "FuzeX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fuzex/"
    }
},{
    name: "eccoin",
    code: "ECC",
    icon: "ecc",
    longname: "ECC",
    description: "ECC coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/eccoin/"
    }
},{
    name: "waves-community-token",
    code: "WCT",
    icon: "wct",
    longname: "Waves Community Token",
    description: "Waves Community Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/waves-community-token/"
    }
},{
    name: "polyswarm",
    code: "NCT",
    icon: "nct",
    longname: "PolySwarm",
    description: "PolySwarm coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/polyswarm/"
    }
},{
    name: "ebcoin",
    code: "EBC",
    icon: "ebc",
    longname: "EBCoin",
    description: "EBCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ebcoin/"
    }
},{
    name: "dimecoin",
    code: "DIME",
    icon: "dime",
    longname: "Dimecoin",
    description: "Dimecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dimecoin/"
    }
},{
    name: "polis",
    code: "POLIS",
    icon: "polis",
    longname: "Polis",
    description: "Polis coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/polis/"
    }
},{
    name: "zebi",
    code: "ZCO",
    icon: "zco",
    longname: "Zebi",
    description: "Zebi coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zebi/"
    }
},{
    name: "fanstime",
    code: "FTI",
    icon: "fti",
    longname: "FansTime",
    description: "FansTime coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fanstime/"
    }
},{
    name: "delphy",
    code: "DPY",
    icon: "dpy",
    longname: "Delphy",
    description: "Delphy coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/delphy/"
    }
},{
    name: "yeed",
    code: "YEED",
    icon: "yeed",
    longname: "YGGDRASH",
    description: "YGGDRASH coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/yeed/"
    }
},{
    name: "experience-points",
    code: "XP",
    icon: "xp",
    longname: "Experience Points",
    description: "Experience Points coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/experience-points/"
    }
},{
    name: "decision-token",
    code: "HST",
    icon: "hst",
    longname: "Decision Token",
    description: "Decision Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/decision-token/"
    }
},{
    name: "flash",
    code: "FLASH",
    icon: "flash",
    longname: "Flash",
    description: "Flash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/flash/"
    }
},{
    name: "educare",
    code: "EKT",
    icon: "ekt",
    longname: "EDUCare",
    description: "EDUCare coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/educare/"
    }
},{
    name: "myriad",
    code: "XMY",
    icon: "xmy",
    longname: "Myriad",
    description: "Myriad coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/myriad/"
    }
},{
    name: "olympus-labs",
    code: "MOT",
    icon: "mot",
    longname: "Olympus Labs",
    description: "Olympus Labs coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/olympus-labs/"
    }
},{
    name: "sentinel",
    code: "SENT",
    icon: "sent",
    longname: "Sentinel",
    description: "Sentinel coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sentinel/"
    }
},{
    name: "lendingblock",
    code: "LND",
    icon: "lnd",
    longname: "Lendingblock",
    description: "Lendingblock coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/lendingblock/"
    }
},{
    name: "blockport",
    code: "BPT",
    icon: "bpt",
    longname: "Blockport",
    description: "Blockport coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blockport/"
    }
},{
    name: "oax",
    code: "OAX",
    icon: "oax",
    longname: "OAX",
    description: "OAX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/oax/"
    }
},{
    name: "potcoin",
    code: "POT",
    icon: "pot",
    longname: "PotCoin",
    description: "PotCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/potcoin/"
    }
},{
    name: "rise",
    code: "RISE",
    icon: "rise",
    longname: "Rise",
    description: "Rise coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rise/"
    }
},{
    name: "thorecoin",
    code: "THR",
    icon: "thr",
    longname: "ThoreCoin",
    description: "ThoreCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/thorecoin/"
    }
},{
    name: "espers",
    code: "ESP",
    icon: "esp",
    longname: "Espers",
    description: "Espers coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/espers/"
    }
},{
    name: "blocktrade-token",
    code: "BTT",
    icon: "btt",
    longname: "Blocktrade Token",
    description: "Blocktrade Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blocktrade-token/"
    }
},{
    name: "xmax",
    code: "XMX",
    icon: "xmx",
    longname: "XMax",
    description: "XMax coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/xmax/"
    }
},{
    name: "bezop",
    code: "BEZ",
    icon: "bez",
    longname: "Bezop",
    description: "Bezop coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bezop/"
    }
},{
    name: "u-network",
    code: "UUU",
    icon: "uuu",
    longname: "U Network",
    description: "U Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/u-network/"
    }
},{
    name: "luxcoin",
    code: "LUX",
    icon: "lux",
    longname: "LUXCoin",
    description: "LUXCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/luxcoin/"
    }
},{
    name: "peculium",
    code: "PCL",
    icon: "pcl",
    longname: "Peculium",
    description: "Peculium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/peculium/"
    }
},{
    name: "etheroll",
    code: "DICE",
    icon: "dice",
    longname: "Etheroll",
    description: "Etheroll coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/etheroll/"
    }
},{
    name: "blue-whale-token",
    code: "BWX",
    icon: "bwx",
    longname: "Blue Whale Token",
    description: "Blue Whale Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blue-whale-token/"
    }
},{
    name: "aurora-dao",
    code: "AURA",
    icon: "aura",
    longname: "Aurora DAO",
    description: "Aurora DAO coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aurora-dao/"
    }
},{
    name: "skrumble-network",
    code: "SKM",
    icon: "skm",
    longname: "Skrumble Network",
    description: "Skrumble Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/skrumble-network/"
    }
},{
    name: "colossusxt",
    code: "COLX",
    icon: "colx",
    longname: "ColossusXT",
    description: "ColossusXT coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/colossusxt/"
    }
},{
    name: "pandacoin-pnd",
    code: "PND",
    icon: "pnd",
    longname: "Pandacoin",
    description: "Pandacoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pandacoin-pnd/"
    }
},{
    name: "ivy",
    code: "IVY",
    icon: "ivy",
    longname: "Ivy",
    description: "Ivy coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ivy/"
    }
},{
    name: "hempcoin",
    code: "THC",
    icon: "thc",
    longname: "HempCoin",
    description: "HempCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hempcoin/"
    }
},{
    name: "brickblock",
    code: "BBK",
    icon: "bbk",
    longname: "Brickblock",
    description: "Brickblock coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/brickblock/"
    }
},{
    name: "yee",
    code: "YEE",
    icon: "yee",
    longname: "YEE",
    description: "YEE coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/yee/"
    }
},{
    name: "monetaryunit",
    code: "MUE",
    icon: "mue",
    longname: "MonetaryUnit",
    description: "MonetaryUnit coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/monetaryunit/"
    }
},{
    name: "iocoin",
    code: "IOC",
    icon: "ioc",
    longname: "I/O Coin",
    description: "I/O Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/iocoin/"
    }
},{
    name: "semux",
    code: "SEM",
    icon: "sem",
    longname: "Semux",
    description: "Semux coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/semux/"
    }
},{
    name: "get-protocol",
    code: "GET",
    icon: "get",
    longname: "GET Protocol",
    description: "GET Protocol coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/get-protocol/"
    }
},{
    name: "local-coin-swap",
    code: "LCS",
    icon: "lcs",
    longname: "LocalCoinSwap",
    description: "LocalCoinSwap coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/local-coin-swap/"
    }
},{
    name: "birake",
    code: "BIR",
    icon: "bir",
    longname: "Birake",
    description: "Birake coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/birake/"
    }
},{
    name: "radium",
    code: "RADS",
    icon: "rads",
    longname: "Radium",
    description: "Radium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/radium/"
    }
},{
    name: "chatcoin",
    code: "CHAT",
    icon: "chat",
    longname: "ChatCoin",
    description: "ChatCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/chatcoin/"
    }
},{
    name: "change",
    code: "CAG",
    icon: "cag",
    longname: "Change",
    description: "Change coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/change/"
    }
},{
    name: "carvertical",
    code: "CV",
    icon: "cv",
    longname: "carVertical",
    description: "carVertical coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/carvertical/"
    }
},{
    name: "dimcoin",
    code: "DIM",
    icon: "dim",
    longname: "DIMCOIN",
    description: "DIMCOIN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dimcoin/"
    }
},{
    name: "atc-coin",
    code: "ATCC",
    icon: "atcc",
    longname: "ATC Coin",
    description: "ATC Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/atc-coin/"
    }
},{
    name: "pal-network",
    code: "PAL",
    icon: "pal",
    longname: "Pal Network",
    description: "Pal Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pal-network/"
    }
},{
    name: "remme",
    code: "REM",
    icon: "rem",
    longname: "Remme",
    description: "Remme coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/remme/"
    }
},{
    name: "zper",
    code: "ZPR",
    icon: "zpr",
    longname: "ZPER",
    description: "ZPER coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zper/"
    }
},{
    name: "hydro-protocol",
    code: "HOT-1",
    icon: "hot-1",
    longname: "Hydro Protocol",
    description: "Hydro Protocol coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hydro-protocol/"
    }
},{
    name: "massgrid",
    code: "MGD",
    icon: "mgd",
    longname: "MassGrid",
    description: "MassGrid coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/massgrid/"
    }
},{
    name: "niobium-coin",
    code: "NBC",
    icon: "nbc",
    longname: "Niobium Coin",
    description: "Niobium Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/niobium-coin/"
    }
},{
    name: "eden",
    code: "EDN",
    icon: "edn",
    longname: "Eden",
    description: "Eden coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/eden/"
    }
},{
    name: "popchain",
    code: "PCH",
    icon: "pch",
    longname: "POPCHAIN",
    description: "POPCHAIN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/popchain/"
    }
},{
    name: "gridcoin",
    code: "GRC",
    icon: "grc",
    longname: "GridCoin",
    description: "GridCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gridcoin/"
    }
},{
    name: "owndata",
    code: "OWN",
    icon: "own",
    longname: "OWNDATA",
    description: "OWNDATA coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/owndata/"
    }
},{
    name: "datx",
    code: "DATX",
    icon: "datx",
    longname: "DATx",
    description: "DATx coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/datx/"
    }
},{
    name: "yocoin",
    code: "YOC",
    icon: "yoc",
    longname: "Yocoin",
    description: "Yocoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/yocoin/"
    }
},{
    name: "ulord",
    code: "UT",
    icon: "ut",
    longname: "Ulord",
    description: "Ulord coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ulord/"
    }
},{
    name: "lina",
    code: "LINA",
    icon: "lina",
    longname: "Lina",
    description: "Lina coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/lina/"
    }
},{
    name: "howdoo",
    code: "UDOO",
    icon: "udoo",
    longname: "Howdoo",
    description: "Howdoo coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/howdoo/"
    }
},{
    name: "cvcoin",
    code: "CVN",
    icon: "cvn",
    longname: "CVCoin",
    description: "CVCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cvcoin/"
    }
},{
    name: "uptoken",
    code: "UP",
    icon: "up",
    longname: "UpToken",
    description: "UpToken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/uptoken/"
    }
},{
    name: "linkeye",
    code: "LET",
    icon: "let",
    longname: "LinkEye",
    description: "LinkEye coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/linkeye/"
    }
},{
    name: "axpire",
    code: "AXPR",
    icon: "axpr",
    longname: "aXpire",
    description: "aXpire coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/axpire/"
    }
},{
    name: "global-social-chain",
    code: "GSC",
    icon: "gsc",
    longname: "Global Social Chain",
    description: "Global Social Chain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/global-social-chain/"
    }
},{
    name: "incent",
    code: "INCNT",
    icon: "incnt",
    longname: "Incent",
    description: "Incent coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/incent/"
    }
},{
    name: "eximchain",
    code: "EXC",
    icon: "exc",
    longname: "Eximchain",
    description: "Eximchain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/eximchain/"
    }
},{
    name: "omnitude",
    code: "ECOM",
    icon: "ecom",
    longname: "Omnitude",
    description: "Omnitude coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/omnitude/"
    }
},{
    name: "bitdice",
    code: "CSNO",
    icon: "csno",
    longname: "BitDice",
    description: "BitDice coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitdice/"
    }
},{
    name: "dacsee",
    code: "DACS",
    icon: "dacs",
    longname: "DACSEE",
    description: "DACSEE coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dacsee/"
    }
},{
    name: "spectrecoin",
    code: "XSPEC",
    icon: "xspec",
    longname: "Spectrecoin",
    description: "Spectrecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/spectrecoin/"
    }
},{
    name: "snetwork",
    code: "SNET",
    icon: "snet",
    longname: "Snetwork",
    description: "Snetwork coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/snetwork/"
    }
},{
    name: "new-power-coin",
    code: "NPW",
    icon: "npw",
    longname: "New Power Coin",
    description: "New Power Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/new-power-coin/"
    }
},{
    name: "neurochain",
    code: "NCC",
    icon: "ncc",
    longname: "NeuroChain",
    description: "NeuroChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/neurochain/"
    }
},{
    name: "pura",
    code: "PURA",
    icon: "pura",
    longname: "Pura",
    description: "Pura coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pura/"
    }
},{
    name: "cargox",
    code: "CXO",
    icon: "cxo",
    longname: "CargoX",
    description: "CargoX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cargox/"
    }
},{
    name: "hollywoodcoin",
    code: "HWC",
    icon: "hwc",
    longname: "HollyWoodCoin",
    description: "HollyWoodCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hollywoodcoin/"
    }
},{
    name: "mktcoin",
    code: "MLM",
    icon: "mlm",
    longname: "MktCoin",
    description: "MktCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mktcoin/"
    }
},{
    name: "six",
    code: "SIX",
    icon: "six",
    longname: "SIX",
    description: "SIX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/six/"
    }
},{
    name: "suqa",
    code: "SUQA",
    icon: "suqa",
    longname: "SUQA",
    description: "SUQA coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/suqa/"
    }
},{
    name: "traxia",
    code: "TMT",
    icon: "tmt",
    longname: "TRAXIA",
    description: "TRAXIA coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/traxia/"
    }
},{
    name: "nimiq",
    code: "NIM",
    icon: "nim",
    longname: "Nimiq",
    description: "Nimiq coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nimiq/"
    }
},{
    name: "deeponion",
    code: "ONION",
    icon: "onion",
    longname: "DeepOnion",
    description: "DeepOnion coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/deeponion/"
    }
},{
    name: "phantasma",
    code: "SOUL",
    icon: "soul",
    longname: "Phantasma",
    description: "Phantasma coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/phantasma/"
    }
},{
    name: "aidoc",
    code: "AIDOC",
    icon: "aidoc",
    longname: "AI Doctor",
    description: "AI Doctor coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aidoc/"
    }
},{
    name: "karma",
    code: "KRM",
    icon: "krm",
    longname: "Karma",
    description: "Karma coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/karma/"
    }
},{
    name: "cardstack",
    code: "CARD",
    icon: "card",
    longname: "Cardstack",
    description: "Cardstack coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cardstack/"
    }
},{
    name: "cononchain",
    code: "CZR",
    icon: "czr",
    longname: "CanonChain",
    description: "CanonChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cononchain/"
    }
},{
    name: "bitcoin-incognito",
    code: "XBI",
    icon: "xbi",
    longname: "Bitcoin Incognito",
    description: "Bitcoin Incognito coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoin-incognito/"
    }
},{
    name: "liquidity-network",
    code: "LQD",
    icon: "lqd",
    longname: "Liquidity Network",
    description: "Liquidity Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/liquidity-network/"
    }
},{
    name: "vericoin",
    code: "VRC",
    icon: "vrc",
    longname: "VeriCoin",
    description: "VeriCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vericoin/"
    }
},{
    name: "xriba",
    code: "XRA",
    icon: "xra",
    longname: "Xriba",
    description: "Xriba coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/xriba/"
    }
},{
    name: "contentbox",
    code: "BOX-1",
    icon: "box-1",
    longname: "ContentBox",
    description: "ContentBox coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/contentbox/"
    }
},{
    name: "tolar",
    code: "TOL",
    icon: "tol",
    longname: "Tolar",
    description: "Tolar coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tolar/"
    }
},{
    name: "mintcoin",
    code: "MINT",
    icon: "mint",
    longname: "MintCoin",
    description: "MintCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mintcoin/"
    }
},{
    name: "energitoken",
    code: "ETK",
    icon: "etk",
    longname: "EnergiToken",
    description: "EnergiToken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/energitoken/"
    }
},{
    name: "crowd-machine",
    code: "CMCT",
    icon: "cmct",
    longname: "Crowd Machine",
    description: "Crowd Machine coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/crowd-machine/"
    }
},{
    name: "bdt-token",
    code: "BDT",
    icon: "bdt",
    longname: "BDT Token",
    description: "BDT Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bdt-token/"
    }
},{
    name: "stealth",
    code: "XST",
    icon: "xst",
    longname: "Stealth",
    description: "Stealth coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/stealth/"
    }
},{
    name: "zelcash",
    code: "ZEL",
    icon: "zel",
    longname: "ZelCash",
    description: "ZelCash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zelcash/"
    }
},{
    name: "stk",
    code: "STK",
    icon: "stk",
    longname: "STK",
    description: "STK coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/stk/"
    }
},{
    name: "hashcoin",
    code: "HSC",
    icon: "hsc",
    longname: "HashCoin",
    description: "HashCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hashcoin/"
    }
},{
    name: "dotcoin",
    code: "DOT",
    icon: "dot",
    longname: "Dotcoin",
    description: "Dotcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dotcoin/"
    }
},{
    name: "humaniq",
    code: "HMQ",
    icon: "hmq",
    longname: "Humaniq",
    description: "Humaniq coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/humaniq/"
    }
},{
    name: "domraider",
    code: "DRT",
    icon: "drt",
    longname: "DomRaider",
    description: "DomRaider coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/domraider/"
    }
},{
    name: "ubex",
    code: "UBEX",
    icon: "ubex",
    longname: "Ubex",
    description: "Ubex coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ubex/"
    }
},{
    name: "kcash",
    code: "KCASH",
    icon: "kcash",
    longname: "Kcash",
    description: "Kcash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kcash/"
    }
},{
    name: "unibright",
    code: "UBT",
    icon: "ubt",
    longname: "Unibright",
    description: "Unibright coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/unibright/"
    }
},{
    name: "cashbet-coin",
    code: "CBC",
    icon: "cbc",
    longname: "CashBet Coin",
    description: "CashBet Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cashbet-coin/"
    }
},{
    name: "banca",
    code: "BANCA",
    icon: "banca",
    longname: "Banca",
    description: "Banca coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/banca/"
    }
},{
    name: "auroracoin",
    code: "AUR",
    icon: "aur",
    longname: "Auroracoin",
    description: "Auroracoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/auroracoin/"
    }
},{
    name: "paycent",
    code: "PYN",
    icon: "pyn",
    longname: "PAYCENT",
    description: "PAYCENT coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/paycent/"
    }
},{
    name: "sharder",
    code: "SS",
    icon: "ss",
    longname: "Sharder",
    description: "Sharder coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sharder/"
    }
},{
    name: "gonetwork",
    code: "GOT-1",
    icon: "got-1",
    longname: "GoNetwork",
    description: "GoNetwork coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gonetwork/"
    }
},{
    name: "ixledger",
    code: "IXT",
    icon: "ixt",
    longname: "IXT",
    description: "IXT coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ixledger/"
    }
},{
    name: "pedity",
    code: "PEDI",
    icon: "pedi",
    longname: "Pedity",
    description: "Pedity coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pedity/"
    }
},{
    name: "paypex",
    code: "PAYX",
    icon: "payx",
    longname: "Paypex",
    description: "Paypex coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/paypex/"
    }
},{
    name: "synereo",
    code: "AMP",
    icon: "amp",
    longname: "HyperSpace",
    description: "HyperSpace coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/synereo/"
    }
},{
    name: "circuits-of-value",
    code: "COVAL",
    icon: "coval",
    longname: "Circuits of Value",
    description: "Circuits of Value coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/circuits-of-value/"
    }
},{
    name: "oraclechain",
    code: "OCT",
    icon: "oct",
    longname: "OracleChain",
    description: "OracleChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/oraclechain/"
    }
},{
    name: "suncontract",
    code: "SNC",
    icon: "snc",
    longname: "SunContract",
    description: "SunContract coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/suncontract/"
    }
},{
    name: "musicoin",
    code: "MUSIC",
    icon: "music",
    longname: "Musicoin",
    description: "Musicoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/musicoin/"
    }
},{
    name: "midasprotocol",
    code: "MAS",
    icon: "mas",
    longname: "MidasProtocol",
    description: "MidasProtocol coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/midasprotocol/"
    }
},{
    name: "bodhi",
    code: "BOT",
    icon: "bot",
    longname: "Bodhi",
    description: "Bodhi coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bodhi/"
    }
},{
    name: "amlt",
    code: "AMLT",
    icon: "amlt",
    longname: "AMLT",
    description: "AMLT coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/amlt/"
    }
},{
    name: "wearesatoshi",
    code: "WSX",
    icon: "wsx",
    longname: "WeAreSatoshi",
    description: "WeAreSatoshi coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/wearesatoshi/"
    }
},{
    name: "databits",
    code: "DTB",
    icon: "dtb",
    longname: "Databits",
    description: "Databits coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/databits/"
    }
},{
    name: "morpheus-network",
    code: "MRPH",
    icon: "mrph",
    longname: "Morpheus.Network",
    description: "Morpheus.Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/morpheus-network/"
    }
},{
    name: "vetri",
    code: "VLD",
    icon: "vld",
    longname: "Vetri",
    description: "Vetri coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vetri/"
    }
},{
    name: "dav-coin",
    code: "DAV",
    icon: "dav",
    longname: "DAV Coin",
    description: "DAV Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dav-coin/"
    }
},{
    name: "eroscoin",
    code: "ERO",
    icon: "ero",
    longname: "Eroscoin",
    description: "Eroscoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/eroscoin/"
    }
},{
    name: "vinchain",
    code: "VIN",
    icon: "vin",
    longname: "VINchain",
    description: "VINchain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vinchain/"
    }
},{
    name: "bitmart-token",
    code: "BMX",
    icon: "bmx",
    longname: "BitMart Token",
    description: "BitMart Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitmart-token/"
    }
},{
    name: "zeusshield",
    code: "ZSC",
    icon: "zsc",
    longname: "Zeusshield",
    description: "Zeusshield coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zeusshield/"
    }
},{
    name: "gambit",
    code: "GAM",
    icon: "gam",
    longname: "Gambit",
    description: "Gambit coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gambit/"
    }
},{
    name: "zmine",
    code: "ZMN",
    icon: "zmn",
    longname: "ZMINE",
    description: "ZMINE coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zmine/"
    }
},{
    name: "omni",
    code: "OMNI",
    icon: "omni",
    longname: "Omni",
    description: "Omni coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/omni/"
    }
},{
    name: "hacken",
    code: "HKN",
    icon: "hkn",
    longname: "Hacken",
    description: "Hacken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hacken/"
    }
},{
    name: "zephyr",
    code: "ZEPH",
    icon: "zeph",
    longname: "Zephyr",
    description: "Zephyr coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zephyr/"
    }
},{
    name: "masari",
    code: "MSR",
    icon: "msr",
    longname: "Masari",
    description: "Masari coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/masari/"
    }
},{
    name: "constellation",
    code: "DAG",
    icon: "dag",
    longname: "Constellation",
    description: "Constellation coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/constellation/"
    }
},{
    name: "medical-chain",
    code: "MTN",
    icon: "mtn",
    longname: "Medicalchain",
    description: "Medicalchain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/medical-chain/"
    }
},{
    name: "robet",
    code: "ROBET",
    icon: "robet",
    longname: "RoBET",
    description: "RoBET coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/robet/"
    }
},{
    name: "spectre-utility",
    code: "SXUT",
    icon: "sxut",
    longname: "Spectre.ai Utility Token",
    description: "Spectre.ai Utility Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/spectre-utility/"
    }
},{
    name: "ifoods-chain",
    code: "IFOOD",
    icon: "ifood",
    longname: "Ifoods Chain",
    description: "Ifoods Chain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ifoods-chain/"
    }
},{
    name: "shivom",
    code: "OMX",
    icon: "omx",
    longname: "Shivom",
    description: "Shivom coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/shivom/"
    }
},{
    name: "mysterium",
    code: "MYST",
    icon: "myst",
    longname: "Mysterium",
    description: "Mysterium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mysterium/"
    }
},{
    name: "indahash",
    code: "IDH",
    icon: "idh",
    longname: "indaHash",
    description: "indaHash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/indahash/"
    }
},{
    name: "starta",
    code: "STA",
    icon: "sta",
    longname: "Starta",
    description: "Starta coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/starta/"
    }
},{
    name: "daex",
    code: "DAX",
    icon: "dax",
    longname: "DAEX",
    description: "DAEX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/daex/"
    }
},{
    name: "ink-protocol",
    code: "XNK",
    icon: "xnk",
    longname: "Ink Protocol",
    description: "Ink Protocol coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ink-protocol/"
    }
},{
    name: "ucash",
    code: "UCASH",
    icon: "ucash",
    longname: "UNIVERSAL CASH",
    description: "UNIVERSAL CASH coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ucash/"
    }
},{
    name: "trueflip",
    code: "TFL",
    icon: "tfl",
    longname: "TrueFlip",
    description: "TrueFlip coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/trueflip/"
    }
},{
    name: "smartshare",
    code: "SSP",
    icon: "ssp",
    longname: "Smartshare",
    description: "Smartshare coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/smartshare/"
    }
},{
    name: "deviantcoin",
    code: "DEV",
    icon: "dev",
    longname: "DeviantCoin",
    description: "DeviantCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/deviantcoin/"
    }
},{
    name: "solaris",
    code: "XLR",
    icon: "xlr",
    longname: "Solaris",
    description: "Solaris coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/solaris/"
    }
},{
    name: "cappasity",
    code: "CAPP",
    icon: "capp",
    longname: "Cappasity",
    description: "Cappasity coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cappasity/"
    }
},{
    name: "molecule",
    code: "MOL",
    icon: "mol",
    longname: "Molecule",
    description: "Molecule coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/molecule/"
    }
},{
    name: "gems-protocol",
    code: "GEM",
    icon: "gem",
    longname: "Gems ",
    description: "Gems  coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gems-protocol/"
    }
},{
    name: "litex",
    code: "LXT",
    icon: "lxt",
    longname: "Litex",
    description: "Litex coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/litex/"
    }
},{
    name: "b2bcoin",
    code: "BBC",
    icon: "bbc",
    longname: "TraDove B2BCoin",
    description: "TraDove B2BCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/b2bcoin/"
    }
},{
    name: "ormeus-coin",
    code: "ORME",
    icon: "orme",
    longname: "Ormeus Coin",
    description: "Ormeus Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ormeus-coin/"
    }
},{
    name: "exrnchain",
    code: "EXRN",
    icon: "exrn",
    longname: "EXRNchain",
    description: "EXRNchain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/exrnchain/"
    }
},{
    name: "banyan-network",
    code: "BBN",
    icon: "bbn",
    longname: "Banyan Network",
    description: "Banyan Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/banyan-network/"
    }
},{
    name: "nebula-ai",
    code: "NBAI",
    icon: "nbai",
    longname: "Nebula AI",
    description: "Nebula AI coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nebula-ai/"
    }
},{
    name: "ethersocial",
    code: "ESN",
    icon: "esn",
    longname: "Ethersocial",
    description: "Ethersocial coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ethersocial/"
    }
},{
    name: "prasm",
    code: "PSM",
    icon: "psm",
    longname: "PRASM",
    description: "PRASM coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/prasm/"
    }
},{
    name: "egretia",
    code: "EGT",
    icon: "egt",
    longname: "Egretia",
    description: "Egretia coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/egretia/"
    }
},{
    name: "bitsend",
    code: "BSD",
    icon: "bsd",
    longname: "BitSend",
    description: "BitSend coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitsend/"
    }
},{
    name: "airbloc",
    code: "ABL",
    icon: "abl",
    longname: "Airbloc",
    description: "Airbloc coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/airbloc/"
    }
},{
    name: "real",
    code: "REAL",
    icon: "real",
    longname: "REAL",
    description: "REAL coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/real/"
    }
},{
    name: "stellite",
    code: "XTL",
    icon: "xtl",
    longname: "Stellite",
    description: "Stellite coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/stellite/"
    }
},{
    name: "guppy",
    code: "GUP",
    icon: "gup",
    longname: "Matchpool",
    description: "Matchpool coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/guppy/"
    }
},{
    name: "trustnote",
    code: "TTT",
    icon: "ttt",
    longname: "TrustNote",
    description: "TrustNote coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/trustnote/"
    }
},{
    name: "solarcoin",
    code: "SLR",
    icon: "slr",
    longname: "SolarCoin",
    description: "SolarCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/solarcoin/"
    }
},{
    name: "experty",
    code: "EXY",
    icon: "exy",
    longname: "Experty",
    description: "Experty coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/experty/"
    }
},{
    name: "rightmesh",
    code: "RMESH",
    icon: "rmesh",
    longname: "RightMesh",
    description: "RightMesh coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rightmesh/"
    }
},{
    name: "neurotoken",
    code: "NTK",
    icon: "ntk",
    longname: "Neurotoken",
    description: "Neurotoken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/neurotoken/"
    }
},{
    name: "gene-source-code-chain",
    code: "GENE",
    icon: "gene",
    longname: "Gene Source Code Chain",
    description: "Gene Source Code Chain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gene-source-code-chain/"
    }
},{
    name: "flixxo",
    code: "FLIXX",
    icon: "flixx",
    longname: "Flixxo",
    description: "Flixxo coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/flixxo/"
    }
},{
    name: "vexanium",
    code: "VEX",
    icon: "vex",
    longname: "Vexanium",
    description: "Vexanium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vexanium/"
    }
},{
    name: "on-live",
    code: "ONL",
    icon: "onl",
    longname: "On.Live",
    description: "On.Live coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/on-live/"
    }
},{
    name: "newyorkcoin",
    code: "NYC",
    icon: "nyc",
    longname: "NewYorkCoin",
    description: "NewYorkCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/newyorkcoin/"
    }
},{
    name: "qwark",
    code: "QWARK",
    icon: "qwark",
    longname: "Qwark",
    description: "Qwark coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/qwark/"
    }
},{
    name: "trinity-network-credit",
    code: "TNC",
    icon: "tnc",
    longname: "Trinity Network Credit",
    description: "Trinity Network Credit coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/trinity-network-credit/"
    }
},{
    name: "chronobank",
    code: "TIME",
    icon: "time",
    longname: "Chronobank",
    description: "Chronobank coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/chronobank/"
    }
},{
    name: "xpa",
    code: "XPA",
    icon: "xpa",
    longname: "XPA",
    description: "XPA coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/xpa/"
    }
},{
    name: "helium",
    code: "HLM",
    icon: "hlm",
    longname: "Helium",
    description: "Helium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/helium/"
    }
},{
    name: "dubaicoin-dbix",
    code: "DBIX",
    icon: "dbix",
    longname: "DubaiCoin",
    description: "DubaiCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dubaicoin-dbix/"
    }
},{
    name: "gobyte",
    code: "GBX",
    icon: "gbx",
    longname: "GoByte",
    description: "GoByte coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gobyte/"
    }
},{
    name: "geocoin",
    code: "GEO",
    icon: "geo",
    longname: "GeoCoin",
    description: "GeoCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/geocoin/"
    }
},{
    name: "welltrado",
    code: "WTL",
    icon: "wtl",
    longname: "Welltrado",
    description: "Welltrado coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/welltrado/"
    }
},{
    name: "novacoin",
    code: "NVC",
    icon: "nvc",
    longname: "Novacoin",
    description: "Novacoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/novacoin/"
    }
},{
    name: "gentarium",
    code: "GTM",
    icon: "gtm",
    longname: "Gentarium",
    description: "Gentarium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gentarium/"
    }
},{
    name: "turtlecoin",
    code: "TRTL",
    icon: "trtl",
    longname: "Turtlecoin",
    description: "Turtlecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/turtlecoin/"
    }
},{
    name: "echolink",
    code: "EKO",
    icon: "eko",
    longname: "EchoLink",
    description: "EchoLink coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/echolink/"
    }
},{
    name: "boxx-token-blockparty",
    code: "BOXX",
    icon: "boxx",
    longname: "BOXX Token [Blockparty]",
    description: "BOXX Token [Blockparty] coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/boxx-token-blockparty/"
    }
},{
    name: "mib-coin",
    code: "MIB",
    icon: "mib",
    longname: "MIB Coin",
    description: "MIB Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mib-coin/"
    }
},{
    name: "rivetz",
    code: "RVT",
    icon: "rvt",
    longname: "Rivetz",
    description: "Rivetz coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rivetz/"
    }
},{
    name: "patientory",
    code: "PTOY",
    icon: "ptoy",
    longname: "Patientory",
    description: "Patientory coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/patientory/"
    }
},{
    name: "encrypgen",
    code: "DNA",
    icon: "dna",
    longname: "EncrypGen",
    description: "EncrypGen coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/encrypgen/"
    }
},{
    name: "daostack",
    code: "GEN",
    icon: "gen",
    longname: "DAOstack",
    description: "DAOstack coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/daostack/"
    }
},{
    name: "nolimitcoin",
    code: "NLC2",
    icon: "nlc2",
    longname: "NoLimitCoin",
    description: "NoLimitCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nolimitcoin/"
    }
},{
    name: "selfsell",
    code: "SSC",
    icon: "ssc",
    longname: "SelfSell",
    description: "SelfSell coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/selfsell/"
    }
},{
    name: "wabnetwork",
    code: "WAB",
    icon: "wab",
    longname: "WABnetwork",
    description: "WABnetwork coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/wabnetwork/"
    }
},{
    name: "formosa-financial",
    code: "FMF",
    icon: "fmf",
    longname: "Formosa Financial",
    description: "Formosa Financial coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/formosa-financial/"
    }
},{
    name: "1world",
    code: "1WO",
    icon: "1wo",
    longname: "1World",
    description: "1World coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/1world/"
    }
},{
    name: "menlo-one",
    code: "ONE",
    icon: "one",
    longname: "Menlo One",
    description: "Menlo One coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/menlo-one/"
    }
},{
    name: "farmatrust",
    code: "FTT",
    icon: "ftt",
    longname: "FarmaTrust",
    description: "FarmaTrust coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/farmatrust/"
    }
},{
    name: "ugchain",
    code: "UGC",
    icon: "ugc",
    longname: "ugChain",
    description: "ugChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ugchain/"
    }
},{
    name: "morpheus-labs",
    code: "MITX",
    icon: "mitx",
    longname: "Morpheus Labs",
    description: "Morpheus Labs coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/morpheus-labs/"
    }
},{
    name: "dovu",
    code: "DOV",
    icon: "dov",
    longname: "Dovu",
    description: "Dovu coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dovu/"
    }
},{
    name: "cryptosolartech",
    code: "CST",
    icon: "cst",
    longname: "Cryptosolartech",
    description: "Cryptosolartech coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cryptosolartech/"
    }
},{
    name: "oneledger",
    code: "OLT",
    icon: "olt",
    longname: "OneLedger",
    description: "OneLedger coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/oneledger/"
    }
},{
    name: "okcash",
    code: "OK",
    icon: "ok",
    longname: "OKCash",
    description: "OKCash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/okcash/"
    }
},{
    name: "commerceblock",
    code: "CBT",
    icon: "cbt",
    longname: "CommerceBlock",
    description: "CommerceBlock coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/commerceblock/"
    }
},{
    name: "lightpaycoin",
    code: "LPC",
    icon: "lpc",
    longname: "Lightpaycoin",
    description: "Lightpaycoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/lightpaycoin/"
    }
},{
    name: "coinpoker",
    code: "CHP",
    icon: "chp",
    longname: "CoinPoker",
    description: "CoinPoker coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/coinpoker/"
    }
},{
    name: "the-abyss",
    code: "ABYSS",
    icon: "abyss",
    longname: "The Abyss",
    description: "The Abyss coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/the-abyss/"
    }
},{
    name: "hashgard",
    code: "GARD",
    icon: "gard",
    longname: "Hashgard",
    description: "Hashgard coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hashgard/"
    }
},{
    name: "nusd",
    code: "NUSD",
    icon: "nusd",
    longname: "nUSD",
    description: "nUSD coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nusd/"
    }
},{
    name: "cyclean",
    code: "CCL",
    icon: "ccl",
    longname: "CYCLEAN",
    description: "CYCLEAN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cyclean/"
    }
},{
    name: "expanse",
    code: "EXP",
    icon: "exp",
    longname: "Expanse",
    description: "Expanse coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/expanse/"
    }
},{
    name: "aventus",
    code: "AVT",
    icon: "avt",
    longname: "Aventus",
    description: "Aventus coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aventus/"
    }
},{
    name: "dnotes",
    code: "NOTE",
    icon: "note",
    longname: "DNotes",
    description: "DNotes coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dnotes/"
    }
},{
    name: "trust",
    code: "TRST",
    icon: "trst",
    longname: "WeTrust",
    description: "WeTrust coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/trust/"
    }
},{
    name: "red",
    code: "RED",
    icon: "red",
    longname: "RED",
    description: "RED coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/red/"
    }
},{
    name: "syndicate",
    code: "SYNX",
    icon: "synx",
    longname: "Syndicate",
    description: "Syndicate coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/syndicate/"
    }
},{
    name: "olive",
    code: "OLE",
    icon: "ole",
    longname: "Olive",
    description: "Olive coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/olive/"
    }
},{
    name: "debitum-network",
    code: "DEB",
    icon: "deb",
    longname: "Debitum",
    description: "Debitum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/debitum-network/"
    }
},{
    name: "vites",
    code: "VITES",
    icon: "vites",
    longname: "Vites",
    description: "Vites coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vites/"
    }
},{
    name: "airwire",
    code: "WIRE",
    icon: "wire",
    longname: "AirWire",
    description: "AirWire coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/airwire/"
    }
},{
    name: "arbidex",
    code: "ABX",
    icon: "abx",
    longname: "Arbidex",
    description: "Arbidex coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/arbidex/"
    }
},{
    name: "merculet",
    code: "MVP",
    icon: "mvp",
    longname: "Merculet",
    description: "Merculet coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/merculet/"
    }
},{
    name: "bitshares-music",
    code: "XSD",
    icon: "xsd",
    longname: "SounDAC",
    description: "SounDAC coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitshares-music/"
    }
},{
    name: "zap",
    code: "ZAP",
    icon: "zap",
    longname: "Zap",
    description: "Zap coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zap/"
    }
},{
    name: "savedroid",
    code: "SVD",
    icon: "svd",
    longname: "savedroid",
    description: "savedroid coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/savedroid/"
    }
},{
    name: "qbao",
    code: "QBT",
    icon: "qbt",
    longname: "Qbao",
    description: "Qbao coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/qbao/"
    }
},{
    name: "flip",
    code: "FLP",
    icon: "flp",
    longname: "FLIP",
    description: "FLIP coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/flip/"
    }
},{
    name: "0xbtc",
    code: "0xBTC",
    icon: "0xbtc",
    longname: "0xBitcoin",
    description: "0xBitcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/0xbtc/"
    }
},{
    name: "copytrack",
    code: "CPY",
    icon: "cpy",
    longname: "COPYTRACK",
    description: "COPYTRACK coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/copytrack/"
    }
},{
    name: "effect-ai",
    code: "EFX",
    icon: "efx",
    longname: "Effect.AI",
    description: "Effect.AI coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/effect-ai/"
    }
},{
    name: "silent-notary",
    code: "SNTR",
    icon: "sntr",
    longname: "Silent Notary",
    description: "Silent Notary coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/silent-notary/"
    }
},{
    name: "friends",
    code: "FDZ",
    icon: "fdz",
    longname: "Friendz",
    description: "Friendz coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/friends/"
    }
},{
    name: "nework",
    code: "NKC",
    icon: "nkc",
    longname: "Nework",
    description: "Nework coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nework/"
    }
},{
    name: "sphere",
    code: "SPHR",
    icon: "sphr",
    longname: "Sphere",
    description: "Sphere coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sphere/"
    }
},{
    name: "adshares",
    code: "ADST",
    icon: "adst",
    longname: "AdShares",
    description: "AdShares coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/adshares/"
    }
},{
    name: "swarm-city",
    code: "SWT",
    icon: "swt",
    longname: "Swarm City",
    description: "Swarm City coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/swarm-city/"
    }
},{
    name: "measurable-data-token",
    code: "MDT",
    icon: "mdt",
    longname: "Measurable Data Token",
    description: "Measurable Data Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/measurable-data-token/"
    }
},{
    name: "capricoin",
    code: "CPC-1",
    icon: "cpc-1",
    longname: "Capricoin",
    description: "Capricoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/capricoin/"
    }
},{
    name: "1337coin",
    code: "1337",
    icon: "1337",
    longname: "Elite",
    description: "Elite coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/1337coin/"
    }
},{
    name: "datawallet",
    code: "DXT",
    icon: "dxt",
    longname: "Datawallet",
    description: "Datawallet coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/datawallet/"
    }
},{
    name: "autonio",
    code: "NIO",
    icon: "nio",
    longname: "Autonio",
    description: "Autonio coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/autonio/"
    }
},{
    name: "pirl",
    code: "PIRL",
    icon: "pirl",
    longname: "Pirl",
    description: "Pirl coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pirl/"
    }
},{
    name: "starbase",
    code: "STAR",
    icon: "star",
    longname: "Starbase",
    description: "Starbase coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/starbase/"
    }
},{
    name: "sharpe-platform-token",
    code: "SHP",
    icon: "shp",
    longname: "Sharpe Platform Token",
    description: "Sharpe Platform Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sharpe-platform-token/"
    }
},{
    name: "shield-xsh",
    code: "XSH",
    icon: "xsh",
    longname: "SHIELD",
    description: "SHIELD coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/shield-xsh/"
    }
},{
    name: "sibcoin",
    code: "SIB",
    icon: "sib",
    longname: "SIBCoin",
    description: "SIBCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sibcoin/"
    }
},{
    name: "golos",
    code: "GOLOS",
    icon: "golos",
    longname: "Golos",
    description: "Golos coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/golos/"
    }
},{
    name: "food",
    code: "FOOD",
    icon: "food",
    longname: "FoodCoin",
    description: "FoodCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/food/"
    }
},{
    name: "forkcoin",
    code: "FORK",
    icon: "fork",
    longname: "Forkcoin",
    description: "Forkcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/forkcoin/"
    }
},{
    name: "foldingcoin",
    code: "FLDC",
    icon: "fldc",
    longname: "FoldingCoin",
    description: "FoldingCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/foldingcoin/"
    }
},{
    name: "b3coin",
    code: "KB3",
    icon: "kb3",
    longname: "B3Coin",
    description: "B3Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/b3coin/"
    }
},{
    name: "datum",
    code: "DAT",
    icon: "dat",
    longname: "Datum",
    description: "Datum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/datum/"
    }
},{
    name: "curecoin",
    code: "CURE",
    icon: "cure",
    longname: "Curecoin",
    description: "Curecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/curecoin/"
    }
},{
    name: "aidcoin",
    code: "AID",
    icon: "aid",
    longname: "AidCoin",
    description: "AidCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aidcoin/"
    }
},{
    name: "insights-network",
    code: "INSTAR",
    icon: "instar",
    longname: "Insights Network",
    description: "Insights Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/insights-network/"
    }
},{
    name: "artbyte",
    code: "ABY",
    icon: "aby",
    longname: "ArtByte",
    description: "ArtByte coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/artbyte/"
    }
},{
    name: "shipchain",
    code: "SHIP",
    icon: "ship",
    longname: "ShipChain",
    description: "ShipChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/shipchain/"
    }
},{
    name: "energo",
    code: "TSL",
    icon: "tsl",
    longname: "Energo",
    description: "Energo coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/energo/"
    }
},{
    name: "uquid-coin",
    code: "UQC",
    icon: "uqc",
    longname: "Uquid Coin",
    description: "Uquid Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/uquid-coin/"
    }
},{
    name: "siacashcoin",
    code: "SCC",
    icon: "scc",
    longname: "SiaCashCoin",
    description: "SiaCashCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/siacashcoin/"
    }
},{
    name: "swisscoin",
    code: "SIC",
    icon: "sic",
    longname: "Swisscoin",
    description: "Swisscoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/swisscoin/"
    }
},{
    name: "goldcoin",
    code: "GLD",
    icon: "gld",
    longname: "GoldCoin",
    description: "GoldCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/goldcoin/"
    }
},{
    name: "atmos",
    code: "ATMOS",
    icon: "atmos",
    longname: "Atmos",
    description: "Atmos coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/atmos/"
    }
},{
    name: "snovio",
    code: "SNOV",
    icon: "snov",
    longname: "Snovian.Space",
    description: "Snovian.Space coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/snovio/"
    }
},{
    name: "insurepal",
    code: "IPL",
    icon: "ipl",
    longname: "VouchForMe",
    description: "VouchForMe coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/insurepal/"
    }
},{
    name: "atonomi",
    code: "ATMI",
    icon: "atmi",
    longname: "Atonomi",
    description: "Atonomi coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/atonomi/"
    }
},{
    name: "tokes",
    code: "TKS",
    icon: "tks",
    longname: "Tokes",
    description: "Tokes coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tokes/"
    }
},{
    name: "heronode",
    code: "HER",
    icon: "her",
    longname: "HeroNode",
    description: "HeroNode coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/heronode/"
    }
},{
    name: "acute-angle-cloud",
    code: "AAC",
    icon: "aac",
    longname: "Acute Angle Cloud",
    description: "Acute Angle Cloud coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/acute-angle-cloud/"
    }
},{
    name: "hoqu",
    code: "HQX",
    icon: "hqx",
    longname: "HOQU",
    description: "HOQU coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hoqu/"
    }
},{
    name: "pinkcoin",
    code: "PINK",
    icon: "pink",
    longname: "PinkCoin",
    description: "PinkCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pinkcoin/"
    }
},{
    name: "dynamic",
    code: "DYN",
    icon: "dyn",
    longname: "Dynamic",
    description: "Dynamic coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dynamic/"
    }
},{
    name: "relex",
    code: "RLX",
    icon: "rlx",
    longname: "Relex",
    description: "Relex coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/relex/"
    }
},{
    name: "neoscoin",
    code: "NEOS",
    icon: "neos",
    longname: "NeosCoin",
    description: "NeosCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/neoscoin/"
    }
},{
    name: "life",
    code: "LIFE",
    icon: "life",
    longname: "LIFE",
    description: "LIFE coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/life/"
    }
},{
    name: "exclusivecoin",
    code: "EXCL",
    icon: "excl",
    longname: "ExclusiveCoin",
    description: "ExclusiveCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/exclusivecoin/"
    }
},{
    name: "canyacoin",
    code: "CAN",
    icon: "can",
    longname: "CanYaCoin",
    description: "CanYaCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/canyacoin/"
    }
},{
    name: "fox-trading",
    code: "FOXT",
    icon: "foxt",
    longname: "Fox Trading",
    description: "Fox Trading coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fox-trading/"
    }
},{
    name: "bee-token",
    code: "BEE",
    icon: "bee",
    longname: "Bee Token",
    description: "Bee Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bee-token/"
    }
},{
    name: "bitrent",
    code: "RNTB",
    icon: "rntb",
    longname: "BitRent",
    description: "BitRent coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitrent/"
    }
},{
    name: "evencoin",
    code: "EVN-1",
    icon: "evn-1",
    longname: "EvenCoin",
    description: "EvenCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/evencoin/"
    }
},{
    name: "alphacat",
    code: "ACAT",
    icon: "acat",
    longname: "Alphacat",
    description: "Alphacat coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/alphacat/"
    }
},{
    name: "arionum",
    code: "ARO",
    icon: "aro",
    longname: "Arionum",
    description: "Arionum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/arionum/"
    }
},{
    name: "coinsuper-ecosystem-network",
    code: "CEN",
    icon: "cen",
    longname: "Coinsuper Ecosystem Network",
    description: "Coinsuper Ecosystem Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/coinsuper-ecosystem-network/"
    }
},{
    name: "hicoin",
    code: "XHI",
    icon: "xhi",
    longname: "HiCoin",
    description: "HiCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hicoin/"
    }
},{
    name: "mybit",
    code: "MYB",
    icon: "myb",
    longname: "MyBit",
    description: "MyBit coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mybit/"
    }
},{
    name: "clearpoll",
    code: "POLL",
    icon: "poll",
    longname: "ClearPoll",
    description: "ClearPoll coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/clearpoll/"
    }
},{
    name: "alax",
    code: "ALX",
    icon: "alx",
    longname: "ALAX",
    description: "ALAX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/alax/"
    }
},{
    name: "ac3",
    code: "AC3",
    icon: "ac3",
    longname: "AC3",
    description: "AC3 coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ac3/"
    }
},{
    name: "rate3",
    code: "RTE",
    icon: "rte",
    longname: "Rate3",
    description: "Rate3 coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rate3/"
    }
},{
    name: "ailink-token",
    code: "ALI",
    icon: "ali",
    longname: "AiLink Token",
    description: "AiLink Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ailink-token/"
    }
},{
    name: "atlant",
    code: "ATL",
    icon: "atl",
    longname: "ATLANT",
    description: "ATLANT coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/atlant/"
    }
},{
    name: "qchi",
    code: "QCH",
    icon: "qch",
    longname: "QChi",
    description: "QChi coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/qchi/"
    }
},{
    name: "education-ecosystem",
    code: "LEDU",
    icon: "ledu",
    longname: "Education Ecosystem",
    description: "Education Ecosystem coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/education-ecosystem/"
    }
},{
    name: "2give",
    code: "2GIVE",
    icon: "2give",
    longname: "2GIVE",
    description: "2GIVE coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/2give/"
    }
},{
    name: "korecoin",
    code: "KORE",
    icon: "kore",
    longname: "Kore",
    description: "Kore coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/korecoin/"
    }
},{
    name: "bitcoinz",
    code: "BTCZ",
    icon: "btcz",
    longname: "BitcoinZ",
    description: "BitcoinZ coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoinz/"
    }
},{
    name: "upfiring",
    code: "UFR",
    icon: "ufr",
    longname: "Upfiring",
    description: "Upfiring coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/upfiring/"
    }
},{
    name: "global-awards-token",
    code: "GAT",
    icon: "gat",
    longname: "Global Awards Token",
    description: "Global Awards Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/global-awards-token/"
    }
},{
    name: "sense",
    code: "SENSE",
    icon: "sense",
    longname: "Sense",
    description: "Sense coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sense/"
    }
},{
    name: "bitscreener-token",
    code: "BITX",
    icon: "bitx",
    longname: "BitScreener Token",
    description: "BitScreener Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitscreener-token/"
    }
},{
    name: "kleros",
    code: "PNK",
    icon: "pnk",
    longname: "Kleros",
    description: "Kleros coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kleros/"
    }
},{
    name: "miners-reward-token",
    code: "MRT",
    icon: "mrt",
    longname: "Miners' Reward Token",
    description: "Miners' Reward Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/miners-reward-token/"
    }
},{
    name: "stronghands",
    code: "SHND",
    icon: "shnd",
    longname: "StrongHands",
    description: "StrongHands coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/stronghands/"
    }
},{
    name: "bettex-coin",
    code: "BTXC",
    icon: "btxc",
    longname: "Bettex Coin",
    description: "Bettex Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bettex-coin/"
    }
},{
    name: "stox",
    code: "STX",
    icon: "stx",
    longname: "Stox",
    description: "Stox coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/stox/"
    }
},{
    name: "ip-exchange",
    code: "IPSX",
    icon: "ipsx",
    longname: "IP Exchange",
    description: "IP Exchange coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ip-exchange/"
    }
},{
    name: "digital-asset-guarantee-token",
    code: "DAGT",
    icon: "dagt",
    longname: "Digital Asset Guarantee Token",
    description: "Digital Asset Guarantee Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/digital-asset-guarantee-token/"
    }
},{
    name: "cpollo",
    code: "CPLO",
    icon: "cplo",
    longname: "Cpollo",
    description: "Cpollo coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cpollo/"
    }
},{
    name: "mallcoin",
    code: "MLC",
    icon: "mlc",
    longname: "Mallcoin",
    description: "Mallcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mallcoin/"
    }
},{
    name: "colu-local-network",
    code: "CLN",
    icon: "cln",
    longname: "Colu Local Network",
    description: "Colu Local Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/colu-local-network/"
    }
},{
    name: "internet-of-people",
    code: "IOP",
    icon: "iop",
    longname: "Internet of People",
    description: "Internet of People coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/internet-of-people/"
    }
},{
    name: "4new",
    code: "KWATT",
    icon: "kwatt",
    longname: "4NEW",
    description: "4NEW coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/4new/"
    }
},{
    name: "fintrux-network",
    code: "FTX",
    icon: "ftx",
    longname: "FintruX Network",
    description: "FintruX Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fintrux-network/"
    }
},{
    name: "intercrone",
    code: "ICR",
    icon: "icr",
    longname: "InterCrone",
    description: "InterCrone coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/intercrone/"
    }
},{
    name: "latiumx",
    code: "LATX",
    icon: "latx",
    longname: "LatiumX",
    description: "LatiumX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/latiumx/"
    }
},{
    name: "aichain",
    code: "AIT",
    icon: "ait",
    longname: "AICHAIN",
    description: "AICHAIN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aichain/"
    }
},{
    name: "bethereum",
    code: "BETHER",
    icon: "bether",
    longname: "Bethereum",
    description: "Bethereum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bethereum/"
    }
},{
    name: "bitcoin-plus",
    code: "XBC",
    icon: "xbc",
    longname: "Bitcoin Plus",
    description: "Bitcoin Plus coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoin-plus/"
    }
},{
    name: "nper",
    code: "NPER",
    icon: "nper",
    longname: "NPER",
    description: "NPER coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nper/"
    }
},{
    name: "woodcoin",
    code: "LOG",
    icon: "log",
    longname: "Woodcoin",
    description: "Woodcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/woodcoin/"
    }
},{
    name: "zero",
    code: "ZER",
    icon: "zer",
    longname: "Zero",
    description: "Zero coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zero/"
    }
},{
    name: "devery",
    code: "EVE",
    icon: "eve",
    longname: "Devery",
    description: "Devery coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/devery/"
    }
},{
    name: "playkey",
    code: "PKT",
    icon: "pkt",
    longname: "Playkey",
    description: "Playkey coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/playkey/"
    }
},{
    name: "invacio",
    code: "INV",
    icon: "inv",
    longname: "Invacio",
    description: "Invacio coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/invacio/"
    }
},{
    name: "sprouts",
    code: "SPRTS",
    icon: "sprts",
    longname: "Sprouts",
    description: "Sprouts coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sprouts/"
    }
},{
    name: "adbank",
    code: "ADB",
    icon: "adb",
    longname: "adbank",
    description: "adbank coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/adbank/"
    }
},{
    name: "dowcoin",
    code: "DOW",
    icon: "dow",
    longname: "DOWCOIN",
    description: "DOWCOIN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dowcoin/"
    }
},{
    name: "internxt",
    code: "INXT",
    icon: "inxt",
    longname: "Internxt",
    description: "Internxt coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/internxt/"
    }
},{
    name: "cruisebit",
    code: "CRBT",
    icon: "crbt",
    longname: "Cruisebit",
    description: "Cruisebit coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cruisebit/"
    }
},{
    name: "level-up",
    code: "LUC",
    icon: "luc",
    longname: "Level Up Coin",
    description: "Level Up Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/level-up/"
    }
},{
    name: "hexx",
    code: "HXX",
    icon: "hxx",
    longname: "Hexx",
    description: "Hexx coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hexx/"
    }
},{
    name: "uchain",
    code: "UCN",
    icon: "ucn",
    longname: "UChain",
    description: "UChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/uchain/"
    }
},{
    name: "jsecoin",
    code: "JSE",
    icon: "jse",
    longname: "JSECOIN",
    description: "JSECOIN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/jsecoin/"
    }
},{
    name: "optitoken",
    code: "OPTI",
    icon: "opti",
    longname: "OptiToken",
    description: "OptiToken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/optitoken/"
    }
},{
    name: "veros",
    code: "VRS",
    icon: "vrs",
    longname: "Veros",
    description: "Veros coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/veros/"
    }
},{
    name: "niobio-cash",
    code: "NBR",
    icon: "nbr",
    longname: "Niobio Cash",
    description: "Niobio Cash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/niobio-cash/"
    }
},{
    name: "ergo",
    code: "EFYT",
    icon: "efyt",
    longname: "Ergo",
    description: "Ergo coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ergo/"
    }
},{
    name: "obits",
    code: "OBITS",
    icon: "obits",
    longname: "OBITS",
    description: "OBITS coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/obits/"
    }
},{
    name: "etheera",
    code: "ETA",
    icon: "eta",
    longname: "Etheera",
    description: "Etheera coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/etheera/"
    }
},{
    name: "daneel",
    code: "DAN",
    icon: "dan",
    longname: "Daneel",
    description: "Daneel coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/daneel/"
    }
},{
    name: "zilla",
    code: "ZLA",
    icon: "zla",
    longname: "Zilla",
    description: "Zilla coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zilla/"
    }
},{
    name: "jet8",
    code: "J8T",
    icon: "j8t",
    longname: "JET8",
    description: "JET8 coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/jet8/"
    }
},{
    name: "eventchain",
    code: "EVC",
    icon: "evc",
    longname: "EventChain",
    description: "EventChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/eventchain/"
    }
},{
    name: "privatix",
    code: "PRIX",
    icon: "prix",
    longname: "Privatix",
    description: "Privatix coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/privatix/"
    }
},{
    name: "ryo-currency",
    code: "RYO",
    icon: "ryo",
    longname: "Ryo Currency",
    description: "Ryo Currency coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ryo-currency/"
    }
},{
    name: "prochain",
    code: "PRA",
    icon: "pra",
    longname: "ProChain",
    description: "ProChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/prochain/"
    }
},{
    name: "cashbery-coin",
    code: "CBC-1",
    icon: "cbc-1",
    longname: "Cashbery Coin",
    description: "Cashbery Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cashbery-coin/"
    }
},{
    name: "global-cryptocurrency",
    code: "GCC",
    icon: "gcc",
    longname: "Global Cryptocurrency",
    description: "Global Cryptocurrency coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/global-cryptocurrency/"
    }
},{
    name: "worldcore",
    code: "WRC",
    icon: "wrc",
    longname: "Worldcore",
    description: "Worldcore coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/worldcore/"
    }
},{
    name: "credit-tag-chain",
    code: "CTC",
    icon: "ctc",
    longname: "Credit Tag Chain",
    description: "Credit Tag Chain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/credit-tag-chain/"
    }
},{
    name: "eristica",
    code: "ERT",
    icon: "ert",
    longname: "Eristica",
    description: "Eristica coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/eristica/"
    }
},{
    name: "traceability-chain",
    code: "TAC",
    icon: "tac",
    longname: "Traceability Chain",
    description: "Traceability Chain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/traceability-chain/"
    }
},{
    name: "block-array",
    code: "ARY",
    icon: "ary",
    longname: "Block Array",
    description: "Block Array coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/block-array/"
    }
},{
    name: "betterbetting",
    code: "BETR",
    icon: "betr",
    longname: "BetterBetting",
    description: "BetterBetting coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/betterbetting/"
    }
},{
    name: "coinfi",
    code: "COFI",
    icon: "cofi",
    longname: "CoinFi",
    description: "CoinFi coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/coinfi/"
    }
},{
    name: "social-send",
    code: "SEND",
    icon: "send",
    longname: "Social Send",
    description: "Social Send coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/social-send/"
    }
},{
    name: "ethereum-blue",
    code: "BLUE",
    icon: "blue",
    longname: "Blue Protocol",
    description: "Blue Protocol coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ethereum-blue/"
    }
},{
    name: "transfercoin",
    code: "TX",
    icon: "tx",
    longname: "TransferCoin",
    description: "TransferCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/transfercoin/"
    }
},{
    name: "herocoin",
    code: "PLAY",
    icon: "play",
    longname: "HEROcoin",
    description: "HEROcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/herocoin/"
    }
},{
    name: "trakinvest",
    code: "TRAK",
    icon: "trak",
    longname: "TrakInvest",
    description: "TrakInvest coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/trakinvest/"
    }
},{
    name: "helbiz",
    code: "HBZ",
    icon: "hbz",
    longname: "Helbiz",
    description: "Helbiz coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/helbiz/"
    }
},{
    name: "tgame",
    code: "TGAME",
    icon: "tgame",
    longname: "Truegame",
    description: "Truegame coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tgame/"
    }
},{
    name: "breakout-stake",
    code: "BRX",
    icon: "brx",
    longname: "Breakout Stake",
    description: "Breakout Stake coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/breakout-stake/"
    }
},{
    name: "thingschain",
    code: "TIC",
    icon: "tic",
    longname: "Thingschain",
    description: "Thingschain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/thingschain/"
    }
},{
    name: "hold",
    code: "HOLD",
    icon: "hold",
    longname: "HOLD",
    description: "HOLD coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hold/"
    }
},{
    name: "litedoge",
    code: "LDOGE",
    icon: "ldoge",
    longname: "LiteDoge",
    description: "LiteDoge coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/litedoge/"
    }
},{
    name: "intervalue",
    code: "INVE",
    icon: "inve",
    longname: "InterValue",
    description: "InterValue coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/intervalue/"
    }
},{
    name: "lethean",
    code: "LTHN",
    icon: "lthn",
    longname: "Lethean",
    description: "Lethean coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/lethean/"
    }
},{
    name: "heartbout",
    code: "HB",
    icon: "hb",
    longname: "HeartBout",
    description: "HeartBout coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/heartbout/"
    }
},{
    name: "pareto-network",
    code: "PARETO",
    icon: "pareto",
    longname: "Pareto Network",
    description: "Pareto Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pareto-network/"
    }
},{
    name: "bitclave",
    code: "CAT",
    icon: "cat",
    longname: "BitClave",
    description: "BitClave coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitclave/"
    }
},{
    name: "memetic",
    code: "MEME",
    icon: "meme",
    longname: "Memetic / PepeCoin",
    description: "Memetic / PepeCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/memetic/"
    }
},{
    name: "matryx",
    code: "MTX",
    icon: "mtx",
    longname: "Matryx",
    description: "Matryx coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/matryx/"
    }
},{
    name: "edrcoin",
    code: "EDRC",
    icon: "edrc",
    longname: "EDRCoin",
    description: "EDRCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/edrcoin/"
    }
},{
    name: "fedoracoin",
    code: "TIPS",
    icon: "tips",
    longname: "FedoraCoin",
    description: "FedoraCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fedoracoin/"
    }
},{
    name: "faceter",
    code: "FACE",
    icon: "face",
    longname: "Faceter",
    description: "Faceter coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/faceter/"
    }
},{
    name: "likecoin",
    code: "LIKE",
    icon: "like",
    longname: "LikeCoin",
    description: "LikeCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/likecoin/"
    }
},{
    name: "trittium",
    code: "TRTT",
    icon: "trtt",
    longname: "Trittium",
    description: "Trittium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/trittium/"
    }
},{
    name: "student-coin",
    code: "STU",
    icon: "stu",
    longname: "bitJob",
    description: "bitJob coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/student-coin/"
    }
},{
    name: "euno",
    code: "EUNO",
    icon: "euno",
    longname: "EUNO",
    description: "EUNO coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/euno/"
    }
},{
    name: "bobs-repair",
    code: "BOB",
    icon: "bob",
    longname: "Bob's Repair",
    description: "Bob's Repair coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bobs-repair/"
    }
},{
    name: "adhive",
    code: "ADH",
    icon: "adh",
    longname: "AdHive",
    description: "AdHive coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/adhive/"
    }
},{
    name: "rentberry",
    code: "BERRY",
    icon: "berry",
    longname: "Rentberry",
    description: "Rentberry coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rentberry/"
    }
},{
    name: "opus",
    code: "OPT",
    icon: "opt",
    longname: "Opus",
    description: "Opus coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/opus/"
    }
},{
    name: "sp8de",
    code: "SPX",
    icon: "spx",
    longname: "Sp8de",
    description: "Sp8de coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sp8de/"
    }
},{
    name: "logiscoin",
    code: "LGS",
    icon: "lgs",
    longname: "LogisCoin",
    description: "LogisCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/logiscoin/"
    }
},{
    name: "zcore",
    code: "ZCR",
    icon: "zcr",
    longname: "ZCore",
    description: "ZCore coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zcore/"
    }
},{
    name: "thrive-token",
    code: "THRT",
    icon: "thrt",
    longname: "Thrive Token",
    description: "Thrive Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/thrive-token/"
    }
},{
    name: "vulcano",
    code: "VULC",
    icon: "vulc",
    longname: "VULCANO",
    description: "VULCANO coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vulcano/"
    }
},{
    name: "terracoin",
    code: "TRC",
    icon: "trc",
    longname: "Terracoin",
    description: "Terracoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/terracoin/"
    }
},{
    name: "idex-membership",
    code: "IDXM",
    icon: "idxm",
    longname: "IDEX Membership",
    description: "IDEX Membership coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/idex-membership/"
    }
},{
    name: "lala-world",
    code: "LALA",
    icon: "lala",
    longname: "LALA World",
    description: "LALA World coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/lala-world/"
    }
},{
    name: "giant-coin",
    code: "GIC",
    icon: "gic",
    longname: "Giant",
    description: "Giant coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/giant-coin/"
    }
},{
    name: "repme",
    code: "RPM",
    icon: "rpm",
    longname: "Repme",
    description: "Repme coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/repme/"
    }
},{
    name: "goldmint",
    code: "MNTP",
    icon: "mntp",
    longname: "GoldMint",
    description: "GoldMint coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/goldmint/"
    }
},{
    name: "locicoin",
    code: "LOCI",
    icon: "loci",
    longname: "LOCIcoin",
    description: "LOCIcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/locicoin/"
    }
},{
    name: "sentinel-chain",
    code: "SENC",
    icon: "senc",
    longname: "Sentinel Chain",
    description: "Sentinel Chain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sentinel-chain/"
    }
},{
    name: "elixir",
    code: "ELIX",
    icon: "elix",
    longname: "Elixir",
    description: "Elixir coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/elixir/"
    }
},{
    name: "nubits",
    code: "USNBT",
    icon: "usnbt",
    longname: "NuBits",
    description: "NuBits coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nubits/"
    }
},{
    name: "profile-utility-token",
    code: "PUT",
    icon: "put",
    longname: "Profile Utility Token",
    description: "Profile Utility Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/profile-utility-token/"
    }
},{
    name: "tokenbox",
    code: "TBX",
    icon: "tbx",
    longname: "Tokenbox",
    description: "Tokenbox coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tokenbox/"
    }
},{
    name: "srcoin",
    code: "SRCOIN",
    icon: "srcoin",
    longname: "SRCOIN",
    description: "SRCOIN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/srcoin/"
    }
},{
    name: "akroma",
    code: "AKA",
    icon: "aka",
    longname: "Akroma",
    description: "Akroma coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/akroma/"
    }
},{
    name: "genesisx",
    code: "XGS",
    icon: "xgs",
    longname: "GenesisX",
    description: "GenesisX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/genesisx/"
    }
},{
    name: "mywish",
    code: "WISH",
    icon: "wish",
    longname: "MyWish",
    description: "MyWish coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mywish/"
    }
},{
    name: "kora-network-token",
    code: "KNT",
    icon: "knt",
    longname: "Kora Network Token",
    description: "Kora Network Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kora-network-token/"
    }
},{
    name: "breakout",
    code: "BRK",
    icon: "brk",
    longname: "Breakout",
    description: "Breakout coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/breakout/"
    }
},{
    name: "bitcrystals",
    code: "BCY",
    icon: "bcy",
    longname: "BitCrystals",
    description: "BitCrystals coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcrystals/"
    }
},{
    name: "ongsocial",
    code: "ONG",
    icon: "ong",
    longname: "SoMee.Social",
    description: "SoMee.Social coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ongsocial/"
    }
},{
    name: "carboneum-c8-token",
    code: "C8",
    icon: "c8",
    longname: "Carboneum [C8] Token",
    description: "Carboneum [C8] Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/carboneum-c8-token/"
    }
},{
    name: "mtc-mesh-network",
    code: "MTC-1",
    icon: "mtc-1",
    longname: "MTC Mesh Network",
    description: "MTC Mesh Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mtc-mesh-network/"
    }
},{
    name: "belacoin",
    code: "BELA",
    icon: "bela",
    longname: "Bela",
    description: "Bela coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/belacoin/"
    }
},{
    name: "mnpcoin",
    code: "MNP",
    icon: "mnp",
    longname: "MNPCoin",
    description: "MNPCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mnpcoin/"
    }
},{
    name: "dopecoin",
    code: "DOPE",
    icon: "dope",
    longname: "DopeCoin",
    description: "DopeCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dopecoin/"
    }
},{
    name: "divi-exchange-token",
    code: "DIVX",
    icon: "divx",
    longname: "Divi Exchange Token",
    description: "Divi Exchange Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/divi-exchange-token/"
    }
},{
    name: "skincoin",
    code: "SKIN",
    icon: "skin",
    longname: "SkinCoin",
    description: "SkinCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/skincoin/"
    }
},{
    name: "cryptocarbon",
    code: "CCRB",
    icon: "ccrb",
    longname: "CryptoCarbon",
    description: "CryptoCarbon coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cryptocarbon/"
    }
},{
    name: "pundi-x-nem",
    code: "NPXSXEM",
    icon: "npxsxem",
    longname: "Pundi X NEM",
    description: "Pundi X NEM coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pundi-x-nem/"
    }
},{
    name: "encryptotel",
    code: "ETT",
    icon: "ett",
    longname: "EncryptoTel [WAVES]",
    description: "EncryptoTel [WAVES] coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/encryptotel/"
    }
},{
    name: "ubcoin-market",
    code: "UBC",
    icon: "ubc",
    longname: "Ubcoin Market",
    description: "Ubcoin Market coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ubcoin-market/"
    }
},{
    name: "cannabiscoin",
    code: "CANN",
    icon: "cann",
    longname: "CannabisCoin",
    description: "CannabisCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cannabiscoin/"
    }
},{
    name: "women",
    code: "WOMEN",
    icon: "women",
    longname: "WomenCoin",
    description: "WomenCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/women/"
    }
},{
    name: "karbo",
    code: "KRB",
    icon: "krb",
    longname: "Karbo",
    description: "Karbo coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/karbo/"
    }
},{
    name: "mediccoin",
    code: "MEDIC",
    icon: "medic",
    longname: "MedicCoin",
    description: "MedicCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mediccoin/"
    }
},{
    name: "sapien",
    code: "SPN",
    icon: "spn",
    longname: "Sapien",
    description: "Sapien coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sapien/"
    }
},{
    name: "eboostcoin",
    code: "EBST",
    icon: "ebst",
    longname: "eBoost",
    description: "eBoost coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/eboostcoin/"
    }
},{
    name: "biblepay",
    code: "BBP",
    icon: "bbp",
    longname: "BiblePay",
    description: "BiblePay coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/biblepay/"
    }
},{
    name: "apollon",
    code: "XAP",
    icon: "xap",
    longname: "Apollon",
    description: "Apollon coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/apollon/"
    }
},{
    name: "snowgem",
    code: "XSG",
    icon: "xsg",
    longname: "SnowGem",
    description: "SnowGem coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/snowgem/"
    }
},{
    name: "dprating",
    code: "RATING",
    icon: "rating",
    longname: "DPRating",
    description: "DPRating coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dprating/"
    }
},{
    name: "travelflex",
    code: "TRF",
    icon: "trf",
    longname: "Travelflex",
    description: "Travelflex coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/travelflex/"
    }
},{
    name: "castle",
    code: "CSTL",
    icon: "cstl",
    longname: "Castle",
    description: "Castle coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/castle/"
    }
},{
    name: "indorse-token",
    code: "IND",
    icon: "ind",
    longname: "Indorse Token",
    description: "Indorse Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/indorse-token/"
    }
},{
    name: "zippie",
    code: "ZIPT",
    icon: "zipt",
    longname: "Zippie",
    description: "Zippie coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zippie/"
    }
},{
    name: "snodecoin",
    code: "SND",
    icon: "snd",
    longname: "SnodeCoin",
    description: "SnodeCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/snodecoin/"
    }
},{
    name: "masternet",
    code: "MASH",
    icon: "mash",
    longname: "MASTERNET",
    description: "MASTERNET coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/masternet/"
    }
},{
    name: "fire-lotto",
    code: "FLOT",
    icon: "flot",
    longname: "Fire Lotto",
    description: "Fire Lotto coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fire-lotto/"
    }
},{
    name: "sharpay",
    code: "S",
    icon: "s",
    longname: "Sharpay",
    description: "Sharpay coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sharpay/"
    }
},{
    name: "auctus",
    code: "AUC",
    icon: "auc",
    longname: "Auctus",
    description: "Auctus coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/auctus/"
    }
},{
    name: "metamorph",
    code: "METM",
    icon: "metm",
    longname: "MetaMorph",
    description: "MetaMorph coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/metamorph/"
    }
},{
    name: "sumokoin",
    code: "SUMO",
    icon: "sumo",
    longname: "Sumokoin",
    description: "Sumokoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sumokoin/"
    }
},{
    name: "sharechain",
    code: "SSS",
    icon: "sss",
    longname: "Sharechain",
    description: "Sharechain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sharechain/"
    }
},{
    name: "gcn-coin",
    code: "GCN",
    icon: "gcn",
    longname: "GCN Coin",
    description: "GCN Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gcn-coin/"
    }
},{
    name: "argentum",
    code: "ARG",
    icon: "arg",
    longname: "Argentum",
    description: "Argentum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/argentum/"
    }
},{
    name: "xceltoken",
    code: "XCEL",
    icon: "xcel",
    longname: "XcelToken",
    description: "XcelToken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/xceltoken/"
    }
},{
    name: "signal-token",
    code: "SIG",
    icon: "sig",
    longname: "Spectiv",
    description: "Spectiv coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/signal-token/"
    }
},{
    name: "flypme",
    code: "FYP",
    icon: "fyp",
    longname: "FlypMe",
    description: "FlypMe coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/flypme/"
    }
},{
    name: "proton-token",
    code: "PTT",
    icon: "ptt",
    longname: "Proton Token",
    description: "Proton Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/proton-token/"
    }
},{
    name: "utrum",
    code: "OOT",
    icon: "oot",
    longname: "Utrum",
    description: "Utrum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/utrum/"
    }
},{
    name: "narrative",
    code: "NRVE",
    icon: "nrve",
    longname: "Narrative",
    description: "Narrative coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/narrative/"
    }
},{
    name: "fsbt-api-token",
    code: "FSBT",
    icon: "fsbt",
    longname: "FSBT API Token",
    description: "FSBT API Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fsbt-api-token/"
    }
},{
    name: "audiocoin",
    code: "ADC",
    icon: "adc",
    longname: "AudioCoin",
    description: "AudioCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/audiocoin/"
    }
},{
    name: "neutron",
    code: "NTRN",
    icon: "ntrn",
    longname: "Neutron",
    description: "Neutron coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/neutron/"
    }
},{
    name: "shard",
    code: "SHARD",
    icon: "shard",
    longname: "Shard",
    description: "Shard coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/shard/"
    }
},{
    name: "monacocoin",
    code: "XMCC",
    icon: "xmcc",
    longname: "Monoeci",
    description: "Monoeci coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/monacocoin/"
    }
},{
    name: "bitcoen",
    code: "BEN",
    icon: "ben",
    longname: "BitCoen",
    description: "BitCoen coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoen/"
    }
},{
    name: "bridge-protocol",
    code: "TOLL",
    icon: "toll",
    longname: "Bridge Protocol",
    description: "Bridge Protocol coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bridge-protocol/"
    }
},{
    name: "monkey-project",
    code: "MONK",
    icon: "monk",
    longname: "Monkey Project",
    description: "Monkey Project coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/monkey-project/"
    }
},{
    name: "reftoken",
    code: "REF",
    icon: "ref",
    longname: "RefToken",
    description: "RefToken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/reftoken/"
    }
},{
    name: "boutspro",
    code: "BOUTS",
    icon: "bouts",
    longname: "BoutsPro",
    description: "BoutsPro coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/boutspro/"
    }
},{
    name: "pitiscoin",
    code: "PTS",
    icon: "pts",
    longname: "PitisCoin",
    description: "PitisCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pitiscoin/"
    }
},{
    name: "futurax",
    code: "FTXT",
    icon: "ftxt",
    longname: "FUTURAX",
    description: "FUTURAX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/futurax/"
    }
},{
    name: "guaranteed-ethurance-token-extra",
    code: "GETX",
    icon: "getx",
    longname: "Guaranteed Ethurance Token Extra",
    description: "Guaranteed Ethurance Token Extra coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/guaranteed-ethurance-token-extra/"
    }
},{
    name: "buzzcoin",
    code: "BUZZ",
    icon: "buzz",
    longname: "BuzzCoin",
    description: "BuzzCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/buzzcoin/"
    }
},{
    name: "kryll",
    code: "KRL",
    icon: "krl",
    longname: "Kryll",
    description: "Kryll coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kryll/"
    }
},{
    name: "nullex",
    code: "NLX",
    icon: "nlx",
    longname: "Nullex",
    description: "Nullex coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nullex/"
    }
},{
    name: "simdaq",
    code: "SMQ",
    icon: "smq",
    longname: "SIMDAQ",
    description: "SIMDAQ coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/simdaq/"
    }
},{
    name: "bigbom",
    code: "BBO",
    icon: "bbo",
    longname: "Bigbom",
    description: "Bigbom coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bigbom/"
    }
},{
    name: "maverick-chain",
    code: "MVC",
    icon: "mvc",
    longname: "Maverick Chain",
    description: "Maverick Chain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/maverick-chain/"
    }
},{
    name: "huntercoin",
    code: "HUC",
    icon: "huc",
    longname: "HunterCoin",
    description: "HunterCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/huntercoin/"
    }
},{
    name: "pesetacoin",
    code: "PTC",
    icon: "ptc",
    longname: "Pesetacoin",
    description: "Pesetacoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pesetacoin/"
    }
},{
    name: "zinc",
    code: "ZINC",
    icon: "zinc",
    longname: "ZINC",
    description: "ZINC coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zinc/"
    }
},{
    name: "sharex",
    code: "SEXC",
    icon: "sexc",
    longname: "ShareX",
    description: "ShareX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sharex/"
    }
},{
    name: "rookiecoin",
    code: "RKC",
    icon: "rkc",
    longname: "Rookiecoin",
    description: "Rookiecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rookiecoin/"
    }
},{
    name: "universal-currency",
    code: "UNIT",
    icon: "unit",
    longname: "Universal Currency",
    description: "Universal Currency coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/universal-currency/"
    }
},{
    name: "smartofgiving",
    code: "AOG",
    icon: "aog",
    longname: "smARTOFGIVING",
    description: "smARTOFGIVING coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/smartofgiving/"
    }
},{
    name: "iqeon",
    code: "IQN",
    icon: "iqn",
    longname: "IQeon",
    description: "IQeon coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/iqeon/"
    }
},{
    name: "xmct",
    code: "XMCT",
    icon: "xmct",
    longname: "XMCT",
    description: "XMCT coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/xmct/"
    }
},{
    name: "penguin-coin",
    code: "PENG",
    icon: "peng",
    longname: "Penguin Coin",
    description: "Penguin Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/penguin-coin/"
    }
},{
    name: "freyrchain",
    code: "FREC",
    icon: "frec",
    longname: "Freyrchain",
    description: "Freyrchain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/freyrchain/"
    }
},{
    name: "lynx",
    code: "LYNX",
    icon: "lynx",
    longname: "Lynx",
    description: "Lynx coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/lynx/"
    }
},{
    name: "oceanlab",
    code: "OCL",
    icon: "ocl",
    longname: "Oceanlab",
    description: "Oceanlab coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/oceanlab/"
    }
},{
    name: "aphelion",
    code: "APH",
    icon: "aph",
    longname: "Aphelion",
    description: "Aphelion coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aphelion/"
    }
},{
    name: "bonpay",
    code: "BON",
    icon: "bon",
    longname: "Bonpay",
    description: "Bonpay coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bonpay/"
    }
},{
    name: "the-champcoin",
    code: "TCC",
    icon: "tcc",
    longname: "The ChampCoin",
    description: "The ChampCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/the-champcoin/"
    }
},{
    name: "pluton",
    code: "PLU",
    icon: "plu",
    longname: "Pluton",
    description: "Pluton coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pluton/"
    }
},{
    name: "syncfab",
    code: "MFG",
    icon: "mfg",
    longname: "SyncFab",
    description: "SyncFab coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/syncfab/"
    }
},{
    name: "rupee",
    code: "RUP",
    icon: "rup",
    longname: "Rupee",
    description: "Rupee coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rupee/"
    }
},{
    name: "pylon-network",
    code: "PYLNT",
    icon: "pylnt",
    longname: "Pylon Network",
    description: "Pylon Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pylon-network/"
    }
},{
    name: "paymon",
    code: "PMNT",
    icon: "pmnt",
    longname: "Paymon",
    description: "Paymon coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/paymon/"
    }
},{
    name: "bitswift",
    code: "BITS",
    icon: "bits",
    longname: "Bitswift",
    description: "Bitswift coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitswift/"
    }
},{
    name: "mindexcoin",
    code: "MIC",
    icon: "mic",
    longname: "Mindexcoin",
    description: "Mindexcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mindexcoin/"
    }
},{
    name: "sportyco",
    code: "SPF",
    icon: "spf",
    longname: "SportyCo",
    description: "SportyCo coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sportyco/"
    }
},{
    name: "galactrum",
    code: "ORE",
    icon: "ore",
    longname: "Galactrum",
    description: "Galactrum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/galactrum/"
    }
},{
    name: "parkgene",
    code: "GENE-1",
    icon: "gene-1",
    longname: "Parkgene",
    description: "Parkgene coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/parkgene/"
    }
},{
    name: "realchain",
    code: "RCT",
    icon: "rct",
    longname: "RealChain",
    description: "RealChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/realchain/"
    }
},{
    name: "naviaddress",
    code: "NAVI",
    icon: "navi",
    longname: "Naviaddress",
    description: "Naviaddress coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/naviaddress/"
    }
},{
    name: "soma",
    code: "SCT",
    icon: "sct",
    longname: "Soma",
    description: "Soma coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/soma/"
    }
},{
    name: "origin-sport",
    code: "ORS",
    icon: "ors",
    longname: "Origin Sport",
    description: "Origin Sport coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/origin-sport/"
    }
},{
    name: "leadcoin",
    code: "LDC",
    icon: "ldc",
    longname: "Leadcoin",
    description: "Leadcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/leadcoin/"
    }
},{
    name: "trezarcoin",
    code: "TZC",
    icon: "tzc",
    longname: "TrezarCoin",
    description: "TrezarCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/trezarcoin/"
    }
},{
    name: "gladius-token",
    code: "GLA",
    icon: "gla",
    longname: "Gladius Token",
    description: "Gladius Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gladius-token/"
    }
},{
    name: "ebtcnew",
    code: "EBTC",
    icon: "ebtc",
    longname: "eBitcoin",
    description: "eBitcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ebtcnew/"
    }
},{
    name: "bodhi-eth",
    code: "BOE",
    icon: "boe",
    longname: "Bodhi [ETH]",
    description: "Bodhi [ETH] coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bodhi-eth/"
    }
},{
    name: "atbcoin",
    code: "ATB",
    icon: "atb",
    longname: "ATBCoin",
    description: "ATBCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/atbcoin/"
    }
},{
    name: "equal",
    code: "EQL",
    icon: "eql",
    longname: "Equal",
    description: "Equal coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/equal/"
    }
},{
    name: "evergreencoin",
    code: "EGC",
    icon: "egc",
    longname: "EverGreenCoin",
    description: "EverGreenCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/evergreencoin/"
    }
},{
    name: "quantis-network",
    code: "QUAN",
    icon: "quan",
    longname: "Quantis Network",
    description: "Quantis Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/quantis-network/"
    }
},{
    name: "provoco-token",
    code: "VOCO",
    icon: "voco",
    longname: "Provoco Token",
    description: "Provoco Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/provoco-token/"
    }
},{
    name: "ethergem",
    code: "EGEM",
    icon: "egem",
    longname: "EtherGem",
    description: "EtherGem coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ethergem/"
    }
},{
    name: "rapids",
    code: "RPD",
    icon: "rpd",
    longname: "Rapids",
    description: "Rapids coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rapids/"
    }
},{
    name: "jury-online-token",
    code: "JOT",
    icon: "jot",
    longname: "Jury.Online Token",
    description: "Jury.Online Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/jury-online-token/"
    }
},{
    name: "vsync-vsx",
    code: "VSX",
    icon: "vsx",
    longname: "Vsync",
    description: "Vsync coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vsync-vsx/"
    }
},{
    name: "data-exchange",
    code: "DTX",
    icon: "dtx",
    longname: "DaTa eXchange",
    description: "DaTa eXchange coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/data-exchange/"
    }
},{
    name: "kalkulus",
    code: "KLKS",
    icon: "klks",
    longname: "Kalkulus",
    description: "Kalkulus coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kalkulus/"
    }
},{
    name: "octoin-coin",
    code: "OCC",
    icon: "occ",
    longname: "Octoin Coin",
    description: "Octoin Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/octoin-coin/"
    }
},{
    name: "force",
    code: "FOR",
    icon: "for",
    longname: "FORCE",
    description: "FORCE coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/force/"
    }
},{
    name: "actinium",
    code: "ACM",
    icon: "acm",
    longname: "Actinium",
    description: "Actinium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/actinium/"
    }
},{
    name: "ace",
    code: "ACE",
    icon: "ace",
    longname: "ACE (TokenStars)",
    description: "ACE (TokenStars) coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ace/"
    }
},{
    name: "hurify",
    code: "HUR",
    icon: "hur",
    longname: "Hurify",
    description: "Hurify coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hurify/"
    }
},{
    name: "bloc-money",
    code: "BLOC",
    icon: "bloc",
    longname: "BLOC.MONEY",
    description: "BLOC.MONEY coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bloc-money/"
    }
},{
    name: "modultrade",
    code: "MTRC",
    icon: "mtrc",
    longname: "ModulTrade",
    description: "ModulTrade coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/modultrade/"
    }
},{
    name: "cyberfm",
    code: "CYFM",
    icon: "cyfm",
    longname: "CyberFM",
    description: "CyberFM coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cyberfm/"
    }
},{
    name: "bitzeny",
    code: "ZNY",
    icon: "zny",
    longname: "Bitzeny",
    description: "Bitzeny coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitzeny/"
    }
},{
    name: "exmr",
    code: "EXMR",
    icon: "exmr",
    longname: "EXMR",
    description: "EXMR coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/exmr/"
    }
},{
    name: "ether-1",
    code: "ETHO",
    icon: "etho",
    longname: "Ether-1",
    description: "Ether-1 coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ether-1/"
    }
},{
    name: "kolion",
    code: "KLN",
    icon: "kln",
    longname: "Kolion",
    description: "Kolion coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kolion/"
    }
},{
    name: "bitcoin-token",
    code: "BTK",
    icon: "btk",
    longname: "Bitcoin Token",
    description: "Bitcoin Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoin-token/"
    }
},{
    name: "clearcoin",
    code: "XCLR",
    icon: "xclr",
    longname: "ClearCoin",
    description: "ClearCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/clearcoin/"
    }
},{
    name: "cryptoflow",
    code: "CFL",
    icon: "cfl",
    longname: "CryptoFlow",
    description: "CryptoFlow coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cryptoflow/"
    }
},{
    name: "verime",
    code: "VME",
    icon: "vme",
    longname: "VeriME",
    description: "VeriME coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/verime/"
    }
},{
    name: "mmocoin",
    code: "MMO",
    icon: "mmo",
    longname: "MMOCoin",
    description: "MMOCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mmocoin/"
    }
},{
    name: "zest",
    code: "ZEST",
    icon: "zest",
    longname: "ZEST",
    description: "ZEST coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zest/"
    }
},{
    name: "blitzpredict",
    code: "XBP",
    icon: "xbp",
    longname: "BlitzPredict",
    description: "BlitzPredict coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blitzpredict/"
    }
},{
    name: "webcoin",
    code: "WEB",
    icon: "web",
    longname: "Webcoin",
    description: "Webcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/webcoin/"
    }
},{
    name: "iungo",
    code: "ING",
    icon: "ing",
    longname: "Iungo",
    description: "Iungo coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/iungo/"
    }
},{
    name: "cointogo",
    code: "2GO",
    icon: "2go",
    longname: "CoinToGo",
    description: "CoinToGo coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cointogo/"
    }
},{
    name: "more-coin",
    code: "MORE",
    icon: "more",
    longname: "More Coin",
    description: "More Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/more-coin/"
    }
},{
    name: "blocklancer",
    code: "LNC",
    icon: "lnc",
    longname: "Blocklancer",
    description: "Blocklancer coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blocklancer/"
    }
},{
    name: "x-cash",
    code: "XCASH",
    icon: "xcash",
    longname: "X-Cash",
    description: "X-Cash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/x-cash/"
    }
},{
    name: "peepcoin",
    code: "PCN",
    icon: "pcn",
    longname: "PeepCoin",
    description: "PeepCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/peepcoin/"
    }
},{
    name: "eztoken",
    code: "EZT",
    icon: "ezt",
    longname: "EZToken",
    description: "EZToken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/eztoken/"
    }
},{
    name: "bitrewards",
    code: "BIT",
    icon: "bit",
    longname: "BitRewards",
    description: "BitRewards coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitrewards/"
    }
},{
    name: "equitrader",
    code: "EQT",
    icon: "eqt",
    longname: "EquiTrader",
    description: "EquiTrader coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/equitrader/"
    }
},{
    name: "wixlar",
    code: "WIX",
    icon: "wix",
    longname: "Wixlar",
    description: "Wixlar coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/wixlar/"
    }
},{
    name: "mao-zedong",
    code: "MAO",
    icon: "mao",
    longname: "Mao Zedong",
    description: "Mao Zedong coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mao-zedong/"
    }
},{
    name: "gohelpfund",
    code: "HELP",
    icon: "help",
    longname: "GoHelpFund",
    description: "GoHelpFund coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gohelpfund/"
    }
},{
    name: "xdna",
    code: "XDNA",
    icon: "xdna",
    longname: "XDNA",
    description: "XDNA coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/xdna/"
    }
},{
    name: "evimeria",
    code: "EVI",
    icon: "evi",
    longname: "Evimeria",
    description: "Evimeria coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/evimeria/"
    }
},{
    name: "0xcert",
    code: "ZXC",
    icon: "zxc",
    longname: "0xcert",
    description: "0xcert coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/0xcert/"
    }
},{
    name: "bitmoney",
    code: "BIT-1",
    icon: "bit-1",
    longname: "BitMoney",
    description: "BitMoney coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitmoney/"
    }
},{
    name: "engagement-token",
    code: "ENGT",
    icon: "engt",
    longname: "Engagement Token",
    description: "Engagement Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/engagement-token/"
    }
},{
    name: "primestone",
    code: "PSC",
    icon: "psc",
    longname: "PrimeStone",
    description: "PrimeStone coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/primestone/"
    }
},{
    name: "alt-estate-token",
    code: "ALT",
    icon: "alt",
    longname: "Alt.Estate token",
    description: "Alt.Estate token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/alt-estate-token/"
    }
},{
    name: "project-coin",
    code: "PRJ",
    icon: "prj",
    longname: "Project Coin",
    description: "Project Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/project-coin/"
    }
},{
    name: "ab-chain-rtb",
    code: "RTB",
    icon: "rtb",
    longname: "AB-Chain RTB",
    description: "AB-Chain RTB coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ab-chain-rtb/"
    }
},{
    name: "campuscoin",
    code: "CMPCO",
    icon: "cmpco",
    longname: "CampusCoin",
    description: "CampusCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/campuscoin/"
    }
},{
    name: "cfun",
    code: "CFUN",
    icon: "cfun",
    longname: "CFun",
    description: "CFun coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cfun/"
    }
},{
    name: "ionchain",
    code: "IONC",
    icon: "ionc",
    longname: "IONChain",
    description: "IONChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ionchain/"
    }
},{
    name: "condominium",
    code: "CDM",
    icon: "cdm",
    longname: "Condominium",
    description: "Condominium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/condominium/"
    }
},{
    name: "zetacoin",
    code: "ZET",
    icon: "zet",
    longname: "Zetacoin",
    description: "Zetacoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zetacoin/"
    }
},{
    name: "no-bs-crypto",
    code: "NOBS",
    icon: "nobs",
    longname: "No BS Crypto",
    description: "No BS Crypto coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/no-bs-crypto/"
    }
},{
    name: "platinumbar",
    code: "XPTX",
    icon: "xptx",
    longname: "PlatinumBAR",
    description: "PlatinumBAR coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/platinumbar/"
    }
},{
    name: "coinlancer",
    code: "CL",
    icon: "cl",
    longname: "Coinlancer",
    description: "Coinlancer coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/coinlancer/"
    }
},{
    name: "aigang",
    code: "AIX",
    icon: "aix",
    longname: "Aigang",
    description: "Aigang coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aigang/"
    }
},{
    name: "crea",
    code: "CREA",
    icon: "crea",
    longname: "CREA",
    description: "CREA coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/crea/"
    }
},{
    name: "fundrequest",
    code: "FND",
    icon: "fnd",
    longname: "FundRequest",
    description: "FundRequest coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fundrequest/"
    }
},{
    name: "gold-poker",
    code: "GPKR",
    icon: "gpkr",
    longname: "Gold Poker",
    description: "Gold Poker coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gold-poker/"
    }
},{
    name: "eunomia",
    code: "ENTS",
    icon: "ents",
    longname: "EUNOMIA",
    description: "EUNOMIA coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/eunomia/"
    }
},{
    name: "huzu",
    code: "HUZU",
    icon: "huzu",
    longname: "HUZU",
    description: "HUZU coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/huzu/"
    }
},{
    name: "skyhub-coin",
    code: "SHB",
    icon: "shb",
    longname: "SkyHub Coin",
    description: "SkyHub Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/skyhub-coin/"
    }
},{
    name: "aditus",
    code: "ADI",
    icon: "adi",
    longname: "Aditus",
    description: "Aditus coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aditus/"
    }
},{
    name: "auxilium",
    code: "AUX",
    icon: "aux",
    longname: "Auxilium",
    description: "Auxilium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/auxilium/"
    }
},{
    name: "pigeoncoin",
    code: "PGN",
    icon: "pgn",
    longname: "Pigeoncoin",
    description: "Pigeoncoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pigeoncoin/"
    }
},{
    name: "arcticcoin",
    code: "ARC",
    icon: "arc",
    longname: "Advanced Technology Coin",
    description: "Advanced Technology Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/arcticcoin/"
    }
},{
    name: "rupaya",
    code: "RUPX",
    icon: "rupx",
    longname: "Rupaya",
    description: "Rupaya coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rupaya/"
    }
},{
    name: "elysian",
    code: "ELY",
    icon: "ely",
    longname: "Elysian",
    description: "Elysian coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/elysian/"
    }
},{
    name: "mfit-coin",
    code: "MFIT",
    icon: "mfit",
    longname: "MFIT COIN",
    description: "MFIT COIN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mfit-coin/"
    }
},{
    name: "amon",
    code: "AMN",
    icon: "amn",
    longname: "Amon",
    description: "Amon coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/amon/"
    }
},{
    name: "xchange",
    code: "XCG",
    icon: "xcg",
    longname: "Xchange",
    description: "Xchange coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/xchange/"
    }
},{
    name: "crowdwiz",
    code: "WIZ",
    icon: "wiz",
    longname: "CrowdWiz",
    description: "CrowdWiz coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/crowdwiz/"
    }
},{
    name: "bitwhite",
    code: "BTW",
    icon: "btw",
    longname: "BitWhite",
    description: "BitWhite coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitwhite/"
    }
},{
    name: "absolute",
    code: "ABS",
    icon: "abs",
    longname: "Absolute",
    description: "Absolute coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/absolute/"
    }
},{
    name: "xgox",
    code: "XGOX",
    icon: "xgox",
    longname: "XGOX",
    description: "XGOX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/xgox/"
    }
},{
    name: "crycash",
    code: "CRC",
    icon: "crc",
    longname: "CryCash",
    description: "CryCash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/crycash/"
    }
},{
    name: "showhand",
    code: "HAND",
    icon: "hand",
    longname: "ShowHand",
    description: "ShowHand coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/showhand/"
    }
},{
    name: "putincoin",
    code: "PUT-1",
    icon: "put-1",
    longname: "PutinCoin",
    description: "PutinCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/putincoin/"
    }
},{
    name: "briacoin",
    code: "BRIA",
    icon: "bria",
    longname: "BriaCoin",
    description: "BriaCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/briacoin/"
    }
},{
    name: "lobstex",
    code: "LOBS",
    icon: "lobs",
    longname: "Lobstex",
    description: "Lobstex coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/lobstex/"
    }
},{
    name: "ndex",
    code: "NDX",
    icon: "ndx",
    longname: "nDEX",
    description: "nDEX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ndex/"
    }
},{
    name: "draftcoin",
    code: "DFT",
    icon: "dft",
    longname: "DraftCoin",
    description: "DraftCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/draftcoin/"
    }
},{
    name: "blocknode",
    code: "BND",
    icon: "bnd",
    longname: "Blocknode",
    description: "Blocknode coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blocknode/"
    }
},{
    name: "apr-coin",
    code: "APR",
    icon: "apr",
    longname: "APR Coin",
    description: "APR Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/apr-coin/"
    }
},{
    name: "aegeus",
    code: "AEG",
    icon: "aeg",
    longname: "Aegeus",
    description: "Aegeus coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aegeus/"
    }
},{
    name: "erc20",
    code: "ERC20",
    icon: "erc20",
    longname: "ERC20",
    description: "ERC20 coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/erc20/"
    }
},{
    name: "ultranote-coin",
    code: "XUN",
    icon: "xun",
    longname: "UltraNote Coin",
    description: "UltraNote Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ultranote-coin/"
    }
},{
    name: "linx",
    code: "LINX",
    icon: "linx",
    longname: "Linx",
    description: "Linx coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/linx/"
    }
},{
    name: "arbitragect",
    code: "ARCT",
    icon: "arct",
    longname: "ArbitrageCT",
    description: "ArbitrageCT coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/arbitragect/"
    }
},{
    name: "beetle-coin",
    code: "BEET",
    icon: "beet",
    longname: "Beetle Coin",
    description: "Beetle Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/beetle-coin/"
    }
},{
    name: "dorado",
    code: "DOR",
    icon: "dor",
    longname: "Dorado",
    description: "Dorado coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dorado/"
    }
},{
    name: "igtoken",
    code: "IG",
    icon: "ig",
    longname: "IGToken",
    description: "IGToken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/igtoken/"
    }
},{
    name: "allsafe",
    code: "ASAFE2",
    icon: "asafe2",
    longname: "AllSafe",
    description: "AllSafe coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/allsafe/"
    }
},{
    name: "fivebalance",
    code: "FBN",
    icon: "fbn",
    longname: "Fivebalance",
    description: "Fivebalance coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fivebalance/"
    }
},{
    name: "suretly",
    code: "SUR",
    icon: "sur",
    longname: "Suretly",
    description: "Suretly coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/suretly/"
    }
},{
    name: "xovbank",
    code: "XOV",
    icon: "xov",
    longname: "XOVBank",
    description: "XOVBank coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/xovbank/"
    }
},{
    name: "inflationcoin",
    code: "IFLT",
    icon: "iflt",
    longname: "InflationCoin",
    description: "InflationCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/inflationcoin/"
    }
},{
    name: "bbscoin",
    code: "BBS",
    icon: "bbs",
    longname: "BBSCoin",
    description: "BBSCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bbscoin/"
    }
},{
    name: "bitblocks",
    code: "BBK-1",
    icon: "bbk-1",
    longname: "Bitblocks",
    description: "Bitblocks coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitblocks/"
    }
},{
    name: "italian-lira",
    code: "ITL",
    icon: "itl",
    longname: "Italian Lira",
    description: "Italian Lira coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/italian-lira/"
    }
},{
    name: "scriv-network",
    code: "SCRIV",
    icon: "scriv",
    longname: "SCRIV NETWORK",
    description: "SCRIV NETWORK coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/scriv-network/"
    }
},{
    name: "datarius-credit",
    code: "DTRC",
    icon: "dtrc",
    longname: "Datarius Credit",
    description: "Datarius Credit coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/datarius-credit/"
    }
},{
    name: "transcodium",
    code: "TNS",
    icon: "tns",
    longname: "Transcodium",
    description: "Transcodium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/transcodium/"
    }
},{
    name: "startcoin",
    code: "START",
    icon: "start",
    longname: "Startcoin",
    description: "Startcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/startcoin/"
    }
},{
    name: "catocoin",
    code: "CATO",
    icon: "cato",
    longname: "CatoCoin",
    description: "CatoCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/catocoin/"
    }
},{
    name: "waletoken",
    code: "WTN",
    icon: "wtn",
    longname: "Waletoken",
    description: "Waletoken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/waletoken/"
    }
},{
    name: "micromoney",
    code: "AMM",
    icon: "amm",
    longname: "MicroMoney",
    description: "MicroMoney coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/micromoney/"
    }
},{
    name: "netkoin",
    code: "NTK-1",
    icon: "ntk-1",
    longname: "NetKoin",
    description: "NetKoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/netkoin/"
    }
},{
    name: "qyno",
    code: "QNO",
    icon: "qno",
    longname: "QYNO",
    description: "QYNO coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/qyno/"
    }
},{
    name: "darextravel",
    code: "DART",
    icon: "dart",
    longname: "DarexTravel",
    description: "DarexTravel coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/darextravel/"
    }
},{
    name: "unify",
    code: "UNIFY",
    icon: "unify",
    longname: "Unify",
    description: "Unify coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/unify/"
    }
},{
    name: "bitcoin-x",
    code: "BTX-1",
    icon: "btx-1",
    longname: "Bitcoin X",
    description: "Bitcoin X coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoin-x/"
    }
},{
    name: "witchain",
    code: "WIT",
    icon: "wit",
    longname: "WITChain",
    description: "WITChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/witchain/"
    }
},{
    name: "wavesgo",
    code: "WGO",
    icon: "wgo",
    longname: "WavesGo",
    description: "WavesGo coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/wavesgo/"
    }
},{
    name: "teloscoin",
    code: "TELOS",
    icon: "telos",
    longname: "Teloscoin",
    description: "Teloscoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/teloscoin/"
    }
},{
    name: "local-world-forwarders",
    code: "LWF",
    icon: "lwf",
    longname: "Local World Forwarders",
    description: "Local World Forwarders coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/local-world-forwarders/"
    }
},{
    name: "crystal-token",
    code: "CYL",
    icon: "cyl",
    longname: "Crystal Token",
    description: "Crystal Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/crystal-token/"
    }
},{
    name: "litecoin-plus",
    code: "LCP",
    icon: "lcp",
    longname: "Litecoin Plus",
    description: "Litecoin Plus coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/litecoin-plus/"
    }
},{
    name: "bitcoinus",
    code: "BITS-1",
    icon: "bits-1",
    longname: "Bitcoinus",
    description: "Bitcoinus coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoinus/"
    }
},{
    name: "jetcoin",
    code: "JET",
    icon: "jet",
    longname: "Jetcoin",
    description: "Jetcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/jetcoin/"
    }
},{
    name: "cybermusic",
    code: "CYMT",
    icon: "cymt",
    longname: "CyberMusic",
    description: "CyberMusic coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cybermusic/"
    }
},{
    name: "bunnytoken",
    code: "BUNNY",
    icon: "bunny",
    longname: "BunnyToken",
    description: "BunnyToken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bunnytoken/"
    }
},{
    name: "pkg-token",
    code: "PKG",
    icon: "pkg",
    longname: "PKG Token",
    description: "PKG Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pkg-token/"
    }
},{
    name: "intelligent-trading-foundation",
    code: "ITT",
    icon: "itt",
    longname: "Intelligent Trading Foundation",
    description: "Intelligent Trading Foundation coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/intelligent-trading-foundation/"
    }
},{
    name: "roulettetoken",
    code: "RLT",
    icon: "rlt",
    longname: "RouletteToken",
    description: "RouletteToken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/roulettetoken/"
    }
},{
    name: "whalecoin",
    code: "WHL",
    icon: "whl",
    longname: "WhaleCoin",
    description: "WhaleCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/whalecoin/"
    }
},{
    name: "steneum-coin",
    code: "STN",
    icon: "stn",
    longname: "Steneum Coin",
    description: "Steneum Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/steneum-coin/"
    }
},{
    name: "micromines",
    code: "MICRO",
    icon: "micro",
    longname: "Micromines",
    description: "Micromines coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/micromines/"
    }
},{
    name: "zeusnetwork",
    code: "ZEUS",
    icon: "zeus",
    longname: "ZeusNetwork",
    description: "ZeusNetwork coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zeusnetwork/"
    }
},{
    name: "mcap",
    code: "MCAP",
    icon: "mcap",
    longname: "MCAP",
    description: "MCAP coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mcap/"
    }
},{
    name: "cryptosoul",
    code: "SOUL-1",
    icon: "soul-1",
    longname: "CryptoSoul",
    description: "CryptoSoul coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cryptosoul/"
    }
},{
    name: "insanecoin-insn",
    code: "INSN",
    icon: "insn",
    longname: "InsaneCoin",
    description: "InsaneCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/insanecoin-insn/"
    }
},{
    name: "tourist-token",
    code: "TOTO",
    icon: "toto",
    longname: "Tourist Token",
    description: "Tourist Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tourist-token/"
    }
},{
    name: "typerium",
    code: "TYPE",
    icon: "type",
    longname: "Typerium",
    description: "Typerium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/typerium/"
    }
},{
    name: "tokenstars",
    code: "TEAM",
    icon: "team",
    longname: "TEAM (TokenStars)",
    description: "TEAM (TokenStars) coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tokenstars/"
    }
},{
    name: "eltcoin",
    code: "ELTCOIN",
    icon: "eltcoin",
    longname: "ELTCOIN",
    description: "ELTCOIN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/eltcoin/"
    }
},{
    name: "sub-invest",
    code: "SUBX",
    icon: "subx",
    longname: "Sub Invest",
    description: "Sub Invest coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sub-invest/"
    }
},{
    name: "neural-protocol",
    code: "NRP",
    icon: "nrp",
    longname: "Neural Protocol",
    description: "Neural Protocol coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/neural-protocol/"
    }
},{
    name: "vikkytoken",
    code: "VIKKY",
    icon: "vikky",
    longname: "VikkyToken",
    description: "VikkyToken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vikkytoken/"
    }
},{
    name: "blast",
    code: "BLAST",
    icon: "blast",
    longname: "BLAST",
    description: "BLAST coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blast/"
    }
},{
    name: "authorship",
    code: "ATS",
    icon: "ats",
    longname: "Authorship",
    description: "Authorship coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/authorship/"
    }
},{
    name: "earth-token",
    code: "EARTH",
    icon: "earth",
    longname: "Earth Token",
    description: "Earth Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/earth-token/"
    }
},{
    name: "obsidian",
    code: "ODN",
    icon: "odn",
    longname: "Obsidian",
    description: "Obsidian coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/obsidian/"
    }
},{
    name: "mirai",
    code: "MRI",
    icon: "mri",
    longname: "Mirai",
    description: "Mirai coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mirai/"
    }
},{
    name: "phonecoin",
    code: "PHON",
    icon: "phon",
    longname: "Phonecoin",
    description: "Phonecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/phonecoin/"
    }
},{
    name: "greenmed",
    code: "GRMD",
    icon: "grmd",
    longname: "GreenMed",
    description: "GreenMed coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/greenmed/"
    }
},{
    name: "sonder",
    code: "SNR",
    icon: "snr",
    longname: "SONDER",
    description: "SONDER coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sonder/"
    }
},{
    name: "renos",
    code: "RNS",
    icon: "rns",
    longname: "Renos",
    description: "Renos coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/renos/"
    }
},{
    name: "abulaba",
    code: "AAA",
    icon: "aaa",
    longname: "Abulaba",
    description: "Abulaba coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/abulaba/"
    }
},{
    name: "parallelcoin",
    code: "DUO",
    icon: "duo",
    longname: "ParallelCoin",
    description: "ParallelCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/parallelcoin/"
    }
},{
    name: "tokendesk",
    code: "TDS",
    icon: "tds",
    longname: "TokenDesk",
    description: "TokenDesk coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tokendesk/"
    }
},{
    name: "dach-coin",
    code: "DACH",
    icon: "dach",
    longname: "DACH Coin",
    description: "DACH Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dach-coin/"
    }
},{
    name: "paxex",
    code: "PAXEX",
    icon: "paxex",
    longname: "PAXEX",
    description: "PAXEX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/paxex/"
    }
},{
    name: "numus",
    code: "NMS",
    icon: "nms",
    longname: "Numus",
    description: "Numus coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/numus/"
    }
},{
    name: "delta-chain",
    code: "DELTA",
    icon: "delta",
    longname: "DeltaChain",
    description: "DeltaChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/delta-chain/"
    }
},{
    name: "guess",
    code: "GUESS",
    icon: "guess",
    longname: "Peerguess",
    description: "Peerguess coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/guess/"
    }
},{
    name: "zenswap-network-token",
    code: "ZNT",
    icon: "znt",
    longname: "Zenswap Network Token",
    description: "Zenswap Network Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zenswap-network-token/"
    }
},{
    name: "bitether",
    code: "BTR",
    icon: "btr",
    longname: "Bitether",
    description: "Bitether coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitether/"
    }
},{
    name: "ixtus-edutainment",
    code: "IXE",
    icon: "ixe",
    longname: "IXTUS Edutainment",
    description: "IXTUS Edutainment coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ixtus-edutainment/"
    }
},{
    name: "desire",
    code: "DSR",
    icon: "dsr",
    longname: "Desire",
    description: "Desire coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/desire/"
    }
},{
    name: "bzlcoin",
    code: "BZL",
    icon: "bzl",
    longname: "BZLCOIN",
    description: "BZLCOIN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bzlcoin/"
    }
},{
    name: "cryptrust",
    code: "CTRT",
    icon: "ctrt",
    longname: "Cryptrust",
    description: "Cryptrust coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cryptrust/"
    }
},{
    name: "dinero",
    code: "DIN",
    icon: "din",
    longname: "Dinero",
    description: "Dinero coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dinero/"
    }
},{
    name: "thore-cash",
    code: "TCH",
    icon: "tch",
    longname: "Thore Cash",
    description: "Thore Cash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/thore-cash/"
    }
},{
    name: "decentralized-asset-trading-platform",
    code: "DATP",
    icon: "datp",
    longname: "Decentralized Asset Trading Platform",
    description: "Decentralized Asset Trading Platform coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/decentralized-asset-trading-platform/"
    }
},{
    name: "gossipcoin",
    code: "GOSS",
    icon: "goss",
    longname: "Gossipcoin",
    description: "Gossipcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gossipcoin/"
    }
},{
    name: "azart",
    code: "AZART",
    icon: "azart",
    longname: "Azart",
    description: "Azart coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/azart/"
    }
},{
    name: "bionic",
    code: "BNC",
    icon: "bnc",
    longname: "Bionic",
    description: "Bionic coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bionic/"
    }
},{
    name: "havy",
    code: "HAVY",
    icon: "havy",
    longname: "Havy",
    description: "Havy coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/havy/"
    }
},{
    name: "nyerium",
    code: "NYEX",
    icon: "nyex",
    longname: "Nyerium",
    description: "Nyerium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nyerium/"
    }
},{
    name: "mainstream-for-the-underground",
    code: "MFTU",
    icon: "mftu",
    longname: "Mainstream For The Underground",
    description: "Mainstream For The Underground coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mainstream-for-the-underground/"
    }
},{
    name: "yolocash",
    code: "YLC",
    icon: "ylc",
    longname: "YoloCash",
    description: "YoloCash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/yolocash/"
    }
},{
    name: "litebitcoin",
    code: "LBTC",
    icon: "lbtc",
    longname: "LiteBitcoin",
    description: "LiteBitcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/litebitcoin/"
    }
},{
    name: "kun",
    code: "KUN",
    icon: "kun",
    longname: "KUN",
    description: "KUN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kun/"
    }
},{
    name: "joint-ventures",
    code: "JOINT",
    icon: "joint",
    longname: "Joint Ventures",
    description: "Joint Ventures coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/joint-ventures/"
    }
},{
    name: "ether-kingdoms-token",
    code: "IMP",
    icon: "imp",
    longname: "Ether Kingdoms Token",
    description: "Ether Kingdoms Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ether-kingdoms-token/"
    }
},{
    name: "peony",
    code: "PNY",
    icon: "pny",
    longname: "Peony",
    description: "Peony coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/peony/"
    }
},{
    name: "cyber-movie-chain",
    code: "CMCT-1",
    icon: "cmct-1",
    longname: "Cyber Movie Chain",
    description: "Cyber Movie Chain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cyber-movie-chain/"
    }
},{
    name: "prcoin",
    code: "PRC",
    icon: "prc",
    longname: "PRCoin",
    description: "PRCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/prcoin/"
    }
},{
    name: "model-x-coin",
    code: "MODX",
    icon: "modx",
    longname: "MODEL-X-coin",
    description: "MODEL-X-coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/model-x-coin/"
    }
},{
    name: "crevacoin",
    code: "CREVA",
    icon: "creva",
    longname: "CrevaCoin",
    description: "CrevaCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/crevacoin/"
    }
},{
    name: "rusgas",
    code: "RGS",
    icon: "rgs",
    longname: "RusGas",
    description: "RusGas coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rusgas/"
    }
},{
    name: "bolenum",
    code: "BLN",
    icon: "bln",
    longname: "Bolenum",
    description: "Bolenum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bolenum/"
    }
},{
    name: "oyster",
    code: "PRL",
    icon: "prl",
    longname: "Oyster",
    description: "Oyster coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/oyster/"
    }
},{
    name: "spectre-dividend",
    code: "SXDT",
    icon: "sxdt",
    longname: "Spectre.ai Dividend Token",
    description: "Spectre.ai Dividend Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/spectre-dividend/"
    }
},{
    name: "rock",
    code: "RKT",
    icon: "rkt",
    longname: "Rock",
    description: "Rock coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rock/"
    }
},{
    name: "neumark",
    code: "NEU",
    icon: "neu",
    longname: "Neumark",
    description: "Neumark coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/neumark/"
    }
},{
    name: "uttoken",
    code: "UTT",
    icon: "utt",
    longname: "United Traders Token",
    description: "United Traders Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/uttoken/"
    }
},{
    name: "rialto",
    code: "XRL",
    icon: "xrl",
    longname: "Rialto",
    description: "Rialto coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rialto/"
    }
},{
    name: "lykke",
    code: "LKK",
    icon: "lkk",
    longname: "Lykke",
    description: "Lykke coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/lykke/"
    }
},{
    name: "tao",
    code: "XTO",
    icon: "xto",
    longname: "Tao",
    description: "Tao coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tao/"
    }
},{
    name: "playcoin-erc20",
    code: "PLY",
    icon: "ply",
    longname: "PlayCoin [ERC20]",
    description: "PlayCoin [ERC20] coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/playcoin-erc20/"
    }
},{
    name: "cofound-it",
    code: "CFI",
    icon: "cfi",
    longname: "Cofound.it",
    description: "Cofound.it coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cofound-it/"
    }
},{
    name: "paypie",
    code: "PPP",
    icon: "ppp",
    longname: "PayPie",
    description: "PayPie coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/paypie/"
    }
},{
    name: "bittwatt",
    code: "BWT",
    icon: "bwt",
    longname: "Bittwatt",
    description: "Bittwatt coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bittwatt/"
    }
},{
    name: "avinoc",
    code: "AVINOC",
    icon: "avinoc",
    longname: "AVINOC",
    description: "AVINOC coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/avinoc/"
    }
},{
    name: "rubycoin",
    code: "RBY",
    icon: "rby",
    longname: "Rubycoin",
    description: "Rubycoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rubycoin/"
    }
},{
    name: "ecobit",
    code: "ECOB",
    icon: "ecob",
    longname: "Ecobit",
    description: "Ecobit coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ecobit/"
    }
},{
    name: "linfinity",
    code: "LFT",
    icon: "lft",
    longname: "Linfinity",
    description: "Linfinity coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/linfinity/"
    }
},{
    name: "proxeus",
    code: "XES",
    icon: "xes",
    longname: "Proxeus",
    description: "Proxeus coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/proxeus/"
    }
},{
    name: "karma-eos",
    code: "KARMA",
    icon: "karma",
    longname: "KARMA",
    description: "KARMA coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/karma-eos/"
    }
},{
    name: "dao-casino",
    code: "BET",
    icon: "bet",
    longname: "DAO.Casino",
    description: "DAO.Casino coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dao-casino/"
    }
},{
    name: "anoncoin",
    code: "ANC",
    icon: "anc",
    longname: "Anoncoin",
    description: "Anoncoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/anoncoin/"
    }
},{
    name: "grid",
    code: "GRID",
    icon: "grid",
    longname: "Grid+",
    description: "Grid+ coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/grid/"
    }
},{
    name: "ondori",
    code: "RSTR",
    icon: "rstr",
    longname: "Ondori",
    description: "Ondori coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ondori/"
    }
},{
    name: "taas",
    code: "TAAS",
    icon: "taas",
    longname: "TaaS",
    description: "TaaS coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/taas/"
    }
},{
    name: "maecenas",
    code: "ART",
    icon: "art",
    longname: "Maecenas",
    description: "Maecenas coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/maecenas/"
    }
},{
    name: "asiacoin",
    code: "AC",
    icon: "ac",
    longname: "AsiaCoin",
    description: "AsiaCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/asiacoin/"
    }
},{
    name: "puregold-token",
    code: "PGT",
    icon: "pgt",
    longname: "Puregold Token",
    description: "Puregold Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/puregold-token/"
    }
},{
    name: "lomocoin",
    code: "LMC",
    icon: "lmc",
    longname: "LoMoCoin",
    description: "LoMoCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/lomocoin/"
    }
},{
    name: "hubii-network",
    code: "HBT",
    icon: "hbt",
    longname: "Hubii Network",
    description: "Hubii Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hubii-network/"
    }
},{
    name: "leverj",
    code: "LEV",
    icon: "lev",
    longname: "Leverj",
    description: "Leverj coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/leverj/"
    }
},{
    name: "chips",
    code: "CHIPS",
    icon: "chips",
    longname: "CHIPS",
    description: "CHIPS coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/chips/"
    }
},{
    name: "coinvest",
    code: "COIN",
    icon: "coin",
    longname: "Coinvest",
    description: "Coinvest coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/coinvest/"
    }
},{
    name: "russian-mining-coin",
    code: "RMC",
    icon: "rmc",
    longname: "Russian Miner Coin",
    description: "Russian Miner Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/russian-mining-coin/"
    }
},{
    name: "sequence",
    code: "SEQ",
    icon: "seq",
    longname: "Sequence",
    description: "Sequence coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sequence/"
    }
},{
    name: "x8x-token",
    code: "X8X",
    icon: "x8x",
    longname: "X8X Token",
    description: "X8X Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/x8x-token/"
    }
},{
    name: "alis",
    code: "ALIS",
    icon: "alis",
    longname: "ALIS",
    description: "ALIS coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/alis/"
    }
},{
    name: "fnkos",
    code: "FNKOS",
    icon: "fnkos",
    longname: "FNKOS",
    description: "FNKOS coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fnkos/"
    }
},{
    name: "qubitica",
    code: "QBIT",
    icon: "qbit",
    longname: "Qubitica",
    description: "Qubitica coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/qubitica/"
    }
},{
    name: "motocoin",
    code: "MOTO",
    icon: "moto",
    longname: "Motocoin",
    description: "Motocoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/motocoin/"
    }
},{
    name: "fidelium",
    code: "FID",
    icon: "fid",
    longname: "Fidelium",
    description: "Fidelium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fidelium/"
    }
},{
    name: "bitdegree",
    code: "BDG",
    icon: "bdg",
    longname: "BitDegree",
    description: "BitDegree coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitdegree/"
    }
},{
    name: "kind-ads-token",
    code: "KIND",
    icon: "kind",
    longname: "Kind Ads Token",
    description: "Kind Ads Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kind-ads-token/"
    }
},{
    name: "open-platform",
    code: "OPEN",
    icon: "open",
    longname: "Open Platform",
    description: "Open Platform coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/open-platform/"
    }
},{
    name: "cryptopay",
    code: "CPAY",
    icon: "cpay",
    longname: "Cryptopay",
    description: "Cryptopay coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cryptopay/"
    }
},{
    name: "bitqy",
    code: "BQ",
    icon: "bq",
    longname: "bitqy",
    description: "bitqy coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitqy/"
    }
},{
    name: "noku",
    code: "NOKU",
    icon: "noku",
    longname: "Noku",
    description: "Noku coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/noku/"
    }
},{
    name: "oxycoin",
    code: "OXY",
    icon: "oxy",
    longname: "Oxycoin",
    description: "Oxycoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/oxycoin/"
    }
},{
    name: "vezt",
    code: "VZT",
    icon: "vzt",
    longname: "Vezt",
    description: "Vezt coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vezt/"
    }
},{
    name: "gravity",
    code: "GZRO",
    icon: "gzro",
    longname: "Gravity",
    description: "Gravity coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gravity/"
    }
},{
    name: "soniq",
    code: "SONIQ",
    icon: "soniq",
    longname: "Soniq",
    description: "Soniq coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/soniq/"
    }
},{
    name: "vice-industry-token",
    code: "VIT",
    icon: "vit",
    longname: "Vice Industry Token",
    description: "Vice Industry Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vice-industry-token/"
    }
},{
    name: "petrodollar",
    code: "XPD",
    icon: "xpd",
    longname: "PetroDollar",
    description: "PetroDollar coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/petrodollar/"
    }
},{
    name: "apx",
    code: "APX",
    icon: "apx",
    longname: "APX",
    description: "APX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/apx/"
    }
},{
    name: "42-coin",
    code: "42",
    icon: "42",
    longname: "42-coin",
    description: "42-coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/42-coin/"
    }
},{
    name: "heat-ledger",
    code: "HEAT",
    icon: "heat",
    longname: "HEAT",
    description: "HEAT coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/heat-ledger/"
    }
},{
    name: "smoke",
    code: "SMOKE",
    icon: "smoke",
    longname: "Smoke",
    description: "Smoke coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/smoke/"
    }
},{
    name: "adelphoi",
    code: "ADL",
    icon: "adl",
    longname: "Adelphoi",
    description: "Adelphoi coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/adelphoi/"
    }
},{
    name: "rebl",
    code: "REBL",
    icon: "rebl",
    longname: "REBL",
    description: "REBL coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rebl/"
    }
},{
    name: "fidentiax",
    code: "FDX",
    icon: "fdx",
    longname: "FidentiaX",
    description: "FidentiaX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fidentiax/"
    }
},{
    name: "linker-coin",
    code: "LNC-1",
    icon: "lnc-1",
    longname: "Linker Coin",
    description: "Linker Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/linker-coin/"
    }
},{
    name: "ethbits",
    code: "ETBS",
    icon: "etbs",
    longname: "Ethbits",
    description: "Ethbits coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ethbits/"
    }
},{
    name: "sovereign-hero",
    code: "HERO",
    icon: "hero",
    longname: "Sovereign Hero",
    description: "Sovereign Hero coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sovereign-hero/"
    }
},{
    name: "nimiq-exchange-token",
    code: "NET",
    icon: "net",
    longname: "Nimiq Exchange Token",
    description: "Nimiq Exchange Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nimiq-exchange-token/"
    }
},{
    name: "bluecoin",
    code: "BLU",
    icon: "blu",
    longname: "BlueCoin",
    description: "BlueCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bluecoin/"
    }
},{
    name: "zeitcoin",
    code: "ZEIT",
    icon: "zeit",
    longname: "Zeitcoin",
    description: "Zeitcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zeitcoin/"
    }
},{
    name: "dether",
    code: "DTH",
    icon: "dth",
    longname: "Dether",
    description: "Dether coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dether/"
    }
},{
    name: "pikciochain",
    code: "PKC",
    icon: "pkc",
    longname: "PikcioChain",
    description: "PikcioChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pikciochain/"
    }
},{
    name: "tigereum",
    code: "TIG",
    icon: "tig",
    longname: "Tigereum",
    description: "Tigereum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tigereum/"
    }
},{
    name: "fluz-fluz",
    code: "FLUZ",
    icon: "fluz",
    longname: "Fluz Fluz",
    description: "Fluz Fluz coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fluz-fluz/"
    }
},{
    name: "uniform-fiscal-object",
    code: "UFO",
    icon: "ufo",
    longname: "Uniform Fiscal Object",
    description: "Uniform Fiscal Object coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/uniform-fiscal-object/"
    }
},{
    name: "bullion",
    code: "CBX",
    icon: "cbx",
    longname: "Bullion",
    description: "Bullion coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bullion/"
    }
},{
    name: "attention-token-of-media",
    code: "ATM",
    icon: "atm",
    longname: "ATMChain",
    description: "ATMChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/attention-token-of-media/"
    }
},{
    name: "w3coin",
    code: "W3C",
    icon: "w3c",
    longname: "W3Coin",
    description: "W3Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/w3coin/"
    }
},{
    name: "hellogold",
    code: "HGT",
    icon: "hgt",
    longname: "HelloGold",
    description: "HelloGold coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hellogold/"
    }
},{
    name: "lampix",
    code: "PIX",
    icon: "pix",
    longname: "Lampix",
    description: "Lampix coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/lampix/"
    }
},{
    name: "manna",
    code: "MANNA",
    icon: "manna",
    longname: "Manna",
    description: "Manna coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/manna/"
    }
},{
    name: "clipper-coin",
    code: "CCCX",
    icon: "cccx",
    longname: "Clipper Coin",
    description: "Clipper Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/clipper-coin/"
    }
},{
    name: "xenon",
    code: "XNN",
    icon: "xnn",
    longname: "Xenon",
    description: "Xenon coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/xenon/"
    }
},{
    name: "monster-byte",
    code: "MBI",
    icon: "mbi",
    longname: "Monster Byte",
    description: "Monster Byte coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/monster-byte/"
    }
},{
    name: "darcrus",
    code: "DAR",
    icon: "dar",
    longname: "Darcrus",
    description: "Darcrus coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/darcrus/"
    }
},{
    name: "sociall",
    code: "SCL",
    icon: "scl",
    longname: "Sociall",
    description: "Sociall coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sociall/"
    }
},{
    name: "goodomy",
    code: "GOOD",
    icon: "good",
    longname: "Goodomy",
    description: "Goodomy coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/goodomy/"
    }
},{
    name: "coin-lion",
    code: "LION",
    icon: "lion",
    longname: "Coin Lion",
    description: "Coin Lion coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/coin-lion/"
    }
},{
    name: "veriumreserve",
    code: "VRM",
    icon: "vrm",
    longname: "VeriumReserve",
    description: "VeriumReserve coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/veriumreserve/"
    }
},{
    name: "bounty0x",
    code: "BNTY",
    icon: "bnty",
    longname: "Bounty0x",
    description: "Bounty0x coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bounty0x/"
    }
},{
    name: "carboncoin",
    code: "CARBON",
    icon: "carbon",
    longname: "Carboncoin",
    description: "Carboncoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/carboncoin/"
    }
},{
    name: "denarius-dnr",
    code: "D",
    icon: "d",
    longname: "Denarius",
    description: "Denarius coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/denarius-dnr/"
    }
},{
    name: "block-chain-com",
    code: "BC",
    icon: "bc",
    longname: "Block-Chain.com",
    description: "Block-Chain.com coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/block-chain-com/"
    }
},{
    name: "maxcoin",
    code: "MAX",
    icon: "max",
    longname: "MaxCoin",
    description: "MaxCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/maxcoin/"
    }
},{
    name: "seal-network",
    code: "SEAL",
    icon: "seal",
    longname: "Seal Network",
    description: "Seal Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/seal-network/"
    }
},{
    name: "investfeed",
    code: "IFT",
    icon: "ift",
    longname: "InvestFeed",
    description: "InvestFeed coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/investfeed/"
    }
},{
    name: "quark",
    code: "QRK",
    icon: "qrk",
    longname: "Quark",
    description: "Quark coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/quark/"
    }
},{
    name: "phi-token",
    code: "PHI",
    icon: "phi",
    longname: "PHI Token",
    description: "PHI Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/phi-token/"
    }
},{
    name: "verify",
    code: "CRED",
    icon: "cred",
    longname: "Verify",
    description: "Verify coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/verify/"
    }
},{
    name: "ixcoin",
    code: "IXC",
    icon: "ixc",
    longname: "Ixcoin",
    description: "Ixcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ixcoin/"
    }
},{
    name: "worldcoin",
    code: "WDC",
    icon: "wdc",
    longname: "WorldCoin",
    description: "WorldCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/worldcoin/"
    }
},{
    name: "ethorse",
    code: "HORSE",
    icon: "horse",
    longname: "Ethorse",
    description: "Ethorse coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ethorse/"
    }
},{
    name: "supercoin",
    code: "SUPER",
    icon: "super",
    longname: "SuperCoin",
    description: "SuperCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/supercoin/"
    }
},{
    name: "nexium",
    code: "NXC",
    icon: "nxc",
    longname: "Nexium",
    description: "Nexium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nexium/"
    }
},{
    name: "stipend",
    code: "SPD-1",
    icon: "spd-1",
    longname: "Stipend",
    description: "Stipend coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/stipend/"
    }
},{
    name: "noblecoin",
    code: "NOBL",
    icon: "nobl",
    longname: "NobleCoin",
    description: "NobleCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/noblecoin/"
    }
},{
    name: "white-standard",
    code: "WSD",
    icon: "wsd",
    longname: "White Standard",
    description: "White Standard coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/white-standard/"
    }
},{
    name: "payfair",
    code: "PFR",
    icon: "pfr",
    longname: "Payfair",
    description: "Payfair coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/payfair/"
    }
},{
    name: "i0coin",
    code: "I0C",
    icon: "i0c",
    longname: "I0Coin",
    description: "I0Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/i0coin/"
    }
},{
    name: "bunnycoin",
    code: "BUN",
    icon: "bun",
    longname: "BunnyCoin",
    description: "BunnyCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bunnycoin/"
    }
},{
    name: "blockpool",
    code: "BPL",
    icon: "bpl",
    longname: "Blockpool",
    description: "Blockpool coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blockpool/"
    }
},{
    name: "teslacoin",
    code: "TES",
    icon: "tes",
    longname: "TeslaCoin",
    description: "TeslaCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/teslacoin/"
    }
},{
    name: "decentralized-machine-learning",
    code: "DML",
    icon: "dml",
    longname: "Decentralized Machine Learning",
    description: "Decentralized Machine Learning coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/decentralized-machine-learning/"
    }
},{
    name: "hush",
    code: "HUSH",
    icon: "hush",
    longname: "Hush",
    description: "Hush coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hush/"
    }
},{
    name: "trollcoin",
    code: "TROLL",
    icon: "troll",
    longname: "Trollcoin",
    description: "Trollcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/trollcoin/"
    }
},{
    name: "russiacoin",
    code: "RC",
    icon: "rc",
    longname: "RussiaCoin",
    description: "RussiaCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/russiacoin/"
    }
},{
    name: "powercoin",
    code: "PWR",
    icon: "pwr",
    longname: "PWR Coin",
    description: "PWR Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/powercoin/"
    }
},{
    name: "imbrex",
    code: "REX",
    icon: "rex",
    longname: "imbrex",
    description: "imbrex coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/imbrex/"
    }
},{
    name: "wandx",
    code: "WAND",
    icon: "wand",
    longname: "WandX",
    description: "WandX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/wandx/"
    }
},{
    name: "publica",
    code: "PBL",
    icon: "pbl",
    longname: "Publica",
    description: "Publica coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/publica/"
    }
},{
    name: "sether",
    code: "SETH",
    icon: "seth",
    longname: "Sether",
    description: "Sether coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sether/"
    }
},{
    name: "iethereum",
    code: "IETH",
    icon: "ieth",
    longname: "iEthereum",
    description: "iEthereum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/iethereum/"
    }
},{
    name: "condensate",
    code: "RAIN",
    icon: "rain",
    longname: "Condensate",
    description: "Condensate coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/condensate/"
    }
},{
    name: "smileycoin",
    code: "SMLY",
    icon: "smly",
    longname: "SmileyCoin",
    description: "SmileyCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/smileycoin/"
    }
},{
    name: "e-gulden",
    code: "EFL",
    icon: "efl",
    longname: "e-Gulden",
    description: "e-Gulden coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/e-gulden/"
    }
},{
    name: "open-trading-network",
    code: "OTN",
    icon: "otn",
    longname: "Open Trading Network",
    description: "Open Trading Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/open-trading-network/"
    }
},{
    name: "gainer",
    code: "GNR",
    icon: "gnr",
    longname: "Gainer",
    description: "Gainer coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gainer/"
    }
},{
    name: "ezoow",
    code: "EZW",
    icon: "ezw",
    longname: "EZOOW",
    description: "EZOOW coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ezoow/"
    }
},{
    name: "hyperstake",
    code: "HYP",
    icon: "hyp",
    longname: "HyperStake",
    description: "HyperStake coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hyperstake/"
    }
},{
    name: "tiesdb",
    code: "TIE",
    icon: "tie",
    longname: "Ties.DB",
    description: "Ties.DB coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tiesdb/"
    }
},{
    name: "universe",
    code: "UNI",
    icon: "uni",
    longname: "Universe",
    description: "Universe coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/universe/"
    }
},{
    name: "blockpass",
    code: "PASS",
    icon: "pass",
    longname: "Blockpass",
    description: "Blockpass coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blockpass/"
    }
},{
    name: "blockcat",
    code: "CAT-1",
    icon: "cat-1",
    longname: "BlockCAT",
    description: "BlockCAT coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blockcat/"
    }
},{
    name: "chronologic",
    code: "DAY",
    icon: "day",
    longname: "Chronologic",
    description: "Chronologic coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/chronologic/"
    }
},{
    name: "talao",
    code: "TALAO",
    icon: "talao",
    longname: "Talao",
    description: "Talao coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/talao/"
    }
},{
    name: "straks",
    code: "STAK",
    icon: "stak",
    longname: "STRAKS",
    description: "STRAKS coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/straks/"
    }
},{
    name: "skeincoin",
    code: "SKC",
    icon: "skc",
    longname: "Skeincoin",
    description: "Skeincoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/skeincoin/"
    }
},{
    name: "orbitcoin",
    code: "ORB",
    icon: "orb",
    longname: "Orbitcoin",
    description: "Orbitcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/orbitcoin/"
    }
},{
    name: "cryptonite",
    code: "XCN",
    icon: "xcn",
    longname: "Cryptonite",
    description: "Cryptonite coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cryptonite/"
    }
},{
    name: "vivid-coin",
    code: "VIVID",
    icon: "vivid",
    longname: "Vivid Coin",
    description: "Vivid Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vivid-coin/"
    }
},{
    name: "qubitcoin",
    code: "Q2C",
    icon: "q2c",
    longname: "QubitCoin",
    description: "QubitCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/qubitcoin/"
    }
},{
    name: "voisecom",
    code: "VOISE",
    icon: "voise",
    longname: "Voise",
    description: "Voise coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/voisecom/"
    }
},{
    name: "kobocoin",
    code: "KOBO",
    icon: "kobo",
    longname: "Kobocoin",
    description: "Kobocoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kobocoin/"
    }
},{
    name: "cryptoping",
    code: "PING",
    icon: "ping",
    longname: "CryptoPing",
    description: "CryptoPing coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cryptoping/"
    }
},{
    name: "biocoin",
    code: "BIO",
    icon: "bio",
    longname: "BioCoin",
    description: "BioCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/biocoin/"
    }
},{
    name: "target-coin",
    code: "TGT",
    icon: "tgt",
    longname: "Target Coin",
    description: "Target Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/target-coin/"
    }
},{
    name: "biotron",
    code: "BTRN",
    icon: "btrn",
    longname: "Biotron",
    description: "Biotron coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/biotron/"
    }
},{
    name: "bitibu-coin",
    code: "BTB",
    icon: "btb",
    longname: "Bitibu Coin",
    description: "Bitibu Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitibu-coin/"
    }
},{
    name: "knoxstertoken",
    code: "FKX",
    icon: "fkx",
    longname: "Knoxstertoken",
    description: "Knoxstertoken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/knoxstertoken/"
    }
},{
    name: "posw-coin",
    code: "POSW",
    icon: "posw",
    longname: "PoSW Coin",
    description: "PoSW Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/posw-coin/"
    }
},{
    name: "cartaxi-token",
    code: "CTX",
    icon: "ctx",
    longname: "CarTaxi Token",
    description: "CarTaxi Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cartaxi-token/"
    }
},{
    name: "signals-network",
    code: "SGN",
    icon: "sgn",
    longname: "Signals Network",
    description: "Signals Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/signals-network/"
    }
},{
    name: "photon",
    code: "PHO",
    icon: "pho",
    longname: "Photon",
    description: "Photon coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/photon/"
    }
},{
    name: "startercoin",
    code: "STAC",
    icon: "stac",
    longname: "StarterCoin",
    description: "StarterCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/startercoin/"
    }
},{
    name: "808coin",
    code: "808",
    icon: "808",
    longname: "808Coin",
    description: "808Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/808coin/"
    }
},{
    name: "zennies",
    code: "ZENI",
    icon: "zeni",
    longname: "Zennies",
    description: "Zennies coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zennies/"
    }
},{
    name: "incakoin",
    code: "NKA",
    icon: "nka",
    longname: "IncaKoin",
    description: "IncaKoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/incakoin/"
    }
},{
    name: "hackspace-capital",
    code: "HAC",
    icon: "hac",
    longname: "Hackspace Capital",
    description: "Hackspace Capital coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hackspace-capital/"
    }
},{
    name: "helleniccoin",
    code: "HNC",
    icon: "hnc",
    longname: "Helleniccoin",
    description: "Helleniccoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/helleniccoin/"
    }
},{
    name: "digitalprice",
    code: "DP",
    icon: "dp",
    longname: "DigitalPrice",
    description: "DigitalPrice coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/digitalprice/"
    }
},{
    name: "etheriya",
    code: "RIYA",
    icon: "riya",
    longname: "Etheriya",
    description: "Etheriya coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/etheriya/"
    }
},{
    name: "kekcoin",
    code: "KEK",
    icon: "kek",
    longname: "KekCoin",
    description: "KekCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kekcoin/"
    }
},{
    name: "deutsche-emark",
    code: "DEM",
    icon: "dem",
    longname: "Deutsche eMark",
    description: "Deutsche eMark coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/deutsche-emark/"
    }
},{
    name: "speed-mining-service",
    code: "SMS",
    icon: "sms",
    longname: "Speed Mining Service",
    description: "Speed Mining Service coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/speed-mining-service/"
    }
},{
    name: "joulecoin",
    code: "XJO",
    icon: "xjo",
    longname: "Joulecoin",
    description: "Joulecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/joulecoin/"
    }
},{
    name: "fujicoin",
    code: "FJC",
    icon: "fjc",
    longname: "FujiCoin",
    description: "FujiCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fujicoin/"
    }
},{
    name: "bitsilver",
    code: "BITSILVER",
    icon: "bitsilver",
    longname: "bitSilver",
    description: "bitSilver coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitsilver/"
    }
},{
    name: "commodity-ad-network",
    code: "CDX",
    icon: "cdx",
    longname: "Commodity Ad Network",
    description: "Commodity Ad Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/commodity-ad-network/"
    }
},{
    name: "truckcoin",
    code: "TRK",
    icon: "trk",
    longname: "Truckcoin",
    description: "Truckcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/truckcoin/"
    }
},{
    name: "bitgold",
    code: "BITGOLD",
    icon: "bitgold",
    longname: "bitGold",
    description: "bitGold coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitgold/"
    }
},{
    name: "webchain",
    code: "WEB-1",
    icon: "web-1",
    longname: "Webchain",
    description: "Webchain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/webchain/"
    }
},{
    name: "bitcloud",
    code: "BTDX",
    icon: "btdx",
    longname: "Bitcloud",
    description: "Bitcloud coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcloud/"
    }
},{
    name: "tagcoin",
    code: "TAG",
    icon: "tag",
    longname: "TagCoin",
    description: "TagCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tagcoin/"
    }
},{
    name: "canada-ecoin",
    code: "CDN",
    icon: "cdn",
    longname: "Canada eCoin",
    description: "Canada eCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/canada-ecoin/"
    }
},{
    name: "opal",
    code: "OPAL",
    icon: "opal",
    longname: "Opal",
    description: "Opal coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/opal/"
    }
},{
    name: "bitmark",
    code: "BTM-1",
    icon: "btm-1",
    longname: "Bitmark",
    description: "Bitmark coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitmark/"
    }
},{
    name: "digitalcoin",
    code: "DGC",
    icon: "dgc",
    longname: "Digitalcoin",
    description: "Digitalcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/digitalcoin/"
    }
},{
    name: "hirematch",
    code: "HIRE",
    icon: "hire",
    longname: "HireMatch",
    description: "HireMatch coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hirematch/"
    }
},{
    name: "drp-utility",
    code: "DRPU",
    icon: "drpu",
    longname: "DCORP Utility",
    description: "DCORP Utility coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/drp-utility/"
    }
},{
    name: "tracto",
    code: "TRCT",
    icon: "trct",
    longname: "Tracto",
    description: "Tracto coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tracto/"
    }
},{
    name: "newton-coin-project",
    code: "NCP",
    icon: "ncp",
    longname: "Newton Coin Project",
    description: "Newton Coin Project coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/newton-coin-project/"
    }
},{
    name: "fantasygold",
    code: "FGC",
    icon: "fgc",
    longname: "FantasyGold",
    description: "FantasyGold coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fantasygold/"
    }
},{
    name: "bitbtc",
    code: "BITBTC",
    icon: "bitbtc",
    longname: "bitBTC",
    description: "bitBTC coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitbtc/"
    }
},{
    name: "martexcoin",
    code: "MXT",
    icon: "mxt",
    longname: "MarteXcoin",
    description: "MarteXcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/martexcoin/"
    }
},{
    name: "trumpcoin",
    code: "TRUMP",
    icon: "trump",
    longname: "TrumpCoin",
    description: "TrumpCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/trumpcoin/"
    }
},{
    name: "neverdie",
    code: "NDC",
    icon: "ndc",
    longname: "NEVERDIE",
    description: "NEVERDIE coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/neverdie/"
    }
},{
    name: "popularcoin",
    code: "POP",
    icon: "pop",
    longname: "PopularCoin",
    description: "PopularCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/popularcoin/"
    }
},{
    name: "elementrem",
    code: "ELE",
    icon: "ele",
    longname: "Elementrem",
    description: "Elementrem coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/elementrem/"
    }
},{
    name: "firstcoin",
    code: "FRST",
    icon: "frst",
    longname: "FirstCoin",
    description: "FirstCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/firstcoin/"
    }
},{
    name: "innova",
    code: "INN",
    icon: "inn",
    longname: "Innova",
    description: "Innova coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/innova/"
    }
},{
    name: "ethersportz",
    code: "ESZ",
    icon: "esz",
    longname: "EtherSportz",
    description: "EtherSportz coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ethersportz/"
    }
},{
    name: "crave",
    code: "CRAVE",
    icon: "crave",
    longname: "Crave",
    description: "Crave coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/crave/"
    }
},{
    name: "ellaism",
    code: "ELLA",
    icon: "ella",
    longname: "Ellaism",
    description: "Ellaism coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ellaism/"
    }
},{
    name: "phoenixcoin",
    code: "PXC",
    icon: "pxc",
    longname: "Phoenixcoin",
    description: "Phoenixcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/phoenixcoin/"
    }
},{
    name: "adzcoin",
    code: "ADZ",
    icon: "adz",
    longname: "Adzcoin",
    description: "Adzcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/adzcoin/"
    }
},{
    name: "op-coin",
    code: "OPC",
    icon: "opc",
    longname: "OP Coin",
    description: "OP Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/op-coin/"
    }
},{
    name: "dinastycoin",
    code: "DCY",
    icon: "dcy",
    longname: "Dinastycoin",
    description: "Dinastycoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dinastycoin/"
    }
},{
    name: "shping",
    code: "SHPING",
    icon: "shping",
    longname: "SHPING",
    description: "SHPING coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/shping/"
    }
},{
    name: "citadel",
    code: "CTL",
    icon: "ctl",
    longname: "Citadel",
    description: "Citadel coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/citadel/"
    }
},{
    name: "compound-coin",
    code: "COMP",
    icon: "comp",
    longname: "Compound Coin",
    description: "Compound Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/compound-coin/"
    }
},{
    name: "nushares",
    code: "NSR",
    icon: "nsr",
    longname: "NuShares",
    description: "NuShares coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nushares/"
    }
},{
    name: "fabric-token",
    code: "FT",
    icon: "ft",
    longname: "Fabric Token",
    description: "Fabric Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fabric-token/"
    }
},{
    name: "digital-insurance-token",
    code: "DIT",
    icon: "dit",
    longname: "Digital Insurance Token",
    description: "Digital Insurance Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/digital-insurance-token/"
    }
},{
    name: "live-stars",
    code: "LIVE",
    icon: "live",
    longname: "Live Stars",
    description: "Live Stars coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/live-stars/"
    }
},{
    name: "moin",
    code: "MOIN",
    icon: "moin",
    longname: "Moin",
    description: "Moin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/moin/"
    }
},{
    name: "bitbar",
    code: "BTB-1",
    icon: "btb-1",
    longname: "BitBar",
    description: "BitBar coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitbar/"
    }
},{
    name: "bitradio",
    code: "BRO",
    icon: "bro",
    longname: "Bitradio",
    description: "Bitradio coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitradio/"
    }
},{
    name: "bitsum",
    code: "BSM",
    icon: "bsm",
    longname: "Bitsum",
    description: "Bitsum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitsum/"
    }
},{
    name: "well",
    code: "WELL",
    icon: "well",
    longname: "WELL",
    description: "WELL coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/well/"
    }
},{
    name: "paycoin2",
    code: "XPY",
    icon: "xpy",
    longname: "PayCoin",
    description: "PayCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/paycoin2/"
    }
},{
    name: "freicoin",
    code: "FRC",
    icon: "frc",
    longname: "Freicoin",
    description: "Freicoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/freicoin/"
    }
},{
    name: "ethereumcash",
    code: "ECASH",
    icon: "ecash",
    longname: "Ethereum Cash",
    description: "Ethereum Cash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ethereumcash/"
    }
},{
    name: "tidex-token",
    code: "TDX",
    icon: "tdx",
    longname: "Tidex Token",
    description: "Tidex Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tidex-token/"
    }
},{
    name: "tokia",
    code: "TKA",
    icon: "tka",
    longname: "Tokia",
    description: "Tokia coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tokia/"
    }
},{
    name: "iridium",
    code: "IRD",
    icon: "ird",
    longname: "Iridium",
    description: "Iridium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/iridium/"
    }
},{
    name: "triangles",
    code: "TRI",
    icon: "tri",
    longname: "Triangles",
    description: "Triangles coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/triangles/"
    }
},{
    name: "nerves",
    code: "NER",
    icon: "ner",
    longname: "Nerves",
    description: "Nerves coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nerves/"
    }
},{
    name: "biteur",
    code: "BITEUR",
    icon: "biteur",
    longname: "bitEUR",
    description: "bitEUR coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/biteur/"
    }
},{
    name: "synergy",
    code: "SNRG",
    icon: "snrg",
    longname: "Synergy",
    description: "Synergy coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/synergy/"
    }
},{
    name: "pyrexcoin",
    code: "PYX",
    icon: "pyx",
    longname: "PyrexCoin",
    description: "PyrexCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pyrexcoin/"
    }
},{
    name: "sugar-exchange",
    code: "SGR",
    icon: "sgr",
    longname: "Sugar Exchange",
    description: "Sugar Exchange coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sugar-exchange/"
    }
},{
    name: "origami",
    code: "ORI",
    icon: "ori",
    longname: "Origami",
    description: "Origami coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/origami/"
    }
},{
    name: "megacoin",
    code: "MEC",
    icon: "mec",
    longname: "Megacoin",
    description: "Megacoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/megacoin/"
    }
},{
    name: "piggycoin",
    code: "PIGGY",
    icon: "piggy",
    longname: "Piggycoin",
    description: "Piggycoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/piggycoin/"
    }
},{
    name: "mithril-ore",
    code: "MORE-1",
    icon: "more-1",
    longname: "Mithril Ore",
    description: "Mithril Ore coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mithril-ore/"
    }
},{
    name: "orbis-token",
    code: "OBT",
    icon: "obt",
    longname: "Orbis Token",
    description: "Orbis Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/orbis-token/"
    }
},{
    name: "ignition",
    code: "IC",
    icon: "ic",
    longname: "Ignition",
    description: "Ignition coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ignition/"
    }
},{
    name: "kz-cash",
    code: "KZC",
    icon: "kzc",
    longname: "KZ Cash",
    description: "KZ Cash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kz-cash/"
    }
},{
    name: "hodlcoin",
    code: "HODL",
    icon: "hodl",
    longname: "HOdlcoin",
    description: "HOdlcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hodlcoin/"
    }
},{
    name: "bitcoinfast",
    code: "BCF",
    icon: "bcf",
    longname: "Bitcoin Fast",
    description: "Bitcoin Fast coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoinfast/"
    }
},{
    name: "gapcoin",
    code: "GAP",
    icon: "gap",
    longname: "Gapcoin",
    description: "Gapcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gapcoin/"
    }
},{
    name: "musiconomi",
    code: "MCI",
    icon: "mci",
    longname: "Musiconomi",
    description: "Musiconomi coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/musiconomi/"
    }
},{
    name: "jesus-coin",
    code: "JC",
    icon: "jc",
    longname: "Jesus Coin",
    description: "Jesus Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/jesus-coin/"
    }
},{
    name: "advanced-internet-blocks",
    code: "AIB",
    icon: "aib",
    longname: "Advanced Internet Blocks",
    description: "Advanced Internet Blocks coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/advanced-internet-blocks/"
    }
},{
    name: "ultracoin",
    code: "UTC",
    icon: "utc",
    longname: "UltraCoin",
    description: "UltraCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ultracoin/"
    }
},{
    name: "billionaire-token",
    code: "XBL",
    icon: "xbl",
    longname: "Billionaire Token",
    description: "Billionaire Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/billionaire-token/"
    }
},{
    name: "kanadecoin",
    code: "KNDC",
    icon: "kndc",
    longname: "KanadeCoin",
    description: "KanadeCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kanadecoin/"
    }
},{
    name: "blakecoin",
    code: "BLC",
    icon: "blc",
    longname: "Blakecoin",
    description: "Blakecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blakecoin/"
    }
},{
    name: "elcoin-el",
    code: "EL",
    icon: "el",
    longname: "Elcoin",
    description: "Elcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/elcoin-el/"
    }
},{
    name: "tittiecoin",
    code: "TTC-1",
    icon: "ttc-1",
    longname: "TittieCoin",
    description: "TittieCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tittiecoin/"
    }
},{
    name: "cazcoin",
    code: "CAZ",
    icon: "caz",
    longname: "Cazcoin",
    description: "Cazcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cazcoin/"
    }
},{
    name: "bitcoin-scrypt",
    code: "BTCS",
    icon: "btcs",
    longname: "Bitcoin Scrypt",
    description: "Bitcoin Scrypt coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoin-scrypt/"
    }
},{
    name: "spreadcoin",
    code: "SPR",
    icon: "spr",
    longname: "SpreadCoin",
    description: "SpreadCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/spreadcoin/"
    }
},{
    name: "sagacoin",
    code: "SAGA",
    icon: "saga",
    longname: "SagaCoin",
    description: "SagaCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sagacoin/"
    }
},{
    name: "vslice",
    code: "VSL",
    icon: "vsl",
    longname: "vSlice",
    description: "vSlice coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vslice/"
    }
},{
    name: "wispr",
    code: "WSP",
    icon: "wsp",
    longname: "Wispr",
    description: "Wispr coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/wispr/"
    }
},{
    name: "magiccoin",
    code: "MAGE",
    icon: "mage",
    longname: "MagicCoin",
    description: "MagicCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/magiccoin/"
    }
},{
    name: "knekted",
    code: "KNT-1",
    icon: "knt-1",
    longname: "Knekted",
    description: "Knekted coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/knekted/"
    }
},{
    name: "idealcash",
    code: "DEAL",
    icon: "deal",
    longname: "iDealCash",
    description: "iDealCash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/idealcash/"
    }
},{
    name: "sgpay",
    code: "SGP",
    icon: "sgp",
    longname: "SGPay",
    description: "SGPay coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sgpay/"
    }
},{
    name: "btctalkcoin",
    code: "TALK",
    icon: "talk",
    longname: "BTCtalkcoin",
    description: "BTCtalkcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/btctalkcoin/"
    }
},{
    name: "unitus",
    code: "UIS",
    icon: "uis",
    longname: "Unitus",
    description: "Unitus coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/unitus/"
    }
},{
    name: "magi",
    code: "XMG",
    icon: "xmg",
    longname: "Magi",
    description: "Magi coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/magi/"
    }
},{
    name: "sola-token",
    code: "SOL",
    icon: "sol",
    longname: "Sola Token",
    description: "Sola Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sola-token/"
    }
},{
    name: "adultchain",
    code: "XXX",
    icon: "xxx",
    longname: "AdultChain",
    description: "AdultChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/adultchain/"
    }
},{
    name: "nyancoin",
    code: "NYAN",
    icon: "nyan",
    longname: "Nyancoin",
    description: "Nyancoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nyancoin/"
    }
},{
    name: "bitstation",
    code: "BSTN",
    icon: "bstn",
    longname: "BitStation",
    description: "BitStation coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitstation/"
    }
},{
    name: "fastcoin",
    code: "FST",
    icon: "fst",
    longname: "Fastcoin",
    description: "Fastcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fastcoin/"
    }
},{
    name: "vivo",
    code: "VIVO",
    icon: "vivo",
    longname: "VIVO",
    description: "VIVO coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vivo/"
    }
},{
    name: "emerald",
    code: "EMD",
    icon: "emd",
    longname: "Emerald Crypto",
    description: "Emerald Crypto coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/emerald/"
    }
},{
    name: "plancoin",
    code: "PLAN",
    icon: "plan",
    longname: "Plancoin",
    description: "Plancoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/plancoin/"
    }
},{
    name: "aced",
    code: "ACED",
    icon: "aced",
    longname: "AceD",
    description: "AceD coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aced/"
    }
},{
    name: "emphy",
    code: "EPY",
    icon: "epy",
    longname: "Emphy",
    description: "Emphy coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/emphy/"
    }
},{
    name: "cream",
    code: "CRM",
    icon: "crm",
    longname: "Cream",
    description: "Cream coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cream/"
    }
},{
    name: "aricoin",
    code: "ARI",
    icon: "ari",
    longname: "Aricoin",
    description: "Aricoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aricoin/"
    }
},{
    name: "iticoin",
    code: "ITI",
    icon: "iti",
    longname: "iTicoin",
    description: "iTicoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/iticoin/"
    }
},{
    name: "bitstar",
    code: "BITS-2",
    icon: "bits-2",
    longname: "Bitstar",
    description: "Bitstar coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitstar/"
    }
},{
    name: "ethereum-gold",
    code: "ETG",
    icon: "etg",
    longname: "Ethereum Gold",
    description: "Ethereum Gold coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ethereum-gold/"
    }
},{
    name: "rpicoin",
    code: "RPI",
    icon: "rpi",
    longname: "RPICoin",
    description: "RPICoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rpicoin/"
    }
},{
    name: "opcoinx",
    code: "OPCX",
    icon: "opcx",
    longname: "OPCoinX",
    description: "OPCoinX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/opcoinx/"
    }
},{
    name: "lanacoin",
    code: "LANA",
    icon: "lana",
    longname: "LanaCoin",
    description: "LanaCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/lanacoin/"
    }
},{
    name: "bitcoin-adult",
    code: "BTAD",
    icon: "btad",
    longname: "Bitcoin Adult",
    description: "Bitcoin Adult coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoin-adult/"
    }
},{
    name: "ratecoin",
    code: "XRA-1",
    icon: "xra-1",
    longname: "Ratecoin",
    description: "Ratecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ratecoin/"
    }
},{
    name: "dietbitcoin",
    code: "DDX",
    icon: "ddx",
    longname: "dietbitcoin",
    description: "dietbitcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dietbitcoin/"
    }
},{
    name: "piplcoin",
    code: "PIPL",
    icon: "pipl",
    longname: "PiplCoin",
    description: "PiplCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/piplcoin/"
    }
},{
    name: "aquariuscoin",
    code: "ARCO",
    icon: "arco",
    longname: "AquariusCoin",
    description: "AquariusCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aquariuscoin/"
    }
},{
    name: "bata",
    code: "BTA",
    icon: "bta",
    longname: "Bata",
    description: "Bata coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bata/"
    }
},{
    name: "blockmesh",
    code: "BMH",
    icon: "bmh",
    longname: "BlockMesh",
    description: "BlockMesh coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blockmesh/"
    }
},{
    name: "cashcoin",
    code: "CASH",
    icon: "cash",
    longname: "Cashcoin",
    description: "Cashcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cashcoin/"
    }
},{
    name: "crowdholding",
    code: "YUP",
    icon: "yup",
    longname: "Crowdholding",
    description: "Crowdholding coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/crowdholding/"
    }
},{
    name: "netko",
    code: "NETKO",
    icon: "netko",
    longname: "Netko",
    description: "Netko coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/netko/"
    }
},{
    name: "croat",
    code: "CROAT",
    icon: "croat",
    longname: "CROAT",
    description: "CROAT coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/croat/"
    }
},{
    name: "privcy",
    code: "PRIV",
    icon: "priv",
    longname: "PRiVCY",
    description: "PRiVCY coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/privcy/"
    }
},{
    name: "britcoin",
    code: "BRIT",
    icon: "brit",
    longname: "BritCoin",
    description: "BritCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/britcoin/"
    }
},{
    name: "chesscoin",
    code: "CHESS",
    icon: "chess",
    longname: "ChessCoin",
    description: "ChessCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/chesscoin/"
    }
},{
    name: "regalcoin",
    code: "REC",
    icon: "rec",
    longname: "Regalcoin",
    description: "Regalcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/regalcoin/"
    }
},{
    name: "bitcoin-w-spectrum",
    code: "BWS",
    icon: "bws",
    longname: "Bitcoin W Spectrum",
    description: "Bitcoin W Spectrum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoin-w-spectrum/"
    }
},{
    name: "ccore",
    code: "CCO",
    icon: "cco",
    longname: "Ccore",
    description: "Ccore coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ccore/"
    }
},{
    name: "digiwage",
    code: "WAGE",
    icon: "wage",
    longname: "Digiwage",
    description: "Digiwage coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/digiwage/"
    }
},{
    name: "litebar",
    code: "LTB",
    icon: "ltb",
    longname: "LiteBar",
    description: "LiteBar coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/litebar/"
    }
},{
    name: "grandcoin",
    code: "GDC",
    icon: "gdc",
    longname: "GrandCoin",
    description: "GrandCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/grandcoin/"
    }
},{
    name: "golfcoin",
    code: "GOLF",
    icon: "golf",
    longname: "Golfcoin",
    description: "Golfcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/golfcoin/"
    }
},{
    name: "bitdeal",
    code: "BDL",
    icon: "bdl",
    longname: "Bitdeal",
    description: "Bitdeal coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitdeal/"
    }
},{
    name: "jin-coin",
    code: "JIN",
    icon: "jin",
    longname: "Jin Coin",
    description: "Jin Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/jin-coin/"
    }
},{
    name: "swing",
    code: "SWING",
    icon: "swing",
    longname: "Swing",
    description: "Swing coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/swing/"
    }
},{
    name: "graphcoin",
    code: "GRPH",
    icon: "grph",
    longname: "Graphcoin",
    description: "Graphcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/graphcoin/"
    }
},{
    name: "onix",
    code: "ONX",
    icon: "onx",
    longname: "Onix",
    description: "Onix coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/onix/"
    }
},{
    name: "marscoin",
    code: "MARS",
    icon: "mars",
    longname: "Marscoin",
    description: "Marscoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/marscoin/"
    }
},{
    name: "shadow-token",
    code: "SHDW",
    icon: "shdw",
    longname: "Shadow Token",
    description: "Shadow Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/shadow-token/"
    }
},{
    name: "dystem",
    code: "DTEM",
    icon: "dtem",
    longname: "Dystem",
    description: "Dystem coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dystem/"
    }
},{
    name: "adcoin",
    code: "ACC",
    icon: "acc",
    longname: "AdCoin",
    description: "AdCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/adcoin/"
    }
},{
    name: "altcoin-alt",
    code: "ALT-1",
    icon: "alt-1",
    longname: "Altcoin",
    description: "Altcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/altcoin-alt/"
    }
},{
    name: "masternodecoin",
    code: "MTNC",
    icon: "mtnc",
    longname: "Masternodecoin",
    description: "Masternodecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/masternodecoin/"
    }
},{
    name: "tokyo",
    code: "TOKC",
    icon: "tokc",
    longname: "TOKYO",
    description: "TOKYO coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tokyo/"
    }
},{
    name: "joincoin",
    code: "J",
    icon: "j",
    longname: "Joincoin",
    description: "Joincoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/joincoin/"
    }
},{
    name: "smartcoin",
    code: "SMC",
    icon: "smc",
    longname: "SmartCoin",
    description: "SmartCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/smartcoin/"
    }
},{
    name: "shekel",
    code: "JEW",
    icon: "jew",
    longname: "Shekel",
    description: "Shekel coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/shekel/"
    }
},{
    name: "crystal-clear",
    code: "CCT",
    icon: "cct",
    longname: "Crystal Clear ",
    description: "Crystal Clear  coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/crystal-clear/"
    }
},{
    name: "version",
    code: "V",
    icon: "v",
    longname: "Version",
    description: "Version coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/version/"
    }
},{
    name: "halcyon",
    code: "HAL",
    icon: "hal",
    longname: "Halcyon",
    description: "Halcyon coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/halcyon/"
    }
},{
    name: "bitcoinote",
    code: "BTCN",
    icon: "btcn",
    longname: "BitcoiNote",
    description: "BitcoiNote coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoinote/"
    }
},{
    name: "rimbit",
    code: "RBT",
    icon: "rbt",
    longname: "Rimbit",
    description: "Rimbit coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rimbit/"
    }
},{
    name: "growers-international",
    code: "GRWI",
    icon: "grwi",
    longname: "Growers International",
    description: "Growers International coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/growers-international/"
    }
},{
    name: "wild-crypto",
    code: "WILD",
    icon: "wild",
    longname: "Wild Crypto",
    description: "Wild Crypto coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/wild-crypto/"
    }
},{
    name: "fantasy-cash",
    code: "FANS",
    icon: "fans",
    longname: "Fantasy Cash",
    description: "Fantasy Cash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fantasy-cash/"
    }
},{
    name: "goldblocks",
    code: "GB",
    icon: "gb",
    longname: "GoldBlocks",
    description: "GoldBlocks coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/goldblocks/"
    }
},{
    name: "rubies",
    code: "RBIES",
    icon: "rbies",
    longname: "Rubies",
    description: "Rubies coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rubies/"
    }
},{
    name: "darsek",
    code: "KED",
    icon: "ked",
    longname: "Darsek",
    description: "Darsek coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/darsek/"
    }
},{
    name: "bit20",
    code: "BTWTY",
    icon: "btwty",
    longname: "Bit20",
    description: "Bit20 coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bit20/"
    }
},{
    name: "purex",
    code: "PUREX",
    icon: "purex",
    longname: "Pure",
    description: "Pure coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/purex/"
    }
},{
    name: "bitcoin-red",
    code: "BTCRED",
    icon: "btcred",
    longname: "Bitcoin Red",
    description: "Bitcoin Red coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoin-red/"
    }
},{
    name: "tekcoin",
    code: "TEK",
    icon: "tek",
    longname: "TEKcoin",
    description: "TEKcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tekcoin/"
    }
},{
    name: "pascal-lite",
    code: "PASL",
    icon: "pasl",
    longname: "Pascal Lite",
    description: "Pascal Lite coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pascal-lite/"
    }
},{
    name: "votecoin",
    code: "VOT",
    icon: "vot",
    longname: "VoteCoin",
    description: "VoteCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/votecoin/"
    }
},{
    name: "procurrency",
    code: "PROC",
    icon: "proc",
    longname: "ProCurrency",
    description: "ProCurrency coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/procurrency/"
    }
},{
    name: "atheios",
    code: "ATH",
    icon: "ath",
    longname: "Atheios",
    description: "Atheios coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/atheios/"
    }
},{
    name: "dragonglass",
    code: "DGS",
    icon: "dgs",
    longname: "Dragonglass",
    description: "Dragonglass coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dragonglass/"
    }
},{
    name: "coin",
    code: "CNO",
    icon: "cno",
    longname: "Coin(O)",
    description: "Coin(O) coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/coin/"
    }
},{
    name: "bitcoin-21",
    code: "XBTC21",
    icon: "xbtc21",
    longname: "Bitcoin 21",
    description: "Bitcoin 21 coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoin-21/"
    }
},{
    name: "bolivarcoin",
    code: "BOLI",
    icon: "boli",
    longname: "Bolivarcoin",
    description: "Bolivarcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bolivarcoin/"
    }
},{
    name: "honey",
    code: "HONEY",
    icon: "honey",
    longname: "Honey",
    description: "Honey coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/honey/"
    }
},{
    name: "arion",
    code: "ARION",
    icon: "arion",
    longname: "Arion",
    description: "Arion coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/arion/"
    }
},{
    name: "senderon",
    code: "SDRN",
    icon: "sdrn",
    longname: "Senderon",
    description: "Senderon coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/senderon/"
    }
},{
    name: "pakcoin",
    code: "PAK",
    icon: "pak",
    longname: "Pakcoin",
    description: "Pakcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pakcoin/"
    }
},{
    name: "titcoin",
    code: "TIT",
    icon: "tit",
    longname: "Titcoin",
    description: "Titcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/titcoin/"
    }
},{
    name: "viuly",
    code: "VIU",
    icon: "viu",
    longname: "Viuly",
    description: "Viuly coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/viuly/"
    }
},{
    name: "iqcash",
    code: "IQ-1",
    icon: "iq-1",
    longname: "IQ.cash",
    description: "IQ.cash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/iqcash/"
    }
},{
    name: "carebit",
    code: "CARE",
    icon: "care",
    longname: "Carebit",
    description: "Carebit coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/carebit/"
    }
},{
    name: "commercium",
    code: "CMM",
    icon: "cmm",
    longname: "Commercium",
    description: "Commercium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/commercium/"
    }
},{
    name: "ico-openledger",
    code: "ICOO",
    icon: "icoo",
    longname: "ICO OpenLedger",
    description: "ICO OpenLedger coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ico-openledger/"
    }
},{
    name: "ultimate-secure-cash",
    code: "USC",
    icon: "usc",
    longname: "Ultimate Secure Cash",
    description: "Ultimate Secure Cash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ultimate-secure-cash/"
    }
},{
    name: "minereum",
    code: "MNE",
    icon: "mne",
    longname: "Minereum",
    description: "Minereum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/minereum/"
    }
},{
    name: "blazecoin",
    code: "BLZ-1",
    icon: "blz-1",
    longname: "BlazeCoin",
    description: "BlazeCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blazecoin/"
    }
},{
    name: "ibtc",
    code: "IBTC",
    icon: "ibtc",
    longname: "iBTC",
    description: "iBTC coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ibtc/"
    }
},{
    name: "impact",
    code: "IMX",
    icon: "imx",
    longname: "Impact",
    description: "Impact coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/impact/"
    }
},{
    name: "tokugawa",
    code: "TOK",
    icon: "tok",
    longname: "Tokugawa",
    description: "Tokugawa coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tokugawa/"
    }
},{
    name: "purevidz",
    code: "VIDZ",
    icon: "vidz",
    longname: "PureVidz",
    description: "PureVidz coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/purevidz/"
    }
},{
    name: "irishcoin",
    code: "IRL",
    icon: "irl",
    longname: "IrishCoin",
    description: "IrishCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/irishcoin/"
    }
},{
    name: "arepacoin",
    code: "AREPA",
    icon: "arepa",
    longname: "Arepacoin",
    description: "Arepacoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/arepacoin/"
    }
},{
    name: "leviar",
    code: "XLC",
    icon: "xlc",
    longname: "Leviar",
    description: "Leviar coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/leviar/"
    }
},{
    name: "globaltoken",
    code: "GLT",
    icon: "glt",
    longname: "GlobalToken",
    description: "GlobalToken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/globaltoken/"
    }
},{
    name: "printex",
    code: "PRTX",
    icon: "prtx",
    longname: "Printex",
    description: "Printex coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/printex/"
    }
},{
    name: "signatum",
    code: "SIGT",
    icon: "sigt",
    longname: "Signatum",
    description: "Signatum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/signatum/"
    }
},{
    name: "help-the-homeless-coin",
    code: "HTH",
    icon: "hth",
    longname: "Help The Homeless Coin",
    description: "Help The Homeless Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/help-the-homeless-coin/"
    }
},{
    name: "escroco-emerald",
    code: "ESCE",
    icon: "esce",
    longname: "Escroco Emerald",
    description: "Escroco Emerald coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/escroco-emerald/"
    }
},{
    name: "embers",
    code: "MBRS",
    icon: "mbrs",
    longname: "Embers",
    description: "Embers coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/embers/"
    }
},{
    name: "mincoin",
    code: "MNC",
    icon: "mnc",
    longname: "Mincoin",
    description: "Mincoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mincoin/"
    }
},{
    name: "zurcoin",
    code: "ZUR",
    icon: "zur",
    longname: "Zurcoin",
    description: "Zurcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zurcoin/"
    }
},{
    name: "bigup",
    code: "BIGUP",
    icon: "bigup",
    longname: "BigUp",
    description: "BigUp coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bigup/"
    }
},{
    name: "sakecoin",
    code: "SAKE",
    icon: "sake",
    longname: "SAKECOIN",
    description: "SAKECOIN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sakecoin/"
    }
},{
    name: "zoomba",
    code: "ZBA",
    icon: "zba",
    longname: "Zoomba",
    description: "Zoomba coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zoomba/"
    }
},{
    name: "doubloon",
    code: "BOAT",
    icon: "boat",
    longname: "BOAT",
    description: "BOAT coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/doubloon/"
    }
},{
    name: "300-token",
    code: "300",
    icon: "300",
    longname: "300 Token",
    description: "300 Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/300-token/"
    }
},{
    name: "safe-trade-coin",
    code: "XSTC",
    icon: "xstc",
    longname: "Safe Trade Coin",
    description: "Safe Trade Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/safe-trade-coin/"
    }
},{
    name: "guccionecoin",
    code: "GCC-1",
    icon: "gcc-1",
    longname: "GuccioneCoin",
    description: "GuccioneCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/guccionecoin/"
    }
},{
    name: "thunderstake",
    code: "TSC",
    icon: "tsc",
    longname: "Thunderstake",
    description: "Thunderstake coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/thunderstake/"
    }
},{
    name: "boostcoin",
    code: "BOST",
    icon: "bost",
    longname: "BoostCoin",
    description: "BoostCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/boostcoin/"
    }
},{
    name: "ethbet",
    code: "EBET",
    icon: "ebet",
    longname: "EthBet",
    description: "EthBet coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ethbet/"
    }
},{
    name: "quatloo",
    code: "QTL",
    icon: "qtl",
    longname: "Quatloo",
    description: "Quatloo coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/quatloo/"
    }
},{
    name: "berncash",
    code: "BERN",
    icon: "bern",
    longname: "BERNcash",
    description: "BERNcash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/berncash/"
    }
},{
    name: "ethereum-dark",
    code: "ETHD",
    icon: "ethd",
    longname: "Ethereum Dark",
    description: "Ethereum Dark coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ethereum-dark/"
    }
},{
    name: "revolvercoin",
    code: "XRE",
    icon: "xre",
    longname: "RevolverCoin",
    description: "RevolverCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/revolvercoin/"
    }
},{
    name: "folmcoin",
    code: "FLM",
    icon: "flm",
    longname: "FolmCoin",
    description: "FolmCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/folmcoin/"
    }
},{
    name: "steepcoin",
    code: "STEEP",
    icon: "steep",
    longname: "SteepCoin",
    description: "SteepCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/steepcoin/"
    }
},{
    name: "creditbit",
    code: "CRB",
    icon: "crb",
    longname: "Creditbit",
    description: "Creditbit coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/creditbit/"
    }
},{
    name: "secretcoin",
    code: "SCRT",
    icon: "scrt",
    longname: "SecretCoin",
    description: "SecretCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/secretcoin/"
    }
},{
    name: "dix-asset",
    code: "DIX",
    icon: "dix",
    longname: "Dix Asset",
    description: "Dix Asset coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dix-asset/"
    }
},{
    name: "parkbyte",
    code: "PKB",
    icon: "pkb",
    longname: "ParkByte",
    description: "ParkByte coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/parkbyte/"
    }
},{
    name: "deuscoin",
    code: "DEUS",
    icon: "deus",
    longname: "DeusCoin",
    description: "DeusCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/deuscoin/"
    }
},{
    name: "coin2-1",
    code: "C2",
    icon: "c2",
    longname: "Coin2.1",
    description: "Coin2.1 coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/coin2-1/"
    }
},{
    name: "evil-coin",
    code: "EVIL",
    icon: "evil",
    longname: "Evil Coin",
    description: "Evil Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/evil-coin/"
    }
},{
    name: "globalboost-y",
    code: "BSTY",
    icon: "bsty",
    longname: "GlobalBoost-Y",
    description: "GlobalBoost-Y coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/globalboost-y/"
    }
},{
    name: "redcoin",
    code: "RED-1",
    icon: "red-1",
    longname: "RedCoin",
    description: "RedCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/redcoin/"
    }
},{
    name: "droxne",
    code: "DRXNE",
    icon: "drxne",
    longname: "DROXNE",
    description: "DROXNE coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/droxne/"
    }
},{
    name: "x-coin",
    code: "XCO",
    icon: "xco",
    longname: "X-Coin",
    description: "X-Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/x-coin/"
    }
},{
    name: "flik",
    code: "FLIK",
    icon: "flik",
    longname: "FLiK",
    description: "FLiK coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/flik/"
    }
},{
    name: "cryptojacks",
    code: "CJ",
    icon: "cj",
    longname: "Cryptojacks",
    description: "Cryptojacks coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cryptojacks/"
    }
},{
    name: "nevacoin",
    code: "NEVA",
    icon: "neva",
    longname: "NevaCoin",
    description: "NevaCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nevacoin/"
    }
},{
    name: "kurrent",
    code: "KURT",
    icon: "kurt",
    longname: "Kurrent",
    description: "Kurrent coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kurrent/"
    }
},{
    name: "securecoin",
    code: "SRC",
    icon: "src",
    longname: "SecureCoin",
    description: "SecureCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/securecoin/"
    }
},{
    name: "sixeleven",
    code: "611",
    icon: "611",
    longname: "SixEleven",
    description: "SixEleven coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sixeleven/"
    }
},{
    name: "garlicoin",
    code: "GRLC",
    icon: "grlc",
    longname: "Garlicoin",
    description: "Garlicoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/garlicoin/"
    }
},{
    name: "digital-money-bits",
    code: "DMB",
    icon: "dmb",
    longname: "Digital Money Bits",
    description: "Digital Money Bits coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/digital-money-bits/"
    }
},{
    name: "mojocoin",
    code: "MOJO",
    icon: "mojo",
    longname: "MojoCoin",
    description: "MojoCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mojocoin/"
    }
},{
    name: "pluracoin",
    code: "PLURA",
    icon: "plura",
    longname: "PluraCoin",
    description: "PluraCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pluracoin/"
    }
},{
    name: "smartfox",
    code: "FOX",
    icon: "fox",
    longname: "SmartFox",
    description: "SmartFox coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/smartfox/"
    }
},{
    name: "bank-coin",
    code: "BANK",
    icon: "bank",
    longname: "Bank Coin",
    description: "Bank Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bank-coin/"
    }
},{
    name: "dollarcoin",
    code: "DLC",
    icon: "dlc",
    longname: "Dollarcoin",
    description: "Dollarcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dollarcoin/"
    }
},{
    name: "atomic-coin",
    code: "ATOM",
    icon: "atom",
    longname: "Atomic Coin",
    description: "Atomic Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/atomic-coin/"
    }
},{
    name: "datacoin",
    code: "DTC",
    icon: "dtc",
    longname: "Datacoin",
    description: "Datacoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/datacoin/"
    }
},{
    name: "master-swiscoin",
    code: "MSCN",
    icon: "mscn",
    longname: "Master Swiscoin",
    description: "Master Swiscoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/master-swiscoin/"
    }
},{
    name: "neuro",
    code: "NRO",
    icon: "nro",
    longname: "Neuro",
    description: "Neuro coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/neuro/"
    }
},{
    name: "rhenium",
    code: "XRH",
    icon: "xrh",
    longname: "Rhenium",
    description: "Rhenium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rhenium/"
    }
},{
    name: "fintab",
    code: "FNTB",
    icon: "fntb",
    longname: "Fintab",
    description: "Fintab coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fintab/"
    }
},{
    name: "ronpaulcoin",
    code: "RPC",
    icon: "rpc",
    longname: "RonPaulCoin",
    description: "RonPaulCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ronpaulcoin/"
    }
},{
    name: "allion",
    code: "ALL",
    icon: "all",
    longname: "Allion",
    description: "Allion coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/allion/"
    }
},{
    name: "qurito",
    code: "QURO",
    icon: "quro",
    longname: "Qurito",
    description: "Qurito coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/qurito/"
    }
},{
    name: "eaglex",
    code: "EGX",
    icon: "egx",
    longname: "EagleX",
    description: "EagleX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/eaglex/"
    }
},{
    name: "indinode",
    code: "XIND",
    icon: "xind",
    longname: "INDINODE",
    description: "INDINODE coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/indinode/"
    }
},{
    name: "brokernekonetwork",
    code: "BNN",
    icon: "bnn",
    longname: "BrokerNekoNetwork",
    description: "BrokerNekoNetwork coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/brokernekonetwork/"
    }
},{
    name: "sparks",
    code: "SPK",
    icon: "spk",
    longname: "Sparks",
    description: "Sparks coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sparks/"
    }
},{
    name: "8bit",
    code: "8BIT",
    icon: "8bit",
    longname: "8Bit",
    description: "8Bit coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/8bit/"
    }
},{
    name: "trident",
    code: "TRDT",
    icon: "trdt",
    longname: "Trident Group",
    description: "Trident Group coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/trident/"
    }
},{
    name: "nitro",
    code: "NOX",
    icon: "nox",
    longname: "Nitro",
    description: "Nitro coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nitro/"
    }
},{
    name: "quebecoin",
    code: "QBC",
    icon: "qbc",
    longname: "Quebecoin",
    description: "Quebecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/quebecoin/"
    }
},{
    name: "eternity",
    code: "ENT",
    icon: "ent",
    longname: "Eternity",
    description: "Eternity coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/eternity/"
    }
},{
    name: "harvest-masternode-coin",
    code: "HC-1",
    icon: "hc-1",
    longname: "Harvest Masternode Coin",
    description: "Harvest Masternode Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/harvest-masternode-coin/"
    }
},{
    name: "centurion",
    code: "CNT",
    icon: "cnt",
    longname: "Centurion",
    description: "Centurion coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/centurion/"
    }
},{
    name: "cheesecoin",
    code: "CHEESE",
    icon: "cheese",
    longname: "Cheesecoin",
    description: "Cheesecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cheesecoin/"
    }
},{
    name: "accelerator-network",
    code: "ACC-1",
    icon: "acc-1",
    longname: "Accelerator Network",
    description: "Accelerator Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/accelerator-network/"
    }
},{
    name: "acoin",
    code: "ACOIN",
    icon: "acoin",
    longname: "Acoin",
    description: "Acoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/acoin/"
    }
},{
    name: "surety",
    code: "SURE",
    icon: "sure",
    longname: "SURETY",
    description: "SURETY coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/surety/"
    }
},{
    name: "acre",
    code: "ACRE",
    icon: "acre",
    longname: "ACRE",
    description: "ACRE coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/acre/"
    }
},{
    name: "dreamcoin",
    code: "DRM",
    icon: "drm",
    longname: "Dreamcoin",
    description: "Dreamcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dreamcoin/"
    }
},{
    name: "vector",
    code: "VEC2",
    icon: "vec2",
    longname: "VectorAI",
    description: "VectorAI coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vector/"
    }
},{
    name: "coinonatx",
    code: "XCXT",
    icon: "xcxt",
    longname: "CoinonatX",
    description: "CoinonatX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/coinonatx/"
    }
},{
    name: "postoken",
    code: "POS",
    icon: "pos",
    longname: "PoSToken",
    description: "PoSToken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/postoken/"
    }
},{
    name: "qbic",
    code: "QBIC",
    icon: "qbic",
    longname: "Qbic",
    description: "Qbic coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/qbic/"
    }
},{
    name: "gamblecoin",
    code: "GMCN",
    icon: "gmcn",
    longname: "GambleCoin",
    description: "GambleCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gamblecoin/"
    }
},{
    name: "geysercoin",
    code: "GSR",
    icon: "gsr",
    longname: "GeyserCoin",
    description: "GeyserCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/geysercoin/"
    }
},{
    name: "sooncoin",
    code: "SOON",
    icon: "soon",
    longname: "SoonCoin",
    description: "SoonCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sooncoin/"
    }
},{
    name: "tajcoin",
    code: "TAJ",
    icon: "taj",
    longname: "TajCoin",
    description: "TajCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tajcoin/"
    }
},{
    name: "c-bit",
    code: "XCT",
    icon: "xct",
    longname: "C-Bit",
    description: "C-Bit coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/c-bit/"
    }
},{
    name: "homeblockcoin",
    code: "HBC",
    icon: "hbc",
    longname: "HomeBlockCoin",
    description: "HomeBlockCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/homeblockcoin/"
    }
},{
    name: "zozocoin",
    code: "ZZC",
    icon: "zzc",
    longname: "ZoZoCoin",
    description: "ZoZoCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zozocoin/"
    }
},{
    name: "connectjob",
    code: "CJT",
    icon: "cjt",
    longname: "ConnectJob",
    description: "ConnectJob coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/connectjob/"
    }
},{
    name: "compucoin",
    code: "CPN",
    icon: "cpn",
    longname: "CompuCoin",
    description: "CompuCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/compucoin/"
    }
},{
    name: "postcoin",
    code: "POST",
    icon: "post",
    longname: "PostCoin",
    description: "PostCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/postcoin/"
    }
},{
    name: "bitcoin-one",
    code: "BTCONE",
    icon: "btcone",
    longname: "BitCoin One",
    description: "BitCoin One coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoin-one/"
    }
},{
    name: "independent-money-system",
    code: "IMS",
    icon: "ims",
    longname: "Independent Money System",
    description: "Independent Money System coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/independent-money-system/"
    }
},{
    name: "theresa-may-coin",
    code: "MAY",
    icon: "may",
    longname: "Theresa May Coin",
    description: "Theresa May Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/theresa-may-coin/"
    }
},{
    name: "kingn-coin",
    code: "KNC-1",
    icon: "knc-1",
    longname: "KingN Coin",
    description: "KingN Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kingn-coin/"
    }
},{
    name: "eurocoin",
    code: "EUC",
    icon: "euc",
    longname: "Eurocoin",
    description: "Eurocoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/eurocoin/"
    }
},{
    name: "bitcoal",
    code: "COAL",
    icon: "coal",
    longname: "BitCoal",
    description: "BitCoal coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoal/"
    }
},{
    name: "archetypal-network",
    code: "ACTP",
    icon: "actp",
    longname: "Archetypal Network",
    description: "Archetypal Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/archetypal-network/"
    }
},{
    name: "trackr",
    code: "TKR",
    icon: "tkr",
    longname: "CryptoInsight",
    description: "CryptoInsight coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/trackr/"
    }
},{
    name: "high-voltage",
    code: "HVCO",
    icon: "hvco",
    longname: "High Voltage",
    description: "High Voltage coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/high-voltage/"
    }
},{
    name: "zayedcoin",
    code: "ZYD",
    icon: "zyd",
    longname: "Zayedcoin",
    description: "Zayedcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zayedcoin/"
    }
},{
    name: "uralscoin",
    code: "URALS",
    icon: "urals",
    longname: "UralsCoin",
    description: "UralsCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/uralscoin/"
    }
},{
    name: "flaxscript",
    code: "FLAX",
    icon: "flax",
    longname: "Flaxscript",
    description: "Flaxscript coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/flaxscript/"
    }
},{
    name: "posex",
    code: "PEX",
    icon: "pex",
    longname: "PosEx",
    description: "PosEx coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/posex/"
    }
},{
    name: "qvolta",
    code: "QVT",
    icon: "qvt",
    longname: "Qvolta",
    description: "Qvolta coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/qvolta/"
    }
},{
    name: "comet",
    code: "CMT-1",
    icon: "cmt-1",
    longname: "Comet",
    description: "Comet coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/comet/"
    }
},{
    name: "javascript-token",
    code: "JS",
    icon: "js",
    longname: "JavaScript Token",
    description: "JavaScript Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/javascript-token/"
    }
},{
    name: "cannation",
    code: "CNNC",
    icon: "cnnc",
    longname: "Cannation",
    description: "Cannation coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cannation/"
    }
},{
    name: "cabbage",
    code: "CAB",
    icon: "cab",
    longname: "Cabbage",
    description: "Cabbage coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cabbage/"
    }
},{
    name: "soilcoin",
    code: "SOIL",
    icon: "soil",
    longname: "SOILcoin",
    description: "SOILcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/soilcoin/"
    }
},{
    name: "litecred",
    code: "LTCR",
    icon: "ltcr",
    longname: "Litecred",
    description: "Litecred coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/litecred/"
    }
},{
    name: "jiyo",
    code: "JIYOX",
    icon: "jiyox",
    longname: "JIYO",
    description: "JIYO coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/jiyo/"
    }
},{
    name: "amsterdamcoin",
    code: "AMS",
    icon: "ams",
    longname: "AmsterdamCoin",
    description: "AmsterdamCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/amsterdamcoin/"
    }
},{
    name: "bankcoin",
    code: "B@",
    icon: "b@",
    longname: "Bankcoin",
    description: "Bankcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bankcoin/"
    }
},{
    name: "ammo-reloaded",
    code: "AMMO",
    icon: "ammo",
    longname: "Ammo Reloaded",
    description: "Ammo Reloaded coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ammo-reloaded/"
    }
},{
    name: "fuzzballs",
    code: "FUZZ",
    icon: "fuzz",
    longname: "FuzzBalls",
    description: "FuzzBalls coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fuzzballs/"
    }
},{
    name: "elysium",
    code: "ELS",
    icon: "els",
    longname: "Elysium",
    description: "Elysium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/elysium/"
    }
},{
    name: "phantomx",
    code: "PNX",
    icon: "pnx",
    longname: "Phantomx",
    description: "Phantomx coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/phantomx/"
    }
},{
    name: "bumbacoin",
    code: "BUMBA",
    icon: "bumba",
    longname: "BumbaCoin",
    description: "BumbaCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bumbacoin/"
    }
},{
    name: "nekonium",
    code: "NUKO",
    icon: "nuko",
    longname: "Nekonium",
    description: "Nekonium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nekonium/"
    }
},{
    name: "speedcash",
    code: "SCS",
    icon: "scs",
    longname: "SpeedCash",
    description: "SpeedCash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/speedcash/"
    }
},{
    name: "eryllium",
    code: "ERY",
    icon: "ery",
    longname: "Eryllium",
    description: "Eryllium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/eryllium/"
    }
},{
    name: "californium",
    code: "CF",
    icon: "cf",
    longname: "Californium",
    description: "Californium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/californium/"
    }
},{
    name: "marijuanacoin",
    code: "MAR",
    icon: "mar",
    longname: "Marijuanacoin",
    description: "Marijuanacoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/marijuanacoin/"
    }
},{
    name: "bitquark",
    code: "BTQ",
    icon: "btq",
    longname: "BitQuark",
    description: "BitQuark coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitquark/"
    }
},{
    name: "polcoin",
    code: "PLC",
    icon: "plc",
    longname: "Polcoin",
    description: "Polcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/polcoin/"
    }
},{
    name: "kubera-coin",
    code: "KBR",
    icon: "kbr",
    longname: "Kubera Coin",
    description: "Kubera Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kubera-coin/"
    }
},{
    name: "iconic",
    code: "ICON",
    icon: "icon",
    longname: "Iconic",
    description: "Iconic coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/iconic/"
    }
},{
    name: "kronecoin",
    code: "KRONE",
    icon: "krone",
    longname: "Kronecoin",
    description: "Kronecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kronecoin/"
    }
},{
    name: "icobid",
    code: "ICOB",
    icon: "icob",
    longname: "ICOBID",
    description: "ICOBID coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/icobid/"
    }
},{
    name: "ragnarok",
    code: "RAGNA",
    icon: "ragna",
    longname: "Ragnarok",
    description: "Ragnarok coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ragnarok/"
    }
},{
    name: "pioneer-coin",
    code: "PCOIN",
    icon: "pcoin",
    longname: "Pioneer Coin",
    description: "Pioneer Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pioneer-coin/"
    }
},{
    name: "bitcoin-planet",
    code: "BTPL",
    icon: "btpl",
    longname: "Bitcoin Planet",
    description: "Bitcoin Planet coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoin-planet/"
    }
},{
    name: "ibank",
    code: "IBANK",
    icon: "ibank",
    longname: "iBank",
    description: "iBank coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ibank/"
    }
},{
    name: "asiadigicoin",
    code: "ADCN",
    icon: "adcn",
    longname: "Asiadigicoin",
    description: "Asiadigicoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/asiadigicoin/"
    }
},{
    name: "staker",
    code: "STR",
    icon: "str",
    longname: "Staker",
    description: "Staker coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/staker/"
    }
},{
    name: "socialcoin-socc",
    code: "SOCC",
    icon: "socc",
    longname: "SocialCoin",
    description: "SocialCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/socialcoin-socc/"
    }
},{
    name: "brat",
    code: "BRAT",
    icon: "brat",
    longname: "BROTHER",
    description: "BROTHER coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/brat/"
    }
},{
    name: "milocoin",
    code: "MILO",
    icon: "milo",
    longname: "MiloCoin",
    description: "MiloCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/milocoin/"
    }
},{
    name: "coupecoin",
    code: "COUPE",
    icon: "coupe",
    longname: "Coupecoin",
    description: "Coupecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/coupecoin/"
    }
},{
    name: "dalecoin",
    code: "DALC",
    icon: "dalc",
    longname: "Dalecoin",
    description: "Dalecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dalecoin/"
    }
},{
    name: "grimcoin",
    code: "GRIM",
    icon: "grim",
    longname: "Grimcoin",
    description: "Grimcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/grimcoin/"
    }
},{
    name: "olympic",
    code: "OLMP",
    icon: "olmp",
    longname: "Olympic",
    description: "Olympic coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/olympic/"
    }
},{
    name: "virtacoin",
    code: "VTA",
    icon: "vta",
    longname: "Virtacoin",
    description: "Virtacoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/virtacoin/"
    }
},{
    name: "mustangcoin",
    code: "MST",
    icon: "mst",
    longname: "MustangCoin",
    description: "MustangCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mustangcoin/"
    }
},{
    name: "bitf",
    code: "BITF",
    icon: "bitf",
    longname: "BitF",
    description: "BitF coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitf/"
    }
},{
    name: "prime-xi",
    code: "PXI",
    icon: "pxi",
    longname: "Prime-XI",
    description: "Prime-XI coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/prime-xi/"
    }
},{
    name: "fujinto",
    code: "NTO",
    icon: "nto",
    longname: "Fujinto",
    description: "Fujinto coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fujinto/"
    }
},{
    name: "plncoin",
    code: "PLNC",
    icon: "plnc",
    longname: "PLNcoin",
    description: "PLNcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/plncoin/"
    }
},{
    name: "jiyo-old",
    code: "JIYO",
    icon: "jiyo",
    longname: "Jiyo [OLD]",
    description: "Jiyo [OLD] coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/jiyo-old/"
    }
},{
    name: "ecocoin",
    code: "ECO",
    icon: "eco",
    longname: "EcoCoin",
    description: "EcoCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ecocoin/"
    }
},{
    name: "alpha-coin",
    code: "APC",
    icon: "apc",
    longname: "Alpha Coin",
    description: "Alpha Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/alpha-coin/"
    }
},{
    name: "bowscoin",
    code: "BSC",
    icon: "bsc",
    longname: "BowsCoin",
    description: "BowsCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bowscoin/"
    }
},{
    name: "bitvolt",
    code: "VOLT",
    icon: "volt",
    longname: "Bitvolt",
    description: "Bitvolt coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitvolt/"
    }
},{
    name: "anarchistsprime",
    code: "ACP",
    icon: "acp",
    longname: "AnarchistsPrime",
    description: "AnarchistsPrime coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/anarchistsprime/"
    }
},{
    name: "arbit",
    code: "ARB-1",
    icon: "arb-1",
    longname: "ARbit",
    description: "ARbit coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/arbit/"
    }
},{
    name: "luna-coin",
    code: "LUNA",
    icon: "luna",
    longname: "Luna Coin",
    description: "Luna Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/luna-coin/"
    }
},{
    name: "playercoin",
    code: "PLACO",
    icon: "placo",
    longname: "PlayerCoin",
    description: "PlayerCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/playercoin/"
    }
},{
    name: "royal-kingdom-coin",
    code: "RKC-1",
    icon: "rkc-1",
    longname: "Royal Kingdom Coin",
    description: "Royal Kingdom Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/royal-kingdom-coin/"
    }
},{
    name: "coimatic-2",
    code: "CTIC2",
    icon: "ctic2",
    longname: "Coimatic 2.0",
    description: "Coimatic 2.0 coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/coimatic-2/"
    }
},{
    name: "dollar-online",
    code: "DOLLAR",
    icon: "dollar",
    longname: "Dollar Online",
    description: "Dollar Online coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dollar-online/"
    }
},{
    name: "litecoin-ultra",
    code: "LTCU",
    icon: "ltcu",
    longname: "LiteCoin Ultra",
    description: "LiteCoin Ultra coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/litecoin-ultra/"
    }
},{
    name: "benjirolls",
    code: "BENJI",
    icon: "benji",
    longname: "BenjiRolls",
    description: "BenjiRolls coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/benjirolls/"
    }
},{
    name: "wild-beast-block",
    code: "WBB",
    icon: "wbb",
    longname: "Wild Beast Block",
    description: "Wild Beast Block coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/wild-beast-block/"
    }
},{
    name: "rocketcoin",
    code: "ROCK",
    icon: "rock",
    longname: "Rocketcoin",
    description: "Rocketcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rocketcoin/"
    }
},{
    name: "simmitri",
    code: "SIM",
    icon: "sim",
    longname: "Simmitri",
    description: "Simmitri coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/simmitri/"
    }
},{
    name: "veltor",
    code: "VLT",
    icon: "vlt",
    longname: "Veltor",
    description: "Veltor coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/veltor/"
    }
},{
    name: "concoin",
    code: "CONX",
    icon: "conx",
    longname: "Concoin",
    description: "Concoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/concoin/"
    }
},{
    name: "songcoin",
    code: "SONG",
    icon: "song",
    longname: "SongCoin",
    description: "SongCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/songcoin/"
    }
},{
    name: "geertcoin",
    code: "GEERT",
    icon: "geert",
    longname: "GeertCoin",
    description: "GeertCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/geertcoin/"
    }
},{
    name: "ourcoin",
    code: "OUR",
    icon: "our",
    longname: "Ourcoin",
    description: "Ourcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ourcoin/"
    }
},{
    name: "coinonat",
    code: "CXT",
    icon: "cxt",
    longname: "Coinonat",
    description: "Coinonat coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/coinonat/"
    }
},{
    name: "benz",
    code: "BENZ",
    icon: "benz",
    longname: "Benz",
    description: "Benz coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/benz/"
    }
},{
    name: "save-and-gain",
    code: "SANDG",
    icon: "sandg",
    longname: "Save and Gain",
    description: "Save and Gain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/save-and-gain/"
    }
},{
    name: "vaperscoin",
    code: "VPRC",
    icon: "vprc",
    longname: "VapersCoin",
    description: "VapersCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vaperscoin/"
    }
},{
    name: "project-x",
    code: "NANOX",
    icon: "nanox",
    longname: "Project-X",
    description: "Project-X coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/project-x/"
    }
},{
    name: "bitspace",
    code: "BSX",
    icon: "bsx",
    longname: "Bitspace",
    description: "Bitspace coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitspace/"
    }
},{
    name: "ponzicoin",
    code: "PONZI",
    icon: "ponzi",
    longname: "PonziCoin",
    description: "PonziCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ponzicoin/"
    }
},{
    name: "interzone",
    code: "ITZ",
    icon: "itz",
    longname: "Interzone",
    description: "Interzone coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/interzone/"
    }
},{
    name: "coimatic-3",
    code: "CTIC3",
    icon: "ctic3",
    longname: "Coimatic 3.0",
    description: "Coimatic 3.0 coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/coimatic-3/"
    }
},{
    name: "magnum",
    code: "MGM",
    icon: "mgm",
    longname: "Magnum",
    description: "Magnum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/magnum/"
    }
},{
    name: "argus",
    code: "ARGUS",
    icon: "argus",
    longname: "Argus",
    description: "Argus coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/argus/"
    }
},{
    name: "shade-token",
    code: "SHADE",
    icon: "shade",
    longname: "SHADE Token",
    description: "SHADE Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/shade-token/"
    }
},{
    name: "cjs",
    code: "CJS",
    icon: "cjs",
    longname: "CJs",
    description: "CJs coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cjs/"
    }
},{
    name: "poly-ai",
    code: "AI",
    icon: "ai",
    longname: "POLY AI",
    description: "POLY AI coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/poly-ai/"
    }
},{
    name: "harmonycoin-hmc",
    code: "HMC-1",
    icon: "hmc-1",
    longname: "HarmonyCoin",
    description: "HarmonyCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/harmonycoin-hmc/"
    }
},{
    name: "yenten",
    code: "YTN",
    icon: "ytn",
    longname: "YENTEN",
    description: "YENTEN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/yenten/"
    }
},{
    name: "ckusd",
    code: "CKUSD",
    icon: "ckusd",
    longname: "CK USD",
    description: "CK USD coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ckusd/"
    }
},{
    name: "zb",
    code: "ZB",
    icon: "zb",
    longname: "ZB",
    description: "ZB coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zb/"
    }
},{
    name: "infinity-economics",
    code: "XIN-1",
    icon: "xin-1",
    longname: "Infinity Economics",
    description: "Infinity Economics coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/infinity-economics/"
    }
},{
    name: "mir-coin",
    code: "MIR",
    icon: "mir",
    longname: "MIR COIN",
    description: "MIR COIN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mir-coin/"
    }
},{
    name: "project-pai",
    code: "PAI-1",
    icon: "pai-1",
    longname: "Project Pai",
    description: "Project Pai coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/project-pai/"
    }
},{
    name: "alibabacoin",
    code: "ABBC",
    icon: "abbc",
    longname: "Alibabacoin",
    description: "Alibabacoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/alibabacoin/"
    }
},{
    name: "atlas-protocol",
    code: "ATP",
    icon: "atp",
    longname: "Atlas Protocol",
    description: "Atlas Protocol coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/atlas-protocol/"
    }
},{
    name: "bumo",
    code: "BU",
    icon: "bu",
    longname: "BUMO",
    description: "BUMO coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bumo/"
    }
},{
    name: "the-midas-touch-gold",
    code: "TMTG",
    icon: "tmtg",
    longname: "The Midas Touch Gold",
    description: "The Midas Touch Gold coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/the-midas-touch-gold/"
    }
},{
    name: "hycon",
    code: "HYC",
    icon: "hyc",
    longname: "HYCON",
    description: "HYCON coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hycon/"
    }
},{
    name: "platincoin",
    code: "PLC-1",
    icon: "plc-1",
    longname: "PLATINCOIN",
    description: "PLATINCOIN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/platincoin/"
    }
},{
    name: "filecoin",
    code: "FIL",
    icon: "fil",
    longname: "Filecoin [Futures]",
    description: "Filecoin [Futures] coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/filecoin/"
    }
},{
    name: "cwv-chain",
    code: "CWV",
    icon: "cwv",
    longname: "CWV Chain",
    description: "CWV Chain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cwv-chain/"
    }
},{
    name: "playcoin",
    code: "PLY-1",
    icon: "ply-1",
    longname: "PlayCoin [QRC20]",
    description: "PlayCoin [QRC20] coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/playcoin/"
    }
},{
    name: "maximine-coin",
    code: "MXM",
    icon: "mxm",
    longname: "Maximine Coin",
    description: "Maximine Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/maximine-coin/"
    }
},{
    name: "know",
    code: "KNOW",
    icon: "know",
    longname: "KNOW",
    description: "KNOW coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/know/"
    }
},{
    name: "davinci-coin",
    code: "DAC",
    icon: "dac",
    longname: "Davinci Coin",
    description: "Davinci Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/davinci-coin/"
    }
},{
    name: "digifinextoken",
    code: "DFT-1",
    icon: "dft-1",
    longname: "DigiFinexToken",
    description: "DigiFinexToken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/digifinextoken/"
    }
},{
    name: "shinechain",
    code: "SHE",
    icon: "she",
    longname: "ShineChain",
    description: "ShineChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/shinechain/"
    }
},{
    name: "ether-zero",
    code: "ETZ",
    icon: "etz",
    longname: "Ether Zero",
    description: "Ether Zero coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ether-zero/"
    }
},{
    name: "game-stars",
    code: "GST",
    icon: "gst",
    longname: "Game Stars",
    description: "Game Stars coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/game-stars/"
    }
},{
    name: "edu-coin",
    code: "EDU",
    icon: "edu",
    longname: "EduCoin",
    description: "EduCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/edu-coin/"
    }
},{
    name: "hyperquant",
    code: "HQT",
    icon: "hqt",
    longname: "HyperQuant",
    description: "HyperQuant coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hyperquant/"
    }
},{
    name: "karatgold-coin",
    code: "KBC",
    icon: "kbc",
    longname: "Karatgold Coin",
    description: "Karatgold Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/karatgold-coin/"
    }
},{
    name: "fairgame",
    code: "FAIR-1",
    icon: "fair-1",
    longname: "FairGame",
    description: "FairGame coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fairgame/"
    }
},{
    name: "visionx",
    code: "VNX",
    icon: "vnx",
    longname: "VisionX",
    description: "VisionX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/visionx/"
    }
},{
    name: "usechain-token",
    code: "USE",
    icon: "use",
    longname: "Usechain Token",
    description: "Usechain Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/usechain-token/"
    }
},{
    name: "hitchain",
    code: "HIT",
    icon: "hit",
    longname: "HitChain",
    description: "HitChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hitchain/"
    }
},{
    name: "penta",
    code: "PNT",
    icon: "pnt",
    longname: "Penta",
    description: "Penta coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/penta/"
    }
},{
    name: "dacc",
    code: "DACC",
    icon: "dacc",
    longname: "DACC",
    description: "DACC coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dacc/"
    }
},{
    name: "molecular-future",
    code: "MOF",
    icon: "mof",
    longname: "Molecular Future",
    description: "Molecular Future coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/molecular-future/"
    }
},{
    name: "vestchain",
    code: "VEST",
    icon: "vest",
    longname: "VestChain",
    description: "VestChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vestchain/"
    }
},{
    name: "super-bitcoin",
    code: "SBTC",
    icon: "sbtc",
    longname: "Super Bitcoin",
    description: "Super Bitcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/super-bitcoin/"
    }
},{
    name: "topchain",
    code: "TOPC",
    icon: "topc",
    longname: "TopChain",
    description: "TopChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/topchain/"
    }
},{
    name: "palletone",
    code: "PTN",
    icon: "ptn",
    longname: "PalletOne",
    description: "PalletOne coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/palletone/"
    }
},{
    name: "ong",
    code: "ONG-1",
    icon: "ong-1",
    longname: "ONG",
    description: "ONG coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ong/"
    }
},{
    name: "starchain",
    code: "STC",
    icon: "stc",
    longname: "StarChain",
    description: "StarChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/starchain/"
    }
},{
    name: "lightning-bitcoin",
    code: "LBTC-1",
    icon: "lbtc-1",
    longname: "Lightning Bitcoin",
    description: "Lightning Bitcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/lightning-bitcoin/"
    }
},{
    name: "crypticcoin",
    code: "CRYP",
    icon: "cryp",
    longname: "CrypticCoin",
    description: "CrypticCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/crypticcoin/"
    }
},{
    name: "mex",
    code: "MEX",
    icon: "mex",
    longname: "MEX",
    description: "MEX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mex/"
    }
},{
    name: "themis",
    code: "GET-1",
    icon: "get-1",
    longname: "Themis",
    description: "Themis coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/themis/"
    }
},{
    name: "stacs",
    code: "STACS",
    icon: "stacs",
    longname: "STACS",
    description: "STACS coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/stacs/"
    }
},{
    name: "lightchain",
    code: "LIGHT",
    icon: "light",
    longname: "LightChain",
    description: "LightChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/lightchain/"
    }
},{
    name: "segwit2x",
    code: "B2X",
    icon: "b2x",
    longname: "SegWit2x",
    description: "SegWit2x coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/segwit2x/"
    }
},{
    name: "eligma-token",
    code: "ELI",
    icon: "eli",
    longname: "Eligma Token",
    description: "Eligma Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/eligma-token/"
    }
},{
    name: "consentium",
    code: "CSM",
    icon: "csm",
    longname: "Consentium",
    description: "Consentium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/consentium/"
    }
},{
    name: "nos",
    code: "NOS",
    icon: "nos",
    longname: "nOS",
    description: "nOS coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nos/"
    }
},{
    name: "foin",
    code: "FOIN",
    icon: "foin",
    longname: "FOIN",
    description: "FOIN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/foin/"
    }
},{
    name: "mytoken",
    code: "MT",
    icon: "mt",
    longname: "MyToken",
    description: "MyToken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mytoken/"
    }
},{
    name: "volt",
    code: "ACDC",
    icon: "acdc",
    longname: "Volt",
    description: "Volt coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/volt/"
    }
},{
    name: "engine",
    code: "EGCC",
    icon: "egcc",
    longname: "Engine",
    description: "Engine coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/engine/"
    }
},{
    name: "beekan",
    code: "BKBT",
    icon: "bkbt",
    longname: "BeeKan",
    description: "BeeKan coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/beekan/"
    }
},{
    name: "insurchain",
    code: "INSUR",
    icon: "insur",
    longname: "InsurChain",
    description: "InsurChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/insurchain/"
    }
},{
    name: "intelligent-investment-chain",
    code: "IIC",
    icon: "iic",
    longname: "Intelligent Investment Chain",
    description: "Intelligent Investment Chain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/intelligent-investment-chain/"
    }
},{
    name: "vethor-token",
    code: "VTHO",
    icon: "vtho",
    longname: "VeThor Token",
    description: "VeThor Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vethor-token/"
    }
},{
    name: "futurocoin",
    code: "FTO",
    icon: "fto",
    longname: "FuturoCoin",
    description: "FuturoCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/futurocoin/"
    }
},{
    name: "coinmeet",
    code: "MEET",
    icon: "meet",
    longname: "CoinMeet",
    description: "CoinMeet coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/coinmeet/"
    }
},{
    name: "ofcoin",
    code: "OF",
    icon: "of",
    longname: "OFCOIN",
    description: "OFCOIN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ofcoin/"
    }
},{
    name: "essentia",
    code: "ESS",
    icon: "ess",
    longname: "Essentia",
    description: "Essentia coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/essentia/"
    }
},{
    name: "carat",
    code: "CARAT",
    icon: "carat",
    longname: "CARAT",
    description: "CARAT coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/carat/"
    }
},{
    name: "atlantis-blue-digital-token",
    code: "ABDT",
    icon: "abdt",
    longname: "Atlantis Blue Digital Token",
    description: "Atlantis Blue Digital Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/atlantis-blue-digital-token/"
    }
},{
    name: "wintoken",
    code: "WIN",
    icon: "win",
    longname: "WinToken",
    description: "WinToken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/wintoken/"
    }
},{
    name: "wiki-token",
    code: "WIKI",
    icon: "wiki",
    longname: "Wiki Token",
    description: "Wiki Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/wiki-token/"
    }
},{
    name: "dipnet",
    code: "DPN",
    icon: "dpn",
    longname: "DIPNET",
    description: "DIPNET coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dipnet/"
    }
},{
    name: "weth",
    code: "WETH",
    icon: "weth",
    longname: "WETH",
    description: "WETH coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/weth/"
    }
},{
    name: "influence-chain",
    code: "INC",
    icon: "inc",
    longname: "Influence Chain",
    description: "Influence Chain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/influence-chain/"
    }
},{
    name: "unlimitedip",
    code: "UIP",
    icon: "uip",
    longname: "UnlimitedIP",
    description: "UnlimitedIP coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/unlimitedip/"
    }
},{
    name: "ubique-chain-of-things",
    code: "UCT",
    icon: "uct",
    longname: "Ubique Chain Of Things",
    description: "Ubique Chain Of Things coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ubique-chain-of-things/"
    }
},{
    name: "united-bitcoin",
    code: "UBTC",
    icon: "ubtc",
    longname: "United Bitcoin",
    description: "United Bitcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/united-bitcoin/"
    }
},{
    name: "carblock",
    code: "CAR",
    icon: "car",
    longname: "CarBlock",
    description: "CarBlock coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/carblock/"
    }
},{
    name: "investdigital",
    code: "IDT",
    icon: "idt",
    longname: "InvestDigital",
    description: "InvestDigital coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/investdigital/"
    }
},{
    name: "globalvillage-ecosystem",
    code: "GVE",
    icon: "gve",
    longname: "Globalvillage Ecosystem",
    description: "Globalvillage Ecosystem coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/globalvillage-ecosystem/"
    }
},{
    name: "carlive-chain",
    code: "IOV",
    icon: "iov",
    longname: "Carlive Chain",
    description: "Carlive Chain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/carlive-chain/"
    }
},{
    name: "bitup-token",
    code: "BUT",
    icon: "but",
    longname: "BitUP Token",
    description: "BitUP Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitup-token/"
    }
},{
    name: "youlive-coin",
    code: "UC",
    icon: "uc",
    longname: "YouLive Coin",
    description: "YouLive Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/youlive-coin/"
    }
},{
    name: "exchange-union",
    code: "XUC",
    icon: "xuc",
    longname: "Exchange Union",
    description: "Exchange Union coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/exchange-union/"
    }
},{
    name: "cybereits",
    code: "CRE",
    icon: "cre",
    longname: "Cybereits",
    description: "Cybereits coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cybereits/"
    }
},{
    name: "stockchain",
    code: "SCC-1",
    icon: "scc-1",
    longname: "StockChain",
    description: "StockChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/stockchain/"
    }
},{
    name: "animation-vision-cash",
    code: "AVH",
    icon: "avh",
    longname: "Animation Vision Cash",
    description: "Animation Vision Cash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/animation-vision-cash/"
    }
},{
    name: "chex",
    code: "CHEX",
    icon: "chex",
    longname: "CHEX",
    description: "CHEX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/chex/"
    }
},{
    name: "aidos-kuneen",
    code: "ADK",
    icon: "adk",
    longname: "Aidos Kuneen",
    description: "Aidos Kuneen coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aidos-kuneen/"
    }
},{
    name: "promotion-coin",
    code: "PC",
    icon: "pc",
    longname: "Promotion Coin",
    description: "Promotion Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/promotion-coin/"
    }
},{
    name: "kwhcoin",
    code: "KWH",
    icon: "kwh",
    longname: "KWHCoin",
    description: "KWHCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kwhcoin/"
    }
},{
    name: "yuan-chain-coin",
    code: "YCC",
    icon: "ycc",
    longname: "Yuan Chain Coin",
    description: "Yuan Chain Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/yuan-chain-coin/"
    }
},{
    name: "you-coin",
    code: "YOU",
    icon: "you",
    longname: "YOU COIN",
    description: "YOU COIN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/you-coin/"
    }
},{
    name: "wxcoins",
    code: "WXC",
    icon: "wxc",
    longname: "WXCOINS",
    description: "WXCOINS coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/wxcoins/"
    }
},{
    name: "baasid",
    code: "BAAS",
    icon: "baas",
    longname: "BaaSid",
    description: "BaaSid coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/baasid/"
    }
},{
    name: "alchemint-standards",
    code: "SDS",
    icon: "sds",
    longname: "Alchemint Standards",
    description: "Alchemint Standards coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/alchemint-standards/"
    }
},{
    name: "bitcapitalvendor",
    code: "BCV",
    icon: "bcv",
    longname: "BitCapitalVendor",
    description: "BitCapitalVendor coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcapitalvendor/"
    }
},{
    name: "show",
    code: "SHOW",
    icon: "show",
    longname: "Show",
    description: "Show coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/show/"
    }
},{
    name: "wizbl",
    code: "WBL",
    icon: "wbl",
    longname: "WIZBL",
    description: "WIZBL coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/wizbl/"
    }
},{
    name: "key",
    code: "KEY-1",
    icon: "key-1",
    longname: "KEY",
    description: "KEY coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/key/"
    }
},{
    name: "internationalcryptox",
    code: "INCX",
    icon: "incx",
    longname: "InternationalCryptoX",
    description: "InternationalCryptoX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/internationalcryptox/"
    }
},{
    name: "twinkle",
    code: "TKT",
    icon: "tkt",
    longname: "Twinkle",
    description: "Twinkle coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/twinkle/"
    }
},{
    name: "master-contract-token",
    code: "MCT",
    icon: "mct",
    longname: "Master Contract Token",
    description: "Master Contract Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/master-contract-token/"
    }
},{
    name: "blockchain-quotations-index-token",
    code: "BQT",
    icon: "bqt",
    longname: "Blockchain Quotations Index Token",
    description: "Blockchain Quotations Index Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blockchain-quotations-index-token/"
    }
},{
    name: "hdac",
    code: "HDAC",
    icon: "hdac",
    longname: "Hdac",
    description: "Hdac coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hdac/"
    }
},{
    name: "bitcoinx",
    code: "BCX",
    icon: "bcx",
    longname: "BitcoinX",
    description: "BitcoinX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoinx/"
    }
},{
    name: "ti-value",
    code: "TV",
    icon: "tv",
    longname: "Ti-Value",
    description: "Ti-Value coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ti-value/"
    }
},{
    name: "dascoin",
    code: "DASC",
    icon: "dasc",
    longname: "DasCoin",
    description: "DasCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dascoin/"
    }
},{
    name: "wetoken",
    code: "WT",
    icon: "wt",
    longname: "WeToken",
    description: "WeToken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/wetoken/"
    }
},{
    name: "fundtoken",
    code: "FUNDZ",
    icon: "fundz",
    longname: "FundToken",
    description: "FundToken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fundtoken/"
    }
},{
    name: "bankera",
    code: "BNK",
    icon: "bnk",
    longname: "Bankera",
    description: "Bankera coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bankera/"
    }
},{
    name: "lemochain",
    code: "LEMO",
    icon: "lemo",
    longname: "LemoChain",
    description: "LemoChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/lemochain/"
    }
},{
    name: "gsenetwork",
    code: "GSE",
    icon: "gse",
    longname: "GSENetwork",
    description: "GSENetwork coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gsenetwork/"
    }
},{
    name: "experience-token",
    code: "EXT",
    icon: "ext",
    longname: "Experience Token",
    description: "Experience Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/experience-token/"
    }
},{
    name: "ors-group",
    code: "ORS-1",
    icon: "ors-1",
    longname: "ORS Group",
    description: "ORS Group coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ors-group/"
    }
},{
    name: "infinitecoin",
    code: "IFC",
    icon: "ifc",
    longname: "Infinitecoin",
    description: "Infinitecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/infinitecoin/"
    }
},{
    name: "vsportcoin",
    code: "VSC",
    icon: "vsc",
    longname: "vSportCoin",
    description: "vSportCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vsportcoin/"
    }
},{
    name: "empowr-coin",
    code: "EMPR",
    icon: "empr",
    longname: "empowr coin",
    description: "empowr coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/empowr-coin/"
    }
},{
    name: "msd",
    code: "MSD",
    icon: "msd",
    longname: "MSD",
    description: "MSD coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/msd/"
    }
},{
    name: "moving-cloud-coin",
    code: "MCC",
    icon: "mcc",
    longname: "Moving Cloud Coin",
    description: "Moving Cloud Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/moving-cloud-coin/"
    }
},{
    name: "ipchain",
    code: "IPC",
    icon: "ipc",
    longname: "IPChain",
    description: "IPChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ipchain/"
    }
},{
    name: "quasarcoin",
    code: "QAC",
    icon: "qac",
    longname: "Quasarcoin",
    description: "Quasarcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/quasarcoin/"
    }
},{
    name: "valuecybertoken",
    code: "VCT",
    icon: "vct",
    longname: "ValueCyberToken",
    description: "ValueCyberToken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/valuecybertoken/"
    }
},{
    name: "bingocoin",
    code: "BOC",
    icon: "boc",
    longname: "BingoCoin",
    description: "BingoCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bingocoin/"
    }
},{
    name: "dws",
    code: "DWS",
    icon: "dws",
    longname: "DWS",
    description: "DWS coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dws/"
    }
},{
    name: "pixie-coin",
    code: "PXC-1",
    icon: "pxc-1",
    longname: "Pixie Coin",
    description: "Pixie Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pixie-coin/"
    }
},{
    name: "deex",
    code: "DEEX",
    icon: "deex",
    longname: "DEEX",
    description: "DEEX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/deex/"
    }
},{
    name: "iconiq-lab-token",
    code: "ICNQ",
    icon: "icnq",
    longname: "Iconiq Lab Token",
    description: "Iconiq Lab Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/iconiq-lab-token/"
    }
},{
    name: "oceanchain",
    code: "OC",
    icon: "oc",
    longname: "OceanChain",
    description: "OceanChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/oceanchain/"
    }
},{
    name: "cryptaldash",
    code: "CRD",
    icon: "crd",
    longname: "CryptalDash",
    description: "CryptalDash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cryptaldash/"
    }
},{
    name: "win-coin",
    code: "WC",
    icon: "wc",
    longname: "WINCOIN",
    description: "WINCOIN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/win-coin/"
    }
},{
    name: "couchain",
    code: "COU",
    icon: "cou",
    longname: "Couchain",
    description: "Couchain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/couchain/"
    }
},{
    name: "seer",
    code: "SEER",
    icon: "seer",
    longname: "SEER",
    description: "SEER coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/seer/"
    }
},{
    name: "encryptotel-eth",
    code: "ETT-1",
    icon: "ett-1",
    longname: "EncryptoTel [ETH]",
    description: "EncryptoTel [ETH] coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/encryptotel-eth/"
    }
},{
    name: "ilcoin",
    code: "ILC",
    icon: "ilc",
    longname: "ILCoin",
    description: "ILCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ilcoin/"
    }
},{
    name: "shopzcoin",
    code: "SZC",
    icon: "szc",
    longname: "ShopZcoin",
    description: "ShopZcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/shopzcoin/"
    }
},{
    name: "escrowcoin",
    code: "ESCO",
    icon: "esco",
    longname: "EscrowCoin",
    description: "EscrowCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/escrowcoin/"
    }
},{
    name: "tcoin",
    code: "TCN",
    icon: "tcn",
    longname: "TCOIN",
    description: "TCOIN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tcoin/"
    }
},{
    name: "starcointv",
    code: "KST",
    icon: "kst",
    longname: "StarCoin",
    description: "StarCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/starcointv/"
    }
},{
    name: "comsa-eth",
    code: "CMS",
    icon: "cms",
    longname: "COMSA [ETH]",
    description: "COMSA [ETH] coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/comsa-eth/"
    }
},{
    name: "read",
    code: "READ",
    icon: "read",
    longname: "Read",
    description: "Read coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/read/"
    }
},{
    name: "beat",
    code: "BEAT",
    icon: "beat",
    longname: "BEAT",
    description: "BEAT coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/beat/"
    }
},{
    name: "coni",
    code: "CONI",
    icon: "coni",
    longname: "Coni",
    description: "Coni coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/coni/"
    }
},{
    name: "otcbtc-token",
    code: "OTB",
    icon: "otb",
    longname: "OTCBTC Token",
    description: "OTCBTC Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/otcbtc-token/"
    }
},{
    name: "carinet",
    code: "CIT",
    icon: "cit",
    longname: "CariNet",
    description: "CariNet coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/carinet/"
    }
},{
    name: "ejoy",
    code: "EJOY",
    icon: "ejoy",
    longname: "EJOY",
    description: "EJOY coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ejoy/"
    }
},{
    name: "asura-coin",
    code: "ASA",
    icon: "asa",
    longname: "Asura Coin",
    description: "Asura Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/asura-coin/"
    }
},{
    name: "gazecoin",
    code: "GZE",
    icon: "gze",
    longname: "GazeCoin",
    description: "GazeCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gazecoin/"
    }
},{
    name: "dragon-coins",
    code: "DRG",
    icon: "drg",
    longname: "Dragon Coins",
    description: "Dragon Coins coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dragon-coins/"
    }
},{
    name: "ultra-salescoud",
    code: "UST",
    icon: "ust",
    longname: "Ultra Salescloud",
    description: "Ultra Salescloud coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ultra-salescoud/"
    }
},{
    name: "monero-classic",
    code: "XMC",
    icon: "xmc",
    longname: "Monero Classic",
    description: "Monero Classic coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/monero-classic/"
    }
},{
    name: "thingsoperatingsystem",
    code: "TOS",
    icon: "tos",
    longname: "ThingsOperatingSystem",
    description: "ThingsOperatingSystem coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/thingsoperatingsystem/"
    }
},{
    name: "etherinc",
    code: "ETI",
    icon: "eti",
    longname: "EtherInc",
    description: "EtherInc coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/etherinc/"
    }
},{
    name: "delizia",
    code: "DELIZ",
    icon: "deliz",
    longname: "Delizia",
    description: "Delizia coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/delizia/"
    }
},{
    name: "microbitcoin",
    code: "MBC",
    icon: "mbc",
    longname: "MicroBitcoin",
    description: "MicroBitcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/microbitcoin/"
    }
},{
    name: "darkpaycoin",
    code: "DKPC",
    icon: "dkpc",
    longname: "DarkPayCoin",
    description: "DarkPayCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/darkpaycoin/"
    }
},{
    name: "bitcoin-zero",
    code: "BZX",
    icon: "bzx",
    longname: "Bitcoin Zero",
    description: "Bitcoin Zero coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoin-zero/"
    }
},{
    name: "comsa-xem",
    code: "CMS-1",
    icon: "cms-1",
    longname: "COMSA [XEM]",
    description: "COMSA [XEM] coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/comsa-xem/"
    }
},{
    name: "messe-token",
    code: "MESSE",
    icon: "messe",
    longname: "MESSE TOKEN",
    description: "MESSE TOKEN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/messe-token/"
    }
},{
    name: "maggie",
    code: "MAG",
    icon: "mag",
    longname: "Maggie",
    description: "Maggie coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/maggie/"
    }
},{
    name: "ordocoin",
    code: "RDC",
    icon: "rdc",
    longname: "Ordocoin",
    description: "Ordocoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ordocoin/"
    }
},{
    name: "content-and-ad-network",
    code: "CAN-1",
    icon: "can-1",
    longname: "Content and AD Network",
    description: "Content and AD Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/content-and-ad-network/"
    }
},{
    name: "pressone",
    code: "PRS",
    icon: "prs",
    longname: "PressOne",
    description: "PressOne coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pressone/"
    }
},{
    name: "newstoken",
    code: "NEWOS",
    icon: "newos",
    longname: "NewsToken",
    description: "NewsToken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/newstoken/"
    }
},{
    name: "hybrid-block",
    code: "HYB",
    icon: "hyb",
    longname: "Hybrid Block",
    description: "Hybrid Block coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hybrid-block/"
    }
},{
    name: "rrcoin",
    code: "RRC",
    icon: "rrc",
    longname: "RRCoin",
    description: "RRCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rrcoin/"
    }
},{
    name: "incodium",
    code: "INCO",
    icon: "inco",
    longname: "Incodium",
    description: "Incodium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/incodium/"
    }
},{
    name: "paws-fund",
    code: "PAWS",
    icon: "paws",
    longname: "PAWS Fund",
    description: "PAWS Fund coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/paws-fund/"
    }
},{
    name: "clubcoin",
    code: "CLUB",
    icon: "club",
    longname: "ClubCoin",
    description: "ClubCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/clubcoin/"
    }
},{
    name: "sigmacoin",
    code: "SIGMA",
    icon: "sigma",
    longname: "SIGMAcoin",
    description: "SIGMAcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sigmacoin/"
    }
},{
    name: "anon",
    code: "ANON",
    icon: "anon",
    longname: "ANON",
    description: "ANON coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/anon/"
    }
},{
    name: "eosblack",
    code: "BLACK",
    icon: "black",
    longname: "eosBLACK",
    description: "eosBLACK coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/eosblack/"
    }
},{
    name: "bitcoin-file",
    code: "BIFI",
    icon: "bifi",
    longname: "Bitcoin File",
    description: "Bitcoin File coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoin-file/"
    }
},{
    name: "commerce-data-connection",
    code: "CDC",
    icon: "cdc",
    longname: "Commerce Data Connection",
    description: "Commerce Data Connection coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/commerce-data-connection/"
    }
},{
    name: "bitnation",
    code: "XPAT",
    icon: "xpat",
    longname: "Bitnation",
    description: "Bitnation coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitnation/"
    }
},{
    name: "blockchain-certified-data-token",
    code: "BCDT",
    icon: "bcdt",
    longname: "Blockchain Certified Data Token",
    description: "Blockchain Certified Data Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blockchain-certified-data-token/"
    }
},{
    name: "crypto-harbor-exchange",
    code: "CHE",
    icon: "che",
    longname: "Crypto Harbor Exchange",
    description: "Crypto Harbor Exchange coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/crypto-harbor-exchange/"
    }
},{
    name: "nerva",
    code: "XNV",
    icon: "xnv",
    longname: "Nerva",
    description: "Nerva coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nerva/"
    }
},{
    name: "kingxchain",
    code: "KXC",
    icon: "kxc",
    longname: "KingXChain",
    description: "KingXChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kingxchain/"
    }
},{
    name: "social-lending-token",
    code: "SLT-1",
    icon: "slt-1",
    longname: "Social Lending Token",
    description: "Social Lending Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/social-lending-token/"
    }
},{
    name: "xtrd",
    code: "XTRD",
    icon: "xtrd",
    longname: "XTRD",
    description: "XTRD coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/xtrd/"
    }
},{
    name: "sopay",
    code: "SOP",
    icon: "sop",
    longname: "SoPay",
    description: "SoPay coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sopay/"
    }
},{
    name: "celsius",
    code: "CEL",
    icon: "cel",
    longname: "Celsius",
    description: "Celsius coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/celsius/"
    }
},{
    name: "ethereum-meta",
    code: "ETHM",
    icon: "ethm",
    longname: "Ethereum Meta",
    description: "Ethereum Meta coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ethereum-meta/"
    }
},{
    name: "jingtum-tech",
    code: "SWTC",
    icon: "swtc",
    longname: "Jingtum Tech",
    description: "Jingtum Tech coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/jingtum-tech/"
    }
},{
    name: "veridocglobal",
    code: "VDG",
    icon: "vdg",
    longname: "VeriDocGlobal",
    description: "VeriDocGlobal coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/veridocglobal/"
    }
},{
    name: "aware",
    code: "AT",
    icon: "at",
    longname: "AWARE",
    description: "AWARE coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aware/"
    }
},{
    name: "atidium",
    code: "ATD",
    icon: "atd",
    longname: "Atidium",
    description: "Atidium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/atidium/"
    }
},{
    name: "cobrabytes",
    code: "COBRA",
    icon: "cobra",
    longname: "Cobrabytes",
    description: "Cobrabytes coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cobrabytes/"
    }
},{
    name: "acchain",
    code: "ACC-2",
    icon: "acc-2",
    longname: "ACChain",
    description: "ACChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/acchain/"
    }
},{
    name: "medibit",
    code: "MEDIBIT",
    icon: "medibit",
    longname: "MediBit",
    description: "MediBit coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/medibit/"
    }
},{
    name: "future1coin",
    code: "F1C",
    icon: "f1c",
    longname: "Future1coin",
    description: "Future1coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/future1coin/"
    }
},{
    name: "endorsit",
    code: "EDS",
    icon: "eds",
    longname: "Endorsit",
    description: "Endorsit coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/endorsit/"
    }
},{
    name: "blockcdn",
    code: "BCDN",
    icon: "bcdn",
    longname: "BlockCDN",
    description: "BlockCDN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blockcdn/"
    }
},{
    name: "embercoin",
    code: "EMB",
    icon: "emb",
    longname: "EmberCoin",
    description: "EmberCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/embercoin/"
    }
},{
    name: "x12-coin",
    code: "X12",
    icon: "x12",
    longname: "X12 Coin",
    description: "X12 Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/x12-coin/"
    }
},{
    name: "candy",
    code: "CANDY",
    icon: "candy",
    longname: "Candy",
    description: "Candy coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/candy/"
    }
},{
    name: "monero-original",
    code: "XMO",
    icon: "xmo",
    longname: "Monero Original",
    description: "Monero Original coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/monero-original/"
    }
},{
    name: "graviocoin",
    code: "GIO",
    icon: "gio",
    longname: "Graviocoin",
    description: "Graviocoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/graviocoin/"
    }
},{
    name: "nuggets",
    code: "NUG",
    icon: "nug",
    longname: "Nuggets",
    description: "Nuggets coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nuggets/"
    }
},{
    name: "haracoin",
    code: "HRC",
    icon: "hrc",
    longname: "Haracoin",
    description: "Haracoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/haracoin/"
    }
},{
    name: "bitnautic-token",
    code: "BTNT",
    icon: "btnt",
    longname: "BitNautic Token",
    description: "BitNautic Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitnautic-token/"
    }
},{
    name: "budbo",
    code: "BUBO",
    icon: "bubo",
    longname: "Budbo",
    description: "Budbo coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/budbo/"
    }
},{
    name: "cedex-coin",
    code: "CEDEX",
    icon: "cedex",
    longname: "CEDEX Coin",
    description: "CEDEX Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cedex-coin/"
    }
},{
    name: "mobilinktoken",
    code: "MOLK",
    icon: "molk",
    longname: "MobilinkToken",
    description: "MobilinkToken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mobilinktoken/"
    }
},{
    name: "cmitcoin",
    code: "CMIT",
    icon: "cmit",
    longname: "CMITCOIN",
    description: "CMITCOIN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cmitcoin/"
    }
},{
    name: "snipcoin",
    code: "SNIP",
    icon: "snip",
    longname: "SnipCoin",
    description: "SnipCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/snipcoin/"
    }
},{
    name: "savenode",
    code: "SNO",
    icon: "sno",
    longname: "SaveNode",
    description: "SaveNode coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/savenode/"
    }
},{
    name: "invictus-hyperion-fund",
    code: "IHF",
    icon: "ihf",
    longname: "Invictus Hyperion Fund",
    description: "Invictus Hyperion Fund coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/invictus-hyperion-fund/"
    }
},{
    name: "esports-token",
    code: "EST",
    icon: "est",
    longname: "Esports Token",
    description: "Esports Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/esports-token/"
    }
},{
    name: "elliot-coin",
    code: "ELLI",
    icon: "elli",
    longname: "Elliot Coin",
    description: "Elliot Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/elliot-coin/"
    }
},{
    name: "valuto",
    code: "VLU",
    icon: "vlu",
    longname: "Valuto",
    description: "Valuto coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/valuto/"
    }
},{
    name: "gamechain",
    code: "GCS",
    icon: "gcs",
    longname: "GameChain System",
    description: "GameChain System coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gamechain/"
    }
},{
    name: "xrt-token",
    code: "XRT",
    icon: "xrt",
    longname: "XRT Token",
    description: "XRT Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/xrt-token/"
    }
},{
    name: "bitcoin-god",
    code: "GOD",
    icon: "god",
    longname: "Bitcoin God",
    description: "Bitcoin God coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoin-god/"
    }
},{
    name: "meetone",
    code: "MEETONE",
    icon: "meetone",
    longname: "MEET.ONE",
    description: "MEET.ONE coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/meetone/"
    }
},{
    name: "nam-coin",
    code: "NAM",
    icon: "nam",
    longname: "NAM COIN",
    description: "NAM COIN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nam-coin/"
    }
},{
    name: "coin2play",
    code: "C2P",
    icon: "c2p",
    longname: "Coin2Play",
    description: "Coin2Play coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/coin2play/"
    }
},{
    name: "terranova",
    code: "TER",
    icon: "ter",
    longname: "TerraNova",
    description: "TerraNova coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/terranova/"
    }
},{
    name: "lendroid-support-token",
    code: "LST",
    icon: "lst",
    longname: "Lendroid Support Token",
    description: "Lendroid Support Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/lendroid-support-token/"
    }
},{
    name: "cryptopiafeeshares",
    code: "CEFS",
    icon: "cefs",
    longname: "CryptopiaFeeShares",
    description: "CryptopiaFeeShares coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cryptopiafeeshares/"
    }
},{
    name: "golos-gold",
    code: "GBG",
    icon: "gbg",
    longname: "Golos Gold",
    description: "Golos Gold coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/golos-gold/"
    }
},{
    name: "contractnet",
    code: "CNET",
    icon: "cnet",
    longname: "ContractNet",
    description: "ContractNet coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/contractnet/"
    }
},{
    name: "yuki",
    code: "YUKI",
    icon: "yuki",
    longname: "YUKI",
    description: "YUKI coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/yuki/"
    }
},{
    name: "cardbuyers",
    code: "BCARD",
    icon: "bcard",
    longname: "CARDbuyers",
    description: "CARDbuyers coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cardbuyers/"
    }
},{
    name: "excaliburcoin",
    code: "EXC-1",
    icon: "exc-1",
    longname: "Excaliburcoin",
    description: "Excaliburcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/excaliburcoin/"
    }
},{
    name: "pandemia",
    code: "PNDM",
    icon: "pndm",
    longname: "Pandemia",
    description: "Pandemia coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pandemia/"
    }
},{
    name: "rubex-money",
    code: "RBMC",
    icon: "rbmc",
    longname: "Rubex Money",
    description: "Rubex Money coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rubex-money/"
    }
},{
    name: "hondaiscoin",
    code: "HNDC",
    icon: "hndc",
    longname: "HondaisCoin",
    description: "HondaisCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hondaiscoin/"
    }
},{
    name: "capdaxtoken",
    code: "XCD",
    icon: "xcd",
    longname: "CapdaxToken",
    description: "CapdaxToken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/capdaxtoken/"
    }
},{
    name: "pecunio",
    code: "PCO",
    icon: "pco",
    longname: "Pecunio",
    description: "Pecunio coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pecunio/"
    }
},{
    name: "plusonecoin",
    code: "PLUS1",
    icon: "plus1",
    longname: "PlusOneCoin",
    description: "PlusOneCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/plusonecoin/"
    }
},{
    name: "obxcoin",
    code: "OBX",
    icon: "obx",
    longname: "OBXcoin",
    description: "OBXcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/obxcoin/"
    }
},{
    name: "rabbitcoin",
    code: "RBBT",
    icon: "rbbt",
    longname: "RabbitCoin",
    description: "RabbitCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rabbitcoin/"
    }
},{
    name: "twist",
    code: "TWIST",
    icon: "twist",
    longname: "TWIST",
    description: "TWIST coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/twist/"
    }
},{
    name: "noir",
    code: "NOR",
    icon: "nor",
    longname: "Noir",
    description: "Noir coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/noir/"
    }
},{
    name: "idol-coin",
    code: "IDOL",
    icon: "idol",
    longname: "IDOL COIN",
    description: "IDOL COIN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/idol-coin/"
    }
},{
    name: "helper-search-token",
    code: "HSN",
    icon: "hsn",
    longname: "Helper Search Token",
    description: "Helper Search Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/helper-search-token/"
    }
},{
    name: "mooncoin",
    code: "MOON",
    icon: "moon",
    longname: "Mooncoin",
    description: "Mooncoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mooncoin/"
    }
},{
    name: "concierge-coin",
    code: "CCC",
    icon: "ccc",
    longname: "Concierge Coin",
    description: "Concierge Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/concierge-coin/"
    }
},{
    name: "fargocoin",
    code: "FRGC",
    icon: "frgc",
    longname: "Fargocoin",
    description: "Fargocoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fargocoin/"
    }
},{
    name: "coffeecoin",
    code: "CFC",
    icon: "cfc",
    longname: "CoffeeCoin",
    description: "CoffeeCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/coffeecoin/"
    }
},{
    name: "qube",
    code: "QUBE",
    icon: "qube",
    longname: "Qube",
    description: "Qube coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/qube/"
    }
},{
    name: "bastonet",
    code: "BSN",
    icon: "bsn",
    longname: "Bastonet",
    description: "Bastonet coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bastonet/"
    }
},{
    name: "mirq",
    code: "MRQ",
    icon: "mrq",
    longname: "MIRQ",
    description: "MIRQ coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mirq/"
    }
},{
    name: "record",
    code: "RCD",
    icon: "rcd",
    longname: "RECORD",
    description: "RECORD coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/record/"
    }
},{
    name: "stex",
    code: "STEX",
    icon: "stex",
    longname: "STEX",
    description: "STEX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/stex/"
    }
},{
    name: "omencoin",
    code: "OMEN",
    icon: "omen",
    longname: "OmenCoin",
    description: "OmenCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/omencoin/"
    }
},{
    name: "superior-coin",
    code: "SUP",
    icon: "sup",
    longname: "Superior Coin",
    description: "Superior Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/superior-coin/"
    }
},{
    name: "sphre-air",
    code: "XID",
    icon: "xid",
    longname: "Sphre AIR ",
    description: "Sphre AIR  coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sphre-air/"
    }
},{
    name: "internet-of-things",
    code: "XOT",
    icon: "xot",
    longname: "Internet of Things",
    description: "Internet of Things coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/internet-of-things/"
    }
},{
    name: "centaure",
    code: "CEN-1",
    icon: "cen-1",
    longname: "Centaure",
    description: "Centaure coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/centaure/"
    }
},{
    name: "rocket-pool",
    code: "RPL",
    icon: "rpl",
    longname: "Rocket Pool",
    description: "Rocket Pool coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rocket-pool/"
    }
},{
    name: "traid",
    code: "TRAID",
    icon: "traid",
    longname: "Traid",
    description: "Traid coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/traid/"
    }
},{
    name: "cottoncoin",
    code: "COTN",
    icon: "cotn",
    longname: "CottonCoin",
    description: "CottonCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cottoncoin/"
    }
},{
    name: "plexcoin",
    code: "PLX",
    icon: "plx",
    longname: "PlexCoin",
    description: "PlexCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/plexcoin/"
    }
},{
    name: "adenz",
    code: "DNZ",
    icon: "dnz",
    longname: "Adenz",
    description: "Adenz coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/adenz/"
    }
},{
    name: "corion",
    code: "COR",
    icon: "cor",
    longname: "CORION",
    description: "CORION coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/corion/"
    }
},{
    name: "dynamiccoin",
    code: "DMC",
    icon: "dmc",
    longname: "DynamicCoin",
    description: "DynamicCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dynamiccoin/"
    }
},{
    name: "btcmoon",
    code: "BTCM",
    icon: "btcm",
    longname: "BTCMoon",
    description: "BTCMoon coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/btcmoon/"
    }
},{
    name: "altcommunity-coin",
    code: "SONO",
    icon: "sono",
    longname: "SONO",
    description: "SONO coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/altcommunity-coin/"
    }
},{
    name: "halloween-coin",
    code: "HALLO",
    icon: "hallo",
    longname: "Halloween Coin",
    description: "Halloween Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/halloween-coin/"
    }
},{
    name: "blakestar",
    code: "ERA",
    icon: "era",
    longname: "ERA",
    description: "ERA coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blakestar/"
    }
},{
    name: "eplus-coin",
    code: "EPLUS",
    icon: "eplus",
    longname: "EPLUS Coin",
    description: "EPLUS Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/eplus-coin/"
    }
},{
    name: "first-bitcoin",
    code: "BIT-2",
    icon: "bit-2",
    longname: "First Bitcoin",
    description: "First Bitcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/first-bitcoin/"
    }
},{
    name: "quotient",
    code: "XQN",
    icon: "xqn",
    longname: "Quotient",
    description: "Quotient coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/quotient/"
    }
},{
    name: "animecoin",
    code: "ANI",
    icon: "ani",
    longname: "Animecoin",
    description: "Animecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/animecoin/"
    }
},{
    name: "zengold",
    code: "ZENGOLD",
    icon: "zengold",
    longname: "ZenGold",
    description: "ZenGold coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zengold/"
    }
},{
    name: "alphabitcoinfund",
    code: "ABC",
    icon: "abc",
    longname: "Alphabit",
    description: "Alphabit coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/alphabitcoinfund/"
    }
},{
    name: "bubble",
    code: "BUB",
    icon: "bub",
    longname: "Bubble",
    description: "Bubble coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bubble/"
    }
},{
    name: "labh-coin",
    code: "LABH",
    icon: "labh",
    longname: "Labh Coin",
    description: "Labh Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/labh-coin/"
    }
},{
    name: "proud-money",
    code: "PROUD",
    icon: "proud",
    longname: "PROUD Money",
    description: "PROUD Money coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/proud-money/"
    }
}];