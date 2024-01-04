export default class Building {
    constructor(sqft) {
        this._sqft = sqft;
    }

    get sqft() {
        return this._sqft;
    }

    set sqft(area) {
        if (typeof area !== 'number') {
            throw new TypeError("area should be a number")
        }
        this._sqft = area;
    }

    evacuationWarningMessage() {
        throw new Error('Class extending Building must override evacuationWarningMessage');
    }
}