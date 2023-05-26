let calculation = '';
let display = document.querySelector('.display');

display.innerHTML = (localStorage.getItem('calculation') || '');

function updateCalculation(num) {
  if(calculation.length<12){
    calculation += num;
    display.innerHTML = calculation;
    localStorage.setItem('calculation', calculation);
  }
}