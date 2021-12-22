console.clear();
// JavaScript: While Loop

let num = parseInt(prompt('Enter the number...', 'Enter...'));
let count = 0;
while (num > 0) {
    num = Math.trunc(num / 10);
    count++;
}
document.write('Digits: ' + count);
