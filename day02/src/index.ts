import * as fs from "fs";
import { partOne } from "./partOne";
import { partTwo } from "./partTwo";

console.log("---| Day 02 of Advent of code 2022 |---");

const strategyGuide = fs.readFileSync('inputs.txt', 'utf-8');
const rounds = strategyGuide.split("\n");

console.log("---| Part One |---");
partOne(rounds);

console.log("---| Part Two |---");
partTwo(rounds);


