Cordova Connectivity Monitor
============================

Connectivity status monitoring for Cordova apps. Detects if there is WIFI/3G/EDGE/CDMA available.

---
## Platform SDK supported ##

* iOS
* Android

---
## How to use ##

To install this plugin, follow the [Command-line Interface Guide](http://cordova.apache.org/docs/en/edge/guide_cli_index.md.html#The%20Command-line%20Interface). You can use one of the following command lines:

* `cordova plugin add cordova-connectivity-monitor`
* `cordova plugin add https://github.com/appfeel/connectivity-monitor-cordova.git`

To start monitoring connectivity, place the following code in your onDeviceReady callback. In order to attach an event listener, use `document.addEventListener("deviceready", onDeviceReady, false)`.
```javascript
    
    function onDeviceReady() {
      var myHostToObserve = "www.appfeel.com";
      
      document.removeEventListener('deviceready', onDeviceReady, false);
      
      document.addEventListener(connectivity.events.onReachabilityChanged, onReachabilityChanged, false)
      connectivity.observeRemoteHostName(myHostToObserve);
    }
    
    function onReachabilityChanged(e) {
      console.log(e.interface);
      swich(e.interface) {
        case connectivity.DISCONNECTED:
          console.log('DISCONNECTED');
          break;
        case WIFI:
          console.log('WIFI');
          break;
        case WIMAX:
          console.log('WIMAX');
          break;
        case ETHERNET:
          console.log('ETHERNET');
          break;
        case MOBILE:
          console.log('MOBILE');
          break;
        case UNDEFINED:
          console.log('UNDEFINED');
          break;
      }
      
      if (e.connected) {
        console.log("Is connected");
      } else {
        console.log("Is not connected");
      }
      
      swich(e.observer) {
        case HOST:
          console.log('HOST');
          break;
        case INTERNET:
          console.log('INTERNET');
          break;
        case LOCALWIFI:
          console.log('LOCALWIFI');
          break;
      }
    }
```


---
## Javascript API ##

*Note:* All success callbacks are in the form `'function () {}'`, and all failure callbacks are in the form `'function (err) {}'` where `err` is a String explaining the error reason.


#### connectivity.observeRemoteHostName(hostName, stopAllObservers, successCallback, failureCallback);
Observes changes of connectivity to a given hostname.

```
* {!Object}    hostName         (Optional) Name of the host to observe. Default www.google.com
* {Boolean}    stopAllObservers (Optional) Stop any existing observer. Default false
* {function()} successCallback  (Optional) Callback on success
* {function()} failureCallback  (Optional) Callback on fail
```

#### connectivity.observeRemoteIPV4(ipv4, stopAllObservers, successCallback, failureCallback);
Observes changes of connectivity to a given ip v4.

* {!Object}    ipv4             (Required) IP v4 to observe. Ex: 192.168.1.0
* {Boolean}    stopAllObservers (Optional) Stop any existing observer. Default false
* {function()} successCallback  (Optional) Callback on success
* {function()} failureCallback  (Optional) Callback on fail


#### connectivity.observeRemoteIPV6(ipv6, stopAllObservers, successCallback, failureCallback);
Observes changes of connectivity to a given ip v6.

* {!Object}    ipv6             (Required) IP v6 to observe. Ex: ::ffff:192.168.1.0
* {Boolean}    stopAllObservers (Optional) Stop any existing observer. Default false
* {function()} successCallback  (Optional) Callback on success
* {function()} failureCallback  (Optional) Callback on fail


#### connectivity.observeLocalWifi(stopAllObservers, successCallback, failureCallback);
Observes changes of connectivity to local wifi. (Android: Not yet implemented)

* {Boolean}    stopAllObservers (Optional) Stop any existing observer. Default false
* {function()} successCallback  (Optional) Callback on success
* {function()} failureCallback  (Optional) Callback on fail


#### connectivity.observeInternetConnection(stopAllObservers, successCallback, failureCallback);
Observes changes of connectivity to internet connection.

* {Boolean}    stopAllObservers (Optional) Stop any existing observer. Default false
* {function()} successCallback  (Optional) Callback on success
* {function()} failureCallback  (Optional) Callback on fail


#### connectivity.stopAllObservers(successCallback, failureCallback);
Stop any existing observer.
 
* {function()} successCallback  (Optional) Callback on success
* {function()} failureCallback  (Optional) Callback on fail


### Events
#### document.addEventListener(connectivity.EVENTS.onReachabilityChanged, onReachabilityChanged, false)
Raised when there is a change in connectivity. It calls a `function onReachabilityChanged(e) {}`

* {Object} e  An object containing the following fields:
- e.interface: The ingerface type that has changed connectivity status.
- e.connected: True/False.
- e.observer:  The observer that raised the event.

### Constants
#### connectivity.OBSERVER
Specifies the observer affected by the connectivity change:

* HOST: specifies that the connectivity change affected host reachability.
* INTERNET: specifies that the connectivity change affected internet reachability.
* LOCALWIFI: specifies that the connectivity change affected local wifi reachability.


#### connectivity.INTERFACE
Specifies on which interface happened the connectivity change:

* DISCONNECTED: no interface connected.
* WIFI: connectivity change occured on wifi interface.
* WIMAX: connectivity change occured on wifi interface.
* ETHERNET: connectivity change occured on ethernet interface.
* MOBILE: connectivity change occured on mobile (3G/GPRS/...) interface.
* UNDEFINED: connectivity change occured on an undefined interface.


---
## Contributing ##
You can use this cordova plugin for free. You can contribute to this project in many ways:
* Testimonials of apps that are using this plugin would be especially helpful (and gives your app free marketing). [Open an issue](https://github.com/appfeel/admob-google-cordova/issues).
* [Reporting issues](https://github.com/appfeel/admob-google-cordova/issues).
* Patching and bug fixing, especially when submitted with test code. [Open a pull request](https://github.com/appfeel/admob-google-cordova/pulls).
* Other enhancements.


---
## License ##
```
The MIT License

Copyright (c) 2014 AppFeel

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

---
## Credits ##

* [appFeel](http://www.appfeel.com)