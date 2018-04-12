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
    name: "bitshares",
    code: "BTS",
    icon: "bts",
    longname: "BitShares",
    description: "BitShares coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitshares/"
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
    name: "rchain",
    code: "RHOC",
    icon: "rhoc",
    longname: "RChain",
    description: "RChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rchain/"
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
    name: "bitcoin-private",
    code: "BTCP",
    icon: "btcp",
    longname: "Bitcoin Private",
    description: "Bitcoin Private coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoin-private/"
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
    name: "aeternity",
    code: "AE",
    icon: "ae",
    longname: "Aeternity",
    description: "Aeternity coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aeternity/"
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
    name: "ardor",
    code: "ARDR",
    icon: "ardr",
    longname: "Ardor",
    description: "Ardor coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ardor/"
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
    name: "kucoin-shares",
    code: "KCS",
    icon: "kcs",
    longname: "KuCoin Shares",
    description: "KuCoin Shares coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kucoin-shares/"
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
    name: "aelf",
    code: "ELF",
    icon: "elf",
    longname: "aelf",
    description: "aelf coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aelf/"
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
    name: "veritaseum",
    code: "VERI",
    icon: "veri",
    longname: "Veritaseum",
    description: "Veritaseum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/veritaseum/"
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
    longname: "Ethos [BQX]",
    description: "Ethos [BQX] coin",
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
    name: "mixin",
    code: "XIN",
    icon: "xin",
    longname: "Mixin",
    description: "Mixin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mixin/"
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
    name: "skycoin",
    code: "SKY",
    icon: "sky",
    longname: "Skycoin",
    description: "Skycoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/skycoin/"
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
    name: "zcoin",
    code: "XZC",
    icon: "xzc",
    longname: "ZCoin",
    description: "ZCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zcoin/"
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
    name: "maidsafecoin",
    code: "MAID",
    icon: "maid",
    longname: "MaidSafeCoin",
    description: "MaidSafeCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/maidsafecoin/"
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
    name: "chainlink",
    code: "LINK",
    icon: "link",
    longname: "ChainLink",
    description: "ChainLink coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/chainlink/"
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
    name: "wax",
    code: "WAX",
    icon: "wax",
    longname: "WAX",
    description: "WAX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/wax/"
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
    name: "cindicator",
    code: "CND",
    icon: "cnd",
    longname: "Cindicator",
    description: "Cindicator coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cindicator/"
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
    name: "poa-network",
    code: "POA",
    icon: "poa",
    longname: "POA Network",
    description: "POA Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/poa-network/"
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
    name: "zencash",
    code: "ZEN",
    icon: "zen",
    longname: "ZenCash",
    description: "ZenCash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zencash/"
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
    name: "matrix-ai-network",
    code: "MAN",
    icon: "man",
    longname: "Matrix AI Network",
    description: "Matrix AI Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/matrix-ai-network/"
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
    name: "high-performance-blockchain",
    code: "HPB",
    icon: "hpb",
    longname: "High Performance Blockchain",
    description: "High Performance Blockchain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/high-performance-blockchain/"
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
    name: "polymath-network",
    code: "POLY",
    icon: "poly",
    longname: "Polymath",
    description: "Polymath coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/polymath-network/"
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
    name: "nuls",
    code: "NULS",
    icon: "nuls",
    longname: "Nuls",
    description: "Nuls coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nuls/"
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
    name: "dynamic-trading-rights",
    code: "DTR",
    icon: "dtr",
    longname: "Dynamic Trading Rights",
    description: "Dynamic Trading Rights coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dynamic-trading-rights/"
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
    name: "gnosis-gno",
    code: "GNO",
    icon: "gno",
    longname: "Gnosis",
    description: "Gnosis coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gnosis-gno/"
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
    name: "blocknet",
    code: "BLOCK",
    icon: "block",
    longname: "Blocknet",
    description: "Blocknet coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blocknet/"
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
    name: "singularitynet",
    code: "AGI",
    icon: "agi",
    longname: "SingularityNET",
    description: "SingularityNET coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/singularitynet/"
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
    name: "monaco",
    code: "MCO",
    icon: "mco",
    longname: "Monaco",
    description: "Monaco coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/monaco/"
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
    name: "time-new-bank",
    code: "TNB",
    icon: "tnb",
    longname: "Time New Bank",
    description: "Time New Bank coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/time-new-bank/"
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
    name: "rlc",
    code: "RLC",
    icon: "rlc",
    longname: "iExec RLC",
    description: "iExec RLC coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rlc/"
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
    name: "arcblock",
    code: "ABT",
    icon: "abt",
    longname: "Arcblock",
    description: "Arcblock coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/arcblock/"
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
    name: "credits",
    code: "CS",
    icon: "cs",
    longname: "Credits",
    description: "Credits coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/credits/"
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
    name: "aragon",
    code: "ANT",
    icon: "ant",
    longname: "Aragon",
    description: "Aragon coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aragon/"
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
    name: "bluzelle",
    code: "BLZ",
    icon: "blz",
    longname: "Bluzelle",
    description: "Bluzelle coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bluzelle/"
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
    name: "paypie",
    code: "PPP",
    icon: "ppp",
    longname: "PayPie",
    description: "PayPie coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/paypie/"
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
    name: "blockv",
    code: "VEE",
    icon: "vee",
    longname: "BLOCKv",
    description: "BLOCKv coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blockv/"
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
    name: "gifto",
    code: "GTO",
    icon: "gto",
    longname: "Gifto",
    description: "Gifto coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gifto/"
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
    name: "ruff",
    code: "RUFF",
    icon: "ruff",
    longname: "Ruff",
    description: "Ruff coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ruff/"
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
    name: "salus",
    code: "SLS",
    icon: "sls",
    longname: "SaluS",
    description: "SaluS coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/salus/"
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
    name: "bitbay",
    code: "BAY",
    icon: "bay",
    longname: "BitBay",
    description: "BitBay coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitbay/"
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
    name: "scryinfo",
    code: "DDD",
    icon: "ddd",
    longname: "Scry.info",
    description: "Scry.info coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/scryinfo/"
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
    name: "pura",
    code: "PURA",
    icon: "pura",
    longname: "Pura",
    description: "Pura coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pura/"
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
    name: "medibloc",
    code: "MED",
    icon: "med",
    longname: "MediBloc",
    description: "MediBloc coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/medibloc/"
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
    name: "bibox-token",
    code: "BIX",
    icon: "bix",
    longname: "Bibox Token",
    description: "Bibox Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bibox-token/"
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
    name: "data",
    code: "DTA",
    icon: "dta",
    longname: "DATA",
    description: "DATA coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/data/"
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
    name: "airswap",
    code: "AST",
    icon: "ast",
    longname: "AirSwap",
    description: "AirSwap coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/airswap/"
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
    name: "bismuth",
    code: "BIS",
    icon: "bis",
    longname: "Bismuth",
    description: "Bismuth coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bismuth/"
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
    name: "amber",
    code: "AMB",
    icon: "amb",
    longname: "Ambrosus",
    description: "Ambrosus coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/amber/"
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
    name: "experience-points",
    code: "XP",
    icon: "xp",
    longname: "Experience Points",
    description: "Experience Points coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/experience-points/"
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
    name: "cloakcoin",
    code: "CLOAK",
    icon: "cloak",
    longname: "CloakCoin",
    description: "CloakCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cloakcoin/"
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
    name: "feathercoin",
    code: "FTC",
    icon: "ftc",
    longname: "Feathercoin",
    description: "Feathercoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/feathercoin/"
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
    name: "utrust",
    code: "UTK",
    icon: "utk",
    longname: "UTRUST",
    description: "UTRUST coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/utrust/"
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
    name: "appcoins",
    code: "APPC",
    icon: "appc",
    longname: "AppCoins",
    description: "AppCoins coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/appcoins/"
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
    name: "pundi-x",
    code: "NPXS",
    icon: "npxs",
    longname: "Pundi X",
    description: "Pundi X coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pundi-x/"
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
    name: "crypterium",
    code: "CRPT",
    icon: "crpt",
    longname: "Crypterium",
    description: "Crypterium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/crypterium/"
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
    name: "trinity-network-credit",
    code: "TNC",
    icon: "tnc",
    longname: "Trinity Network Credit",
    description: "Trinity Network Credit coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/trinity-network-credit/"
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
    name: "vibe",
    code: "VIBE",
    icon: "vibe",
    longname: "VIBE",
    description: "VIBE coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vibe/"
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
    name: "modum",
    code: "MOD",
    icon: "mod",
    longname: "Modum",
    description: "Modum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/modum/"
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
    name: "origintrail",
    code: "TRAC",
    icon: "trac",
    longname: "OriginTrail",
    description: "OriginTrail coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/origintrail/"
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
    name: "naga",
    code: "NGC",
    icon: "ngc",
    longname: "NAGA",
    description: "NAGA coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/naga/"
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
    name: "burst",
    code: "BURST",
    icon: "burst",
    longname: "Burst",
    description: "Burst coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/burst/"
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
    name: "xtrabytes",
    code: "XBY",
    icon: "xby",
    longname: "XTRABYTES",
    description: "XTRABYTES coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/xtrabytes/"
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
    name: "rock",
    code: "RKT",
    icon: "rkt",
    longname: "Rock",
    description: "Rock coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rock/"
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
    name: "jibrel-network",
    code: "JNT",
    icon: "jnt",
    longname: "Jibrel Network",
    description: "Jibrel Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/jibrel-network/"
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
    name: "eccoin",
    code: "ECC",
    icon: "ecc",
    longname: "ECC",
    description: "ECC coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/eccoin/"
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
    name: "bottos",
    code: "BTO",
    icon: "bto",
    longname: "Bottos",
    description: "Bottos coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bottos/"
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
    name: "trade-token",
    code: "TIO",
    icon: "tio",
    longname: "Trade Token",
    description: "Trade Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/trade-token/"
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
    name: "delphy",
    code: "DPY",
    icon: "dpy",
    longname: "Delphy",
    description: "Delphy coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/delphy/"
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
    name: "spectre-dividend",
    code: "SXDT",
    icon: "sxdt",
    longname: "Spectre.ai Dividend Token",
    description: "Spectre.ai Dividend Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/spectre-dividend/"
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
    name: "steem-dollars",
    code: "SBD",
    icon: "sbd",
    longname: "Steem Dollars",
    description: "Steem Dollars coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/steem-dollars/"
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
    name: "elastic",
    code: "XEL",
    icon: "xel",
    longname: "Elastic",
    description: "Elastic coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/elastic/"
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
    name: "unobtanium",
    code: "UNO",
    icon: "uno",
    longname: "Unobtanium",
    description: "Unobtanium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/unobtanium/"
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
    name: "blakestar",
    code: "ERA",
    icon: "era",
    longname: "ERA",
    description: "ERA coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blakestar/"
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
    name: "faircoin",
    code: "FAIR",
    icon: "fair",
    longname: "FairCoin",
    description: "FairCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/faircoin/"
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
    name: "potcoin",
    code: "POT",
    icon: "pot",
    longname: "PotCoin",
    description: "PotCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/potcoin/"
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
    name: "unikoin-gold",
    code: "UKG",
    icon: "ukg",
    longname: "Unikoin Gold",
    description: "Unikoin Gold coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/unikoin-gold/"
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
    name: "ink",
    code: "INK",
    icon: "ink",
    longname: "Ink",
    description: "Ink coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ink/"
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
    name: "havven",
    code: "HAV",
    icon: "hav",
    longname: "Havven",
    description: "Havven coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/havven/"
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
    name: "legolas-exchange",
    code: "LGO",
    icon: "lgo",
    longname: "Legolas Exchange",
    description: "Legolas Exchange coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/legolas-exchange/"
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
    name: "yoyow",
    code: "YOYOW",
    icon: "yoyow",
    longname: "YOYOW",
    description: "YOYOW coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/yoyow/"
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
    name: "namecoin",
    code: "NMC",
    icon: "nmc",
    longname: "Namecoin",
    description: "Namecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/namecoin/"
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
    name: "safe-exchange-coin",
    code: "SAFEX",
    icon: "safex",
    longname: "Safe Exchange Coin",
    description: "Safe Exchange Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/safe-exchange-coin/"
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
    name: "suncontract",
    code: "SNC",
    icon: "snc",
    longname: "SunContract",
    description: "SunContract coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/suncontract/"
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
    name: "educare",
    code: "EKT",
    icon: "ekt",
    longname: "EDUCare",
    description: "EDUCare coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/educare/"
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
    name: "zeepin",
    code: "ZPT",
    icon: "zpt",
    longname: "Zeepin",
    description: "Zeepin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zeepin/"
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
    name: "deeponion",
    code: "ONION",
    icon: "onion",
    longname: "DeepOnion",
    description: "DeepOnion coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/deeponion/"
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
    name: "indahash",
    code: "IDH",
    icon: "idh",
    longname: "indaHash",
    description: "indaHash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/indahash/"
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
    name: "internet-node-token",
    code: "INT",
    icon: "int",
    longname: "Internet Node Token",
    description: "Internet Node Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/internet-node-token/"
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
    name: "datum",
    code: "DAT",
    icon: "dat",
    longname: "Datum",
    description: "Datum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/datum/"
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
    name: "whitecoin",
    code: "XWC",
    icon: "xwc",
    longname: "WhiteCoin",
    description: "WhiteCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/whitecoin/"
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
    name: "iocoin",
    code: "IOC",
    icon: "ioc",
    longname: "I/O Coin",
    description: "I/O Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/iocoin/"
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
    name: "dmarket",
    code: "DMT",
    icon: "dmt",
    longname: "DMarket",
    description: "DMarket coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dmarket/"
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
    name: "republic-protocol",
    code: "REN",
    icon: "ren",
    longname: "Republic Protocol",
    description: "Republic Protocol coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/republic-protocol/"
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
    name: "phore",
    code: "PHR",
    icon: "phr",
    longname: "Phore",
    description: "Phore coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/phore/"
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
    name: "numeraire",
    code: "NMR",
    icon: "nmr",
    longname: "Numeraire",
    description: "Numeraire coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/numeraire/"
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
    name: "peerplays-ppy",
    code: "PPY",
    icon: "ppy",
    longname: "Peerplays",
    description: "Peerplays coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/peerplays-ppy/"
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
    name: "odyssey",
    code: "OCN",
    icon: "ocn",
    longname: "Odyssey",
    description: "Odyssey coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/odyssey/"
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
    name: "radium",
    code: "RADS",
    icon: "rads",
    longname: "Radium",
    description: "Radium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/radium/"
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
    name: "electrifyasia",
    code: "ELEC",
    icon: "elec",
    longname: "Electrify.Asia",
    description: "Electrify.Asia coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/electrifyasia/"
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
    name: "medical-chain",
    code: "MTN",
    icon: "mtn",
    longname: "Medicalchain",
    description: "Medicalchain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/medical-chain/"
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
    name: "sibcoin",
    code: "SIB",
    icon: "sib",
    longname: "SIBCoin",
    description: "SIBCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sibcoin/"
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
    name: "bloomtoken",
    code: "BLT",
    icon: "blt",
    longname: "Bloom",
    description: "Bloom coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bloomtoken/"
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
    name: "swissborg",
    code: "CHSB",
    icon: "chsb",
    longname: "SwissBorg",
    description: "SwissBorg coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/swissborg/"
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
    name: "storiqa",
    code: "STQ",
    icon: "stq",
    longname: "Storiqa",
    description: "Storiqa coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/storiqa/"
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
    name: "newyorkcoin",
    code: "NYC",
    icon: "nyc",
    longname: "NewYorkCoin",
    description: "NewYorkCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/newyorkcoin/"
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
    name: "moeda-loyalty-points",
    code: "MDA",
    icon: "mda",
    longname: "Moeda Loyalty Points",
    description: "Moeda Loyalty Points coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/moeda-loyalty-points/"
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
    name: "primecoin",
    code: "XPM",
    icon: "xpm",
    longname: "Primecoin",
    description: "Primecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/primecoin/"
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
    name: "aidoc",
    code: "AIDOC",
    icon: "aidoc",
    longname: "AI Doctor",
    description: "AI Doctor coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aidoc/"
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
    name: "attention-token-of-media",
    code: "ATM",
    icon: "atm",
    longname: "ATMChain",
    description: "ATMChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/attention-token-of-media/"
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
    name: "propy",
    code: "PRO",
    icon: "pro",
    longname: "Propy",
    description: "Propy coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/propy/"
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
    name: "zoin",
    code: "ZOI",
    icon: "zoi",
    longname: "Zoin",
    description: "Zoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zoin/"
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
    name: "blocktix",
    code: "TIX",
    icon: "tix",
    longname: "Blocktix",
    description: "Blocktix coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blocktix/"
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
    name: "prizm",
    code: "PZM",
    icon: "pzm",
    longname: "PRIZM",
    description: "PRIZM coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/prizm/"
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
    name: "alphacat",
    code: "ACAT",
    icon: "acat",
    longname: "Alphacat",
    description: "Alphacat coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/alphacat/"
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
    name: "firstblood",
    code: "1ST",
    icon: "1st",
    longname: "FirstBlood",
    description: "FirstBlood coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/firstblood/"
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
    name: "dimecoin",
    code: "DIME",
    icon: "dime",
    longname: "Dimecoin",
    description: "Dimecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dimecoin/"
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
    name: "blockport",
    code: "BPT",
    icon: "bpt",
    longname: "Blockport",
    description: "Blockport coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blockport/"
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
    name: "bitclave",
    code: "CAT",
    icon: "cat",
    longname: "BitClave",
    description: "BitClave coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitclave/"
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
    name: "cappasity",
    code: "CAPP",
    icon: "capp",
    longname: "Cappasity",
    description: "Cappasity coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cappasity/"
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
    name: "paragon",
    code: "PRG",
    icon: "prg",
    longname: "Paragon",
    description: "Paragon coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/paragon/"
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
    name: "icos",
    code: "ICOS",
    icon: "icos",
    longname: "ICOS",
    description: "ICOS coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/icos/"
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
    name: "oax",
    code: "OAX",
    icon: "oax",
    longname: "OAX",
    description: "OAX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/oax/"
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
    name: "aeron",
    code: "ARN",
    icon: "arn",
    longname: "Aeron",
    description: "Aeron coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aeron/"
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
    name: "nolimitcoin",
    code: "NLC2",
    icon: "nlc2",
    longname: "NoLimitCoin",
    description: "NoLimitCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nolimitcoin/"
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
    name: "energo",
    code: "TSL",
    icon: "tsl",
    longname: "Energo",
    description: "Energo coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/energo/"
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
    name: "bodhi",
    code: "BOT",
    icon: "bot",
    longname: "Bodhi",
    description: "Bodhi coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bodhi/"
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
    name: "bitcoin-green",
    code: "BITG",
    icon: "bitg",
    longname: "Bitcoin Green",
    description: "Bitcoin Green coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoin-green/"
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
    name: "pareto-network",
    code: "PARETO",
    icon: "pareto",
    longname: "Pareto Network",
    description: "Pareto Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pareto-network/"
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
    name: "matryx",
    code: "MTX",
    icon: "mtx",
    longname: "Matryx",
    description: "Matryx coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/matryx/"
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
    name: "qbao",
    code: "QBT",
    icon: "qbt",
    longname: "Qbao",
    description: "Qbao coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/qbao/"
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
    name: "solarcoin",
    code: "SLR",
    icon: "slr",
    longname: "SolarCoin",
    description: "SolarCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/solarcoin/"
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
    name: "all-sports",
    code: "SOC",
    icon: "soc",
    longname: "All Sports",
    description: "All Sports coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/all-sports/"
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
    name: "carvertical",
    code: "CV",
    icon: "cv",
    longname: "carVertical",
    description: "carVertical coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/carvertical/"
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
    name: "linda",
    code: "LINDA",
    icon: "linda",
    longname: "Linda",
    description: "Linda coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/linda/"
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
    name: "encrypgen",
    code: "DNA",
    icon: "dna",
    longname: "EncrypGen",
    description: "EncrypGen coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/encrypgen/"
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
    name: "sentinel-chain",
    code: "SENC",
    icon: "senc",
    longname: "Sentinel Chain",
    description: "Sentinel Chain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sentinel-chain/"
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
    name: "echolink",
    code: "EKO",
    icon: "eko",
    longname: "EchoLink",
    description: "EchoLink coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/echolink/"
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
    name: "rialto",
    code: "XRL",
    icon: "xrl",
    longname: "Rialto",
    description: "Rialto coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rialto/"
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
    name: "babb",
    code: "BAX",
    icon: "bax",
    longname: "BABB",
    description: "BABB coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/babb/"
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
    name: "neumark",
    code: "NEU",
    icon: "neu",
    longname: "Neumark",
    description: "Neumark coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/neumark/"
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
    name: "databits",
    code: "DTB",
    icon: "dtb",
    longname: "Databits",
    description: "Databits coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/databits/"
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
    name: "clams",
    code: "CLAM",
    icon: "clam",
    longname: "Clams",
    description: "Clams coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/clams/"
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
    name: "nvo",
    code: "NVST",
    icon: "nvst",
    longname: "NVO",
    description: "NVO coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nvo/"
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
    name: "swarm-city",
    code: "SWT",
    icon: "swt",
    longname: "Swarm City",
    description: "Swarm City coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/swarm-city/"
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
    name: "myriad",
    code: "XMY",
    icon: "xmy",
    longname: "Myriad",
    description: "Myriad coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/myriad/"
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
    name: "blackmoon",
    code: "BMC",
    icon: "bmc",
    longname: "Blackmoon",
    description: "Blackmoon coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blackmoon/"
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
    name: "mooncoin",
    code: "MOON",
    icon: "moon",
    longname: "Mooncoin",
    description: "Mooncoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mooncoin/"
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
    name: "decent-bet",
    code: "DBET",
    icon: "dbet",
    longname: "DecentBet",
    description: "DecentBet coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/decent-bet/"
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
    name: "sureremit",
    code: "RMT",
    icon: "rmt",
    longname: "SureRemit",
    description: "SureRemit coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sureremit/"
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
    name: "universal-currency",
    code: "UNIT",
    icon: "unit",
    longname: "Universal Currency",
    description: "Universal Currency coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/universal-currency/"
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
    name: "coinpoker",
    code: "CHP",
    icon: "chp",
    longname: "CoinPoker",
    description: "CoinPoker coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/coinpoker/"
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
    name: "fidentiax",
    code: "FDX",
    icon: "fdx",
    longname: "FidentiaX",
    description: "FidentiaX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fidentiax/"
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
    name: "domraider",
    code: "DRT",
    icon: "drt",
    longname: "DomRaider",
    description: "DomRaider coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/domraider/"
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
    name: "transfercoin",
    code: "TX",
    icon: "tx",
    longname: "TransferCoin",
    description: "TransferCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/transfercoin/"
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
    name: "debitum-network",
    code: "DEB",
    icon: "deb",
    longname: "Debitum Network",
    description: "Debitum Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/debitum-network/"
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
    name: "banca",
    code: "BANCA",
    icon: "banca",
    longname: "Banca",
    description: "Banca coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/banca/"
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
    name: "luxcoin",
    code: "LUX",
    icon: "lux",
    longname: "LUXCoin",
    description: "LUXCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/luxcoin/"
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
    name: "energycoin",
    code: "ENRG",
    icon: "enrg",
    longname: "Energycoin",
    description: "Energycoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/energycoin/"
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
    name: "ethereum-blue",
    code: "BLUE",
    icon: "blue",
    longname: "BLUE",
    description: "BLUE coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ethereum-blue/"
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
    name: "oneroot-network",
    code: "RNT",
    icon: "rnt",
    longname: "OneRoot Network",
    description: "OneRoot Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/oneroot-network/"
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
    name: "mybit-token",
    code: "MYB",
    icon: "myb",
    longname: "MyBit Token",
    description: "MyBit Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mybit-token/"
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
    name: "waves-community-token",
    code: "WCT",
    icon: "wct",
    longname: "Waves Community Token",
    description: "Waves Community Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/waves-community-token/"
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
    name: "boolberry",
    code: "BBR",
    icon: "bbr",
    longname: "Boolberry",
    description: "Boolberry coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/boolberry/"
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
    name: "gambit",
    code: "GAM",
    icon: "gam",
    longname: "Gambit",
    description: "Gambit coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gambit/"
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
    name: "auroracoin",
    code: "AUR",
    icon: "aur",
    longname: "Auroracoin",
    description: "Auroracoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/auroracoin/"
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
    name: "b2bx",
    code: "B2B",
    icon: "b2b",
    longname: "B2BX",
    description: "B2BX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/b2bx/"
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
    name: "open-trading-network",
    code: "OTN",
    icon: "otn",
    longname: "Open Trading Network",
    description: "Open Trading Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/open-trading-network/"
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
    name: "target-coin",
    code: "TGT",
    icon: "tgt",
    longname: "Target Coin",
    description: "Target Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/target-coin/"
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
    name: "dynamic",
    code: "DYN",
    icon: "dyn",
    longname: "Dynamic",
    description: "Dynamic coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dynamic/"
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
    name: "chronobank",
    code: "TIME",
    icon: "time",
    longname: "Chronobank",
    description: "Chronobank coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/chronobank/"
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
    name: "te-food",
    code: "TFD",
    icon: "tfd",
    longname: "TE-FOOD",
    description: "TE-FOOD coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/te-food/"
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
    name: "musicoin",
    code: "MUSIC",
    icon: "music",
    longname: "Musicoin",
    description: "Musicoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/musicoin/"
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
    name: "atn",
    code: "ATN",
    icon: "atn",
    longname: "ATN",
    description: "ATN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/atn/"
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
    name: "gobyte",
    code: "GBX",
    icon: "gbx",
    longname: "GoByte",
    description: "GoByte coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gobyte/"
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
    name: "clearcoin",
    code: "CLR",
    icon: "clr",
    longname: "ClearCoin",
    description: "ClearCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/clearcoin/"
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
    name: "syndicate",
    code: "SYNX",
    icon: "synx",
    longname: "Syndicate",
    description: "Syndicate coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/syndicate/"
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
    name: "atbcoin",
    code: "ATB",
    icon: "atb",
    longname: "ATBCoin",
    description: "ATBCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/atbcoin/"
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
    name: "heat-ledger",
    code: "HEAT",
    icon: "heat",
    longname: "HEAT",
    description: "HEAT coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/heat-ledger/"
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
    name: "pluton",
    code: "PLU",
    icon: "plu",
    longname: "Pluton",
    description: "Pluton coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pluton/"
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
    name: "quantum",
    code: "QAU",
    icon: "qau",
    longname: "Quantum",
    description: "Quantum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/quantum/"
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
    name: "bounty0x",
    code: "BNTY",
    icon: "bnty",
    longname: "Bounty0x",
    description: "Bounty0x coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bounty0x/"
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
    name: "mysterium",
    code: "MYST",
    icon: "myst",
    longname: "Mysterium",
    description: "Mysterium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mysterium/"
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
    name: "hydro-protocol",
    code: "HOT",
    icon: "hot",
    longname: "Hydro Protocol",
    description: "Hydro Protocol coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hydro-protocol/"
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
    name: "stealthcoin",
    code: "XST",
    icon: "xst",
    longname: "Stealthcoin",
    description: "Stealthcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/stealthcoin/"
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
    name: "spectrecoin",
    code: "XSPEC",
    icon: "xspec",
    longname: "Spectrecoin",
    description: "Spectrecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/spectrecoin/"
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
    name: "profile-utility-token",
    code: "PUT",
    icon: "put",
    longname: "Profile Utility Token",
    description: "Profile Utility Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/profile-utility-token/"
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
    name: "sphere",
    code: "SPHR",
    icon: "sphr",
    longname: "Sphere",
    description: "Sphere coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sphere/"
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
    name: "cvcoin",
    code: "CVCOIN",
    icon: "cvcoin",
    longname: "CVCoin",
    description: "CVCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cvcoin/"
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
    name: "devery",
    code: "EVE",
    icon: "eve",
    longname: "Devery",
    description: "Devery coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/devery/"
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
    name: "elixir",
    code: "ELIX",
    icon: "elix",
    longname: "Elixir",
    description: "Elixir coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/elixir/"
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
    name: "airtoken",
    code: "AIR",
    icon: "air",
    longname: "AirToken",
    description: "AirToken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/airtoken/"
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
    name: "dopecoin",
    code: "DOPE",
    icon: "dope",
    longname: "DopeCoin",
    description: "DopeCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dopecoin/"
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
    name: "tokes",
    code: "TKS",
    icon: "tks",
    longname: "Tokes",
    description: "Tokes coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tokes/"
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
    name: "mediccoin",
    code: "MEDIC",
    icon: "medic",
    longname: "MedicCoin",
    description: "MedicCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mediccoin/"
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
    name: "curecoin",
    code: "CURE",
    icon: "cure",
    longname: "Curecoin",
    description: "Curecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/curecoin/"
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
    name: "guaranteed-ethurance-token-extra",
    code: "GETX",
    icon: "getx",
    longname: "Guaranteed Ethurance Token Extra",
    description: "Guaranteed Ethurance Token Extra coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/guaranteed-ethurance-token-extra/"
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
    name: "travelflex",
    code: "TRF",
    icon: "trf",
    longname: "Travelflex",
    description: "Travelflex coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/travelflex/"
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
    name: "bitdice",
    code: "CSNO",
    icon: "csno",
    longname: "BitDice",
    description: "BitDice coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitdice/"
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
    name: "dotcoin",
    code: "DOT",
    icon: "dot",
    longname: "Dotcoin",
    description: "Dotcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dotcoin/"
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
    name: "aidcoin",
    code: "AID",
    icon: "aid",
    longname: "AidCoin",
    description: "AidCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aidcoin/"
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
    name: "worldcore",
    code: "WRC",
    icon: "wrc",
    longname: "Worldcore",
    description: "Worldcore coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/worldcore/"
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
    name: "obits",
    code: "OBITS",
    icon: "obits",
    longname: "OBITS",
    description: "OBITS coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/obits/"
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
    name: "tiesdb",
    code: "TIE",
    icon: "tie",
    longname: "Ties.DB",
    description: "Ties.DB coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tiesdb/"
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
    name: "adbank",
    code: "ADB",
    icon: "adb",
    longname: "adbank",
    description: "adbank coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/adbank/"
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
    name: "insights-network",
    code: "INSTAR",
    icon: "instar",
    longname: "Insights Network",
    description: "Insights Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/insights-network/"
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
    name: "change",
    code: "CAG",
    icon: "cag",
    longname: "Change",
    description: "Change coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/change/"
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
    name: "artbyte",
    code: "ABY",
    icon: "aby",
    longname: "ArtByte",
    description: "ArtByte coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/artbyte/"
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
    name: "dcorp",
    code: "DRP",
    icon: "drp",
    longname: "DCORP",
    description: "DCORP coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dcorp/"
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
    name: "apx",
    code: "APX",
    icon: "apx",
    longname: "APX",
    description: "APX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/apx/"
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
    name: "gatcoin",
    code: "GAT",
    icon: "gat",
    longname: "Gatcoin",
    description: "Gatcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gatcoin/"
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
    name: "leverj",
    code: "LEV",
    icon: "lev",
    longname: "Leverj",
    description: "Leverj coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/leverj/"
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
    name: "get-protocol",
    code: "GET",
    icon: "get",
    longname: "GET Protocol",
    description: "GET Protocol coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/get-protocol/"
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
    name: "synergy",
    code: "SNRG",
    icon: "snrg",
    longname: "Synergy",
    description: "Synergy coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/synergy/"
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
    name: "breakout-stake",
    code: "BRX",
    icon: "brx",
    longname: "Breakout Stake",
    description: "Breakout Stake coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/breakout-stake/"
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
    name: "cryptoping",
    code: "PING",
    icon: "ping",
    longname: "CryptoPing",
    description: "CryptoPing coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cryptoping/"
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
    name: "hexx",
    code: "HXX",
    icon: "hxx",
    longname: "Hexx",
    description: "Hexx coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hexx/"
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
    name: "trueflip",
    code: "TFL",
    icon: "tfl",
    longname: "TrueFlip",
    description: "TrueFlip coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/trueflip/"
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
    name: "qwark",
    code: "QWARK",
    icon: "qwark",
    longname: "Qwark",
    description: "Qwark coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/qwark/"
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
    name: "bitcoinz",
    code: "BTCZ",
    icon: "btcz",
    longname: "BitcoinZ",
    description: "BitcoinZ coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoinz/"
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
    name: "biocoin",
    code: "BIO",
    icon: "bio",
    longname: "BioCoin",
    description: "BioCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/biocoin/"
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
    name: "opus",
    code: "OPT",
    icon: "opt",
    longname: "Opus",
    description: "Opus coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/opus/"
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
    name: "life",
    code: "LIFE",
    icon: "life",
    longname: "LIFE",
    description: "LIFE coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/life/"
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
    name: "fedoracoin",
    code: "TIPS",
    icon: "tips",
    longname: "FedoraCoin",
    description: "FedoraCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fedoracoin/"
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
    name: "gcn-coin",
    code: "GCN",
    icon: "gcn",
    longname: "GCN Coin",
    description: "GCN Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gcn-coin/"
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
    name: "piplcoin",
    code: "PIPL",
    icon: "pipl",
    longname: "PiplCoin",
    description: "PiplCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/piplcoin/"
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
    name: "campuscoin",
    code: "CMPCO",
    icon: "cmpco",
    longname: "CampusCoin",
    description: "CampusCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/campuscoin/"
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
    name: "internxt",
    code: "INXT",
    icon: "inxt",
    longname: "Internxt",
    description: "Internxt coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/internxt/"
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
    name: "bezop",
    code: "BEZ",
    icon: "bez",
    longname: "Bezop",
    description: "Bezop coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bezop/"
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
    name: "sharex",
    code: "SEXC",
    icon: "sexc",
    longname: "ShareX",
    description: "ShareX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sharex/"
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
    name: "russiacoin",
    code: "RC",
    icon: "rc",
    longname: "RussiaCoin",
    description: "RussiaCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/russiacoin/"
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
    name: "darcrus",
    code: "DAR",
    icon: "dar",
    longname: "Darcrus",
    description: "Darcrus coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/darcrus/"
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
    name: "terracoin",
    code: "TRC",
    icon: "trc",
    longname: "Terracoin",
    description: "Terracoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/terracoin/"
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
    name: "ebtcnew",
    code: "EBTC",
    icon: "ebtc",
    longname: "eBitcoin",
    description: "eBitcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ebtcnew/"
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
    name: "graft",
    code: "GRFT",
    icon: "grft",
    longname: "Graft",
    description: "Graft coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/graft/"
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
    name: "lampix",
    code: "PIX",
    icon: "pix",
    longname: "Lampix",
    description: "Lampix coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/lampix/"
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
    name: "starbase",
    code: "STAR",
    icon: "star",
    longname: "Starbase",
    description: "Starbase coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/starbase/"
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
    name: "eboostcoin",
    code: "EBST",
    icon: "ebst",
    longname: "eBoost",
    description: "eBoost coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/eboostcoin/"
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
    name: "riecoin",
    code: "RIC",
    icon: "ric",
    longname: "Riecoin",
    description: "Riecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/riecoin/"
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
    name: "breakout",
    code: "BRK",
    icon: "brk",
    longname: "Breakout",
    description: "Breakout coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/breakout/"
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
    name: "audiocoin",
    code: "ADC",
    icon: "adc",
    longname: "AudioCoin",
    description: "AudioCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/audiocoin/"
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
    name: "denarius-dnr",
    code: "DNR",
    icon: "dnr",
    longname: "Denarius",
    description: "Denarius coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/denarius-dnr/"
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
    name: "monacocoin",
    code: "XMCC",
    icon: "xmcc",
    longname: "Monoeci",
    description: "Monoeci coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/monacocoin/"
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
    name: "blitzcash",
    code: "BLITZ",
    icon: "blitz",
    longname: "Blitzcash",
    description: "Blitzcash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blitzcash/"
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
    name: "reftoken",
    code: "REF",
    icon: "ref",
    longname: "RefToken",
    description: "RefToken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/reftoken/"
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
    name: "vslice",
    code: "VSL",
    icon: "vsl",
    longname: "vSlice",
    description: "vSlice coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vslice/"
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
    name: "sociall",
    code: "SCL",
    icon: "scl",
    longname: "Sociall",
    description: "Sociall coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sociall/"
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
    name: "verify",
    code: "CRED",
    icon: "cred",
    longname: "Verify",
    description: "Verify coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/verify/"
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
    name: "copytrack",
    code: "CPY",
    icon: "cpy",
    longname: "COPYTRACK",
    description: "COPYTRACK coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/copytrack/"
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
    name: "zeitcoin",
    code: "ZEIT",
    icon: "zeit",
    longname: "Zeitcoin",
    description: "Zeitcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zeitcoin/"
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
    name: "exrnchain",
    code: "EXRN",
    icon: "exrn",
    longname: "EXRNchain",
    description: "EXRNchain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/exrnchain/"
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
    name: "dether",
    code: "DTH",
    icon: "dth",
    longname: "Dether",
    description: "Dether coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dether/"
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
    name: "1world",
    code: "1WO",
    icon: "1wo",
    longname: "1World",
    description: "1World coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/1world/"
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
    name: "bitswift",
    code: "SWIFT",
    icon: "swift",
    longname: "Bitswift",
    description: "Bitswift coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitswift/"
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
    name: "experty",
    code: "EXY",
    icon: "exy",
    longname: "Experty",
    description: "Experty coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/experty/"
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
    name: "aigang",
    code: "AIX",
    icon: "aix",
    longname: "Aigang",
    description: "Aigang coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aigang/"
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
    name: "crave",
    code: "CRAVE",
    icon: "crave",
    longname: "Crave",
    description: "Crave coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/crave/"
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
    name: "privatix",
    code: "PRIX",
    icon: "prix",
    longname: "Privatix",
    description: "Privatix coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/privatix/"
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
    name: "dnotes",
    code: "NOTE",
    icon: "note",
    longname: "DNotes",
    description: "DNotes coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dnotes/"
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
    name: "huntercoin",
    code: "HUC",
    icon: "huc",
    longname: "HunterCoin",
    description: "HunterCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/huntercoin/"
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
    name: "evergreencoin",
    code: "EGC",
    icon: "egc",
    longname: "EverGreenCoin",
    description: "EverGreenCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/evergreencoin/"
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
    name: "chronologic",
    code: "DAY",
    icon: "day",
    longname: "Chronologic",
    description: "Chronologic coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/chronologic/"
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
    name: "1337coin",
    code: "1337",
    icon: "1337",
    longname: "Elite",
    description: "Elite coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/1337coin/"
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
    name: "rupaya",
    code: "RUPX",
    icon: "rupx",
    longname: "Rupaya",
    description: "Rupaya coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rupaya/"
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
    name: "sexcoin",
    code: "SXC",
    icon: "sxc",
    longname: "Sexcoin",
    description: "Sexcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sexcoin/"
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
    name: "litedoge",
    code: "LDOGE",
    icon: "ldoge",
    longname: "LiteDoge",
    description: "LiteDoge coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/litedoge/"
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
    name: "qvolta",
    code: "QVT",
    icon: "qvt",
    longname: "Qvolta",
    description: "Qvolta coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/qvolta/"
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
    name: "teslacoin",
    code: "TES",
    icon: "tes",
    longname: "TeslaCoin",
    description: "TeslaCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/teslacoin/"
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
    name: "startercoin",
    code: "STAC",
    icon: "stac",
    longname: "StarterCoin",
    description: "StarterCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/startercoin/"
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
    name: "rupee",
    code: "RUP",
    icon: "rup",
    longname: "Rupee",
    description: "Rupee coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rupee/"
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
    name: "magnet",
    code: "MAG",
    icon: "mag",
    longname: "Magnet",
    description: "Magnet coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/magnet/"
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
    name: "mcap",
    code: "MCAP",
    icon: "mcap",
    longname: "MCAP",
    description: "MCAP coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mcap/"
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
    name: "force",
    code: "FOR",
    icon: "for",
    longname: "FORCE",
    description: "FORCE coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/force/"
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
    name: "blocklancer",
    code: "LNC",
    icon: "lnc",
    longname: "Blocklancer",
    description: "Blocklancer coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blocklancer/"
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
    name: "inpay",
    code: "INPAY",
    icon: "inpay",
    longname: "InPay",
    description: "InPay coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/inpay/"
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
    name: "kzcash",
    code: "KZC",
    icon: "kzc",
    longname: "Kzcash",
    description: "Kzcash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kzcash/"
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
    name: "flik",
    code: "FLIK",
    icon: "flik",
    longname: "FLiK",
    description: "FLiK coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/flik/"
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
    name: "oceanlab",
    code: "OCL",
    icon: "ocl",
    longname: "Oceanlab",
    description: "Oceanlab coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/oceanlab/"
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
    name: "bluecoin",
    code: "BLU",
    icon: "blu",
    longname: "BlueCoin",
    description: "BlueCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bluecoin/"
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
    name: "tidex-token",
    code: "TDX",
    icon: "tdx",
    longname: "Tidex Token",
    description: "Tidex Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tidex-token/"
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
    name: "noblecoin",
    code: "NOBL",
    icon: "nobl",
    longname: "NobleCoin",
    description: "NobleCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/noblecoin/"
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
    name: "biblepay",
    code: "BBP",
    icon: "bbp",
    longname: "BiblePay",
    description: "BiblePay coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/biblepay/"
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
    name: "pylon-network",
    code: "PYLNT",
    icon: "pylnt",
    longname: "Pylon Network",
    description: "Pylon Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pylon-network/"
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
    name: "skincoin",
    code: "SKIN",
    icon: "skin",
    longname: "SkinCoin",
    description: "SkinCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/skincoin/"
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
    name: "speed-mining-service",
    code: "SMS",
    icon: "sms",
    longname: "Speed Mining Service",
    description: "Speed Mining Service coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/speed-mining-service/"
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
    name: "ellaism",
    code: "ELLA",
    icon: "ella",
    longname: "Ellaism",
    description: "Ellaism coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ellaism/"
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
    name: "ethbits",
    code: "ETBS",
    icon: "etbs",
    longname: "Ethbits",
    description: "Ethbits coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ethbits/"
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
    name: "eltcoin",
    code: "ELTCOIN",
    icon: "eltcoin",
    longname: "ELTCOIN",
    description: "ELTCOIN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/eltcoin/"
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
    name: "argentum",
    code: "ARG",
    icon: "arg",
    longname: "Argentum",
    description: "Argentum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/argentum/"
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
    name: "stipend",
    code: "SPD",
    icon: "spd",
    longname: "Stipend",
    description: "Stipend coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/stipend/"
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
    name: "interstellar-holdings",
    code: "HOLD",
    icon: "hold",
    longname: "Interstellar Holdings",
    description: "Interstellar Holdings coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/interstellar-holdings/"
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
    name: "smileycoin",
    code: "SMLY",
    icon: "smly",
    longname: "SmileyCoin",
    description: "SmileyCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/smileycoin/"
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
    name: "high-voltage",
    code: "HVCO",
    icon: "hvco",
    longname: "High Voltage",
    description: "High Voltage coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/high-voltage/"
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
    name: "incakoin",
    code: "NKA",
    icon: "nka",
    longname: "IncaKoin",
    description: "IncaKoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/incakoin/"
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
    name: "starcredits",
    code: "STRC",
    icon: "strc",
    longname: "StarCredits",
    description: "StarCredits coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/starcredits/"
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
    name: "deuscoin",
    code: "DEUS",
    icon: "deus",
    longname: "DeusCoin",
    description: "DeusCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/deuscoin/"
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
    name: "arcticcoin",
    code: "ARC",
    icon: "arc",
    longname: "ArcticCoin",
    description: "ArcticCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/arcticcoin/"
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
    name: "zennies",
    code: "ZENI",
    icon: "zeni",
    longname: "Zennies",
    description: "Zennies coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zennies/"
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
    name: "moin",
    code: "MOIN",
    icon: "moin",
    longname: "Moin",
    description: "Moin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/moin/"
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
    name: "sovereign-hero",
    code: "HERO",
    icon: "hero",
    longname: "Sovereign Hero",
    description: "Sovereign Hero coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sovereign-hero/"
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
    name: "kolion",
    code: "KLN",
    icon: "kln",
    longname: "Kolion",
    description: "Kolion coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kolion/"
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
    name: "vivo",
    code: "VIVO",
    icon: "vivo",
    longname: "VIVO",
    description: "VIVO coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vivo/"
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
    name: "unify",
    code: "UNIFY",
    icon: "unify",
    longname: "Unify",
    description: "Unify coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/unify/"
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
    name: "wandx",
    code: "WAND",
    icon: "wand",
    longname: "WandX",
    description: "WandX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/wandx/"
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
    name: "straks",
    code: "STAK",
    icon: "stak",
    longname: "STRAKS",
    description: "STRAKS coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/straks/"
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
    name: "deutsche-emark",
    code: "DEM",
    icon: "dem",
    longname: "Deutsche eMark",
    description: "Deutsche eMark coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/deutsche-emark/"
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
    name: "shekel",
    code: "JEW",
    icon: "jew",
    longname: "Shekel",
    description: "Shekel coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/shekel/"
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
    name: "dinastycoin",
    code: "DCY",
    icon: "dcy",
    longname: "Dinastycoin",
    description: "Dinastycoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dinastycoin/"
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
    name: "britcoin",
    code: "BRIT",
    icon: "brit",
    longname: "BritCoin",
    description: "BritCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/britcoin/"
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
    name: "ethersportz",
    code: "ESZ",
    icon: "esz",
    longname: "EtherSportz",
    description: "EtherSportz coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ethersportz/"
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
    name: "dfscoin",
    code: "DFS",
    icon: "dfs",
    longname: "DFSCoin",
    description: "DFSCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dfscoin/"
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
    name: "the-cypherfunks",
    code: "FUNK",
    icon: "funk",
    longname: "The Cypherfunks",
    description: "The Cypherfunks coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/the-cypherfunks/"
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
    name: "peepcoin",
    code: "PCN",
    icon: "pcn",
    longname: "PeepCoin",
    description: "PeepCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/peepcoin/"
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
    name: "emphy",
    code: "EPY",
    icon: "epy",
    longname: "Emphy",
    description: "Emphy coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/emphy/"
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
    name: "suretly",
    code: "SUR",
    icon: "sur",
    longname: "Suretly",
    description: "Suretly coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/suretly/"
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
    name: "equal",
    code: "EQL",
    icon: "eql",
    longname: "Equal",
    description: "Equal coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/equal/"
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
    name: "soma",
    code: "SCT",
    icon: "sct",
    longname: "Soma",
    description: "Soma coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/soma/"
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
    name: "digitalcoin",
    code: "DGC",
    icon: "dgc",
    longname: "Digitalcoin",
    description: "Digitalcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/digitalcoin/"
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
    name: "bit20",
    code: "BTWTY",
    icon: "btwty",
    longname: "Bit20",
    description: "Bit20 coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bit20/"
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
    name: "op-coin",
    code: "OPC",
    icon: "opc",
    longname: "OP Coin",
    description: "OP Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/op-coin/"
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
    name: "bitgem",
    code: "BTG",
    icon: "btg",
    longname: "Bitgem",
    description: "Bitgem coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitgem/"
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
    name: "macron",
    code: "MCRN",
    icon: "mcrn",
    longname: "MACRON",
    description: "MACRON coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/macron/"
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
    name: "aquariuscoin",
    code: "ARCO",
    icon: "arco",
    longname: "AquariusCoin",
    description: "AquariusCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aquariuscoin/"
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
    name: "bitsilver",
    code: "BITSILVER",
    icon: "bitsilver",
    longname: "bitSilver",
    description: "bitSilver coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitsilver/"
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
    name: "dashcoin",
    code: "DSH",
    icon: "dsh",
    longname: "Dashcoin",
    description: "Dashcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dashcoin/"
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
    name: "droxne",
    code: "DRXNE",
    icon: "drxne",
    longname: "DROXNE",
    description: "DROXNE coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/droxne/"
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
    name: "tekcoin",
    code: "TEK",
    icon: "tek",
    longname: "TEKcoin",
    description: "TEKcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tekcoin/"
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
    name: "minereum",
    code: "MNE",
    icon: "mne",
    longname: "Minereum",
    description: "Minereum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/minereum/"
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
    name: "revolvercoin",
    code: "XRE",
    icon: "xre",
    longname: "RevolverCoin",
    description: "RevolverCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/revolvercoin/"
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
    name: "erc20",
    code: "ERC20",
    icon: "erc20",
    longname: "ERC20",
    description: "ERC20 coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/erc20/"
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
    name: "qbic",
    code: "QBIC",
    icon: "qbic",
    longname: "Qbic",
    description: "Qbic coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/qbic/"
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
    name: "steneum-coin",
    code: "STN",
    icon: "stn",
    longname: "Steneum Coin",
    description: "Steneum Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/steneum-coin/"
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
    name: "bitair",
    code: "BTCA",
    icon: "btca",
    longname: "Bitair",
    description: "Bitair coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitair/"
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
    name: "garlicoin",
    code: "GRLC",
    icon: "grlc",
    longname: "Garlicoin",
    description: "Garlicoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/garlicoin/"
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
    name: "mojocoin",
    code: "MOJO",
    icon: "mojo",
    longname: "MojoCoin",
    description: "MojoCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mojocoin/"
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
    name: "postcoin",
    code: "POST",
    icon: "post",
    longname: "PostCoin",
    description: "PostCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/postcoin/"
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
    name: "ronpaulcoin",
    code: "RPC",
    icon: "rpc",
    longname: "RonPaulCoin",
    description: "RonPaulCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ronpaulcoin/"
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
    name: "sterlingcoin",
    code: "SLG",
    icon: "slg",
    longname: "Sterlingcoin",
    description: "Sterlingcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sterlingcoin/"
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
    name: "nekonium",
    code: "NUKO",
    icon: "nuko",
    longname: "Nekonium",
    description: "Nekonium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nekonium/"
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
    name: "blakecoin",
    code: "BLC",
    icon: "blc",
    longname: "Blakecoin",
    description: "Blakecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blakecoin/"
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
    name: "gpu-coin",
    code: "GPU",
    icon: "gpu",
    longname: "GPU Coin",
    description: "GPU Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gpu-coin/"
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
    name: "pakcoin",
    code: "PAK",
    icon: "pak",
    longname: "Pakcoin",
    description: "Pakcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pakcoin/"
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
    name: "zcash-gold",
    code: "ZCG",
    icon: "zcg",
    longname: "Zlancer",
    description: "Zlancer coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zcash-gold/"
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
    name: "bolivarcoin",
    code: "BOLI",
    icon: "boli",
    longname: "Bolivarcoin",
    description: "Bolivarcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bolivarcoin/"
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
    name: "prime-xi",
    code: "PXI",
    icon: "pxi",
    longname: "Prime-XI",
    description: "Prime-XI coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/prime-xi/"
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
    name: "desire",
    code: "DSR",
    icon: "dsr",
    longname: "Desire",
    description: "Desire coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/desire/"
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
    name: "influxcoin",
    code: "INFX",
    icon: "infx",
    longname: "Influxcoin",
    description: "Influxcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/influxcoin/"
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
    name: "parallelcoin",
    code: "DUO",
    icon: "duo",
    longname: "ParallelCoin",
    description: "ParallelCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/parallelcoin/"
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
    name: "bumbacoin",
    code: "BUMBA",
    icon: "bumba",
    longname: "BumbaCoin",
    description: "BumbaCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bumbacoin/"
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
    name: "stronghands",
    code: "SHND",
    icon: "shnd",
    longname: "StrongHands",
    description: "StrongHands coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/stronghands/"
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
    name: "litebitcoin",
    code: "LBTC",
    icon: "lbtc",
    longname: "LiteBitcoin",
    description: "LiteBitcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/litebitcoin/"
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
    name: "dalecoin",
    code: "DALC",
    icon: "dalc",
    longname: "Dalecoin",
    description: "Dalecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dalecoin/"
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
    name: "soilcoin",
    code: "SOIL",
    icon: "soil",
    longname: "SOILcoin",
    description: "SOILcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/soilcoin/"
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
    name: "coinonat",
    code: "CXT",
    icon: "cxt",
    longname: "Coinonat",
    description: "Coinonat coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/coinonat/"
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
    name: "marijuanacoin",
    code: "MAR",
    icon: "mar",
    longname: "Marijuanacoin",
    description: "Marijuanacoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/marijuanacoin/"
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
    name: "neuro",
    code: "NRO",
    icon: "nro",
    longname: "Neuro",
    description: "Neuro coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/neuro/"
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
    name: "cannation",
    code: "CNNC",
    icon: "cnnc",
    longname: "Cannation",
    description: "Cannation coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cannation/"
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
    name: "songcoin",
    code: "SONG",
    icon: "song",
    longname: "SongCoin",
    description: "SongCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/songcoin/"
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
    name: "homeblockcoin",
    code: "HBC",
    icon: "hbc",
    longname: "HomeBlockCoin",
    description: "HomeBlockCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/homeblockcoin/"
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
    name: "vaperscoin",
    code: "VPRC",
    icon: "vprc",
    longname: "VapersCoin",
    description: "VapersCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vaperscoin/"
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
    name: "doubloon",
    code: "BOAT",
    icon: "boat",
    longname: "BOAT",
    description: "BOAT coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/doubloon/"
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
    name: "gbcgoldcoin",
    code: "GBC",
    icon: "gbc",
    longname: "GBCGoldCoin",
    description: "GBCGoldCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gbcgoldcoin/"
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
    name: "the-champcoin",
    code: "TCC",
    icon: "tcc",
    longname: "The ChampCoin",
    description: "The ChampCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/the-champcoin/"
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
    name: "farad",
    code: "FRD",
    icon: "frd",
    longname: "Farad",
    description: "Farad coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/farad/"
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
    name: "goodomy",
    code: "GOOD",
    icon: "good",
    longname: "Goodomy",
    description: "Goodomy coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/goodomy/"
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
    name: "altcoin-alt",
    code: "ALT",
    icon: "alt",
    longname: "Altcoin",
    description: "Altcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/altcoin-alt/"
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
    name: "bullion",
    code: "CBX",
    icon: "cbx",
    longname: "Bullion",
    description: "Bullion coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bullion/"
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
    name: "masternodecoin",
    code: "MTNC",
    icon: "mtnc",
    longname: "Masternodecoin",
    description: "Masternodecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/masternodecoin/"
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
    name: "real-estate-tokens",
    code: "REX",
    icon: "rex",
    longname: "REX",
    description: "REX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/real-estate-tokens/"
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
    name: "flypme",
    code: "FYP",
    icon: "fyp",
    longname: "FlypMe",
    description: "FlypMe coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/flypme/"
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
    name: "greencoin",
    code: "GRE",
    icon: "gre",
    longname: "Greencoin",
    description: "Greencoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/greencoin/"
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
}];