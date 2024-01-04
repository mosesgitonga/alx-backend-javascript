export default class {
    constructor(code, name) {
        this.code = code;
        this.name = name;
    }

    get code() {
        return this.code
    }

    set code(dCode) {
        if (typeof dCode !== 'string') {
            throw new TypeError("code should be string")
        }
        this._code = dCode;
    }

    get name() {
        return this._code;
    }

    set name(newName) {
        if (typeof newName !== 'string') {
            throw new TypeError('name should be string');
        }

        this._name = newName;
    }

    displayFullCurrency() {
        return `${this._name} (${this._code})`
    }
}
