export default class Car {
    constructor(brand, motor, color) {
        this._brand = brand;
        this._motor = motor;
        this._color = color;
    }

    get brand() {
        return this._brand;
    }

    get motor() {
        return this._motor;
    }

    get color() {
        return this._color;
    }

    set brand(value) {
        if (value !== 'string') {
            throw new TypeError("Expected a string")
        }

        this._brand = value;
    }
    set motor(value) {
        if (value !== 'string') {
            throw new TypeError("Expected a string")
        }

        this._motor = value;
    }

    set color(value) {
        if (value !== 'string') {
            throw new TypeError("Expected a string")
        }

        this._color = value;
    }

    static get [Symbol.species]() {
        return this.prototype.constructor;
      }

    cloneCar() {
        return new (this.constructor[Symbol.species])();
    }

}
