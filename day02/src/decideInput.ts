export const decideInput = (outcome:string, opoInput:string):string => {
    switch(outcome) {
        // need to lose
        case("X"): {
            if (opoInput == "A") {
                return "Z";
            } else if (opoInput == "B") {
                return "X";
            } else if (opoInput == "C"){
                return "Y";
            }
        }

        // need to draw
        case ("Y"): {
            if (opoInput == "A") {
                return "X";
            } else if (opoInput == "B") {
                return "Y";
            } else if (opoInput == "C") {
                return "Z";
            }
        }

        // need to win
        case("Z"): {
            if (opoInput == "A") {
                return "Y";
            } else if (opoInput == "B") {
                return "Z";
            } else if (opoInput == "C") {
                return "X";
            }
        }
    }
    return "";
}
