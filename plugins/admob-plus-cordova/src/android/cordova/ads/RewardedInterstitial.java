package admob.plus.cordova.ads;

import androidx.annotation.NonNull;

import com.google.android.gms.ads.AdError;
import com.google.android.gms.ads.AdRequest;
import com.google.android.gms.ads.FullScreenContentCallback;
import com.google.android.gms.ads.LoadAdError;
import com.google.android.gms.ads.rewarded.ServerSideVerificationOptions;
import com.google.android.gms.ads.rewardedinterstitial.RewardedInterstitialAd;
import com.google.android.gms.ads.rewardedinterstitial.RewardedInterstitialAdLoadCallback;

import admob.plus.cordova.ExecuteContext;
import admob.plus.cordova.Generated.Events;

public class RewardedInterstitial extends AdBase implements IAdIsLoaded, IAdLoad, IAdShow {
    private RewardedInterstitialAd mAd = null;

    public RewardedInterstitial(ExecuteContext ctx) {
        super(ctx);
    }

    @Override
    public void onDestroy() {
        clear();

        super.onDestroy();
    }

    public void load(ExecuteContext ctx) {
        AdRequest adRequest = ctx.optAdRequest();

        clear();

        RewardedInterstitialAd.load(ctx.getActivity(), adUnitId, adRequest, new RewardedInterstitialAdLoadCallback() {
            @Override
            public void onAdFailedToLoad(@NonNull LoadAdError loadAdError) {
                mAd = null;
                emit(Events.REWARDED_INTERSTITIAL_LOAD_FAIL, loadAdError);
                ctx.error(loadAdError.toString());
            }

            @Override
            public void onAdLoaded(@NonNull RewardedInterstitialAd rewardedAd) {
                mAd = rewardedAd;
                ServerSideVerificationOptions ssv = ctx.optServerSideVerificationOptions();
                if (ssv != null) {
                    mAd.setServerSideVerificationOptions(ssv);
                }
                mAd.setFullScreenContentCallback(new FullScreenContentCallback() {
                    @Override
                    public void onAdDismissedFullScreenContent() {
                        emit(Events.REWARDED_INTERSTITIAL_DISMISS);
                    }

                    @Override
                    public void onAdFailedToShowFullScreenContent(AdError adError) {
                        emit(Events.REWARDED_INTERSTITIAL_SHOW_FAIL, adError);
                    }

                    @Override
                    public void onAdShowedFullScreenContent() {
                        mAd = null;
                        emit(Events.REWARDED_INTERSTITIAL_SHOW);
                    }

                    @Override
                    public void onAdImpression() {
                        emit(Events.REWARDED_INTERSTITIAL_IMPRESSION);
                    }
                });

                emit(Events.REWARDED_INTERSTITIAL_LOAD);
                ctx.success();
            }
        });
    }

    public boolean isLoaded() {
        return mAd != null;
    }

    public void show(ExecuteContext ctx) {
        if (isLoaded()) {
            mAd.show(ctx.getActivity(), rewardItem -> {
                emit(Events.REWARDED_INTERSTITIAL_REWARD, rewardItem);
            });
            ctx.success();
        } else {
            ctx.error("Ad is not loaded");
        }
    }

    private void clear() {
        if (mAd != null) {
            mAd = null;
        }
    }
}
