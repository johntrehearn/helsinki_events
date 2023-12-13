// browser onscroll event trigger

window.onscroll = function () {
  scrollFunction();
};

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
