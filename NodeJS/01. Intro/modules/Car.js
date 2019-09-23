class Car {
    constructor(brend, model, price){
        this.brend = brend;
        this.model = model;
        this.price = price;
    }

    ShowCar(){
        console.log("Brend: ", this.brend, " Model: ", this.model, " Price: ",this.price);
    }
}


module.exports  = Car;