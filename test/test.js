
import { expect } from 'chai';
import multiply from './multiply.js';

describe('Multiply Function Tests', function () {
  it('should return 1 when multiplying 1 by 1', function () {
    expect(multiply(1, 1)).to.equal(1);
  });
});


it('should return 4 when multiplying 2 by 2', function () {
    expect(multiply(2, 2)).to.equal(4);
  });


  it('should return 9 when multiplying 3 by 3', function () {
    expect(multiply(3, 3)).to.equal(9);
  });
  

  it('should return 16 when multiplying 4 by 4', function () {
    expect(multiply(4, 4)).to.equal(16);
  });
  

  it('should return 1035 when multiplying 23 by 45', function () {
    expect(multiply(23, 45)).to.equal(23 * 45);
  });