const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
  it('should resolve with successful response when success is true', function (done) {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        // Verify the response object
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        
        // Call done to signal the end of the async test
        done();
      })
      .catch((error) => {
        // If an error occurs, fail the test
        done(error);
      });
  });
});
