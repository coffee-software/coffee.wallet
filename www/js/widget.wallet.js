'use strict'

function formatMoney(value, unit, decimals){
  var d = decimals ? decimals : 2;
  //console.log(typeof value);
  return parseFloat(value).toFixed(d).replace(/./g, function(c, i, a) {
    return i && c !== "." && ((a.length - i) % 3 === 0) && (a.length - i > d) ? '&nbsp;' + c : c;
  }) + '&nbsp;' + unit;
};


var activeWallet = null;

function createButton(icon, text, callback) {
  var button = document.createElement("a");
  var img = document.createElement("img");
  img.setAttribute('src', 'icons/' + icon + '.png');
  button.appendChild(img);
  var label = document.createElement('div');
  label.innerHTML = text;
  button.appendChild(label);

  if (callback === null) {
    button.classList.add('disabled');
  } else {
    button.onclick = callback;
    fastTap(button);
  }

  var div = document.createElement("div");
  div.classList.add('button');
  div.appendChild(button);
  return div;
}

function Wallet(data) {

  this.row = document.createElement("div");
  this.row.classList.add('listingRow');
  this.slidingRow = document.createElement("div");
  this.slidingRow.classList.add('slidingRow');

  var that = this;
  that.data = data;
  that.handler = allCoinApis[data.coin];
  //'touchstart'
  this.setActive = function(scroll) {
    if (activeWallet && activeWallet == that) return true;
    if (activeWallet && activeWallet.row) {
      activeWallet.row.classList.remove('active');
      activeWallet.touchDiff = 0;
      activeWallet.slidingRow.style['transform'] = 'translate3d(0,0,0)';
    }
    that.row.classList.add('active');
    activeWallet = that;
    if (scroll) {
      document.getElementById('wallets').parentElement.scrollTop = that.row.offsetTop - 54;
    }
  }
  this.unsetActive = function() {
    that.slidingRow.style['transform'] = 'translate3d(0,0,0)';
    that.row.classList.remove('active');
    if (activeWallet && activeWallet == that) activeWallet = null;
  }
  /*fastTap(this.row, function() {
    that.setActive();
    return false;
  });*/

  var unitCell = document.createElement("div");
  unitCell.classList.add('unit');

  unitCell.innerHTML = '<div class="padding"><img class="coinIcon" src="coins/' + this.handler.icon + '.svg" alt="' + this.handler.code + '"/></div>';

  /*unitCell.children[0].onclick = function() {
    if (activeWallet == that) {
      app.popupCoinInfo(that);
    }
  };*/

  var onlineCell = document.createElement("div");
  this.onlineCell = onlineCell;
  onlineCell.classList.add('left');
  onlineCell.classList.add('online');
  this.onlineAmount = document.createElement("div");
  this.onlineValue = document.createElement("div");

  onlineCell.appendChild(this.onlineValue).classList.add('value');
  onlineCell.appendChild(this.onlineAmount).classList.add('amount');

  var buttonsLeft = this.buttonsLeft = document.createElement("div");
  buttonsLeft.classList.add('buttons');
  buttonsLeft.classList.add('buttonsLeft');

  ('newPrivateKey' in this.handler) && buttonsLeft.appendChild(createButton('receive', 'receive', function(){app.popupReceivePayment(that);}));
  ('sendPayment' in this.handler) && buttonsLeft.appendChild(createButton('send', 'send', function(){app.popupSendPayment(that);}));


  if (!('newPrivateKey' in this.handler)) {
    onlineCell.classList.add('disabled');
  }


  var offlineCell = document.createElement("div");
  offlineCell.classList.add('offline');
  offlineCell.classList.add('right');
  this.offlineAmount = document.createElement("div");
  this.offlineValue = document.createElement("div");
  offlineCell.appendChild(this.offlineValue).classList.add('value');
  offlineCell.appendChild(this.offlineAmount).classList.add('amount');

  var buttonsRight = this.buttonsRight = document.createElement("div");
  buttonsRight.classList.add('buttons');
  buttonsRight.classList.add('buttonsRight');

  var spinner = function() {
      refreshButton.classList.toggle('spinning', that.running);
      if (that.running) {
        setTimeout(spinner, 1000);
      }
  };

  var refreshButton = createButton('refresh', 'refresh', function(){
    if (!that.running) {
      that.running = true;
      spinner();
      that.refreshOnline(function(){that.running = false;});
      that.refreshOffline(true);
    }
    //TODO set running to false after all ofline assets updated
  });
  refreshButton.classList.add('spinner');
  buttonsRight.appendChild(refreshButton);
  buttonsRight.appendChild(createButton('list', 'assets', function(){app.popupOfflineAssets(that);}));
  buttonsRight.appendChild(createButton('more', 'more', function(){app.popupCoinInfo(that);}));

  this.row.appendChild(buttonsLeft);
  this.slidingRow.appendChild(onlineCell);
  this.slidingRow.appendChild(unitCell);
  this.slidingRow.appendChild(offlineCell);
  this.row.appendChild(buttonsRight);
  this.row.appendChild(this.slidingRow);

  var stitch = document.createElement("div");
  stitch.classList.add('stitch');
  this.row.appendChild(stitch);

  this.offlineWallets = data.offlineWallets;

  that.touchDiff = 0;

  this.slidingRow.addEventListener('click', function ( event ) {
    app.flushUxHint('swipe');
  });
  this.slidingRow.addEventListener('touchstart', function ( event ) {
    that.setActive();
    that.slidingRow.classList.add('touching');
    that.startX = event.touches[0].clientX + that.touchDiff;
  });
  this.slidingRow.addEventListener('touchmove', function ( event ) {
    that.touchDiff = that.startX - event.touches[0].clientX;
    //if (that.touchDiff > that.slidingRow.offsetWidth / 2) that.touchDiff = that.slidingRow.offsetWidth / 2;
    //if (that.touchDiff < - that.slidingRow.offsetWidth / 2) that.touchDiff = - that.slidingRow.offsetWidth / 2;
    that.slidingRow.style['transform'] = 'translate3d(' + -that.touchDiff + 'px,0,0)';
    that.buttonsLeft.classList.toggle('hidden', that.touchDiff > 0);
    that.buttonsRight.classList.toggle('hidden', that.touchDiff < 0);
  });
  this.slidingRow.addEventListener('touchend', function ( event ) {
    that.slidingRow.classList.remove('touching');
    if (that.touchDiff >  (that.buttonsRight.offsetWidth / 2)) {
      that.touchDiff = that.buttonsRight.offsetWidth;
    } else if (that.touchDiff < - (that.buttonsLeft.offsetWidth / 2)) {
      that.touchDiff = -that.buttonsLeft.offsetWidth;
    } else {
      that.touchDiff = 0;
      that.unsetActive();
    }
    that.slidingRow.style['transform'] = 'translate3d(' + -that.touchDiff + 'px,0,0)';
  });

  this.updateOfflineValue = function() {
    var value = this.totalOffline * app.priceProvider.getPrice(this.handler.code);
    this.offlineValue.innerHTML = formatMoney(value, app.priceProvider.getUnit());
    return value;
  }

  this.updateOnlineValue = function() {
    var value = this.totalOnline * app.priceProvider.getPrice(this.handler.code);
    this.onlineValue.innerHTML = formatMoney(value, app.priceProvider.getUnit());
    return value;
  }

  this.checkForOfflineAssetChange = function(idx, callback) {
    if (this.offlineWallets[idx].addr) {
      this.handler.getBalance(this.offlineWallets[idx].addr, function(balance, unconfirmed){
        var floatBalance = that.handler.systemValueToFloatValue(balance);
        if (balance != that.offlineWallets[idx].systemBalance) {
          if (typeof that.offlineWallets[idx].systemBalance == 'undefined') {
            that.offlineWallets[idx].systemBalance = 0;
          }
          if (that.handler.systemValuesCompare(that.offlineWallets[idx].systemBalance, balance) == 1) {
            app.alertInfo(that.handler.systemValueToDisplayValue(that.handler.systemValuesDiff(that.offlineWallets[idx].systemBalance, balance)) + ' less on your ' + that.handler.code + ' offline wallet');
          } else {
            app.alertInfo(that.handler.systemValueToDisplayValue(that.handler.systemValuesDiff(balance, that.offlineWallets[idx].systemBalance)) + ' more on your ' + that.handler.code + ' offline wallet');
          }
          that.offlineWallets[idx].systemBalance = balance;
          that.offlineWallets[idx].balance = floatBalance;
          app.data.save();
        }
        that.refreshOffline(false);
        callback();
      }, function(error, code) {
        app.alertError(error, code);
        if (typeof callback != 'undefined') callback();
      });
    } else {
      that.refreshOffline(false);
    }
  }

  this.refreshOffline = function(checkAddresses) {
      this.totalOffline = 0;
      for (var idx in this.offlineWallets) {
        that.totalOffline += this.offlineWallets[idx].balance;
        if (checkAddresses && ('addr' in  this.offlineWallets[idx]) && this.offlineWallets[idx].addr) {
          this.checkForOfflineAssetChange(idx, function(){});
        }
      }
      this.offlineAmount.innerHTML = formatMoney(this.totalOffline, this.handler.code, 5);
      this.updateOfflineValue();
  }

  this.refreshOffline(true);

  this.refreshOnline = function(callback) {

    this.totalOnline = 'balance' in this.data ? this.data.balance : 0;

    this.onlineAmount.innerHTML = formatMoney(this.totalOnline, this.handler.code, 5);
    this.updateOnlineValue();

    if (this.data.addr && 'getBalance' in this.handler) {
      this.handler.getBalance(this.data.addr, function(balance, unconfirmed){

        that.onlineCell.classList.toggle('unconfirmed', unconfirmed != 0);

        if (that.data.systemBalance != balance) {
          var floatBalance = that.handler.systemValueToFloatValue(balance);

          var cmp = that.handler.systemValuesCompare(that.data.systemBalance, balance);
          if (cmp == 1) {
            app.alertInfo(that.handler.systemValueToDisplayValue(that.handler.systemValuesDiff(that.data.systemBalance, balance)) + ' less on your ' + that.handler.code + ' wallet');
          }
          if (cmp == -1) {
            app.alertInfo(that.handler.systemValueToDisplayValue(that.handler.systemValuesDiff(balance, that.data.systemBalance)) + ' more on your ' + that.handler.code + ' wallet');
          }

          that.data.systemBalance = balance;
          that.totalOnline = that.data.balance = floatBalance;
          app.data.save();
          that.onlineAmount.innerHTML = formatMoney(that.totalOnline, that.handler.code, 5);
          that.updateOnlineValue();
        }
        if (typeof callback != 'undefined') callback();
      }, function(error, code) {
        app.alertError(error, code);
        if (typeof callback != 'undefined') callback();
      });
    } else {
      if (typeof callback != 'undefined') callback();
    }

  }

  this.refreshOnline();

}
