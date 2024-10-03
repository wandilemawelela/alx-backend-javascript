class Currency {
  constructor(code, name) {
    this._code = Currency._validateString(code, 'code');
    this._name = Currency._validateString(name, 'name');
  }

  // Static method to validate a string
  static _validateString(value, attributeName) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attributeName} must be a string`);
    }
    return value;
  }

  // Getter and setter for code
  get code() {
    return this._code;
  }

  set code(value) {
    this._code = Currency._validateString(value, 'code');
  }

  // Getter and setter for name
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = Currency._validateString(value, 'name');
  }

  // Method to display the full currency
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

export default Currency;
