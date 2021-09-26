'use strict';
// In this i Learn adding and removing of classes
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClosemodal = document.querySelector('.close-modal');
const btnOpenmodal = $('.show-modal');
console.log(btnOpenmodal);

for (let i = 0; i < btnOpenmodal.length; i++) {
  btnOpenmodal[i].addEventListener('click', function () {
    console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

btnClosemodal.addEventListener('click', function () {
  //console.log('Button clicked');
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

overlay.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});
