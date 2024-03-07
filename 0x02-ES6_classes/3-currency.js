export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // getter and setter for code
  getCode() {
    return this._code;
  }

  setCurrencyCode(newCode) {
    if (typeof newCode !== 'string') {
      throw new TypeError('code must be a string');
    }
    this._code = newCode;
  }

  // getter and setter for name
  getName() {
    return this._name;
  }

  setCurrencyName(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  // Method to display the full currency
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
