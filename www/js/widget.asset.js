

var activeAsset = null;

function Asset(wallet, id, data) {

  var that = this;
  this.row = document.createElement("tr");
  that.data = data;
  that.wallet = wallet;
  that.id = id;

  fastTap(this.row, function() {
    if (activeAsset && activeAsset == that) return true;

    if (activeAsset && activeAsset.row) {
      if (activeAsset.row.previousElementSibling != null) {
        activeAsset.row.previousElementSibling.classList.remove('no-stitch');
      }
      activeAsset.row.classList.remove('no-stitch');
      activeAsset.row.classList.remove('active');
    }
    if (that.row.previousElementSibling != null) {
      that.row.previousElementSibling.classList.add('no-stitch');
    }
    that.row.classList.add('no-stitch');
    that.row.classList.add('active');
    activeAsset = that;
    return false;
  });

  var unitCell = document.createElement("td");
  unitCell.innerHTML = '<img class="coinIcon" src="coins/' + that.wallet.handler.name + '.png" alt="' + that.wallet.handler.code + '"/>';

  var commentCell = document.createElement("td");
  commentCell.innerHTML = data.comment + '<br/>' + (data.addr ? '[' + data.addr.substring(0, 7) + '...]' : '[BALANCE]');

  var amountCell = document.createElement("td");

  this.amount = document.createElement("div");
  this.value = document.createElement("div");
  amountCell.appendChild(this.value).classList.add('value');
  amountCell.appendChild(this.amount).classList.add('amount');

  var buttonsDiv = document.createElement("div");
  buttonsDiv.classList.add('buttons');

  data.addr && buttonsDiv.appendChild(createButton('receive', function(){}));
  data.addr && buttonsDiv.appendChild(createButton('refresh', function(){that.refreshAmount();}));

  buttonsDiv.appendChild(createButton('edit',function(){
    app.popupEditOfflineAsset(that);
  }));

  amountCell.appendChild(buttonsDiv);

  this.row.appendChild(unitCell);
  this.row.appendChild(commentCell);
  this.row.appendChild(amountCell);


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
