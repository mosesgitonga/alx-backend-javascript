import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
    constructor(sqft, floors) {
        super(sqft)
        this.floors = floors;
    }

    get sqft() {
        return this._sqft;
    }

    set sqft(ft) {
        if (typeof ft !== 'number') {
            throw new TypeError("sqft should be a number")
        }
        this._sqft = ft;
    }

    get floors(){
        return this._floors;
    }

    set floors(floors) {
        if (typeof floors !== 'number') {
            throw new TypeError("arg should be number")
        }
        this._floors = floors;
    }

    evacuationWarningMessage() {
        return `Evacuate slowly the ${this.floors} floors`
    }
}