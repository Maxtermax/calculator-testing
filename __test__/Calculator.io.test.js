const Calculator = require("..");

describe("Calculator", () => {
  let calculus;
  beforeAll(() => {
    calculus = new Calculator();
  });

  it("2 + 2 should be equals to 4 using the add method", () => {
    expect(calculus.add(2, 2)).toBe(4);
  });

  it("2 - 2 should be equals to 0 using the substract method", () => {
    expect(calculus.substract(2, 2)).toBe(0);
  });

  it("2 * 2 should be equals to 4 using the multiply method", () => {
    expect(calculus.multiply(2, 2)).toBe(4);
  });

  it("2 / 2 should be equals to 1 using the divide method", () => {
    expect(calculus.divide(2, 2)).toBe(1);
  });

  it("passing strings to the method 'divide' should throw an error", () => {
    expect(() => {
      throw calculus.divide("2", "2");
    }).toThrowError(new Error(`invalid type: 2`));
  });

  it("passing strings to the method 'add' should throw an error", () => {
    expect(() => {
      throw calculus.add("2", "2");
    }).toThrowError(new Error(`invalid type: 2`));
  });

  it("passing strings to the method 'substract' should throw an error", () => {
    expect(() => {
      throw calculus.substract("2", "2");
    }).toThrowError(new Error(`invalid type: 2`));
  });

  it("passing strings to the method 'multiply' should throw an error", () => {
    expect(() => {
      throw calculus.multiply("2", "2");
    }).toThrowError(new Error(`invalid type: 2`));
  });
});
