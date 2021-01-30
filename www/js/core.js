'use strict'

function ExtendObject(proto, fields){
  var child = Object.create(proto);
  for(var f in fields) {
    if (fields.hasOwnProperty(f)) {
      child[f] = fields[f];
    }
  }
  return child;
}

if (!String.prototype.startsWith)
  String.prototype.startsWith = function (str) {
    return !!(str && this) && !this.lastIndexOf(str, 0)
  }

if (!String.prototype.endsWith)
  String.prototype.endsWith = function (str) {
    var offset = str && this ? this.length - str.length : -1
    return offset >= 0 && this.lastIndexOf(str, offset) === offset
  }

function shortAmount(floatValue, unit, maxchars) {
  maxchars = maxchars - unit.length - 1;
  return floatValue.toString().substring(0, maxchars - 2) + '..&nbsp;' + unit;
}

function shortAddr(addr, maxchars) {
  if (addr.length > maxchars) {
    var half = (maxchars - 3) / 2;
    return addr.substring(0, half) + '...' + addr.substring(addr.length - half, addr.length);
  } else {
    return addr;
  }
}

function getCoinAddrIcon(handler, addr) {
  if (addr && 'addrToIdenticonSeed' in handler) {
    var addrSvg = browserify.jazzicon(100, handler.addrToIdenticonSeed(addr)).children[0];
    addrSvg.setAttribute("viewBox", "0 0 100 100");
    addrSvg.removeAttribute("width");
    addrSvg.removeAttribute("height");
    addrSvg.style.borderRadius='50%';
    return addrSvg;
  } else {
    var emptyImg = document.createElement('img');
    emptyImg.setAttribute("class", "coinIcon");
    emptyImg.setAttribute("src", "coins/empty.svg");
    return emptyImg;
  }
}
