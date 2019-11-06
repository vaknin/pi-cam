// Consts
const fs = require ('fs');

const { spawn } = require('child_process');
const args = [];
args.push('-w', '25');
args.push('-h', '25');
args.push('-o', '-');
const raspistill = spawn('raspistill', args);

// stdout stream
raspistill.stdout.on('data', data => {
    fs.writeFile('./stdout.txt', data, (err) => {
        if (err) throw err;
        else console.log('written to file');
    });
});

// stderr stream 
raspistill.stderr.on('data', data => {
    console.log('Error: ' + data);
})

// stream closed
raspistill.stdout.on('close', () => {
    console.log(`Done.`);
});

/*

Cool args to try:
-roi 0 ~ roi 1
-a 4/8/12

*/