'use strict'

function CoinButton(coin, active, onClick) {

  var button = document.createElement("a");

  var img = document.createElement("img");
  img.classList.add('coinIcon');
  img.setAttribute('src', 'coins/' + coin.icon + '.svg');
  button.appendChild(img);
  button.appendChild(document.createElement("br"));
  var span = document.createElement("span");
  span.innerHTML = coin.code;
  button.appendChild(span);
  button.classList.toggle('active', active);
  button.onclick = function(){
    onClick(coin);
  }
  button.classList.add('coinButton');
  return button;
}
