

let currentDisplay = document.querySelector(".current");
let nbuttons = document.querySelectorAll(".nbutton");
let operatorButtons =document.querySelectorAll(".button");
let calculateBtn = document.querySelector("#calc");

//variable declarations
let firstInput = null;
let operatorInput = null;
let secondInput = null;
let replaceDisplay= true;

//number input
for (let i=0; i<nbuttons.length; i++) {
    nbuttons[i].addEventListener("click" , (e)=> {

        if (replaceDisplay) {
        currentDisplay.textContent="";
        replaceDisplay = false;
        
    }
    currentDisplay.textContent +=(e.target.textContent);
        
    })  
}

//operator input

for (let i=0; i<operatorButtons.length  ; i++) {
    operatorButtons[i].addEventListener("click" , (e)=> {

        firstInput = currentDisplay.textContent;
        replaceDisplay = true;
        operatorInput = e.target.textContent;
        currentDisplay.textContent = operatorInput;
    })
}
