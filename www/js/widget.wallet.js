'use strict'

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

function WalletWidget(wallet) {

  this.row = document.createElement("div");
  this.row.classList.add('listingRow');
  this.slidingRow = document.createElement("div");
  this.slidingRow.classList.add('slidingRow');

  var that = this;
  that.wallet = wallet;
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

  var unitCell = document.createElement("div");
  unitCell.classList.add('unit');

  unitCell.innerHTML = '<div style="padding:0 13px;"><img class="coinIcon" src="coins/' + this.wallet.handler.icon + '.svg" alt="' + this.wallet.handler.ticker + '"/></div>';

  var onlineCell = document.createElement("div");
  this.onlineCell = onlineCell;
  onlineCell.classList.add('left');
  onlineCell.classList.add('online');
  this.onlineAmount = document.createElement("div");
  this.onlineValue = document.createElement("div");
  this.onlineAmountDetail = document.createElement("span");
  this.onlineValueDetail = document.createElement("span");

  onlineCell.appendChild(this.onlineValue).classList.add('value');
  onlineCell.appendChild(this.onlineAmount).classList.add('amount');

  var buttonsLeft = this.buttonsLeft = document.createElement("div");
  buttonsLeft.classList.add('buttons');
  buttonsLeft.classList.add('buttonsLeft');

  if (this.wallet.isOnline()) {
      buttonsLeft.appendChild(createButton('receive', 'receive', function(){app.popupReceivePayment(that.wallet);}));
      buttonsLeft.appendChild(createButton('send', 'send', function(){app.popupSendPayment(that.wallet);}));
  } else {
    onlineCell.classList.add('disabled');
  }


  var offlineCell = document.createElement("div");
  offlineCell.classList.add('offline');
  offlineCell.classList.add('right');
  this.offlineAmount = document.createElement("div");
  this.offlineValue = document.createElement("div");
  this.offlineAmountDetail = document.createElement("span");
  this.offlineValueDetail = document.createElement("span");
  offlineCell.appendChild(this.offlineValue).classList.add('value');
  offlineCell.appendChild(this.offlineAmount).classList.add('amount');

  var buttonsRight = this.buttonsRight = document.createElement("div");
  buttonsRight.classList.add('buttons');
  buttonsRight.classList.add('buttonsRight');

  that.running = 0;

  var spinner = function() {
      that.refreshButton.classList.toggle('spinning', that.running > 0);
      that.refreshButton2.classList.toggle('spinning', that.running > 0);
      if (that.running > 0) {
        setTimeout(spinner, 1000);
      }
  };

  that.refreshClick = function(){
    if (that.running === 0) {
      that.running = 2;
      spinner();
      that.refreshOnline(function(){that.running --;});
      that.refreshOffline(function(){that.running --;});
    }
  };

  that.refreshButton = createButton('refresh', 'refresh', that.refreshClick);
  that.refreshButton2 = createButton('refresh', 'refresh', that.refreshClick);

  that.refreshButton.classList.add('spinner');
  that.refreshButton2.classList.add('spinner');
  buttonsRight.appendChild(that.refreshButton);
  buttonsRight.appendChild(createButton('list', 'portfolio', function(){app.popupOfflineAssets(that);}));
  //buttonsRight.appendChild(createButton('more', 'more', function(){app.popupCoinInfo(that);}));

  this.row.appendChild(buttonsLeft);
  this.slidingRow.appendChild(onlineCell);
  this.slidingRow.appendChild(unitCell);
  this.slidingRow.appendChild(offlineCell);
  this.row.appendChild(buttonsRight);
  this.row.appendChild(this.slidingRow);

  var stitch = document.createElement("div");
  stitch.classList.add('stitch2');
  this.row.appendChild(stitch);

  that.touchDiff = 0;

  this.slidingRow.addEventListener('click', function ( event ) {
    app.popupCoinInfo(that, that.wallet);
  });
  this.slidingRow.addEventListener('touchstart', function ( event ) {
    that.setActive();
    that.slidingRow.classList.add('touching');
    that.startX = event.touches[0].clientX + that.touchDiff;
    that.startY = event.touches[0].clientY;
  });
  this.slidingRow.addEventListener('touchmove', function ( event ) {
    that.touchDiff = that.startX - event.touches[0].clientX;
    if (Math.abs(that.startY - event.touches[0].clientY) > 30) {
      that.touchDiff = 0;
    }
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
    this.offlineValueDetail.innerHTML = this.offlineValue.innerHTML = app.engine.getFiatValueString(this.totalOffline);
    return app.engine.getFiatValue(this.totalOffline);
  }

  this.updateOnlineValue = function() {
    this.onlineValueDetail.innerHTML = this.onlineValue.innerHTML = app.engine.getFiatValueString(this.totalOnline);
    return app.engine.getFiatValue(this.totalOnline);
  }

  this.refreshOffline = function(callback) {
    that.totalOffline = that.wallet.getZeroBalance();
    this.wallet.getPortfolioTotal(function (total){
        that.totalOffline = total;
        that.offlineAmount.innerHTML = app.engine.getValueString(total)
        that.offlineAmountDetail.innerHTML = app.engine.getValueString(total)
        that.updateOfflineValue();
        if (typeof callback != 'undefined') callback();
    });
  }
  this.refreshOffline();

  this.refreshOnline = function(callback) {
    that.totalOnline = that.wallet.getCachedBalance();
    that.onlineAmount.innerHTML = app.engine.getValueString(that.totalOnline)
    that.onlineAmountDetail.innerHTML = app.engine.getValueString(that.totalOnline)
    that.updateOnlineValue();
    if (wallet.isOnline()) {
      that.wallet.getBalance().then(
          function (balance) {
            that.onlineCell.classList.toggle('unconfirmed', !balance.unconfirmed.isZero());
            that.totalOnline = balance;
            that.onlineAmount.innerHTML = app.engine.getValueString(balance)
            that.onlineAmountDetail.innerHTML = app.engine.getValueString(balance)
            that.updateOnlineValue();
            //app.data.save();
            if (typeof callback != 'undefined') callback();
          }
      ).catch(function(error){
        if (typeof callback != 'undefined') callback();
      });
    } else {
      if (typeof callback != 'undefined') callback();
    }
  }

  this.refreshOnline();

}
