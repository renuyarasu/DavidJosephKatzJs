console.clear();
// JavaScript:  Switch Statement

let vowels = prompt('Enter  a character', 'Enter...');
switch (vowels) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log(vowels + ' is vowel!');
        break;
    default:
        console.log('Consonant!');
        break;
}
