const { expect } = require('chai');
const request = require('request');

describe('Index page', () => {
  const apiUrl = 'http://localhost:7865';
  const expectedMessage = 'Welcome to the payment system';

  it('should have correct status code', (done) => {
    request(apiUrl, (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct result', (done) => {
    request(apiUrl, (error, response, body) => {
      expect(body).to.equal(expectedMessage);
      done();
    });
  });

  it('should have the correct content length', (done) => {
    request(apiUrl, (error, response, body) => {
      expect(response.headers['content-length']).to.equal(String(expectedMessage.length));
      done();
    });
  });
});
