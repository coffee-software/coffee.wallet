import {CacheInterface, CacheWrapper, LogInterface, StorageInterface} from "../src/Engine";

export class StorageMock implements StorageInterface {

    data : Map<string, any> = new Map<string, any>()

    getItem(name: string, success: (value: any) => void, error: (value: any) => void): void {
        if (this.data.has(name)) {
            success(this.data.get(name));
        } else {
            error("does not exist");
        }
    }

    setItem(name: string, value: any, success: () => void, error: (error: any) => void): void {
        this.data.set(name, value)
        success()
    }
}

export class LogMock implements LogInterface {
    error(html: string, coinCode: string, debug: any): void {
    }

    info(html: string, coinCode: string, debug: any): void {
    }

    success(html: string, coinCode: string, debug: any): void {
    }
}

export class CacheMock implements CacheInterface {
    data : Map<string, any> = new Map<string, any>()

    getItem(key: string): any {
        return this.data.get(key);
    }

    setItem(key: string, value: any): void {
        this.data.set(key, value);
    }
}

export class CacheWrapperMock extends CacheWrapper {

    constructor() {
        super(new CacheMock());
    }
}