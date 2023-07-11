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
    let arr = [];

    for (let i = 0; i < operations.length; i++) {
        if (operations[i] == "+") {
            arr.push(
            parseFloat(arr[arr.length - 1]) + parseFloat(arr[arr.length - 2])
            );
        } else if (operations[i] == "D") {
            arr.push(arr[arr.length - 1] * 2);
        } else if (operations[i] == "C") {
            arr.pop();
        } else {
            arr.push(parseFloat(operations[i]));
        }
    }

    return arr.reduce((a, b) => {
        return a + b;
    }, 0);
};
