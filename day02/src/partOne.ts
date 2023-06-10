import { calculateMarks } from "./calculateMarks";

export const partOne = (rounds:string[]):void => {
    let totalMarks:number = 0;

    rounds.map((round) => {
        let inputs = round.split(" ");
        let myInput = inputs[1];
        let opoInput = inputs[0];

        let marks = calculateMarks(myInput, opoInput);

        totalMarks += marks;

    })

    console.log(totalMarks);
}

