const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

r1.question('Who are you?', (answer) => {
  console.log(`Welcome ${answer}`);
});

r1.on('line', (input) => {
  console.log(`Received: ${input}`);
  r1.close();
});
