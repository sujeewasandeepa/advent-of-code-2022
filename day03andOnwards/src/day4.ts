import * as fs from 'fs';

export const DayFour = () => {
    const assignmentPairs = fs.readFileSync('./inputs/day4.txt', 'utf-8').split("\n");

    let pairsFullyContainOther = 0;

    assignmentPairs.map((assignmentPair) => {
        if (assignmentPair) {
            const assignmentPairsArray = assignmentPair.split(',');

            const firstPairLowerLimit = parseInt(assignmentPairsArray[0].split('-')[0]);
            const firstPairUpperLimit = parseInt(assignmentPairsArray[0].split('-')[1]);

            const secondPairLowerLimit = parseInt(assignmentPairsArray[1].split('-')[0]);
            const secondPairUpperLimit = parseInt(assignmentPairsArray[1].split('-')[1]);

            // second assignment fully contains the first assignment 
            if (firstPairLowerLimit >= secondPairLowerLimit && firstPairUpperLimit <= secondPairUpperLimit) {
                pairsFullyContainOther++;
            }
            // first assignment fully contains the second assignment
            else if (firstPairLowerLimit <= secondPairLowerLimit && firstPairUpperLimit >= secondPairUpperLimit) {
                pairsFullyContainOther++;
            }

        } 
    })

    console.log(pairsFullyContainOther);
}
