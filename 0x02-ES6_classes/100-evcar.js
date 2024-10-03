// Import the Car class
import Car from './10-car';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    // Call the parent class constructor to initialize brand, motor, and color
    super(brand, motor, color);
    // Initialize the range attribute
    this._range = EVCar._validateString(range, 'range');
  }

  // Static method to validate a string (inherited from Car)
  static _validateString(value, attributeName) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attributeName} must be a string`);
    }
    return value;
  }

  // Getter and setter for range
  get range() {
    return this._range;
  }

  set range(value) {
    this._range = EVCar._validateString(value, 'range');
  }

  // Override cloneCar method
  cloneCar() {
    // Return a new instance of Car with the inherited attributes
    return new Car(this._brand, this._motor, this._color);
  }
}

export default EVCar;
