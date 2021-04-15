'use strict'

function CoinButton(code, handler, active, onClick) {
    var button = document.createElement("a");
    var img = document.createElement("img");
    img.classList.add('coinIcon');
    img.setAttribute('src', 'coins/' + handler.icon + '.svg');
    button.appendChild(img);
    button.appendChild(document.createElement("br"));
    var span = document.createElement("span");
    span.innerHTML = handler.ticker;
    button.appendChild(span);
    button.classList.toggle('active', active);
    button.onclick = function(){
      onClick(code, handler);
    }
    fastTap(button);
    button.classList.add('coinButton');
    return button;
}
