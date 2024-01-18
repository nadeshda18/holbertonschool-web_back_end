// 2-hbtn_course.js
export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this.validateString(newName);
    this._name = newName;
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    this.validateNumber(newLength);
    this._length = newLength;
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    this.validateArray(newStudents);
    this._students = newStudents;
  }

  validateString(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    return value;
  }

  validateNumber(value) {
    if (typeof value !== 'number' || Number.isNaN(value)) {
      throw new TypeError('Length must be a number');
    }
    return value;
  }

  validateArray(value) {
    if (!Array.isArray(value)) {
      throw new TypeError('Students must be an array');
    }
    return value;
  }
}
