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

for(let index = 0; index < cardList.length; index++) {

    gameboard.innerHTML +=`
<div class="flip-box-inner">
    <div class="flip-box-front">
      <img src="${cardList[index].picture}" alt ="${cardList[index].title}">
    </div>
    <div class="flip-box-back">
	<img src="./assets/images/bg.jpg"
    </div>
  </div>
`
}
// console.log(GoalModel());

document.querySelectorAll('img').forEach(card => {
    card.addEventListener("click", function (){
        card.classList.toggle('flip-box-inner')
    })
});

