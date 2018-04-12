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
    name: "ethereum",
    code: "ETH",
    icon: "eth",
    longname: "Ethereum",
    description: "Ethereum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ethereum/"
    }
},{
    name: "ripple",
    code: "XRP",
    icon: "xrp",
    longname: "Ripple",
    description: "Ripple coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ripple/"
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
    name: "cardano",
    code: "ADA",
    icon: "ada",
    longname: "Cardano",
    description: "Cardano coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cardano/"
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
    name: "neo",
    code: "NEO",
    icon: "neo",
    longname: "NEO",
    description: "NEO coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/neo/"
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
    name: "monero",
    code: "XMR",
    icon: "xmr",
    longname: "Monero",
    description: "Monero coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/monero/"
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
    name: "tron",
    code: "TRX",
    icon: "trx",
    longname: "TRON",
    description: "TRON coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tron/"
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
    name: "tether",
    code: "USDT",
    icon: "usdt",
    longname: "Tether",
    description: "Tether coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tether/"
    }
},{
    name: "vechain",
    code: "VEN",
    icon: "ven",
    longname: "VeChain",
    description: "VeChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vechain/"
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
    name: "binance-coin",
    code: "BNB",
    icon: "bnb",
    longname: "Binance Coin",
    description: "Binance Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/binance-coin/"
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
    name: "qtum",
    code: "QTUM",
    icon: "qtum",
    longname: "Qtum",
    description: "Qtum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/qtum/"
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
    name: "ontology",
    code: "ONT",
    icon: "ont",
    longname: "Ontology",
    description: "Ontology coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ontology/"
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
    name: "icon",
    code: "ICX",
    icon: "icx",
    longname: "ICON",
    description: "ICON coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/icon/"
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
    name: "zcash",
    code: "ZEC",
    icon: "zec",
    longname: "Zcash",
    description: "Zcash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zcash/"
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
    name: "nano",
    code: "NANO",
    icon: "nano",
    longname: "Nano",
    description: "Nano coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nano/"
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
    name: "wanchain",
    code: "WAN",
    icon: "wan",
    longname: "Wanchain",
    description: "Wanchain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/wanchain/"
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
    name: "populous",
    code: "PPT",
    icon: "ppt",
    longname: "Populous",
    description: "Populous coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/populous/"
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
    name: "digixdao",
    code: "DGD",
    icon: "dgd",
    longname: "DigixDAO",
    description: "DigixDAO coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/digixdao/"
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
    name: "siacoin",
    code: "SC",
    icon: "sc",
    longname: "Siacoin",
    description: "Siacoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/siacoin/"
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
    name: "decred",
    code: "DCR",
    icon: "dcr",
    longname: "Decred",
    description: "Decred coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/decred/"
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
    name: "rchain",
    code: "RHOC",
    icon: "rhoc",
    longname: "RChain",
    description: "RChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rchain/"
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
    name: "maker",
    code: "MKR",
    icon: "mkr",
    longname: "Maker",
    description: "Maker coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/maker/"
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
    name: "aeternity",
    code: "AE",
    icon: "ae",
    longname: "Aeternity",
    description: "Aeternity coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aeternity/"
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
    name: "status",
    code: "SNT",
    icon: "snt",
    longname: "Status",
    description: "Status coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/status/"
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
    name: "komodo",
    code: "KMD",
    icon: "kmd",
    longname: "Komodo",
    description: "Komodo coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/komodo/"
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
    name: "aion",
    code: "AION",
    icon: "aion",
    longname: "Aion",
    description: "Aion coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aion/"
    }
},{
    name: "hshare",
    code: "HSR",
    icon: "hsr",
    longname: "Hshare",
    description: "Hshare coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hshare/"
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
    name: "iostoken",
    code: "IOST",
    icon: "iost",
    longname: "IOStoken",
    description: "IOStoken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/iostoken/"
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
    name: "kucoin-shares",
    code: "KCS",
    icon: "kcs",
    longname: "KuCoin Shares",
    description: "KuCoin Shares coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kucoin-shares/"
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
    name: "waltonchain",
    code: "WTC",
    icon: "wtc",
    longname: "Waltonchain",
    description: "Waltonchain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/waltonchain/"
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
    name: "digibyte",
    code: "DGB",
    icon: "dgb",
    longname: "DigiByte",
    description: "DigiByte coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/digibyte/"
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
    name: "pivx",
    code: "PIVX",
    icon: "pivx",
    longname: "PIVX",
    description: "PIVX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pivx/"
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
    name: "basic-attention-token",
    code: "BAT",
    icon: "bat",
    longname: "Basic Attention Token",
    description: "Basic Attention Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/basic-attention-token/"
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
    name: "centrality",
    code: "CENNZ",
    icon: "cennz",
    longname: "Centrality",
    description: "Centrality coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/centrality/"
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
    name: "veritaseum",
    code: "VERI",
    icon: "veri",
    longname: "Veritaseum",
    description: "Veritaseum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/veritaseum/"
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
    name: "substratum",
    code: "SUB",
    icon: "sub",
    longname: "Substratum",
    description: "Substratum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/substratum/"
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
    name: "nebulas-token",
    code: "NAS",
    icon: "nas",
    longname: "Nebulas",
    description: "Nebulas coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nebulas-token/"
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
    name: "gas",
    code: "GAS",
    icon: "gas",
    longname: "Gas",
    description: "Gas coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gas/"
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
    name: "ethos",
    code: "ETHOS",
    icon: "ethos",
    longname: "Ethos",
    description: "Ethos coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ethos/"
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
    name: "mixin",
    code: "XIN",
    icon: "xin",
    longname: "Mixin",
    description: "Mixin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mixin/"
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
    name: "syscoin",
    code: "SYS",
    icon: "sys",
    longname: "Syscoin",
    description: "Syscoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/syscoin/"
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
    name: "byteball",
    code: "GBYTE",
    icon: "gbyte",
    longname: "Byteball Bytes",
    description: "Byteball Bytes coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/byteball/"
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
    name: "revain",
    code: "R",
    icon: "r",
    longname: "Revain",
    description: "Revain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/revain/"
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
    name: "reddcoin",
    code: "RDD",
    icon: "rdd",
    longname: "ReddCoin",
    description: "ReddCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/reddcoin/"
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
    name: "zcoin",
    code: "XZC",
    icon: "xzc",
    longname: "ZCoin",
    description: "ZCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zcoin/"
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
    name: "nucleus-vision",
    code: "NCASH",
    icon: "ncash",
    longname: "Nucleus Vision",
    description: "Nucleus Vision coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nucleus-vision/"
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
    name: "storm",
    code: "STORM",
    icon: "storm",
    longname: "Storm",
    description: "Storm coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/storm/"
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
    name: "chainlink",
    code: "LINK",
    icon: "link",
    longname: "ChainLink",
    description: "ChainLink coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/chainlink/"
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
    name: "enigma-project",
    code: "ENG",
    icon: "eng",
    longname: "Enigma",
    description: "Enigma coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/enigma-project/"
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
    name: "wax",
    code: "WAX",
    icon: "wax",
    longname: "WAX",
    description: "WAX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/wax/"
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
    name: "request-network",
    code: "REQ",
    icon: "req",
    longname: "Request Network",
    description: "Request Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/request-network/"
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
    name: "dentacoin",
    code: "DCN",
    icon: "dcn",
    longname: "Dentacoin",
    description: "Dentacoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dentacoin/"
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
    name: "fusion",
    code: "FSN",
    icon: "fsn",
    longname: "Fusion",
    description: "Fusion coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fusion/"
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
    name: "poa-network",
    code: "POA",
    icon: "poa",
    longname: "POA Network",
    description: "POA Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/poa-network/"
    }
},{
    name: "zencash",
    code: "ZEN",
    icon: "zen",
    longname: "ZenCash",
    description: "ZenCash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zencash/"
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
    name: "matrix-ai-network",
    code: "MAN",
    icon: "man",
    longname: "Matrix AI Network",
    description: "Matrix AI Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/matrix-ai-network/"
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
    name: "nexus",
    code: "NXS",
    icon: "nxs",
    longname: "Nexus",
    description: "Nexus coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nexus/"
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
    name: "civic",
    code: "CVC",
    icon: "cvc",
    longname: "Civic",
    description: "Civic coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/civic/"
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
    name: "vertcoin",
    code: "VTC",
    icon: "vtc",
    longname: "Vertcoin",
    description: "Vertcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vertcoin/"
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
    name: "decentraland",
    code: "MANA",
    icon: "mana",
    longname: "Decentraland",
    description: "Decentraland coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/decentraland/"
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
    name: "polymath-network",
    code: "POLY",
    icon: "poly",
    longname: "Polymath",
    description: "Polymath coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/polymath-network/"
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
    name: "gamecredits",
    code: "GAME",
    icon: "game",
    longname: "GameCredits",
    description: "GameCredits coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gamecredits/"
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
    name: "particl",
    code: "PART",
    icon: "part",
    longname: "Particl",
    description: "Particl coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/particl/"
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
    name: "ubiq",
    code: "UBQ",
    icon: "ubq",
    longname: "Ubiq",
    description: "Ubiq coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ubiq/"
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
    name: "gnosis-gno",
    code: "GNO",
    icon: "gno",
    longname: "Gnosis",
    description: "Gnosis coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gnosis-gno/"
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
    name: "singularitynet",
    code: "AGI",
    icon: "agi",
    longname: "SingularityNET",
    description: "SingularityNET coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/singularitynet/"
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
    name: "blocknet",
    code: "BLOCK",
    icon: "block",
    longname: "Blocknet",
    description: "Blocknet coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blocknet/"
    }
},{
    name: "monaco",
    code: "MCO",
    icon: "mco",
    longname: "Monaco",
    description: "Monaco coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/monaco/"
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
    name: "rlc",
    code: "RLC",
    icon: "rlc",
    longname: "iExec RLC",
    description: "iExec RLC coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rlc/"
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
    name: "time-new-bank",
    code: "TNB",
    icon: "tnb",
    longname: "Time New Bank",
    description: "Time New Bank coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/time-new-bank/"
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
    name: "arcblock",
    code: "ABT",
    icon: "abt",
    longname: "Arcblock",
    description: "Arcblock coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/arcblock/"
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
    name: "theta-token",
    code: "THETA",
    icon: "theta",
    longname: "Theta Token",
    description: "Theta Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/theta-token/"
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
    name: "sirin-labs-token",
    code: "SRN",
    icon: "srn",
    longname: "SIRIN LABS Token",
    description: "SIRIN LABS Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sirin-labs-token/"
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
    name: "minexcoin",
    code: "MNX",
    icon: "mnx",
    longname: "MinexCoin",
    description: "MinexCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/minexcoin/"
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
    name: "raiden-network-token",
    code: "RDN",
    icon: "rdn",
    longname: "Raiden Network Token",
    description: "Raiden Network Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/raiden-network-token/"
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
    name: "bluzelle",
    code: "BLZ",
    icon: "blz",
    longname: "Bluzelle",
    description: "Bluzelle coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bluzelle/"
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
    name: "aragon",
    code: "ANT",
    icon: "ant",
    longname: "Aragon",
    description: "Aragon coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aragon/"
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
    name: "pillar",
    code: "PLR",
    icon: "plr",
    longname: "Pillar",
    description: "Pillar coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pillar/"
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
    name: "nav-coin",
    code: "NAV",
    icon: "nav",
    longname: "NavCoin",
    description: "NavCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nav-coin/"
    }
},{
    name: "bitcoindark",
    code: "BTCD",
    icon: "btcd",
    longname: "BitcoinDark",
    description: "BitcoinDark coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoindark/"
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
    name: "blockv",
    code: "VEE",
    icon: "vee",
    longname: "BLOCKv",
    description: "BLOCKv coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blockv/"
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
    name: "cybermiles",
    code: "CMT",
    icon: "cmt",
    longname: "CyberMiles",
    description: "CyberMiles coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cybermiles/"
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
    name: "thekey",
    code: "TKY",
    icon: "tky",
    longname: "THEKEY",
    description: "THEKEY coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/thekey/"
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
    name: "gifto",
    code: "GTO",
    icon: "gto",
    longname: "Gifto",
    description: "Gifto coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gifto/"
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
    name: "dew",
    code: "DEW",
    icon: "dew",
    longname: "DEW",
    description: "DEW coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dew/"
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
    name: "streamr-datacoin",
    code: "DATA",
    icon: "data",
    longname: "Streamr DATAcoin",
    description: "Streamr DATAcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/streamr-datacoin/"
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
    name: "salus",
    code: "SLS",
    icon: "sls",
    longname: "SaluS",
    description: "SaluS coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/salus/"
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
    name: "ost",
    code: "OST",
    icon: "ost",
    longname: "OST",
    description: "OST coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ost/"
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
    name: "groestlcoin",
    code: "GRS",
    icon: "grs",
    longname: "Groestlcoin",
    description: "Groestlcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/groestlcoin/"
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
    name: "singulardtv",
    code: "SNGLS",
    icon: "sngls",
    longname: "SingularDTV",
    description: "SingularDTV coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/singulardtv/"
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
    name: "pura",
    code: "PURA",
    icon: "pura",
    longname: "Pura",
    description: "Pura coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pura/"
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
    name: "bibox-token",
    code: "BIX",
    icon: "bix",
    longname: "Bibox Token",
    description: "Bibox Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bibox-token/"
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
    name: "medibloc",
    code: "MED",
    icon: "med",
    longname: "MediBloc",
    description: "MediBloc coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/medibloc/"
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
    name: "ethlend",
    code: "LEND",
    icon: "lend",
    longname: "ETHLend",
    description: "ETHLend coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ethlend/"
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
    name: "quantum-resistant-ledger",
    code: "QRL",
    icon: "qrl",
    longname: "Quantum Resistant Ledger",
    description: "Quantum Resistant Ledger coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/quantum-resistant-ledger/"
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
    name: "edgeless",
    code: "EDG",
    icon: "edg",
    longname: "Edgeless",
    description: "Edgeless coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/edgeless/"
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
    name: "airswap",
    code: "AST",
    icon: "ast",
    longname: "AirSwap",
    description: "AirSwap coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/airswap/"
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
    name: "sophiatx",
    code: "SPHTX",
    icon: "sphtx",
    longname: "SophiaTX",
    description: "SophiaTX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sophiatx/"
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
    name: "sonm",
    code: "SNM",
    icon: "snm",
    longname: "SONM",
    description: "SONM coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sonm/"
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
    name: "bridgecoin",
    code: "BCO",
    icon: "bco",
    longname: "BridgeCoin",
    description: "BridgeCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bridgecoin/"
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
    name: "peercoin",
    code: "PPC",
    icon: "ppc",
    longname: "Peercoin",
    description: "Peercoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/peercoin/"
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
    name: "feathercoin",
    code: "FTC",
    icon: "ftc",
    longname: "Feathercoin",
    description: "Feathercoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/feathercoin/"
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
    name: "medishares",
    code: "MDS",
    icon: "mds",
    longname: "MediShares",
    description: "MediShares coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/medishares/"
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
    name: "red-pulse",
    code: "RPX",
    icon: "rpx",
    longname: "Red Pulse",
    description: "Red Pulse coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/red-pulse/"
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
    name: "appcoins",
    code: "APPC",
    icon: "appc",
    longname: "AppCoins",
    description: "AppCoins coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/appcoins/"
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
    name: "utrust",
    code: "UTK",
    icon: "utk",
    longname: "UTRUST",
    description: "UTRUST coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/utrust/"
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
    name: "district0x",
    code: "DNT",
    icon: "dnt",
    longname: "district0x",
    description: "district0x coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/district0x/"
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
    name: "presearch",
    code: "PRE",
    icon: "pre",
    longname: "Presearch",
    description: "Presearch coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/presearch/"
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
    name: "trinity-network-credit",
    code: "TNC",
    icon: "tnc",
    longname: "Trinity Network Credit",
    description: "Trinity Network Credit coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/trinity-network-credit/"
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
    name: "pundi-x",
    code: "NPXS",
    icon: "npxs",
    longname: "Pundi X",
    description: "Pundi X coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pundi-x/"
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
    name: "wabi",
    code: "WABI",
    icon: "wabi",
    longname: "WaBi",
    description: "WaBi coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/wabi/"
    }
},{
    name: "ins-ecosystem",
    code: "INS",
    icon: "ins",
    longname: "INS Ecosystem",
    description: "INS Ecosystem coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ins-ecosystem/"
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
    name: "vibe",
    code: "VIBE",
    icon: "vibe",
    longname: "VIBE",
    description: "VIBE coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vibe/"
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
    name: "tierion",
    code: "TNT",
    icon: "tnt",
    longname: "Tierion",
    description: "Tierion coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tierion/"
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
    name: "origintrail",
    code: "TRAC",
    icon: "trac",
    longname: "OriginTrail",
    description: "OriginTrail coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/origintrail/"
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
    name: "burst",
    code: "BURST",
    icon: "burst",
    longname: "Burst",
    description: "Burst coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/burst/"
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
    name: "library-credit",
    code: "LBC",
    icon: "lbc",
    longname: "LBRY Credits",
    description: "LBRY Credits coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/library-credit/"
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
    name: "rock",
    code: "RKT",
    icon: "rkt",
    longname: "Rock",
    description: "Rock coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rock/"
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
    name: "melon",
    code: "MLN",
    icon: "mln",
    longname: "Melon",
    description: "Melon coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/melon/"
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
    name: "eccoin",
    code: "ECC",
    icon: "ecc",
    longname: "ECC",
    description: "ECC coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/eccoin/"
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
    name: "etherparty",
    code: "FUEL",
    icon: "fuel",
    longname: "Etherparty",
    description: "Etherparty coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/etherparty/"
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
    name: "jibrel-network",
    code: "JNT",
    icon: "jnt",
    longname: "Jibrel Network",
    description: "Jibrel Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/jibrel-network/"
    }
},{
    name: "qlink",
    code: "QLC",
    icon: "qlc",
    longname: "QLINK",
    description: "QLINK coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/qlink/"
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
    name: "wagerr",
    code: "WGR",
    icon: "wgr",
    longname: "Wagerr",
    description: "Wagerr coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/wagerr/"
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
    name: "trade-token",
    code: "TIO",
    icon: "tio",
    longname: "Trade Token",
    description: "Trade Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/trade-token/"
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
    name: "blockmason",
    code: "BCPT",
    icon: "bcpt",
    longname: "BlockMason Credit Protocol",
    description: "BlockMason Credit Protocol coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blockmason/"
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
    name: "decent",
    code: "DCT",
    icon: "dct",
    longname: "DECENT",
    description: "DECENT coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/decent/"
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
    name: "spectre-dividend",
    code: "SXDT",
    icon: "sxdt",
    longname: "Spectre.ai Dividend Token",
    description: "Spectre.ai Dividend Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/spectre-dividend/"
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
    name: "shift",
    code: "SHIFT",
    icon: "shift",
    longname: "Shift",
    description: "Shift coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/shift/"
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
    name: "potcoin",
    code: "POT",
    icon: "pot",
    longname: "PotCoin",
    description: "PotCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/potcoin/"
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
    name: "linkeye",
    code: "LET",
    icon: "let",
    longname: "LinkEye",
    description: "LinkEye coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/linkeye/"
    }
},{
    name: "triggers",
    code: "TRIG",
    icon: "trig",
    longname: "Triggers",
    description: "Triggers coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/triggers/"
    }
},{
    name: "nimiq",
    code: "NET",
    icon: "net",
    longname: "Nimiq Exchange Token",
    description: "Nimiq Exchange Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nimiq/"
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
    name: "blakestar",
    code: "ERA",
    icon: "era",
    longname: "ERA",
    description: "ERA coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blakestar/"
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
    name: "elastic",
    code: "XEL",
    icon: "xel",
    longname: "Elastic",
    description: "Elastic coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/elastic/"
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
    name: "unobtanium",
    code: "UNO",
    icon: "uno",
    longname: "Unobtanium",
    description: "Unobtanium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/unobtanium/"
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
    name: "html-coin",
    code: "HTML",
    icon: "html",
    longname: "HTMLCOIN",
    description: "HTMLCOIN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/html-coin/"
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
    name: "unikoin-gold",
    code: "UKG",
    icon: "ukg",
    longname: "Unikoin Gold",
    description: "Unikoin Gold coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/unikoin-gold/"
    }
},{
    name: "legolas-exchange",
    code: "LGO",
    icon: "lgo",
    longname: "Legolas Exchange",
    description: "Legolas Exchange coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/legolas-exchange/"
    }
},{
    name: "synereo",
    code: "AMP",
    icon: "amp",
    longname: "Synereo",
    description: "Synereo coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/synereo/"
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
    name: "tomochain",
    code: "TOMO",
    icon: "tomo",
    longname: "TomoChain",
    description: "TomoChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tomochain/"
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
    name: "leocoin",
    code: "LEO",
    icon: "leo",
    longname: "LEOcoin",
    description: "LEOcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/leocoin/"
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
    name: "namecoin",
    code: "NMC",
    icon: "nmc",
    longname: "Namecoin",
    description: "Namecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/namecoin/"
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
    name: "zeepin",
    code: "ZPT",
    icon: "zpt",
    longname: "Zeepin",
    description: "Zeepin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zeepin/"
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
    name: "safe-exchange-coin",
    code: "SAFEX",
    icon: "safex",
    longname: "Safe Exchange Coin",
    description: "Safe Exchange Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/safe-exchange-coin/"
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
    name: "dai",
    code: "DAI",
    icon: "dai",
    longname: "Dai",
    description: "Dai coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dai/"
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
    name: "crown",
    code: "CRW",
    icon: "crw",
    longname: "Crown",
    description: "Crown coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/crown/"
    }
},{
    name: "e-dinar-coin",
    code: "EDR",
    icon: "edr",
    longname: "E-Dinar Coin",
    description: "E-Dinar Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/e-dinar-coin/"
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
    name: "deeponion",
    code: "ONION",
    icon: "onion",
    longname: "DeepOnion",
    description: "DeepOnion coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/deeponion/"
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
    name: "suncontract",
    code: "SNC",
    icon: "snc",
    longname: "SunContract",
    description: "SunContract coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/suncontract/"
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
    name: "lunyr",
    code: "LUN",
    icon: "lun",
    longname: "Lunyr",
    description: "Lunyr coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/lunyr/"
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
    name: "adtoken",
    code: "ADT",
    icon: "adt",
    longname: "adToken",
    description: "adToken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/adtoken/"
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
    name: "flash",
    code: "FLASH",
    icon: "flash",
    longname: "Flash",
    description: "Flash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/flash/"
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
    name: "coss",
    code: "COSS",
    icon: "coss",
    longname: "COSS",
    description: "COSS coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/coss/"
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
    name: "bankex",
    code: "BKX",
    icon: "bkx",
    longname: "Bankex",
    description: "Bankex coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bankex/"
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
    name: "datum",
    code: "DAT",
    icon: "dat",
    longname: "Datum",
    description: "Datum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/datum/"
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
    name: "zeusshield",
    code: "ZSC",
    icon: "zsc",
    longname: "Zeusshield",
    description: "Zeusshield coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zeusshield/"
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
    name: "uptoken",
    code: "UP",
    icon: "up",
    longname: "UpToken",
    description: "UpToken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/uptoken/"
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
    name: "republic-protocol",
    code: "REN",
    icon: "ren",
    longname: "Republic Protocol",
    description: "Republic Protocol coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/republic-protocol/"
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
    name: "lykke",
    code: "LKK",
    icon: "lkk",
    longname: "Lykke",
    description: "Lykke coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/lykke/"
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
    name: "fortuna",
    code: "FOTA",
    icon: "fota",
    longname: "Fortuna",
    description: "Fortuna coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fortuna/"
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
    name: "blackcoin",
    code: "BLK",
    icon: "blk",
    longname: "BlackCoin",
    description: "BlackCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blackcoin/"
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
    name: "hempcoin",
    code: "THC",
    icon: "thc",
    longname: "HempCoin",
    description: "HempCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hempcoin/"
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
    name: "tao",
    code: "XTO",
    icon: "xto",
    longname: "Tao",
    description: "Tao coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tao/"
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
    name: "numeraire",
    code: "NMR",
    icon: "nmr",
    longname: "Numeraire",
    description: "Numeraire coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/numeraire/"
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
    name: "shield-xsh",
    code: "XSH",
    icon: "xsh",
    longname: "SHIELD",
    description: "SHIELD coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/shield-xsh/"
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
    name: "pepe-cash",
    code: "PEPECASH",
    icon: "pepecash",
    longname: "Pepe Cash",
    description: "Pepe Cash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pepe-cash/"
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
    name: "guppy",
    code: "GUP",
    icon: "gup",
    longname: "Matchpool",
    description: "Matchpool coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/guppy/"
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
    name: "sibcoin",
    code: "SIB",
    icon: "sib",
    longname: "SIBCoin",
    description: "SIBCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sibcoin/"
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
    name: "refereum",
    code: "RFR",
    icon: "rfr",
    longname: "Refereum",
    description: "Refereum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/refereum/"
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
    name: "zclassic",
    code: "ZCL",
    icon: "zcl",
    longname: "ZClassic",
    description: "ZClassic coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zclassic/"
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
    name: "storiqa",
    code: "STQ",
    icon: "stq",
    longname: "Storiqa",
    description: "Storiqa coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/storiqa/"
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
    name: "uquid-coin",
    code: "UQC",
    icon: "uqc",
    longname: "Uquid Coin",
    description: "Uquid Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/uquid-coin/"
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
    name: "swissborg",
    code: "CHSB",
    icon: "chsb",
    longname: "SwissBorg",
    description: "SwissBorg coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/swissborg/"
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
    name: "zoin",
    code: "ZOI",
    icon: "zoi",
    longname: "Zoin",
    description: "Zoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zoin/"
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
    name: "omni",
    code: "OMNI",
    icon: "omni",
    longname: "Omni",
    description: "Omni coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/omni/"
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
    name: "selfkey",
    code: "KEY",
    icon: "key",
    longname: "Selfkey",
    description: "Selfkey coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/selfkey/"
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
    name: "aidoc",
    code: "AIDOC",
    icon: "aidoc",
    longname: "AI Doctor",
    description: "AI Doctor coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aidoc/"
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
    name: "swftcoin",
    code: "SWFTC",
    icon: "swftc",
    longname: "SwftCoin",
    description: "SwftCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/swftcoin/"
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
    name: "attention-token-of-media",
    code: "ATM",
    icon: "atm",
    longname: "ATMChain",
    description: "ATMChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/attention-token-of-media/"
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
    name: "revolutionvr",
    code: "RVR",
    icon: "rvr",
    longname: "RevolutionVR",
    description: "RevolutionVR coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/revolutionvr/"
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
    name: "yee",
    code: "YEE",
    icon: "yee",
    longname: "YEE",
    description: "YEE coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/yee/"
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
    name: "firstblood",
    code: "1ST",
    icon: "1st",
    longname: "FirstBlood",
    description: "FirstBlood coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/firstblood/"
    }
},{
    name: "hive-project",
    code: "HVN",
    icon: "hvn",
    longname: "Hive Project",
    description: "Hive Project coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hive-project/"
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
    name: "agrello-delta",
    code: "DLT",
    icon: "dlt",
    longname: "Agrello",
    description: "Agrello coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/agrello-delta/"
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
    name: "blockport",
    code: "BPT",
    icon: "bpt",
    longname: "Blockport",
    description: "Blockport coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blockport/"
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
    name: "monetaryunit",
    code: "MUE",
    icon: "mue",
    longname: "MonetaryUnit",
    description: "MonetaryUnit coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/monetaryunit/"
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
    name: "bitclave",
    code: "CAT",
    icon: "cat",
    longname: "BitClave",
    description: "BitClave coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitclave/"
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
    name: "bitcoin-green",
    code: "BITG",
    icon: "bitg",
    longname: "Bitcoin Green",
    description: "Bitcoin Green coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoin-green/"
    }
},{
    name: "icos",
    code: "ICOS",
    icon: "icos",
    longname: "ICOS",
    description: "ICOS coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/icos/"
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
    name: "posw-coin",
    code: "POSW",
    icon: "posw",
    longname: "PoSW Coin",
    description: "PoSW Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/posw-coin/"
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
    name: "oax",
    code: "OAX",
    icon: "oax",
    longname: "OAX",
    description: "OAX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/oax/"
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
    name: "nolimitcoin",
    code: "NLC2",
    icon: "nlc2",
    longname: "NoLimitCoin",
    description: "NoLimitCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nolimitcoin/"
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
    name: "pascal-coin",
    code: "PASC",
    icon: "pasc",
    longname: "Pascal Coin",
    description: "Pascal Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pascal-coin/"
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
    name: "paragon",
    code: "PRG",
    icon: "prg",
    longname: "Paragon",
    description: "Paragon coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/paragon/"
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
    name: "bitusd",
    code: "BITUSD",
    icon: "bitusd",
    longname: "bitUSD",
    description: "bitUSD coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitusd/"
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
    name: "latoken",
    code: "LA",
    icon: "la",
    longname: "LATOKEN",
    description: "LATOKEN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/latoken/"
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
    name: "energo",
    code: "TSL",
    icon: "tsl",
    longname: "Energo",
    description: "Energo coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/energo/"
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
    name: "expanse",
    code: "EXP",
    icon: "exp",
    longname: "Expanse",
    description: "Expanse coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/expanse/"
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
    name: "coinmeet",
    code: "MEE",
    icon: "mee",
    longname: "CoinMeet",
    description: "CoinMeet coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/coinmeet/"
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
    name: "bitconnect",
    code: "BCC",
    icon: "bcc",
    longname: "BitConnect",
    description: "BitConnect coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitconnect/"
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
    name: "covesting",
    code: "COV",
    icon: "cov",
    longname: "Covesting",
    description: "Covesting coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/covesting/"
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
    name: "carvertical",
    code: "CV",
    icon: "cv",
    longname: "carVertical",
    description: "carVertical coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/carvertical/"
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
    name: "swarm-fund",
    code: "SWM",
    icon: "swm",
    longname: "Swarm",
    description: "Swarm coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/swarm-fund/"
    }
},{
    name: "divi",
    code: "DIVX",
    icon: "divx",
    longname: "Divi",
    description: "Divi coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/divi/"
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
    name: "encrypgen",
    code: "DNA",
    icon: "dna",
    longname: "EncrypGen",
    description: "EncrypGen coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/encrypgen/"
    }
},{
    name: "ixledger",
    code: "IXT",
    icon: "ixt",
    longname: "iXledger",
    description: "iXledger coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ixledger/"
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
    name: "datawallet",
    code: "DXT",
    icon: "dxt",
    longname: "Datawallet",
    description: "Datawallet coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/datawallet/"
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
    name: "alis",
    code: "ALIS",
    icon: "alis",
    longname: "ALIS",
    description: "ALIS coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/alis/"
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
    name: "lamden",
    code: "TAU",
    icon: "tau",
    longname: "Lamden",
    description: "Lamden coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/lamden/"
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
    name: "xpa",
    code: "XPA",
    icon: "xpa",
    longname: "XPA",
    description: "XPA coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/xpa/"
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
    name: "babb",
    code: "BAX",
    icon: "bax",
    longname: "BABB",
    description: "BABB coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/babb/"
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
    name: "databits",
    code: "DTB",
    icon: "dtb",
    longname: "Databits",
    description: "Databits coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/databits/"
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
    name: "neumark",
    code: "NEU",
    icon: "neu",
    longname: "Neumark",
    description: "Neumark coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/neumark/"
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
    name: "rubycoin",
    code: "RBY",
    icon: "rby",
    longname: "Rubycoin",
    description: "Rubycoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rubycoin/"
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
    name: "nvo",
    code: "NVST",
    icon: "nvst",
    longname: "NVO",
    description: "NVO coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nvo/"
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
    name: "true-chain",
    code: "TRUE",
    icon: "true",
    longname: "True Chain",
    description: "True Chain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/true-chain/"
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
    name: "alqo",
    code: "ALQO",
    icon: "alqo",
    longname: "ALQO",
    description: "ALQO coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/alqo/"
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
    name: "myriad",
    code: "XMY",
    icon: "xmy",
    longname: "Myriad",
    description: "Myriad coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/myriad/"
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
    name: "blackmoon",
    code: "BMC",
    icon: "bmc",
    longname: "Blackmoon",
    description: "Blackmoon coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blackmoon/"
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
    name: "lympo",
    code: "LYM",
    icon: "lym",
    longname: "Lympo",
    description: "Lympo coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/lympo/"
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
    name: "heat-ledger",
    code: "HEAT",
    icon: "heat",
    longname: "HEAT",
    description: "HEAT coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/heat-ledger/"
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
    name: "oxycoin",
    code: "OXY",
    icon: "oxy",
    longname: "Oxycoin",
    description: "Oxycoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/oxycoin/"
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
    name: "xaurum",
    code: "XAUR",
    icon: "xaur",
    longname: "Xaurum",
    description: "Xaurum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/xaurum/"
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
    name: "patientory",
    code: "PTOY",
    icon: "ptoy",
    longname: "Patientory",
    description: "Patientory coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/patientory/"
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
    name: "okcash",
    code: "OK",
    icon: "ok",
    longname: "OKCash",
    description: "OKCash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/okcash/"
    }
},{
    name: "snovio",
    code: "SNOV",
    icon: "snov",
    longname: "Snovio",
    description: "Snovio coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/snovio/"
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
    name: "rialto",
    code: "XRL",
    icon: "xrl",
    longname: "Rialto",
    description: "Rialto coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rialto/"
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
    name: "bitshares-music",
    code: "MUSE",
    icon: "muse",
    longname: "MUSE",
    description: "MUSE coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitshares-music/"
    }
},{
    name: "florincoin",
    code: "FLO",
    icon: "flo",
    longname: "FlorinCoin",
    description: "FlorinCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/florincoin/"
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
    name: "transfercoin",
    code: "TX",
    icon: "tx",
    longname: "TransferCoin",
    description: "TransferCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/transfercoin/"
    }
},{
    name: "insurepal",
    code: "IPL",
    icon: "ipl",
    longname: "InsurePal",
    description: "InsurePal coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/insurepal/"
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
    name: "remme",
    code: "REM",
    icon: "rem",
    longname: "Remme",
    description: "Remme coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/remme/"
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
    name: "canyacoin",
    code: "CAN",
    icon: "can",
    longname: "CanYaCoin",
    description: "CanYaCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/canyacoin/"
    }
},{
    name: "debitum-network",
    code: "DEB",
    icon: "deb",
    longname: "Debitum Network",
    description: "Debitum Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/debitum-network/"
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
    name: "oneroot-network",
    code: "RNT",
    icon: "rnt",
    longname: "OneRoot Network",
    description: "OneRoot Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/oneroot-network/"
    }
},{
    name: "true-usd",
    code: "TUSD",
    icon: "tusd",
    longname: "True USD",
    description: "True USD coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/true-usd/"
    }
},{
    name: "energycoin",
    code: "ENRG",
    icon: "enrg",
    longname: "Energycoin",
    description: "Energycoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/energycoin/"
    }
},{
    name: "mintcoin",
    code: "MINT",
    icon: "mint",
    longname: "Mintcoin",
    description: "Mintcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mintcoin/"
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
    name: "tokenclub",
    code: "TCT",
    icon: "tct",
    longname: "TokenClub",
    description: "TokenClub coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tokenclub/"
    }
},{
    name: "lockchain",
    code: "LOC",
    icon: "loc",
    longname: "LockChain",
    description: "LockChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/lockchain/"
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
    name: "toacoin",
    code: "TOA",
    icon: "toa",
    longname: "ToaCoin",
    description: "ToaCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/toacoin/"
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
    name: "foldingcoin",
    code: "FLDC",
    icon: "fldc",
    longname: "FoldingCoin",
    description: "FoldingCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/foldingcoin/"
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
    name: "golos",
    code: "GOLOS",
    icon: "golos",
    longname: "Golos",
    description: "Golos coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/golos/"
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
    name: "gambit",
    code: "GAM",
    icon: "gam",
    longname: "Gambit",
    description: "Gambit coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gambit/"
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
    name: "cargox",
    code: "CXO",
    icon: "cxo",
    longname: "CargoX",
    description: "CargoX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cargox/"
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
    name: "b2bx",
    code: "B2B",
    icon: "b2b",
    longname: "B2BX",
    description: "B2BX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/b2bx/"
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
    name: "open-trading-network",
    code: "OTN",
    icon: "otn",
    longname: "Open Trading Network",
    description: "Open Trading Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/open-trading-network/"
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
    name: "pluton",
    code: "PLU",
    icon: "plu",
    longname: "Pluton",
    description: "Pluton coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pluton/"
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
    name: "target-coin",
    code: "TGT",
    icon: "tgt",
    longname: "Target Coin",
    description: "Target Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/target-coin/"
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
    name: "boolberry",
    code: "BBR",
    icon: "bbr",
    longname: "Boolberry",
    description: "Boolberry coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/boolberry/"
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
    name: "block-array",
    code: "ARY",
    icon: "ary",
    longname: "Block Array",
    description: "Block Array coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/block-array/"
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
    name: "aurora-dao",
    code: "AURA",
    icon: "aura",
    longname: "Aurora DAO",
    description: "Aurora DAO coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aurora-dao/"
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
    name: "chronobank",
    code: "TIME",
    icon: "time",
    longname: "Chronobank",
    description: "Chronobank coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/chronobank/"
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
    name: "hackspace-capital",
    code: "HAC",
    icon: "hac",
    longname: "Hackspace Capital",
    description: "Hackspace Capital coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hackspace-capital/"
    }
},{
    name: "mybit-token",
    code: "MYB",
    icon: "myb",
    longname: "MyBit Token",
    description: "MyBit Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mybit-token/"
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
    name: "rentberry",
    code: "BERRY",
    icon: "berry",
    longname: "Rentberry",
    description: "Rentberry coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rentberry/"
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
    name: "atn",
    code: "ATN",
    icon: "atn",
    longname: "ATN",
    description: "ATN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/atn/"
    }
},{
    name: "ethereum-blue",
    code: "BLUE",
    icon: "blue",
    longname: "BLUE",
    description: "BLUE coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ethereum-blue/"
    }
},{
    name: "axpire",
    code: "AXP",
    icon: "axp",
    longname: "aXpire",
    description: "aXpire coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/axpire/"
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
    name: "russian-mining-coin",
    code: "RMC",
    icon: "rmc",
    longname: "Russian Miner Coin",
    description: "Russian Miner Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/russian-mining-coin/"
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
    name: "sequence",
    code: "SEQ",
    icon: "seq",
    longname: "Sequence",
    description: "Sequence coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sequence/"
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
    name: "atbcoin",
    code: "ATB",
    icon: "atb",
    longname: "ATBCoin",
    description: "ATBCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/atbcoin/"
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
    name: "sportyco",
    code: "SPF",
    icon: "spf",
    longname: "SportyCo",
    description: "SportyCo coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sportyco/"
    }
},{
    name: "clearcoin",
    code: "CLR",
    icon: "clr",
    longname: "ClearCoin",
    description: "ClearCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/clearcoin/"
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
    name: "etheroll",
    code: "DICE",
    icon: "dice",
    longname: "Etheroll",
    description: "Etheroll coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/etheroll/"
    }
},{
    name: "quantum",
    code: "QAU",
    icon: "qau",
    longname: "Quantum",
    description: "Quantum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/quantum/"
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
    name: "solaris",
    code: "XLR",
    icon: "xlr",
    longname: "Solaris",
    description: "Solaris coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/solaris/"
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
    name: "mysterium",
    code: "MYST",
    icon: "myst",
    longname: "Mysterium",
    description: "Mysterium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mysterium/"
    }
},{
    name: "ucash",
    code: "UCASH",
    icon: "ucash",
    longname: "U.CASH",
    description: "U.CASH coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ucash/"
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
    name: "spectrecoin",
    code: "XSPEC",
    icon: "xspec",
    longname: "Spectrecoin",
    description: "Spectrecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/spectrecoin/"
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
    name: "hydro-protocol",
    code: "HOT",
    icon: "hot",
    longname: "Hydro Protocol",
    description: "Hydro Protocol coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hydro-protocol/"
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
    name: "bounty0x",
    code: "BNTY",
    icon: "bnty",
    longname: "Bounty0x",
    description: "Bounty0x coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bounty0x/"
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
    name: "pinkcoin",
    code: "PINK",
    icon: "pink",
    longname: "PinkCoin",
    description: "PinkCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pinkcoin/"
    }
},{
    name: "stealthcoin",
    code: "XST",
    icon: "xst",
    longname: "Stealthcoin",
    description: "Stealthcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/stealthcoin/"
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
    name: "ink-protocol",
    code: "XNK",
    icon: "xnk",
    longname: "Ink Protocol",
    description: "Ink Protocol coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ink-protocol/"
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
    name: "flixxo",
    code: "FLIXX",
    icon: "flixx",
    longname: "Flixxo",
    description: "Flixxo coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/flixxo/"
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
    name: "ethorse",
    code: "HORSE",
    icon: "horse",
    longname: "Ethorse",
    description: "Ethorse coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ethorse/"
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
    name: "bitcrystals",
    code: "BCY",
    icon: "bcy",
    longname: "Bitcrystals",
    description: "Bitcrystals coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcrystals/"
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
    name: "airtoken",
    code: "AIR",
    icon: "air",
    longname: "AirToken",
    description: "AirToken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/airtoken/"
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
    name: "cvcoin",
    code: "CVCOIN",
    icon: "cvcoin",
    longname: "CVCoin",
    description: "CVCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cvcoin/"
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
    name: "curecoin",
    code: "CURE",
    icon: "cure",
    longname: "Curecoin",
    description: "Curecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/curecoin/"
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
    name: "circuits-of-value",
    code: "COVAL",
    icon: "coval",
    longname: "Circuits of Value",
    description: "Circuits of Value coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/circuits-of-value/"
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
    name: "travelflex",
    code: "TRF",
    icon: "trf",
    longname: "Travelflex",
    description: "Travelflex coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/travelflex/"
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
    name: "espers",
    code: "ESP",
    icon: "esp",
    longname: "Espers",
    description: "Espers coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/espers/"
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
    name: "colossusxt",
    code: "COLX",
    icon: "colx",
    longname: "ColossusXT",
    description: "ColossusXT coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/colossusxt/"
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
    name: "bitdice",
    code: "CSNO",
    icon: "csno",
    longname: "BitDice",
    description: "BitDice coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitdice/"
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
    name: "guaranteed-ethurance-token-extra",
    code: "GETX",
    icon: "getx",
    longname: "Guaranteed Ethurance Token Extra",
    description: "Guaranteed Ethurance Token Extra coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/guaranteed-ethurance-token-extra/"
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
    name: "zilla",
    code: "ZLA",
    icon: "zla",
    longname: "Zilla",
    description: "Zilla coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zilla/"
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
    name: "interplanetary-broadcast-coin",
    code: "IPBC",
    icon: "ipbc",
    longname: "Interplanetary Broadcast Coin",
    description: "Interplanetary Broadcast Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/interplanetary-broadcast-coin/"
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
    name: "worldcore",
    code: "WRC",
    icon: "wrc",
    longname: "Worldcore",
    description: "Worldcore coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/worldcore/"
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
    name: "obits",
    code: "OBITS",
    icon: "obits",
    longname: "OBITS",
    description: "OBITS coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/obits/"
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
    name: "internet-of-people",
    code: "IOP",
    icon: "iop",
    longname: "Internet of People",
    description: "Internet of People coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/internet-of-people/"
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
    name: "life",
    code: "LIFE",
    icon: "life",
    longname: "LIFE",
    description: "LIFE coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/life/"
    }
},{
    name: "atmos",
    code: "ATMS",
    icon: "atms",
    longname: "Atmos",
    description: "Atmos coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/atmos/"
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
    name: "pirl",
    code: "PIRL",
    icon: "pirl",
    longname: "Pirl",
    description: "Pirl coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pirl/"
    }
},{
    name: "gatcoin",
    code: "GAT",
    icon: "gat",
    longname: "Gatcoin",
    description: "Gatcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gatcoin/"
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
    name: "pandacoin-pnd",
    code: "PND",
    icon: "pnd",
    longname: "Pandacoin",
    description: "Pandacoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pandacoin-pnd/"
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
    name: "korecoin",
    code: "KORE",
    icon: "kore",
    longname: "Kore",
    description: "Kore coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/korecoin/"
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
    name: "insights-network",
    code: "INSTAR",
    icon: "instar",
    longname: "Insights Network",
    description: "Insights Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/insights-network/"
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
    name: "get-protocol",
    code: "GET",
    icon: "get",
    longname: "GET Protocol",
    description: "GET Protocol coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/get-protocol/"
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
    name: "nubits",
    code: "USNBT",
    icon: "usnbt",
    longname: "NuBits",
    description: "NuBits coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nubits/"
    }
},{
    name: "dcorp",
    code: "DRP",
    icon: "drp",
    longname: "DCORP",
    description: "DCORP coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dcorp/"
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
    name: "clearpoll",
    code: "POLL",
    icon: "poll",
    longname: "ClearPoll",
    description: "ClearPoll coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/clearpoll/"
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
    name: "hexx",
    code: "HXX",
    icon: "hxx",
    longname: "Hexx",
    description: "Hexx coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hexx/"
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
    name: "blockcat",
    code: "CAT",
    icon: "cat",
    longname: "BlockCAT",
    description: "BlockCAT coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blockcat/"
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
    name: "memetic",
    code: "MEME",
    icon: "meme",
    longname: "Memetic / PepeCoin",
    description: "Memetic / PepeCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/memetic/"
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
    name: "leverj",
    code: "LEV",
    icon: "lev",
    longname: "Leverj",
    description: "Leverj coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/leverj/"
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
    name: "breakout-stake",
    code: "BRX",
    icon: "brx",
    longname: "Breakout Stake",
    description: "Breakout Stake coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/breakout-stake/"
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
    name: "dovu",
    code: "DOVU",
    icon: "dovu",
    longname: "Dovu",
    description: "Dovu coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dovu/"
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
    name: "viuly",
    code: "VIU",
    icon: "viu",
    longname: "Viuly",
    description: "Viuly coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/viuly/"
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
    name: "qwark",
    code: "QWARK",
    icon: "qwark",
    longname: "Qwark",
    description: "Qwark coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/qwark/"
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
    name: "bitcoinz",
    code: "BTCZ",
    icon: "btcz",
    longname: "BitcoinZ",
    description: "BitcoinZ coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoinz/"
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
    name: "cryptoping",
    code: "PING",
    icon: "ping",
    longname: "CryptoPing",
    description: "CryptoPing coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cryptoping/"
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
    name: "adshares",
    code: "ADST",
    icon: "adst",
    longname: "AdShares",
    description: "AdShares coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/adshares/"
    }
},{
    name: "astro",
    code: "ASTRO",
    icon: "astro",
    longname: "Astro",
    description: "Astro coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/astro/"
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
    name: "education-ecosystem",
    code: "LEDU",
    icon: "ledu",
    longname: "Education Ecosystem",
    description: "Education Ecosystem coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/education-ecosystem/"
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
    name: "publica",
    code: "PBL",
    icon: "pbl",
    longname: "Publica",
    description: "Publica coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/publica/"
    }
},{
    name: "mercury-protocol",
    code: "GMT",
    icon: "gmt",
    longname: "Mercury Protocol",
    description: "Mercury Protocol coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mercury-protocol/"
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
    name: "europecoin",
    code: "ERC",
    icon: "erc",
    longname: "EuropeCoin",
    description: "EuropeCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/europecoin/"
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
    name: "farad",
    code: "FRD",
    icon: "frd",
    longname: "Farad",
    description: "Farad coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/farad/"
    }
},{
    name: "bitmark",
    code: "BTM",
    icon: "btm",
    longname: "Bitmark",
    description: "Bitmark coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitmark/"
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
    name: "fedoracoin",
    code: "TIPS",
    icon: "tips",
    longname: "FedoraCoin",
    description: "FedoraCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fedoracoin/"
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
    name: "internxt",
    code: "INXT",
    icon: "inxt",
    longname: "Internxt",
    description: "Internxt coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/internxt/"
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
    name: "starta",
    code: "STA",
    icon: "sta",
    longname: "Starta",
    description: "Starta coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/starta/"
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
    name: "locicoin",
    code: "LOCI",
    icon: "loci",
    longname: "LOCIcoin",
    description: "LOCIcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/locicoin/"
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
    name: "1337coin",
    code: "1337",
    icon: "1337",
    longname: "Elite",
    description: "Elite coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/1337coin/"
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
    name: "sumokoin",
    code: "SUMO",
    icon: "sumo",
    longname: "Sumokoin",
    description: "Sumokoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sumokoin/"
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
    name: "sether",
    code: "SETH",
    icon: "seth",
    longname: "Sether",
    description: "Sether coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sether/"
    }
},{
    name: "vtorrent",
    code: "VTR",
    icon: "vtr",
    longname: "vTorrent",
    description: "vTorrent coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vtorrent/"
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
    name: "bitcloud",
    code: "BTDX",
    icon: "btdx",
    longname: "Bitcloud",
    description: "Bitcloud coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcloud/"
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
    name: "russiacoin",
    code: "RC",
    icon: "rc",
    longname: "RussiaCoin",
    description: "RussiaCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/russiacoin/"
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
    name: "darcrus",
    code: "DAR",
    icon: "dar",
    longname: "Darcrus",
    description: "Darcrus coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/darcrus/"
    }
},{
    name: "jiyo",
    code: "JIYO",
    icon: "jiyo",
    longname: "Jiyo",
    description: "Jiyo coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/jiyo/"
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
    name: "ebtcnew",
    code: "EBTC",
    icon: "ebtc",
    longname: "eBitcoin",
    description: "eBitcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ebtcnew/"
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
    name: "hush",
    code: "HUSH",
    icon: "hush",
    longname: "Hush",
    description: "Hush coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hush/"
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
    name: "lampix",
    code: "PIX",
    icon: "pix",
    longname: "Lampix",
    description: "Lampix coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/lampix/"
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
    name: "zrcoin",
    code: "ZRC",
    icon: "zrc",
    longname: "ZrCoin",
    description: "ZrCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zrcoin/"
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
    name: "riecoin",
    code: "RIC",
    icon: "ric",
    longname: "Riecoin",
    description: "Riecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/riecoin/"
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
    name: "creditbit",
    code: "CRB",
    icon: "crb",
    longname: "Creditbit",
    description: "Creditbit coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/creditbit/"
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
    name: "2give",
    code: "2GIVE",
    icon: "2give",
    longname: "2GIVE",
    description: "2GIVE coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/2give/"
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
    name: "monacocoin",
    code: "XMCC",
    icon: "xmcc",
    longname: "Monoeci",
    description: "Monoeci coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/monacocoin/"
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
    name: "breakout",
    code: "BRK",
    icon: "brk",
    longname: "Breakout",
    description: "Breakout coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/breakout/"
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
    name: "luckchain",
    code: "BASH",
    icon: "bash",
    longname: "LuckChain",
    description: "LuckChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/luckchain/"
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
    name: "vslice",
    code: "VSL",
    icon: "vsl",
    longname: "vSlice",
    description: "vSlice coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vslice/"
    }
},{
    name: "hawala-today",
    code: "HAT",
    icon: "hat",
    longname: "Hawala.Today",
    description: "Hawala.Today coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hawala-today/"
    }
},{
    name: "digipulse",
    code: "DGPT",
    icon: "dgpt",
    longname: "DigiPulse",
    description: "DigiPulse coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/digipulse/"
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
    name: "sharpe-platform-token",
    code: "SHP",
    icon: "shp",
    longname: "Sharpe Platform Token",
    description: "Sharpe Platform Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sharpe-platform-token/"
    }
},{
    name: "denarius-dnr",
    code: "DNR",
    icon: "dnr",
    longname: "Denarius",
    description: "Denarius coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/denarius-dnr/"
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
    name: "ethereum-movie-venture",
    code: "EMV",
    icon: "emv",
    longname: "Ethereum Movie Venture",
    description: "Ethereum Movie Venture coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ethereum-movie-venture/"
    }
},{
    name: "blitzcash",
    code: "BLITZ",
    icon: "blitz",
    longname: "Blitzcash",
    description: "Blitzcash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blitzcash/"
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
    name: "buzzcoin",
    code: "BUZZ",
    icon: "buzz",
    longname: "BuzzCoin",
    description: "BuzzCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/buzzcoin/"
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
    name: "equitrader",
    code: "EQT",
    icon: "eqt",
    longname: "EquiTrader",
    description: "EquiTrader coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/equitrader/"
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
    name: "bonpay",
    code: "BON",
    icon: "bon",
    longname: "Bonpay",
    description: "Bonpay coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bonpay/"
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
    name: "nework",
    code: "NKC",
    icon: "nkc",
    longname: "Nework",
    description: "Nework coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nework/"
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
    name: "dether",
    code: "DTH",
    icon: "dth",
    longname: "Dether",
    description: "Dether coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dether/"
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
    name: "bitswift",
    code: "SWIFT",
    icon: "swift",
    longname: "Bitswift",
    description: "Bitswift coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitswift/"
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
    name: "e-gulden",
    code: "EFL",
    icon: "efl",
    longname: "e-Gulden",
    description: "e-Gulden coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/e-gulden/"
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
    name: "aigang",
    code: "AIX",
    icon: "aix",
    longname: "Aigang",
    description: "Aigang coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aigang/"
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
    name: "spreadcoin",
    code: "SPR",
    icon: "spr",
    longname: "SpreadCoin",
    description: "SpreadCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/spreadcoin/"
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
    name: "jet8",
    code: "J8T",
    icon: "j8t",
    longname: "JET8",
    description: "JET8 coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/jet8/"
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
    name: "sharechain",
    code: "SSS",
    icon: "sss",
    longname: "Sharechain",
    description: "Sharechain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sharechain/"
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
    name: "upfiring",
    code: "UFR",
    icon: "ufr",
    longname: "Upfiring",
    description: "Upfiring coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/upfiring/"
    }
},{
    name: "capricoin",
    code: "CPC",
    icon: "cpc",
    longname: "Capricoin",
    description: "Capricoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/capricoin/"
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
    name: "rupaya",
    code: "RUPX",
    icon: "rupx",
    longname: "Rupaya",
    description: "Rupaya coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rupaya/"
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
    name: "evergreencoin",
    code: "EGC",
    icon: "egc",
    longname: "EverGreenCoin",
    description: "EverGreenCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/evergreencoin/"
    }
},{
    name: "trustplus",
    code: "TRUST",
    icon: "trust",
    longname: "TrustPlus",
    description: "TrustPlus coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/trustplus/"
    }
},{
    name: "pure",
    code: "PURE",
    icon: "pure",
    longname: "Pure",
    description: "Pure coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pure/"
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
    name: "global-cryptocurrency",
    code: "GCC",
    icon: "gcc",
    longname: "Global Cryptocurrency",
    description: "Global Cryptocurrency coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/global-cryptocurrency/"
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
    name: "privatix",
    code: "PRIX",
    icon: "prix",
    longname: "Privatix",
    description: "Privatix coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/privatix/"
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
    name: "magi",
    code: "XMG",
    icon: "xmg",
    longname: "Magi",
    description: "Magi coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/magi/"
    }
},{
    name: "sexcoin",
    code: "SXC",
    icon: "sxc",
    longname: "Sexcoin",
    description: "Sexcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sexcoin/"
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
    name: "martexcoin",
    code: "MXT",
    icon: "mxt",
    longname: "MarteXcoin",
    description: "MarteXcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/martexcoin/"
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
    name: "chaincoin",
    code: "CHC",
    icon: "chc",
    longname: "ChainCoin",
    description: "ChainCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/chaincoin/"
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
    name: "yocoin",
    code: "YOC",
    icon: "yoc",
    longname: "Yocoin",
    description: "Yocoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/yocoin/"
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
    name: "micromoney",
    code: "AMM",
    icon: "amm",
    longname: "MicroMoney",
    description: "MicroMoney coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/micromoney/"
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
    name: "putincoin",
    code: "PUT",
    icon: "put",
    longname: "PutinCoin",
    description: "PutinCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/putincoin/"
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
    name: "ergo",
    code: "EFYT",
    icon: "efyt",
    longname: "Ergo",
    description: "Ergo coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ergo/"
    }
},{
    name: "kzcash",
    code: "KZC",
    icon: "kzc",
    longname: "Kzcash",
    description: "Kzcash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kzcash/"
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
    name: "startercoin",
    code: "STAC",
    icon: "stac",
    longname: "StarterCoin",
    description: "StarterCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/startercoin/"
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
    name: "creativecoin",
    code: "CREA",
    icon: "crea",
    longname: "Creativecoin",
    description: "Creativecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/creativecoin/"
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
    name: "altcoin-alt",
    code: "ALT",
    icon: "alt",
    longname: "Altcoin",
    description: "Altcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/altcoin-alt/"
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
    name: "mcap",
    code: "MCAP",
    icon: "mcap",
    longname: "MCAP",
    description: "MCAP coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mcap/"
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
    name: "regalcoin",
    code: "REC",
    icon: "rec",
    longname: "Regalcoin",
    description: "Regalcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/regalcoin/"
    }
},{
    name: "triaconta",
    code: "TRIA",
    icon: "tria",
    longname: "Triaconta",
    description: "Triaconta coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/triaconta/"
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
    name: "kekcoin",
    code: "KEK",
    icon: "kek",
    longname: "KekCoin",
    description: "KekCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kekcoin/"
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
    name: "oceanlab",
    code: "OCL",
    icon: "ocl",
    longname: "Oceanlab",
    description: "Oceanlab coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/oceanlab/"
    }
},{
    name: "magnet",
    code: "MAG",
    icon: "mag",
    longname: "Magnet",
    description: "Magnet coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/magnet/"
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
    name: "flik",
    code: "FLIK",
    icon: "flik",
    longname: "FLiK",
    description: "FLiK coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/flik/"
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
    name: "intensecoin",
    code: "ITNS",
    icon: "itns",
    longname: "IntenseCoin",
    description: "IntenseCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/intensecoin/"
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
    name: "unbreakablecoin",
    code: "UNB",
    icon: "unb",
    longname: "UnbreakableCoin",
    description: "UnbreakableCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/unbreakablecoin/"
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
    name: "inpay",
    code: "INPAY",
    icon: "inpay",
    longname: "InPay",
    description: "InPay coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/inpay/"
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
    name: "tidex-token",
    code: "TDX",
    icon: "tdx",
    longname: "Tidex Token",
    description: "Tidex Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tidex-token/"
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
    name: "biblepay",
    code: "BBP",
    icon: "bbp",
    longname: "BiblePay",
    description: "BiblePay coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/biblepay/"
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
    name: "procurrency",
    code: "PROC",
    icon: "proc",
    longname: "ProCurrency",
    description: "ProCurrency coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/procurrency/"
    }
},{
    name: "footy-cash",
    code: "XFT",
    icon: "xft",
    longname: "Footy Cash",
    description: "Footy Cash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/footy-cash/"
    }
},{
    name: "ongsocial",
    code: "ONG",
    icon: "ong",
    longname: "onG.social",
    description: "onG.social coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ongsocial/"
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
    name: "speed-mining-service",
    code: "SMS",
    icon: "sms",
    longname: "Speed Mining Service",
    description: "Speed Mining Service coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/speed-mining-service/"
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
    name: "ellaism",
    code: "ELLA",
    icon: "ella",
    longname: "Ellaism",
    description: "Ellaism coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ellaism/"
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
    name: "indorse-token",
    code: "IND",
    icon: "ind",
    longname: "Indorse Token",
    description: "Indorse Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/indorse-token/"
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
    name: "flypme",
    code: "FYP",
    icon: "fyp",
    longname: "FlypMe",
    description: "FlypMe coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/flypme/"
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
    name: "condensate",
    code: "RAIN",
    icon: "rain",
    longname: "Condensate",
    description: "Condensate coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/condensate/"
    }
},{
    name: "stipend",
    code: "SPD",
    icon: "spd",
    longname: "Stipend",
    description: "Stipend coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/stipend/"
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
    name: "bittokens",
    code: "BXT",
    icon: "bxt",
    longname: "BitTokens",
    description: "BitTokens coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bittokens/"
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
    name: "digitalprice",
    code: "DP",
    icon: "dp",
    longname: "DigitalPrice",
    description: "DigitalPrice coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/digitalprice/"
    }
},{
    name: "drp-utility",
    code: "DRPU",
    icon: "drpu",
    longname: "DRP Utility",
    description: "DRP Utility coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/drp-utility/"
    }
},{
    name: "mazacoin",
    code: "MZC",
    icon: "mzc",
    longname: "MAZA",
    description: "MAZA coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mazacoin/"
    }
},{
    name: "interstellar-holdings",
    code: "HOLD",
    icon: "hold",
    longname: "Interstellar Holdings",
    description: "Interstellar Holdings coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/interstellar-holdings/"
    }
},{
    name: "accelerator-network",
    code: "ACC",
    icon: "acc",
    longname: "Accelerator Network",
    description: "Accelerator Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/accelerator-network/"
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
    name: "miners-reward-token",
    code: "MRT",
    icon: "mrt",
    longname: "Miners' Reward Token",
    description: "Miners' Reward Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/miners-reward-token/"
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
    name: "unitus",
    code: "UIS",
    icon: "uis",
    longname: "Unitus",
    description: "Unitus coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/unitus/"
    }
},{
    name: "arcticcoin",
    code: "ARC",
    icon: "arc",
    longname: "ArcticCoin",
    description: "ArcticCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/arcticcoin/"
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
    name: "high-voltage",
    code: "HVCO",
    icon: "hvco",
    longname: "High Voltage",
    description: "High Voltage coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/high-voltage/"
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
    name: "42-coin",
    code: "42",
    icon: "42",
    longname: "42-coin",
    description: "42-coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/42-coin/"
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
    name: "starcredits",
    code: "STRC",
    icon: "strc",
    longname: "StarCredits",
    description: "StarCredits coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/starcredits/"
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
    name: "magiccoin",
    code: "MAGE",
    icon: "mage",
    longname: "MagicCoin",
    description: "MagicCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/magiccoin/"
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
    name: "zetacoin",
    code: "ZET",
    icon: "zet",
    longname: "Zetacoin",
    description: "Zetacoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zetacoin/"
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
    name: "zennies",
    code: "ZENI",
    icon: "zeni",
    longname: "Zennies",
    description: "Zennies coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zennies/"
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
    name: "greencoin",
    code: "GRE",
    icon: "gre",
    longname: "Greencoin",
    description: "Greencoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/greencoin/"
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
    name: "bytecent",
    code: "BYC",
    icon: "byc",
    longname: "Bytecent",
    description: "Bytecent coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bytecent/"
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
    name: "legends-room",
    code: "LGD",
    icon: "lgd",
    longname: "Legends Room",
    description: "Legends Room coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/legends-room/"
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
    name: "insanecoin-insn",
    code: "INSN",
    icon: "insn",
    longname: "InsaneCoin",
    description: "InsaneCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/insanecoin-insn/"
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
    name: "smileycoin",
    code: "SMLY",
    icon: "smly",
    longname: "SmileyCoin",
    description: "SmileyCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/smileycoin/"
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
    name: "embers",
    code: "MBRS",
    icon: "mbrs",
    longname: "Embers",
    description: "Embers coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/embers/"
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
    name: "vivo",
    code: "VIVO",
    icon: "vivo",
    longname: "VIVO",
    description: "VIVO coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vivo/"
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
    name: "ace",
    code: "ACE",
    icon: "ace",
    longname: "Ace",
    description: "Ace coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ace/"
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
    name: "straks",
    code: "STAK",
    icon: "stak",
    longname: "STRAKS",
    description: "STRAKS coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/straks/"
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
    name: "sagacoin",
    code: "SAGA",
    icon: "saga",
    longname: "SagaCoin",
    description: "SagaCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sagacoin/"
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
    name: "hodlcoin",
    code: "HODL",
    icon: "hodl",
    longname: "HOdlcoin",
    description: "HOdlcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hodlcoin/"
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
    name: "britcoin",
    code: "BRIT",
    icon: "brit",
    longname: "BritCoin",
    description: "BritCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/britcoin/"
    }
},{
    name: "nexxus",
    code: "NXX",
    icon: "nxx",
    longname: "Nexxus",
    description: "Nexxus coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nexxus/"
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
    name: "shekel",
    code: "JEW",
    icon: "jew",
    longname: "Shekel",
    description: "Shekel coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/shekel/"
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
    name: "pluscoin",
    code: "PLC",
    icon: "plc",
    longname: "PlusCoin",
    description: "PlusCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pluscoin/"
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
    name: "happycoin",
    code: "HPC",
    icon: "hpc",
    longname: "Happycoin",
    description: "Happycoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/happycoin/"
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
    name: "peepcoin",
    code: "PCN",
    icon: "pcn",
    longname: "PeepCoin",
    description: "PeepCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/peepcoin/"
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
    name: "emphy",
    code: "EPY",
    icon: "epy",
    longname: "Emphy",
    description: "Emphy coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/emphy/"
    }
},{
    name: "the-cypherfunks",
    code: "FUNK",
    icon: "funk",
    longname: "The Cypherfunks",
    description: "The Cypherfunks coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/the-cypherfunks/"
    }
},{
    name: "dfscoin",
    code: "DFS",
    icon: "dfs",
    longname: "DFSCoin",
    description: "DFSCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dfscoin/"
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
    name: "arbitragect",
    code: "ARCT",
    icon: "arct",
    longname: "ArbitrageCT",
    description: "ArbitrageCT coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/arbitragect/"
    }
},{
    name: "macron",
    code: "MCRN",
    icon: "mcrn",
    longname: "MACRON",
    description: "MACRON coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/macron/"
    }
},{
    name: "centra",
    code: "CTR",
    icon: "ctr",
    longname: "Centra",
    description: "Centra coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/centra/"
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
    name: "iethereum",
    code: "IETH",
    icon: "ieth",
    longname: "iEthereum",
    description: "iEthereum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/iethereum/"
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
    name: "tigereum",
    code: "TIG",
    icon: "tig",
    longname: "Tigereum",
    description: "Tigereum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tigereum/"
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
    name: "piggycoin",
    code: "PIGGY",
    icon: "piggy",
    longname: "Piggycoin",
    description: "Piggycoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/piggycoin/"
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
    name: "equal",
    code: "EQL",
    icon: "eql",
    longname: "Equal",
    description: "Equal coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/equal/"
    }
},{
    name: "guncoin",
    code: "GUN",
    icon: "gun",
    longname: "Guncoin",
    description: "Guncoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/guncoin/"
    }
},{
    name: "tittiecoin",
    code: "TTC",
    icon: "ttc",
    longname: "TittieCoin",
    description: "TittieCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tittiecoin/"
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
    name: "crowdcoin",
    code: "CRC",
    icon: "crc",
    longname: "CrowdCoin",
    description: "CrowdCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/crowdcoin/"
    }
},{
    name: "bitbar",
    code: "BTB",
    icon: "btb",
    longname: "BitBar",
    description: "BitBar coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitbar/"
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
    name: "machinecoin",
    code: "MAC",
    icon: "mac",
    longname: "Machinecoin",
    description: "Machinecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/machinecoin/"
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
    name: "roulettetoken",
    code: "RLT",
    icon: "rlt",
    longname: "RouletteToken",
    description: "RouletteToken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/roulettetoken/"
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
    name: "billionaire-token",
    code: "XBL",
    icon: "xbl",
    longname: "Billionaire Token",
    description: "Billionaire Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/billionaire-token/"
    }
},{
    name: "bitgem",
    code: "BTG",
    icon: "btg",
    longname: "Bitgem",
    description: "Bitgem coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitgem/"
    }
},{
    name: "ganjacoin",
    code: "MRJA",
    icon: "mrja",
    longname: "GanjaCoin",
    description: "GanjaCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ganjacoin/"
    }
},{
    name: "copico",
    code: "XCPO",
    icon: "xcpo",
    longname: "Copico",
    description: "Copico coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/copico/"
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
    name: "ethereumcash",
    code: "ECASH",
    icon: "ecash",
    longname: "Ethereum Cash",
    description: "Ethereum Cash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ethereumcash/"
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
    name: "bigup",
    code: "BIGUP",
    icon: "bigup",
    longname: "BigUp",
    description: "BigUp coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bigup/"
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
    name: "leviarcoin",
    code: "XLC",
    icon: "xlc",
    longname: "LeviarCoin",
    description: "LeviarCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/leviarcoin/"
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
    name: "adcoin",
    code: "ACC",
    icon: "acc",
    longname: "AdCoin",
    description: "AdCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/adcoin/"
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
    name: "elcoin-el",
    code: "EL",
    icon: "el",
    longname: "Elcoin",
    description: "Elcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/elcoin-el/"
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
    name: "bitcoin-scrypt",
    code: "BTCS",
    icon: "btcs",
    longname: "Bitcoin Scrypt",
    description: "Bitcoin Scrypt coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoin-scrypt/"
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
    name: "tokyo",
    code: "TOKC",
    icon: "tokc",
    longname: "TOKYO",
    description: "TOKYO coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tokyo/"
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
    name: "minereum",
    code: "MNE",
    icon: "mne",
    longname: "Minereum",
    description: "Minereum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/minereum/"
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
    name: "goldblocks",
    code: "GB",
    icon: "gb",
    longname: "GoldBlocks",
    description: "GoldBlocks coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/goldblocks/"
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
    name: "kushcoin",
    code: "KUSH",
    icon: "kush",
    longname: "KushCoin",
    description: "KushCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kushcoin/"
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
    name: "kurrent",
    code: "KURT",
    icon: "kurt",
    longname: "Kurrent",
    description: "Kurrent coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kurrent/"
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
    name: "bitair",
    code: "BTCA",
    icon: "btca",
    longname: "Bitair",
    description: "Bitair coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitair/"
    }
},{
    name: "glasscoin",
    code: "GLS",
    icon: "gls",
    longname: "GlassCoin",
    description: "GlassCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/glasscoin/"
    }
},{
    name: "daxxcoin",
    code: "DAXX",
    icon: "daxx",
    longname: "DaxxCoin",
    description: "DaxxCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/daxxcoin/"
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
    name: "steneum-coin",
    code: "STN",
    icon: "stn",
    longname: "Steneum Coin",
    description: "Steneum Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/steneum-coin/"
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
    name: "bitcoinfast",
    code: "BCF",
    icon: "bcf",
    longname: "Bitcoin Fast",
    description: "Bitcoin Fast coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoinfast/"
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
    name: "garlicoin",
    code: "GRLC",
    icon: "grlc",
    longname: "Garlicoin",
    description: "Garlicoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/garlicoin/"
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
    name: "centurion",
    code: "CNT",
    icon: "cnt",
    longname: "Centurion",
    description: "Centurion coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/centurion/"
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
    name: "mojocoin",
    code: "MOJO",
    icon: "mojo",
    longname: "MojoCoin",
    description: "MojoCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mojocoin/"
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
    name: "galactrum",
    code: "ORE",
    icon: "ore",
    longname: "Galactrum",
    description: "Galactrum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/galactrum/"
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
    name: "whalecoin",
    code: "WHL",
    icon: "whl",
    longname: "WhaleCoin",
    description: "WhaleCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/whalecoin/"
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
    name: "onix",
    code: "ONX",
    icon: "onx",
    longname: "Onix",
    description: "Onix coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/onix/"
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
    name: "bitgold",
    code: "BITGOLD",
    icon: "bitgold",
    longname: "bitGold",
    description: "bitGold coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitgold/"
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
    name: "philosopher-stones",
    code: "PHS",
    icon: "phs",
    longname: "Philosopher Stones",
    description: "Philosopher Stones coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/philosopher-stones/"
    }
},{
    name: "sterlingcoin",
    code: "SLG",
    icon: "slg",
    longname: "Sterlingcoin",
    description: "Sterlingcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sterlingcoin/"
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
    name: "cartaxi-token",
    code: "CTX",
    icon: "ctx",
    longname: "CarTaxi Token",
    description: "CarTaxi Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cartaxi-token/"
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
    name: "ethereum-gold",
    code: "ETG",
    icon: "etg",
    longname: "Ethereum Gold",
    description: "Ethereum Gold coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ethereum-gold/"
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
    name: "hicoin",
    code: "XHI",
    icon: "xhi",
    longname: "HiCoin",
    description: "HiCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hicoin/"
    }
},{
    name: "speedcash",
    code: "SCS",
    icon: "scs",
    longname: "Speedcash",
    description: "Speedcash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/speedcash/"
    }
},{
    name: "zcash-gold",
    code: "ZCG",
    icon: "zcg",
    longname: "Zlancer",
    description: "Zlancer coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zcash-gold/"
    }
},{
    name: "gpu-coin",
    code: "GPU",
    icon: "gpu",
    longname: "GPU Coin",
    description: "GPU Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gpu-coin/"
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
    name: "parkbyte",
    code: "PKB",
    icon: "pkb",
    longname: "ParkByte",
    description: "ParkByte coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/parkbyte/"
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
    name: "virtacoin",
    code: "VTA",
    icon: "vta",
    longname: "Virtacoin",
    description: "Virtacoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/virtacoin/"
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
    name: "theresa-may-coin",
    code: "MAY",
    icon: "may",
    longname: "Theresa May Coin",
    description: "Theresa May Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/theresa-may-coin/"
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
    name: "ethereum-dark",
    code: "ETHD",
    icon: "ethd",
    longname: "Ethereum Dark",
    description: "Ethereum Dark coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ethereum-dark/"
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
    name: "desire",
    code: "DSR",
    icon: "dsr",
    longname: "Desire",
    description: "Desire coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/desire/"
    }
},{
    name: "octocoin",
    code: "888",
    icon: "888",
    longname: "OctoCoin",
    description: "OctoCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/octocoin/"
    }
},{
    name: "kayicoin",
    code: "KAYI",
    icon: "kayi",
    longname: "Kayicoin",
    description: "Kayicoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kayicoin/"
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
    name: "tokugawa",
    code: "TOK",
    icon: "tok",
    longname: "Tokugawa",
    description: "Tokugawa coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tokugawa/"
    }
},{
    name: "influxcoin",
    code: "INFX",
    icon: "infx",
    longname: "Influxcoin",
    description: "Influxcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/influxcoin/"
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
    name: "biteur",
    code: "BITEUR",
    icon: "biteur",
    longname: "bitEUR",
    description: "bitEUR coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/biteur/"
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
    name: "mustangcoin",
    code: "MST",
    icon: "mst",
    longname: "MustangCoin",
    description: "MustangCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mustangcoin/"
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
    name: "parallelcoin",
    code: "DUO",
    icon: "duo",
    longname: "ParallelCoin",
    description: "ParallelCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/parallelcoin/"
    }
},{
    name: "global-tour-coin",
    code: "GTC",
    icon: "gtc",
    longname: "Global Tour Coin",
    description: "Global Tour Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/global-tour-coin/"
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
    name: "agrolifecoin",
    code: "AGLC",
    icon: "aglc",
    longname: "AgrolifeCoin",
    description: "AgrolifeCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/agrolifecoin/"
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
    name: "coinonat",
    code: "CXT",
    icon: "cxt",
    longname: "Coinonat",
    description: "Coinonat coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/coinonat/"
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
    name: "bumbacoin",
    code: "BUMBA",
    icon: "bumba",
    longname: "BumbaCoin",
    description: "BumbaCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bumbacoin/"
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
    name: "dalecoin",
    code: "DALC",
    icon: "dalc",
    longname: "Dalecoin",
    description: "Dalecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dalecoin/"
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
    name: "acoin",
    code: "ACOIN",
    icon: "acoin",
    longname: "Acoin",
    description: "Acoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/acoin/"
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
    name: "vaperscoin",
    code: "VPRC",
    icon: "vprc",
    longname: "VapersCoin",
    description: "VapersCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vaperscoin/"
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
    name: "chancoin",
    code: "CHAN",
    icon: "chan",
    longname: "ChanCoin",
    description: "ChanCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/chancoin/"
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
    name: "virta-unique-coin",
    code: "VUC",
    icon: "vuc",
    longname: "Virta Unique Coin",
    description: "Virta Unique Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/virta-unique-coin/"
    }
},{
    name: "zetamicron",
    code: "ZMC",
    icon: "zmc",
    longname: "ZetaMicron",
    description: "ZetaMicron coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zetamicron/"
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
    name: "neuro",
    code: "NRO",
    icon: "nro",
    longname: "Neuro",
    description: "Neuro coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/neuro/"
    }
},{
    name: "goldpieces",
    code: "GP",
    icon: "gp",
    longname: "GoldPieces",
    description: "GoldPieces coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/goldpieces/"
    }
},{
    name: "bitasean",
    code: "BAS",
    icon: "bas",
    longname: "BitAsean",
    description: "BitAsean coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitasean/"
    }
},{
    name: "digital-rupees",
    code: "DRS",
    icon: "drs",
    longname: "Digital Rupees",
    description: "Digital Rupees coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/digital-rupees/"
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
    name: "cannation",
    code: "CNNC",
    icon: "cnnc",
    longname: "Cannation",
    description: "Cannation coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cannation/"
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
    name: "homeblockcoin",
    code: "HBC",
    icon: "hbc",
    longname: "HomeBlockCoin",
    description: "HomeBlockCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/homeblockcoin/"
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
    name: "bipcoin",
    code: "BIP",
    icon: "bip",
    longname: "BipCoin",
    description: "BipCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bipcoin/"
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
    name: "asiadigicoin",
    code: "ADCN",
    icon: "adcn",
    longname: "Asiadigicoin",
    description: "Asiadigicoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/asiadigicoin/"
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
    name: "useless-ethereum-token",
    code: "UET",
    icon: "uet",
    longname: "Useless Ethereum Token",
    description: "Useless Ethereum Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/useless-ethereum-token/"
    }
},{
    name: "virtacoinplus",
    code: "XVP",
    icon: "xvp",
    longname: "Virtacoinplus",
    description: "Virtacoinplus coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/virtacoinplus/"
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
    name: "litecoin-ultra",
    code: "LTCU",
    icon: "ltcu",
    longname: "LiteCoin Ultra",
    description: "LiteCoin Ultra coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/litecoin-ultra/"
    }
},{
    name: "royal-kingdom-coin",
    code: "RKC",
    icon: "rkc",
    longname: "Royal Kingdom Coin",
    description: "Royal Kingdom Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/royal-kingdom-coin/"
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
    name: "torcoin-tor",
    code: "TOR",
    icon: "tor",
    longname: "Torcoin",
    description: "Torcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/torcoin-tor/"
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
    name: "women",
    code: "WOMEN",
    icon: "women",
    longname: "WomenCoin",
    description: "WomenCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/women/"
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
    name: "madcoin",
    code: "MDC",
    icon: "mdc",
    longname: "Madcoin",
    description: "Madcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/madcoin/"
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
    name: "harmonycoin-hmc",
    code: "HMC",
    icon: "hmc",
    longname: "HarmonyCoin",
    description: "HarmonyCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/harmonycoin-hmc/"
    }
},{
    name: "tristar-coin",
    code: "TSTR",
    icon: "tstr",
    longname: "Tristar Coin",
    description: "Tristar Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tristar-coin/"
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
    name: "caliphcoin",
    code: "CALC",
    icon: "calc",
    longname: "CaliphCoin",
    description: "CaliphCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/caliphcoin/"
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
    name: "cobinhood",
    code: "COB",
    icon: "cob",
    longname: "Cobinhood",
    description: "Cobinhood coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cobinhood/"
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
    name: "bitqy",
    code: "BQ",
    icon: "bq",
    longname: "bitqy",
    description: "bitqy coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitqy/"
    }
},{
    name: "hedge",
    code: "HDG",
    icon: "hdg",
    longname: "Hedge",
    description: "Hedge coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hedge/"
    }
},{
    name: "earthcoin",
    code: "EAC",
    icon: "eac",
    longname: "EarthCoin",
    description: "EarthCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/earthcoin/"
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
    name: "kilocoin",
    code: "KLC",
    icon: "klc",
    longname: "KiloCoin",
    description: "KiloCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kilocoin/"
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
    name: "asiacoin",
    code: "AC",
    icon: "ac",
    longname: "AsiaCoin",
    description: "AsiaCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/asiacoin/"
    }
},{
    name: "e-coin",
    code: "ECN",
    icon: "ecn",
    longname: "E-coin",
    description: "E-coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/e-coin/"
    }
},{
    name: "vcash",
    code: "XVC",
    icon: "xvc",
    longname: "Vcash",
    description: "Vcash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vcash/"
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
    name: "xenon",
    code: "XNN",
    icon: "xnn",
    longname: "Xenon",
    description: "Xenon coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/xenon/"
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
    name: "blockpool",
    code: "BPL",
    icon: "bpl",
    longname: "Blockpool",
    description: "Blockpool coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blockpool/"
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
    name: "vezt",
    code: "VZT",
    icon: "vzt",
    longname: "Vezt",
    description: "Vezt coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vezt/"
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
    name: "goodomy",
    code: "GOOD",
    icon: "good",
    longname: "Goodomy",
    description: "Goodomy coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/goodomy/"
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
    name: "bullion",
    code: "CBX",
    icon: "cbx",
    longname: "Bullion",
    description: "Bullion coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bullion/"
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
    name: "encryptotel",
    code: "ETT",
    icon: "ett",
    longname: "EncryptoTel [WAVES]",
    description: "EncryptoTel [WAVES] coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/encryptotel/"
    }
},{
    name: "bowhead",
    code: "AHT",
    icon: "aht",
    longname: "Bowhead",
    description: "Bowhead coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bowhead/"
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
    name: "jesus-coin",
    code: "JC",
    icon: "jc",
    longname: "Jesus Coin",
    description: "Jesus Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/jesus-coin/"
    }
},{
    name: "leafcoin",
    code: "LEAF",
    icon: "leaf",
    longname: "LeafCoin",
    description: "LeafCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/leafcoin/"
    }
},{
    name: "real-estate-tokens",
    code: "REX",
    icon: "rex",
    longname: "REX",
    description: "REX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/real-estate-tokens/"
    }
},{
    name: "fundyourselfnow",
    code: "FYN",
    icon: "fyn",
    longname: "FundYourselfNow",
    description: "FundYourselfNow coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fundyourselfnow/"
    }
},{
    name: "bitboost",
    code: "BBT",
    icon: "bbt",
    longname: "BitBoost",
    description: "BitBoost coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitboost/"
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
    name: "yashcoin",
    code: "YASH",
    icon: "yash",
    longname: "YashCoin",
    description: "YashCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/yashcoin/"
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
    name: "neverdie",
    code: "NDC",
    icon: "ndc",
    longname: "NEVERDIE",
    description: "NEVERDIE coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/neverdie/"
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
    name: "fluttercoin",
    code: "FLT",
    icon: "flt",
    longname: "FlutterCoin",
    description: "FlutterCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fluttercoin/"
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
    name: "universe",
    code: "UNI",
    icon: "uni",
    longname: "Universe",
    description: "Universe coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/universe/"
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
    name: "monster-byte",
    code: "MBI",
    icon: "mbi",
    longname: "Monster Byte",
    description: "Monster Byte coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/monster-byte/"
    }
},{
    name: "shorty",
    code: "SHORTY",
    icon: "shorty",
    longname: "Shorty",
    description: "Shorty coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/shorty/"
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
    name: "commodity-ad-network",
    code: "CDX",
    icon: "cdx",
    longname: "Commodity Ad Network",
    description: "Commodity Ad Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/commodity-ad-network/"
    }
},{
    name: "fucktoken",
    code: "FUCK",
    icon: "fuck",
    longname: "FuckToken",
    description: "FuckToken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fucktoken/"
    }
},{
    name: "metalcoin",
    code: "METAL",
    icon: "metal",
    longname: "MetalCoin",
    description: "MetalCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/metalcoin/"
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
    name: "fantomcoin",
    code: "FCN",
    icon: "fcn",
    longname: "Fantomcoin",
    description: "Fantomcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fantomcoin/"
    }
},{
    name: "unicoin",
    code: "UNIC",
    icon: "unic",
    longname: "UniCoin",
    description: "UniCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/unicoin/"
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
    name: "renos",
    code: "RNS",
    icon: "rns",
    longname: "Renos",
    description: "Renos coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/renos/"
    }
},{
    name: "netcoin",
    code: "NET",
    icon: "net",
    longname: "NetCoin",
    description: "NetCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/netcoin/"
    }
},{
    name: "bitpark-coin",
    code: "BPC",
    icon: "bpc",
    longname: "Bitpark Coin",
    description: "Bitpark Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitpark-coin/"
    }
},{
    name: "hitcoin",
    code: "HTC",
    icon: "htc",
    longname: "HitCoin",
    description: "HitCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hitcoin/"
    }
},{
    name: "hobonickels",
    code: "HBN",
    icon: "hbn",
    longname: "HoboNickels",
    description: "HoboNickels coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hobonickels/"
    }
},{
    name: "intelligent-trading-tech",
    code: "ITT",
    icon: "itt",
    longname: "Intelligent Trading Tech",
    description: "Intelligent Trading Tech coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/intelligent-trading-tech/"
    }
},{
    name: "shadowcash",
    code: "SDC",
    icon: "sdc",
    longname: "ShadowCash",
    description: "ShadowCash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/shadowcash/"
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
    name: "i0coin",
    code: "I0C",
    icon: "i0c",
    longname: "I0Coin",
    description: "I0Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/i0coin/"
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
    name: "global-jobcoin",
    code: "GJC",
    icon: "gjc",
    longname: "Global Jobcoin",
    description: "Global Jobcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/global-jobcoin/"
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
    name: "megacoin",
    code: "MEC",
    icon: "mec",
    longname: "Megacoin",
    description: "Megacoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/megacoin/"
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
    name: "bitstar",
    code: "BITS",
    icon: "bits",
    longname: "Bitstar",
    description: "Bitstar coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitstar/"
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
    name: "triangles",
    code: "TRI",
    icon: "tri",
    longname: "Triangles",
    description: "Triangles coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/triangles/"
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
    name: "swagbucks",
    code: "BUCKS",
    icon: "bucks",
    longname: "SwagBucks",
    description: "SwagBucks coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/swagbucks/"
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
    name: "lanacoin",
    code: "LANA",
    icon: "lana",
    longname: "LanaCoin",
    description: "LanaCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/lanacoin/"
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
    name: "valorbit",
    code: "VAL",
    icon: "val",
    longname: "Valorbit",
    description: "Valorbit coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/valorbit/"
    }
},{
    name: "blazecoin",
    code: "BLZ",
    icon: "blz",
    longname: "BlazeCoin",
    description: "BlazeCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blazecoin/"
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
    name: "dashcoin",
    code: "DSH",
    icon: "dsh",
    longname: "Dashcoin",
    description: "Dashcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dashcoin/"
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
    name: "manna",
    code: "MANNA",
    icon: "manna",
    longname: "Manna",
    description: "Manna coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/manna/"
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
    name: "datacoin",
    code: "DTC",
    icon: "dtc",
    longname: "Datacoin",
    description: "Datacoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/datacoin/"
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
    name: "bitcurrency",
    code: "BTCR",
    icon: "btcr",
    longname: "Bitcurrency",
    description: "Bitcurrency coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcurrency/"
    }
},{
    name: "gaia",
    code: "GAIA",
    icon: "gaia",
    longname: "GAIA",
    description: "GAIA coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gaia/"
    }
},{
    name: "flycoin",
    code: "FLY",
    icon: "fly",
    longname: "Flycoin",
    description: "Flycoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/flycoin/"
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
    name: "bitbtc",
    code: "BITBTC",
    icon: "bitbtc",
    longname: "bitBTC",
    description: "bitBTC coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitbtc/"
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
    name: "tagcoin",
    code: "TAG",
    icon: "tag",
    longname: "TagCoin",
    description: "TagCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tagcoin/"
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
    name: "smartcoin",
    code: "SMC",
    icon: "smc",
    longname: "SmartCoin",
    description: "SmartCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/smartcoin/"
    }
},{
    name: "cypher",
    code: "CYP",
    icon: "cyp",
    longname: "Cypher",
    description: "Cypher coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cypher/"
    }
},{
    name: "digicube",
    code: "CUBE",
    icon: "cube",
    longname: "DigiCube",
    description: "DigiCube coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/digicube/"
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
    name: "ultracoin",
    code: "UTC",
    icon: "utc",
    longname: "UltraCoin",
    description: "UltraCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ultracoin/"
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
    name: "joulecoin",
    code: "XJO",
    icon: "xjo",
    longname: "Joulecoin",
    description: "Joulecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/joulecoin/"
    }
},{
    name: "ebitcoin-cash",
    code: "EBCH",
    icon: "ebch",
    longname: "eBitcoinCash",
    description: "eBitcoinCash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ebitcoin-cash/"
    }
},{
    name: "tattoocoin",
    code: "TSE",
    icon: "tse",
    longname: "Tattoocoin (Standard Edition)",
    description: "Tattoocoin (Standard Edition) coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tattoocoin/"
    }
},{
    name: "digital-developers-fund",
    code: "DDF",
    icon: "ddf",
    longname: "DigitalDevelopersFund",
    description: "DigitalDevelopersFund coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/digital-developers-fund/"
    }
},{
    name: "ambercoin",
    code: "AMBER",
    icon: "amber",
    longname: "AmberCoin",
    description: "AmberCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ambercoin/"
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
    name: "coin",
    code: "CNO",
    icon: "cno",
    longname: "Coin(O)",
    description: "Coin(O) coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/coin/"
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
    name: "bitz",
    code: "BITZ",
    icon: "bitz",
    longname: "Bitz",
    description: "Bitz coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitz/"
    }
},{
    name: "visio",
    code: "VISIO",
    icon: "visio",
    longname: "Visio",
    description: "Visio coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/visio/"
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
    name: "evil-coin",
    code: "EVIL",
    icon: "evil",
    longname: "Evil Coin",
    description: "Evil Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/evil-coin/"
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
    name: "golfcoin",
    code: "GOLF",
    icon: "golf",
    longname: "Golfcoin",
    description: "Golfcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/golfcoin/"
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
    name: "nevacoin",
    code: "NEVA",
    icon: "neva",
    longname: "NevaCoin",
    description: "NevaCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nevacoin/"
    }
},{
    name: "satoshimadness",
    code: "MAD",
    icon: "mad",
    longname: "SatoshiMadness",
    description: "SatoshiMadness coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/satoshimadness/"
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
    name: "titcoin",
    code: "TIT",
    icon: "tit",
    longname: "Titcoin",
    description: "Titcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/titcoin/"
    }
},{
    name: "cannacoin",
    code: "CCN",
    icon: "ccn",
    longname: "CannaCoin",
    description: "CannaCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cannacoin/"
    }
},{
    name: "mineum",
    code: "MNM",
    icon: "mnm",
    longname: "Mineum",
    description: "Mineum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mineum/"
    }
},{
    name: "px",
    code: "PX",
    icon: "px",
    longname: "PX",
    description: "PX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/px/"
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
    name: "scorecoin",
    code: "SCORE",
    icon: "score",
    longname: "Scorecoin",
    description: "Scorecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/scorecoin/"
    }
},{
    name: "icoin",
    code: "ICN",
    icon: "icn",
    longname: "iCoin",
    description: "iCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/icoin/"
    }
},{
    name: "tigercoin",
    code: "TGC",
    icon: "tgc",
    longname: "Tigercoin",
    description: "Tigercoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tigercoin/"
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
    name: "dix-asset",
    code: "DIX",
    icon: "dix",
    longname: "Dix Asset",
    description: "Dix Asset coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dix-asset/"
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
    name: "helleniccoin",
    code: "HNC",
    icon: "hnc",
    longname: "Helleniccoin",
    description: "Helleniccoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/helleniccoin/"
    }
},{
    name: "prototanium",
    code: "PR",
    icon: "pr",
    longname: "Prototanium",
    description: "Prototanium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/prototanium/"
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
    name: "freicoin",
    code: "FRC",
    icon: "frc",
    longname: "Freicoin",
    description: "Freicoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/freicoin/"
    }
},{
    name: "blockpay",
    code: "BLOCKPAY",
    icon: "blockpay",
    longname: "BlockPay",
    description: "BlockPay coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blockpay/"
    }
},{
    name: "gameunits",
    code: "UNITS",
    icon: "units",
    longname: "GameUnits",
    description: "GameUnits coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gameunits/"
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
    name: "pakcoin",
    code: "PAK",
    icon: "pak",
    longname: "Pakcoin",
    description: "Pakcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pakcoin/"
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
    name: "octanox",
    code: "OTX",
    icon: "otx",
    longname: "Octanox",
    description: "Octanox coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/octanox/"
    }
},{
    name: "sproutsextreme",
    code: "SPEX",
    icon: "spex",
    longname: "SproutsExtreme",
    description: "SproutsExtreme coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sproutsextreme/"
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
    name: "ammo-reloaded",
    code: "AMMO",
    icon: "ammo",
    longname: "Ammo Reloaded",
    description: "Ammo Reloaded coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ammo-reloaded/"
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
    name: "atomic-coin",
    code: "ATOM",
    icon: "atom",
    longname: "Atomic Coin",
    description: "Atomic Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/atomic-coin/"
    }
},{
    name: "newbium",
    code: "NEWB",
    icon: "newb",
    longname: "Newbium",
    description: "Newbium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/newbium/"
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
    name: "islacoin",
    code: "ISL",
    icon: "isl",
    longname: "IslaCoin",
    description: "IslaCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/islacoin/"
    }
},{
    name: "globalcoin",
    code: "GLC",
    icon: "glc",
    longname: "GlobalCoin",
    description: "GlobalCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/globalcoin/"
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
    name: "darsek",
    code: "KED",
    icon: "ked",
    longname: "Darsek",
    description: "Darsek coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/darsek/"
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
    name: "xios",
    code: "XIOS",
    icon: "xios",
    longname: "Xios",
    description: "Xios coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/xios/"
    }
},{
    name: "abjcoin",
    code: "ABJ",
    icon: "abj",
    longname: "Abjcoin",
    description: "Abjcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/abjcoin/"
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
    name: "ratecoin",
    code: "XRA",
    icon: "xra",
    longname: "Ratecoin",
    description: "Ratecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ratecoin/"
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
    name: "litebar",
    code: "LTB",
    icon: "ltb",
    longname: "LiteBar",
    description: "LiteBar coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/litebar/"
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
    name: "aerium",
    code: "AERM",
    icon: "aerm",
    longname: "Aerium",
    description: "Aerium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aerium/"
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
    name: "irishcoin",
    code: "IRL",
    icon: "irl",
    longname: "IrishCoin",
    description: "IrishCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/irishcoin/"
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
    name: "swing",
    code: "SWING",
    icon: "swing",
    longname: "Swing",
    description: "Swing coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/swing/"
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
    name: "amsterdamcoin",
    code: "AMS",
    icon: "ams",
    longname: "AmsterdamCoin",
    description: "AmsterdamCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/amsterdamcoin/"
    }
},{
    name: "leacoin",
    code: "LEA",
    icon: "lea",
    longname: "LeaCoin",
    description: "LeaCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/leacoin/"
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
    name: "redcoin",
    code: "RED",
    icon: "red",
    longname: "RedCoin",
    description: "RedCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/redcoin/"
    }
},{
    name: "spacecoin",
    code: "SPACE",
    icon: "space",
    longname: "SpaceCoin",
    description: "SpaceCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/spacecoin/"
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
    name: "virtualcoin",
    code: "VC",
    icon: "vc",
    longname: "VirtualCoin",
    description: "VirtualCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/virtualcoin/"
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
    name: "grimcoin",
    code: "GRIM",
    icon: "grim",
    longname: "Grimcoin",
    description: "Grimcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/grimcoin/"
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
    name: "catcoin",
    code: "CAT",
    icon: "cat",
    longname: "Catcoin",
    description: "Catcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/catcoin/"
    }
},{
    name: "sativacoin",
    code: "STV",
    icon: "stv",
    longname: "Sativacoin",
    description: "Sativacoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sativacoin/"
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
    name: "firecoin",
    code: "FIRE",
    icon: "fire",
    longname: "Firecoin",
    description: "Firecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/firecoin/"
    }
},{
    name: "confido",
    code: "CFD",
    icon: "cfd",
    longname: "Confido",
    description: "Confido coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/confido/"
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
    name: "yacoin",
    code: "YAC",
    icon: "yac",
    longname: "Yacoin",
    description: "Yacoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/yacoin/"
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
    name: "quatloo",
    code: "QTL",
    icon: "qtl",
    longname: "Quatloo",
    description: "Quatloo coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/quatloo/"
    }
},{
    name: "chronos",
    code: "CRX",
    icon: "crx",
    longname: "Chronos",
    description: "Chronos coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/chronos/"
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
    name: "ccore",
    code: "CCO",
    icon: "cco",
    longname: "Ccore",
    description: "Ccore coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ccore/"
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
    name: "reecoin",
    code: "REE",
    icon: "ree",
    longname: "ReeCoin",
    description: "ReeCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/reecoin/"
    }
},{
    name: "evotion",
    code: "EVO",
    icon: "evo",
    longname: "Evotion",
    description: "Evotion coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/evotion/"
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
    name: "enigma",
    code: "XNG",
    icon: "xng",
    longname: "Enigma",
    description: "Enigma coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/enigma/"
    }
},{
    name: "paycon",
    code: "CON",
    icon: "con",
    longname: "PayCon",
    description: "PayCon coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/paycon/"
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
    name: "dollarcoin",
    code: "DLC",
    icon: "dlc",
    longname: "Dollarcoin",
    description: "Dollarcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dollarcoin/"
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
    name: "polcoin",
    code: "PLC",
    icon: "plc",
    longname: "Polcoin",
    description: "Polcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/polcoin/"
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
    name: "hempcoin-hmp",
    code: "HMP",
    icon: "hmp",
    longname: "HempCoin",
    description: "HempCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hempcoin-hmp/"
    }
},{
    name: "creatio",
    code: "XCRE",
    icon: "xcre",
    longname: "Creatio",
    description: "Creatio coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/creatio/"
    }
},{
    name: "guccionecoin",
    code: "GCC",
    icon: "gcc",
    longname: "GuccioneCoin",
    description: "GuccioneCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/guccionecoin/"
    }
},{
    name: "network-token",
    code: "NTWK",
    icon: "ntwk",
    longname: "Network Token",
    description: "Network Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/network-token/"
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
    name: "cabbage",
    code: "CAB",
    icon: "cab",
    longname: "Cabbage",
    description: "Cabbage coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cabbage/"
    }
},{
    name: "beatcoin",
    code: "XBTS",
    icon: "xbts",
    longname: "Beatcoin",
    description: "Beatcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/beatcoin/"
    }
},{
    name: "lendconnect",
    code: "LCT",
    icon: "lct",
    longname: "LendConnect",
    description: "LendConnect coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/lendconnect/"
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
    name: "blackstar",
    code: "BSTAR",
    icon: "bstar",
    longname: "Blackstar",
    description: "Blackstar coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blackstar/"
    }
},{
    name: "elacoin",
    code: "ELC",
    icon: "elc",
    longname: "Elacoin",
    description: "Elacoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/elacoin/"
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
    name: "funcoin",
    code: "FUNC",
    icon: "func",
    longname: "FUNCoin",
    description: "FUNCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/funcoin/"
    }
},{
    name: "ride-my-car",
    code: "RIDE",
    icon: "ride",
    longname: "Ride My Car",
    description: "Ride My Car coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ride-my-car/"
    }
},{
    name: "eaglecoin",
    code: "EAGLE",
    icon: "eagle",
    longname: "EagleCoin",
    description: "EagleCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/eaglecoin/"
    }
},{
    name: "bnrtxcoin",
    code: "BNX",
    icon: "bnx",
    longname: "BnrtxCoin",
    description: "BnrtxCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bnrtxcoin/"
    }
},{
    name: "cryptoescudo",
    code: "CESC",
    icon: "cesc",
    longname: "CryptoEscudo",
    description: "CryptoEscudo coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cryptoescudo/"
    }
},{
    name: "money",
    code: "$$$",
    icon: "$$$",
    longname: "Money",
    description: "Money coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/money/"
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
    name: "metal-music-coin",
    code: "MTLMC3",
    icon: "mtlmc3",
    longname: "Metal Music Coin",
    description: "Metal Music Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/metal-music-coin/"
    }
},{
    name: "debitcoin",
    code: "DBTC",
    icon: "dbtc",
    longname: "Debitcoin",
    description: "Debitcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/debitcoin/"
    }
},{
    name: "cachecoin",
    code: "CACH",
    icon: "cach",
    longname: "CacheCoin",
    description: "CacheCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cachecoin/"
    }
},{
    name: "sojourn",
    code: "SOJ",
    icon: "soj",
    longname: "Sojourn",
    description: "Sojourn coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sojourn/"
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
    name: "guess",
    code: "GUESS",
    icon: "guess",
    longname: "Peerguess",
    description: "Peerguess coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/guess/"
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
    name: "idice",
    code: "ICE",
    icon: "ice",
    longname: "iDice",
    description: "iDice coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/idice/"
    }
},{
    name: "starcash-network",
    code: "STARS",
    icon: "stars",
    longname: "StarCash Network",
    description: "StarCash Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/starcash-network/"
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
    name: "comet",
    code: "CMT",
    icon: "cmt",
    longname: "Comet",
    description: "Comet coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/comet/"
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
    name: "roofs",
    code: "ROOFS",
    icon: "roofs",
    longname: "Roofs",
    description: "Roofs coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/roofs/"
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
    name: "billarycoin",
    code: "BLRY",
    icon: "blry",
    longname: "BillaryCoin",
    description: "BillaryCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/billarycoin/"
    }
},{
    name: "spots",
    code: "SPT",
    icon: "spt",
    longname: "Spots",
    description: "Spots coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/spots/"
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
    name: "californium",
    code: "CF",
    icon: "cf",
    longname: "Californium",
    description: "Californium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/californium/"
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
    name: "jewels",
    code: "JWL",
    icon: "jwl",
    longname: "Jewels",
    description: "Jewels coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/jewels/"
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
    name: "shilling",
    code: "SH",
    icon: "sh",
    longname: "Shilling",
    description: "Shilling coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/shilling/"
    }
},{
    name: "fincoin",
    code: "FNC",
    icon: "fnc",
    longname: "FinCoin",
    description: "FinCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fincoin/"
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
    name: "artex-coin",
    code: "ATX",
    icon: "atx",
    longname: "Artex Coin",
    description: "Artex Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/artex-coin/"
    }
},{
    name: "gold-pressed-latinum",
    code: "GPL",
    icon: "gpl",
    longname: "Gold Pressed Latinum",
    description: "Gold Pressed Latinum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gold-pressed-latinum/"
    }
},{
    name: "warp",
    code: "WARP",
    icon: "warp",
    longname: "WARP",
    description: "WARP coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/warp/"
    }
},{
    name: "solarflarecoin",
    code: "SFC",
    icon: "sfc",
    longname: "Solarflarecoin",
    description: "Solarflarecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/solarflarecoin/"
    }
},{
    name: "uro",
    code: "URO",
    icon: "uro",
    longname: "Uro",
    description: "Uro coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/uro/"
    }
},{
    name: "printerium",
    code: "PRX",
    icon: "prx",
    longname: "Printerium",
    description: "Printerium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/printerium/"
    }
},{
    name: "quazarcoin",
    code: "QCN",
    icon: "qcn",
    longname: "QuazarCoin",
    description: "QuazarCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/quazarcoin/"
    }
},{
    name: "mindcoin",
    code: "MND",
    icon: "mnd",
    longname: "MindCoin",
    description: "MindCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mindcoin/"
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
    name: "vip-tokens",
    code: "VIP",
    icon: "vip",
    longname: "VIP Tokens",
    description: "VIP Tokens coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vip-tokens/"
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
    name: "kronecoin",
    code: "KRONE",
    icon: "krone",
    longname: "Kronecoin",
    description: "Kronecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kronecoin/"
    }
},{
    name: "kingn-coin",
    code: "KNC",
    icon: "knc",
    longname: "KingN Coin",
    description: "KingN Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kingn-coin/"
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
    name: "iconic",
    code: "ICON",
    icon: "icon",
    longname: "Iconic",
    description: "Iconic coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/iconic/"
    }
},{
    name: "dappster",
    code: "DLISK",
    icon: "dlisk",
    longname: "DAPPSTER",
    description: "DAPPSTER coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dappster/"
    }
},{
    name: "bitcedi",
    code: "BXC",
    icon: "bxc",
    longname: "Bitcedi",
    description: "Bitcedi coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcedi/"
    }
},{
    name: "crypto",
    code: "CTO",
    icon: "cto",
    longname: "Crypto",
    description: "Crypto coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/crypto/"
    }
},{
    name: "altcommunity-coin",
    code: "ALTCOM",
    icon: "altcom",
    longname: "SONO",
    description: "SONO coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/altcommunity-coin/"
    }
},{
    name: "slevin",
    code: "SLEVIN",
    icon: "slevin",
    longname: "Slevin",
    description: "Slevin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/slevin/"
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
    name: "luna-coin",
    code: "LUNA",
    icon: "luna",
    longname: "Luna Coin",
    description: "Luna Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/luna-coin/"
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
    name: "javascript-token",
    code: "JS",
    icon: "js",
    longname: "JavaScript Token",
    description: "JavaScript Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/javascript-token/"
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
    name: "exchangen",
    code: "EXN",
    icon: "exn",
    longname: "ExchangeN",
    description: "ExchangeN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/exchangen/"
    }
},{
    name: "pulse",
    code: "PULSE",
    icon: "pulse",
    longname: "Pulse",
    description: "Pulse coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pulse/"
    }
},{
    name: "arbit",
    code: "ARB",
    icon: "arb",
    longname: "ARbit",
    description: "ARbit coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/arbit/"
    }
},{
    name: "bios-crypto",
    code: "BIOS",
    icon: "bios",
    longname: "BiosCrypto",
    description: "BiosCrypto coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bios-crypto/"
    }
},{
    name: "healthywormcoin",
    code: "WORM",
    icon: "worm",
    longname: "HealthyWormCoin",
    description: "HealthyWormCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/healthywormcoin/"
    }
},{
    name: "steps",
    code: "STEPS",
    icon: "steps",
    longname: "Steps",
    description: "Steps coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/steps/"
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
    name: "cthulhu-offerings",
    code: "OFF",
    icon: "off",
    longname: "Cthulhu Offerings",
    description: "Cthulhu Offerings coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cthulhu-offerings/"
    }
},{
    name: "remicoin",
    code: "RMC",
    icon: "rmc",
    longname: "Remicoin",
    description: "Remicoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/remicoin/"
    }
},{
    name: "piecoin",
    code: "PIE",
    icon: "pie",
    longname: "PIECoin",
    description: "PIECoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/piecoin/"
    }
},{
    name: "cryptoworldx-token",
    code: "CWXT",
    icon: "cwxt",
    longname: "CryptoWorldX Token",
    description: "CryptoWorldX Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cryptoworldx-token/"
    }
},{
    name: "letitride",
    code: "LIR",
    icon: "lir",
    longname: "LetItRide",
    description: "LetItRide coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/letitride/"
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
    name: "playercoin",
    code: "PLACO",
    icon: "placo",
    longname: "PlayerCoin",
    description: "PlayerCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/playercoin/"
    }
},{
    name: "tagrcoin",
    code: "TAGR",
    icon: "tagr",
    longname: "TAGRcoin",
    description: "TAGRcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tagrcoin/"
    }
},{
    name: "ripto-bux",
    code: "RBX",
    icon: "rbx",
    longname: "Ripto Bux",
    description: "Ripto Bux coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ripto-bux/"
    }
},{
    name: "crtcoin",
    code: "CRT",
    icon: "crt",
    longname: "CRTCoin",
    description: "CRTCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/crtcoin/"
    }
},{
    name: "zonecoin",
    code: "ZNE",
    icon: "zne",
    longname: "Zonecoin",
    description: "Zonecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zonecoin/"
    }
},{
    name: "gbcgoldcoin",
    code: "GBC",
    icon: "gbc",
    longname: "GBCGoldCoin",
    description: "GBCGoldCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gbcgoldcoin/"
    }
},{
    name: "impulsecoin",
    code: "IMPS",
    icon: "imps",
    longname: "ImpulseCoin",
    description: "ImpulseCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/impulsecoin/"
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
    name: "rsgpcoin",
    code: "RSGP",
    icon: "rsgp",
    longname: "RSGPcoin",
    description: "RSGPcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rsgpcoin/"
    }
},{
    name: "coexistcoin",
    code: "COXST",
    icon: "coxst",
    longname: "CoExistCoin",
    description: "CoExistCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/coexistcoin/"
    }
},{
    name: "destiny",
    code: "DES",
    icon: "des",
    longname: "Destiny",
    description: "Destiny coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/destiny/"
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
    name: "credence-coin",
    code: "CRDNC",
    icon: "crdnc",
    longname: "Credence Coin",
    description: "Credence Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/credence-coin/"
    }
},{
    name: "jobscoin",
    code: "JOBS",
    icon: "jobs",
    longname: "JobsCoin",
    description: "JobsCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/jobscoin/"
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
    name: "bitvolt",
    code: "VOLT",
    icon: "volt",
    longname: "Bitvolt",
    description: "Bitvolt coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitvolt/"
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
    name: "osmiumcoin",
    code: "OS76",
    icon: "os76",
    longname: "OsmiumCoin",
    description: "OsmiumCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/osmiumcoin/"
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
    name: "sydpak",
    code: "SDP",
    icon: "sdp",
    longname: "SydPak",
    description: "SydPak coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sydpak/"
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
    name: "ibank",
    code: "IBANK",
    icon: "ibank",
    longname: "iBank",
    description: "iBank coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ibank/"
    }
},{
    name: "rawcoin2",
    code: "XRC",
    icon: "xrc",
    longname: "Rawcoin",
    description: "Rawcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rawcoin2/"
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
    name: "biobar",
    code: "BIOB",
    icon: "biob",
    longname: "BioBar",
    description: "BioBar coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/biobar/"
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
    name: "elysium",
    code: "ELS",
    icon: "els",
    longname: "Elysium",
    description: "Elysium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/elysium/"
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
    name: "p7coin",
    code: "P7C",
    icon: "p7c",
    longname: "P7Coin",
    description: "P7Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/p7coin/"
    }
},{
    name: "nodecoin",
    code: "NODC",
    icon: "nodc",
    longname: "NodeCoin",
    description: "NodeCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nodecoin/"
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
    name: "crevacoin",
    code: "CREVA",
    icon: "creva",
    longname: "CrevaCoin",
    description: "CrevaCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/crevacoin/"
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
    name: "selfiecoin",
    code: "SLFI",
    icon: "slfi",
    longname: "Selfiecoin",
    description: "Selfiecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/selfiecoin/"
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
    name: "coimatic-2",
    code: "CTIC2",
    icon: "ctic2",
    longname: "Coimatic 2.0",
    description: "Coimatic 2.0 coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/coimatic-2/"
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
    name: "vault-coin",
    code: "VLTC",
    icon: "vltc",
    longname: "Vault Coin",
    description: "Vault Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vault-coin/"
    }
},{
    name: "ulatech",
    code: "ULA",
    icon: "ula",
    longname: "Ulatech",
    description: "Ulatech coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ulatech/"
    }
},{
    name: "levoplus",
    code: "LVPS",
    icon: "lvps",
    longname: "LevoPlus",
    description: "LevoPlus coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/levoplus/"
    }
},{
    name: "digital-credits",
    code: "DGCS",
    icon: "dgcs",
    longname: "Digital Credits",
    description: "Digital Credits coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/digital-credits/"
    }
},{
    name: "pizzacoin",
    code: "PIZZA",
    icon: "pizza",
    longname: "PizzaCoin",
    description: "PizzaCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pizzacoin/"
    }
},{
    name: "futurexe",
    code: "FXE",
    icon: "fxe",
    longname: "FuturXe",
    description: "FuturXe coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/futurexe/"
    }
},{
    name: "ebittree-coin",
    code: "EBT",
    icon: "ebt",
    longname: "Ebittree Coin",
    description: "Ebittree Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ebittree-coin/"
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
    name: "ckusd",
    code: "CKUSD",
    icon: "ckusd",
    longname: "CK USD",
    description: "CK USD coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ckusd/"
    }
},{
    name: "atmcoin",
    code: "ATMC",
    icon: "atmc",
    longname: "ATMCoin",
    description: "ATMCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/atmcoin/"
    }
},{
    name: "waykichain",
    code: "WIC",
    icon: "wic",
    longname: "WaykiChain",
    description: "WaykiChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/waykichain/"
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
    name: "chatcoin",
    code: "CHAT",
    icon: "chat",
    longname: "ChatCoin",
    description: "ChatCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/chatcoin/"
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
    name: "win-coin",
    code: "WC",
    icon: "wc",
    longname: "WINCOIN",
    description: "WINCOIN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/win-coin/"
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
    name: "bitstation",
    code: "BSTN",
    icon: "bstn",
    longname: "BitStation",
    description: "BitStation coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitstation/"
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
    name: "electronic-pk-chain",
    code: "EPC",
    icon: "epc",
    longname: "Electronic PK Chain",
    description: "Electronic PK Chain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/electronic-pk-chain/"
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
    name: "acute-angle-cloud",
    code: "AAC",
    icon: "aac",
    longname: "Acute Angle Cloud",
    description: "Acute Angle Cloud coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/acute-angle-cloud/"
    }
},{
    name: "fairgame",
    code: "FAIR",
    icon: "fair",
    longname: "FairGame",
    description: "FairGame coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fairgame/"
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
    name: "noah-coin",
    code: "NOAH",
    icon: "noah",
    longname: "Noah Coin",
    description: "Noah Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/noah-coin/"
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
    name: "show",
    code: "SHOW",
    icon: "show",
    longname: "Show",
    description: "Show coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/show/"
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
    name: "kcash",
    code: "KCASH",
    icon: "kcash",
    longname: "Kcash",
    description: "Kcash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kcash/"
    }
},{
    name: "amlt",
    code: "AMLT",
    icon: "amlt",
    longname: "AMLT Token",
    description: "AMLT Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/amlt/"
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
    name: "tokenomy",
    code: "TEN",
    icon: "ten",
    longname: "Tokenomy",
    description: "Tokenomy coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tokenomy/"
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
    name: "selfsell",
    code: "SSC",
    icon: "ssc",
    longname: "SelfSell",
    description: "SelfSell coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/selfsell/"
    }
},{
    name: "tezos",
    code: "XTZ",
    icon: "xtz",
    longname: "Tezos (Pre-Launch)",
    description: "Tezos (Pre-Launch) coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tezos/"
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
    name: "bnktothefuture",
    code: "BFT",
    icon: "bft",
    longname: "BnkToTheFuture",
    description: "BnkToTheFuture coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bnktothefuture/"
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
    name: "aware",
    code: "AWR",
    icon: "awr",
    longname: "AWARE",
    description: "AWARE coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aware/"
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
    code: "LBTC",
    icon: "lbtc",
    longname: "Lightning Bitcoin [Futures]",
    description: "Lightning Bitcoin [Futures] coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/lightning-bitcoin/"
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
    name: "neurotoken",
    code: "NTK",
    icon: "ntk",
    longname: "Neurotoken",
    description: "Neurotoken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/neurotoken/"
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
    name: "exchange-union",
    code: "XUC",
    icon: "xuc",
    longname: "Exchange Union",
    description: "Exchange Union coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/exchange-union/"
    }
},{
    name: "content-and-ad-network",
    code: "CAN",
    icon: "can",
    longname: "Content and AD Network",
    description: "Content and AD Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/content-and-ad-network/"
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
    name: "gems-protocol",
    code: "GEM",
    icon: "gem",
    longname: "Gems ",
    description: "Gems  coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gems-protocol/"
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
    name: "iquant",
    code: "IQT",
    icon: "iqt",
    longname: "iQuant",
    description: "iQuant coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/iquant/"
    }
},{
    name: "ug-token",
    code: "UGT",
    icon: "ugt",
    longname: "UG Token",
    description: "UG Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ug-token/"
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
    name: "blockcdn",
    code: "BCDN",
    icon: "bcdn",
    longname: "BlockCDN",
    description: "BlockCDN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blockcdn/"
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
    name: "stockchain",
    code: "SCC",
    icon: "scc",
    longname: "StockChain",
    description: "StockChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/stockchain/"
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
    name: "titanium-bar",
    code: "TBAR",
    icon: "tbar",
    longname: "Titanium BAR",
    description: "Titanium BAR coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/titanium-bar/"
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
    name: "candy",
    code: "CANDY",
    icon: "candy",
    longname: "Candy",
    description: "Candy coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/candy/"
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
    name: "valuechain",
    code: "VLC",
    icon: "vlc",
    longname: "ValueChain",
    description: "ValueChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/valuechain/"
    }
},{
    name: "hyper-pay",
    code: "HPY",
    icon: "hpy",
    longname: "Hyper Pay",
    description: "Hyper Pay coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hyper-pay/"
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
    name: "switcheo",
    code: "SWH",
    icon: "swh",
    longname: "Switcheo",
    description: "Switcheo coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/switcheo/"
    }
},{
    name: "infinity-economics",
    code: "XIN",
    icon: "xin",
    longname: "Infinity Economics",
    description: "Infinity Economics coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/infinity-economics/"
    }
},{
    name: "bigone-token",
    code: "BIG",
    icon: "big",
    longname: "BigONE Token",
    description: "BigONE Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bigone-token/"
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
    name: "read",
    code: "READ",
    icon: "read",
    longname: "Read",
    description: "Read coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/read/"
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
    name: "moac",
    code: "MOAC",
    icon: "moac",
    longname: "MOAC",
    description: "MOAC coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/moac/"
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
    name: "unlimitedip",
    code: "UIP",
    icon: "uip",
    longname: "UnlimitedIP",
    description: "UnlimitedIP coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/unlimitedip/"
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
    name: "stex",
    code: "STEX",
    icon: "stex",
    longname: "STEX",
    description: "STEX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/stex/"
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
    name: "jingtum-tech",
    code: "SWTC",
    icon: "swtc",
    longname: "Jingtum Tech",
    description: "Jingtum Tech coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/jingtum-tech/"
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
    name: "litecoin-cash",
    code: "LCC",
    icon: "lcc",
    longname: "Litecoin Cash",
    description: "Litecoin Cash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/litecoin-cash/"
    }
},{
    name: "strikebitclub",
    code: "SBC",
    icon: "sbc",
    longname: "StrikeBitClub",
    description: "StrikeBitClub coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/strikebitclub/"
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
    name: "gladius-token",
    code: "GLA",
    icon: "gla",
    longname: "Gladius Token",
    description: "Gladius Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gladius-token/"
    }
},{
    name: "hodl-bucks",
    code: "HDLB",
    icon: "hdlb",
    longname: "HODL Bucks",
    description: "HODL Bucks coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hodl-bucks/"
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
    name: "sphre-air",
    code: "XID",
    icon: "xid",
    longname: "Sphre AIR ",
    description: "Sphre AIR  coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sphre-air/"
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
    name: "odem",
    code: "ODE",
    icon: "ode",
    longname: "ODEM",
    description: "ODEM coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/odem/"
    }
},{
    name: "comsa-xem",
    code: "CMS",
    icon: "cms",
    longname: "COMSA [XEM]",
    description: "COMSA [XEM] coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/comsa-xem/"
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
    name: "mktcoin",
    code: "MLM",
    icon: "mlm",
    longname: "MktCoin",
    description: "MktCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mktcoin/"
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
    name: "ea-coin",
    code: "EAG",
    icon: "eag",
    longname: "EA Coin",
    description: "EA Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ea-coin/"
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
    name: "halalchain",
    code: "HLC",
    icon: "hlc",
    longname: "HalalChain",
    description: "HalalChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/halalchain/"
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
    name: "etherecash",
    code: "ECH",
    icon: "ech",
    longname: "Etherecash",
    description: "Etherecash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/etherecash/"
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
    name: "friends",
    code: "FDZ",
    icon: "fdz",
    longname: "Friendz",
    description: "Friendz coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/friends/"
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
    name: "hoqu",
    code: "HQX",
    icon: "hqx",
    longname: "HOQU",
    description: "HOQU coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hoqu/"
    }
},{
    name: "cloud",
    code: "CLD",
    icon: "cld",
    longname: "Cloud",
    description: "Cloud coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cloud/"
    }
},{
    name: "shacoin",
    code: "SHA",
    icon: "sha",
    longname: "SHACoin",
    description: "SHACoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/shacoin/"
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
    name: "etherdelta-token",
    code: "EDT",
    icon: "edt",
    longname: "EtherDelta Token",
    description: "EtherDelta Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/etherdelta-token/"
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
    name: "bitsoar",
    code: "BSR",
    icon: "bsr",
    longname: "BitSoar",
    description: "BitSoar coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitsoar/"
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
    name: "consensus",
    code: "SEN",
    icon: "sen",
    longname: "Consensus",
    description: "Consensus coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/consensus/"
    }
},{
    name: "safecoin",
    code: "SFE",
    icon: "sfe",
    longname: "SafeCoin",
    description: "SafeCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/safecoin/"
    }
},{
    name: "india-coin",
    code: "INDIA",
    icon: "india",
    longname: "India Coin",
    description: "India Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/india-coin/"
    }
},{
    name: "xtd-coin",
    code: "XTD",
    icon: "xtd",
    longname: "XTD Coin",
    description: "XTD Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/xtd-coin/"
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
    name: "turbocoin",
    code: "TURBO",
    icon: "turbo",
    longname: "TurboCoin",
    description: "TurboCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/turbocoin/"
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
    name: "techshares",
    code: "THS",
    icon: "ths",
    longname: "TechShares",
    description: "TechShares coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/techshares/"
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
    name: "embercoin",
    code: "EMB",
    icon: "emb",
    longname: "EmberCoin",
    description: "EmberCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/embercoin/"
    }
},{
    name: "entcash",
    code: "ENT",
    icon: "ent",
    longname: "ENTCash",
    description: "ENTCash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/entcash/"
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
    name: "signal-token",
    code: "SIG",
    icon: "sig",
    longname: "Signal Token",
    description: "Signal Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/signal-token/"
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
    name: "animecoin",
    code: "ANI",
    icon: "ani",
    longname: "Animecoin",
    description: "Animecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/animecoin/"
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
    name: "zengold",
    code: "ZENGOLD",
    icon: "zengold",
    longname: "ZenGold",
    description: "ZenGold coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zengold/"
    }
},{
    name: "international-diamond",
    code: "XID",
    icon: "xid",
    longname: "International Diamond",
    description: "International Diamond coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/international-diamond/"
    }
},{
    name: "pabyosi-coin-special",
    code: "PCS",
    icon: "pcs",
    longname: "Pabyosi Coin (Special)",
    description: "Pabyosi Coin (Special) coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pabyosi-coin-special/"
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
    name: "titanium-blockchain",
    code: "BAR",
    icon: "bar",
    longname: "Titanium Blockchain",
    description: "Titanium Blockchain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/titanium-blockchain/"
    }
},{
    name: "wa-space",
    code: "WA",
    icon: "wa",
    longname: "WA Space",
    description: "WA Space coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/wa-space/"
    }
},{
    name: "goldmaxcoin",
    code: "GMX",
    icon: "gmx",
    longname: "GoldMaxCoin",
    description: "GoldMaxCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/goldmaxcoin/"
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
    name: "avatarcoin",
    code: "AV",
    icon: "av",
    longname: "AvatarCoin",
    description: "AvatarCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/avatarcoin/"
    }
},{
    name: "sjwcoin",
    code: "SJW",
    icon: "sjw",
    longname: "SJWCoin",
    description: "SJWCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sjwcoin/"
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
    name: "vulcano",
    code: "VULC",
    icon: "vulc",
    longname: "Vulcano",
    description: "Vulcano coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vulcano/"
    }
},{
    name: "royalties",
    code: "XRY",
    icon: "xry",
    longname: "Royalties",
    description: "Royalties coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/royalties/"
    }
},{
    name: "slothcoin",
    code: "SLOTH",
    icon: "sloth",
    longname: "Slothcoin",
    description: "Slothcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/slothcoin/"
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
    name: "ethereum-lite",
    code: "ELITE",
    icon: "elite",
    longname: "Ethereum Lite",
    description: "Ethereum Lite coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ethereum-lite/"
    }
},{
    name: "president-johnson",
    code: "GARY",
    icon: "gary",
    longname: "President Johnson",
    description: "President Johnson coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/president-johnson/"
    }
},{
    name: "antimatter",
    code: "ANTX",
    icon: "antx",
    longname: "Antimatter",
    description: "Antimatter coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/antimatter/"
    }
},{
    name: "teslacoilcoin",
    code: "TESLA",
    icon: "tesla",
    longname: "TeslaCoilCoin",
    description: "TeslaCoilCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/teslacoilcoin/"
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
    name: "t-coin",
    code: "TCOIN",
    icon: "tcoin",
    longname: "T-coin",
    description: "T-coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/t-coin/"
    }
},{
    name: "ur",
    code: "UR",
    icon: "ur",
    longname: "UR",
    description: "UR coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ur/"
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
    name: "nitro",
    code: "NOX",
    icon: "nox",
    longname: "Nitro",
    description: "Nitro coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nitro/"
    }
},{
    name: "tattoocoin-limited",
    code: "TLE",
    icon: "tle",
    longname: "Tattoocoin (Limited Edition)",
    description: "Tattoocoin (Limited Edition) coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tattoocoin-limited/"
    }
},{
    name: "president-trump",
    code: "PRES",
    icon: "pres",
    longname: "President Trump",
    description: "President Trump coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/president-trump/"
    }
},{
    name: "bt2-cst",
    code: "BT2",
    icon: "bt2",
    longname: "BT2 [CST]",
    description: "BT2 [CST] coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bt2-cst/"
    }
},{
    name: "acchain",
    code: "ACC",
    icon: "acc",
    longname: "ACChain",
    description: "ACChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/acchain/"
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
    name: "uttoken",
    code: "UTT",
    icon: "utt",
    longname: "United Traders Token",
    description: "United Traders Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/uttoken/"
    }
},{
    name: "macro1",
    code: "MCR",
    icon: "mcr",
    longname: "Macro",
    description: "Macro coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/macro1/"
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
    name: "ox-fina",
    code: "OX",
    icon: "ox",
    longname: "OX Fina",
    description: "OX Fina coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ox-fina/"
    }
},{
    name: "first-bitcoin-capital",
    code: "BITCF",
    icon: "bitcf",
    longname: "First Bitcoin Capital",
    description: "First Bitcoin Capital coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/first-bitcoin-capital/"
    }
},{
    name: "davorcoin",
    code: "DAV",
    icon: "dav",
    longname: "DavorCoin",
    description: "DavorCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/davorcoin/"
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
    name: "dynamiccoin",
    code: "DMC",
    icon: "dmc",
    longname: "DynamicCoin",
    description: "DynamicCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dynamiccoin/"
    }
},{
    name: "numuscash",
    code: "NUMUS",
    icon: "numus",
    longname: "NumusCash",
    description: "NumusCash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/numuscash/"
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
    name: "flappycoin",
    code: "FLAP",
    icon: "flap",
    longname: "FlappyCoin",
    description: "FlappyCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/flappycoin/"
    }
},{
    name: "gold-reward-token",
    code: "GRX",
    icon: "grx",
    longname: "GOLD Reward Token",
    description: "GOLD Reward Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gold-reward-token/"
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
    name: "escoro",
    code: "ESC",
    icon: "esc",
    longname: "Escroco",
    description: "Escroco coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/escoro/"
    }
},{
    name: "indicoin",
    code: "INDI",
    icon: "indi",
    longname: "Indicoin",
    description: "Indicoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/indicoin/"
    }
},{
    name: "alpacoin",
    code: "APC",
    icon: "apc",
    longname: "AlpaCoin",
    description: "AlpaCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/alpacoin/"
    }
},{
    name: "anryze",
    code: "RYZ",
    icon: "ryz",
    longname: "ANRYZE",
    description: "ANRYZE coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/anryze/"
    }
},{
    name: "encryptotel-eth",
    code: "ETT",
    icon: "ett",
    longname: "EncryptoTel [ETH]",
    description: "EncryptoTel [ETH] coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/encryptotel-eth/"
    }
},{
    name: "cyder",
    code: "CYDER",
    icon: "cyder",
    longname: "Cyder",
    description: "Cyder coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cyder/"
    }
},{
    name: "uncoin",
    code: "UNC",
    icon: "unc",
    longname: "UNCoin",
    description: "UNCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/uncoin/"
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
    name: "smoke",
    code: "SMOKE",
    icon: "smoke",
    longname: "Smoke",
    description: "Smoke coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/smoke/"
    }
},{
    name: "digital-bullion-gold",
    code: "DBG",
    icon: "dbg",
    longname: "Digital Bullion Gold",
    description: "Digital Bullion Gold coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/digital-bullion-gold/"
    }
},{
    name: "namocoin",
    code: "NAMO",
    icon: "namo",
    longname: "NamoCoin",
    description: "NamoCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/namocoin/"
    }
},{
    name: "harvest-masternode-coin",
    code: "HC",
    icon: "hc",
    longname: "Harvest Masternode Coin",
    description: "Harvest Masternode Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/harvest-masternode-coin/"
    }
},{
    name: "lepen",
    code: "LEPEN",
    icon: "lepen",
    longname: "LePen",
    description: "LePen coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/lepen/"
    }
},{
    name: "francs",
    code: "FRN",
    icon: "frn",
    longname: "Francs",
    description: "Francs coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/francs/"
    }
},{
    name: "minex",
    code: "MINEX",
    icon: "minex",
    longname: "Minex",
    description: "Minex coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/minex/"
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
    name: "storjcoin-x",
    code: "SJCX",
    icon: "sjcx",
    longname: "Storjcoin X",
    description: "Storjcoin X coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/storjcoin-x/"
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
    name: "halloween-coin",
    code: "HALLO",
    icon: "hallo",
    longname: "Halloween Coin",
    description: "Halloween Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/halloween-coin/"
    }
},{
    name: "first-bitcoin",
    code: "BIT",
    icon: "bit",
    longname: "First Bitcoin",
    description: "First Bitcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/first-bitcoin/"
    }
},{
    name: "aces",
    code: "ACES",
    icon: "aces",
    longname: "Aces",
    description: "Aces coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aces/"
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
    name: "btcmoon",
    code: "BTCM",
    icon: "btcm",
    longname: "BTCMoon",
    description: "BTCMoon coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/btcmoon/"
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
    name: "rabbitcoin",
    code: "RBBT",
    icon: "rbbt",
    longname: "RabbitCoin",
    description: "RabbitCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rabbitcoin/"
    }
},{
    name: "bestchain",
    code: "BEST",
    icon: "best",
    longname: "BestChain",
    description: "BestChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bestchain/"
    }
},{
    name: "universalroyalcoin",
    code: "UNRC",
    icon: "unrc",
    longname: "UniversalRoyalCoin",
    description: "UniversalRoyalCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/universalroyalcoin/"
    }
},{
    name: "donationcoin",
    code: "DON",
    icon: "don",
    longname: "Donationcoin",
    description: "Donationcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/donationcoin/"
    }
},{
    name: "cashme",
    code: "CME",
    icon: "cme",
    longname: "Cashme",
    description: "Cashme coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cashme/"
    }
},{
    name: "runners",
    code: "RUNNERS",
    icon: "runners",
    longname: "Runners",
    description: "Runners coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/runners/"
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
    name: "marxcoin",
    code: "MARX",
    icon: "marx",
    longname: "MarxCoin",
    description: "MarxCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/marxcoin/"
    }
},{
    name: "huncoin",
    code: "HNC",
    icon: "hnc",
    longname: "Huncoin",
    description: "Huncoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/huncoin/"
    }
},{
    name: "blazercoin",
    code: "BLAZR",
    icon: "blazr",
    longname: "BlazerCoin",
    description: "BlazerCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blazercoin/"
    }
},{
    name: "bitfid",
    code: "FID",
    icon: "fid",
    longname: "BITFID",
    description: "BITFID coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitfid/"
    }
},{
    name: "birds",
    code: "BIRDS",
    icon: "birds",
    longname: "Birds",
    description: "Birds coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/birds/"
    }
},{
    name: "neo-gold",
    code: "NEOG",
    icon: "neog",
    longname: "NEO GOLD",
    description: "NEO GOLD coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/neo-gold/"
    }
},{
    name: "qora",
    code: "QORA",
    icon: "qora",
    longname: "Qora",
    description: "Qora coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/qora/"
    }
},{
    name: "topcoin",
    code: "TOP",
    icon: "top",
    longname: "TopCoin",
    description: "TopCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/topcoin/"
    }
},{
    name: "levocoin",
    code: "LEVO",
    icon: "levo",
    longname: "Levocoin",
    description: "Levocoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/levocoin/"
    }
},{
    name: "bitbase",
    code: "BTBc",
    icon: "btbc",
    longname: "Bitbase",
    description: "Bitbase coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitbase/"
    }
},{
    name: "sakuracoin",
    code: "SKR",
    icon: "skr",
    longname: "Sakuracoin",
    description: "Sakuracoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sakuracoin/"
    }
},{
    name: "cryptcoin",
    code: "CRYPT",
    icon: "crypt",
    longname: "CryptCoin",
    description: "CryptCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cryptcoin/"
    }
},{
    name: "trickycoin",
    code: "TRICK",
    icon: "trick",
    longname: "TrickyCoin",
    description: "TrickyCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/trickycoin/"
    }
},{
    name: "zsecoin",
    code: "ZSE",
    icon: "zse",
    longname: "ZSEcoin",
    description: "ZSEcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zsecoin/"
    }
},{
    name: "fonziecoin",
    code: "FONZ",
    icon: "fonz",
    longname: "Fonziecoin",
    description: "Fonziecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fonziecoin/"
    }
},{
    name: "todaycoin",
    code: "TODAY",
    icon: "today",
    longname: "TodayCoin",
    description: "TodayCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/todaycoin/"
    }
},{
    name: "sharkcoin",
    code: "SAK",
    icon: "sak",
    longname: "Sharkcoin",
    description: "Sharkcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sharkcoin/"
    }
},{
    name: "cubits",
    code: "QBT",
    icon: "qbt",
    longname: "Cubits",
    description: "Cubits coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cubits/"
    }
},{
    name: "wi-coin",
    code: "WIC",
    icon: "wic",
    longname: "Wi Coin",
    description: "Wi Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/wi-coin/"
    }
},{
    name: "magnetcoin",
    code: "MAGN",
    icon: "magn",
    longname: "Magnetcoin",
    description: "Magnetcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/magnetcoin/"
    }
},{
    name: "zilbercoin",
    code: "ZBC",
    icon: "zbc",
    longname: "Zilbercoin",
    description: "Zilbercoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zilbercoin/"
    }
},{
    name: "operand",
    code: "OP",
    icon: "op",
    longname: "Operand",
    description: "Operand coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/operand/"
    }
},{
    name: "betacoin",
    code: "BET",
    icon: "bet",
    longname: "BetaCoin",
    description: "BetaCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/betacoin/"
    }
},{
    name: "batcoin",
    code: "BAT",
    icon: "bat",
    longname: "BatCoin",
    description: "BatCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/batcoin/"
    }
},{
    name: "avoncoin",
    code: "ACN",
    icon: "acn",
    longname: "Avoncoin",
    description: "Avoncoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/avoncoin/"
    }
},{
    name: "fapcoin",
    code: "FAP",
    icon: "fap",
    longname: "FAPcoin",
    description: "FAPcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fapcoin/"
    }
},{
    name: "gaycoin",
    code: "GAY",
    icon: "gay",
    longname: "GAY Money",
    description: "GAY Money coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gaycoin/"
    }
},{
    name: "ugain",
    code: "GAIN",
    icon: "gain",
    longname: "UGAIN",
    description: "UGAIN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ugain/"
    }
},{
    name: "rublebit",
    code: "RUBIT",
    icon: "rubit",
    longname: "RubleBit",
    description: "RubleBit coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rublebit/"
    }
}];