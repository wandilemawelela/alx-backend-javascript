const cloneSymbol = Symbol('clone');

class Car {
  constructor(brand, motor, color) {
    this._brand = Car._validateString(brand, 'brand');
    this._motor = Car._validateString(motor, 'motor');
    this._color = Car._validateString(color, 'color');
  }

  // Static method to validate a string
  static _validateString(value, attributeName) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attributeName} must be a string`);
    }
    return value;
  }

  // Getter and setter for brand
  get brand() {
    return this._brand;
  }

  set brand(value) {
    this._brand = Car._validateString(value, 'brand');
  }

  // Getter and setter for motor
  get motor() {
    return this._motor;
  }

  set motor(value) {
    this._motor = Car._validateString(value, 'motor');
  }

  // Getter and setter for color
  get color() {
    return this._color;
  }

  set color(value) {
    this._color = Car._validateString(value, 'color');
  }

  // Method to clone the car
  [cloneSymbol]() {
    return new Car(this._brand, this._motor, this._color);
  }

  // Public method to clone the car
  cloneCar() {
    return this[cloneSymbol]();
  }
}

export default Car;
