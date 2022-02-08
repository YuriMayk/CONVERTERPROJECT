const button = document.getElementById("converter-button")
const select = document.getElementById("currency-select")
const firstselect = document.getElementById("first-select")
const dolar = 5.32
const euro = 6.1
const bitcoin = 215311.50

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
    if (select.value === "US$ Dólar Americano") {
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US',
            {
                style: 'currency',
                currency: 'USD'
            }
        ).format(input / dolar)
    }
    if (select.value === "€ Euro") {
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE',
            {
                style: 'currency',
                currency: 'EUR'
            }
        ).format(input / euro)
    }

    if (select.value === "₿ Bitcoin") {
        currencyValueText.innerHTML = new Intl.NumberFormat('pt-BR',
            {
                style: 'currency',
                currency: 'BTC'
            }
        ).format(input / bitcoin)
    }

}
const firstChangeCurrency = () => {
    const firstCurrencyName = document.getElementById("first-currency-name")
    const firstCurrencyImage = document.getElementById("first-currency-image")

    if (firstselect.value === "US$ Dólar Americano") {
        firstCurrencyName.innerHTML = "Dólar Americano"
        firstCurrencyImage.src = "./assets/Eua.png"
    }

    if (firstselect.value === "€ Euro") {
        firstCurrencyName.innerHTML = "Euro"
        firstCurrencyImage.src = "./assets/Euro.png"
    }

    if (firstselect.value === "₿ Bitcoin") {
        firstCurrencyName.innerHTML = "Bitcoin"
        firstCurrencyImage.src = "./assets/bitcoin.png"
    }
    if (firstselect.value === "R$ Real brasileiro") {
        firstCurrencyName.innerHTML = "Real"
        firstCurrencyImage.src = "./assets/brasil 2.png"
    }

}

const changeCurrency = () => {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.getElementById("currency-image")

    if (select.value === "US$ Dólar Americano") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/Eua.png"
    }

    if (select.value === "€ Euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/Euro.png"
    }

    if (select.value === "₿ Bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }
    if (select.value === "R$ Real brasileiro") {
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/brasil 2.png"
    }
    convertValues()
}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)
firstselect.addEventListener('change', firstChangeCurrency)