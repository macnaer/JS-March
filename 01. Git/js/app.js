class Dog {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    ShowDogInfo = () => {
        console.log("Name => ", this.name, " Age => ", this.age);
    }
}


let Bobik = new Dog("Bobik", 3);
Bobik.ShowDogInfo();
