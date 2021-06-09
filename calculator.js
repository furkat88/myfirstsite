let calcInput = document.querySelector('#calcinput')
let cleanBtn = document.querySelector('#cleanbtn')
let backBtn = document.querySelector('.backbtn')
let equalBtn = document.querySelector('.equalbtn')
let sqrtBtn = document.querySelector('.sqrtbtn')
let brackets = document.querySelector('#brackets')

function addCharecter(symbol) {
  calcInput.value += symbol
}

cleanBtn.addEventListener('click', () => {
  calcInput.value = ""
})

backBtn.addEventListener('click', () => {
  calcInput.value = calcInput.value.substring(0, calcInput.value.length -1)
})

equalBtn.addEventListener('click', () => {
  calcInput.value = eval(calcInput.value)
})

sqrtBtn.addEventListener('click', () => {
  calcInput.value = Math.sqrt(calcInput.value)
})

brackets.addEventListener('click', () => {
 calcInput.value += "("
})

function closeBracket(bracket) {
  if (calcInput.value.includes('(')) return calcInput.value += bracket;
}

let calculator = document.querySelector('.calcwrapper')
let closeCalc = document.querySelector('.closebtn')
let calcIcon = document.querySelector('.calculator_icon')

closeCalc.addEventListener('click', () => {
  calculator.style.visibility = "hidden"
})
calcIcon.addEventListener('click', () => {
  calculator.style.visibility = "visible"
})