'use strict'

function CoinButton(coin) {

  var button = document.createElement("a");

  var img = document.createElement("img");
  img.classList.add('coinIcon');
  img.setAttribute('src', 'coins/' + coin.icon + '.svg');
  button.appendChild(img);
  button.appendChild(document.createElement("br"));
  var span = document.createElement("span");
  span.innerHTML = coin.code;
  button.appendChild(span);
  var active = coin.code in app.data.wallets && app.data.wallets[coin.code].enabled;
  button.classList.toggle('active', active);
  button.onclick = function(){
    if (active) {
      app.wallets[coin.code].setActive();
    } else {
      app.data.addWallet(coin, function(){
        if (app.data.wallets[coin.code].enabled) {
          app.addWalletWidget(app.data.wallets[coin.code]);
          app.wallets[coin.code].setActive();
          button.classList.add('active');
        }
      });
    }
    app.closePopup();
  };
  button.classList.add('coinButton');
  return button;
}
