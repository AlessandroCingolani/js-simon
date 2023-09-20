const countDown = document.querySelector('h3');
const numbersRandom = document.querySelector('h2');
 


const limit = 5;
let counter = limit;
countDown.innerHTML = limit;


start();

numbersRandom.innerHTML = generateNumbers(1,30).join('-');








// Functions


// countdown
function start(){
  const clock = setInterval(function(){
    counter--;
    countDown.innerHTML = counter;
    if(counter === 0){
      clearInterval(clock)
      countDown.classList.add('d-none')
      numbersRandom.classList.add('d-none')
    }
  },1000)

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