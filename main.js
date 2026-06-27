

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



function add(a, b) {
    return a+ b;
}

function subtract(a,b) {
    return a-b;
}

function multiply (a,b) {
   return a *b;
}

function divide (a,b) {
    return a/b
}




calculateBtn.addEventListener("click" , () => {
    secondInput = currentDisplay.textContent; 
    let fnum = Number(firstInput);
    let snum = Number(secondInput);
    currentDisplay.textContent="";  

    if(operatorInput === "+") {
        result = add(fnum,snum);
    }else if (operatorInput === "—") {
        result = subtract(fnum,snum);
    }else if (operatorInput === "X"){
        result = multiply(fnum,snum);
    }else if (operatorInput === "÷"){
        result = divide(fnum, snum);
    }else;

    if (Number.isInteger(result)) {
        currentDisplay.textContent = result;
    }else {
        currentDisplay.textContent= result.toFixed(4);
    }
})

