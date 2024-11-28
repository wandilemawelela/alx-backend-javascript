const express = require('express');

const app = express();
const port = 7865;

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Cart route with numeric ID validation using regex
app.get('/cart/:id(\\d+)', (req, res) => {
  const cartId = req.params.id;
  res.send(`Payment methods for cart ${cartId}`);
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
