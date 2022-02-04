const button = document.getElementById("converter-button")
const dolar = 5.2

const convertValues = () => {
const input = document.getElementById("input-real").value
const realValueText = document.getElementById('real-value-text')
const currencyValueText = document.getElementById('currency-value-text')
realValueText.innerHTML = input
currencyValueText.innerHTML = input/dolar
}

button.addEventListener('click', convertValues)