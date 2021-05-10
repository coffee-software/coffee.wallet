/**
 * credits: https://stackoverflow.com/a/51086893/1959073
 */
export class Mutex {
    current : Promise<void> = Promise.resolve();

    public lock() {
        let _resolve : any;
        const p : Promise<void> = new Promise(resolve => {
            _resolve = () => resolve();
        });
        // Caller gets a promise that resolves when the current outstanding
        // lock resolves
        const rv = this.current.then(() => _resolve);
        // Don't allow the next request until the new promise is done
        this.current = p;
        // Return the new promise
        return rv;
    }
}