// Oponent Rock = A        my Rock = X
// Oponent Paper = B       my Paper = y
// Oponent Scissors = C    my Scissors = z
export const calculateMarks = (myInput:string, opoInput:string):number => {
    let marks = 0;

    if (myInput) {
        myInput = myInput.toUpperCase();
    } else {
        return 0;
    }
    
    if (myInput == 'X') {
        marks += 1;
        if (opoInput == 'A') {
            marks += 3;
        } else if (opoInput == 'C') {
            marks += 6;
        }
    }

    if (myInput == 'Y') {
        marks += 2;
        if (opoInput == 'A') {
            marks += 6;
        } else if (opoInput == 'B') {
            marks += 3;
        }
    }

    if (myInput == 'Z') {
        marks += 3;
        if (opoInput == 'B') {
            marks += 6;
        } else if (opoInput == 'C') {
            marks += 3;
        }
    }

    return marks;
}

