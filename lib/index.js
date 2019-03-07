const readLine = require('readline');
const reader = readLine.createInterface(
  {input:process.stdin, output: process.stdout, terminal: false}
  );
const command = process.argv[2];
reader.on('line', (t) => {
  if (command) {
    console.log(eval(command));
  } else {
    console.log(t);
  }
});
