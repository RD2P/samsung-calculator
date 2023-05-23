let calculation = '';


console.log(localStorage.getItem('calculation') || 'Fresh page');

function updateCalculation(num) {
  calculation += num;
  console.log(calculation);
  localStorage.setItem('calculation', calculation);
}