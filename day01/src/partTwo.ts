export default function partTwo (words: string[]): number[] {
    let caloriesByEachElf:number[] = [];

    let i = 0;

    while (true) {
        let caloriesByThisElf:number = 0;

        while (words[i] != '') {
            caloriesByThisElf += parseInt(words[i]);
            i++;
        }
        caloriesByEachElf.push(caloriesByThisElf);
        i++;
        if (i == words.length-1) {
            break;
        }
    }

    return caloriesByEachElf;
}
