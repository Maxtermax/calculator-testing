const {
  validateAdd,
  validateSubstract,
  validateMultiply,
} = require("../util/validadors");
const wrapException = require("../util/wrapException");

module.exports = class Calculator {
  add(a, b) {
    const { error: validateException } = wrapException(() => validateAdd(a, b));
    if (validateException) return validateException;
    return a + b;
  }

  substract(a, b) {
    const { error: validateException } = wrapException(() =>
      validateSubstract(a, b)
    );
    if (validateException) return validateException;
    return a - b;
  }

  multiply(a, b) {
    const { error: validateException } = wrapException(() =>
      validateMultiply(a, b)
    );
    if (validateException) return validateException;
    return a * b;
  }

  divide(a, b) {
    const { error: validateException } = wrapException(() =>
      validateMultiply(a, b)
    );
    if (validateException) return validateException;
    return a / b;
  }
};
