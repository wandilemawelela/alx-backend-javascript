/**
 * display the message Welcome to Holberton School
 * what is your name? (followed by a new line)
 *
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Display the welcome message and prompt for the user's name
console.log('Welcome to Holberton School, what is your name?');

rl.on('line', (input) => {
  console.log(`Your name is: ${input}`);
  rl.close();
});

rl.on('close', () => {
  console.log('This important software is now closing');
  process.exit(0);
});
