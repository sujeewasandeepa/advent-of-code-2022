export default function partTwo(words) {
    let caloriesByEachElf = [];
    let i = 0;
    while (true) {
        let caloriesByThisElf = 0;
        while (words[i] != '') {
            caloriesByThisElf += parseInt(words[i]);
            i++;
        }
        caloriesByEachElf.push(caloriesByThisElf);
        i++;
        if (i == words.length - 1) {
            break;
        }
    }
    return caloriesByEachElf;
}
