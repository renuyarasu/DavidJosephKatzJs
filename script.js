console.clear();
// Functions

// function expression 
function calculateTip(price, percentage) {
    // side effect
    console.log('Calculate Tip');
    return (percentage / 100) * price
}
let calculateTipResult = calculateTip(100, 5);

console.log(calculateTipResult); // 5

// function declaration

let divideByN = function (number, n) {
    return number / n;
}
let divideByNResult = divideByN(20, 4)
console.log(divideByNResult);// 5

// anonymous function 
