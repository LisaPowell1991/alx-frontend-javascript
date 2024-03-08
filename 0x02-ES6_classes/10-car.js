export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const constructor = this.constructor[Symbol.species] || this.constructor;
    return new constructor(this._brand, this._motor, this._color);
  }
}
