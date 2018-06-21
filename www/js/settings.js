'use strict'

//abstraction layer to fix issues with localStorage
//and provide secure storage later.
var Settings = {

  set: function(key, value) {
    window.localStorage.setItem(key, value);
  },

  get: function(key, defaultValue) {
    var ret = window.localStorage.getItem(key);
    return ret == null ? defaultValue : ret;
  },

  getCached: function(key, lifetime, getCallback, callback) {
    var ret = window.localStorage.getItem(key);
    var now = (+ new Date()) / 1000;
    var updated = window.localStorage.getItem(key + '_lastUpdate');
    if ((ret == null) || (updated == null) || (now - updated > lifetime)) {
      getCallback(function(value){
        window.localStorage.setItem(key + '_lastUpdate', now);
        window.localStorage.setItem(key, JSON.stringify(value));
        callback(value);
      });
    } else {
      callback(JSON.parse(ret));
    }
  }

}
