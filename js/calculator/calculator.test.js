const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

//  test function divide
test('divide 20 / 2 to equal 10', () => {
  expect(calculator.divide(20, 2)).toBe(10)
})

test('divide -15 / 3 to equal -5', () => {
  expect(calculator.divide(-15, 3)).toBe(-5)
})

// test function multiply
test('multiply 12 * 5 to equal 60', () => {
  expect(calculator.multiply(12, 5)).toBe(60)
})

test('multiply -8 * 7 to equal -56', () => {
  expect(calculator.multiply(-8, 7)).toBe(-56)
})

// test function divide with second argument = 0
test('divide 23 / 0 should throw Syntax error', () => {
  expect(()=>calculator.divide(23, 0)).toThrow('Syntax error');
});

