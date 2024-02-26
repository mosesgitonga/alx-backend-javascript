export default class Currency {
    constructor(code, name) {
        this.code = code;
        this.name = name;
    }

    get code() {
        return this._code;
    }

    set code(dCode) {
        if (typeof dCode !== 'string') {
            throw new TypeError("Code should be a string");
        }
        this._code = dCode;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        if (typeof newName !== 'string') {
            throw new TypeError('Name should be a string');
        }
        this._name = newName;
    }

    displayFullCurrency() {
        
        return `${this._name} (${this._code})`;
    }


}
