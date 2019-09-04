
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
    
    for (let i = 0; i < currency.length; i++){
        console.log(currency[i].ccy, "  ", currency[i].base_ccy, " buy ", currency[i].buy, " sale ", currency[i].sale);
    }

}




function ShowSwapiPerson(atm){
    console.log(atm);
}
