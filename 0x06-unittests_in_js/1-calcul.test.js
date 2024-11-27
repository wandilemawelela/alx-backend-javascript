const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should return 4 when inputs are 1 and 3', function() {
      assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    });

    it('should return 5 when inputs are 1.4 and 3.6', function() {
      assert.strictEqual(calculateNumber('SUM', 1.4, 3.6), 5);
    });

    it('should return 6 when inputs are 1.5 and 3.5', function() {
      assert.strictEqual(calculateNumber('SUM', 1.5, 3.5), 6);
    });
  });

  describe('SUBTRACT', function() {
    it('should return 0 when inputs are -1.4 and -0.6', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.4, -0.6), 0);
    });

    it('should return 0 when inputs are 0.1 and -0.1', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 0.1, -0.1), 0);
    });

    it('should return -3 when inputs are 1.4 and 3.5', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 3.5), -3);
    });
  });

  describe('DIVIDE', function() {
    it('should return 2 when inputs are 4.4 and 2', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 4.4, 2), 2);
    });

    it('should return 2.5 when inputs are 4.5 and 2.4', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 4.5, 2.4), 2.5);
    });

    it('should return Error when dividing by 0', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 4.4, 0.4), 'Error');
    });

    it('should return Error when rounded divisor is 0', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0.1), 'Error');
    });
  });
});
