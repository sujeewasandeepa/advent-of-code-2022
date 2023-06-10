import { decideInput } from "./decideInput";
import { calculateMarks } from "./calculateMarks";

export const partTwo = (rounds:string[]):void => {
    let totalMarks = 0;

    for (let round of rounds) {

        let inputs = round.split(" ");
        let opoInput = inputs[0];
        let outcome = inputs[1];

        // if outcome 
        // is X - need to lose
        // is Y - need to draw
        // is Z - need to win
        let myInput = decideInput(outcome, opoInput);        
        let marks = calculateMarks(myInput, opoInput);

        totalMarks += marks;

    }
    console.log("new total marks: ", totalMarks);
}
