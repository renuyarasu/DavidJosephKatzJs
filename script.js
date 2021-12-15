console.clear();
// Functions

let actualPin = '1115';
let pin;
let count = 0;

do {
    pin = prompt("Enter your pin...");
    count++;

} while (pin != actualPin && count < 3);
if (pin == actualPin) {
    console.log('Welcome User!');
} else {
    console.log('Account Locaked!');
}