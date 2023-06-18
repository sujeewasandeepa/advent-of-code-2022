// determine if which crate will end up on top of each stack 
// after performing all the mentioned operations. 
import * as fs from 'fs';
import { Stack } from './data-structures/Stack';

export const DayFive = () => {
    const inputs = fs.readFileSync('./inputs/day5.txt', 'utf-8');
    let inputsSections: String[] = inputs.split("\n\n");
    const stackStrings = inputsSections[0].split("\n");
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
        stack01, stack02, stack03, stack04, stack05,
        stack06, stack07, stack08, stack09
    ]

    let stacksInOne = [];

    for (let col=0; col<stackStrings[0].length; col++) {
        let characterValid = false;
        for (let row=0; row<stackStrings.length-1; row++) {
            let character = stackStrings[row][col];
            if (character && character != '[' && character != ']' && character != ' ') {
                stacksInOne.push(character);
                characterValid = true;
            } else {
                characterValid = false;
            }
        }
        if (characterValid) {
            stacksInOne.push("\n");
        }
    }
    console.log(stacksInOne);

    let stackNumber = 0;
    stacksInOne.forEach((element) => {
        console.log(element);
        if (element == '\n') {
            stackNumber ++;
            return;
        }
        if (stackNumber <= stackArray.length-1) {
            stackArray[stackNumber].insert(element);
        }
    })
       
    console.log(stack01);
    console.log(stack02);
    console.log(stack03);
    console.log(stack04);
    console.log(stack05);
    console.log(stack06);
    console.log(stack07);
    console.log(stack08);
    console.log(stack09);

    
} 
