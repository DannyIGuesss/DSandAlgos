// You are keeping the scores for a baseball game with strange rules. At the beginning of the game, you start with an empty record.

// You are given a list of strings operations, where operations[i] is the ith operation you must apply to the record and is one of the following:

// An integer x.
// Record a new score of x.
// '+'.
// Record a new score that is the sum of the previous two scores.
// 'D'.
// Record a new score that is the double of the previous score.
// 'C'.
// Invalidate the previous score, removing it from the record.
// Return the sum of all the scores on the record after applying all the operations.

// The test cases are generated such that the answer and all intermediate calculations fit in a 32-bit integer and that all operations are valid.

var calPoints = function (operations) {
    //start with a new array
    const record = [];

    // loop through the operations array to check each element
    for (let i = 0; i < operations.length; i++) {

        const latestScore = record[record.length - 1]
        const previousScore = record[record.length - 2]


        //if statement if operations[i] is equal to '+' then sum two previous scores
        if (operations[i] == '+') {
            record.push(parseInt(latestScore) + parseInt(previousScore))
        }
        //if statement if operations[i] equals 'D' then multilply by 2 the previous score
        else if (operations[i] == 'D') {
            record.push(2 * latestScore)
        }
        //if statement if operations[i] equals 'C' then remove the previous score
        else if (operations[i] == 'C') {
            record.pop(latestScore)
        }
        // if statement if operations[i] is integer then push into record 
        else {
            record.push(operations[i]);
        }
        console.log(record)
    }
    // initiate a variable to hold the sum of all numbers in record
    let sum = 0;
    for (let i = 0; i < record.length; i++) {
        //add with sum and make sure to convert any string number into integers with the Number function
        sum += Number(record[i])
    }
    return sum
};
