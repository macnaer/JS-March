window.addEventListener("load", Init);


function Init(){
    let url = "https://swapi.co/api/people/";
    Request(url, GetPerson);

    let nextBtn = document.querySelector(".next");
    nextBtn.addEventListener("click", Next);
}


function Next(){
    console.log("Next");
    let newUrl = state.next;
    Request(newUrl, GetPerson);
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
    state.next = persons.next;
    state.prev = persons.prev;
    let countOfPerson = document.querySelector(".count");
    countOfPerson.textContent = `10 of ${persons.count}`;

    let root = document.querySelector("#root");
    let tbody = document.createElement("tbody");
    tbody.setAttribute("class", "table table-inbox table-hover")
    root.appendChild(tbody);


    for (let i = 0; i < persons.results.length; i++){
        let tr = document.createElement("tr");
        let tdName = document.createElement("td");
        tdName.textContent = persons.results[i].name;
        let tdBirthYear = document.createElement("td");
        tdBirthYear.textContent = persons.results[i].birth_year;
        let tdGender = document.createElement("td");
        tdGender.textContent = persons.results[i].gender;
        tr.appendChild(tdName);
        tr.appendChild(tdBirthYear);
        tr.appendChild(tdGender);
        tbody.appendChild(tr);
    }
}

let state = {
    next: "",
    prev: ""
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
