"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var https = require("https");
var Https = (function () {
    function Https() {
    }
    Https.makeJsonRequest = function (host, path, body) {
        return new Promise(function (resolve, reject) {
            var data = JSON.stringify(body);
            var options = {
                method: body === undefined ? 'GET' : 'POST',
                host: host,
                path: path
            };
            if (body !== undefined) {
                options.headers = {
                    'Content-Type': 'application/json',
                    'Content-Length': data.length
                };
            }
            var req = https.request(options);
            req.on('response', function (response) {
                if (response.statusCode >= 200 && response.statusCode < 300) {
                    var str = '';
                    response.on('data', function (chunk) {
                        str += chunk;
                    });
                    response.on('end', function () {
                        resolve(JSON.parse(str));
                    });
                }
                else {
                    reject();
                }
            });
            req.on('error', function (error) {
                reject(error);
            });
            if (body !== undefined) {
                req.write(data);
            }
            req.end();
        });
    };
    return Https;
}());
exports.Https = Https;
//# sourceMappingURL=Https.js.map