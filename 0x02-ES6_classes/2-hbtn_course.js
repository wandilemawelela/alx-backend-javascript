class HolbertonCourse {
  constructor(name, length, students) {
    // Validate the types of the inputs
    this._name = HolbertonCourse._validateString(name, 'name');
    this._length = HolbertonCourse._validateNumber(length, 'length');
    this._students = HolbertonCourse._validateArrayOfStrings(students, 'students');
  }

  // Static method to validate a string
  static _validateString(value, attributeName) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attributeName} must be a string`);
    }
    return value;
  }

  // Static method to validate a number
  static _validateNumber(value, attributeName) {
    if (typeof value !== 'number') {
      throw new TypeError(`${attributeName} must be a number`);
    }
    return value;
  }

  // Static method to validate an array of strings
  static _validateArrayOfStrings(value, attributeName) {
    if (!Array.isArray(value)) {
      throw new TypeError(`${attributeName} must be an array`);
    }
    for (const item of value) {
      if (typeof item !== 'string') {
        throw new TypeError(`Each element in ${attributeName} must be a string`);
      }
    }
    return value;
  }

  // Getter and setter for name
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = HolbertonCourse._validateString(value, 'name');
  }

  // Getter and setter for length
  get length() {
    return this._length;
  }

  set length(value) {
    this._length = HolbertonCourse._validateNumber(value, 'length');
  }

  // Getter and setter for students
  get students() {
    return this._students;
  }

  set students(value) {
    this._students = HolbertonCourse._validateArrayOfStrings(value, 'students');
  }
}

export default HolbertonCourse;
