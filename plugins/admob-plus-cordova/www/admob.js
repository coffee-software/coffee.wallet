'use strict';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
var NativeActions;
(function (NativeActions) {
    NativeActions["adCreate"] = "adCreate";
    NativeActions["adHide"] = "adHide";
    NativeActions["adIsLoaded"] = "adIsLoaded";
    NativeActions["adLoad"] = "adLoad";
    NativeActions["adShow"] = "adShow";
    NativeActions["bannerConfig"] = "bannerConfig";
    NativeActions["bannerHide"] = "bannerHide";
    NativeActions["bannerLoad"] = "bannerLoad";
    NativeActions["bannerShow"] = "bannerShow";
    NativeActions["configRequest"] = "configRequest";
    NativeActions["interstitialIsLoaded"] = "interstitialIsLoaded";
    NativeActions["interstitialLoad"] = "interstitialLoad";
    NativeActions["interstitialShow"] = "interstitialShow";
    NativeActions["ready"] = "ready";
    NativeActions["requestTrackingAuthorization"] = "requestTrackingAuthorization";
    NativeActions["rewardedInterstitialIsLoaded"] = "rewardedInterstitialIsLoaded";
    NativeActions["rewardedInterstitialLoad"] = "rewardedInterstitialLoad";
    NativeActions["rewardedInterstitialShow"] = "rewardedInterstitialShow";
    NativeActions["rewardedIsLoaded"] = "rewardedIsLoaded";
    NativeActions["rewardedLoad"] = "rewardedLoad";
    NativeActions["rewardedShow"] = "rewardedShow";
    NativeActions["setAppMuted"] = "setAppMuted";
    NativeActions["setAppVolume"] = "setAppVolume";
    NativeActions["start"] = "start";
})(NativeActions || (NativeActions = {}));
var Events;
(function (Events) {
    Events["adClick"] = "admob.ad.click";
    Events["adDismiss"] = "admob.ad.dismiss";
    Events["adImpression"] = "admob.ad.impression";
    Events["adLoad"] = "admob.ad.load";
    Events["adLoadFail"] = "admob.ad.loadfail";
    Events["adReward"] = "admob.ad.reward";
    Events["adShow"] = "admob.ad.show";
    Events["adShowFail"] = "admob.ad.showfail";
    Events["bannerClick"] = "admob.banner.click";
    Events["bannerClose"] = "admob.banner.close";
    Events["bannerImpression"] = "admob.banner.impression";
    Events["bannerLoad"] = "admob.banner.load";
    Events["bannerLoadFail"] = "admob.banner.loadfail";
    Events["bannerOpen"] = "admob.banner.open";
    Events["bannerSize"] = "admob.banner.size";
    Events["bannerSizeChange"] = "admob.banner.sizechange";
    Events["interstitialDismiss"] = "admob.interstitial.dismiss";
    Events["interstitialImpression"] = "admob.interstitial.impression";
    Events["interstitialLoad"] = "admob.interstitial.load";
    Events["interstitialLoadFail"] = "admob.interstitial.loadfail";
    Events["interstitialShow"] = "admob.interstitial.show";
    Events["interstitialShowFail"] = "admob.interstitial.showfail";
    Events["ready"] = "admob.ready";
    Events["rewardedDismiss"] = "admob.rewarded.dismiss";
    Events["rewardedImpression"] = "admob.rewarded.impression";
    Events["rewardedInterstitialDismiss"] = "admob.rewardedi.dismiss";
    Events["rewardedInterstitialImpression"] = "admob.rewardedi.impression";
    Events["rewardedInterstitialLoad"] = "admob.rewardedi.load";
    Events["rewardedInterstitialLoadFail"] = "admob.rewardedi.loadfail";
    Events["rewardedInterstitialReward"] = "admob.rewardedi.reward";
    Events["rewardedInterstitialShow"] = "admob.rewardedi.show";
    Events["rewardedInterstitialShowFail"] = "admob.rewardedi.showfail";
    Events["rewardedLoad"] = "admob.rewarded.load";
    Events["rewardedLoadFail"] = "admob.rewarded.loadfail";
    Events["rewardedReward"] = "admob.rewarded.reward";
    Events["rewardedShow"] = "admob.rewarded.show";
    Events["rewardedShowFail"] = "admob.rewarded.showfail";
})(Events || (Events = {}));
var AdSizeType;
(function (AdSizeType) {
    AdSizeType[AdSizeType["BANNER"] = 0] = "BANNER";
    AdSizeType[AdSizeType["LARGE_BANNER"] = 1] = "LARGE_BANNER";
    AdSizeType[AdSizeType["MEDIUM_RECTANGLE"] = 2] = "MEDIUM_RECTANGLE";
    AdSizeType[AdSizeType["FULL_BANNER"] = 3] = "FULL_BANNER";
    AdSizeType[AdSizeType["LEADERBOARD"] = 4] = "LEADERBOARD";
    AdSizeType[AdSizeType["SMART_BANNER"] = 5] = "SMART_BANNER";
})(AdSizeType || (AdSizeType = {}));
var execAsync = function (action, args) {
    return new Promise(function (resolve, reject) {
        cordova.exec(resolve, reject, 'AdMob', action, args);
    });
};
function fireDocumentEvent(eventName, data) {
    if (data === void 0) { data = undefined; }
    // @ts-expect-error
    cordova.fireDocumentEvent(eventName, data);
}

