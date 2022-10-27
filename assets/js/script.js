import { GoalModel } from "./model.js"

const gameboard = document.getElementById('gameboard');
const numCards = 10; //Vælg hvor mange brikker der er
const arr_flipped = [];
let pairs = 0;

gameStart(numCards);

function gameStart(numCards){

let cardList = GoalModel() //Vores array fra model.js
cardList.sort(() => Math.random() - 0.17); //Randomizer arrayets goals
cardList = cardList.slice(0, numCards)
cardList = cardList.concat(cardList); //Sammenkæder arrayet med sig selv
cardList.sort(() => Math.random() - 0.5);

// LOOP
for(let card of cardList){

  //Opretter div element med class
  let div = document.createElement('div')
  div.classList.add('flip-card-inner');

  //Skaber et img element + class og appender derefter img til div
  let img = document.createElement('img')
  img.setAttribute('src', `${card.picture}`);
  img.classList.add('flip-card-front');
  div.appendChild(img);

  //skaber en div som skal bruges til kortets back
  let backside = document.createElement('div');
  backside.classList.add('flip-card-back');
  div.appendChild(backside);

  //Click event 
  backside.addEventListener('click', function() {
    flipCard(this.parentNode);
  })

  //Appender div til vores sektion (gameboard)
  gameboard.appendChild(div);
}
} 

function flipCard(divElm){
  divElm.classList.add('active');
  arr_flipped.push(divElm);

  if(arr_flipped.length === 2){
    if(arr_flipped[0].innerHTML === arr_flipped[1].innerHTML) {
      pairs++
      arr_flipped.length = 0;
    } else{
      setTimeout(() => {
        for(let item of arr_flipped) {
          item.classList.remove('active');
        }
        arr_flipped.length = 0;
      }, 1400);
    }
  }
}









