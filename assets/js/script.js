import { GoalModel } from "./model.js"

const gameboard = document.getElementById('gameboard');
const numCards = 10; //Vælg hvor mange brikker der er
const arr_flipped = [];
let pairs = 0;
let lock = false;

gameStart(numCards);

function gameStart(numCards){

let cardList = GoalModel() //Vores array fra model.js
cardList.sort(() => Math.random() - 0.17); //Randomizer arrayets goals
cardList = cardList.slice(0, numCards)
cardList = cardList.concat(cardList); //Sammenkæder arrayet med sig selv
cardList.sort(() => Math.random() - 0.5);

// FOR LOOP
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
  // Hvis lock er true, så skal flipCard vente på at timeout er færdig, ellers så forsæt med funktionen.
  if(lock === true){
    return;
  }
  divElm.classList.add('active');
  arr_flipped.push(divElm); //In charge of remembering which cards are flipped

  if(arr_flipped.length === 2){
    // Now handling pairs, unlock the function
    lock = true;
    if(arr_flipped[0].innerHTML === arr_flipped[1].innerHTML) { //Checks if the 2 cards are the same card
      pairs++
      arr_flipped.length = 0;
      // Done handling pairs, unlock the function
      lock = false;
    } else{
      setTimeout(() => {
        for(let item of arr_flipped) {
          item.classList.remove('active');
        }
        arr_flipped.length = 0;
        // Done handling pairs, unlock the function
        lock = false;
      }, 1000);
    }
  }
}









