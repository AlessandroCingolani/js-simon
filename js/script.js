const countDown = document.querySelector('h3');
const randomOutput = document.querySelector('.random-numbers');
const playerOutput = document.querySelector('.player-numbers');
 


const limit = 5;
let counter = limit;
countDown.innerHTML = limit;
let numbersRandom = generateNumbers(1,30);
let counterCorrectWord = 0;

start();

setTimeout(function(){
  let playerNumbers = getPlayerNumber();
  let correctNumbers = compareNumbers(playerNumbers,numbersRandom)
  playerOutput.innerHTML = `Hai ricordato i seguenti numeri:${correctNumbers.join('-')} il punteggio è ${counterCorrectWord} su 5`;
},6000)

randomOutput.innerHTML = numbersRandom.join('-');

// Functions


// countdown
function start(){
  const clock = setInterval(function(){
    counter--;
    countDown.innerHTML = counter;
    if(counter === 0){
      clearInterval(clock)
      countDown.classList.add('d-none')
      randomOutput.classList.add('d-none')
      } 
  },1000)
}

// function prompt
function getPlayerNumber(){
  const playerNumbers = [];
  while(playerNumbers.length < 5){
    let number = parseInt(prompt('Inserire numero tra quelli visti'));
    if (!number || playerNumbers.includes(number)) {
      alert('PARAMETRO NON VALIDO')
    }else {
      playerNumbers.push(number)
    }
  }
  return playerNumbers;
}


// check function
function compareNumbers(listPlayer,listRandom){
  const correctNumbers = []
  for(let i = 0; i < 5;i++){
    let check = listPlayer[i]
    if(listRandom.includes(check)){
      counterCorrectWord++
      correctNumbers.push(check)
      console.log(correctNumbers);
    }
  }
  return correctNumbers
}

// random 
function generateNumbers(min,max){
  const numbersRandom = [];
  while(numbersRandom.length < 5){
    const number = Math.floor(Math.random() * (max - min +1) + min)
    if (!numbersRandom.includes(number)) {
      numbersRandom.push(number);
    }
  }
  return numbersRandom;
}