/** @internal */
var MobileAd = /** @class */ (function () {
    function MobileAd(opts) {
        var _a;
        this.opts = opts;
        this.id = (_a = opts.id) !== null && _a !== void 0 ? _a : MobileAd.nextId();
        MobileAd.allAds[this.id] = this;
    }
    MobileAd.getAdById = function (id) {
        return this.allAds[id];
    };
    MobileAd.nextId = function () {
        MobileAd.idCounter += 1;
        return MobileAd.idCounter;
    };
    Object.defineProperty(MobileAd.prototype, "adUnitId", {
        get: function () {
            return this.opts.adUnitId;
        },
        enumerable: false,
        configurable: true
    });
    MobileAd.type = '';
    MobileAd.allAds = {};
    MobileAd.idCounter = 0;
    return MobileAd;
}());
var MaxAdContentRating;
(function (MaxAdContentRating) {
    MaxAdContentRating["G"] = "G";
    MaxAdContentRating["MA"] = "MA";
    MaxAdContentRating["PG"] = "PG";
    MaxAdContentRating["T"] = "T";
    MaxAdContentRating["UNSPECIFIED"] = "";
})(MaxAdContentRating || (MaxAdContentRating = {}));
var TrackingAuthorizationStatus;
(function (TrackingAuthorizationStatus) {
    TrackingAuthorizationStatus[TrackingAuthorizationStatus["notDetermined"] = 0] = "notDetermined";
    TrackingAuthorizationStatus[TrackingAuthorizationStatus["restricted"] = 1] = "restricted";
    TrackingAuthorizationStatus[TrackingAuthorizationStatus["denied"] = 2] = "denied";
    TrackingAuthorizationStatus[TrackingAuthorizationStatus["authorized"] = 3] = "authorized";
})(TrackingAuthorizationStatus || (TrackingAuthorizationStatus = {}));

var GenericAd = /** @class */ (function (_super) {
    __extends(GenericAd, _super);
    function GenericAd(opts) {
        var _this = _super.call(this, opts) || this;
        _this._init = execAsync(NativeActions.adCreate, [
            __assign(__assign({}, opts), { id: _this.id, cls: _this.constructor.name }),
        ]).then(function () {
            _this._init = null;
        });
        return _this;
    }
    GenericAd.prototype.isLoaded = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.init()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, execAsync(NativeActions.adIsLoaded, [
                                { id: this.id },
                            ])];
                }
            });
        });
    };
    GenericAd.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.init()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, execAsync(NativeActions.adLoad, [{ id: this.id }])];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GenericAd.prototype.show = function (opts) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.init()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, execAsync(NativeActions.adShow, [
                                __assign(__assign({}, opts), { id: this.id }),
                            ])];
                }
            });
        });
    };
    GenericAd.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this._init !== null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._init];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    return GenericAd;
}(MobileAd));
var AppOpenAd = /** @class */ (function (_super) {
    __extends(AppOpenAd, _super);
    function AppOpenAd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AppOpenAd;
}(GenericAd));

var colorToRGBA = (function () {
    var canvas = document.createElement('canvas');
    canvas.width = canvas.height = 1;
    var ctx = canvas.getContext('2d');
    if (!ctx)
        return function () { return undefined; };
    return function (col) {
        ctx.clearRect(0, 0, 1, 1);
        // In order to detect invalid values,
        // we can't rely on col being in the same format as what fillStyle is computed as,
        // but we can ask it to implicitly compute a normalized value twice and compare.
        ctx.fillStyle = '#000';
        ctx.fillStyle = col;
        var computed = ctx.fillStyle;
        ctx.fillStyle = '#fff';
        ctx.fillStyle = col;
        if (computed !== ctx.fillStyle) {
            return; // invalid color
        }
        ctx.fillRect(0, 0, 1, 1);
        var data = ctx.getImageData(0, 0, 1, 1).data;
        return { r: data[0], g: data[1], b: data[2], a: data[3] };
    };
})();
var BannerAd = /** @class */ (function (_super) {
    __extends(BannerAd, _super);
    function BannerAd(opts) {
        var _this = _super.call(this, __assign({ position: 'bottom', size: AdSizeType.SMART_BANNER }, opts)) || this;
        _this._loaded = false;
        return _this;
    }
    BannerAd.config = function (opts) {
        if (cordova.platformId === "ios" /* ios */) {
            var bgColor = opts.backgroundColor;
            return execAsync(NativeActions.bannerConfig, [
                __assign(__assign({}, opts), { backgroundColor: bgColor ? colorToRGBA(bgColor) : bgColor }),
            ]);
        }
        return false;
    };
    BannerAd.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, execAsync(NativeActions.bannerLoad, [
                            __assign(__assign({}, this.opts), { id: this.id }),
                        ])];
                    case 1:
                        result = _a.sent();
                        this._loaded = true;
                        return [2 /*return*/, result];
                }
            });
        });
    };
    BannerAd.prototype.show = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this._loaded) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.load()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/, execAsync(NativeActions.bannerShow, [{ id: this.id }])];
                }
            });
        });
    };
    BannerAd.prototype.hide = function () {
        return execAsync(NativeActions.bannerHide, [{ id: this.id }]);
    };
    return BannerAd;
}(MobileAd));

