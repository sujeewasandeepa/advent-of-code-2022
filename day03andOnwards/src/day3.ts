import * as fs from 'fs';
import { findSourceMap } from 'module';

const findTheCommonItem = (rucksack:string):string => {
    const firstCompartment:string = rucksack.slice(0, (rucksack.length/2));
    const secondCompartment:string = rucksack.slice((rucksack.length/2), rucksack.length);

    for (let firstItems of firstCompartment) {
        for (let secondItems of secondCompartment) {
            if (firstItems == secondItems) {
                return firstItems;
            }
        }
    }
    
    return '';
}

const calculatePriority = (commonItem:string):number => {
    if (commonItem >= 'a' && commonItem <= 'z') {
        return commonItem.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    } else if (commonItem >= 'A' && commonItem <= 'Z') {
        return commonItem.charCodeAt(0) - 'A'.charCodeAt(0) + 27;
    } else {
        return 0;
    }
}

const findBadge = (rucksacks:string[]):string => {
    let rucksackOne = rucksacks[0];
    let rucksackTwo = rucksacks[1];
    let rucksackThree = rucksacks[2];

    for (let itemOne of rucksackOne) {
        for (let itemTwo of rucksackTwo) {
            for (let itemThree of rucksackThree) {
                if (itemOne == itemTwo && itemTwo == itemThree) {
                    return itemOne;
                }
            }
        }
    }
    return '';
}
export const DayThree = () => {
    let totalPriorities = 0;
    const rucksacks = fs.readFileSync('./inputs/day3.txt', 'utf-8').split("\n");

    // part one
    for (let rucksack of rucksacks) {
        let commonItem = findTheCommonItem(rucksack);
        let commonItemPriority = calculatePriority(commonItem); 
        totalPriorities += commonItemPriority;
    }

    console.log(totalPriorities);

    // part two
    // get groups of three rucksacks
    let totalBadgePriorities = 0;
    for (let i=0; i<rucksacks.length-3; i+=3) {
       const three_rucksacks = [];
       three_rucksacks.push(rucksacks[i]);
       three_rucksacks.push(rucksacks[i+1]);
       three_rucksacks.push(rucksacks[i+2]);
       const badge = findBadge(three_rucksacks); 
       const badgePriority = calculatePriority(badge);
       totalBadgePriorities += badgePriority;
    }

    console.log("Total badge piority:", totalBadgePriorities);
}
