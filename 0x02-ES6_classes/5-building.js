export default class Building {
    constructor(sqft) {
        if (this.constructor !== Building) {
          if (typeof this.evacuationWarningMessage !== 'function') {
            throw new Error(
              'Class extending Building must override evacuationWarningMessage',
            );
          }
        }
        this.sqft = sqft;
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

   
}