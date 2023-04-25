'use strict';

const modal = document.querySelector('.modal');

const overlay = document.querySelector('.overlay');

const btnCloseModal = document.querySelector('.close-modal');

// query selector All helps us to access all dom elements of same classes and then we can use loop to manipulate them at once, otherwise null will be selected using just querySelector way!

const btnOpenModal = document.querySelectorAll('.show-modal');

//make function for same code
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//make function for same code
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// attaching click event handler so that we can open modal window
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModal);
}

// attaching click event handler so that we can close modal window
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//listening to keypress event for 'esc' button

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//e is an object which can store info about addeventlistener function and then we accessed the key as e.key to check which key was pressed
