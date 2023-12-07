//DON'T THINK THESE ARE NEEDED IN REACT

const backButton = document.querySelector('#backToTop');
const mobButton = document.querySelector('.mobile');
const nav = document.querySelector('nav ul');
const menuItems = document.querySelectorAll('nav ul li a');
const header = document.querySelector('header');

// browser onscroll event trigger

window.onscroll = function () {
  scrollFunction();
};

// modal box

/* ARE WE HAVING THESE TO SHOW THE MOBILE MENU 

var modal = document.getElementById('mymodal');

var btn = document.getElementById('modalbutton');

var span = document.getElementsByClassName('close')[0];

btn.onclick = function () {
  modal.style.display = 'block';
};

span.onlick = function () {
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

*/

// SCROLL FUNCTIONS
function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backButton.style.display = 'block';
  } else {
    backButton.style.display = 'none';
  }
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.classList.add('bg');
  } else {
    header.classList.remove('bg');
  }
}

const getToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

// mobile menu function

const mobMenu = () => {
  for (const item of menuItems) {
    item.addEventListener('click', mobMenu);
  }
  if (nav.classList.contains('responsive')) {
    nav.classList.remove('responsive');
  } else {
    nav.classList.add('responsive');
  }
};

//DON'T THINK THESE ARE NEEDED IN REACT

backButton.addEventListener('click', getToTop);

mobButton.addEventListener('click', mobMenu);
