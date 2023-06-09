export default function partOne(words) {
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
    return maxTotal;
}
