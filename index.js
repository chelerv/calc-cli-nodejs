var Calculator = require("./Calculator")
const calc = new Calculator();

function log(msg){
    console.log(msg);
}

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'calc>'
});

rl.prompt();

rl.on('line', (line) => {
    let r = calc.processInput(line.trim());
    if (r === 'q' ) rl.close();
    if (r || r === 0) log(r);
    if (isNaN(r)) log("NaN");

    rl.prompt();
}).on('close', () => {
    process.exit(0);
});



