'use strict'

function formatMoney(value, unit, decimals){
  var d = decimals ? decimals : 2;
  return value.toFixed(d).replace(/./g, function(c, i, a) {
    return i && c !== "." && ((a.length - i) % 3 === 0) && (a.length - i > d) ? '&nbsp;' + c : c;
  }) + '&nbsp;' + unit;
};


var activeWallet = null;

function createButton(icon, callback) {
  var button = document.createElement("a");
  var img = document.createElement("img");
  img.setAttribute('src', 'icons/' + icon + '.png');
  button.appendChild(img);

  if (callback === null) {
    button.classList.add('disabled');
  } else {
    //button.onclick = callback;
    fastTap(button, callback);
  }

  button.classList.add('button');
  var div = document.createElement("div");
  div.appendChild(button);
  return div;
}

function Wallet(data) {

  this.row = document.createElement("div");
  this.listingRow = document.createElement("div");
  this.listingRow.classList.add('listingRow');
  this.row.appendChild(this.listingRow);
  var that = this;
  that.data = data;
  that.handler = allCoinApis[data.coin];
  //'touchstart'
  this.setActive = function() {
    if (activeWallet && activeWallet == that) return true;
    if (activeWallet && activeWallet.listingRow) {
      activeWallet.listingRow.classList.remove('active');
    }
    that.listingRow.classList.add('active');
    activeWallet = that;
    return false;
  }

  fastTap(this.row, function() {
    return that.setActive();
  });

  var unitCell = document.createElement("div");
  unitCell.classList.add('unit');

  unitCell.innerHTML = '<img class="coinIcon" src="coins/' + this.handler.icon + '.svg" alt="' + this.handler.code + '"/>';

  unitCell.children[0].onclick = function() {
    if (activeWallet == that) {
      app.popupCoinInfo(that);
    }
  };
  /*
  var buttonDiv = document.createElement("div");
  buttonDiv.classList.add('buttons');
  buttonDiv.appendChild(createButton('info', app.popupCoinInfo.bind(app, that.handler)));
  unitCell.appendChild(buttonDiv);
  */

  var onlineCell = document.createElement("div");
  onlineCell.classList.add('left');
  onlineCell.classList.add('online');
  this.onlineAmount = document.createElement("div");
  this.onlineValue = document.createElement("div");

  onlineCell.appendChild(this.onlineValue).classList.add('value');
  onlineCell.appendChild(this.onlineAmount).classList.add('amount');

  var buttonsDiv = document.createElement("div");
  buttonsDiv.classList.add('buttons');

  ('newPrivateKey' in this.handler) && buttonsDiv.appendChild(createButton('receive',function(){app.popupReceivePayment(that);}));
  ('sendPayment' in this.handler) && buttonsDiv.appendChild(createButton('send', function(){app.popupSendPayment(that);}));

  onlineCell.appendChild(buttonsDiv);


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

  var buttonsDiv2 = document.createElement("div");
  buttonsDiv2.classList.add('buttons');

  var spinner = function() {
      refreshButton.classList.toggle('spinning', that.running);
      if (that.running) {
        setTimeout(spinner, 1000);
      }
  };

  var refreshButton = createButton('refresh', function(){that.running = true; spinner(); that.refreshOnline(function(){that.running = false;}); that.refreshOffline();});
  refreshButton.classList.add('spinner');
  buttonsDiv2.appendChild(refreshButton);
  buttonsDiv2.appendChild(createButton('list', function(){app.popupOfflineAssets(that);}));

  offlineCell.appendChild(buttonsDiv2);

  this.listingRow.appendChild(onlineCell);
  this.listingRow.appendChild(unitCell);
  this.listingRow.appendChild(offlineCell);

  var stitch = document.createElement("div");
  stitch.classList.add('stitch');
  this.row.appendChild(stitch);

  this.offlineWallets = data.offlineWallets;

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
    this.handler.getBalance(this.offlineWallets[idx].addr, function(val){
      if (val != that.offlineWallets[idx].balance) {
        callback(isNaN(that.offlineWallets[idx].balance) ? val : val - that.offlineWallets[idx].balance);
        //TODO
        that.offlineWallets[idx].balance = val;
        app.data.save();
      }
    });
  }

  this.refreshOffline = function() {
      this.totalOffline = 0;
      for (var idx in this.offlineWallets) {

        that.totalOffline += this.offlineWallets[idx].balance;

        if ('addr' in  this.offlineWallets[idx] && this.offlineWallets[idx].addr) {
          this.checkForOfflineAssetChange(idx, function(change){
            if (change > 0) {
              app.alertInfo(change + ' more on your ' + that.handler.code + ' offline wallet');
            } else {
              app.alertInfo(change + ' less on your ' + that.handler.code + ' offline wallet');
            }
            that.totalOffline += change;
            that.offlineAmount.innerHTML = formatMoney(that.totalOffline, that.handler.code, 5);
            that.updateOfflineValue();
          });
        }
      }
      this.offlineAmount.innerHTML = formatMoney(this.totalOffline, this.handler.code, 5);
      this.updateOfflineValue();
  }

  this.refreshOffline();

  this.refreshOnline = function(callback) {
    this.totalOnline = 'balance' in this.data ? this.data.balance : 0;
    this.onlineAmount.innerHTML = formatMoney(this.totalOnline, this.handler.code, 5);
    this.updateOnlineValue();

    if (this.data.addr && 'getBalance' in this.handler) {
      this.handler.getBalance(this.data.addr, function(val){
        if (val != that.totalOnline) {
          if (that.totalOnline > val) {
            app.alertInfo((that.totalOnline - val) + ' less on your ' + that.handler.code + ' wallet');
          } else {
            app.alertInfo((val - that.totalOnline) + ' more on your ' + that.handler.code + ' wallet');
          }
          //TODO
          that.data.balance = that.totalOnline = val;
          app.data.save();
          that.onlineAmount.innerHTML = formatMoney(that.totalOnline, that.handler.code, 5);
          that.updateOnlineValue();
        }
        if (typeof callback != 'undefined') callback();
      });
    } else {
      if (typeof callback != 'undefined') callback();
    }

  }

  this.refreshOnline();

}
