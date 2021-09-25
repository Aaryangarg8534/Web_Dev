'use strict';
//$ = document.querySelector
//I use mixture of Javascript and jquery so don't get confused by syntx
/*console.log(document.querySelector('.message').textContent);

console.log($('.message').text('Correct Number'));

console.log($('.number').text('13'));

document.querySelector('.score').textContent = 10;

document.querySelector('.guess').textContent = 23;

console.log(document.querySelector('.guess').value);
We want a number whenever the guess is not equal to that number so our number must be same so to do that we will define our number outside function 
so that our number change when we click on again button not change on clicking on check number by clicking on check number we get different guess number*/

let highScore = 0;
let secertNumber = Math.floor(Math.random() * 20) + 1;
let newScore = 20;

//Adding  Eventlistner
$('.check').click(function () {
  const guess = Number(document.querySelector('.guess').value);
  /*console.log(typeof guess);*/
  //When no number input
  if (!guess) {
    $('.message').text('No Number!');
  }
  //when guess number is gonna be wrong
  else if (guess !== secertNumber) {
    if (newScore > 1) {
      $('.message').text(guess > secertNumber ? '👎 Too Low!' : '👎 Too High!');
      newScore--;
      $('.score').text(newScore);
    } else {
      $('.message').text('You Lost The Game!');
      $('.score').text(0);
    }
  }
  // when number is too low
  /*else if (secertNumber > guess) {
    if (newScore > 1) {
      $('.message').text('👎 Too Low!');
      newScore--;
      $('.score').text(newScore);
    } else {
      $('.message').text('You Lost The Game!');
      $('.score').text(0);
    }
  }

  //when number is to high
  else if (secertNumber < guess) {
    if (newScore > 1) {
      $('.message').text('👎 Too High!');
      newScore--;
      $('.score').text(newScore);
    } else {
      $('.message').text('You Lost The Game!');
      $('.score').text(0);
    }
  } */
  else {
    $('.message').text('👑 Correct Number!');
    $('.number').text(secertNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    newScore++;
    $('.score').text(newScore);
    if (newScore > highScore) {
      highScore = newScore;
      $('.highscore').text(highScore);
    }
  }
});

// to reset the game
$('.again').click(function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  newScore = 20;
  $('.score').text(newScore);
  $('.message').text('Start guessing...');
  $('.number').text('?');
  document.querySelector('.guess').value = ' ';
});