var InterstitialAd = /** @class */ (function (_super) {
    __extends(InterstitialAd, _super);
    function InterstitialAd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InterstitialAd.prototype.isLoaded = function () {
        return execAsync(NativeActions.interstitialIsLoaded, [
            { id: this.id },
        ]);
    };
    InterstitialAd.prototype.load = function () {
        return execAsync(NativeActions.interstitialLoad, [
            __assign(__assign({}, this.opts), { id: this.id }),
        ]);
    };
    InterstitialAd.prototype.show = function () {
        return execAsync(NativeActions.interstitialShow, [
            { id: this.id },
        ]);
    };
    return InterstitialAd;
}(MobileAd));

var NativeAd = /** @class */ (function (_super) {
    __extends(NativeAd, _super);
    function NativeAd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NativeAd.prototype.hide = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, execAsync(NativeActions.adHide, [{ id: this.id }])];
            });
        });
    };
    return NativeAd;
}(GenericAd));

var RewardedAd = /** @class */ (function (_super) {
    __extends(RewardedAd, _super);
    function RewardedAd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RewardedAd.prototype.isLoaded = function () {
        return execAsync(NativeActions.rewardedIsLoaded, [{ id: this.id }]);
    };
    RewardedAd.prototype.load = function () {
        return execAsync(NativeActions.rewardedLoad, [
            __assign(__assign({}, this.opts), { id: this.id }),
        ]);
    };
    RewardedAd.prototype.show = function () {
        return execAsync(NativeActions.rewardedShow, [{ id: this.id }]);
    };
    return RewardedAd;
}(MobileAd));

var RewardedInterstitialAd = /** @class */ (function (_super) {
    __extends(RewardedInterstitialAd, _super);
    function RewardedInterstitialAd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RewardedInterstitialAd.prototype.isLoaded = function () {
        return execAsync(NativeActions.rewardedInterstitialIsLoaded, [
            { id: this.id },
        ]);
    };
    RewardedInterstitialAd.prototype.load = function () {
        return execAsync(NativeActions.rewardedInterstitialLoad, [
            __assign(__assign({}, this.opts), { id: this.id }),
        ]);
    };
    RewardedInterstitialAd.prototype.show = function () {
        return execAsync(NativeActions.rewardedInterstitialShow, [{ id: this.id }]);
    };
    return RewardedInterstitialAd;
}(MobileAd));

var AdMob = /** @class */ (function () {
    function AdMob() {
        this.AppOpenAd = AppOpenAd;
        this.BannerAd = BannerAd;
        this.InterstitialAd = InterstitialAd;
        this.NativeAd = NativeAd;
        this.RewardedAd = RewardedAd;
        this.RewardedInterstitialAd = RewardedInterstitialAd;
        this.Events = Events;
        this.TrackingAuthorizationStatus = TrackingAuthorizationStatus;
        document.addEventListener('deviceready', function () {
            cordova.exec(function (event) {
                var data = event.data;
                if (data && data.adId) {
                    data.ad = MobileAd.getAdById(data.adId);
                }
                fireDocumentEvent(event.type, data);
            }, console.error, 'AdMob', NativeActions.ready);
        }, false);
    }
    AdMob.prototype.configRequest = function (requestConfig) {
        return execAsync(NativeActions.configRequest, [requestConfig]);
    };
    AdMob.prototype.setAppMuted = function (value) {
        return execAsync(NativeActions.setAppMuted, [value]);
    };
    AdMob.prototype.setAppVolume = function (value) {
        return execAsync(NativeActions.setAppVolume, [value]);
    };
    AdMob.prototype.start = function () {
        return execAsync(NativeActions.start);
    };
    AdMob.prototype.requestTrackingAuthorization = function () {
        return __awaiter(this, void 0, void 0, function () {
            var n;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(cordova.platformId === "ios" /* ios */)) return [3 /*break*/, 2];
                        return [4 /*yield*/, execAsync(NativeActions.requestTrackingAuthorization)];
                    case 1:
                        n = _a.sent();
                        if (n !== false) {
                            return [2 /*return*/, TrackingAuthorizationStatus[TrackingAuthorizationStatus[n]]];
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/, false];
                }
            });
        });
    };
    return AdMob;
}());

var admob = new AdMob();

module.exports = admob;
