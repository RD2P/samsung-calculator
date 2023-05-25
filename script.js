let calculation = '';
let display = document.querySelector('.display');

display.innerHTML = (localStorage.getItem('calculation') || '<div class="blinking-cursor"></div>');

function updateCalculation(num) {
  calculation += num;
  display.innerHTML = calculation;
  localStorage.setItem('calculation', calculation);
}