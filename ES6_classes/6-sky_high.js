// 6-sky_high.js
// eslint-disable-next-line import/extensions
import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }

  get floors() {
    return this._floors;
  }

  set floors(newFloors) {
    this._floors = newFloors;
  }
}
