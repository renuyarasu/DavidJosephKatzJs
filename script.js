console.clear();
// JavaScript: Objects

let tutorials = {
    topic: 'JS',
    name: 'VedaGna',
    duration: '1 Month'
}

console.log('Topic: ' + tutorials.topic);
console.log('Name: ' + tutorials.name);
console.log('Duration: ' + tutorials.duration);

let text = '';
let x;
for (x in tutorials) {
    text += tutorials[x] + ', ';
}
console.log(text);