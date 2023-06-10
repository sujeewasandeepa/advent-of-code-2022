import * as fs from 'fs';

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

export const DayThree = () => {
    let totalPriorities = 0;
    const rucksacks = fs.readFileSync('./inputs/day3.txt', 'utf-8').split("\n");

    for (let rucksack of rucksacks) {
        let commonItem = findTheCommonItem(rucksack);
        let commonItemPriority = calculatePriority(commonItem); 
        totalPriorities += commonItemPriority;
    }

    console.log(totalPriorities);
}
