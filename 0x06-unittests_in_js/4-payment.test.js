const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function () {
  let stubCalculate;
  let spyConsole;

  beforeEach(function () {
    // Stub Utils.calculateNumber to always return 10
    stubCalculate = sinon.stub(Utils, 'calculateNumber').returns(10);
    
    // Spy on console.log
    spyConsole = sinon.spy(console, 'log');
  });

  afterEach(function () {
    // Restore the stub and the spy
    stubCalculate.restore();
    spyConsole.restore();
  });

  it('should use stub to return 10 and verify stub and console.log', function () {
    sendPaymentRequestToApi(100, 20);

    // Verify the stub was called with correct arguments
    expect(stubCalculate.calledOnceWithExactly('SUM', 100, 20)).to.be.true;

    // Verify console.log was called with the correct message
    expect(spyConsole.calledOnceWithExactly('The total is: 10')).to.be.true;
  });
});
