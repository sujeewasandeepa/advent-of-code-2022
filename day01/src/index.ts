import * as fs from 'fs';

const inputs = fs.readFileSync('inputs.txt', 'utf-8');
const words = inputs.split("\n");

let maxTotal:number = 0;
let i:number = 0;

while (true) {
    let total:number = 0;
    while (words[i] != '') {
        total += parseInt(words[i]);
        i++;
    }
    if (total > maxTotal) {
        maxTotal = total;
    }
    if (i == words.length -1) {
        break;
    }
    i++;
}

console.log(maxTotal);
