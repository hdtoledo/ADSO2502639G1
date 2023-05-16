//TODO: Variables inputs
const amount = document.getElementById('amount')
const from = document.getElementById('from')
const to = document.getElementById('to')

const resultado = document.getElementById('result')

const click = document.getElementById('click')

//! API key X2u9D5QYweDH1dnSMDNkeulSJpeErDz9

var myHeaders = new Headers();
myHeaders.append("apikey", "X2u9D5QYweDH1dnSMDNkeulSJpeErDz9");

var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
};

async function getMethod(){
    fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to.value}&from=${from.value}&amount=${amount.value}`, requestOptions)
    .then(response => response.json())
    .then(result => resultado.innerHTML = `La conversion de moneda es: ${result.result}  ${to.value}`)
    .catch(error => console.log('error', error));

}
click.addEventListener('click', (getMethod))
document.addEventListener('keyup', (e) => {
    if (e.keyCode == 13){
        getMethod()
    }
})