export default class HolbertonClass {
    constructor(size, location) {
        this._size = size;
        this._location = location;
    }

    set size(value) {
        if (typeof value !== 'number') {
            throw new TypeError("Expected number as value")
        }
        this._size = value;
    }

    set location(value) {
        if (typeof value !== 'string'){
            throw new TypeError("Expected string as value")
        }
        this._location = value;
    }

    get size() {
        return this._size;
    }

    get location() {
        return this._location;
    }

    [Symbol.toPrimitive](hint) {
        if (hint === 'number') {
          return this.size;
        }
        if (hint === 'string') {
          return this.location;
        }
        return this;
    }
}