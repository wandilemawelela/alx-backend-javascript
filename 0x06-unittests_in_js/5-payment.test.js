const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function () {
  let spyConsole;

  beforeEach(function () {
    // Create a spy on console.log before each test
    spyConsole = sinon.spy(console, 'log');
  });

  afterEach(function () {
    // Restore the console.log spy after each test
    spyConsole.restore();
  });

  it('should log correct total for 100 and 20', function () {
    sendPaymentRequestToApi(100, 20);

    // Verify the console.log was called once
    expect(spyConsole.calledOnce).to.be.true;
    
    // Verify the console.log content
    expect(spyConsole.calledWithExactly('The total is: 120')).to.be.true;
  });

  it('should log correct total for 10 and 10', function () {
    sendPaymentRequestToApi(10, 10);

    // Verify the console.log was called once
    expect(spyConsole.calledOnce).to.be.true;
    
    // Verify the console.log content
    expect(spyConsole.calledWithExactly('The total is: 20')).to.be.true;
  });
});
