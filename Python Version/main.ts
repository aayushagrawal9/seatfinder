/*************************/
//Data Files
/*************************/
const data = {
    "genre": "dfgdfg",
    "imdb": "dfgdfg",
    "seats": {
        "a1": {
            "column": "1",
            "id": "a1",
            "row": "a",
            "status": "OCCUPIED"
        },
        "a2": {
            "column": "2",
            "id": "a2",
            "row": "a",
            "status": "OCCUPIED"
        },
        "a3": {
            "column": "3",
            "id": "a3",
            "row": "a",
            "status": "OCCUPIED"
        },
        "a4": {
            "column": "4",
            "id": "a4",
            "row": "a",
            "status": "OCCUPIED"
        },
        "a5": {
            "column": "5",
            "id": "a5",
            "row": "a",
            "status": "OCCUPIED"
        },
        "b1": {
            "column": "1",
            "id": "b1",
            "row": "b",
            "status": "OCCUPIED"
        },
        "b2": {
            "column": "2",
            "id": "b2",
            "row": "b",
            "status": "OCCUPIED"
        },
        "b3": {
            "column": "3",
            "id": "b3",
            "row": "b",
            "status": "OCCUPIED"
        },
        "b4": {
            "column": "4",
            "id": "b4",
            "row": "b",
            "status": "OCCUPIED"
        },
        "b5": {
            "column": "5",
            "id": "b5",
            "row": "b",
            "status": "OCCUPIED"
        },
        "c1": {
            "column": "1",
            "id": "c1",
            "row": "c",
            "status": "AVAILABLE"
        },
        "c2": {
            "column": "2",
            "id": "c2",
            "row": "c",
            "status": "AVAILABLE"
        },
        "c3": {
            "column": "3",
            "id": "c3",
            "row": "c",
            "status": "AVAILABLE"
        },
        "c4": {
            "column": "4",
            "id": "c4",
            "row": "c",
            "status": "AVAILABLE"
        },
        "c5": {
            "column": "5",
            "id": "c5",
            "row": "c",
            "status": "AVAILABLE"
        },
        "d1": {
            "column": "1",
            "id": "d1",
            "row": "d",
            "status": "AVAILABLE"
        },
        "d2": {
            "column": "2",
            "id": "d2",
            "row": "d",
            "status": "AVAILABLE"
        },
        "d3": {
            "column": "3",
            "id": "d3",
            "row": "d",
            "status": "AVAILABLE"
        },
        "d4": {
            "column": "4",
            "id": "d4",
            "row": "d",
            "status": "AVAILABLE"
        },
        "d5": {
            "column": "5",
            "id": "d5",
            "row": "d",
            "status": "AVAILABLE"
        },
        "e1": {
            "column": "1",
            "id": "e1",
            "row": "e",
            "status": "AVAILABLE"
        },
        "e2": {
            "column": "2",
            "id": "e2",
            "row": "e",
            "status": "AVAILABLE"
        },
        "e3": {
            "column": "3",
            "id": "e3",
            "row": "e",
            "status": "AVAILABLE"
        },
        "e4": {
            "column": "4",
            "id": "e4",
            "row": "e",
            "status": "AVAILABLE"
        },
        "e5": {
            "column": "5",
            "id": "e5",
            "row": "e",
            "status": "AVAILABLE"
        },
        "f1": {
            "column": "1",
            "id": "f1",
            "row": "f",
            "status": "AVAILABLE"
        },
        "f2": {
            "column": "2",
            "id": "f2",
            "row": "f",
            "status": "AVAILABLE"
        },
        "f3": {
            "column": "3",
            "id": "f3",
            "row": "f",
            "status": "AVAILABLE"
        },
        "f4": {
            "column": "4",
            "id": "f4",
            "row": "f",
            "status": "AVAILABLE"
        },
        "f5": {
            "column": "5",
            "id": "f5",
            "row": "f",
            "status": "AVAILABLE"
        },
        "g1": {
            "column": "1",
            "id": "g1",
            "row": "g",
            "status": "AVAILABLE"
        },
        "g2": {
            "column": "2",
            "id": "g2",
            "row": "g",
            "status": "AVAILABLE"
        },
        "g3": {
            "column": "3",
            "id": "g3",
            "row": "g",
            "status": "AVAILABLE"
        },
        "g4": {
            "column": "4",
            "id": "g4",
            "row": "g",
            "status": "AVAILABLE"
        },
        "g5": {
            "column": "5",
            "id": "g5",
            "row": "g",
            "status": "AVAILABLE"
        },
        "h1": {
            "column": "1",
            "id": "h1",
            "row": "h",
            "status": "AVAILABLE"
        },
        "h2": {
            "column": "2",
            "id": "h2",
            "row": "h",
            "status": "AVAILABLE"
        },
        "h3": {
            "column": "3",
            "id": "h3",
            "row": "h",
            "status": "AVAILABLE"
        },
        "h4": {
            "column": "4",
            "id": "h4",
            "row": "h",
            "status": "AVAILABLE"
        },
        "h5": {
            "column": "5",
            "id": "h5",
            "row": "h",
            "status": "AVAILABLE"
        },
        "i1": {
            "column": "1",
            "id": "i1",
            "row": "i",
            "status": "AVAILABLE"
        },
        "i2": {
            "column": "2",
            "id": "i2",
            "row": "i",
            "status": "AVAILABLE"
        },
        "i3": {
            "column": "3",
            "id": "i3",
            "row": "i",
            "status": "AVAILABLE"
        },
        "i4": {
            "column": "4",
            "id": "i4",
            "row": "i",
            "status": "AVAILABLE"
        },
        "i5": {
            "column": "5",
            "id": "i5",
            "row": "i",
            "status": "AVAILABLE"
        },
        "j1": {
            "column": "1",
            "id": "j1",
            "row": "j",
            "status": "AVAILABLE"
        },
        "j2": {
            "column": "2",
            "id": "j2",
            "row": "j",
            "status": "AVAILABLE"
        },
        "j3": {
            "column": "3",
            "id": "j3",
            "row": "j",
            "status": "AVAILABLE"
        },
        "j4": {
            "column": "4",
            "id": "j4",
            "row": "j",
            "status": "AVAILABLE"
        },
        "j5": {
            "column": "5",
            "id": "j5",
            "row": "j",
            "status": "AVAILABLE"
        }
    },
    "summary": "tushar1",
    "title": "tushar1",
    "venue": {
        "layout": {
            "columns": "5",
            "rows": "10"
        }
    },
    "year": "fdgdf"
}

