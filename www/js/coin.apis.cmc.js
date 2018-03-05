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
    name: "neo",
    code: "NEO",
    icon: "neo",
    longname: "NEO",
    description: "NEO coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/neo/"
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
    name: "monero",
    code: "XMR",
    icon: "xmr",
    longname: "Monero",
    description: "Monero coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/monero/"
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
    name: "iota",
    code: "MIOTA",
    icon: "miota",
    longname: "IOTA",
    description: "IOTA coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/iota/"
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
    name: "tron",
    code: "TRX",
    icon: "trx",
    longname: "TRON",
    description: "TRON coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tron/"
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
    name: "nano",
    code: "NANO",
    icon: "nano",
    longname: "Nano",
    description: "Nano coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nano/"
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
    name: "lisk",
    code: "LSK",
    icon: "lsk",
    longname: "Lisk",
    description: "Lisk coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/lisk/"
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
    name: "omisego",
    code: "OMG",
    icon: "omg",
    longname: "OmiseGO",
    description: "OmiseGO coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/omisego/"
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
    name: "zcash",
    code: "ZEC",
    icon: "zec",
    longname: "Zcash",
    description: "Zcash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zcash/"
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
    name: "digixdao",
    code: "DGD",
    icon: "dgd",
    longname: "DigixDAO",
    description: "DigixDAO coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/digixdao/"
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
    name: "verge",
    code: "XVG",
    icon: "xvg",
    longname: "Verge",
    description: "Verge coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/verge/"
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
    name: "populous",
    code: "PPT",
    icon: "ppt",
    longname: "Populous",
    description: "Populous coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/populous/"
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
    name: "waves",
    code: "WAVES",
    icon: "waves",
    longname: "Waves",
    description: "Waves coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/waves/"
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
    name: "status",
    code: "SNT",
    icon: "snt",
    longname: "Status",
    description: "Status coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/status/"
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
    name: "maker",
    code: "MKR",
    icon: "mkr",
    longname: "Maker",
    description: "Maker coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/maker/"
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
    name: "decred",
    code: "DCR",
    icon: "dcr",
    longname: "Decred",
    description: "Decred coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/decred/"
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
    name: "augur",
    code: "REP",
    icon: "rep",
    longname: "Augur",
    description: "Augur coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/augur/"
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
    name: "electroneum",
    code: "ETN",
    icon: "etn",
    longname: "Electroneum",
    description: "Electroneum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/electroneum/"
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
    name: "bytom",
    code: "BTM",
    icon: "btm",
    longname: "Bytom",
    description: "Bytom coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bytom/"
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
    name: "dragonchain",
    code: "DRGN",
    icon: "drgn",
    longname: "Dragonchain",
    description: "Dragonchain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dragonchain/"
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
    name: "ark",
    code: "ARK",
    icon: "ark",
    longname: "Ark",
    description: "Ark coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ark/"
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
    name: "hshare",
    code: "HSR",
    icon: "hsr",
    longname: "Hshare",
    description: "Hshare coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hshare/"
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
    name: "zilliqa",
    code: "ZIL",
    icon: "zil",
    longname: "Zilliqa",
    description: "Zilliqa coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zilliqa/"
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
    name: "syscoin",
    code: "SYS",
    icon: "sys",
    longname: "Syscoin",
    description: "Syscoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/syscoin/"
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
    name: "digibyte",
    code: "DGB",
    icon: "dgb",
    longname: "DigiByte",
    description: "DigiByte coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/digibyte/"
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
    name: "kucoin-shares",
    code: "KCS",
    icon: "kcs",
    longname: "KuCoin Shares",
    description: "KuCoin Shares coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kucoin-shares/"
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
    name: "factom",
    code: "FCT",
    icon: "fct",
    longname: "Factom",
    description: "Factom coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/factom/"
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
    name: "aelf",
    code: "ELF",
    icon: "elf",
    longname: "aelf",
    description: "aelf coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aelf/"
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
    name: "qash",
    code: "QASH",
    icon: "qash",
    longname: "QASH",
    description: "QASH coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/qash/"
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
    name: "nebulas-token",
    code: "NAS",
    icon: "nas",
    longname: "Nebulas",
    description: "Nebulas coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nebulas-token/"
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
    name: "funfair",
    code: "FUN",
    icon: "fun",
    longname: "FunFair",
    description: "FunFair coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/funfair/"
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
    name: "reddcoin",
    code: "RDD",
    icon: "rdd",
    longname: "ReddCoin",
    description: "ReddCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/reddcoin/"
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
    name: "dent",
    code: "DENT",
    icon: "dent",
    longname: "Dent",
    description: "Dent coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dent/"
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
    name: "gxshares",
    code: "GXS",
    icon: "gxs",
    longname: "GXShares",
    description: "GXShares coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gxshares/"
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
    name: "power-ledger",
    code: "POWR",
    icon: "powr",
    longname: "Power Ledger",
    description: "Power Ledger coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/power-ledger/"
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
    name: "neblio",
    code: "NEBL",
    icon: "nebl",
    longname: "Neblio",
    description: "Neblio coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/neblio/"
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
    name: "polymath-network",
    code: "POLY",
    icon: "poly",
    longname: "Polymath",
    description: "Polymath coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/polymath-network/"
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
    name: "nxt",
    code: "NXT",
    icon: "nxt",
    longname: "Nxt",
    description: "Nxt coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nxt/"
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
    name: "bancor",
    code: "BNT",
    icon: "bnt",
    longname: "Bancor",
    description: "Bancor coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bancor/"
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
    name: "cindicator",
    code: "CND",
    icon: "cnd",
    longname: "Cindicator",
    description: "Cindicator coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cindicator/"
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
    name: "iconomi",
    code: "ICN",
    icon: "icn",
    longname: "Iconomi",
    description: "Iconomi coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/iconomi/"
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
    name: "maidsafecoin",
    code: "MAID",
    icon: "maid",
    longname: "MaidSafeCoin",
    description: "MaidSafeCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/maidsafecoin/"
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
    name: "smartcash",
    code: "SMART",
    icon: "smart",
    longname: "SmartCash",
    description: "SmartCash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/smartcash/"
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
    name: "singularitynet",
    code: "AGI",
    icon: "agi",
    longname: "SingularityNET",
    description: "SingularityNET coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/singularitynet/"
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
    name: "gnosis-gno",
    code: "GNO",
    icon: "gno",
    longname: "Gnosis",
    description: "Gnosis coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gnosis-gno/"
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
    name: "gamecredits",
    code: "GAME",
    icon: "game",
    longname: "GameCredits",
    description: "GameCredits coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gamecredits/"
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
    name: "quantstamp",
    code: "QSP",
    icon: "qsp",
    longname: "Quantstamp",
    description: "Quantstamp coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/quantstamp/"
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
    name: "enjin-coin",
    code: "ENJ",
    icon: "enj",
    longname: "Enjin Coin",
    description: "Enjin Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/enjin-coin/"
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
    name: "genesis-vision",
    code: "GVT",
    icon: "gvt",
    longname: "Genesis Vision",
    description: "Genesis Vision coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/genesis-vision/"
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
    name: "ignis",
    code: "IGNIS",
    icon: "ignis",
    longname: "Ignis",
    description: "Ignis coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ignis/"
    }
},{
    name: "theta-token",
    code: "THETA",
    icon: "noicon",
    longname: "Theta Token",
    description: "Theta Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/theta-token/"
    }
},{
    name: "supernet-unity",
    code: "UNITY",
    icon: "noicon",
    longname: "SuperNET",
    description: "SuperNET coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/supernet-unity/"
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
    name: "civic",
    code: "CVC",
    icon: "cvc",
    longname: "Civic",
    description: "Civic coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/civic/"
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
    name: "ubiq",
    code: "UBQ",
    icon: "ubq",
    longname: "Ubiq",
    description: "Ubiq coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ubiq/"
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
    name: "nav-coin",
    code: "NAV",
    icon: "nav",
    longname: "NAV Coin",
    description: "NAV Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nav-coin/"
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
    name: "storm",
    code: "STORM",
    icon: "storm",
    longname: "Storm",
    description: "Storm coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/storm/"
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
    name: "substratum",
    code: "SUB",
    icon: "sub",
    longname: "Substratum",
    description: "Substratum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/substratum/"
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
    name: "rlc",
    code: "RLC",
    icon: "rlc",
    longname: "iExec RLC",
    description: "iExec RLC coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rlc/"
    }
},{
    name: "dynamic-trading-rights",
    code: "DTR",
    icon: "noicon",
    longname: "Dynamic Trading Rights",
    description: "Dynamic Trading Rights coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dynamic-trading-rights/"
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
    icon: "noicon",
    longname: "Time New Bank",
    description: "Time New Bank coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/time-new-bank/"
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
    name: "achain",
    code: "ACT",
    icon: "act",
    longname: "Achain",
    description: "Achain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/achain/"
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
    name: "medishares",
    code: "MDS",
    icon: "noicon",
    longname: "MediShares",
    description: "MediShares coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/medishares/"
    }
},{
    name: "blockv",
    code: "VEE",
    icon: "noicon",
    longname: "BLOCKv",
    description: "BLOCKv coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blockv/"
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
    name: "sophiatx",
    code: "SPHTX",
    icon: "sphtx",
    longname: "SophiaTX",
    description: "SophiaTX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sophiatx/"
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
    name: "minexcoin",
    code: "MNX",
    icon: "mnx",
    longname: "MinexCoin",
    description: "MinexCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/minexcoin/"
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
    name: "asch",
    code: "XAS",
    icon: "noicon",
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
    name: "experience-points",
    code: "XP",
    icon: "xp",
    longname: "Experience Points",
    description: "Experience Points coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/experience-points/"
    }
},{
    name: "simple-token",
    code: "OST",
    icon: "ost",
    longname: "Simple Token",
    description: "Simple Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/simple-token/"
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
    name: "credits",
    code: "CS",
    icon: "noicon",
    longname: "Credits",
    description: "Credits coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/credits/"
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
    name: "oyster",
    code: "PRL",
    icon: "prl",
    longname: "Oyster",
    description: "Oyster coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/oyster/"
    }
},{
    name: "iot-chain",
    code: "ITC",
    icon: "noicon",
    longname: "IoT Chain",
    description: "IoT Chain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/iot-chain/"
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
    name: "dew",
    code: "DEW",
    icon: "noicon",
    longname: "DEW",
    description: "DEW coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dew/"
    }
},{
    name: "telcoin",
    code: "TEL",
    icon: "noicon",
    longname: "Telcoin",
    description: "Telcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/telcoin/"
    }
},{
    name: "nuls",
    code: "NULS",
    icon: "noicon",
    longname: "Nuls",
    description: "Nuls coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nuls/"
    }
},{
    name: "bluzelle",
    code: "BLZ",
    icon: "noicon",
    longname: "Bluzelle",
    description: "Bluzelle coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bluzelle/"
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
    name: "cloakcoin",
    code: "CLOAK",
    icon: "cloak",
    longname: "CloakCoin",
    description: "CloakCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cloakcoin/"
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
    name: "poa-network",
    code: "POA",
    icon: "noicon",
    longname: "POA Network",
    description: "POA Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/poa-network/"
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
    name: "melon",
    code: "MLN",
    icon: "mln",
    longname: "Melon",
    description: "Melon coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/melon/"
    }
},{
    name: "c20",
    code: "C20",
    icon: "noicon",
    longname: "CRYPTO20",
    description: "CRYPTO20 coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/c20/"
    }
},{
    name: "quantum-resistant-ledger",
    code: "QRL",
    icon: "noicon",
    longname: "Quantum Resistant Ledger",
    description: "Quantum Resistant Ledger coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/quantum-resistant-ledger/"
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
    name: "spankchain",
    code: "SPANK",
    icon: "noicon",
    longname: "SpankChain",
    description: "SpankChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/spankchain/"
    }
},{
    name: "data",
    code: "DTA",
    icon: "noicon",
    longname: "DATA",
    description: "DATA coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/data/"
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
    name: "deepbrain-chain",
    code: "DBC",
    icon: "dbc",
    longname: "DeepBrain Chain",
    description: "DeepBrain Chain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/deepbrain-chain/"
    }
},{
    name: "ink",
    code: "INK",
    icon: "noicon",
    longname: "Ink",
    description: "Ink coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ink/"
    }
},{
    name: "eidoo",
    code: "EDO",
    icon: "noicon",
    longname: "Eidoo",
    description: "Eidoo coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/eidoo/"
    }
},{
    name: "spacechain",
    code: "SPC",
    icon: "noicon",
    longname: "SpaceChain",
    description: "SpaceChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/spacechain/"
    }
},{
    name: "ion",
    code: "ION",
    icon: "noicon",
    longname: "ION",
    description: "ION coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ion/"
    }
},{
    name: "bibox-token",
    code: "BIX",
    icon: "noicon",
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
    name: "library-credit",
    code: "LBC",
    icon: "lbc",
    longname: "LBRY Credits",
    description: "LBRY Credits coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/library-credit/"
    }
},{
    name: "sonm",
    code: "SNM",
    icon: "noicon",
    longname: "SONM",
    description: "SONM coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sonm/"
    }
},{
    name: "jibrel-network",
    code: "JNT",
    icon: "noicon",
    longname: "Jibrel Network",
    description: "Jibrel Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/jibrel-network/"
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
    name: "wings",
    code: "WINGS",
    icon: "noicon",
    longname: "Wings",
    description: "Wings coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/wings/"
    }
},{
    name: "wagerr",
    code: "WGR",
    icon: "noicon",
    longname: "Wagerr",
    description: "Wagerr coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/wagerr/"
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
    name: "salus",
    code: "SLS",
    icon: "noicon",
    longname: "SaluS",
    description: "SaluS coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/salus/"
    }
},{
    name: "agoras-tokens",
    code: "AGRS",
    icon: "noicon",
    longname: "Agoras Tokens",
    description: "Agoras Tokens coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/agoras-tokens/"
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
    name: "html-coin",
    code: "HTML",
    icon: "noicon",
    longname: "HTMLCOIN",
    description: "HTMLCOIN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/html-coin/"
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
    name: "xtrabytes",
    code: "XBY",
    icon: "noicon",
    longname: "XTRABYTES",
    description: "XTRABYTES coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/xtrabytes/"
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
    name: "airswap",
    code: "AST",
    icon: "ast",
    longname: "AirSwap",
    description: "AirSwap coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/airswap/"
    }
},{
    name: "utrust",
    code: "UTK",
    icon: "noicon",
    longname: "UTRUST",
    description: "UTRUST coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/utrust/"
    }
},{
    name: "wepower",
    code: "WPR",
    icon: "noicon",
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
    name: "streamr-datacoin",
    code: "DATA",
    icon: "data",
    longname: "Streamr DATAcoin",
    description: "Streamr DATAcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/streamr-datacoin/"
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
    name: "ins-ecosystem",
    code: "INS",
    icon: "ins",
    longname: "INS Ecosystem",
    description: "INS Ecosystem coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ins-ecosystem/"
    }
},{
    name: "aeon",
    code: "AEON",
    icon: "noicon",
    longname: "Aeon",
    description: "Aeon coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aeon/"
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
    name: "bread",
    code: "BRD",
    icon: "noicon",
    longname: "Bread",
    description: "Bread coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bread/"
    }
},{
    name: "delphy",
    code: "DPY",
    icon: "noicon",
    longname: "Delphy",
    description: "Delphy coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/delphy/"
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
    name: "cobinhood",
    code: "COB",
    icon: "noicon",
    longname: "Cobinhood",
    description: "Cobinhood coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cobinhood/"
    }
},{
    name: "mobilego",
    code: "MGO",
    icon: "noicon",
    longname: "MobileGo",
    description: "MobileGo coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mobilego/"
    }
},{
    name: "mobius",
    code: "MOBI",
    icon: "noicon",
    longname: "Mobius",
    description: "Mobius coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mobius/"
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
    name: "counterparty",
    code: "XCP",
    icon: "xcp",
    longname: "Counterparty",
    description: "Counterparty coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/counterparty/"
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
    name: "cybermiles",
    code: "CMT",
    icon: "noicon",
    longname: "CyberMiles",
    description: "CyberMiles coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cybermiles/"
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
    name: "decision-token",
    code: "HST",
    icon: "noicon",
    longname: "Decision Token",
    description: "Decision Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/decision-token/"
    }
},{
    name: "origintrail",
    code: "TRAC",
    icon: "noicon",
    longname: "OriginTrail",
    description: "OriginTrail coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/origintrail/"
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
    name: "district0x",
    code: "DNT",
    icon: "dnt",
    longname: "district0x",
    description: "district0x coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/district0x/"
    }
},{
    name: "cpchain",
    code: "CPC",
    icon: "noicon",
    longname: "CPChain",
    description: "CPChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cpchain/"
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
    name: "naga",
    code: "NGC",
    icon: "ngc",
    longname: "NAGA",
    description: "NAGA coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/naga/"
    }
},{
    name: "modum",
    code: "MOD",
    icon: "noicon",
    longname: "Modum",
    description: "Modum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/modum/"
    }
},{
    name: "adtoken",
    code: "ADT",
    icon: "noicon",
    longname: "adToken",
    description: "adToken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/adtoken/"
    }
},{
    name: "bottos",
    code: "BTO",
    icon: "noicon",
    longname: "Bottos",
    description: "Bottos coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bottos/"
    }
},{
    name: "unikoin-gold",
    code: "UKG",
    icon: "noicon",
    longname: "Unikoin Gold",
    description: "Unikoin Gold coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/unikoin-gold/"
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
    name: "trinity-network-credit",
    code: "TNC",
    icon: "tnc",
    longname: "Trinity Network Credit",
    description: "Trinity Network Credit coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/trinity-network-credit/"
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
    name: "lunyr",
    code: "LUN",
    icon: "lun",
    longname: "Lunyr",
    description: "Lunyr coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/lunyr/"
    }
},{
    name: "coindash",
    code: "CDT",
    icon: "cdt",
    longname: "CoinDash",
    description: "CoinDash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/coindash/"
    }
},{
    name: "crown",
    code: "CRW",
    icon: "noicon",
    longname: "Crown",
    description: "Crown coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/crown/"
    }
},{
    name: "centra",
    code: "CTR",
    icon: "noicon",
    longname: "Centra",
    description: "Centra coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/centra/"
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
    name: "medical-chain",
    code: "MTN",
    icon: "noicon",
    longname: "Medicalchain",
    description: "Medicalchain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/medical-chain/"
    }
},{
    name: "decent",
    code: "DCT",
    icon: "noicon",
    longname: "DECENT",
    description: "DECENT coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/decent/"
    }
},{
    name: "eccoin",
    code: "ECC",
    icon: "noicon",
    longname: "ECC",
    description: "ECC coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/eccoin/"
    }
},{
    name: "humaniq",
    code: "HMQ",
    icon: "noicon",
    longname: "Humaniq",
    description: "Humaniq coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/humaniq/"
    }
},{
    name: "cofound-it",
    code: "CFI",
    icon: "noicon",
    longname: "Cofound.it",
    description: "Cofound.it coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cofound-it/"
    }
},{
    name: "tao",
    code: "XTO",
    icon: "noicon",
    longname: "Tao",
    description: "Tao coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tao/"
    }
},{
    name: "viberate",
    code: "VIB",
    icon: "noicon",
    longname: "Viberate",
    description: "Viberate coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/viberate/"
    }
},{
    name: "flash",
    code: "FLASH",
    icon: "noicon",
    longname: "Flash",
    description: "Flash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/flash/"
    }
},{
    name: "iocoin",
    code: "IOC",
    icon: "noicon",
    longname: "I/O Coin",
    description: "I/O Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/iocoin/"
    }
},{
    name: "indahash",
    code: "IDH",
    icon: "noicon",
    longname: "indaHash",
    description: "indaHash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/indahash/"
    }
},{
    name: "shift",
    code: "SHIFT",
    icon: "noicon",
    longname: "Shift",
    description: "Shift coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/shift/"
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
    name: "attention-token-of-media",
    code: "ATM",
    icon: "atm",
    longname: "ATMChain",
    description: "ATMChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/attention-token-of-media/"
    }
},{
    name: "safe-exchange-coin",
    code: "SAFEX",
    icon: "noicon",
    longname: "Safe Exchange Coin",
    description: "Safe Exchange Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/safe-exchange-coin/"
    }
},{
    name: "colossuscoinxt",
    code: "COLX",
    icon: "noicon",
    longname: "ColossusCoinXT",
    description: "ColossusCoinXT coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/colossuscoinxt/"
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
    name: "stk",
    code: "STK",
    icon: "noicon",
    longname: "STK",
    description: "STK coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/stk/"
    }
},{
    name: "presearch",
    code: "PRE",
    icon: "noicon",
    longname: "Presearch",
    description: "Presearch coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/presearch/"
    }
},{
    name: "ucash",
    code: "UCASH",
    icon: "noicon",
    longname: "U.CASH",
    description: "U.CASH coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ucash/"
    }
},{
    name: "odyssey",
    code: "OCN",
    icon: "noicon",
    longname: "Odyssey",
    description: "Odyssey coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/odyssey/"
    }
},{
    name: "sibcoin",
    code: "SIB",
    icon: "noicon",
    longname: "SIBCoin",
    description: "SIBCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sibcoin/"
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
    name: "nimiq",
    code: "NET",
    icon: "noicon",
    longname: "Nimiq",
    description: "Nimiq coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nimiq/"
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
    name: "numeraire",
    code: "NMR",
    icon: "noicon",
    longname: "Numeraire",
    description: "Numeraire coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/numeraire/"
    }
},{
    name: "bloomtoken",
    code: "BLT",
    icon: "noicon",
    longname: "Bloom",
    description: "Bloom coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bloomtoken/"
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
    name: "steem-dollars",
    code: "SBD",
    icon: "sbd",
    longname: "Steem Dollars",
    description: "Steem Dollars coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/steem-dollars/"
    }
},{
    name: "pepe-cash",
    code: "PEPECASH",
    icon: "noicon",
    longname: "Pepe Cash",
    description: "Pepe Cash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pepe-cash/"
    }
},{
    name: "bitcny",
    code: "BITCNY",
    icon: "noicon",
    longname: "bitCNY",
    description: "bitCNY coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcny/"
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
    name: "bean-cash",
    code: "BITB",
    icon: "noicon",
    longname: "Bean Cash",
    description: "Bean Cash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bean-cash/"
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
    name: "mercury",
    code: "MER",
    icon: "noicon",
    longname: "Mercury",
    description: "Mercury coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mercury/"
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
    name: "hive-project",
    code: "HVN",
    icon: "noicon",
    longname: "Hive Project",
    description: "Hive Project coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hive-project/"
    }
},{
    name: "diamond",
    code: "DMD",
    icon: "noicon",
    longname: "Diamond",
    description: "Diamond coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/diamond/"
    }
},{
    name: "unobtanium",
    code: "UNO",
    icon: "noicon",
    longname: "Unobtanium",
    description: "Unobtanium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/unobtanium/"
    }
},{
    name: "whitecoin",
    code: "XWC",
    icon: "noicon",
    longname: "WhiteCoin",
    description: "WhiteCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/whitecoin/"
    }
},{
    name: "internet-node-token",
    code: "INT",
    icon: "noicon",
    longname: "Internet Node Token",
    description: "Internet Node Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/internet-node-token/"
    }
},{
    name: "coss",
    code: "COSS",
    icon: "noicon",
    longname: "COSS",
    description: "COSS coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/coss/"
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
    name: "cappasity",
    code: "CAPP",
    icon: "noicon",
    longname: "Cappasity",
    description: "Cappasity coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cappasity/"
    }
},{
    name: "trust",
    code: "TRST",
    icon: "noicon",
    longname: "WeTrust",
    description: "WeTrust coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/trust/"
    }
},{
    name: "deeponion",
    code: "ONION",
    icon: "noicon",
    longname: "DeepOnion",
    description: "DeepOnion coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/deeponion/"
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
    name: "synereo",
    code: "AMP",
    icon: "amp",
    longname: "Synereo",
    description: "Synereo coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/synereo/"
    }
},{
    name: "all-sports",
    code: "SOC",
    icon: "noicon",
    longname: "All Sports",
    description: "All Sports coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/all-sports/"
    }
},{
    name: "voxels",
    code: "VOX",
    icon: "noicon",
    longname: "Voxels",
    description: "Voxels coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/voxels/"
    }
},{
    name: "spectre-dividend",
    code: "SXDT",
    icon: "noicon",
    longname: "Spectre.ai Dividend Token",
    description: "Spectre.ai Dividend Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/spectre-dividend/"
    }
},{
    name: "swarm-fund",
    code: "SWM",
    icon: "noicon",
    longname: "Swarm",
    description: "Swarm coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/swarm-fund/"
    }
},{
    name: "soarcoin",
    code: "SOAR",
    icon: "noicon",
    longname: "Soarcoin",
    description: "Soarcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/soarcoin/"
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
    name: "suncontract",
    code: "SNC",
    icon: "noicon",
    longname: "SunContract",
    description: "SunContract coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/suncontract/"
    }
},{
    name: "elastic",
    code: "XEL",
    icon: "noicon",
    longname: "Elastic",
    description: "Elastic coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/elastic/"
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
    name: "dimecoin",
    code: "DIME",
    icon: "noicon",
    longname: "Dimecoin",
    description: "Dimecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dimecoin/"
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
    name: "firstblood",
    code: "1ST",
    icon: "noicon",
    longname: "FirstBlood",
    description: "FirstBlood coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/firstblood/"
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
    name: "grid",
    code: "GRID",
    icon: "noicon",
    longname: "Grid+",
    description: "Grid+ coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/grid/"
    }
},{
    name: "zeusshield",
    code: "ZSC",
    icon: "noicon",
    longname: "Zeusshield",
    description: "Zeusshield coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zeusshield/"
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
    name: "mothership",
    code: "MSP",
    icon: "noicon",
    longname: "Mothership",
    description: "Mothership coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mothership/"
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
    name: "dadi",
    code: "DADI",
    icon: "noicon",
    longname: "DADI",
    description: "DADI coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dadi/"
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
    name: "guppy",
    code: "GUP",
    icon: "gup",
    longname: "Matchpool",
    description: "Matchpool coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/guppy/"
    }
},{
    name: "everus",
    code: "EVR",
    icon: "noicon",
    longname: "Everus",
    description: "Everus coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/everus/"
    }
},{
    name: "leocoin",
    code: "LEO",
    icon: "noicon",
    longname: "LEOcoin",
    description: "LEOcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/leocoin/"
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
    name: "swftcoin",
    code: "SWFTC",
    icon: "noicon",
    longname: "SwftCoin",
    description: "SwftCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/swftcoin/"
    }
},{
    name: "zeepin",
    code: "ZPT",
    icon: "noicon",
    longname: "Zeepin",
    description: "Zeepin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zeepin/"
    }
},{
    name: "aurora-dao",
    code: "AURA",
    icon: "noicon",
    longname: "Aurora DAO",
    description: "Aurora DAO coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aurora-dao/"
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
    name: "newyorkcoin",
    code: "NYC",
    icon: "noicon",
    longname: "NewYorkCoin",
    description: "NewYorkCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/newyorkcoin/"
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
    name: "zoin",
    code: "ZOI",
    icon: "noicon",
    longname: "Zoin",
    description: "Zoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zoin/"
    }
},{
    name: "uquid-coin",
    code: "UQC",
    icon: "noicon",
    longname: "Uquid Coin",
    description: "Uquid Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/uquid-coin/"
    }
},{
    name: "qbao",
    code: "QBT",
    icon: "noicon",
    longname: "Qbao",
    description: "Qbao coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/qbao/"
    }
},{
    name: "mooncoin",
    code: "MOON",
    icon: "noicon",
    longname: "Mooncoin",
    description: "Mooncoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mooncoin/"
    }
},{
    name: "mintcoin",
    code: "MINT",
    icon: "noicon",
    longname: "Mintcoin",
    description: "Mintcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mintcoin/"
    }
},{
    name: "swissborg",
    code: "CHSB",
    icon: "noicon",
    longname: "SwissBorg",
    description: "SwissBorg coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/swissborg/"
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
    name: "selfkey",
    code: "KEY",
    icon: "noicon",
    longname: "Selfkey",
    description: "Selfkey coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/selfkey/"
    }
},{
    name: "hempcoin",
    code: "THC",
    icon: "noicon",
    longname: "HempCoin",
    description: "HempCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hempcoin/"
    }
},{
    name: "moeda-loyalty-points",
    code: "MDA",
    icon: "noicon",
    longname: "Moeda Loyalty Points",
    description: "Moeda Loyalty Points coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/moeda-loyalty-points/"
    }
},{
    name: "kickico",
    code: "KICK",
    icon: "noicon",
    longname: "KickCoin",
    description: "KickCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kickico/"
    }
},{
    name: "energo",
    code: "TSL",
    icon: "noicon",
    longname: "Energo",
    description: "Energo coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/energo/"
    }
},{
    name: "latoken",
    code: "LA",
    icon: "noicon",
    longname: "LATOKEN",
    description: "LATOKEN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/latoken/"
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
    name: "game",
    code: "GTC",
    icon: "noicon",
    longname: "Game.com",
    description: "Game.com coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/game/"
    }
},{
    name: "monetaryunit",
    code: "MUE",
    icon: "noicon",
    longname: "MonetaryUnit",
    description: "MonetaryUnit coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/monetaryunit/"
    }
},{
    name: "carvertical",
    code: "CV",
    icon: "noicon",
    longname: "carVertical",
    description: "carVertical coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/carvertical/"
    }
},{
    name: "solarcoin",
    code: "SLR",
    icon: "noicon",
    longname: "SolarCoin",
    description: "SolarCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/solarcoin/"
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
    name: "trade-token",
    code: "TIO",
    icon: "noicon",
    longname: "Trade Token",
    description: "Trade Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/trade-token/"
    }
},{
    name: "databits",
    code: "DTB",
    icon: "noicon",
    longname: "Databits",
    description: "Databits coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/databits/"
    }
},{
    name: "qunqun",
    code: "QUN",
    icon: "noicon",
    longname: "QunQun",
    description: "QunQun coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/qunqun/"
    }
},{
    name: "pascal-coin",
    code: "PASC",
    icon: "noicon",
    longname: "Pascal Coin",
    description: "Pascal Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pascal-coin/"
    }
},{
    name: "ormeus-coin",
    code: "ORME",
    icon: "noicon",
    longname: "Ormeus Coin",
    description: "Ormeus Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ormeus-coin/"
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
    name: "oax",
    code: "OAX",
    icon: "oax",
    longname: "OAX",
    description: "OAX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/oax/"
    }
},{
    name: "alqo",
    code: "ALQO",
    icon: "noicon",
    longname: "ALQO",
    description: "ALQO coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/alqo/"
    }
},{
    name: "covesting",
    code: "COV",
    icon: "noicon",
    longname: "Covesting",
    description: "Covesting coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/covesting/"
    }
},{
    name: "waves-community-token",
    code: "WCT",
    icon: "noicon",
    longname: "Waves Community Token",
    description: "Waves Community Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/waves-community-token/"
    }
},{
    name: "canyacoin",
    code: "CAN",
    icon: "noicon",
    longname: "CanYaCoin",
    description: "CanYaCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/canyacoin/"
    }
},{
    name: "earthcoin",
    code: "EAC",
    icon: "noicon",
    longname: "EarthCoin",
    description: "EarthCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/earthcoin/"
    }
},{
    name: "blackmoon",
    code: "BMC",
    icon: "noicon",
    longname: "Blackmoon",
    description: "Blackmoon coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blackmoon/"
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
    name: "olympus-labs",
    code: "MOT",
    icon: "noicon",
    longname: "Olympus Labs",
    description: "Olympus Labs coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/olympus-labs/"
    }
},{
    name: "electra",
    code: "ECA",
    icon: "noicon",
    longname: "Electra",
    description: "Electra coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/electra/"
    }
},{
    name: "bitsend",
    code: "BSD",
    icon: "noicon",
    longname: "BitSend",
    description: "BitSend coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitsend/"
    }
},{
    name: "icos",
    code: "ICOS",
    icon: "noicon",
    longname: "ICOS",
    description: "ICOS coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/icos/"
    }
},{
    name: "bitclave",
    code: "CAT",
    icon: "noicon",
    longname: "BitClave",
    description: "BitClave coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitclave/"
    }
},{
    name: "posw-coin",
    code: "POSW",
    icon: "noicon",
    longname: "PoSW Coin",
    description: "PoSW Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/posw-coin/"
    }
},{
    name: "okcash",
    code: "OK",
    icon: "noicon",
    longname: "OKCash",
    description: "OKCash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/okcash/"
    }
},{
    name: "lomocoin",
    code: "LMC",
    icon: "noicon",
    longname: "LoMoCoin",
    description: "LoMoCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/lomocoin/"
    }
},{
    name: "e-dinar-coin",
    code: "EDR",
    icon: "noicon",
    longname: "E-Dinar Coin",
    description: "E-Dinar Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/e-dinar-coin/"
    }
},{
    name: "chronobank",
    code: "TIME",
    icon: "noicon",
    longname: "Chronobank",
    description: "Chronobank coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/chronobank/"
    }
},{
    name: "propy",
    code: "PRO",
    icon: "noicon",
    longname: "Propy",
    description: "Propy coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/propy/"
    }
},{
    name: "insurepal",
    code: "IPL",
    icon: "noicon",
    longname: "InsurePal",
    description: "InsurePal coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/insurepal/"
    }
},{
    name: "shield-xsh",
    code: "XSH",
    icon: "noicon",
    longname: "SHIELD",
    description: "SHIELD coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/shield-xsh/"
    }
},{
    name: "dai",
    code: "DAI",
    icon: "noicon",
    longname: "Dai",
    description: "Dai coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dai/"
    }
},{
    name: "investfeed",
    code: "IFT",
    icon: "noicon",
    longname: "InvestFeed",
    description: "InvestFeed coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/investfeed/"
    }
},{
    name: "phore",
    code: "PHR",
    icon: "noicon",
    longname: "Phore",
    description: "Phore coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/phore/"
    }
},{
    name: "encrypgen",
    code: "DNA",
    icon: "noicon",
    longname: "EncrypGen",
    description: "EncrypGen coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/encrypgen/"
    }
},{
    name: "energycoin",
    code: "ENRG",
    icon: "noicon",
    longname: "Energycoin",
    description: "Energycoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/energycoin/"
    }
},{
    name: "auroracoin",
    code: "AUR",
    icon: "noicon",
    longname: "Auroracoin",
    description: "Auroracoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/auroracoin/"
    }
},{
    name: "bodhi",
    code: "BOT",
    icon: "noicon",
    longname: "Bodhi",
    description: "Bodhi coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bodhi/"
    }
},{
    name: "rubycoin",
    code: "RBY",
    icon: "noicon",
    longname: "Rubycoin",
    description: "Rubycoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rubycoin/"
    }
},{
    name: "universal-currency",
    code: "UNIT",
    icon: "noicon",
    longname: "Universal Currency",
    description: "Universal Currency coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/universal-currency/"
    }
},{
    name: "neumark",
    code: "NEU",
    icon: "noicon",
    longname: "Neumark",
    description: "Neumark coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/neumark/"
    }
},{
    name: "airtoken",
    code: "AIR",
    icon: "noicon",
    longname: "AirToken",
    description: "AirToken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/airtoken/"
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
    name: "swarm-city",
    code: "SWT",
    icon: "noicon",
    longname: "Swarm City",
    description: "Swarm City coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/swarm-city/"
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
    name: "bitdice",
    code: "CSNO",
    icon: "noicon",
    longname: "BitDice",
    description: "BitDice coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitdice/"
    }
},{
    name: "hacken",
    code: "HKN",
    icon: "noicon",
    longname: "Hacken",
    description: "Hacken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hacken/"
    }
},{
    name: "bitdegree",
    code: "BDG",
    icon: "noicon",
    longname: "BitDegree",
    description: "BitDegree coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitdegree/"
    }
},{
    name: "golos",
    code: "GOLOS",
    icon: "noicon",
    longname: "Golos",
    description: "Golos coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/golos/"
    }
},{
    name: "open-trading-network",
    code: "OTN",
    icon: "noicon",
    longname: "Open Trading Network",
    description: "Open Trading Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/open-trading-network/"
    }
},{
    name: "ixledger",
    code: "IXT",
    icon: "noicon",
    longname: "iXledger",
    description: "iXledger coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ixledger/"
    }
},{
    name: "snovio",
    code: "SNOV",
    icon: "noicon",
    longname: "Snovio",
    description: "Snovio coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/snovio/"
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
    name: "nexium",
    code: "NXC",
    icon: "noicon",
    longname: "Nexium",
    description: "Nexium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nexium/"
    }
},{
    name: "alis",
    code: "ALIS",
    icon: "noicon",
    longname: "ALIS",
    description: "ALIS coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/alis/"
    }
},{
    name: "incent",
    code: "INCNT",
    icon: "noicon",
    longname: "Incent",
    description: "Incent coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/incent/"
    }
},{
    name: "decent-bet",
    code: "DBET",
    icon: "noicon",
    longname: "DecentBet",
    description: "DecentBet coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/decent-bet/"
    }
},{
    name: "rivetz",
    code: "RVT",
    icon: "noicon",
    longname: "Rivetz",
    description: "Rivetz coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rivetz/"
    }
},{
    name: "toacoin",
    code: "TOA",
    icon: "noicon",
    longname: "ToaCoin",
    description: "ToaCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/toacoin/"
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
    name: "primas",
    code: "PST",
    icon: "noicon",
    longname: "Primas",
    description: "Primas coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/primas/"
    }
},{
    name: "credo",
    code: "CREDO",
    icon: "noicon",
    longname: "Credo",
    description: "Credo coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/credo/"
    }
},{
    name: "nvo",
    code: "NVST",
    icon: "noicon",
    longname: "NVO",
    description: "NVO coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nvo/"
    }
},{
    name: "espers",
    code: "ESP",
    icon: "noicon",
    longname: "Espers",
    description: "Espers coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/espers/"
    }
},{
    name: "spectrecoin",
    code: "XSPEC",
    icon: "noicon",
    longname: "Spectrecoin",
    description: "Spectrecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/spectrecoin/"
    }
},{
    name: "profile-utility-token",
    code: "PUT",
    icon: "noicon",
    longname: "Profile Utility Token",
    description: "Profile Utility Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/profile-utility-token/"
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
    name: "patientory",
    code: "PTOY",
    icon: "noicon",
    longname: "Patientory",
    description: "Patientory coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/patientory/"
    }
},{
    name: "syndicate",
    code: "SYNX",
    icon: "noicon",
    longname: "Syndicate",
    description: "Syndicate coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/syndicate/"
    }
},{
    name: "gambit",
    code: "GAM",
    icon: "noicon",
    longname: "Gambit",
    description: "Gambit coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gambit/"
    }
},{
    name: "stox",
    code: "STX",
    icon: "noicon",
    longname: "Stox",
    description: "Stox coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/stox/"
    }
},{
    name: "domraider",
    code: "DRT",
    icon: "noicon",
    longname: "DomRaider",
    description: "DomRaider coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/domraider/"
    }
},{
    name: "pareto-network",
    code: "PARETO",
    icon: "noicon",
    longname: "Pareto Network",
    description: "Pareto Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pareto-network/"
    }
},{
    name: "hackspace-capital",
    code: "HAC",
    icon: "noicon",
    longname: "Hackspace Capital",
    description: "Hackspace Capital coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hackspace-capital/"
    }
},{
    name: "divi",
    code: "DIVX",
    icon: "noicon",
    longname: "Divi",
    description: "Divi coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/divi/"
    }
},{
    name: "etheroll",
    code: "DICE",
    icon: "noicon",
    longname: "Etheroll",
    description: "Etheroll coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/etheroll/"
    }
},{
    name: "paragon",
    code: "PRG",
    icon: "noicon",
    longname: "Paragon",
    description: "Paragon coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/paragon/"
    }
},{
    name: "global-currency-reserve",
    code: "GCR",
    icon: "noicon",
    longname: "Global Currency Reserve",
    description: "Global Currency Reserve coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/global-currency-reserve/"
    }
},{
    name: "quantum",
    code: "QAU",
    icon: "noicon",
    longname: "Quantum",
    description: "Quantum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/quantum/"
    }
},{
    name: "prochain",
    code: "PRA",
    icon: "noicon",
    longname: "ProChain",
    description: "ProChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/prochain/"
    }
},{
    name: "oneroot-network",
    code: "RNT",
    icon: "noicon",
    longname: "OneRoot Network",
    description: "OneRoot Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/oneroot-network/"
    }
},{
    name: "kilocoin",
    code: "KLC",
    icon: "noicon",
    longname: "KiloCoin",
    description: "KiloCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kilocoin/"
    }
},{
    name: "neutron",
    code: "NTRN",
    icon: "noicon",
    longname: "Neutron",
    description: "Neutron coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/neutron/"
    }
},{
    name: "polybius",
    code: "PLBT",
    icon: "noicon",
    longname: "Polybius",
    description: "Polybius coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/polybius/"
    }
},{
    name: "atbcoin",
    code: "ATB",
    icon: "noicon",
    longname: "ATBCoin",
    description: "ATBCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/atbcoin/"
    }
},{
    name: "bismuth",
    code: "BIS",
    icon: "noicon",
    longname: "Bismuth",
    description: "Bismuth coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bismuth/"
    }
},{
    name: "bitusd",
    code: "BITUSD",
    icon: "noicon",
    longname: "bitUSD",
    description: "bitUSD coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitusd/"
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
    name: "prizm",
    code: "PZM",
    icon: "noicon",
    longname: "PRIZM",
    description: "PRIZM coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/prizm/"
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
    name: "oraclechain",
    code: "OCT",
    icon: "noicon",
    longname: "OracleChain",
    description: "OracleChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/oraclechain/"
    }
},{
    name: "xaurum",
    code: "XAUR",
    icon: "noicon",
    longname: "Xaurum",
    description: "Xaurum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/xaurum/"
    }
},{
    name: "axpire",
    code: "AXP",
    icon: "noicon",
    longname: "aXpire",
    description: "aXpire coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/axpire/"
    }
},{
    name: "dynamic",
    code: "DYN",
    icon: "noicon",
    longname: "Dynamic",
    description: "Dynamic coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dynamic/"
    }
},{
    name: "tiesdb",
    code: "TIE",
    icon: "noicon",
    longname: "Ties.DB",
    description: "Ties.DB coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tiesdb/"
    }
},{
    name: "luxcoin",
    code: "LUX",
    icon: "noicon",
    longname: "LUXCoin",
    description: "LUXCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/luxcoin/"
    }
},{
    name: "solaris",
    code: "XLR",
    icon: "noicon",
    longname: "Solaris",
    description: "Solaris coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/solaris/"
    }
},{
    name: "b2bx",
    code: "B2B",
    icon: "noicon",
    longname: "B2BX",
    description: "B2BX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/b2bx/"
    }
},{
    name: "fedoracoin",
    code: "TIPS",
    icon: "noicon",
    longname: "FedoraCoin",
    description: "FedoraCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fedoracoin/"
    }
},{
    name: "hydro-protocol",
    code: "HOT",
    icon: "noicon",
    longname: "Hydro Protocol",
    description: "Hydro Protocol coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hydro-protocol/"
    }
},{
    name: "russian-mining-coin",
    code: "RMC",
    icon: "noicon",
    longname: "Russian Miner Coin",
    description: "Russian Miner Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/russian-mining-coin/"
    }
},{
    name: "rialto",
    code: "XRL",
    icon: "noicon",
    longname: "Rialto",
    description: "Rialto coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rialto/"
    }
},{
    name: "mysterium",
    code: "MYST",
    icon: "noicon",
    longname: "Mysterium",
    description: "Mysterium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mysterium/"
    }
},{
    name: "dubaicoin-dbix",
    code: "DBIX",
    icon: "noicon",
    longname: "DubaiCoin",
    description: "DubaiCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dubaicoin-dbix/"
    }
},{
    name: "circuits-of-value",
    code: "COVAL",
    icon: "noicon",
    longname: "Circuits of Value",
    description: "Circuits of Value coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/circuits-of-value/"
    }
},{
    name: "pandacoin-pnd",
    code: "PND",
    icon: "noicon",
    longname: "Pandacoin",
    description: "Pandacoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pandacoin-pnd/"
    }
},{
    name: "get-protocol",
    code: "GET",
    icon: "noicon",
    longname: "GET Protocol",
    description: "GET Protocol coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/get-protocol/"
    }
},{
    name: "the-champcoin",
    code: "TCC",
    icon: "noicon",
    longname: "The ChampCoin",
    description: "The ChampCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/the-champcoin/"
    }
},{
    name: "lockchain",
    code: "LOC",
    icon: "noicon",
    longname: "LockChain",
    description: "LockChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/lockchain/"
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
    name: "e-coin",
    code: "ECN",
    icon: "noicon",
    longname: "E-coin",
    description: "E-coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/e-coin/"
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
    name: "worldcore",
    code: "WRC",
    icon: "noicon",
    longname: "Worldcore",
    description: "Worldcore coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/worldcore/"
    }
},{
    name: "starbase",
    code: "STAR",
    icon: "noicon",
    longname: "Starbase",
    description: "Starbase coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/starbase/"
    }
},{
    name: "transfercoin",
    code: "TX",
    icon: "noicon",
    longname: "TransferCoin",
    description: "TransferCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/transfercoin/"
    }
},{
    name: "coinfi",
    code: "COFI",
    icon: "noicon",
    longname: "CoinFi",
    description: "CoinFi coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/coinfi/"
    }
},{
    name: "hubii-network",
    code: "HBT",
    icon: "noicon",
    longname: "Hubii Network",
    description: "Hubii Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hubii-network/"
    }
},{
    name: "cargox",
    code: "CXO",
    icon: "noicon",
    longname: "CargoX",
    description: "CargoX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cargox/"
    }
},{
    name: "curecoin",
    code: "CURE",
    icon: "noicon",
    longname: "Curecoin",
    description: "Curecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/curecoin/"
    }
},{
    name: "boolberry",
    code: "BBR",
    icon: "noicon",
    longname: "Boolberry",
    description: "Boolberry coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/boolberry/"
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
    name: "ethorse",
    code: "HORSE",
    icon: "noicon",
    longname: "Ethorse",
    description: "Ethorse coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ethorse/"
    }
},{
    name: "sportyco",
    code: "SPF",
    icon: "noicon",
    longname: "SportyCo",
    description: "SportyCo coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sportyco/"
    }
},{
    name: "coinmeet",
    code: "MEE",
    icon: "noicon",
    longname: "CoinMeet",
    description: "CoinMeet coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/coinmeet/"
    }
},{
    name: "leverj",
    code: "LEV",
    icon: "noicon",
    longname: "Leverj",
    description: "Leverj coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/leverj/"
    }
},{
    name: "voisecom",
    code: "VOISE",
    icon: "noicon",
    longname: "Voise",
    description: "Voise coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/voisecom/"
    }
},{
    name: "blockcat",
    code: "CAT",
    icon: "noicon",
    longname: "BlockCAT",
    description: "BlockCAT coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blockcat/"
    }
},{
    name: "polis",
    code: "POLIS",
    icon: "noicon",
    longname: "Polis",
    description: "Polis coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/polis/"
    }
},{
    name: "aventus",
    code: "AVT",
    icon: "noicon",
    longname: "Aventus",
    description: "Aventus coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aventus/"
    }
},{
    name: "pluton",
    code: "PLU",
    icon: "noicon",
    longname: "Pluton",
    description: "Pluton coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pluton/"
    }
},{
    name: "dcorp",
    code: "DRP",
    icon: "noicon",
    longname: "DCORP",
    description: "DCORP coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dcorp/"
    }
},{
    name: "autonio",
    code: "NIO",
    icon: "noicon",
    longname: "Autonio",
    description: "Autonio coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/autonio/"
    }
},{
    name: "rebellious",
    code: "REBL",
    icon: "noicon",
    longname: "Rebellious",
    description: "Rebellious coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rebellious/"
    }
},{
    name: "stealthcoin",
    code: "XST",
    icon: "noicon",
    longname: "Stealthcoin",
    description: "Stealthcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/stealthcoin/"
    }
},{
    name: "karma",
    code: "KRM",
    icon: "noicon",
    longname: "Karma",
    description: "Karma coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/karma/"
    }
},{
    name: "mybit-token",
    code: "MYB",
    icon: "noicon",
    longname: "MyBit Token",
    description: "MyBit Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mybit-token/"
    }
},{
    name: "bezop",
    code: "BEZ",
    icon: "noicon",
    longname: "Bezop",
    description: "Bezop coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bezop/"
    }
},{
    name: "bitcrystals",
    code: "BCY",
    icon: "noicon",
    longname: "Bitcrystals",
    description: "Bitcrystals coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcrystals/"
    }
},{
    name: "sphere",
    code: "SPHR",
    icon: "noicon",
    longname: "Sphere",
    description: "Sphere coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sphere/"
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
    name: "ethereum-blue",
    code: "BLUE",
    icon: "noicon",
    longname: "BLUE",
    description: "BLUE coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ethereum-blue/"
    }
},{
    name: "linda",
    code: "LINDA",
    icon: "noicon",
    longname: "Linda",
    description: "Linda coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/linda/"
    }
},{
    name: "cvcoin",
    code: "CVCOIN",
    icon: "noicon",
    longname: "CVCoin",
    description: "CVCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cvcoin/"
    }
},{
    name: "novacoin",
    code: "NVC",
    icon: "noicon",
    longname: "Novacoin",
    description: "Novacoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/novacoin/"
    }
},{
    name: "measurable-data-token",
    code: "MDT",
    icon: "noicon",
    longname: "Measurable Data Token",
    description: "Measurable Data Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/measurable-data-token/"
    }
},{
    name: "devery",
    code: "EVE",
    icon: "noicon",
    longname: "Devery",
    description: "Devery coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/devery/"
    }
},{
    name: "oxycoin",
    code: "OXY",
    icon: "noicon",
    longname: "Oxycoin",
    description: "Oxycoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/oxycoin/"
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
    name: "sequence",
    code: "SEQ",
    icon: "noicon",
    longname: "Sequence",
    description: "Sequence coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sequence/"
    }
},{
    name: "korecoin",
    code: "KORE",
    icon: "noicon",
    longname: "Kore",
    description: "Kore coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/korecoin/"
    }
},{
    name: "spectre-utility",
    code: "SXUT",
    icon: "noicon",
    longname: "Spectre.ai Utility Token",
    description: "Spectre.ai Utility Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/spectre-utility/"
    }
},{
    name: "locicoin",
    code: "LOCI",
    icon: "noicon",
    longname: "LOCIcoin",
    description: "LOCIcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/locicoin/"
    }
},{
    name: "payfair",
    code: "PFR",
    icon: "noicon",
    longname: "Payfair",
    description: "Payfair coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/payfair/"
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
    name: "atmos",
    code: "ATMS",
    icon: "noicon",
    longname: "Atmos",
    description: "Atmos coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/atmos/"
    }
},{
    name: "flixxo",
    code: "FLIXX",
    icon: "noicon",
    longname: "Flixxo",
    description: "Flixxo coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/flixxo/"
    }
},{
    name: "ebtcnew",
    code: "EBTC",
    icon: "noicon",
    longname: "eBitcoin",
    description: "eBitcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ebtcnew/"
    }
},{
    name: "playkey",
    code: "PKT",
    icon: "noicon",
    longname: "Playkey",
    description: "Playkey coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/playkey/"
    }
},{
    name: "chips",
    code: "CHIPS",
    icon: "noicon",
    longname: "CHIPS",
    description: "CHIPS coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/chips/"
    }
},{
    name: "artbyte",
    code: "ABY",
    icon: "noicon",
    longname: "ArtByte",
    description: "ArtByte coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/artbyte/"
    }
},{
    name: "hellogold",
    code: "HGT",
    icon: "noicon",
    longname: "HelloGold",
    description: "HelloGold coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hellogold/"
    }
},{
    name: "heat-ledger",
    code: "HEAT",
    icon: "noicon",
    longname: "HEAT",
    description: "HEAT coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/heat-ledger/"
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
    name: "aidcoin",
    code: "AID",
    icon: "noicon",
    longname: "AidCoin",
    description: "AidCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aidcoin/"
    }
},{
    name: "block-array",
    code: "ARY",
    icon: "noicon",
    longname: "Block Array",
    description: "Block Array coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/block-array/"
    }
},{
    name: "aichain",
    code: "AIT",
    icon: "noicon",
    longname: "AICHAIN",
    description: "AICHAIN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aichain/"
    }
},{
    name: "apx",
    code: "APX",
    icon: "noicon",
    longname: "APX",
    description: "APX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/apx/"
    }
},{
    name: "obits",
    code: "OBITS",
    icon: "noicon",
    longname: "OBITS",
    description: "OBITS coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/obits/"
    }
},{
    name: "clearpoll",
    code: "POLL",
    icon: "noicon",
    longname: "ClearPoll",
    description: "ClearPoll coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/clearpoll/"
    }
},{
    name: "hyperstake",
    code: "HYP",
    icon: "noicon",
    longname: "HyperStake",
    description: "HyperStake coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hyperstake/"
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
    name: "eroscoin",
    code: "ERO",
    icon: "noicon",
    longname: "Eroscoin",
    description: "Eroscoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/eroscoin/"
    }
},{
    name: "breakout-stake",
    code: "BRX",
    icon: "noicon",
    longname: "Breakout Stake",
    description: "Breakout Stake coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/breakout-stake/"
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
    name: "zilla",
    code: "ZLA",
    icon: "noicon",
    longname: "Zilla",
    description: "Zilla coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zilla/"
    }
},{
    name: "change",
    code: "CAG",
    icon: "noicon",
    longname: "Change",
    description: "Change coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/change/"
    }
},{
    name: "herocoin",
    code: "PLAY",
    icon: "noicon",
    longname: "HEROcoin",
    description: "HEROcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/herocoin/"
    }
},{
    name: "vtorrent",
    code: "VTR",
    icon: "noicon",
    longname: "vTorrent",
    description: "vTorrent coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vtorrent/"
    }
},{
    name: "dao-casino",
    code: "BET",
    icon: "noicon",
    longname: "DAO.Casino",
    description: "DAO.Casino coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dao-casino/"
    }
},{
    name: "luckchain",
    code: "BASH",
    icon: "noicon",
    longname: "LuckChain",
    description: "LuckChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/luckchain/"
    }
},{
    name: "nubits",
    code: "USNBT",
    icon: "noicon",
    longname: "NuBits",
    description: "NuBits coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nubits/"
    }
},{
    name: "dopecoin",
    code: "DOPE",
    icon: "noicon",
    longname: "DopeCoin",
    description: "DopeCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dopecoin/"
    }
},{
    name: "memetic",
    code: "MEME",
    icon: "noicon",
    longname: "Memetic / PepeCoin",
    description: "Memetic / PepeCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/memetic/"
    }
},{
    name: "zeitcoin",
    code: "ZEIT",
    icon: "noicon",
    longname: "Zeitcoin",
    description: "Zeitcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zeitcoin/"
    }
},{
    name: "gatcoin",
    code: "GAT",
    icon: "noicon",
    longname: "Gatcoin",
    description: "Gatcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gatcoin/"
    }
},{
    name: "europecoin",
    code: "ERC",
    icon: "noicon",
    longname: "EuropeCoin",
    description: "EuropeCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/europecoin/"
    }
},{
    name: "qwark",
    code: "QWARK",
    icon: "noicon",
    longname: "Qwark",
    description: "Qwark coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/qwark/"
    }
},{
    name: "denarius-dnr",
    code: "DNR",
    icon: "noicon",
    longname: "Denarius",
    description: "Denarius coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/denarius-dnr/"
    }
},{
    name: "echolink",
    code: "EKO",
    icon: "noicon",
    longname: "EchoLink",
    description: "EchoLink coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/echolink/"
    }
},{
    name: "synergy",
    code: "SNRG",
    icon: "noicon",
    longname: "Synergy",
    description: "Synergy coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/synergy/"
    }
},{
    name: "pesetacoin",
    code: "PTC",
    icon: "noicon",
    longname: "Pesetacoin",
    description: "Pesetacoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pesetacoin/"
    }
},{
    name: "lampix",
    code: "PIX",
    icon: "noicon",
    longname: "Lampix",
    description: "Lampix coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/lampix/"
    }
},{
    name: "sureremit",
    code: "RMT",
    icon: "noicon",
    longname: "SureRemit",
    description: "SureRemit coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sureremit/"
    }
},{
    name: "veriumreserve",
    code: "VRM",
    icon: "noicon",
    longname: "VeriumReserve",
    description: "VeriumReserve coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/veriumreserve/"
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
    name: "blockpool",
    code: "BPL",
    icon: "noicon",
    longname: "Blockpool",
    description: "Blockpool coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blockpool/"
    }
},{
    name: "aigang",
    code: "AIX",
    icon: "noicon",
    longname: "Aigang",
    description: "Aigang coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aigang/"
    }
},{
    name: "1337coin",
    code: "1337",
    icon: "noicon",
    longname: "Elite",
    description: "Elite coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/1337coin/"
    }
},{
    name: "sumokoin",
    code: "SUMO",
    icon: "noicon",
    longname: "Sumokoin",
    description: "Sumokoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sumokoin/"
    }
},{
    name: "bunnycoin",
    code: "BUN",
    icon: "noicon",
    longname: "BunnyCoin",
    description: "BunnyCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bunnycoin/"
    }
},{
    name: "real",
    code: "REAL",
    icon: "noicon",
    longname: "REAL",
    description: "REAL coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/real/"
    }
},{
    name: "travelflex",
    code: "TRF",
    icon: "noicon",
    longname: "Travelflex",
    description: "Travelflex coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/travelflex/"
    }
},{
    name: "goldcoin",
    code: "GLD",
    icon: "noicon",
    longname: "GoldCoin",
    description: "GoldCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/goldcoin/"
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
    name: "uniform-fiscal-object",
    code: "UFO",
    icon: "noicon",
    longname: "Uniform Fiscal Object",
    description: "Uniform Fiscal Object coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/uniform-fiscal-object/"
    }
},{
    name: "russiacoin",
    code: "RC",
    icon: "noicon",
    longname: "RussiaCoin",
    description: "RussiaCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/russiacoin/"
    }
},{
    name: "dotcoin",
    code: "DOT",
    icon: "noicon",
    longname: "Dotcoin",
    description: "Dotcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dotcoin/"
    }
},{
    name: "dovu",
    code: "DOVU",
    icon: "noicon",
    longname: "Dovu",
    description: "Dovu coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dovu/"
    }
},{
    name: "viuly",
    code: "VIU",
    icon: "noicon",
    longname: "Viuly",
    description: "Viuly coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/viuly/"
    }
},{
    name: "trueflip",
    code: "TFL",
    icon: "noicon",
    longname: "TrueFlip",
    description: "TrueFlip coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/trueflip/"
    }
},{
    name: "adbank",
    code: "ADB",
    icon: "noicon",
    longname: "adbank",
    description: "adbank coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/adbank/"
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
    name: "monkey-project",
    code: "MONK",
    icon: "noicon",
    longname: "Monkey Project",
    description: "Monkey Project coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/monkey-project/"
    }
},{
    name: "iungo",
    code: "ING",
    icon: "noicon",
    longname: "Iungo",
    description: "Iungo coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/iungo/"
    }
},{
    name: "cryptopay",
    code: "CPAY",
    icon: "noicon",
    longname: "Cryptopay",
    description: "Cryptopay coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cryptopay/"
    }
},{
    name: "zrcoin",
    code: "ZRC",
    icon: "noicon",
    longname: "ZrCoin",
    description: "ZrCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zrcoin/"
    }
},{
    name: "exclusivecoin",
    code: "EXCL",
    icon: "noicon",
    longname: "ExclusiveCoin",
    description: "ExclusiveCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/exclusivecoin/"
    }
},{
    name: "publica",
    code: "PBL",
    icon: "noicon",
    longname: "Publica",
    description: "Publica coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/publica/"
    }
},{
    name: "internxt",
    code: "INXT",
    icon: "noicon",
    longname: "Internxt",
    description: "Internxt coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/internxt/"
    }
},{
    name: "creditbit",
    code: "CRB",
    icon: "noicon",
    longname: "Creditbit",
    description: "Creditbit coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/creditbit/"
    }
},{
    name: "breakout",
    code: "BRK",
    icon: "noicon",
    longname: "Breakout",
    description: "Breakout coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/breakout/"
    }
},{
    name: "2give",
    code: "2GIVE",
    icon: "noicon",
    longname: "2GIVE",
    description: "2GIVE coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/2give/"
    }
},{
    name: "starta",
    code: "STA",
    icon: "noicon",
    longname: "Starta",
    description: "Starta coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/starta/"
    }
},{
    name: "flik",
    code: "FLIK",
    icon: "noicon",
    longname: "FLiK",
    description: "FLiK coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/flik/"
    }
},{
    name: "opus",
    code: "OPT",
    icon: "noicon",
    longname: "Opus",
    description: "Opus coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/opus/"
    }
},{
    name: "blitzcash",
    code: "BLITZ",
    icon: "noicon",
    longname: "Blitzcash",
    description: "Blitzcash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blitzcash/"
    }
},{
    name: "mercury-protocol",
    code: "GMT",
    icon: "noicon",
    longname: "Mercury Protocol",
    description: "Mercury Protocol coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mercury-protocol/"
    }
},{
    name: "mywish",
    code: "WISH",
    icon: "noicon",
    longname: "MyWish",
    description: "MyWish coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mywish/"
    }
},{
    name: "buzzcoin",
    code: "BUZZ",
    icon: "noicon",
    longname: "BuzzCoin",
    description: "BuzzCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/buzzcoin/"
    }
},{
    name: "sociall",
    code: "SCL",
    icon: "noicon",
    longname: "Sociall",
    description: "Sociall coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sociall/"
    }
},{
    name: "farad",
    code: "FRD",
    icon: "noicon",
    longname: "Farad",
    description: "Farad coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/farad/"
    }
},{
    name: "bonpay",
    code: "BON",
    icon: "noicon",
    longname: "Bonpay",
    description: "Bonpay coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bonpay/"
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
    name: "monacocoin",
    code: "XMCC",
    icon: "noicon",
    longname: "Monoeci",
    description: "Monoeci coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/monacocoin/"
    }
},{
    name: "tokes",
    code: "TKS",
    icon: "noicon",
    longname: "Tokes",
    description: "Tokes coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tokes/"
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
    name: "gcn-coin",
    code: "GCN",
    icon: "noicon",
    longname: "GCN Coin",
    description: "GCN Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gcn-coin/"
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
    name: "adshares",
    code: "ADST",
    icon: "noicon",
    longname: "AdShares",
    description: "AdShares coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/adshares/"
    }
},{
    name: "digipulse",
    code: "DGPT",
    icon: "noicon",
    longname: "DigiPulse",
    description: "DigiPulse coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/digipulse/"
    }
},{
    name: "primalbase",
    code: "PBT",
    icon: "noicon",
    longname: "Primalbase Token",
    description: "Primalbase Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/primalbase/"
    }
},{
    name: "sharechain",
    code: "SSS",
    icon: "noicon",
    longname: "Sharechain",
    description: "Sharechain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sharechain/"
    }
},{
    name: "global-jobcoin",
    code: "GJC",
    icon: "noicon",
    longname: "Global Jobcoin",
    description: "Global Jobcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/global-jobcoin/"
    }
},{
    name: "altcoin-alt",
    code: "ALT",
    icon: "noicon",
    longname: "Altcoin",
    description: "Altcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/altcoin-alt/"
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
    name: "trustplus",
    code: "TRUST",
    icon: "noicon",
    longname: "TrustPlus",
    description: "TrustPlus coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/trustplus/"
    }
},{
    name: "dnotes",
    code: "NOTE",
    icon: "noicon",
    longname: "DNotes",
    description: "DNotes coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dnotes/"
    }
},{
    name: "cannabiscoin",
    code: "CANN",
    icon: "noicon",
    longname: "CannabisCoin",
    description: "CannabisCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cannabiscoin/"
    }
},{
    name: "bitcloud",
    code: "BTDX",
    icon: "noicon",
    longname: "Bitcloud",
    description: "Bitcloud coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcloud/"
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
    name: "teslacoin",
    code: "TES",
    icon: "noicon",
    longname: "TeslaCoin",
    description: "TeslaCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/teslacoin/"
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
    name: "masternodecoin",
    code: "MTNC",
    icon: "noicon",
    longname: "Masternodecoin",
    description: "Masternodecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/masternodecoin/"
    }
},{
    name: "project-decorum",
    code: "PDC",
    icon: "noicon",
    longname: "Project Decorum",
    description: "Project Decorum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/project-decorum/"
    }
},{
    name: "audiocoin",
    code: "ADC",
    icon: "noicon",
    longname: "AudioCoin",
    description: "AudioCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/audiocoin/"
    }
},{
    name: "hawala-today",
    code: "HAT",
    icon: "noicon",
    longname: "Hawala.Today",
    description: "Hawala.Today coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hawala-today/"
    }
},{
    name: "quark",
    code: "QRK",
    icon: "noicon",
    longname: "Quark",
    description: "Quark coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/quark/"
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
    name: "sprouts",
    code: "SPRTS",
    icon: "noicon",
    longname: "Sprouts",
    description: "Sprouts coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sprouts/"
    }
},{
    name: "zero",
    code: "ZER",
    icon: "noicon",
    longname: "Zero",
    description: "Zero coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zero/"
    }
},{
    name: "atlant",
    code: "ATL",
    icon: "noicon",
    longname: "ATLANT",
    description: "ATLANT coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/atlant/"
    }
},{
    name: "bulwark",
    code: "BWK",
    icon: "noicon",
    longname: "Bulwark",
    description: "Bulwark coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bulwark/"
    }
},{
    name: "vslice",
    code: "VSL",
    icon: "noicon",
    longname: "vSlice",
    description: "vSlice coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vslice/"
    }
},{
    name: "greencoin",
    code: "GRE",
    icon: "noicon",
    longname: "Greencoin",
    description: "Greencoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/greencoin/"
    }
},{
    name: "upfiring",
    code: "UFR",
    icon: "noicon",
    longname: "Upfiring",
    description: "Upfiring coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/upfiring/"
    }
},{
    name: "social-send",
    code: "SEND",
    icon: "noicon",
    longname: "Social Send",
    description: "Social Send coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/social-send/"
    }
},{
    name: "bitswift",
    code: "SWIFT",
    icon: "noicon",
    longname: "Bitswift",
    description: "Bitswift coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitswift/"
    }
},{
    name: "life",
    code: "LIFE",
    icon: "noicon",
    longname: "LIFE",
    description: "LIFE coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/life/"
    }
},{
    name: "evergreencoin",
    code: "EGC",
    icon: "noicon",
    longname: "EverGreenCoin",
    description: "EverGreenCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/evergreencoin/"
    }
},{
    name: "tracto",
    code: "TRCT",
    icon: "noicon",
    longname: "Tracto",
    description: "Tracto coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tracto/"
    }
},{
    name: "putincoin",
    code: "PUT",
    icon: "noicon",
    longname: "PutinCoin",
    description: "PutinCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/putincoin/"
    }
},{
    name: "wild-crypto",
    code: "WILD",
    icon: "noicon",
    longname: "Wild Crypto",
    description: "Wild Crypto coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/wild-crypto/"
    }
},{
    name: "ixcoin",
    code: "IXC",
    icon: "noicon",
    longname: "Ixcoin",
    description: "Ixcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ixcoin/"
    }
},{
    name: "creativecoin",
    code: "CREA",
    icon: "noicon",
    longname: "Creativecoin",
    description: "Creativecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/creativecoin/"
    }
},{
    name: "smartlands",
    code: "SLT",
    icon: "noicon",
    longname: "Smartlands",
    description: "Smartlands coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/smartlands/"
    }
},{
    name: "spreadcoin",
    code: "SPR",
    icon: "noicon",
    longname: "SpreadCoin",
    description: "SpreadCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/spreadcoin/"
    }
},{
    name: "mazacoin",
    code: "MZC",
    icon: "noicon",
    longname: "MAZA",
    description: "MAZA coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mazacoin/"
    }
},{
    name: "yocoin",
    code: "YOC",
    icon: "noicon",
    longname: "Yocoin",
    description: "Yocoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/yocoin/"
    }
},{
    name: "chaincoin",
    code: "CHC",
    icon: "noicon",
    longname: "ChainCoin",
    description: "ChainCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/chaincoin/"
    }
},{
    name: "goldmint",
    code: "MNTP",
    icon: "noicon",
    longname: "GoldMint",
    description: "GoldMint coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/goldmint/"
    }
},{
    name: "vsync-vsx",
    code: "VSX",
    icon: "noicon",
    longname: "Vsync",
    description: "Vsync coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vsync-vsx/"
    }
},{
    name: "nushares",
    code: "NSR",
    icon: "noicon",
    longname: "NuShares",
    description: "NuShares coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nushares/"
    }
},{
    name: "hollywoodcoin",
    code: "HWC",
    icon: "noicon",
    longname: "HollyWoodCoin",
    description: "HollyWoodCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hollywoodcoin/"
    }
},{
    name: "sexcoin",
    code: "SXC",
    icon: "noicon",
    longname: "Sexcoin",
    description: "Sexcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sexcoin/"
    }
},{
    name: "ergo",
    code: "EFYT",
    icon: "noicon",
    longname: "Ergo",
    description: "Ergo coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ergo/"
    }
},{
    name: "obsidian",
    code: "ODN",
    icon: "noicon",
    longname: "Obsidian",
    description: "Obsidian coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/obsidian/"
    }
},{
    name: "e-gulden",
    code: "EFL",
    icon: "noicon",
    longname: "e-Gulden",
    description: "e-Gulden coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/e-gulden/"
    }
},{
    name: "xgox",
    code: "XGOX",
    icon: "noicon",
    longname: "XGOX",
    description: "XGOX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/xgox/"
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
    name: "draftcoin",
    code: "DFT",
    icon: "noicon",
    longname: "DraftCoin",
    description: "DraftCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/draftcoin/"
    }
},{
    name: "parkbyte",
    code: "PKB",
    icon: "noicon",
    longname: "ParkByte",
    description: "ParkByte coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/parkbyte/"
    }
},{
    name: "bluecoin",
    code: "BLU",
    icon: "noicon",
    longname: "BlueCoin",
    description: "BlueCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bluecoin/"
    }
},{
    name: "flypme",
    code: "FYP",
    icon: "noicon",
    longname: "FlypMe",
    description: "FlypMe coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/flypme/"
    }
},{
    name: "martexcoin",
    code: "MXT",
    icon: "noicon",
    longname: "MarteXcoin",
    description: "MarteXcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/martexcoin/"
    }
},{
    name: "terracoin",
    code: "TRC",
    icon: "noicon",
    longname: "Terracoin",
    description: "Terracoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/terracoin/"
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
    name: "coinlancer",
    code: "CL",
    icon: "noicon",
    longname: "Coinlancer",
    description: "Coinlancer coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/coinlancer/"
    }
},{
    name: "qvolta",
    code: "QVT",
    icon: "noicon",
    longname: "Qvolta",
    description: "Qvolta coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/qvolta/"
    }
},{
    name: "indorse-token",
    code: "IND",
    icon: "noicon",
    longname: "Indorse Token",
    description: "Indorse Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/indorse-token/"
    }
},{
    name: "darcrus",
    code: "DAR",
    icon: "noicon",
    longname: "Darcrus",
    description: "Darcrus coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/darcrus/"
    }
},{
    name: "regalcoin",
    code: "REC",
    icon: "noicon",
    longname: "Regalcoin",
    description: "Regalcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/regalcoin/"
    }
},{
    name: "goodomy",
    code: "GOOD",
    icon: "noicon",
    longname: "Goodomy",
    description: "Goodomy coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/goodomy/"
    }
},{
    name: "rupee",
    code: "RUP",
    icon: "noicon",
    longname: "Rupee",
    description: "Rupee coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rupee/"
    }
},{
    name: "zephyr",
    code: "ZEPH",
    icon: "noicon",
    longname: "Zephyr",
    description: "Zephyr coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zephyr/"
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
    name: "micromoney",
    code: "AMM",
    icon: "noicon",
    longname: "MicroMoney",
    description: "MicroMoney coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/micromoney/"
    }
},{
    name: "intensecoin",
    code: "ITNS",
    icon: "noicon",
    longname: "IntenseCoin",
    description: "IntenseCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/intensecoin/"
    }
},{
    name: "giga-watt-token",
    code: "WTT",
    icon: "noicon",
    longname: "Giga Watt Token",
    description: "Giga Watt Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/giga-watt-token/"
    }
},{
    name: "bitzeny",
    code: "ZNY",
    icon: "noicon",
    longname: "Bitzeny",
    description: "Bitzeny coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitzeny/"
    }
},{
    name: "linx",
    code: "LINX",
    icon: "noicon",
    longname: "Linx",
    description: "Linx coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/linx/"
    }
},{
    name: "jesus-coin",
    code: "JC",
    icon: "noicon",
    longname: "Jesus Coin",
    description: "Jesus Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/jesus-coin/"
    }
},{
    name: "student-coin",
    code: "STU",
    icon: "noicon",
    longname: "bitJob",
    description: "bitJob coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/student-coin/"
    }
},{
    name: "ganjacoin",
    code: "MRJA",
    icon: "noicon",
    longname: "GanjaCoin",
    description: "GanjaCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ganjacoin/"
    }
},{
    name: "speed-mining-service",
    code: "SMS",
    icon: "noicon",
    longname: "Speed Mining Service",
    description: "Speed Mining Service coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/speed-mining-service/"
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
    name: "campuscoin",
    code: "CMPCO",
    icon: "noicon",
    longname: "CampusCoin",
    description: "CampusCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/campuscoin/"
    }
},{
    name: "straks",
    code: "STAK",
    icon: "noicon",
    longname: "STRAKS",
    description: "STRAKS coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/straks/"
    }
},{
    name: "inflationcoin",
    code: "IFLT",
    icon: "noicon",
    longname: "InflationCoin",
    description: "InflationCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/inflationcoin/"
    }
},{
    name: "ongsocial",
    code: "ONG",
    icon: "noicon",
    longname: "onG.social",
    description: "onG.social coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ongsocial/"
    }
},{
    name: "innova",
    code: "INN",
    icon: "noicon",
    longname: "Innova",
    description: "Innova coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/innova/"
    }
},{
    name: "oceanlab",
    code: "OCL",
    icon: "noicon",
    longname: "Oceanlab",
    description: "Oceanlab coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/oceanlab/"
    }
},{
    name: "magnet",
    code: "MAG",
    icon: "noicon",
    longname: "Magnet",
    description: "Magnet coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/magnet/"
    }
},{
    name: "hexx",
    code: "HXX",
    icon: "noicon",
    longname: "Hexx",
    description: "Hexx coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hexx/"
    }
},{
    name: "procurrency",
    code: "PROC",
    icon: "noicon",
    longname: "ProCurrency",
    description: "ProCurrency coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/procurrency/"
    }
},{
    name: "piplcoin",
    code: "PIPL",
    icon: "noicon",
    longname: "PiplCoin",
    description: "PiplCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/piplcoin/"
    }
},{
    name: "condensate",
    code: "RAIN",
    icon: "noicon",
    longname: "Condensate",
    description: "Condensate coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/condensate/"
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
    name: "force",
    code: "FOR",
    icon: "noicon",
    longname: "FORCE",
    description: "FORCE coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/force/"
    }
},{
    name: "interstellar-holdings",
    code: "HOLD",
    icon: "noicon",
    longname: "Interstellar Holdings",
    description: "Interstellar Holdings coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/interstellar-holdings/"
    }
},{
    name: "starcredits",
    code: "STRC",
    icon: "noicon",
    longname: "StarCredits",
    description: "StarCredits coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/starcredits/"
    }
},{
    name: "incakoin",
    code: "NKA",
    icon: "noicon",
    longname: "IncaKoin",
    description: "IncaKoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/incakoin/"
    }
},{
    name: "litedoge",
    code: "LDOGE",
    icon: "noicon",
    longname: "LiteDoge",
    description: "LiteDoge coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/litedoge/"
    }
},{
    name: "lendconnect",
    code: "LCT",
    icon: "noicon",
    longname: "LendConnect",
    description: "LendConnect coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/lendconnect/"
    }
},{
    name: "fundyourselfnow",
    code: "FYN",
    icon: "noicon",
    longname: "FundYourselfNow",
    description: "FundYourselfNow coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fundyourselfnow/"
    }
},{
    name: "digitalprice",
    code: "DP",
    icon: "noicon",
    longname: "DigitalPrice",
    description: "DigitalPrice coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/digitalprice/"
    }
},{
    name: "miners-reward-token",
    code: "MRT",
    icon: "noicon",
    longname: "Miners' Reward Token",
    description: "Miners' Reward Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/miners-reward-token/"
    }
},{
    name: "pylon-network",
    code: "PYLNT",
    icon: "noicon",
    longname: "Pylon Network",
    description: "Pylon Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pylon-network/"
    }
},{
    name: "equitrader",
    code: "EQT",
    icon: "noicon",
    longname: "EquiTrader",
    description: "EquiTrader coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/equitrader/"
    }
},{
    name: "embers",
    code: "MBRS",
    icon: "noicon",
    longname: "Embers",
    description: "Embers coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/embers/"
    }
},{
    name: "thegcccoin",
    code: "GCC",
    icon: "noicon",
    longname: "TheGCCcoin",
    description: "TheGCCcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/thegcccoin/"
    }
},{
    name: "adzcoin",
    code: "ADZ",
    icon: "noicon",
    longname: "Adzcoin",
    description: "Adzcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/adzcoin/"
    }
},{
    name: "smileycoin",
    code: "SMLY",
    icon: "noicon",
    longname: "SmileyCoin",
    description: "SmileyCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/smileycoin/"
    }
},{
    name: "op-coin",
    code: "OPC",
    icon: "noicon",
    longname: "OP Coin",
    description: "OP Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/op-coin/"
    }
},{
    name: "unbreakablecoin",
    code: "UNB",
    icon: "noicon",
    longname: "UnbreakableCoin",
    description: "UnbreakableCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/unbreakablecoin/"
    }
},{
    name: "magiccoin",
    code: "MAGE",
    icon: "noicon",
    longname: "MagicCoin",
    description: "MagicCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/magiccoin/"
    }
},{
    name: "pure",
    code: "PURE",
    icon: "noicon",
    longname: "Pure",
    description: "Pure coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pure/"
    }
},{
    name: "cryptoping",
    code: "PING",
    icon: "noicon",
    longname: "CryptoPing",
    description: "CryptoPing coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cryptoping/"
    }
},{
    name: "unity-ingot",
    code: "UNY",
    icon: "noicon",
    longname: "Unity Ingot",
    description: "Unity Ingot coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/unity-ingot/"
    }
},{
    name: "poly-ai",
    code: "AI",
    icon: "noicon",
    longname: "POLY AI",
    description: "POLY AI coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/poly-ai/"
    }
},{
    name: "bittokens",
    code: "BXT",
    icon: "noicon",
    longname: "BitTokens",
    description: "BitTokens coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bittokens/"
    }
},{
    name: "accelerator-network",
    code: "ACC",
    icon: "noicon",
    longname: "Accelerator Network",
    description: "Accelerator Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/accelerator-network/"
    }
},{
    name: "bytecent",
    code: "BYC",
    icon: "noicon",
    longname: "Bytecent",
    description: "Bytecent coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bytecent/"
    }
},{
    name: "chronologic",
    code: "DAY",
    icon: "noicon",
    longname: "Chronologic",
    description: "Chronologic coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/chronologic/"
    }
},{
    name: "42-coin",
    code: "42",
    icon: "noicon",
    longname: "42-coin",
    description: "42-coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/42-coin/"
    }
},{
    name: "skincoin",
    code: "SKIN",
    icon: "noicon",
    longname: "SkinCoin",
    description: "SkinCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/skincoin/"
    }
},{
    name: "photon",
    code: "PHO",
    icon: "noicon",
    longname: "Photon",
    description: "Photon coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/photon/"
    }
},{
    name: "pluscoin",
    code: "PLC",
    icon: "noicon",
    longname: "PlusCoin",
    description: "PlusCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pluscoin/"
    }
},{
    name: "footy-cash",
    code: "XFT",
    icon: "noicon",
    longname: "Footy Cash",
    description: "Footy Cash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/footy-cash/"
    }
},{
    name: "orbitcoin",
    code: "ORB",
    icon: "noicon",
    longname: "Orbitcoin",
    description: "Orbitcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/orbitcoin/"
    }
},{
    name: "eltcoin",
    code: "ELTCOIN",
    icon: "noicon",
    longname: "ELTCOIN",
    description: "ELTCOIN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/eltcoin/"
    }
},{
    name: "unify",
    code: "UNIFY",
    icon: "noicon",
    longname: "Unify",
    description: "Unify coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/unify/"
    }
},{
    name: "ethersportz",
    code: "ESZ",
    icon: "noicon",
    longname: "EtherSportz",
    description: "EtherSportz coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ethersportz/"
    }
},{
    name: "ignition",
    code: "IC",
    icon: "noicon",
    longname: "Ignition",
    description: "Ignition coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ignition/"
    }
},{
    name: "aurumcoin",
    code: "AU",
    icon: "noicon",
    longname: "AurumCoin",
    description: "AurumCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aurumcoin/"
    }
},{
    name: "crowdcoin",
    code: "CRC",
    icon: "noicon",
    longname: "CrowdCoin",
    description: "CrowdCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/crowdcoin/"
    }
},{
    name: "growers-international",
    code: "GRWI",
    icon: "noicon",
    longname: "Growers International",
    description: "Growers International coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/growers-international/"
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
    name: "cream",
    code: "CRM",
    icon: "noicon",
    longname: "Cream",
    description: "Cream coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cream/"
    }
},{
    name: "fastcoin",
    code: "FST",
    icon: "noicon",
    longname: "Fastcoin",
    description: "Fastcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fastcoin/"
    }
},{
    name: "unitus",
    code: "UIS",
    icon: "noicon",
    longname: "Unitus",
    description: "Unitus coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/unitus/"
    }
},{
    name: "qubitcoin",
    code: "Q2C",
    icon: "noicon",
    longname: "QubitCoin",
    description: "QubitCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/qubitcoin/"
    }
},{
    name: "noblecoin",
    code: "NOBL",
    icon: "noicon",
    longname: "NobleCoin",
    description: "NobleCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/noblecoin/"
    }
},{
    name: "renos",
    code: "RNS",
    icon: "noicon",
    longname: "Renos",
    description: "Renos coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/renos/"
    }
},{
    name: "centurion",
    code: "CNT",
    icon: "noicon",
    longname: "Centurion",
    description: "Centurion coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/centurion/"
    }
},{
    name: "commodity-ad-network",
    code: "CDX",
    icon: "noicon",
    longname: "Commodity Ad Network",
    description: "Commodity Ad Network coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/commodity-ad-network/"
    }
},{
    name: "zennies",
    code: "ZENI",
    icon: "noicon",
    longname: "Zennies",
    description: "Zennies coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zennies/"
    }
},{
    name: "fujicoin",
    code: "FJC",
    icon: "noicon",
    longname: "FujiCoin",
    description: "FujiCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fujicoin/"
    }
},{
    name: "moin",
    code: "MOIN",
    icon: "noicon",
    longname: "Moin",
    description: "Moin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/moin/"
    }
},{
    name: "legends-room",
    code: "LGD",
    icon: "noicon",
    longname: "Legends Room",
    description: "Legends Room coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/legends-room/"
    }
},{
    name: "arbitragect",
    code: "ARCT",
    icon: "noicon",
    longname: "ArbitrageCT",
    description: "ArbitrageCT coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/arbitragect/"
    }
},{
    name: "dinastycoin",
    code: "DCY",
    icon: "noicon",
    longname: "Dinastycoin",
    description: "Dinastycoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dinastycoin/"
    }
},{
    name: "insanecoin-insn",
    code: "INSN",
    icon: "noicon",
    longname: "InsaneCoin",
    description: "InsaneCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/insanecoin-insn/"
    }
},{
    name: "woodcoin",
    code: "LOG",
    icon: "noicon",
    longname: "Woodcoin",
    description: "Woodcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/woodcoin/"
    }
},{
    name: "bata",
    code: "BTA",
    icon: "noicon",
    longname: "Bata",
    description: "Bata coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bata/"
    }
},{
    name: "arcticcoin",
    code: "ARC",
    icon: "noicon",
    longname: "ArcticCoin",
    description: "ArcticCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/arcticcoin/"
    }
},{
    name: "ico-openledger",
    code: "ICOO",
    icon: "noicon",
    longname: "ICO OpenLedger",
    description: "ICO OpenLedger coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ico-openledger/"
    }
},{
    name: "zetacoin",
    code: "ZET",
    icon: "noicon",
    longname: "Zetacoin",
    description: "Zetacoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zetacoin/"
    }
},{
    name: "netcoin",
    code: "NET",
    icon: "noicon",
    longname: "NetCoin",
    description: "NetCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/netcoin/"
    }
},{
    name: "machinecoin",
    code: "MAC",
    icon: "noicon",
    longname: "Machinecoin",
    description: "Machinecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/machinecoin/"
    }
},{
    name: "emphy",
    code: "EPY",
    icon: "noicon",
    longname: "Emphy",
    description: "Emphy coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/emphy/"
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
    name: "bitradio",
    code: "BRO",
    icon: "noicon",
    longname: "Bitradio",
    description: "Bitradio coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitradio/"
    }
},{
    name: "blakestar",
    code: "ERA",
    icon: "noicon",
    longname: "ERA",
    description: "ERA coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blakestar/"
    }
},{
    name: "worldcoin",
    code: "WDC",
    icon: "noicon",
    longname: "WorldCoin",
    description: "WorldCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/worldcoin/"
    }
},{
    name: "petrodollar",
    code: "XPD",
    icon: "noicon",
    longname: "PetroDollar",
    description: "PetroDollar coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/petrodollar/"
    }
},{
    name: "biblepay",
    code: "BBP",
    icon: "noicon",
    longname: "BiblePay",
    description: "BiblePay coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/biblepay/"
    }
},{
    name: "bitpark-coin",
    code: "BPC",
    icon: "noicon",
    longname: "Bitpark Coin",
    description: "Bitpark Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitpark-coin/"
    }
},{
    name: "skeincoin",
    code: "SKC",
    icon: "noicon",
    longname: "Skeincoin",
    description: "Skeincoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/skeincoin/"
    }
},{
    name: "kubera-coin",
    code: "KBR",
    icon: "noicon",
    longname: "Kubera Coin",
    description: "Kubera Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kubera-coin/"
    }
},{
    name: "abjcoin",
    code: "ABJ",
    icon: "noicon",
    longname: "Abjcoin",
    description: "Abjcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/abjcoin/"
    }
},{
    name: "kolion",
    code: "KLN",
    icon: "noicon",
    longname: "Kolion",
    description: "Kolion coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kolion/"
    }
},{
    name: "fucktoken",
    code: "FUCK",
    icon: "noicon",
    longname: "FuckToken",
    description: "FuckToken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fucktoken/"
    }
},{
    name: "piggycoin",
    code: "PIGGY",
    icon: "noicon",
    longname: "Piggycoin",
    description: "Piggycoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/piggycoin/"
    }
},{
    name: "leviarcoin",
    code: "XLC",
    icon: "noicon",
    longname: "LeviarCoin",
    description: "LeviarCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/leviarcoin/"
    }
},{
    name: "platinumbar",
    code: "XPTX",
    icon: "noicon",
    longname: "PlatinumBAR",
    description: "PlatinumBAR coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/platinumbar/"
    }
},{
    name: "wandx",
    code: "WAND",
    icon: "noicon",
    longname: "WandX",
    description: "WandX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/wandx/"
    }
},{
    name: "bitcoin-scrypt",
    code: "BTCS",
    icon: "noicon",
    longname: "Bitcoin Scrypt",
    description: "Bitcoin Scrypt coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoin-scrypt/"
    }
},{
    name: "roulettetoken",
    code: "RLT",
    icon: "noicon",
    longname: "RouletteToken",
    description: "RouletteToken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/roulettetoken/"
    }
},{
    name: "guncoin",
    code: "GUN",
    icon: "noicon",
    longname: "Guncoin",
    description: "Guncoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/guncoin/"
    }
},{
    name: "bitbar",
    code: "BTB",
    icon: "noicon",
    longname: "BitBar",
    description: "BitBar coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitbar/"
    }
},{
    name: "deutsche-emark",
    code: "DEM",
    icon: "noicon",
    longname: "Deutsche eMark",
    description: "Deutsche eMark coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/deutsche-emark/"
    }
},{
    name: "ethereumcash",
    code: "ECASH",
    icon: "noicon",
    longname: "Ethereum Cash",
    description: "Ethereum Cash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ethereumcash/"
    }
},{
    name: "digitalcoin",
    code: "DGC",
    icon: "noicon",
    longname: "Digitalcoin",
    description: "Digitalcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/digitalcoin/"
    }
},{
    name: "suretly",
    code: "SUR",
    icon: "noicon",
    longname: "Suretly",
    description: "Suretly coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/suretly/"
    }
},{
    name: "hodlcoin",
    code: "HODL",
    icon: "noicon",
    longname: "HOdlcoin",
    description: "HOdlcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hodlcoin/"
    }
},{
    name: "scorecoin",
    code: "SCORE",
    icon: "noicon",
    longname: "Scorecoin",
    description: "Scorecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/scorecoin/"
    }
},{
    name: "equal",
    code: "EQL",
    icon: "noicon",
    longname: "Equal",
    description: "Equal coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/equal/"
    }
},{
    name: "copico",
    code: "XCPO",
    icon: "noicon",
    longname: "Copico",
    description: "Copico coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/copico/"
    }
},{
    name: "popularcoin",
    code: "POP",
    icon: "noicon",
    longname: "PopularCoin",
    description: "PopularCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/popularcoin/"
    }
},{
    name: "monster-byte",
    code: "MBI",
    icon: "noicon",
    longname: "Monster Byte",
    description: "Monster Byte coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/monster-byte/"
    }
},{
    name: "neverdie",
    code: "NDC",
    icon: "noicon",
    longname: "NEVERDIE",
    description: "NEVERDIE coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/neverdie/"
    }
},{
    name: "hobonickels",
    code: "HBN",
    icon: "noicon",
    longname: "HoboNickels",
    description: "HoboNickels coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hobonickels/"
    }
},{
    name: "soma",
    code: "SCT",
    icon: "noicon",
    longname: "Soma",
    description: "Soma coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/soma/"
    }
},{
    name: "sugar-exchange",
    code: "SGR",
    icon: "noicon",
    longname: "Sugar Exchange",
    description: "Sugar Exchange coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sugar-exchange/"
    }
},{
    name: "smartcoin",
    code: "SMC",
    icon: "noicon",
    longname: "SmartCoin",
    description: "SmartCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/smartcoin/"
    }
},{
    name: "capricoin",
    code: "CPC",
    icon: "noicon",
    longname: "Capricoin",
    description: "Capricoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/capricoin/"
    }
},{
    name: "triangles",
    code: "TRI",
    icon: "noicon",
    longname: "Triangles",
    description: "Triangles coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/triangles/"
    }
},{
    name: "elcoin-el",
    code: "EL",
    icon: "noicon",
    longname: "Elcoin",
    description: "Elcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/elcoin-el/"
    }
},{
    name: "cryptocarbon",
    code: "CCRB",
    icon: "noicon",
    longname: "CryptoCarbon",
    description: "CryptoCarbon coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cryptocarbon/"
    }
},{
    name: "ace",
    code: "ACE",
    icon: "noicon",
    longname: "Ace",
    description: "Ace coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ace/"
    }
},{
    name: "megacoin",
    code: "MEC",
    icon: "noicon",
    longname: "Megacoin",
    description: "Megacoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/megacoin/"
    }
},{
    name: "cryptojacks",
    code: "CJ",
    icon: "noicon",
    longname: "Cryptojacks",
    description: "Cryptojacks coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cryptojacks/"
    }
},{
    name: "rupaya",
    code: "RUPX",
    icon: "noicon",
    longname: "Rupaya",
    description: "Rupaya coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rupaya/"
    }
},{
    name: "ultracoin",
    code: "UTC",
    icon: "noicon",
    longname: "UltraCoin",
    description: "UltraCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ultracoin/"
    }
},{
    name: "opal",
    code: "OPAL",
    icon: "noicon",
    longname: "Opal",
    description: "Opal coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/opal/"
    }
},{
    name: "dfscoin",
    code: "DFS",
    icon: "noicon",
    longname: "DFSCoin",
    description: "DFSCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dfscoin/"
    }
},{
    name: "whalecoin",
    code: "WHL",
    icon: "noicon",
    longname: "WhaleCoin",
    description: "WhaleCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/whalecoin/"
    }
},{
    name: "halcyon",
    code: "HAL",
    icon: "noicon",
    longname: "Halcyon",
    description: "Halcyon coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/halcyon/"
    }
},{
    name: "authorship",
    code: "ATS",
    icon: "noicon",
    longname: "Authorship",
    description: "Authorship coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/authorship/"
    }
},{
    name: "happycoin",
    code: "HPC",
    icon: "noicon",
    longname: "Happycoin",
    description: "Happycoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/happycoin/"
    }
},{
    name: "firstcoin",
    code: "FRST",
    icon: "noicon",
    longname: "FirstCoin",
    description: "FirstCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/firstcoin/"
    }
},{
    name: "ethereum-gold",
    code: "ETG",
    icon: "noicon",
    longname: "Ethereum Gold",
    description: "Ethereum Gold coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ethereum-gold/"
    }
},{
    name: "sovereign-hero",
    code: "HERO",
    icon: "noicon",
    longname: "Sovereign Hero",
    description: "Sovereign Hero coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sovereign-hero/"
    }
},{
    name: "kobocoin",
    code: "KOBO",
    icon: "noicon",
    longname: "Kobocoin",
    description: "Kobocoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kobocoin/"
    }
},{
    name: "tittiecoin",
    code: "TTC",
    icon: "noicon",
    longname: "TittieCoin",
    description: "TittieCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tittiecoin/"
    }
},{
    name: "cartaxi-token",
    code: "CTX",
    icon: "noicon",
    longname: "CarTaxi Token",
    description: "CarTaxi Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cartaxi-token/"
    }
},{
    name: "wavesgo",
    code: "WGO",
    icon: "noicon",
    longname: "WavesGo",
    description: "WavesGo coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/wavesgo/"
    }
},{
    name: "macron",
    code: "MCRN",
    icon: "noicon",
    longname: "MACRON",
    description: "MACRON coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/macron/"
    }
},{
    name: "trumpcoin",
    code: "TRUMP",
    icon: "noicon",
    longname: "TrumpCoin",
    description: "TrumpCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/trumpcoin/"
    }
},{
    name: "aquariuscoin",
    code: "ARCO",
    icon: "noicon",
    longname: "AquariusCoin",
    description: "AquariusCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aquariuscoin/"
    }
},{
    name: "8bit",
    code: "8BIT",
    icon: "noicon",
    longname: "8Bit",
    description: "8Bit coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/8bit/"
    }
},{
    name: "securecoin",
    code: "SRC",
    icon: "noicon",
    longname: "SecureCoin",
    description: "SecureCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/securecoin/"
    }
},{
    name: "sterlingcoin",
    code: "SLG",
    icon: "noicon",
    longname: "Sterlingcoin",
    description: "Sterlingcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sterlingcoin/"
    }
},{
    name: "rimbit",
    code: "RBT",
    icon: "noicon",
    longname: "Rimbit",
    description: "Rimbit coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rimbit/"
    }
},{
    name: "eternity",
    code: "ENT",
    icon: "noicon",
    longname: "Eternity",
    description: "Eternity coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/eternity/"
    }
},{
    name: "minereum",
    code: "MNE",
    icon: "noicon",
    longname: "Minereum",
    description: "Minereum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/minereum/"
    }
},{
    name: "argentum",
    code: "ARG",
    icon: "noicon",
    longname: "Argentum",
    description: "Argentum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/argentum/"
    }
},{
    name: "billionaire-token",
    code: "XBL",
    icon: "noicon",
    longname: "Billionaire Token",
    description: "Billionaire Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/billionaire-token/"
    }
},{
    name: "nyancoin",
    code: "NYAN",
    icon: "noicon",
    longname: "Nyancoin",
    description: "Nyancoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nyancoin/"
    }
},{
    name: "erc20",
    code: "ERC20",
    icon: "noicon",
    longname: "ERC20",
    description: "ERC20 coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/erc20/"
    }
},{
    name: "royal-kingdom-coin",
    code: "RKC",
    icon: "noicon",
    longname: "Royal Kingdom Coin",
    description: "Royal Kingdom Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/royal-kingdom-coin/"
    }
},{
    name: "bitcoin-red",
    code: "BTCRED",
    icon: "noicon",
    longname: "Bitcoin Red",
    description: "Bitcoin Red coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoin-red/"
    }
},{
    name: "mojocoin",
    code: "MOJO",
    icon: "noicon",
    longname: "MojoCoin",
    description: "MojoCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mojocoin/"
    }
},{
    name: "titcoin",
    code: "TIT",
    icon: "noicon",
    longname: "Titcoin",
    description: "Titcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/titcoin/"
    }
},{
    name: "iethereum",
    code: "IETH",
    icon: "noicon",
    longname: "iEthereum",
    description: "iEthereum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/iethereum/"
    }
},{
    name: "netko",
    code: "NETKO",
    icon: "noicon",
    longname: "Netko",
    description: "Netko coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/netko/"
    }
},{
    name: "jetcoin",
    code: "JET",
    icon: "noicon",
    longname: "Jetcoin",
    description: "Jetcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/jetcoin/"
    }
},{
    name: "gapcoin",
    code: "GAP",
    icon: "noicon",
    longname: "Gapcoin",
    description: "Gapcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gapcoin/"
    }
},{
    name: "visio",
    code: "VISIO",
    icon: "noicon",
    longname: "Visio",
    description: "Visio coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/visio/"
    }
},{
    name: "pakcoin",
    code: "PAK",
    icon: "noicon",
    longname: "Pakcoin",
    description: "Pakcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pakcoin/"
    }
},{
    name: "phoenixcoin",
    code: "PXC",
    icon: "noicon",
    longname: "Phoenixcoin",
    description: "Phoenixcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/phoenixcoin/"
    }
},{
    name: "octanox",
    code: "OTX",
    icon: "noicon",
    longname: "Octanox",
    description: "Octanox coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/octanox/"
    }
},{
    name: "cryptonite",
    code: "XCN",
    icon: "noicon",
    longname: "Cryptonite",
    description: "Cryptonite coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cryptonite/"
    }
},{
    name: "kurrent",
    code: "KURT",
    icon: "noicon",
    longname: "Kurrent",
    description: "Kurrent coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kurrent/"
    }
},{
    name: "swagbucks",
    code: "BUCKS",
    icon: "noicon",
    longname: "SwagBucks",
    description: "SwagBucks coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/swagbucks/"
    }
},{
    name: "motocoin",
    code: "MOTO",
    icon: "noicon",
    longname: "Motocoin",
    description: "Motocoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/motocoin/"
    }
},{
    name: "influxcoin",
    code: "INFX",
    icon: "noicon",
    longname: "Influxcoin",
    description: "Influxcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/influxcoin/"
    }
},{
    name: "pioneer-coin",
    code: "PCOIN",
    icon: "noicon",
    longname: "Pioneer Coin",
    description: "Pioneer Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pioneer-coin/"
    }
},{
    name: "tagcoin",
    code: "TAG",
    icon: "noicon",
    longname: "TagCoin",
    description: "TagCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tagcoin/"
    }
},{
    name: "blakecoin",
    code: "BLC",
    icon: "noicon",
    longname: "Blakecoin",
    description: "Blakecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blakecoin/"
    }
},{
    name: "steneum-coin",
    code: "STN",
    icon: "noicon",
    longname: "Steneum Coin",
    description: "Steneum Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/steneum-coin/"
    }
},{
    name: "droxne",
    code: "DRXNE",
    icon: "noicon",
    longname: "DROXNE",
    description: "DROXNE coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/droxne/"
    }
},{
    name: "amsterdamcoin",
    code: "AMS",
    icon: "noicon",
    longname: "AmsterdamCoin",
    description: "AmsterdamCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/amsterdamcoin/"
    }
},{
    name: "goldblocks",
    code: "GB",
    icon: "noicon",
    longname: "GoldBlocks",
    description: "GoldBlocks coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/goldblocks/"
    }
},{
    name: "desire",
    code: "DSR",
    icon: "noicon",
    longname: "Desire",
    description: "Desire coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/desire/"
    }
},{
    name: "hicoin",
    code: "XHI",
    icon: "noicon",
    longname: "HiCoin",
    description: "HiCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hicoin/"
    }
},{
    name: "garlicoin",
    code: "GRLC",
    icon: "noicon",
    longname: "Garlicoin",
    description: "Garlicoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/garlicoin/"
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
    name: "truckcoin",
    code: "TRK",
    icon: "noicon",
    longname: "Truckcoin",
    description: "Truckcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/truckcoin/"
    }
},{
    name: "digicube",
    code: "CUBE",
    icon: "noicon",
    longname: "DigiCube",
    description: "DigiCube coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/digicube/"
    }
},{
    name: "zozocoin",
    code: "ZZC",
    icon: "noicon",
    longname: "ZoZoCoin",
    description: "ZoZoCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zozocoin/"
    }
},{
    name: "coin",
    code: "CNO",
    icon: "noicon",
    longname: "Coin(O)",
    description: "Coin(O) coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/coin/"
    }
},{
    name: "adcoin",
    code: "ACC",
    icon: "noicon",
    longname: "AdCoin",
    description: "AdCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/adcoin/"
    }
},{
    name: "ebitcoin-cash",
    code: "EBCH",
    icon: "noicon",
    longname: "eBitcoinCash",
    description: "eBitcoinCash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ebitcoin-cash/"
    }
},{
    name: "trackr",
    code: "TKR",
    icon: "noicon",
    longname: "CryptoInsight",
    description: "CryptoInsight coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/trackr/"
    }
},{
    name: "daxxcoin",
    code: "DAXX",
    icon: "noicon",
    longname: "DaxxCoin",
    description: "DaxxCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/daxxcoin/"
    }
},{
    name: "bitbtc",
    code: "BITBTC",
    icon: "noicon",
    longname: "bitBTC",
    description: "bitBTC coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitbtc/"
    }
},{
    name: "litecoin-plus",
    code: "LCP",
    icon: "noicon",
    longname: "Litecoin Plus",
    description: "Litecoin Plus coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/litecoin-plus/"
    }
},{
    name: "homeblockcoin",
    code: "HBC",
    icon: "noicon",
    longname: "HomeBlockCoin",
    description: "HomeBlockCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/homeblockcoin/"
    }
},{
    name: "newbium",
    code: "NEWB",
    icon: "noicon",
    longname: "Newbium",
    description: "Newbium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/newbium/"
    }
},{
    name: "prototanium",
    code: "PR",
    icon: "noicon",
    longname: "Prototanium",
    description: "Prototanium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/prototanium/"
    }
},{
    name: "sativacoin",
    code: "STV",
    icon: "noicon",
    longname: "Sativacoin",
    description: "Sativacoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sativacoin/"
    }
},{
    name: "kushcoin",
    code: "KUSH",
    icon: "noicon",
    longname: "KushCoin",
    description: "KushCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kushcoin/"
    }
},{
    name: "nevacoin",
    code: "NEVA",
    icon: "noicon",
    longname: "NevaCoin",
    description: "NevaCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/nevacoin/"
    }
},{
    name: "808coin",
    code: "808",
    icon: "noicon",
    longname: "808Coin",
    description: "808Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/808coin/"
    }
},{
    name: "globaltoken",
    code: "GLT",
    icon: "noicon",
    longname: "GlobalToken",
    description: "GlobalToken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/globaltoken/"
    }
},{
    name: "freicoin",
    code: "FRC",
    icon: "noicon",
    longname: "Freicoin",
    description: "Freicoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/freicoin/"
    }
},{
    name: "tokyo",
    code: "TOKC",
    icon: "noicon",
    longname: "TOKYO",
    description: "TOKYO coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tokyo/"
    }
},{
    name: "coinonatx",
    code: "XCXT",
    icon: "noicon",
    longname: "CoinonatX",
    description: "CoinonatX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/coinonatx/"
    }
},{
    name: "helleniccoin",
    code: "HNC",
    icon: "noicon",
    longname: "Helleniccoin",
    description: "Helleniccoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/helleniccoin/"
    }
},{
    name: "kayicoin",
    code: "KAYI",
    icon: "noicon",
    longname: "Kayicoin",
    description: "Kayicoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kayicoin/"
    }
},{
    name: "bolivarcoin",
    code: "BOLI",
    icon: "noicon",
    longname: "Bolivarcoin",
    description: "Bolivarcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bolivarcoin/"
    }
},{
    name: "coin2-1",
    code: "C2",
    icon: "noicon",
    longname: "Coin2.1",
    description: "Coin2.1 coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/coin2-1/"
    }
},{
    name: "gameunits",
    code: "UNITS",
    icon: "noicon",
    longname: "GameUnits",
    description: "GameUnits coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gameunits/"
    }
},{
    name: "sagacoin",
    code: "SAGA",
    icon: "noicon",
    longname: "SagaCoin",
    description: "SagaCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/sagacoin/"
    }
},{
    name: "senderon",
    code: "SDRN",
    icon: "noicon",
    longname: "Senderon",
    description: "Senderon coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/senderon/"
    }
},{
    name: "bitcoal",
    code: "COAL",
    icon: "noicon",
    longname: "BitCoal",
    description: "BitCoal coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoal/"
    }
},{
    name: "supercoin",
    code: "SUPER",
    icon: "noicon",
    longname: "SuperCoin",
    description: "SuperCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/supercoin/"
    }
},{
    name: "berncash",
    code: "BERN",
    icon: "noicon",
    longname: "BERNcash",
    description: "BERNcash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/berncash/"
    }
},{
    name: "quebecoin",
    code: "QBC",
    icon: "noicon",
    longname: "Quebecoin",
    description: "Quebecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/quebecoin/"
    }
},{
    name: "virtacoinplus",
    code: "XVP",
    icon: "noicon",
    longname: "Virtacoinplus",
    description: "Virtacoinplus coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/virtacoinplus/"
    }
},{
    name: "ethereum-dark",
    code: "ETHD",
    icon: "noicon",
    longname: "Ethereum Dark",
    description: "Ethereum Dark coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ethereum-dark/"
    }
},{
    name: "mao-zedong",
    code: "MAO",
    icon: "noicon",
    longname: "Mao Zedong",
    description: "Mao Zedong coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/mao-zedong/"
    }
},{
    name: "onix",
    code: "ONX",
    icon: "noicon",
    longname: "Onix",
    description: "Onix coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/onix/"
    }
},{
    name: "atomic-coin",
    code: "ATOM",
    icon: "noicon",
    longname: "Atomic Coin",
    description: "Atomic Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/atomic-coin/"
    }
},{
    name: "philosopher-stones",
    code: "PHS",
    icon: "noicon",
    longname: "Philosopher Stones",
    description: "Philosopher Stones coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/philosopher-stones/"
    }
},{
    name: "crystal-clear",
    code: "CCT",
    icon: "noicon",
    longname: "Crystal Clear ",
    description: "Crystal Clear  coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/crystal-clear/"
    }
},{
    name: "advanced-internet-blocks",
    code: "AIB",
    icon: "noicon",
    longname: "Advanced Internet Blocks",
    description: "Advanced Internet Blocks coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/advanced-internet-blocks/"
    }
},{
    name: "redcoin",
    code: "RED",
    icon: "noicon",
    longname: "RedCoin",
    description: "RedCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/redcoin/"
    }
},{
    name: "prime-xi",
    code: "PXI",
    icon: "noicon",
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
    name: "tekcoin",
    code: "TEK",
    icon: "noicon",
    longname: "TEKcoin",
    description: "TEKcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tekcoin/"
    }
},{
    name: "ecocoin",
    code: "ECO",
    icon: "noicon",
    longname: "EcoCoin",
    description: "EcoCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ecocoin/"
    }
},{
    name: "roofs",
    code: "ROOFS",
    icon: "noicon",
    longname: "Roofs",
    description: "Roofs coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/roofs/"
    }
},{
    name: "leacoin",
    code: "LEA",
    icon: "noicon",
    longname: "LeaCoin",
    description: "LeaCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/leacoin/"
    }
},{
    name: "eot-token",
    code: "EOT",
    icon: "noicon",
    longname: "EOT Token",
    description: "EOT Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/eot-token/"
    }
},{
    name: "c-bit",
    code: "XCT",
    icon: "noicon",
    longname: "C-Bit",
    description: "C-Bit coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/c-bit/"
    }
},{
    name: "briacoin",
    code: "BRIA",
    icon: "noicon",
    longname: "BriaCoin",
    description: "BriaCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/briacoin/"
    }
},{
    name: "emerald",
    code: "EMD",
    icon: "noicon",
    longname: "Emerald Crypto",
    description: "Emerald Crypto coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/emerald/"
    }
},{
    name: "bitcoinfast",
    code: "BCF",
    icon: "noicon",
    longname: "Bitcoin Fast",
    description: "Bitcoin Fast coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoinfast/"
    }
},{
    name: "qbic",
    code: "QBIC",
    icon: "noicon",
    longname: "Qbic",
    description: "Qbic coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/qbic/"
    }
},{
    name: "icobid",
    code: "ICOB",
    icon: "noicon",
    longname: "ICOBID",
    description: "ICOBID coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/icobid/"
    }
},{
    name: "zcash-gold",
    code: "ZCG",
    icon: "noicon",
    longname: "Zlancer",
    description: "Zlancer coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/zcash-gold/"
    }
},{
    name: "impact",
    code: "IMX",
    icon: "noicon",
    longname: "Impact",
    description: "Impact coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/impact/"
    }
},{
    name: "bipcoin",
    code: "BIP",
    icon: "noicon",
    longname: "BipCoin",
    description: "BipCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bipcoin/"
    }
},{
    name: "eurocoin",
    code: "EUC",
    icon: "noicon",
    longname: "Eurocoin",
    description: "Eurocoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/eurocoin/"
    }
},{
    name: "neuro",
    code: "NRO",
    icon: "noicon",
    longname: "Neuro",
    description: "Neuro coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/neuro/"
    }
},{
    name: "ronpaulcoin",
    code: "RPC",
    icon: "noicon",
    longname: "RonPaulCoin",
    description: "RonPaulCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ronpaulcoin/"
    }
},{
    name: "dix-asset",
    code: "DIX",
    icon: "noicon",
    longname: "Dix Asset",
    description: "Dix Asset coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dix-asset/"
    }
},{
    name: "asiadigicoin",
    code: "ADCN",
    icon: "noicon",
    longname: "Asiadigicoin",
    description: "Asiadigicoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/asiadigicoin/"
    }
},{
    name: "cachecoin",
    code: "CACH",
    icon: "noicon",
    longname: "CacheCoin",
    description: "CacheCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cachecoin/"
    }
},{
    name: "dalecoin",
    code: "DALC",
    icon: "noicon",
    longname: "Dalecoin",
    description: "Dalecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dalecoin/"
    }
},{
    name: "postoken",
    code: "POS",
    icon: "noicon",
    longname: "PoSToken",
    description: "PoSToken coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/postoken/"
    }
},{
    name: "tajcoin",
    code: "TAJ",
    icon: "noicon",
    longname: "TajCoin",
    description: "TajCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tajcoin/"
    }
},{
    name: "speedcash",
    code: "SCS",
    icon: "noicon",
    longname: "Speedcash",
    description: "Speedcash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/speedcash/"
    }
},{
    name: "litebitcoin",
    code: "LBTC",
    icon: "noicon",
    longname: "LiteBitcoin",
    description: "LiteBitcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/litebitcoin/"
    }
},{
    name: "luna-coin",
    code: "LUNA",
    icon: "noicon",
    longname: "Luna Coin",
    description: "Luna Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/luna-coin/"
    }
},{
    name: "money",
    code: "$$$",
    icon: "noicon",
    longname: "Money",
    description: "Money coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/money/"
    }
},{
    name: "gpu-coin",
    code: "GPU",
    icon: "noicon",
    longname: "GPU Coin",
    description: "GPU Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gpu-coin/"
    }
},{
    name: "300-token",
    code: "300",
    icon: "noicon",
    longname: "300 Token",
    description: "300 Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/300-token/"
    }
},{
    name: "reecoin",
    code: "REE",
    icon: "noicon",
    longname: "ReeCoin",
    description: "ReeCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/reecoin/"
    }
},{
    name: "cannation",
    code: "CNNC",
    icon: "noicon",
    longname: "Cannation",
    description: "Cannation coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cannation/"
    }
},{
    name: "eaglecoin",
    code: "EAGLE",
    icon: "noicon",
    longname: "EagleCoin",
    description: "EagleCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/eaglecoin/"
    }
},{
    name: "compucoin",
    code: "CPN",
    icon: "noicon",
    longname: "CompuCoin",
    description: "CompuCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/compucoin/"
    }
},{
    name: "soilcoin",
    code: "SOIL",
    icon: "noicon",
    longname: "SOILcoin",
    description: "SOILcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/soilcoin/"
    }
},{
    name: "quazarcoin",
    code: "QCN",
    icon: "noicon",
    longname: "QuazarCoin",
    description: "QuazarCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/quazarcoin/"
    }
},{
    name: "hempcoin-hmp",
    code: "HMP",
    icon: "noicon",
    longname: "HempCoin",
    description: "HempCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hempcoin-hmp/"
    }
},{
    name: "allion",
    code: "ALL",
    icon: "noicon",
    longname: "Allion",
    description: "Allion coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/allion/"
    }
},{
    name: "x-coin",
    code: "XCO",
    icon: "noicon",
    longname: "X-Coin",
    description: "X-Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/x-coin/"
    }
},{
    name: "comet",
    code: "CMT",
    icon: "noicon",
    longname: "Comet",
    description: "Comet coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/comet/"
    }
},{
    name: "biteur",
    code: "BITEUR",
    icon: "noicon",
    longname: "bitEUR",
    description: "bitEUR coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/biteur/"
    }
},{
    name: "fuzzballs",
    code: "FUZZ",
    icon: "noicon",
    longname: "FuzzBalls",
    description: "FuzzBalls coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fuzzballs/"
    }
},{
    name: "madcoin",
    code: "MDC",
    icon: "noicon",
    longname: "Madcoin",
    description: "Madcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/madcoin/"
    }
},{
    name: "eryllium",
    code: "ERY",
    icon: "noicon",
    longname: "Eryllium",
    description: "Eryllium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/eryllium/"
    }
},{
    name: "bitcedi",
    code: "BXC",
    icon: "noicon",
    longname: "Bitcedi",
    description: "Bitcedi coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcedi/"
    }
},{
    name: "gold-pressed-latinum",
    code: "GPL",
    icon: "noicon",
    longname: "Gold Pressed Latinum",
    description: "Gold Pressed Latinum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gold-pressed-latinum/"
    }
},{
    name: "creatio",
    code: "XCRE",
    icon: "noicon",
    longname: "Creatio",
    description: "Creatio coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/creatio/"
    }
},{
    name: "kronecoin",
    code: "KRONE",
    icon: "noicon",
    longname: "Kronecoin",
    description: "Kronecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kronecoin/"
    }
},{
    name: "save-and-gain",
    code: "SANDG",
    icon: "noicon",
    longname: "Save and Gain",
    description: "Save and Gain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/save-and-gain/"
    }
},{
    name: "women",
    code: "WOMEN",
    icon: "noicon",
    longname: "WomenCoin",
    description: "WomenCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/women/"
    }
},{
    name: "master-swiscoin",
    code: "MSCN",
    icon: "noicon",
    longname: "Master Swiscoin",
    description: "Master Swiscoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/master-swiscoin/"
    }
},{
    name: "posex",
    code: "PEX",
    icon: "noicon",
    longname: "PosEx",
    description: "PosEx coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/posex/"
    }
},{
    name: "coinonat",
    code: "CXT",
    icon: "noicon",
    longname: "Coinonat",
    description: "Coinonat coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/coinonat/"
    }
},{
    name: "vaperscoin",
    code: "VPRC",
    icon: "noicon",
    longname: "VapersCoin",
    description: "VapersCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vaperscoin/"
    }
},{
    name: "goldpieces",
    code: "GP",
    icon: "noicon",
    longname: "GoldPieces",
    description: "GoldPieces coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/goldpieces/"
    }
},{
    name: "altcommunity-coin",
    code: "ALTCOM",
    icon: "noicon",
    longname: "SONO",
    description: "SONO coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/altcommunity-coin/"
    }
},{
    name: "iconic",
    code: "ICON",
    icon: "noicon",
    longname: "Iconic",
    description: "Iconic coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/iconic/"
    }
},{
    name: "printerium",
    code: "PRX",
    icon: "noicon",
    longname: "Printerium",
    description: "Printerium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/printerium/"
    }
},{
    name: "litecoin-ultra",
    code: "LTCU",
    icon: "noicon",
    longname: "LiteCoin Ultra",
    description: "LiteCoin Ultra coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/litecoin-ultra/"
    }
},{
    name: "jewels",
    code: "JWL",
    icon: "noicon",
    longname: "Jewels",
    description: "Jewels coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/jewels/"
    }
},{
    name: "javascript-token",
    code: "JS",
    icon: "noicon",
    longname: "JavaScript Token",
    description: "JavaScript Token coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/javascript-token/"
    }
},{
    name: "rawcoin2",
    code: "XRC",
    icon: "noicon",
    longname: "Rawcoin",
    description: "Rawcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rawcoin2/"
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
    name: "exchangen",
    code: "EXN",
    icon: "noicon",
    longname: "ExchangeN",
    description: "ExchangeN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/exchangen/"
    }
},{
    name: "anarchistsprime",
    code: "ACP",
    icon: "noicon",
    longname: "AnarchistsPrime",
    description: "AnarchistsPrime coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/anarchistsprime/"
    }
},{
    name: "plncoin",
    code: "PLNC",
    icon: "noicon",
    longname: "PLNcoin",
    description: "PLNcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/plncoin/"
    }
},{
    name: "veros",
    code: "VRS",
    icon: "noicon",
    longname: "Veros",
    description: "Veros coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/veros/"
    }
},{
    name: "gbcgoldcoin",
    code: "GBC",
    icon: "noicon",
    longname: "GBCGoldCoin",
    description: "GBCGoldCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gbcgoldcoin/"
    }
},{
    name: "coupecoin",
    code: "COUPE",
    icon: "noicon",
    longname: "Coupecoin",
    description: "Coupecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/coupecoin/"
    }
},{
    name: "ulatech",
    code: "ULA",
    icon: "noicon",
    longname: "Ulatech",
    description: "Ulatech coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ulatech/"
    }
},{
    name: "prcoin",
    code: "PRC",
    icon: "noicon",
    longname: "PRCoin",
    description: "PRCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/prcoin/"
    }
},{
    name: "aerium",
    code: "AERM",
    icon: "noicon",
    longname: "Aerium",
    description: "Aerium coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aerium/"
    }
},{
    name: "vault-coin",
    code: "VLTC",
    icon: "noicon",
    longname: "Vault Coin",
    description: "Vault Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/vault-coin/"
    }
},{
    name: "project-x",
    code: "NANOX",
    icon: "noicon",
    longname: "Project-X",
    description: "Project-X coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/project-x/"
    }
},{
    name: "exrnchain",
    code: "EXRN",
    icon: "noicon",
    longname: "EXRNchain",
    description: "EXRNchain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/exrnchain/"
    }
},{
    name: "harmonycoin-hmc",
    code: "HMC",
    icon: "noicon",
    longname: "HarmonyCoin",
    description: "HarmonyCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/harmonycoin-hmc/"
    }
},{
    name: "pizzacoin",
    code: "PIZZA",
    icon: "noicon",
    longname: "PizzaCoin",
    description: "PizzaCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/pizzacoin/"
    }
},{
    name: "tristar-coin",
    code: "TSTR",
    icon: "noicon",
    longname: "Tristar Coin",
    description: "Tristar Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tristar-coin/"
    }
},{
    name: "dibcoin",
    code: "DIBC",
    icon: "noicon",
    longname: "DIBCOIN",
    description: "DIBCOIN coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dibcoin/"
    }
},{
    name: "paccoin",
    code: "PAC",
    icon: "pac",
    longname: "PACcoin",
    description: "PACcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/paccoin/"
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
    name: "maecenas",
    code: "ART",
    icon: "noicon",
    longname: "Maecenas",
    description: "Maecenas coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/maecenas/"
    }
},{
    name: "ethereum-movie-venture",
    code: "EMV",
    icon: "noicon",
    longname: "Ethereum Movie Venture",
    description: "Ethereum Movie Venture coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ethereum-movie-venture/"
    }
},{
    name: "peerplays-ppy",
    code: "PPY",
    icon: "noicon",
    longname: "Peerplays",
    description: "Peerplays coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/peerplays-ppy/"
    }
},{
    name: "target-coin",
    code: "TGT",
    icon: "noicon",
    longname: "Target Coin",
    description: "Target Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/target-coin/"
    }
},{
    name: "hedge",
    code: "HDG",
    icon: "noicon",
    longname: "Hedge",
    description: "Hedge coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hedge/"
    }
},{
    name: "ecobit",
    code: "ECOB",
    icon: "noicon",
    longname: "Ecobit",
    description: "Ecobit coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ecobit/"
    }
},{
    name: "xenon",
    code: "XNN",
    icon: "noicon",
    longname: "Xenon",
    description: "Xenon coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/xenon/"
    }
},{
    name: "prospectors-gold",
    code: "PGL",
    icon: "noicon",
    longname: "Prospectors Gold",
    description: "Prospectors Gold coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/prospectors-gold/"
    }
},{
    name: "asiacoin",
    code: "AC",
    icon: "noicon",
    longname: "AsiaCoin",
    description: "AsiaCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/asiacoin/"
    }
},{
    name: "virtacoin",
    code: "VTA",
    icon: "noicon",
    longname: "Virtacoin",
    description: "Virtacoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/virtacoin/"
    }
},{
    name: "encryptotel",
    code: "ETT",
    icon: "noicon",
    longname: "EncryptoTel [WAVES]",
    description: "EncryptoTel [WAVES] coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/encryptotel/"
    }
},{
    name: "bitboost",
    code: "BBT",
    icon: "noicon",
    longname: "BitBoost",
    description: "BitBoost coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitboost/"
    }
},{
    name: "real-estate-tokens",
    code: "REX",
    icon: "noicon",
    longname: "REX",
    description: "REX coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/real-estate-tokens/"
    }
},{
    name: "eventchain",
    code: "EVC",
    icon: "noicon",
    longname: "EventChain",
    description: "EventChain coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/eventchain/"
    }
},{
    name: "privatix",
    code: "PRIX",
    icon: "noicon",
    longname: "Privatix",
    description: "Privatix coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/privatix/"
    }
},{
    name: "carboncoin",
    code: "CARBON",
    icon: "noicon",
    longname: "Carboncoin",
    description: "Carboncoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/carboncoin/"
    }
},{
    name: "ethbits",
    code: "ETBS",
    icon: "noicon",
    longname: "Ethbits",
    description: "Ethbits coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ethbits/"
    }
},{
    name: "cryptogenic-bullion",
    code: "CBX",
    icon: "noicon",
    longname: "Crypto Bullion",
    description: "Crypto Bullion coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cryptogenic-bullion/"
    }
},{
    name: "anoncoin",
    code: "ANC",
    icon: "noicon",
    longname: "Anoncoin",
    description: "Anoncoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/anoncoin/"
    }
},{
    name: "yashcoin",
    code: "YASH",
    icon: "noicon",
    longname: "YashCoin",
    description: "YashCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/yashcoin/"
    }
},{
    name: "bowhead",
    code: "AHT",
    icon: "noicon",
    longname: "Bowhead",
    description: "Bowhead coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bowhead/"
    }
},{
    name: "leafcoin",
    code: "LEAF",
    icon: "noicon",
    longname: "LeafCoin",
    description: "LeafCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/leafcoin/"
    }
},{
    name: "version",
    code: "V",
    icon: "noicon",
    longname: "Version",
    description: "Version coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/version/"
    }
},{
    name: "universe",
    code: "UNI",
    icon: "noicon",
    longname: "Universe",
    description: "Universe coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/universe/"
    }
},{
    name: "kekcoin",
    code: "KEK",
    icon: "noicon",
    longname: "KekCoin",
    description: "KekCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/kekcoin/"
    }
},{
    name: "shadowcash",
    code: "SDC",
    icon: "noicon",
    longname: "ShadowCash",
    description: "ShadowCash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/shadowcash/"
    }
},{
    name: "etheriya",
    code: "RIYA",
    icon: "noicon",
    longname: "Etheriya",
    description: "Etheriya coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/etheriya/"
    }
},{
    name: "fluttercoin",
    code: "FLT",
    icon: "noicon",
    longname: "FlutterCoin",
    description: "FlutterCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fluttercoin/"
    }
},{
    name: "inpay",
    code: "INPAY",
    icon: "noicon",
    longname: "InPay",
    description: "InPay coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/inpay/"
    }
},{
    name: "i0coin",
    code: "I0C",
    icon: "noicon",
    longname: "I0Coin",
    description: "I0Coin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/i0coin/"
    }
},{
    name: "shorty",
    code: "SHORTY",
    icon: "noicon",
    longname: "Shorty",
    description: "Shorty coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/shorty/"
    }
},{
    name: "fantomcoin",
    code: "FCN",
    icon: "noicon",
    longname: "Fantomcoin",
    description: "Fantomcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fantomcoin/"
    }
},{
    name: "hitcoin",
    code: "HTC",
    icon: "noicon",
    longname: "HitCoin",
    description: "HitCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/hitcoin/"
    }
},{
    name: "intelligent-trading-tech",
    code: "ITT",
    icon: "noicon",
    longname: "Intelligent Trading Tech",
    description: "Intelligent Trading Tech coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/intelligent-trading-tech/"
    }
},{
    name: "ethbet",
    code: "EBET",
    icon: "noicon",
    longname: "EthBet",
    description: "EthBet coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ethbet/"
    }
},{
    name: "aricoin",
    code: "ARI",
    icon: "noicon",
    longname: "Aricoin",
    description: "Aricoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/aricoin/"
    }
},{
    name: "maxcoin",
    code: "MAX",
    icon: "noicon",
    longname: "MaxCoin",
    description: "MaxCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/maxcoin/"
    }
},{
    name: "trollcoin",
    code: "TROLL",
    icon: "noicon",
    longname: "Trollcoin",
    description: "Trollcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/trollcoin/"
    }
},{
    name: "iticoin",
    code: "ITI",
    icon: "noicon",
    longname: "iTicoin",
    description: "iTicoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/iticoin/"
    }
},{
    name: "metalcoin",
    code: "METAL",
    icon: "noicon",
    longname: "MetalCoin",
    description: "MetalCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/metalcoin/"
    }
},{
    name: "britcoin",
    code: "BRIT",
    icon: "noicon",
    longname: "BritCoin",
    description: "BritCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/britcoin/"
    }
},{
    name: "rustbits",
    code: "RUSTBITS",
    icon: "noicon",
    longname: "Rustbits",
    description: "Rustbits coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/rustbits/"
    }
},{
    name: "unicoin",
    code: "UNIC",
    icon: "noicon",
    longname: "UniCoin",
    description: "UniCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/unicoin/"
    }
},{
    name: "grimcoin",
    code: "GRIM",
    icon: "noicon",
    longname: "Grimcoin",
    description: "Grimcoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/grimcoin/"
    }
},{
    name: "ultimate-secure-cash",
    code: "USC",
    icon: "noicon",
    longname: "Ultimate Secure Cash",
    description: "Ultimate Secure Cash coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/ultimate-secure-cash/"
    }
},{
    name: "elementrem",
    code: "ELE",
    icon: "noicon",
    longname: "Elementrem",
    description: "Elementrem coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/elementrem/"
    }
},{
    name: "datacoin",
    code: "DTC",
    icon: "noicon",
    longname: "Datacoin",
    description: "Datacoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/datacoin/"
    }
},{
    name: "link-platform",
    code: "LNK",
    icon: "noicon",
    longname: "Link Platform",
    description: "Link Platform coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/link-platform/"
    }
},{
    name: "fimkrypto",
    code: "FIMK",
    icon: "noicon",
    longname: "FIMKrypto",
    description: "FIMKrypto coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fimkrypto/"
    }
},{
    name: "lanacoin",
    code: "LANA",
    icon: "noicon",
    longname: "LanaCoin",
    description: "LanaCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/lanacoin/"
    }
},{
    name: "bitstar",
    code: "BITS",
    icon: "noicon",
    longname: "Bitstar",
    description: "Bitstar coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitstar/"
    }
},{
    name: "cryptoforecast",
    code: "CFT",
    icon: "noicon",
    longname: "CryptoForecast",
    description: "CryptoForecast coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/cryptoforecast/"
    }
},{
    name: "bit20",
    code: "BTWTY",
    icon: "noicon",
    longname: "Bit20",
    description: "Bit20 coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bit20/"
    }
},{
    name: "colossuscoin-v2",
    code: "CV2",
    icon: "noicon",
    longname: "Colossuscoin V2",
    description: "Colossuscoin V2 coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/colossuscoin-v2/"
    }
},{
    name: "fuelcoin",
    code: "FC2",
    icon: "noicon",
    longname: "FuelCoin",
    description: "FuelCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/fuelcoin/"
    }
},{
    name: "gaia",
    code: "GAIA",
    icon: "noicon",
    longname: "GAIA",
    description: "GAIA coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/gaia/"
    }
},{
    name: "blazecoin",
    code: "BLZ",
    icon: "noicon",
    longname: "BlazeCoin",
    description: "BlazeCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blazecoin/"
    }
},{
    name: "glasscoin",
    code: "GLS",
    icon: "noicon",
    longname: "GlassCoin",
    description: "GlassCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/glasscoin/"
    }
},{
    name: "bigup",
    code: "BIGUP",
    icon: "noicon",
    longname: "BigUp",
    description: "BigUp coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bigup/"
    }
},{
    name: "goldreserve",
    code: "XGR",
    icon: "noicon",
    longname: "GoldReserve",
    description: "GoldReserve coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/goldreserve/"
    }
},{
    name: "valorbit",
    code: "VAL",
    icon: "noicon",
    longname: "Valorbit",
    description: "Valorbit coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/valorbit/"
    }
},{
    name: "manna",
    code: "MANNA",
    icon: "noicon",
    longname: "Manna",
    description: "Manna coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/manna/"
    }
},{
    name: "paycoin2",
    code: "XPY",
    icon: "noicon",
    longname: "PayCoin",
    description: "PayCoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/paycoin2/"
    }
},{
    name: "bitcurrency",
    code: "BTCR",
    icon: "noicon",
    longname: "Bitcurrency",
    description: "Bitcurrency coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcurrency/"
    }
},{
    name: "flycoin",
    code: "FLY",
    icon: "noicon",
    longname: "Flycoin",
    description: "Flycoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/flycoin/"
    }
},{
    name: "purevidz",
    code: "VIDZ",
    icon: "noicon",
    longname: "PureVidz",
    description: "PureVidz coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/purevidz/"
    }
},{
    name: "signatum",
    code: "SIGT",
    icon: "noicon",
    longname: "Signatum",
    description: "Signatum coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/signatum/"
    }
},{
    name: "wayguide",
    code: "WAY",
    icon: "noicon",
    longname: "WayGuide",
    description: "WayGuide coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/wayguide/"
    }
},{
    name: "tigercoin",
    code: "TGC",
    icon: "noicon",
    longname: "Tigercoin",
    description: "Tigercoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/tigercoin/"
    }
},{
    name: "joulecoin",
    code: "XJO",
    icon: "noicon",
    longname: "Joulecoin",
    description: "Joulecoin coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/joulecoin/"
    }
},{
    name: "blockpay",
    code: "BLOCKPAY",
    icon: "noicon",
    longname: "BlockPay",
    description: "BlockPay coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/blockpay/"
    }
}];