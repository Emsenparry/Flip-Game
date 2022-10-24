import { GoalModel } from "./model.js"

const gameboard = document.getElementById('gameboard');
const numCards = 5;
let cardList = GoalModel()
//Randomizer arrayets goals
cardList.sort(() => Math.random() - 0.5);
cardList = cardList.slice(0, numCards)
//Sammenkæder arrayet med sig selv
cardList.concat(cardList);
cardList.sort(() => Math.random() - 0.5);

for(let card of cardList) { 
    let div = document.createElement('div'); //Skaber en div
    div.innerText = card.goal
    div.innerHTML = card.picture
    gameboard.append(div) //Prepend - Før div. Append - Efter div
}

console.log(GoalModel().slice(15));