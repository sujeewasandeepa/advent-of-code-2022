// determine if which crate will end up on top of each stack 
// after performing all the mentioned operations. 
import * as fs from 'fs';
import { Stack } from './data-structures/Stack';

export const DayFive = () => {
    const inputs = fs.readFileSync('./inputs/day5.txt', 'utf-8');
    let inputsSections: String[] = inputs.split("\n\n");
    const stackStrings = inputsSections[0].split("\n");
    console.log(stackStrings);
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

    const stackArray = [
        stack01, stack02, stack03, stack03, stack04, stack05,
        stack06, stack07, stack08, stack09
    ]

    for (let row=0; row<stackStrings.length; row++) {
        for (let col=0; col<stackStrings[row].length; col++) {
            let character = stackStrings[row][col];
            if (character && character != '[' && character != ']' && character != ' ') {
                console.log(character);
            }
        }
    }
        
    console.log(stack01);
    
} 
