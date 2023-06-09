import * as fs from 'fs';
const inputs = fs.readFileSync('inputs.txt', 'utf-8');
const words = inputs.split("\n");
let maxTotal = 0;
let i = 0;
while (true) {
    let total = 0;
    while (words[i] != '') {
        total += parseInt(words[i]);
        i++;
    }
    if (total > maxTotal) {
        maxTotal = total;
    }
    if (i == words.length - 1) {
        break;
    }
    i++;
}
console.log(maxTotal);
