// Autores: Pedro Henrique / Marcelo José

let btns = document.querySelectorAll(".btn");
let visor = document.querySelector(".visor input");
for (let x = 0; x < btns.length; x++){
let btn = btns[x]
if ("1234567890-+*/.()".includes(btn.innerText)){
    btn.addEventListener("click", function() {
    visor.value += btn.innerText;
    })}
else if ('<' == btn.innerText){
    btn.addEventListener("click", function() {
    visor.value = visor.value.slice(0, - 1);})
    }
else if ('C' == btn.innerText){
    btn.addEventListener("click", function(){
    visor.value = "";
    })}
else if ('=' == btn.innerText){
    btn.addEventListener("click", function(){
    visor.value = eval(visor.value)
    })}
}