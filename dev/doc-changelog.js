#!/usr/bin/nodejs

var fs = require('fs');
var window = {};

eval((fs.readFileSync('./www/js/changelog.js')+'').replace('\'use strict\'',''));

console.log('<h3>current stable: ' + window.version + '</h3>');

for (v in window.changelog) {
  console.log('<h2 id="' + window.changelog[v].version + '">version ' + window.changelog[v].version + '</h2>');
  console.log('<i>released to beta on ' + window.changelog[v].date + '</i>');

  console.log('<ul>');
  for ( var i = 0; i < window.changelog[v].changes.length; i++) {
    console.log('<li>' + window.changelog[v].changes[i] + '</li>');
  }
  console.log('</ul>');

}
