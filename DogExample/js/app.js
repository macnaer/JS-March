class Dog {
    constructor(name, breed, age, power){
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.power = power
    }

    showDog (){
        let result = document.querySelector("#result");
        result.innerHTML = "<b>Congratulation!</b> Your dog's name:<b>" + this.name + "!</b>" + " His breed:<b>" + this.breed + "</b>. His age:<b>" + this.age + "</b>.";
        console.log("Name: ",this.name, " Breed: ",this.breed, " Age: ",this.age, " Power: ",this.power);
        let resultImage = document.createElement("img");
        result.appendChild(resultImage);
        switch(this.breed){
        case 'spitz': resultImage.src = 'images/image1.jpg';break;
        case 'corgi': resultImage.src = 'images/image2.jpg';break;
        case 'bottle': resultImage.src = 'images/image3.jpg';break;
    }
}

    play (){
        if(this.power<=0 || this.power>=100){
        this.die();
        } else {
        this.power -= 10;
        game.innerHTML = "Power after play==>" + this.power +"!";
        }
}
die (){
game.innerHTML = "Oops! " + this.name + " is die!!!";
}   
eat (){
if(this.power<=0 || this.power>=100){
this.die();
} else {
this.power += 10;
game.innerHTML = "Power after eat==>" + this.power +"!";
}
}
}

let NewDog;
let game = document.querySelector("#game");

function create() {

let name = document.querySelector(".name").value;
//let breed = document.querySelector(".breed").value;
let age = document.querySelector(".age").value

let validator = new Promise((resolve, reject) => {
    if (name != 0){
        resolve();
    }
    else{
        reject({
            error: "Empty fild name!",
            class: "nameSpan"
        });
    }
})
.then((res) => {
    return new Promise((resolve, reject) =>{
        if (age != 0 ){
            resolve();
        }
        else{
            reject({
                 error: "Empty fild age!",
                 class: "ageSpan"
            });
        }
    })

})
.then((res) => {
    NewDog = new Dog(name,"breed", 45,90);
    NewDog.showDog();
})
.catch(err => {
    let newErr = document.querySelector(`.${err.class}`);
    newErr.textContent = err.error;
    console.log(err);
})


}

function playGame (){
NewDog.play();
}

function eatGame (){
NewDog.eat();
}