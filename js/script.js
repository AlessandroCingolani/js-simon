const countDown = document.querySelector('h3');
const randomOutput = document.querySelector('h2');
 


const limit = 5;
let counter = limit;
countDown.innerHTML = limit;
let numbersRandom = generateNumbers(1,30);

start();

randomOutput.innerHTML = numbersRandom.join('-');

console.log(numbersRandom);







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
      getPlayerNumber();
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
  console.log(playerNumbers);
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