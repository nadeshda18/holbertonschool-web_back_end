// 3-currency.js
export default function Currency(code, name) {
  let _code = code;
  let _name = name;

  return {
    get code() {
      return _code;
    },

    set code(newCode) {
      _code = newCode;
    },

    get name() {
      return _name;
    },

    set name(newName) {
      _name = newName;
    },

    displayFullCurrency() {
      return `${_name} (${_code})`;
    },
  };
}
