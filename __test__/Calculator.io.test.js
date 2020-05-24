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
});
