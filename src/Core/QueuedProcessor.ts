


export class QueuedProcessor {

    queue: {
        start: () => Promise<any>
        resolve: (value: any) => void
    }[] = []
    delay: number

    constructor(delay:number) {
        this.delay = delay
    }

    private processNext() {
        let next = this.queue.shift();
        next.start().then(function(ret: any) {
            if (this.queue.length) {
                setTimeout(this.processNext.bind(this), this.delay);
            }
            next.resolve(ret)
        }.bind(this));
    }

    process(start: () => Promise<any>) : Promise<any> {
        let ret = new Promise<any>(resolve => {
            this.queue.push({
                start: start,
                resolve: resolve
            })
        });
        if (this.queue.length == 1) {
            setTimeout(this.processNext.bind(this), this.delay);
        }
        return ret;
    }
}