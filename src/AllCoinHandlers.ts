import {HandlerBtc} from "./Handlers/HandlerBtc";
import {ERC20Handler, HandlerEth} from "./Handlers/HandlerEth";
import {HandlerBtcTest} from "./Handlers/HandlerBtcTest";
import {ERC20TestHandler, HandlerEthTest} from "./Handlers/HandlerEthTest";
import {BaseCoinHandler, OnlineCoinHandler} from "./Handlers/BaseCoinHandler";
import {HandlerLtc} from "./Handlers/HandlerLtc";
import {HandlerDoge} from "./Handlers/HandlerDoge";
import {Engine} from "./Engine";
import {PortfolioOnlyHandler} from "./Handlers/PortfolioOnlyHandler";
import {HandlerDash} from "./Handlers/HandlerDash";

export function createAllCoinHandlers(engine: Engine) : { [code: string] : BaseCoinHandler } {
    return {
        'BTC': new HandlerBtc(engine),
        'BTC.TST': new HandlerBtcTest(engine),
        'ETH': new HandlerEth(engine),
        'ETH.TST': new HandlerEthTest(engine),
        'LTC': new HandlerLtc(engine),
        'DOGE': new HandlerDoge(engine),
        'BCH': new PortfolioOnlyHandler(
            'BCH', 'Bitcoin Cash', 'bch',
            'via bitcoin.com: Bitcoin Cash (BCH) is a peer-to-peer electronic cash system. ' +
            'It is a consensus network that enables a new type of payment method and a completely digital form of money. ' +
            'It is a decentralized peer-to-peer payment network that is powered by its users with no central authority or middlemen.'
        ),
        'BCH.TST': new PortfolioOnlyHandler(
            'BCH.TST', 'Bitcoin Cash TestNet', 'bch.test',
            'via Bitcoin Wiki: The testnet is an alternative Bitcoin block chain, to be used for testing. ' +
            'Testnet coins are separate and distinct from actual bitcoins, and are never supposed to have any value.'
        ),
        'DASH': new HandlerDash(engine),
        'ERC20.TST': new ERC20TestHandler(
            engine,
            'ERC20.TST',
            'ERC20 Test Tokens',
            'erc20.tst',
            '0x251735ff853720582345c64cdb4eb44bd02e61a2',
            18
        ),
        'WEENUS.TST': new ERC20TestHandler(
            engine,
            'WEENUS.TST',
            'WEENUS Test Tokens',
            'noicon',
            '0x101848D5C5bBca18E6b4431eEdF6B95E9ADF82FA',
            18
        ),
        'YEENUS.TST': new ERC20TestHandler(
            engine,
            'YEENUS.TST',
            'YEENUS Test Tokens',
            'noicon',
            '0xF6fF95D53E08c9660dC7820fD5A775484f77183A',
            8
        ),
        'ZEENUS.TST': new ERC20TestHandler(
            engine,
            'ZEENUS.TST',
            'ZEENUS Test Tokens',
            'noicon',
            '0xC84f8B669Ccb91C86AB2b38060362b9956f2De52',
            0
        ),

        /* ERC20 Tokens */
        'BNB': new ERC20Handler(engine, 'BNB', 'Binance Coin', 'bnb', '0xB8c77482e45F1F44dE1745F52C74426C631bDD52', 18, 'Binance aims to build a world-class crypto exchange, powering the future of crypto finance.	', {"binance.com":"https://www.binance.com/"}),
        'VEN': new ERC20Handler(engine, 'VEN', 'VeChain', 'ven', '0xd850942ef8811f2a866692a623011bde52a462c1', 18, 'VeChain aims to connect blockchain technology to the real world by providing a comprehensive governance structure, a robust economic model as well as advanced IoT integration.	', {"vechain.org":"https://www.vechain.org/"}),
        'MKR': new ERC20Handler(engine, 'MKR', 'Maker', 'mkr', '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2', 18, 'Maker is a Decentralized Autonomous Organization that creates and insures the dai stablecoin on the Ethereum blockchain	', {"makerdao.com":"https://makerdao.com/"}),
        'OMG': new ERC20Handler(engine, 'OMG', 'OmiseGO', 'omg', '0xd26114cd6EE289AccF82350c8d8487fedB8A0C07', 18, 'OmiseGO (OMG) is a public Ethereum-based financial technology for use in mainstream digital wallets', {"omisego.network":"https://omisego.network/"}),
        'ZRX': new ERC20Handler(engine, 'ZRX', '0x', 'zrx', '0xe41d2489571d322189246dafa5ebde1f4699f498', 18, 'The Protocol for Trading Tokens', {"0xproject.com":"https://0xproject.com/"}),
        'TUSD': new ERC20Handler(engine, 'TUSD', 'TrueUSD', 'tusd', '0x8dd5fbce2f6a956c3022ba3663759011dd51e73e', 18, 'The TrustToken Platform aims to be the bridge between blockchains and real-world assets.', {"trusttoken.com":"https://www.trusttoken.com/"}),
        'BAT': new ERC20Handler(engine, 'BAT', 'Basic Attention Token', 'bat', '0x0d8775f648430679a709e98d2b0cb6250d2887ef', 18, 'The Basic Attention Token is the new token for the digital advertising industry.', {"basicattentiontoken.org":"https://basicattentiontoken.org/"}),
        'PAX': new ERC20Handler(engine, 'PAX', 'Paxos Standard', 'pax', '0x8e870d67f660d95d5be530380d0ec0bd388289e1', 18, 'Paxos Standard is regulated crypto asset. It is fully collateralized 1:1 by the U.S. dollar, approved and regulated by the NYDFS, and enables instantaneous transactions.', {"paxos.com/standard":"https://www.paxos.com/standard/"}),
        'USDC': new ERC20Handler(engine, 'USDC', 'USD Coin', 'usdc', '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', 6, 'USDC is a fully collateralized US Dollar stablecoin developed by CENTRE, the open source project and membership consortium, with Circle being the first of several forthcoming issuers.', {"centre.io":"https://www.centre.io/"}),
        'ZIL': new ERC20Handler(engine, 'ZIL', 'Zilliqa', 'zil', '0x05f4a42e251f2d52b8ed15e9fedaacfcef1fad27', 12, 'Zilliqa is a high-throughput public blockchain platform - designed to scale to thousands ​of transactions per second.', {"zilliqa.com":"https://www.zilliqa.com/"}),
        'AE': new ERC20Handler(engine, 'AE', 'Aeternity', 'ae', '0x5ca9a71b1d01849c0a95490cc00559717fcf0d1d', 18, 'Scalable smart contracts interfacing with real world data.', {"aeternity.com":"https://www.aeternity.com/"}),
        'ICX': new ERC20Handler(engine, 'ICX', 'ICON', 'icx', '0xb5a5f22694352c15b00323844ad545abb2b11028', 18, 'The ICON Network is comprised of various institutions ranging from: financial institutions, insurance companies, hospitals, universities and more.', {"icon.foundation":"https://icon.foundation/"}),
        'AOA': new ERC20Handler(engine, 'AOA', 'Aurora', 'aoa', '0x9ab165d795019b6d8b3e971dda91071421305e5a', 18, 'Aurora Chain offers intelligent application isolation and enables multi-chain parallel expansion to create an extremely high TPS with security maintain.', {"aurorachain.io":"https://www.aurorachain.io/"}),
        'LINK': new ERC20Handler(engine, 'LINK', 'ChainLink Token', 'link', '0x514910771af9ca656af840dff83e8264ecf986ca', 18, 'The LINK Network provides smart contracts with data, bank payments and access to APIs.', {"link.smartcontract.com":"https://link.smartcontract.com/"}),
        'NPXS': new ERC20Handler(engine, 'NPXS', 'Pundi X', 'npxs', '0xa15c7ebe1f07caf6bff097d8a589fb8ac49ae5b3', 18, '', {"pundix.com":"https://pundix.com/"}),
        'BTM': new ERC20Handler(engine, 'BTM', 'Bytom', 'btm', '0xcb97e65f07da24d46bcdd078ebebd7c6e6e3d750', 8, 'Transfer assets from atomic world to byteworld', {"bytom.io":"https://bytom.io/"}),
        'GNT': new ERC20Handler(engine, 'GNT', 'Golem', 'gnt', '0xa74476443119A942dE498590Fe1f2454d7D4aC0d', 18, 'Golem is going to create the first decentralized global market for computing power	', {"golem.network":"https://golem.network/"}),
        'REP': new ERC20Handler(engine, 'REP', 'Augur', 'rep', '0x1985365e9f78359a9B6AD760e32412f4a445E862', 18, 'Augur combines the magic of prediction markets with the power of a decentralized network to create a stunningly accurate forecasting tool', {"augur.net":"https://www.augur.net/"}),
        'PPT': new ERC20Handler(engine, 'PPT', 'Populous', 'ppt', '0xd4fa1460f537bb9085d22c7bccb5dd450ef28e3a', 8, 'Aims to rebuild invoice financing block by block, for invoice buyers and sellers.	', {"populous.world":"https://populous.world/"}),
        'QASH': new ERC20Handler(engine, 'QASH', 'QASH', 'qash', '0x618e75ac90b12c6049ba3b27f5d5f8651b0037f6', 6, 'We envision QASH to be the preferred payment token for financial services, like the Bitcoin for financial services. As more financial institutions, fintech startups and partners adopt QASH as a method of payment, the utility of QASH will scale, fueling the Fintech revolution.	', {"liquid.plus":"https://liquid.plus/"}),
        'MCO': new ERC20Handler(engine, 'MCO', 'Crypto.com', 'mco', '0xb63b606ac810a52cca15e44bb630fd42d8d1d83d', 8, 'Crypto.com, the pioneering payments and cryptocurrency platform, seeks to accelerate the world’s transition to cryptocurrency.	', {"coinmarketcap.com":"https://coinmarketcap.com/currencies/mco/","crypto.com":"https://crypto.com"}),
        'HOT': new ERC20Handler(engine, 'HOT', 'HoloToken', 'hot', '0x6c6ee5e31d828de241282b9606c8e98ea48526e2', 18, 'Holo is a decentralized hosting platform and a new breed of asset-backed, mutual-credit cryptocurrency based on Holochain. Holochain is a massively scalable, agent-centric post-blockchain development framework for distributed applications.	', {"coinmarketcap.com":"https://coinmarketcap.com/currencies/holo/","holo.host":"https://holo.host/"}),
        'GUSD': new ERC20Handler(engine, 'GUSD', 'Gemini dollar', 'gusd', '0x056fd409e1d7a124bd7017459dfea2f387b6d5cd', 2, 'Gemini dollar combines the creditworthiness and price stability of the U.S. dollar with blockchain technology and the oversight of U.S. regulators.	', {"coinmarketcap.com":"https://coinmarketcap.com/currencies/gemini-dollar/","gemini.com/dollar":"https://gemini.com/dollar/"}),
        'DAI': new ERC20Handler(engine, 'DAI', 'Dai', 'dai', '0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359', 18, '', {"coinmarketcap.com":"https://coinmarketcap.com/currencies/dai/","makerdao.com":"https://makerdao.com/"}),
        'WAX': new ERC20Handler(engine, 'WAX', 'WAX Token', 'wax', '0x39bb259f66e1c59d5abef88375979b4d20d98022', 8, 'Global Decentralized Marketplace for Virtual Assets.', {"coinmarketcap.com":"https://coinmarketcap.com/currencies/wax/","wax.io":"https://wax.io/"}),
        'SNT': new ERC20Handler(engine, 'SNT', 'Status', 'snt', '0x744d70fdbe2ba4cf95131626614a1763df805b9e', 18, 'Status is an open source messaging platform and mobile browser to interact with decentralized applications that run on the Ethereum Network.	', {"coinmarketcap.com":"https://coinmarketcap.com/currencies/status/","status.im":"https://status.im/"}),
        'MANA': new ERC20Handler(engine, 'MANA', 'Decentraland', 'mana', '0x0f5d2fb29fb7d3cfee444a200298f468908cc942', 18, 'Decentraland is a virtual reality platform powered by the Ethereum blockchain. Users can create, experience, and monetize content and applications	', {"coinmarketcap.com":"https://coinmarketcap.com/currencies/decentraland/","decentraland.org":"https://decentraland.org/"}),
        'HT': new ERC20Handler(engine, 'HT', 'Huobi Token', 'ht', '0x6f259637dcd74c767781e37bc6133cd6a68aa161', 18, 'Huobi Global is a world-leading cryptocurrency financial services group.', {"coinmarketcap.com":"https://coinmarketcap.com/currencies/huobi-token/","huobipro.com":"https://www.huobipro.com/"}),
        'REV': new ERC20Handler(engine, 'REV', 'Revain', 'rev', '0x2ef52Ed7De8c5ce03a4eF0efbe9B7450F2D7Edc9', 6, 'Revain is blockchain-based review platform for crypto community. Since 2018 we accumulated the biggest number of user feedback on crypto on the Internet.', {"coinmarketcap.com":"https://coinmarketcap.com/currencies/revain/","revain.org":"https://revain.org/"}),
        'IOST': new ERC20Handler(engine, 'IOST', 'IOSToken', 'iost', '0xfa1a856cfa3409cfa145fa4e20eb270df3eb21ab', 18, 'A Secure & Scalable Blockchain for Smart Services	', {"coinmarketcap.com":"https://coinmarketcap.com/currencies/iostoken/","iost.io":"https://iost.io/"}),
        'ODE': new ERC20Handler(engine, 'ODE', 'ODEM', 'ode', '0xbf52f2ab39e26e0951d2a02b49b7702abe30406a', 18, 'Unlocking human potential. Powering your education and certifications on the blockchain	', {"coinmarketcap.com":"https://coinmarketcap.com/currencies/odem/","odem.io":"https://odem.io/"}),
        'MGO': new ERC20Handler(engine, 'MGO', 'MobileGo', 'mgo', '0x40395044Ac3c0C57051906dA938B54BD6557F212', 8, 'A dedicated token to bring eSports to everyone.	', {"coinmarketcap.com":"https://coinmarketcap.com/currencies/mobilego/","mobilego.io":"https://mobilego.io/"}),
        'NEXO': new ERC20Handler(engine, 'NEXO', 'Nexo', 'nexo', '0xb62132e35a6c13ee1ee0f84dc5d40bad8d815206', 18, 'Instant Crypto-backed Loans', {"coinmarketcap.com":"https://coinmarketcap.com/currencies/nexo/","nexo.io":"https://nexo.io/"}),
        'WTC': new ERC20Handler(engine, 'WTC', 'Walton', 'wtc', '0xb7cb1c96db6b22b0d3d9536e0108d062bd488f74', 18, 'Value Internet of Things (VIoT) constructs a perfect commercial ecosystem via the integration of the real world and the blockchain.	', {"coinmarketcap.com":"https://coinmarketcap.com/currencies/waltonchain/","waltonchain.org":"http://www.waltonchain.org/"}),
        'PRL': new ERC20Handler(engine, 'PRL', 'Oyster Pearl', 'prl', '0x1844b21593262668b7248d0f57a220caaba46ab9', 18, 'Platform for website monetization and distributed storage, built on IOTA Tangle and Ethereum.', {"coinmarketcap.com":"https://coinmarketcap.com/currencies/oyster/","oysterprotocol.com":"https://oysterprotocol.com/"}),
        'INB': new ERC20Handler(engine, 'INB', 'Insight Chain', 'inb', '0x17aa18a4b64a55abed7fa543f2ba4e91f2dce482', 18, 'Insight Chain is an EOS-based data ecosystem on the blockchain, works on building Wall Street-like financial order in the blockchain domain.	', {"coinmarketcap.com":"https://coinmarketcap.com/currencies/insight-chain/","insightchain.io":"http://www.insightchain.io/"}),
        'POLY': new ERC20Handler(engine, 'POLY', 'Polymath', 'poly', '0x9992ec3cf6a55b00978cddf2b27bc6882d88d1ec', 18, 'Polymath aims to enable securities to migrate to the blockchain.	', {"coinmarketcap.com":"https://coinmarketcap.com/currencies/polymath-network/","polymath.network":"https://www.polymath.network/"}),
        'THETA': new ERC20Handler(engine, 'THETA', 'Theta Token', 'theta', '0x3883f5e181fccaf8410fa61e12b59bad963fb645', 18, 'A decentralized peer-to-peer network that aims to offer improved video delivery at lower costs.	', {"coinmarketcap.com":"https://coinmarketcap.com/currencies/theta-token/","thetatoken.org":"https://www.thetatoken.org/"}),
        'AION': new ERC20Handler(engine, 'AION', 'AION', 'aion', '0x4CEdA7906a5Ed2179785Cd3A40A69ee8bc99C466', 8, 'A multi-tier blockchain system designed to address unsolved questions of scalability, privacy, and interoperability in blockchain networks	', {"coinmarketcap.com":"https://coinmarketcap.com/currencies/aion/","aion.network":"https://aion.network/"}),
        'BNT': new ERC20Handler(engine, 'BNT', 'Bancor', 'bnt', '0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c', 18, 'Bancor Protocol is a standard for a new generation of cryptocurrencies called Smart Tokens	', {"coinmarketcap.com":"https://coinmarketcap.com/currencies/bancor/","bancor.network":"https://bancor.network/"}),
        'LKY': new ERC20Handler(engine, 'LKY', 'Linkey Token', 'lky', '0x49bd2da75b1f7af1e4dfd6b1125fecde59dbec58', 18, 'A platform to connect digital assets to real community.	', {"coinmarketcap.com":"https://coinmarketcap.com/currencies/linkey/","linkey.info":"https://www.linkey.info/"}),
        'ELF': new ERC20Handler(engine, 'ELF', 'aelf', 'elf', '0xbf2179859fc6d5bee9bf9158632dc51678a4100e', 18, 'elf is a decentralized self-evolving cloud computing blockchain network that aims to provide a high performance platform for commercial adoption of blockchain.	', {"coinmarketcap.com":"https://coinmarketcap.com/currencies/aelf/","aelf.io":"http://aelf.io/"}),
        'QKC': new ERC20Handler(engine, 'QKC', 'QuarkChain', 'qkc', '0xea26c4ac16d4a5a106820bc8aee85fd0b7b2b664', 18, 'A High-Capacity Peer-to-Peer Transactional System	', {"coinmarketcap.com":"https://coinmarketcap.com/currencies/quarkchain/","quarkchain.io":"https://quarkchain.io/"}),
        'LRC': new ERC20Handler(engine, 'LRC', 'Loopring', 'lrc', '0xef68e7c694f40c8202821edf525de3782458639f', 18, 'Loopring is not only a protocol but also a decentralized automated execution system that trades across the crypto-token exchanges.	', {"coinmarketcap.com":"https://coinmarketcap.com/currencies/loopring/","loopring.org":"https://loopring.org/"}),
        'PAY': new ERC20Handler(engine, 'PAY', 'TenX', 'pay', '0xB97048628DB6B661D4C2aA833e95Dbe1A905B280', 18, 'TenX connects your blockchain assets for everyday use. TenX’s debit card and banking licence will allow us to be a hub for the blockchain ecosystem to connect for real-world use cases.', {"tenx.tech":"http://www.tenx.tech/"}),
        'CFT': new ERC20Handler(engine, 'CFT', 'Coffee Token', 'cft', '0x5bf2390a68ab7db7d27ae81894c4e22e669af236', 18, 'Coffee Token is an utility token for Coffee Wallet Project.', {"tokens.coffee":"https://tokens.coffee/"}),
        'KLOWN': new ERC20Handler(engine, 'KLOWN', 'Ether Clown', 'klown', '0xc97a5cdf41bafd51c8dbe82270097e704d748b92', 7, 'Ether Clown is a social experiment type of a token with an RNG (Random Number Generated) burning mechanism on every transaction from 1.5% to 3.5% when people transfer token(s) between two addresses.', {"etherclown.com":"https://etherclown.com/"}),
        'FRECNX': new ERC20Handler(engine, 'FRECNX', 'FreldoCoinX', 'frecnx', '0xd8b8e1eca89da014e67fdbc2014eaa8e171079bf', 18, 'Freldo (FRECNX) – fully functional global network linking service providers and clients to eliminate fraud reviews and provide lower prices for customers. Our goal is to make a revolution in the services market by implementing blockchain technology to the business-client relationship, providing small business with the tools of large networks and companies. FRECNX is utility token and can be used as a means of payment within the Freldo business platform. Freldo Inc. registered in Toronto, Canada in 2011', {"ico.freldo.com":"https://ico.freldo.com/"}),
        'NOW': new ERC20Handler(engine, 'NOW', 'ChangeNOW', 'now', '0xe9a95d175a5f4c9369f3b74222402eb1b837693b', 8, 'NOW Token is the first token made by an instant exchange platform. NOW Tokens serve as an internal currency on NOW products. As ChangeNOW grows extremely fast, the tokens will be in a great demand.', {"changenow.io":"https://changenow.io/"}),
        'USDT': new ERC20Handler(engine, 'USDT', 'Tether USD', 'usdt', '0xdac17f958d2ee523a2206206994597c13d831ec7', 6, '', {"tether.to":"https://tether.to/"}),
        'LEO': new ERC20Handler(engine, 'LEO', 'Bitfinex LEO Token', 'leo', '0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3', 18, 'A utility token designed to empower the Bitfinex community and provide utility for those seeking to maximize the output and capabilities of the Bitfinex trading platform.', {"bitfinex.com":"https://www.bitfinex.com/"}),
        'WBTC': new ERC20Handler(engine, 'WBTC', 'Wrapped BTC', 'wbtc', '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599', 8, 'Wrapped Bitcoin (WBTC) is an ERC20 token backed 1:1 with Bitcoin. Completely transparent. 100% verifiable. Community led.', {"wbtc.network":"https://www.wbtc.network/"}),
        'CRO': new ERC20Handler(engine, 'CRO', 'Crypto.com Coin', 'cro', '0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b', 8, 'Pay and be paid in crypto anywhere, with any crypto, for free.', {"chain.crypto.com":"https://chain.crypto.com"}),
        'CEL': new ERC20Handler(engine, 'CEL', 'Celsius', 'cel', '0xaaaebe6fe48e54f431b0c390cfaf0b017d09d42d', 4, 'A new way to earn, borrow, and pay on the blockchain.!', {"celsius.network":"https://celsius.network/"}),
        'UNI': new ERC20Handler(engine, 'UNI', 'Uniswap', 'uni', '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984', 18, 'UNI token served as governance token for Uniswap protocol with 1 billion UNI have been minted at genesis. 60% of the UNI genesis supply is allocated to Uniswap community members and remaining for team, investors and advisors.', {"uniswap.org":"https://uniswap.org/"}),
        'SNX': new ERC20Handler(engine, 'SNX', 'Synthetix Network Token', 'snx', '0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f', 18, 'The Synthetix Network Token (SNX) is the native token of Synthetix, a synthetic asset (Synth) issuance protocol built on Ethereum. The SNX token is used as collateral to issue Synths, ERC-20 tokens that track the price of assets like Gold, Silver, Oil and Bitcoin.', {"synthetix.io":"https://www.synthetix.io/"}),    }
}

export function isOnlineCoinHanlder(toBeDetermined: BaseCoinHandler): toBeDetermined is OnlineCoinHandler {
    return ('explorerLinkAddr' in (toBeDetermined as OnlineCoinHandler));
}
