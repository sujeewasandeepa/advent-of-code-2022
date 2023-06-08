import * as fs from 'fs';
const inputs = fs.readFileSync('inputs.txt', 'utf-8');
const words = inputs.split("\n");
words.map((word) => {
    let maxTotal = 0;
    if (word != "") {
        console.log(word);
    }
});
