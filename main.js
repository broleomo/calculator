// window.onload = function() {

let current,
    screen,
    output,
    period,
    operators;

screen = document.getElementById("entryText");

let element = document.querySelectorAll(".num");

for (let i = 0; i < element.length; i++) {

element[i].addEventListener("click",function(){
  let inputValue = entryText.value;
  element = this.value;
  entryText.value += element;
})
}
let operator = document.querySelectorAll(".operator");
for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click",function(){
    let inputValue = entryText.value;
    element = this.value;
    if(element !== "="){
    entryText.value += element;
  }
  })
  }
function total (){
  entryText.value = eval(entryText.value) || "";
}

function clearSet(){
  entryText.value = " ";
}
