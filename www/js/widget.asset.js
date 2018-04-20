'use strict'

var activeAsset = null;

function Asset(wallet, id, data) {

  var that = this;
  this.row = document.createElement("div");
  this.listingRow = document.createElement("div");
  this.listingRow.classList.add('listingRow');
  this.row.appendChild(this.listingRow);


  that.data = data;
  that.wallet = wallet;
  that.id = id;

  fastTap(this.row, function() {
    if (activeAsset && activeAsset == that) return true;
    if (activeAsset && activeAsset.listingRow) {
      activeAsset.listingRow.classList.remove('active');
    }
    that.listingRow.classList.add('active');
    activeAsset = that;
    return false;
  });

  var unitCell = document.createElement("div");
  unitCell.classList.add('unit');
  unitCell.innerHTML = '<img class="coinIcon" src="coins/' + that.wallet.handler.icon + '.svg" alt="' + that.wallet.handler.code + '"/>';

  var commentCell = document.createElement("div");
  commentCell.innerHTML = data.comment + '<br/>' + (data.addr ? '[' + data.addr.substring(0, 7) + '...]' : '[BALANCE]');
  commentCell.classList.add('left');

  var amountCell = document.createElement("div");
  amountCell.classList.add('right');

  this.amount = document.createElement("div");
  this.value = document.createElement("div");
  amountCell.appendChild(this.value).classList.add('value');
  amountCell.appendChild(this.amount).classList.add('amount');

  var buttonsDiv = document.createElement("div");
  buttonsDiv.classList.add('buttons');

  data.addr && buttonsDiv.appendChild(createButton('receive', function(){
    app.popupReceivePayment(that.wallet, that.data.addr);
  }));
  data.addr && buttonsDiv.appendChild(createButton('refresh', function(){that.refreshAmount();}));

  buttonsDiv.appendChild(createButton('edit',function(){
    app.popupEditOfflineAsset(that);
  }));

  buttonsDiv.appendChild(createButton('close',function(){
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

  amountCell.appendChild(buttonsDiv);

  this.listingRow.appendChild(commentCell);
  //this.listingRow.appendChild(unitCell);
  this.listingRow.appendChild(amountCell);

  var stitch = document.createElement("div");
  stitch.classList.add('stitch');
  this.row.appendChild(stitch);


  this.updateValue = function() {
    var value = this.total * app.priceProvider.getPrice(this.wallet.handler.code);
    this.value.innerHTML = formatMoney(value, app.priceProvider.getUnit());
    return value;
  }

  this.refreshAmount = function() {
      this.total = 0;
      if (this.data.addr) {
        wallet.handler.getBalance(this.data.addr, function(val){
          that.total = val;
          that.amount.innerHTML = formatMoney(that.total, that.wallet.handler.code, 5);
          that.updateValue();
        });
      } else {
        that.total = this.data.balance ? this.data.balance : 0;
      }
      //console.log(this);
      this.amount.innerHTML = formatMoney(this.total, this.wallet.handler.code, 5);
      this.updateValue();
  }

  this.refreshAmount();

}
