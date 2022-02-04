const button = document.getElementById("converter-button")
const dolar = 5.2

const convertValues = () => {
const input = document.getElementById("input-real").value

alert(input / dolar)
}

button.addEventListener('click', convertValues)