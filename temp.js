const fahrenheitInput = document.getElementById('fahrenheitInput');
const celsiusInput = document.getElementById('celsiusInput');
const btn = document.getElementById('clearBtn');

function roundNumber(number){
    return Math.round(number*100)/100
}

//Converts the input value at Fahrenheit to Celsius
fahrenheitInput.addEventListener('input', function(){
    let fTemp = parseFloat(fahrenheitInput.value);
    let cTemp = (fTemp -32) * (5/9);
    
    celsiusInput.value = roundNumber(cTemp);
})

//Converts the input value at Celsius to Fahrenheit
celsiusInput.addEventListener('input', function(){
    let cTemp = parseFloat(celsiusInput.value);
    let fTemp = (cTemp*(9/5)) + 32;

    fahrenheitInput.value = roundNumber(fTemp);
})


btn.addEventListener('click', ()=>{
    celsiusInput.value = "";
    fahrenheitInput.value = "";

})
