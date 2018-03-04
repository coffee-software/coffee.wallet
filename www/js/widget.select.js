'use strict'

function Select(element) {

  this.element = element;

  this.setOptions = function(options, selected) {

    var map = {}
    for (var i in options) {
      if (typeof options[i] == "string") {
          map[options[i]] = options[i];
      } else if ('name' in options[i]) {
          map[i] = options[i].name;
      }
    }

    this.element.innerHTML = '';
    for (var i in map) {
      this.element.add(new Option(map[i], i, false, i == selected));
    }
    this.onChangeCallback && this.onChangeCallback(selected);
  };

  this.getValue = function() {
    return this.element.value;
  };

  this.setValue = function(value) {
    this.element.value = value;
    this.onChangeCallback && this.onChangeCallback(value);
  };

  this.onChange = function(callback) {
      this.onChangeCallback = callback;
      this.element.onchange = function(event) { callback(event.target.value); }
  };
}
