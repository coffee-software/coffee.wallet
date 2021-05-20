import {RequestOptions} from "https";
import * as https from 'https';

export class Https {

    static encodeQueryData(args: {[key:string]: string}) {
        const ret = [];
        for (let d in args)
            ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(args[d]));
        return ret.join('&');
    }

    static makeJsonRequest(host: string, path: string, body?: object|string, extraHeaders: { [code: string] : string } = null, ignoreHttpStatus = false): Promise<any> {
        return new Promise(function (resolve, reject) {
            //console.log(new Date().getTime() + ": REQUEST " + 'https://' + host + path);
            const data = (typeof body == "string") ? body : JSON.stringify(body);
            let options : RequestOptions = {
                method: body === undefined ? 'GET' : 'POST',
                host: host,
                path: path,
                headers: extraHeaders ? extraHeaders : {}
            }
            if (body !== undefined) {
                options.headers['Content-Type'] = 'application/json'
                options.headers['Content-Length'] = data.length
            }
            let req = https.request(options);
            req.on('response', response => {
                var str = ''
                response.on('data', function (chunk) {
                    str += chunk;
                });
                response.on('end', function () {
                    if (ignoreHttpStatus || (response.statusCode >= 200 && response.statusCode < 300)) {
                        resolve(JSON.parse(str));
                    } else {
                        reject(new Error('http error ' + response.statusCode));
                    }
                });
            });

            req.on('error', error => {
                reject(error);
            });
            if (body !== undefined) {
                req.write(data)
            }
            req.end()
        });
    }

}