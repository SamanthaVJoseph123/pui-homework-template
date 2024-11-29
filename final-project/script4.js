const title1 = document.getElementById('title');
const topic1 = document.getElementById('topic');
const summary1 = document.getElementById('summary');
const body1 = document.getElementById('body');


const button1 =  document.getElementById('btn1');
const output1 = document.getElementById('output1');

function fun1() {
    output1.innerHTML = textbox1.value;
}

button1.addEventListener('click', fun1)

