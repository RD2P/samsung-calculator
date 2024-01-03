let calculation = ''
let stack = []
let display = document.querySelector('.display')

display.innerHTML = (localStorage.getItem('calculation') || '')

const updateCalculation = (num) => {
  if (calculation.length < 12) {
    calculation += num;
    display.innerHTML = calculation;
    localStorage.setItem('calculation', calculation);
  }
}

const handleParenthesis = () => {
  if (stack.length % 2 === 0) {
    calculation += '('
    stack.push('(')
  } else {
    calculation += ')'
    stack.push(')')
  }
  display.innerHTML = calculation;
}

const handleEquals = () => {
  let parsed = []
  for (let i = 0; i < calculation.length; i++) {
    if (calculation[i] === '(' && calculation[i - 1] === ')') {
      parsed.push('*')
    }
    parsed.push(calculation[i])
  }

  parsed = parsed.join('')

  try {
    calculation = eval(parsed);
    display.innerHTML = calculation
    localStorage.setItem('calculation', calculation)
  } catch (error) {
    display.innerHTML = 'Invalid input used'
  }
  stack = []
}