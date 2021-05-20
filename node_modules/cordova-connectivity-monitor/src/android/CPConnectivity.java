/*
 CPConnectivity.java
 Copyright 2014 AppFeel. All rights reserved.
 http://www.appfeel.com
 
 Connectivity Monitor Cordova Plugin (com.connectivity.monitor)
 
 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to
 deal in the Software without restriction, including without limitation the
 rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:
 
 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.
 
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */

package com.appfeel.cordova.connectivity;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.util.Log;

import com.appfeel.cordova.connectivity.Connectivity.IConnectivityChange;

public class CPConnectivity extends CordovaPlugin implements IConnectivityChange {
  public static final String CONNECTIVITY_LOGTAG = "AppFeel-Connectivity";

  /* Cordova Actions. */
  private static final String ACTION_OBSERVE_REMOTE_HOSTNAME = "observeRemoteHostName";
  private static final String ACTION_OBSERVE_REMOTE_IP = "observeRemoteIP";
  private static final String ACTION_OBSERVE_LOCAL_WIFI = "observeLocalWifi";
  private static final String ACTION_OBSERVE_INTERNET_CONNECTION = "observeInternetConnection";
  private static final String ACTION_STOP_ALL_OBSERVERS = "stopAllObservers";

  /* options */
  private static final String EVENT_REACHABILITY_CHANGE = "connectivity.events.onReachabilityChanged";
  private static final String DEFAULT_HOST_NAME = "www.google.com";
  private static final String OPT_HOST_NAME = "hostName";
  private static final String OPT_IPV4 = "ipv4";
  private static final String OPT_IPV6 = "ipv6";
  private static final String OPT_STOP_ALL_OBSERVERS = "stopAllObservers";

  // private ComponentName connectivityBR;
  // private PackageManager pm;

  private Connectivity connectivity;

  @Override
  public void initialize(CordovaInterface cordova, CordovaWebView webView) {
    super.initialize(cordova, webView);
    connectivity = Connectivity.GetInstance(cordova.getActivity(), this);

    // connectivityBR = new ComponentName(cordova.getActivity().getBaseContext(), ConnectivityBR.class);
    // pm = cordova.getActivity().getBaseContext().getPackageManager();
  }

  /**
   * Executes the request.
   * 
   * This method is called from the WebView thread.
   * 
   * To do a non-trivial amount of work, use: cordova.getThreadPool().execute(runnable);
   * 
   * To run on the UI thread, use: cordova.getActivity().runOnUiThread(runnable);
   * 
   * @param action The action to execute.
   * @param args The exec() arguments.
   * @param callbackContext The callback context used when calling back into JavaScript.
   * @return Whether the action was valid.
   */
  @Override
  public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
    PluginResult result = null;

    if (ACTION_OBSERVE_REMOTE_HOSTNAME.equals(action)) {
      JSONObject options = args.optJSONObject(0);
      result = executeObserveRemoteHostName(options, callbackContext);

    } else if (ACTION_OBSERVE_REMOTE_IP.equals(action)) {
      JSONObject options = args.optJSONObject(0);
      result = executeObserveRemoteIp(options, callbackContext);

    } else if (ACTION_OBSERVE_LOCAL_WIFI.equals(action)) {
      JSONObject options = args.optJSONObject(0);
      result = executeObserveLocalWifi(options, callbackContext);

    } else if (ACTION_OBSERVE_INTERNET_CONNECTION.equals(action)) {
      JSONObject options = args.optJSONObject(0);
      result = executeObserveInternetConnection(options, callbackContext);

    } else if (ACTION_STOP_ALL_OBSERVERS.equals(action)) {
      result = executeStopAllObservers(callbackContext);

    } else {
      Log.d(CONNECTIVITY_LOGTAG, String.format("Invalid action passed: %s", action));
      return false;
    }

    if (result != null) {
      callbackContext.sendPluginResult(result);
    }

    return true;
  }

  private PluginResult executeObserveRemoteHostName(JSONObject options, CallbackContext callbackContext) throws JSONException {
    String hostName = DEFAULT_HOST_NAME;

    if (options.has(OPT_STOP_ALL_OBSERVERS)) {
      stopAllObservers(false);
    }

    if (options.has(OPT_HOST_NAME)) {
      if (hostName != options.getString(OPT_HOST_NAME)) {
        hostName = options.getString(OPT_HOST_NAME);
      }
    }

    connectivity.observeRemoteHostName(hostName);
    callbackContext.success();

    return null;
  }

  private PluginResult executeObserveRemoteIp(JSONObject options, CallbackContext callbackContext) throws JSONException {
    boolean isParamsOk = true;
    String ip = "";

    if (options.has(OPT_STOP_ALL_OBSERVERS)) {
      stopAllObservers(false);
    }

    if (options.has(OPT_IPV4) && options.has(OPT_IPV6)) {
      isParamsOk = false;

    } else if (options.has(OPT_IPV4)) {
      ip = options.getString(OPT_IPV4);
      isParamsOk = true;

    } else if (options.has(OPT_IPV6)) {
      ip = options.getString(OPT_IPV6);
      isParamsOk = true;

    } else {
      isParamsOk = false;
    }

    if (isParamsOk) {
      connectivity.observeRemoteIp(ip);
      callbackContext.success();

    } else {
      callbackContext.error("Bad argument options.");
    }
    return null;
  }

  private PluginResult executeObserveLocalWifi(JSONObject options, CallbackContext callbackContext) {
    if (options.has(OPT_STOP_ALL_OBSERVERS)) {
      stopAllObservers(false);
    }

    // TODO
    callbackContext.error("Not yet implemented in Android");
    //callbackContext.success();
    return null;
  }

  private PluginResult executeObserveInternetConnection(JSONObject options, CallbackContext callbackContext) {
    if (options.has(OPT_STOP_ALL_OBSERVERS)) {
      stopAllObservers(false);
    }

    connectivity.observeInternetConnection();
    callbackContext.success();
    return null;
  }

  private PluginResult executeStopAllObservers(CallbackContext callbackContext) {
    stopAllObservers(true);
    callbackContext.success();
    return null;
  }

  private void stopAllObservers(boolean isDisableBR) {
    connectivity.stopAllObservers(isDisableBR);
  }

  @Override
  public void onConnectivityChanged(String interfaceType, boolean isConnected, String observer) {
    String connected = "";
    String event = "";

    if (!isConnected) {
      connected = "false";
    } else {
      connected = "true";
    }

    event = String.format("javascript:cordova.fireDocumentEvent(%s, { 'interface' : %s, 'connected' : %s, 'observer': %s });", EVENT_REACHABILITY_CHANGE, interfaceType, connected, observer);
    webView.loadUrl(event);

  }
}
