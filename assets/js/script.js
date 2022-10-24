import { GoalModel } from "./model.js"

const gameboard = document.getElementById('gameboard');
const numCards = 20; //Vælg hvor mange 
let cardList = GoalModel() //Vores array fra model.js
//Randomizer arrayets goals
cardList.sort(() => Math.random() - 0.5);
cardList = cardList.slice(0, numCards)
//Sammenkæder arrayet med sig selv
cardList.concat(cardList);
cardList.sort(() => Math.random() - 0.5);

for(let card of cardList) { 
    let div = document.createElement('div'); //Skaber en div
    div.innerText = card.goal
    gameboard.append(div); //Prepend - Før div. Append - Efter div
    
    let img = document.createElement('img');
    img.src = card.picture;
    gameboard.append(img);
}

console.log(GoalModel());