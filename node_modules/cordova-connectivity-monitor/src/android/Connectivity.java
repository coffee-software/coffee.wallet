/*
 Connectivity.java
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

import java.io.IOException;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.List;

import android.app.Activity;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.os.AsyncTask;

public class Connectivity {
  public interface IConnectivityChange {
    void onConnectivityChanged(String interfaceType, boolean isConnected, String observer);
  }

  /* options */
  private static final String DEFAULT_HOST_NAME = "www.google.com";

  // private ComponentName connectivityBR;
  // private PackageManager pm;

  private boolean isCheckingHostNameReachability = false;
  private String hostName = DEFAULT_HOST_NAME;

  private boolean isCheckingIpReachability = false;
  private String ip = "";
  private boolean isBREnabled = false;

  private List<IConnectivityChange> iConnectivityChange;
  private Activity activity;
  private static Connectivity Instance;

  private BroadcastReceiver connectivityChangeBR = new BroadcastReceiver() {
    @Override
    public void onReceive(Context context, Intent intent) {
      if (intent.getAction().equals(ConnectivityManager.CONNECTIVITY_ACTION)) {
        ConnectivityManager cm = (ConnectivityManager) context.getSystemService(Context.CONNECTIVITY_SERVICE);
        NetworkInfo activeNetwork = cm.getActiveNetworkInfo();
        int type = -1;
        boolean isConnected = false;
        String interfaceType = "";
        String observer = "connectivity.OBSERVER.INTERNET";

        if (activeNetwork != null) {
          type = activeNetwork.getType();
          isConnected = activeNetwork.isConnected();

          if (isConnected) {
            if (isCheckingHostNameReachability) {
              observer = "connectivity.OBSERVER.HOST";
              isConnected = checkReachability(hostName, 80);
            } else if (isCheckingIpReachability) {
              observer = "connectivity.OBSERVER.HOST";
              isConnected = checkReachability(ip, 80);
            }
          }

          if (type == ConnectivityManager.TYPE_ETHERNET) {
            interfaceType = "connectivity.INTERFACE.ETHERNET";
          } else if (type == ConnectivityManager.TYPE_MOBILE) {
            interfaceType = "connectivity.INTERFACE.MOBILE";
          } else if (type == ConnectivityManager.TYPE_WIFI) {
            interfaceType = "connectivity.INTERFACE.WIFI";
          } else if (type == ConnectivityManager.TYPE_WIMAX) {
            interfaceType = "connectivity.INTERFACE.WIMAX";
          } else {
            interfaceType = "connectivity.INTERFACE.UNDEFINED";
          }

        } else {
          interfaceType = "connectivity.INTERFACE.DISCONNECTED";
          isConnected = false;
          observer = "connectivity.OBSERVER.INTERNET";
        }

        synchronized (iConnectivityChange) {
          for (IConnectivityChange iCChange : iConnectivityChange) {
            iCChange.onConnectivityChanged(interfaceType, isConnected, observer);
          }
        }
      }
    }

  };

  // This is a singleton class
  private Connectivity(Activity activity) {
    this.activity = activity;
    this.iConnectivityChange = new ArrayList<IConnectivityChange>();
  }

  public static Connectivity GetInstance(Activity activity, IConnectivityChange iConnectivityChange) {
    boolean isContained = false;

    if (Instance == null) {
      Instance = new Connectivity(activity);
    }

    for (IConnectivityChange iCChange : Instance.iConnectivityChange) {
      if (iCChange.equals(iConnectivityChange)) {
        isContained = true;
        break;
      }
    }

    if (!isContained) {
      Instance.iConnectivityChange.add(iConnectivityChange);
    }

    return Instance;
  }

  public static Connectivity GetInstance(IConnectivityChange iConnectivityChange) throws NullPointerException {
    if (Instance == null) {
      throw new NullPointerException();
    } else {
      return GetInstance(Instance.activity, iConnectivityChange);
    }
  }

  public void observeRemoteHostName(String hostName) {
    this.hostName = hostName;
    isCheckingHostNameReachability = true;
    startAllObservers();
  }

  public void observeRemoteIp(String ip) {
    this.ip = ip;
    startAllObservers();
  }

  public void observeInternetConnection() {
    startAllObservers();
  }

  private void startAllObservers() {
    if (!isBREnabled) {
      IntentFilter filter = new IntentFilter();
      filter.addAction(ConnectivityManager.CONNECTIVITY_ACTION);

      // pm.setComponentEnabledSetting(connectivityBR, PackageManager.COMPONENT_ENABLED_STATE_ENABLED, PackageManager.DONT_KILL_APP);
      activity.registerReceiver(connectivityChangeBR, filter);
      isBREnabled = true;
    }
  }

  public void stopAllObservers(boolean isDisableBR) {
    isCheckingHostNameReachability = false;
    hostName = "";

    isCheckingIpReachability = false;
    ip = "";

    if (isDisableBR && isBREnabled) {
      // pm.setComponentEnabledSetting(connectivityBR, PackageManager.COMPONENT_ENABLED_STATE_DISABLED, PackageManager.DONT_KILL_APP);
      activity.unregisterReceiver(connectivityChangeBR);
      isBREnabled = false;
    }
  }

  public static class NetTask extends AsyncTask<String, Integer, Boolean> {
    @Override
    protected Boolean doInBackground(String... params) {
      boolean reachable = false;
      InetAddress addr = null;
      try {
        addr = InetAddress.getByName(params[0]);
        reachable = addr.isReachable(2000);
      } catch (UnknownHostException e) {
      } catch (IOException e) {
      }

      return reachable;
    }
  }

  private static boolean checkReachability(String address, int port) {
    boolean reachable = false;

    try {
      // Address can be hostName, IPV4 or IPV6: http://java.sun.com/javase/6/docs/api/java/net/InetAddress.html#getByName%28java.lang.String%29
      reachable = new NetTask().execute(address).get();

    } catch (Exception e) {
    }

    return reachable;
  }
}
