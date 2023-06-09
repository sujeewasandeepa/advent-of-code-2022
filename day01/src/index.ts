import * as fs from 'fs';
import partOne from "./partOne.js";
import partTwo from './partTwo.js';

const inputs = fs.readFileSync('inputs.txt', 'utf-8');
const words = inputs.split("\n");

let mostCaloriesCarriedByAnElf = partOne(words);
console.log("Most calories carried by an elf:", mostCaloriesCarriedByAnElf);

let caloriesByEachElf = partTwo(words);
// calories in Descending order
caloriesByEachElf.sort((a, b) => b - a);
let caloriesByTopThreeElves = caloriesByEachElf.slice(0, 3);
let totalOfTopThreeElves:number = 0;

caloriesByTopThreeElves.forEach((calories:number) => {
    totalOfTopThreeElves += calories;
})

console.log("Total of top three elves: ", totalOfTopThreeElves);
