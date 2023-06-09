export default function partOne (words: string[]): number {
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
    return maxTotal;
}

