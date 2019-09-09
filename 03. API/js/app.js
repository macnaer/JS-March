window.addEventListener("load", Init);


function Init(){
    let url = "https://swapi.co/api/people/";
    Request(url, GetPerson);
}

function Request(url, callback) {

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

function GetPerson(persons){
    console.log(persons);
    let countOfPerson = document.querySelector(".count");
    countOfPerson.textContent = `10 of ${persons.count}`;

    for (let i = 0; i < persons.results.length; i++){
        console.log(persons.results[i].name);
        console.log(persons.results[i].birth_year);
        console.log(persons.results[i].gender);
        console.log("--------------------------------");
    }
}




// Test2();

// const Test2 = function(){
//     console.log("Test2");
// }



// Test();

// function Test(){
//     console.log("Test");
// }



// let a = 10;
// let b = 130;
// Init = (a , b) =>{
//     return  a + b;
   
// } 


// const res = Init(a, b);
// console.log(res);



// let Person = {
//     name : "Bill",
//     surname: "Gates",
//     age: 58,
//     data: {
//         day: 23,
//         month: 10,
//         year: 1956
//     }
// }


// console.log(Person.name);
// console.log(Person.age);

// let day = Person.data.day;


// console.log("Day:", day);

// console.log(Person.data);


// let arr = [4,6,"Tom",[8678,3453,"Test"]];

// console.log(arr);


// let arrPerson = [Person,Person];
// console.log(arrPerson);
