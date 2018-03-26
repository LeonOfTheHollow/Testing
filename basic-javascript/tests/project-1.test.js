/* eslint-disable prefer-destructuring */

const assert = require('chai').assert;
const funcs = require('../src/project-1');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test to see if the expected return output is of a specified type, as well as the correct outcome.

describe('Project-1 Functions', () => {
  const testNumbers = [2, 3, 4, 5, 10, -2, -3, -4, -5, -10, 17.2, 81.56];

  describe('`multiplyByTen`', () => {
    const multiplyByTen = funcs.multiplyByTen;
    it('should be a function', () => {
      assert.typeOf(multiplyByTen, 'function');
    });
    it('should return a Number multiplied by ten.', () => {
      testNumbers.forEach(v => {
        assert.typeOf(multiplyByTen(v), 'Number');
        assert.strictEqual(multiplyByTen(v), v * 10);
      });
    });
  });

  describe('`subtractFive`', () => {
    const subtractFive = funcs.subtractFive;
    it('should be a function', () => {
      assert.typeOf(subtractFive, 'function');
    });
    it('should return a number five less than the given number.', () => {
      testNumbers.forEach(v => {
        assert.typeOf(subtractFive(v), 'Number');
        assert.strictEqual(subtractFive(v), v - 5);
      });
    });
  });

  describe('`areSameLength`', () => {
    const areSameLength = funcs.areSameLength;
    it('should be a function', () => {
      assert.typeOf(areSameLength, 'function');
    });
    it('should return a Boolean', () => {
      assert.typeOf(areSameLength('Test', 'Test'), 'Boolean');
    });
    it('should return true if both strings are of the same length.', () => {
      assert.isTrue(areSameLength('Test String One', 'Test String Two'));
    });
    it('should return false if both strings are of differing lengths.', () => {
      assert.isFalse(areSameLength('Test String', 'Another test string...'));
    });
  });

  describe('`areEqual`', () => {
    const areEqual = funcs.areEqual;
    it('should be a function', () => {
      assert.typeOf(areEqual, 'function');
    });
    it('should return a Boolean.', () => {
      assert.typeOf(areEqual(2, 2), 'Boolean');
    });
    it('should return true if both arguments are equal.', () => {
      assert.isTrue(areEqual(2, 2));
    });
    it('should return false if both arguments are not equal.', () => {
      assert.isFalse(areEqual(2, 3));
    });
  });

  describe('`lessThanNinety`', () => {
    const lessThanNinety = funcs.lessThanNinety;
    it('should be a function', () => {
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should return a Boolean.', () => {
      assert.typeOf(lessThanNinety(69), 'Boolean');
    });
    it('should return true if a number is less than 90.', () => {
      assert.isTrue(lessThanNinety(89));
    });
    it('should return false if a number is not less than 90.', () => {
      assert.isFalse(lessThanNinety(91));
    });
  });

  describe('`greaterThanFifty`', () => {
    const greaterThanFifty = funcs.greaterThanFifty;
    it('should be a function', () => {
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should return a Boolean.', () => {
      assert.typeOf(greaterThanFifty(69), 'Boolean');
    });
    it('should return true if a number is greater than 50.', () => {
      assert.isTrue(greaterThanFifty(51));
    });
    it('should return false if a number is not greater than 50.', () => {
      assert.isFalse(greaterThanFifty(49));
    });
  });

  describe('`add`', () => {
    const add = funcs.add;
    it('should be a function', () => {
      assert.typeOf(add, 'function');
    });
    it('should return a number.', () => {
      assert.typeOf(add(1, 3), 'number');
    });
    it('should return the sum of two numbers.', () => {
      testNumbers.forEach(v => {
        assert.strictEqual(add(v, 5), v + 5);
        assert.strictEqual(add(v, -5), v + -5);
      });
    });
  });

  describe('`subtract`', () => {
    const subtract = funcs.subtract;
    it('should be a function', () => {
      assert.typeOf(subtract, 'function');
    });
    it('should return a number.', () => {
      assert.typeOf(subtract(1, 3), 'number');
    });
    it('should return the difference between two numbers.', () => {
      testNumbers.forEach(v => {
        assert.strictEqual(subtract(v, 5), v - 5);
        assert.strictEqual(subtract(v, -5), v - -5);
      });
    });
  });

  describe('`divide`', () => {
    const divide = funcs.divide;
    it('should be a function', () => {
      assert.typeOf(divide, 'function');
    });
    it('should return a number.', () => {
      assert.typeOf(divide(7, 14), 'number');
    });
    it('should return the quotient of two numbers.', () => {
      testNumbers.forEach(v => {
        assert.strictEqual(divide(v, 10), v / 10);
        assert.strictEqual(divide(v, 82.1), v / 82.1);
      });
    });
  });

  describe('`multiply`', () => {
    const multiply = funcs.multiply;
    it('should be a function', () => {
      assert.typeOf(multiply, 'function');
    });
    it('should return a number.', () => {
      assert.typeOf(multiply(7, 14), 'number');
    });
    it('should return the product of two numbers.', () => {
      testNumbers.forEach(v => {
        assert.strictEqual(multiply(v, 10), v * 10);
        assert.strictEqual(multiply(v, 82.1), v * 82.1);
      });
    });
  });

  describe('`getRemainder`', () => {
    const getRemainder = funcs.getRemainder;
    it('should be a function', () => {
      assert.typeOf(getRemainder, 'function');
    });
    it('should return a number.', () => {
      assert.typeOf(getRemainder(7, 14), 'number');
    });
    it('should return the remainer of two numbers.', () => {
      testNumbers.forEach(v => {
        assert.strictEqual(getRemainder(v, 10), v % 10);
        assert.strictEqual(getRemainder(v, 82.1), v % 82.1);
      });
    });
  });

  describe('`isEven`', () => {
    const isEven = funcs.isEven;
    it('should be a function', () => {
      assert.typeOf(isEven, 'function');
    });
    it('should return a Boolean.', () => {
      assert.typeOf(isEven(4), 'Boolean');
    });
    it('should return true for even numbers.', () => {
      assert.isTrue(isEven(4));
      assert.isTrue(isEven(8));
    });
    it('should return false for odd numbers', () => {
      assert.isFalse(isEven(9));
      assert.isFalse(isEven(2379235));
    });
  });

  describe('`isOdd`', () => {
    const isOdd = funcs.isOdd;
    it('should be a function', () => {
      assert.typeOf(isOdd, 'function');
    });
    it('should return a Boolean.', () => {
      assert.typeOf(isOdd(4), 'Boolean');
    });
    it('should return true for odd numbers.', () => {
      assert.isTrue(isOdd(5));
      assert.isTrue(isOdd(7));
    });
    it('should return false for even numbers', () => {
      assert.isFalse(isOdd(4));
      assert.isFalse(isOdd(2379236));
    });
  });

  describe('`square`', () => {
    it('should be a function', () => {
      const square = funcs.square;
      assert.typeOf(square, 'function');
    });
  });

  describe('`cube`', () => {
    it('should be a function', () => {
      const cube = funcs.cube;
      assert.typeOf(cube, 'function');
    });
  });

  describe('`raiseToPower`', () => {
    it('should be a function', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower, 'function');
    });
  });

  describe('`roundNumber`', () => {
    it('should be a function', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber, 'function');
    });
  });

  describe('`roundUp`', () => {
    it('should be a function', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp, 'function');
    });
  });

  describe('`addExclamationPoint`', () => {
    it('should be a function', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint, 'function');
    });
  });

  describe('`combineNames`', () => {
    it('should be a function', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames, 'function');
    });
  });

  describe('`getGreeting`', () => {
    it('should be a function', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting, 'function');
    });
  });

  describe('`getRectangleArea`', () => {
    it('should be a function', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea, 'function');
    });
  });

  describe('`getTriangleArea`', () => {
    it('should be a function', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea, 'function');
    });
  });

  describe('`getCircleArea`', () => {
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea, 'function');
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    it('should be a function', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
  });
});
