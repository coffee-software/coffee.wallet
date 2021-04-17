import {RequestOptions} from "https";
import * as https from 'https';

export class Https {

    static makeJsonRequest(host: string, path: string, body?: object): Promise<any> {
        return new Promise(function (resolve, reject) {
            //console.log(new Date().getTime() + ": REQUEST " + 'https://' + host + path);
            const data = JSON.stringify(body);
            let options : RequestOptions = {
                method: body === undefined ? 'GET' : 'POST',
                host: host,
                path: path
            }
            if (body !== undefined) {
                options.headers = {
                    'Content-Type': 'application/json',
                    'Content-Length': data.length
                }
            }
            let req = https.request(options);
            req.on('response', response => {
                if (response.statusCode >= 200 && response.statusCode < 300) {
                    var str = ''
                    response.on('data', function (chunk) {
                        str += chunk;
                    });
                    response.on('end', function () {
                        resolve(JSON.parse(str));
                    });
                } else {
                    reject();
                }
            });

            req.on('error', error => {
                reject(error);
            });
            if (body !== undefined) {
                req.write(data)
            }
            req.end()
            /* TODO test in browser and remove
            let xhr = new XMLHttpRequest();
            xhr.responseType = 'json';
            if (body !== undefined) {
                xhr.setRequestHeader("Content-Type", "application/json");
            }
            xhr.onload = function () {
                if (this.status >= 200 && this.status < 300) {
                    resolve(xhr.response);
                } else {
                    reject({
                        status: this.status,
                        statusText: xhr.statusText
                    });
                }
            };
            xhr.onerror = function () {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            };
            if (body === undefined) {
                xhr.send();
            } else {
                xhr.send(JSON.stringify(body));
            }*/
        });
    }

}