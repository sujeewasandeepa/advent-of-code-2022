// determine if which crate will end up on top of each stack 
// after performing all the mentioned operations. 
import * as fs from 'fs';
import { Stack } from './data-structures/Stack';

export const DayFive = () => {
    const inputs = fs.readFileSync('./inputs/day5.txt', 'utf-8');
    let inputsSections: String[] = inputs.split("\n\n");
    const stackStrings = inputsSections[0];
    const actions = inputsSections[1];

    const stack01 = new Stack<string>();
    const stack02 = new Stack<string>();
    const stack03 = new Stack<string>();
    const stack04 = new Stack<string>();
    const stack05 = new Stack<string>();
    const stack06 = new Stack<string>();
    const stack07 = new Stack<string>();
    const stack08 = new Stack<string>();
    const stack09 = new Stack<string>();

    for (let row=0; row<stackStrings.length; row++) {
        for (let col=0; col<10; col++) {
            console.log(stackStrings[row][col]);
        }
    }
    
} 
