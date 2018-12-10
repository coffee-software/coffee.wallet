'use strict'

function versionCompare(v1, v2) {
  var v1parts = v1.split('.'),
      v2parts = v2.split('.');

  v1parts = v1parts.map(Number);
  v2parts = v2parts.map(Number);

  for (var i = 0; i < 3; ++i) {
    if (v1parts[i] == v2parts[i]) {
      continue;
    } else if (v1parts[i] > v2parts[i]) {
      return 1;
    } else {
      return -1;
    }
  }
  return 0;
}

window.version = "0.8.1";
window.changelog = [
  {
   version: '0.8.0',
   date: '2018-12-08',
   changes: [
     'added: more ERC20 tokens',
     'added: recover wallet feature',
     'added: more info for new user setup',
     'fixed: lots of minor bugs',
   ]
  },
  {
    version: '0.7.0',
    date: '2018-11-18',
    changes: [
      'added: ERC20 support, added top 10 tokens',
      'added: jazzicons identicons to make addresses more user friendly',
      'fixed: ETH fees issues',
      'fixed: balances storage. this will fix all "dust" errors.',
      'fixed: lots of minor bugs',
    ]
   },
   {
    version: '0.6.0',
    date: '2018-09-28',
    changes: [
      'added: ETH support',
      'added: "send all" feature',
      'added: online key recovery tool',
      'changed: swipe menu for list items. swipe left to see portfolio actions and swipe right to see wallet actions.',
      'fixed: animation performance',
    ]
  },
  {
    version: '0.5.0',
    date: '2018-08-23',
    changes: [
      'added: BTC support',
      'added: Exchange feature, using changelly.com service',
      'added: fingerprint/face authentication to confirm transactions',
      'added: clickable transaction links in history, links to address explorers in advanced options',
      'fixed: 429 issue when watching lot of address',
      'fixed: blank prices on startup, using cached values now',
      'fixed: validating address for offline asset',
      'fixed: fixed startup issue on older devices'
    ]
  },
  {
    version: '0.4.0',
    date: '2018-07-08',
    changes: [
      'added: LTC support',
      'added: feature to generate new wallet for offline list as pdf with QR codes.',
      'added: test ERC20 ropsten token',
      'changed: coins are ordered by total value',
      'fixed: sending coin as message to a new installation bug',
      'fixed: issues with no value coins (test tokens)',
    ]
  },
  {
    version: '0.3.0',
    date: '2018-06-21',
    changes: [
      'added: reading fees from network instead of using hardcoded ones',
      'added: indicate wallet contains unconfirmed transactions by blinking',
      'added: warning when sending unconfirmed inputs',
      'added: coinpaprica.com as optional price provider'
    ]
  },
  {
    version: '0.2.0',
    date: '2018-06-14',
    changes: [
      'added: tools tab',
      'added: send and receive coins via message feature',
      'added: scan/paste any code tool that detects coin and open given send form (or to receive coins from message)',
      'fixed: show warning when scanning different coin address when on send form.',
      'fixed: detecting proper coin on BIP72 address (so it can be used in "scan any" tool)'
    ]
  },
  {
    version: '0.1.8',
    date: '2018-05-31',
    changes: [
      'added: DOGE coin wallet support',
      'added: BIP39 support; private keys are generated from 12-word mnemonic passphrase',
      'added: BIP70 support (bitpay payments)'
    ]
  },
  {
    version: '0.1.7',
    date: '2018-04-29',
    changes: [
      'first public release',
      'basic portfolio features',
      'no wallet support'
    ]
  }
];
