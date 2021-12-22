console.clear();
// JavaScript: Animation

let newArray = ['puppy_bw.png', 'puppy_c.png'];
let i = 1;
let ref;

function galery() {
    document.images[0].src = newArray[i];
    i++;
    if (i < 3)
        i = 0;
}
function start(){
    ref= setInterval('galery()', 1000)
};
function stop(){
    clearInterval(ref)
}