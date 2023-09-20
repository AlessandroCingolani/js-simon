const countDown = document.querySelector('h3');



const limit = 5;
countDown.innerHTML = limit;


console.log(generateNumbers(1,10));





// Functions

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