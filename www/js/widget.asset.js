'use strict'

var activeAsset = null;

function Asset(wallet, id, data) {

  var that = this;
  this.row = document.createElement("div");
  this.row.classList.add('listingRow');
  this.slidingRow = document.createElement("div");
  this.slidingRow.classList.add('slidingRow');


  that.data = data;
  that.wallet = wallet;
  that.id = id;

  this.setActive = function() {
    if (activeAsset && activeAsset == that) return true;
    if (activeAsset && activeAsset.row) {
      activeAsset.row.classList.remove('active');
      activeAsset.slidingRow.style['transform'] = 'translate3d(0,0,0)';
    }
    that.row.classList.add('active');
    activeAsset = that;
  }
  this.unsetActive = function() {
    that.row.classList.remove('active');
    that.slidingRow.style['transform'] = 'translate3d(0,0,0)';
    if (activeAsset && activeAsset == that) activeAsset = null;
  }

  var unitCell = document.createElement("div");
  unitCell.classList.add('unit');
  //unitCell.innerHTML = '<div class="padding"><img class="coinIcon" src="coins/' + that.wallet.handler.icon + '.svg" alt="' + that.wallet.handler.code + '"/></div>';

  var commentCell = document.createElement("div");
  commentCell.innerHTML = '<div>' + data.comment + '<br/>' + (data.addr ? '[' + data.addr.substring(0, 7) + '...]' : '[BALANCE]') + '</div>';
  commentCell.classList.add('left');

  var amountCell = document.createElement("div");
  amountCell.classList.add('right');

  this.amount = document.createElement("div");
  this.value = document.createElement("div");
  amountCell.appendChild(this.value).classList.add('value');
  amountCell.appendChild(this.amount).classList.add('amount');


  var buttonsLeft = this.buttonsLeft = document.createElement("div");
  buttonsLeft.classList.add('buttons');
  buttonsLeft.classList.add('buttonsLeft');

  var buttonsRight = this.buttonsRight = document.createElement("div");
  buttonsRight.classList.add('buttons');
  buttonsRight.classList.add('buttonsRight');

  data.addr && ('explorerLinkAddr' in wallet.handler) && buttonsLeft.appendChild(createButton('link', 'history', function(){
    window.open(wallet.handler.explorerLinkAddr(data.addr), '_system');
  }));
  data.addr && buttonsLeft.appendChild(createButton('receive', 'receive', function(){
    app.popupReceivePayment(that.wallet, that.data.addr);
  }));
  data.addr && buttonsRight.appendChild(createButton('refresh', 'refresh', function(){that.refreshAmount();}));


  buttonsRight.appendChild(createButton('edit', 'edit', function(){
    app.popupEditOfflineAsset(that);
  }));

  buttonsRight.appendChild(createButton('remove', 'remove', function(){
    navigator.notification.confirm(
        'Are you sure you want to remove this asset?',
        function (buttonIndex) {
          if (buttonIndex == 1) {
            app.data.deleteOfflineAsset(that.wallet.handler.code, that.id);
            app.popupOfflineAssets(app.offlineAssetWallet);
            app.offlineAssetWallet.refreshOffline();
          }
        },
        'Remove Asset',
        ['Remove','Cancel']
    );
  }));

  this.row.appendChild(buttonsLeft);
  this.slidingRow.appendChild(commentCell);
  this.slidingRow.appendChild(unitCell);
  this.slidingRow.appendChild(amountCell);
  this.row.appendChild(buttonsRight);

  this.row.appendChild(this.slidingRow);

  var stitch = document.createElement("div");
  stitch.classList.add('stitch');
  this.row.appendChild(stitch);


  that.touchDiff = 0;
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


  this.updateValue = function() {
    var value = this.total * app.priceProvider.getPrice(this.wallet.handler.code);
    this.value.innerHTML = formatMoney(value, app.priceProvider.getUnit());
    return value;
  }

  this.refreshAmount = function() {
      this.total = 0;
      if (this.data.addr) {
        wallet.handler.getBalance(this.data.addr, function(balance, unconfirmed){
          that.total = balance;
          that.amount.innerHTML = wallet.handler.systemValueToDisplayValue(balance);
          //formatMoney(that.total, that.wallet.handler.code, 5);
          that.updateValue();
        });
      } else {
        that.total = this.data.floatBalance ? this.data.floatBalance : 0;
      }
      //console.log(this);
      this.amount.innerHTML = formatMoney(this.total, this.wallet.handler.code, 5);
      this.updateValue();
  }

  this.refreshAmount();

}
