// determine if which crate will end up on top of each stack 
// after performing all the mentioned operations. 
import * as fs from 'fs';
import { Stack } from './data-structures/Stack';

export const DayFive = () => {
    const inputs = fs.readFileSync('./inputs/day5.txt', 'utf-8');
    //const inputs = fs.readFileSync('./inputs/day5-short.txt', 'utf-8');
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
        for (let row=stackStrings.length-2; row>=0; row--) {
            let character = stackStrings[row][col];
            if (character && character != '[' && character != ']' && character != ' ') {
                stacksInOne.push(character);
                characterValid = true;
            } 
        }
        if (characterValid) {
            stacksInOne.push("\n");
        }
    }

    let stackNumber = 0;
    stacksInOne.forEach((element) => {
        if (element == '\n') {
            stackNumber ++;
            return;
        }
        if (stackNumber <= stackArray.length-1) {
            stackArray[stackNumber].insert(element);
        }
    })


    console.log(stackArray);
    const actionsRows = actions.split("\n");

    for (let row in actionsRows) {
        let action = actionsRows[row];

        let quantityStr = action.split(" ")[1];
        let from = action.split(" ")[3];
        let to = action.split(" ")[5];


        if (from && to && quantityStr) {
            let fromStackIndex = parseInt(from) - 1;
            let fromStack = stackArray[fromStackIndex];

            let toStackIndex = parseInt(to) -1;
            let toStack = stackArray[toStackIndex];

            let quantity = parseInt(quantityStr);


          // put into the to stack from temp stack
            for (let i=0; i<quantity; i++) {
                let temp = fromStack.pop();
                if (temp) {
                    toStack.insert(temp);
                }
            }

        }
        console.log(stackArray);

    }

    // getting what's on top of each stack
    let cratesOnTop:string[] = [];
    stackArray.map((stack) => {
        let temp = stack.peek();
        if (temp) {
            cratesOnTop.push(temp);
        }
    })

    console.log(cratesOnTop.join(''));

} 
