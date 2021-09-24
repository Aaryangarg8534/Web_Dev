'use strict';
//I use mixture of Javascript and jquery so don't get confused by syntx
/*console.log(document.querySelector('.message').textContent);

console.log($('.message').text('Correct Number'));

console.log($('.number').text('13'));

document.querySelector('.score').textContent = 10;

document.querySelector('.guess').textContent = 23;

console.log(document.querySelector('.guess').value);*/

//Adding  Eventlistner
$('.check').click(function () {
  console.log(document.querySelector('.guess').value);
});
