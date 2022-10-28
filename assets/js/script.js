import { GoalModel } from "./model.js"

const gameboard = document.getElementById('gameboard');
const numCards = 10; //Antal kort
const arr_flipped = [];
let pairs = 0;
let lock = false;

gameStart(numCards);

function gameStart(numCards){

let cardList = GoalModel() //Our array from model.js
cardList.sort(() => Math.random() - 0.17); //Randomizer arrayets goals
cardList = cardList.slice(0, numCards)
cardList = cardList.concat(cardList); //Sammenkæder arrayet med sig selv
cardList.sort(() => Math.random() - 0.5);

// FOR LOOP
for(let card of cardList){

  //Creates a div and adds a class to it
  let div = document.createElement('div')
  div.classList.add('flip-card-inner');

  //Creates a img element, adds a class and appends img to our div
  let img = document.createElement('img')
  img.setAttribute('src', `${card.picture}`);
  img.classList.add('flip-card-front');
  div.appendChild(img);

  //Creates a div used for the card's back
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
  //If lock is true, then flipCard is waiting for timeout to finish, else continue the function.
  if(lock === true){
    return;
  }
  //Add .active to divElm to show that it's flipped
  divElm.classList.add('active');
  // Add divElm to flipped array, to remember which cards are currently flipped
  arr_flipped.push(divElm);

  //If 2 cards are flipped, handle pairs
  if(arr_flipped.length === 2){

    lock = true; // Now handling pairs, unlock the function

    // If the HTML on the 1st flipped card is the same as the 2nd flipped card
    if(arr_flipped[0].innerHTML === arr_flipped[1].innerHTML) { //Checks if the 2 cards are the same card
      //Add 1 to pairs score
      pairs++

      //Remove all flipped cards
      arr_flipped.length = 0;

      //Done handling pairs, unlock the function
      lock = false;

      if(pairs === numCards) {
        gameOver();
      }
    } else {
      //In 1 second, run code - flipCard is locked for a second
      setTimeout(() => {
        //For each flipped card, remove .active, unflipping them
        for(let item of arr_flipped) {
          item.classList.remove('active');
        }

        //Remove all flipped cards
        arr_flipped.length = 0;
        //Done handling pairs, unlock the function
        lock = false;
      }, 1000);
    }
  }
}


// GAME OVER TEKST
function gameOver() {
  let div = document.createElement('div');
  div.classList.add('gameover');

  let h2 = document.createElement('h2');
  h2.innerHTML = 'Spillet er færdigt!'
  div.prepend(h2);

  let btn = document.createElement('button');
  btn.innerText = 'Prøv igen';
  btn.addEventListener('click', () => {
    reset();
  })
  div.append(btn);

  document.body.append(div);
}

//RESET BUTTON
function reset() {
  document.querySelector('.gameover').remove();
  gameboard.innerHTML = null;
  gameStart(numCards);
  pairs = 0;
}









