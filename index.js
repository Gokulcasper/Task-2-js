

let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");
let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");

firstNumber.textContent=Math.ceil(Math.random()*10);
secondNumber.textContent=Math.ceil(Math.random()*10);

function checkButton(){
let firstNumber1=parseInt(firstNumber.innerText)
let secondNumber1=parseInt(secondNumber.innerText)
let totalNumber=firstNumber1 + secondNumber1;
let inputResult=parseInt(userInput.value);
if(inputResult === totalNumber)
{
gameResult.textContent="Congratulations! You Added Correctly";
gameResult.style.backgroundColor="green";
gameResult.style.Color="white";
}else{
gameResult.textContent=" Enter Correct value ";
gameResult.style.backgroundColor="red";
gameResult.style.Color="white";
}
}

function restartButton(){
    firstNumber.textContent=Math.ceil(Math.random()*10);
    secondNumber.textContent=Math.ceil(Math.random()*10);
    userInput.value=" ";
}

// ---------- Change Color --------------

