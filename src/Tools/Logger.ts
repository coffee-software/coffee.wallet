import {StorageInterface} from "../Engine";

export class Logger {

    storage: StorageInterface

    constructor(storage: StorageInterface) {
        this.storage = storage;
    }

    //this wont be shifted
    logTransaction(type: string, description: string, data: any) {
        this.push('logs_' + type, {ts:Date.now(), description:description, data:data});
    }

    //"error", "info", "success"
    log(severity: string, coinCode: string, message: string, debug: any = null) {
        this.push('logs', {ts:Date.now(), severity:severity, coin:coinCode, message:message, debug:debug}, 200);
    }

    private push(key:string, data:object, limit:number = null) {
        this.getLogs(this.unshiftLog.bind(this, key, data, limit), key);
    }

    private unshiftLog(key: string, data: object, limit:number|null, logs: any[]) {
        logs.unshift(data);
        if ((limit != null) && (logs.length > limit)) {
            logs.pop();
        }
        this.storage.setItem(key, logs, function(){}, function(){});
    }

    getLogs(callback: (logs: any[])=>void, key : string = 'logs') {
        this.storage.getItem(
            key,
            callback,
            function(error){
                if (typeof error.code == "object" && 'code' in error.code){
                    //this fixes weird bug in secure storege plugin
                    error = error.code;
                }
                if (error.code == 2) {
                    callback([]);
                } else {
                    throw 'error ' + error.code + ' ' + error.exception;
                }
            }
        );
    }
}
