module.exports = () => {
  const readLine = require('readline');
  const reader = readLine.createInterface(
    {input: process.stdin, output: process.stdout, terminal: false}
  );
  const commands = process.argv.slice(2);
  let exec = false;
  let func = false;
  let result = false;
  let mode = 'line';
  commands.forEach((item) => {
    if (item.substr(0, 2) === '-e') {
      exec = item.substr(2).trim();
    } else if (item.substr(0, 2) === '-f') {
      func = item.substr(2).trim();
    } else if (item.substr(0, 2) === '-w') {
      mode = 'all';
    } else if (!exec) {
      exec = item.trim();
    }
  });

  reader.on('line', (data) => {
    if (mode === 'line') {

    }

  });

  const apply = () => {
    if (exec) {
      console.log(eval(exec));
    } else if (func) {
      let exec = eval(func);
      result = exec(data, result);
      console.log(result);
    } else {
      console.log(data);
    }
  };
}
