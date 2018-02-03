
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
  button.onclick = callback;
  button.classList.add('button');
  var div = document.createElement("div");
  div.appendChild(button);
  return div;
}

function Wallet(data) {

  this.row = document.createElement("tr");
  var that = this;
  that.handler = data.api;
  this.row.onclick = function() {
    if (activeWallet) {
      activeWallet.row.classList.remove('active');
    }
    that.row.classList.add('active');
    activeWallet = that;
  }

  var unitCell = document.createElement("td");

  unitCell.innerHTML = '<img class="coinIcon" src="coins/' + this.handler.name + '.png" alt="' + this.handler.code + '"/>';

  var buttonDiv = document.createElement("div");
  buttonDiv.classList.add('buttons');
  buttonDiv.appendChild(createButton('info', app.popupCoinInfo.bind(app, that.handler)));
  unitCell.appendChild(buttonDiv);




  var onlineCell = document.createElement("td");
  onlineCell.classList.add('online');
  this.onlineAmount = document.createElement("div");
  this.onlineValue = document.createElement("div");

  onlineCell.appendChild(this.onlineValue).classList.add('value');
  onlineCell.appendChild(this.onlineAmount).classList.add('amount');

  if ('getLocalAddr' in this.handler) {

    var buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add('buttons');
    buttonsDiv.appendChild(createButton('send', function(){app.popupSendPayment(that);}));
    buttonsDiv.appendChild(createButton('receive', function(){app.popupReceivePayment(that);}));
    onlineCell.appendChild(buttonsDiv);
  } else {
    onlineCell.classList.add('disabled');
  }



  var offlineCell = document.createElement("td");
  offlineCell.classList.add('offline');
  this.offlineAmount = document.createElement("div");
  this.offlineValue = document.createElement("div");
  offlineCell.appendChild(this.offlineValue).classList.add('value');
  offlineCell.appendChild(this.offlineAmount).classList.add('amount');

  var buttonsDiv2 = document.createElement("div");
  buttonsDiv2.classList.add('buttons');
  buttonsDiv2.appendChild(createButton('list', function(){}));
  buttonsDiv2.appendChild(createButton('refresh', function(){that.refreshOnline(); that.refreshOffline();}));
  offlineCell.appendChild(buttonsDiv2);

  this.row.appendChild(unitCell);
  this.row.appendChild(onlineCell);
  this.row.appendChild(offlineCell);

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


  this.refreshOffline = function() {
      this.totalOffline = 0;
      for (var idx in this.offlineWallets) {
        if ('addr' in  this.offlineWallets[idx]) {
          this.handler.getBalance(this.offlineWallets[idx].addr, function(val){
            //console.log(val);
            that.totalOffline += val;
            that.offlineAmount.innerHTML = formatMoney(that.totalOffline, that.handler.code, 5);
            that.updateOfflineValue();
          });
        } else {
          that.totalOffline += this.offlineWallets[idx].amount;
        }
      }
      this.offlineAmount.innerHTML = formatMoney(this.totalOffline, this.handler.code, 5);
      this.updateOfflineValue();
  }

  this.refreshOffline();

  this.refreshOnline = function() {
    this.totalOnline = 0;
    this.onlineAmount.innerHTML = formatMoney(this.totalOnline, this.handler.code, 5);
    this.updateOnlineValue();

    if ('getLocalAddr' in this.handler) {
      this.handler.getBalance(this.handler.getLocalAddr(), function(val){
        that.totalOnline = val;
        that.onlineAmount.innerHTML = formatMoney(that.totalOnline, that.handler.code, 5);
        that.updateOnlineValue();
      });
    }

  }

  this.refreshOnline();

}
