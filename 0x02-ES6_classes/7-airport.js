export default class Airport {
    constructor(name, code) {
        this._name = name;
        this._code = code;
    }
    
    set name(newName) {
        if (typeof newName !== 'string') {
            throw new TypeError("name should be string")
        } 
        this._name = newname;
    }

    get name() {
        return this._name;
    }

    set code(code) {
        if (typeof code !== 'number') {
            throw new TypeError("Expected a number as arg")
        }
        this._code = code;
    }

    get code() {
        return this._code;
    }

    toString() {
        return `Airport [${this._code}] { _name: '${this._name}', _code: '${this._code}' }`;
    }
}