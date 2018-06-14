let celsiusInput = document.querySelector('#celsius > input');
let fahrenheitInput = document.querySelector('#fahrenheit > input');
let kelvinInput = document.querySelector('#kelvin > input');

function roundNum(num) {
    return Math.round(num*100)/100;
}

function celsiusToFahrenheitAndKelvin() {
    let cTemp = parseFloat(celsiusInput.value);
    let fTemp = (cTemp * (9/5)) + 32;
    let kTemp = cTemp + 273.15;
    fahrenheitInput.value = roundNum(fTemp);
    kelvinInput.value = roundNum(kTemp);
}

function fahrenheitToCelsiusAndKelvin() {
    let fTemp = parseFloat(fahrenheitInput.value);
    let cTemp = (fTemp - 32) * (5/9);
    let kTemp = (fTemp + 459.67) * (5/9);
    celsiusInput.value = roundNum(cTemp);
    kelvinInput.value = roundNum(kTemp);
}

function kelvinToCelsiusAndFahrenheit() {
    let kTemp = parseFloat(kelvinInput.value);
    let cTemp = kTemp - 273.15;
    let fTemp = (9/5) * (kTemp - 273) + 32;
    celsiusInput.value = roundNum(cTemp);
    fahrenheitInput.value = roundNum(fTemp);
}

function main() {
    celsiusInput.addEventListener('input', celsiusToFahrenheitAndKelvin);
    fahrenheitInput.addEventListener('input', fahrenheitToCelsiusAndKelvin);
    kelvinInput.addEventListener('input', kelvinToCelsiusAndFahrenheit);
}

main();