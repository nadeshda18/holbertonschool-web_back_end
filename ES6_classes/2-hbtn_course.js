// 2-hbtn_course.js
export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this.validateString(name, 'Name');
    this._length = this.validateNumber(length, 'Length');
    this._students = this.validateArray(students, 'Students');
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    // eslint-disable-next-line class-methods-use-this
    this._name = this.validateString(newName, 'Name');
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    // eslint-disable-next-line class-methods-use-this
    this._length = this.validateNumber(newLength, 'Length');
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    // eslint-disable-next-line class-methods-use-this
    this._students = this.validateArray(newStudents, 'Students');
  }

  validateString(value, attributeName) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attributeName} must be a string`);
    }
    return value;
  }

  validateNumber(value, attributeName) {
    if (typeof value !== 'number' || Number.isNaN(value)) {
      throw new TypeError(`${attributeName} must be a number`);
    }
    return value;
  }

  validateArray(value, attributeName) {
    if (!Array.isArray(value) || !value.every((item) => typeof item === 'string')) {
      throw new TypeError(`${attributeName} must be an array of strings`);
    }
    return value;
  }
}
