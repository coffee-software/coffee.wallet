import {StorageInterface} from "../Engine";

export class Logger {

    storage: StorageInterface

    constructor(storage: StorageInterface) {
        this.storage = storage;
    }

    //this wont be shifted
    logTransaction(type: string, description: string, data: any) {
        this.getLogs(function(logs) {
            logs.unshift({ts:Date.now(), description:description, data:data});
            this.storage.setItem("logs" + '_' + type, logs, function(){}, function(){});
        }, type);
    }

    //"error", "info", "success"
    log(severity: string, coinCode: string, message: string, debug: any) {
        this.getLogs(function(logs) {
            logs.unshift({ts:Date.now(), severity:severity, coin:coinCode, message:message, debug:debug});
            if (logs.length > 200) {
                logs.pop();
            }
            this.storage.setItem("logs", logs, function(){}, function(){});
        });
    }

    getLogs(callback: (logs: any[])=>void, type : string = null) {
        this.storage.getItem(
            "logs" + (type ? '_' + type : type),
            callback,
            function(error){
                console.log(error); //TODO::
                /*
                if (typeof error.code == "object" && 'code' in error.code){
                    //this fixes weird bug in secure storege plugin TODO
                    error = error.code;
                }
                if (error.code == 2) {
                    callback(new Array());
                } else {
                    console.log(error);
                    app._alertJsError('error ' + error.code + ' ' + error.exception);
                }*/
            }
        );
    }
}