/*************************/
//Constants
/*************************/
const rows = data['venue']['layout']['rows'];
const cols = data['venue']['layout']['columns'];
const process = require('process');

function isInArray(value, array) {
    return array.hasOwnProperty(value);
}

function intToSeatId(i, j) {
    const character = String.fromCharCode(97 + i);
    return `${character}${j+1}`;
}

function isAvailable(i, j, noOfSeats) {
    for (var foo = 0; foo < noOfSeats; foo++) {
        const colIndex = foo + j;
        if (!isInArray(intToSeatId(i, colIndex), data['seats'])) {
            return false;
        }
        if (data['seats'][intToSeatId(i, colIndex)]['status'] != 'AVAILABLE') {
            return false;
        }
    }
    return true;
}

function closestToTheMiddle(availables) {
    var currentFavorite = [];
    var currentLowestDistance = cols+1;

    for (var i = 0; i < availables.length; i++) {
        const current = availables[i];
        const distFromMiddle = Math.abs(data['venue']['layout']['columns']/2 - current[1]);
        
        if (distFromMiddle < currentLowestDistance) {
            currentFavorite = current;
            currentLowestDistance = distFromMiddle;
        }
    }

    return currentFavorite;
}

function findBestAvailableSeat(noOfSeats) {
    for (var i = 0; i < rows; i++) {
        var availables = [];
        for (var j = 0; j < rows; j++) {
            if (isAvailable(i, j, noOfSeats)) {
                availables.push([i, j]);
            }
        }

        if (availables.length > 0) {
            return closestToTheMiddle(availables);
        }
    }
}

function printBestAvailableSeats(bestAvailableSeat, noOfSeats) {
    var string = "";
    for (var i = 0; i < noOfSeats; i++) {
        if (noOfSeats >= cols/2+0.51) {
            string = string + `${intToSeatId(bestAvailableSeat[0], bestAvailableSeat[1]+i)} `
        }
        else
        {
            string = string + `${intToSeatId(bestAvailableSeat[0], bestAvailableSeat[1]-i)} `
        }
    }

    console.log(string);
}

function main(noOfSeats = 1) {
    if (noOfSeats > cols) {
        console.log('Error: Number of seats requested exceeds number of seats available in a row');
        return 1;
    }

    const bestAvailableSeat = findBestAvailableSeat(noOfSeats);

    if (bestAvailableSeat == undefined) {
        console.log('Error: Could not find seat. This may be because no appropriate seats are available');
        return 1;
    }

    printBestAvailableSeats(bestAvailableSeat, noOfSeats);
    
    return 0;
}

main(process.argv[2])