export default class Task extends Promise {
    constructor() {
        super(function (resolve, reject) {
            this.resolveMethod = resolve;
            this.rejectMethod = reject;
        }.bind(this));
    }

    resolve(value) {
        this.resolveMethod(value);
    }

    reject(error) {
        this.rejectMethod(error);
    }

    static Yield() {
        return new Promise(function (resolve) {
            setTimeout(resolve, 0);
        });
    }

    static Delay(milliseconds) {
        return new Promise(function (resolve) {
            setTimeout(resolve, milliseconds);
        });
    }
}