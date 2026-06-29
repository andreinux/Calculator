

let currentDisplay = document.querySelector(".current");
let nbuttons = document.querySelectorAll(".nbutton");
let operatorButtons =document.querySelectorAll(".button");
let calculateBtn = document.querySelector("#calc");

//variable declarations
let firstInput = null;
let operatorInput = null;
let secondInput = null;
let replaceDisplay= true;
let showingResult = false;
let result = 0;
let canCalculate = false;

//number input
for (let i=0; i<nbuttons.length; i++) {
    nbuttons[i].addEventListener("click" , (e)=> {
        if (showingResult) {
    showingResult = false;
    replaceDisplay = true;
}

        if (replaceDisplay) {
        currentDisplay.textContent="";
        replaceDisplay = false;
        
    }
    currentDisplay.textContent +=(e.target.textContent);
    canCalculate = true;
        
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
    if (b === 0) {
        return "error";
    } else {
    return a/b
    }
}



//calculate
calculateBtn.addEventListener("click" , () => {

    if (!canCalculate) return; 
    
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
    }

    if (Number.isInteger(result)) {
        currentDisplay.textContent = result;
        
    }else if (result === "error") {
        currentDisplay.textContent = "error";
    }
    else {
        currentDisplay.textContent= result.toFixed(4);
        
    } 

    canCalculate=false;
    showingResult = true;

  
})


//reset C
let resetBtn = document.querySelector("#reset");

resetBtn.addEventListener("click", ()=> {
    firstInput = null;
    operatorInput = null;
    secondInput = null;
    replaceDisplay= true;
    currentDisplay.textContent= "0";
})

let eraseBtn = document.querySelector("#erase");


eraseBtn.addEventListener("click" , ()=> {

     if (currentDisplay.textContent === "error") {
           currentDisplay.textContent = secondInput;
        replaceDisplay = false;
        showingResult = false;
        return; 
    }
    
    if (showingResult) {
        result= 0;
        currentDisplay.textContent = secondInput;
        showingResult =  false;
        return;
    }

    if (currentDisplay.textContent === "+" || currentDisplay.textContent === "—" || currentDisplay.textContent === "X" || currentDisplay.textContent === "÷") {
        operatorInput = null;
        currentDisplay.textContent = firstInput;
    }else if (replaceDisplay=== false){
    currentDisplay.textContent = currentDisplay.textContent.slice(0,-1);
    }else if (currentDisplay.textContent === firstInput) {
        firstInput =null;
        currentDisplay.textContent = "0";
    }

    if(currentDisplay.textContent === "") {
        currentDisplay.textContent = operatorInput;
        replaceDisplay = true;
    }


    
    

// solve continous del to go back to intial state 
   
}); 



//solve large nmber relation to display box
