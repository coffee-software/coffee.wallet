#!/usr/bin/env node
const greenSuccess = '\x1b[32m';
const yellowWarning = '\x1b[33m';
const redError = '\x1b[31m';
const resetColor = '\x1b[0m';

module.exports = function (ctx) {
    try {
        deferral = ctx.requireCordovaModule('q').defer();
    } catch (e) {
        deferral = require('q').defer();
    }
    if (process.env.adapterSuccess) {
        console.log(`${greenSuccess}\n${process.env.adapterSuccess}${resetColor}\n`);
    }
    if (process.env.adapterError) {
        console.log(`${redError}\n${process.env.adapterError}${resetColor}\n`);
    }
    if (process.env.adapterWarning) {
        console.log(`${yellowWarning}\n${process.env.adapterWarning}${resetColor}\n`);
    }
    deferral.resolve();
    return deferral.promise;
};
