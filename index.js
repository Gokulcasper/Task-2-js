

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
let backgroundColorContainer = document.getElementById("bgContainer");
let colorButton = document.getElementById("buttonChangeColor");


let predefinedColors=["#e75d7c","#b16cef","#53cca4","#efc84d","#628ef0","#184b73","#883e7f","#ed048b"]

function buttonChangeColor(){
let randomColorChange = Math.floor(Math.random()*predefinedColors.length);
let result = predefinedColors[randomColorChange];
backgroundColorContainer.style.backgroundColor=result;
}


// -------------- Button Maker --------------










//--------- Tab -------------
// let tabsContainer = document.querySelector("buttonTabContent");
// let aboutButton = document.querySelector("about-Tab");
// let timeToVisitButton = document.querySelector("time-to-visit-Tab");
// let attractionsButtons = document.querySelector("attraction-Tab");

// function aboutBtn(){
//     tabsContainer.textContent="The land of Varanasi (Kashi) has been the ultimate pilgrimage spot for Hindus for ages. Hindus believe that one who is graced to die on the land of Varanasi would attain salvation and freedom from the cycle of birth and re-birth. Abode of Lord Shiva and Parvati, the origins of Varanasi are yet unknown.";
//     tabsContainer.style.background="white";
//     tabsContainer.style.padding="10px";
//     aboutButton.style.backgroundColor="white";
// }
// function timeToVisitBtn(){
//     tabsContainer.textContent="The best time to visit Varanasi is Winter (November - February) since the temperature is low and there is a calm breeze throughout the day. Summers in Varanasi experience high and dry temperatures. It is best to avoid the summers since they are hot dry and sunny making outdoor sightseeing difficult.";
//     tabsContainer.style.backgroundColor="white";
//     tabsContainer.style.padding="10px";
//     aboutButton.style.backgroundColor="white";
// }
// function attractionsBtn(){
//     tabsContainer.textContent="Knowledge, philosophy, culture, devotion to Gods, Indian arts and crafts have all flourished here for centuries. Also a pilgrimage place for Jains, Varanasi is believed to be the birthplace of Parsvanath, the twenty-third Tirthankar. Vaishnavism and Shaivism have co-existed in Varanasi harmoniously.";
//     tabsContainer.style.background="white";
//     tabsContainer.style.padding="10px";
//     aboutButton.style.backgroundColor="white";
// }
