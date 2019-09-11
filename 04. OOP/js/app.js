window.addEventListener("load", Init);

function Init(){
    let url = "https://swapi.co/api/people/";
    // Request(url, GetPerson);

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


// class Person {

//     constructor(name, surname, age, gender){
//         this.name = name;
//         this.surname = surname;
//         this.age = age;
//         this.gender = gender;
//     }

//     ShowPerson() {
//         console.log("Name: ", this.name, " Surname: ", this.surname, " Age: ", this.age, " Gender: ", this.gender);
//     }



//     SayHello(name){
//         console.log("Hello, my name is ", name);
//     }
// }

// let Bill = new Person("Bill", "Smith", 35, "male");
// Bill.ShowPerson();
// Bill.SayHello("Bill");
// Bill.name = 10050;
// Bill.ShowPerson();

// let Tom = new Person("Tom", "Tomson",23, "male" );
// Tom.ShowPerson();
// Tom.SayHello("Tommy");


class Dog{
    constructor(name,breed, age,power){
        this.name = name;
        this.breed = breed;
        this.age = age;
        this.power = power;
    }

    ShowDog(){
        console.log("Name: ", this.name, " Breed: ", this.breed, " Age: ", this.age, " Power: ", this.power);
    }

    Play(power){
        if (this.power <= 0 || this.power >= 100) {
            this.Die();
        }
        else{
            this.power -= power;
            console.log("Power after play => ", this.power);
        }
    }

    Die(){
        console.log(this.name, " is die!");
    }

    Eat(power){
         if (this.power <= 0 || this.power >= 100) {
             this.Die();
         } else {
             this.power += power;
             console.log("Power after eat => ", this.power);
         }
    }
}

class HunterDog extends Dog{
    constructor(name, breed, age, power, speed) {
        super(name, breed, age, power);
        this.speed = speed;
    }

    Hunt(power){
        if (this.power <= 0 || this.power >= 100) {
            this.Die();
        } else {
            this.power -= power;
            console.log("Power after hunt => ", this.power);
        }
    }

     ShowDog() {
         console.log("Name: ", this.name, " Breed: ", this.breed, " Age: ", this.age, " Power: ", this.power, " Speed: ", this.speed);
     }
}

let Bob = new HunterDog("Bob", "Labrador", 2, 60, 30);
Bob.ShowDog();
Bob.Hunt(70);
Bob.Hunt(70);

// let Mike = new Dog("Mike", "Taxa", 4, 50);
// Mike.ShowDog();
// Mike.Play(40);
// Mike.ShowDog();
// Mike.Eat(15);
// Mike.ShowDog();
// Mike.Play(60);
// Mike.Play(60);
// //  Mike.ShowDog();