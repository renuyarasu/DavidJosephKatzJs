console.clear();
// Functions

// function expression 
function calculateTip(price, percentage) {
    // side effect
    console.log('Calculate Tip');
    return (percentage / 100) * price
}
calculateTip(100, 5); //5

// function declaration
// anonymous function 
