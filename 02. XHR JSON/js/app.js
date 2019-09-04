
window.addEventListener('load', Init);

function Init(){
    let url = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";
    let swapiURL = "https://swapi.co/api/people/2";
   // Request(swapiURL, ShowSwapiPerson);
    Request(url, GetCurrency);
}

function Request (url, callback){

let xhr = new XMLHttpRequest();

xhr.open("GET", url, true);
    xhr.send();

    xhr.onreadystatechange = function () {
        if (xhr.readyState != 4) return;

        if (xhr.status != 200) {
            let errStatus = xhr.status;
            let errText = xhr.statusText;
            console.log(errStatus + ": " + errText);
        } else {
            let data = JSON.parse(xhr.responseText);
            callback(data);
        }
    }; 
}

function GetCurrency(currency){
    //console.log(currency);
    let currencyData = {
        usd_uah_buy: currency[0].buy,
        usd_uah_sell: currency[0].sale,
        eur_uah_buy: currency[1].buy,
        eur_uah_sell: currency[1].sale,
        rub_uah_buy: currency[2].buy,
        rub_uah_sell: currency[2].sale,
        btc_usd_buy: currency[3].buy,
        btc_uah_sell: currency[3].sale
    }
    PrintCurrency(currencyData);
}

function PrintCurrency(currencyData) {
    console.log(currencyData);
}


function ShowSwapiPerson(atm){
    console.log(atm);
}
