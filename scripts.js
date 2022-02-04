const button = document.getElementById("converter-button")
const select = document.getElementById("currency-select")
const dolar = 5.2
const euro = 6.7
const bitcoin = 600.1

const convertValues = () => {
    const input = document.getElementById("input-real").value
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')
    
    realValueText.innerHTML = new Intl.NumberFormat('pt-BR',
        {
            style: 'currency',
            currency: 'BRL'
        }
    ).format(input)

    currencyValueText.innerHTML = new Intl.NumberFormat('en-US',
        {
            style: 'currency',
            currency: 'USD'
        }
    ).format(input / dolar)

}

const changeCurrency = () => {
    const currencyName = document.getElementById("currency-name")
const currencyImage = document.getElementById("currency-image")

    if(select.value === "US$ Dólar Americano") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/Eua.png"
    }

    if(select.value === "€ Euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/Euro.png"
    }

    if(select.value === "₿ Bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }
}

button.addEventListener('click', convertValues)
select.addEventListener('change',changeCurrency)