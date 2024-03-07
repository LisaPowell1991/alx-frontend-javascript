export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // getters
  getCode() {
    return this._code;
  }

  getName() {
    return this._name;
  }

  // setters
  setCurrencyCode(code) {
    if (typeof code === 'string') {
      this._code = code;
    } else {
      throw new TypeError('Code must be a string');
    }
  }

  setCurrencyName(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  // Method to display the full currency
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
