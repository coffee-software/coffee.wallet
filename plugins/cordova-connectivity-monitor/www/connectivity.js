var exec = require('cordova/exec'),
    connectivity = module.exports;

/**
 * This enum represents appfeel-connectivity plugin events
 * @const
 */
connectivity.EVENTS = {
  onReachabilityChanged : "appfeel.connectivity.onReachabilityChanged"
};

/**
 * This enum represents the observer that raised the change event.
 * @const
 */
connectivity.OBSERVER = {
  HOST: 'HOST',
  INTERNET: 'INTERNET',
  LOCALWIFI: 'LOCALWIFI'
}

/**
 * This enum represents connectivity interface. Use it to know the interface that changed his status returned by each event.
 * @const
 */
connectivity.INTERFACE = {
  DISCONNECTED: 'DISCONNECTED',
  WIFI: 'WIFI',
  WIMAX: 'WIMAX',
  ETHERNET: 'ETHERNET',
  MOBILE: 'MOBILE',
  UNDEFINED: 'UNDEFINED'
};

/**
 * Default host name for observeRemoteHostName
 * @const
 */
connectivity.DEFAULT_HOSTNAME = "www.google.com";

/**
 * Observes changes of connectivity to a given hostname.
 *
 * @param {!Object}    hostName         (Optional) Name of the host to observe. Default www.google.com
 * @param {Boolean}    stopAllObservers (Optional) Stop any existing observer. Default false
 * @param {function()} successCallback  (Optional) Callback on success
 * @param {function()} failureCallback  (Optional) Callback on fail
 */
connectivity.observeRemoteHostName = function (hostName, stopAllObservers, successCallback, failureCallback) {
  if (typeof hostName === 'function') {
    failureCallback = stopAllObservers;
    successCallback = hostName;
    hostName = connectivity.DEFAULT_HOSTNAME;
    
  } else if (typeof stopAllObservers === 'function') {
    failureCallback = successCallback;
    successCallback = stopAllObservers;
    stopAllObservers = false;
  }
  
  hostName = hostName || "http://www.google.com";
  
  if (typeof hostName === 'string' && hostName.length > 0) {
    cordova.exec(successCallback, failureCallback, 'connectivity', 'observeRemoteHostName', [{
      hostName: hostName,
      stopAllObservers: stopAllObservers
    }]);
    
  } else {
    if (typeof failureCallback === 'function') {
      failureCallback('hostName must be a non zero string.')
    }
  }
};

/**
 * Observes changes of connectivity to a given ip v4.
 *
 * @param {!Object}    ipv4             (Required) IP v4 to observe. Ex: 192.168.1.0
 * @param {Boolean}    stopAllObservers (Optional) Stop any existing observer. Default false
 * @param {function()} successCallback  (Optional) Callback on success
 * @param {function()} failureCallback  (Optional) Callback on fail
 */
connectivity.observeRemoteIPV4 = function (ipv4, stopAllObservers, successCallback, failureCallback) {
  if (typeof ipv4 === 'function') {
    failureCallback = stopAllObservers;
    successCallback = ipv4;
    ipv4 = undefined;
    
  } else if (typeof stopAllObservers === 'function') {
    failureCallback = successCallback;
    successCallback = stopAllObservers;
    stopAllObservers = false;
  }
  
  if (typeof ipv4 === 'string' && ipv4.length > 0) {
    cordova.exec(successCallback, failureCallback, 'connectivity', 'observeRemoteIP', [{
      ipv4: ipv4,
      stopAllObservers: stopAllObservers
    }]);
    
  } else {
    if (typeof failureCallback === 'function') {
      failureCallback('ipv4 must be a non zero string.')
    }
  }
};

/**
 * Observes changes of connectivity to a given ip v6.
 *
 * @param {!Object}    ipv6             (Required) IP v6 to observe. Ex: ::ffff:192.168.1.0
 * @param {Boolean}    stopAllObservers (Optional) Stop any existing observer. Default false
 * @param {function()} successCallback  (Optional) Callback on success
 * @param {function()} failureCallback  (Optional) Callback on fail
 */
connectivity.observeRemoteIPV6 = function (ipv6, stopAllObservers, successCallback, failureCallback) {
  if (typeof ipv6 === 'function') {
    failureCallback = stopAllObservers;
    successCallback = ipv6;
    ipv6 = undefined;
    
  } else if (typeof stopAllObservers === 'function') {
    failureCallback = successCallback;
    successCallback = stopAllObservers;
    stopAllObservers = false;
  }
  
  if (typeof ipv6 === 'string' && ipv6.length > 0) {
    cordova.exec(successCallback, failureCallback, 'connectivity', 'observeRemoteIP', [{
      ipv6: ipv6,
      stopAllObservers: stopAllObservers
    }]);
    
  } else {
    if (typeof failureCallback === 'function') {
      failureCallback('ipv6 must be a non zero string.')
    }
  }
};

/**
 * Observes changes of connectivity to local wifi.
 *
 * @param {Boolean}    stopAllObservers (Optional) Stop any existing observer. Default false
 * @param {function()} successCallback  (Optional) Callback on success
 * @param {function()} failureCallback  (Optional) Callback on fail
 */
connectivity.observeLocalWifi = function (stopAllObservers, successCallback, failureCallback) {
  if (typeof stopAllObservers === 'function') {
    failureCallback = successCallback;
    successCallback = stopAllObservers;
    stopAllObservers = false;
  }
  
  cordova.exec(successCallback, failureCallback, 'connectivity', 'observeLocalWifi', [{
    stopAllObservers: stopAllObservers
  }]);
};

/**
 * Observes changes of connectivity to internet connection.
 *
 * @param {Boolean}    stopAllObservers (Optional) Stop any existing observer. Default false
 * @param {function()} successCallback  (Optional) Callback on success
 * @param {function()} failureCallback  (Optional) Callback on fail
 */
connectivity.observeInternetConnection = function (stopAllObservers, successCallback, failureCallback) {
  if (typeof stopAllObservers === 'function') {
    failureCallback = successCallback;
    successCallback = stopAllObservers;
    stopAllObservers = false;
  }
  
  cordova.exec(successCallback, failureCallback, 'connectivity', 'observeInternetConnection', [{
    stopAllObservers: stopAllObservers
  }]);
};

/**
 * Stop any existing observer.
 *
 * @param {function()} successCallback  (Optional) Callback on success
 * @param {function()} failureCallback  (Optional) Callback on fail
 */
connectivity.stopAllObservers = function (successCallback, failureCallback) {
  cordova.exec(successCallback, failureCallback, 'connectivity', 'stopAllObservers', []);
};