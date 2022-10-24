import { GoalModel } from "./model.js"

const gameboard = document.getElementById('gameboard');
const numCards = 10; //Vælg hvor mange brikker der er
let cardList = GoalModel() //Vores array fra model.js
//Randomizer arrayets goals
cardList.sort(() => Math.random() - 0.17);
cardList = cardList.slice(0, numCards)
//Sammenkæder arrayet med sig selv
cardList = cardList.concat(cardList);
cardList.sort(() => Math.random() - 0.12);

for(let card of cardList) { 
    // let div = document.createElement('div');
    // div.innerText = card.goal
    // gameboard.append(div);
    
    let img = document.createElement('img'); //Skaber en div
    img.src = card.picture;
    gameboard.append(img); //Prepend - Før div. Append - Efter div
}
// console.log(GoalModel());


function cardFlip() {
    
}

cardFlip()