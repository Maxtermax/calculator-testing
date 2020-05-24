const isNumber = (item) => typeof item === "number";

const validNumber = (value = "") => {
  const result = /[0-9]{1,100}/g.exec(value);
  if (result) return result[0].length === value.length;
  return false;
};

exports.validateDivition = (a, b) => {
  const logicalError = b === 0;
  if (logicalError) return new Error(`can not devide by 0`);
  if (!validNumber(String(a))) return new Error(`invalid value: ${a}`);
  if (!validNumber(String(b))) return new Error(`invalid value: ${b}`);
  return true;
};

exports.validateAdd = (a, b) => {
  if (!isNumber(a)) return new Error(`invalid type: ${a}`);
  if (!isNumber(b)) return new Error(`invalid type: ${b}`);
  if (!validNumber(String(a))) return new Error(`invalid value: ${a}`);
  if (!validNumber(String(b))) return new Error(`invalid value: ${b}`);
  return true;
};

exports.validateSubstract = (a, b) => {
  if (!isNumber(a)) return new Error(`invalid type: ${a}`);
  if (!isNumber(b)) return new Error(`invalid type: ${b}`);
  if (!validNumber(String(a))) return new Error(`invalid value: ${a}`);
  if (!validNumber(String(b))) return new Error(`invalid value: ${b}`);
  return true;
};

exports.validateMultiply = (a, b) => {
  if (!isNumber(a)) return new Error(`invalid type: ${a}`);
  if (!isNumber(b)) return new Error(`invalid type: ${b}`);
  if (!validNumber(String(a))) return new Error(`invalid value: ${a}`);
  if (!validNumber(String(b))) return new Error(`invalid value: ${b}`);
  return true;
};
