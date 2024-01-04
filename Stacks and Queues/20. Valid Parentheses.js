// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

var isValid = function (s) {
    //here we split the string we get so we can look at each character
    let chars = s.split('')
    //new array to store open bracket
    let arr = []

    // if first char is a closing bracket then return false
    if (chars[0] == ')' || chars[0] == '}' || chars[0] == ']') {
        return false
    }

    for (let i = 0; i < chars.length; i++) {
        // keep track of top of the stack
        let top = arr.length - 1

        //if its an open bracket store in arr
        if (chars[i] == '(' || chars[i] == '{' || chars[i] == '[') {
            arr.push(chars[i])
            console.log(arr)
        }
        // if its a close bracket make sure the top char is the corresponding open bracket, if yes pop top of stack to mark complete 
        else if (chars[i] == ')' && arr[top] == '(') {
            arr.pop()
            console.log(arr)
        }
        // if its a close bracket make sure the top char is the corresponding open bracket, if yes pop top of stack to mark complete
        else if (chars[i] == '}' && arr[top] == '{') {
            arr.pop()
            console.log(arr)
        }
        // if its a close bracket make sure the top char is the corresponding open bracket, if yes pop top of stack to mark complete
        else if (chars[i] == ']' && arr[top] == '[') {
            arr.pop()
            console.log(arr)
        } else {
            return false
        }
    }

    // arr should be empty by the end marking that all brackets have been closed correctly
    if (!arr.length) {
        return true
        // if any open brackets remains return false
    } else {
        return false
    }
};



// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false