const buttons = document.querySelectorAll('.button');
const by = document.querySelector('body');

buttons.forEach((button) => {
  button.addEventListener('click', function (e) {
    if (e.target.id === 'red') {
      by.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'green') {
      by.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      by.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'orange') {
      by.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      by.style.backgroundColor = e.target.id;
    }
  });
});
