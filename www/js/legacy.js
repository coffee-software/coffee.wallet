'use strict'

if (!String.prototype.startsWith)
  String.prototype.startsWith = function (str) {
    return !!(str && this) && !this.lastIndexOf(str, 0)
  }

if (!String.prototype.endsWith)
  String.prototype.endsWith = function (str) {
    var offset = str && this ? this.length - str.length : -1
    return offset >= 0 && this.lastIndexOf(str, offset) === offset
  }
