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
  }
}
