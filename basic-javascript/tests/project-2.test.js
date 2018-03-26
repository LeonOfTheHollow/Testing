/* eslint-disable prefer-destructuring, arrow-parens */

const assert = require('chai').assert;
const funcs = require('../src/project-2');

describe('Project-2 Functions', () => {
  describe('`getBiggest`', () => {
    const getBiggest = funcs.getBiggest;
    it('should be a function', () => {
      assert.typeOf(getBiggest, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(getBiggest(2, 3), 'number');
    });
    it('should return the larger of two numbers', () => {
      assert.strictEqual(getBiggest(3, 2), 3);
      assert.strictEqual(getBiggest(1, 7), 7);
    });
  });

  describe('`greeting`', () => {
    const greeting = funcs.greeting;
    it('should be a function', () => {
      assert.typeOf(greeting, 'function');
    });
    it('should return "Guten Tag!" if the language is German', () => {
      assert.strictEqual(greeting('German'), 'Guten Tag!');
    });
    it('should return "Hola!" if the language is Spanish', () => {
      assert.strictEqual(greeting('Spanish'), 'Hola!');
    });
    it('should return "Hello!" if no language is provided', () => {
      assert.strictEqual(greeting(), 'Hello!');
    });
  });

  describe('`isTenOrFive`', () => {
    const isTenOrFive = funcs.isTenOrFive;
    it('should be a function', () => {
      assert.typeOf(isTenOrFive, 'function');
    });
    it('should return a Boolean', () => {
      assert.typeOf(isTenOrFive(10), 'Boolean');
    });
    it('should return true if a number is 10 or 5', () => {
      assert.strictEqual(isTenOrFive(10), true);
      assert.strictEqual(isTenOrFive(5), true);
    });
    it('should return false for a number that is not 10 or 5', () => {
      assert.strictEqual(isTenOrFive(11), false);
    });
  });

  describe('`isInRange`', () => {
    const isInRange = funcs.isInRange;
    it('should be a function', () => {
      assert.typeOf(isInRange, 'function');
    });
    it('should return a Boolean', () => {
      assert.typeOf(isInRange(10), 'Boolean');
    });
    it('should return true if a number is between 20 and 50', () => {
      assert.isTrue(isInRange(49), true);
      assert.isTrue(isInRange(21), true);
    });
    it('should return false if a number is less than 20 or greater than 50', () => {
      assert.isFalse(isInRange(19), false);
      assert.isFalse(isInRange(51), false);
    });
  });

  describe('`isInteger`', () => {
    const isInteger = funcs.isInteger;
    it('should be a function', () => {
      assert.typeOf(isInteger, 'function');
    });
    it('should return a Boolean', () => {
      assert.typeOf(isInteger(10), 'Boolean');
    });
    it('should return true if the number is an integer', () => {
      assert.isTrue(isInteger(5), true);
    });
    it('should return false if the number is not an integer', () => {
      assert.isFalse(isInteger(7.25), false);
    });
  });

  describe('`fizzBuzz`', () => {
    const fizzBuzz = funcs.fizzBuzz;
    it('should be a function', () => {
      assert.typeOf(fizzBuzz, 'function');
    });
    it('should return "fizzbuzz" for reasons', () => {
      assert.strictEqual(fizzBuzz(30), 'fizzbuzz');
    });
    it('should return "buzz" for other reasons', () => {
      assert.strictEqual(fizzBuzz(10), 'buzz');
    });
    it('should return "fizz" for even other reasons', () => {
      assert.strictEqual(fizzBuzz(6), 'fizz');
    });
    it('should return the number if it can\'t fizzbuzz', () => {
      assert.strictEqual(fizzBuzz(1), 1);
    });
  });

  describe('`isPrime`', () => {
    const isPrime = funcs.isPrime;
    it('should be a function', () => {
      assert.typeOf(isPrime, 'function');
    });
    it('should return a boolean', () => {
      assert.typeOf(isPrime(10), 'boolean');
    });
    it('should return true if the number is prime', () => {
      assert.isTrue(isPrime(7));
    });
    it('should return false if the number is not prime', () => {
      assert.isFalse(isPrime(6));
    });
  });

  describe('`returnFirst`', () => {
    const returnFirst = funcs.returnFirst;
    it('should be a function', () => {
      assert.typeOf(returnFirst, 'function');
    });
    it('should return the first item in an array', () => {
      assert.strictEqual(returnFirst(['bacon', 'eggs', 'toast']), 'bacon');
    });
  });

  describe('`returnLast`', () => {
    const returnLast = funcs.returnLast;
    it('should be a function', () => {
      assert.typeOf(returnLast, 'function');
    });
    it('should return the last item in an array', () => {
      assert.strictEqual(returnLast(['bacon', 'eggs', 'toast']), 'toast');
    });
  });

  describe('`getArrayLength`', () => {
    const getArrayLength = funcs.getArrayLength;
    it('should be a function', () => {
      assert.typeOf(getArrayLength, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(getArrayLength(['bacon', 'eggs', 'toast']), 'number');
    });
    it('should return the length of the array', () => {
      assert.strictEqual(getArrayLength(['bacon', 'eggs', 'toast']), 3);
    });
  });

  describe('`incrementByOne`', () => {
    const incrementByOne = funcs.incrementByOne;
    it('should be a function', () => {
      assert.typeOf(incrementByOne, 'function');
    });
  });

  describe('`addItemToArray`', () => {
    const addItemToArray = funcs.addItemToArray;
    it('should be a function', () => {
      assert.typeOf(addItemToArray, 'function');
    });
  });

  describe('`addItemToFront`', () => {
    const addItemToFront = funcs.addItemToFront;
    it('should be a function', () => {
      assert.typeOf(addItemToFront, 'function');
    });
  });

  describe('`wordsToSentence`', () => {
    const wordsToSentence = funcs.wordsToSentence;
    it('should be a function', () => {
      assert.typeOf(wordsToSentence, 'function');
    });
  });

  describe('`contains`', () => {
    const contains = funcs.contains;
    it('should be a function', () => {
      assert.typeOf(contains, 'function');
    });
  });

  describe('`addNumbers`', () => {
    const addNumbers = funcs.addNumbers;
    it('should be a function', () => {
      assert.typeOf(addNumbers, 'function');
    });
  });

  describe('`averageTestScore`', () => {
    const averageTestScore = funcs.averageTestScore;
    it('should be a function', () => {
      assert.typeOf(averageTestScore, 'function');
    });
  });

  describe('`largestNumber`', () => {
    const largestNumber = funcs.largestNumber;
    it('should be a function', () => {
      assert.typeOf(largestNumber, 'function');
    });
  });
});
