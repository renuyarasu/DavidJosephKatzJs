console.clear();
// JavaScript: If Else Statement

let marks_01 = parseInt(prompt('Enter marks 01', 'Enter...'))
let marks_02 = parseInt(prompt('Enter marks 02', 'Enter...'))
let marks_03 = parseInt(prompt('Enter marks 03', 'Enter...'))

let total = marks_01 + marks_02 + marks_03;
let percentage = total * 100 / 150;
console.log(percentage);

if (percentage >= 80) {
    console.log('Grade A');
} else if (percentage >= 60) {
    console.log('Grade B');
} else if (personalbar >= 40) {
    console.log('Grade C');
} else {
    console.log('Grade D');
}
