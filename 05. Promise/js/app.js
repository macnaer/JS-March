
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve("Start process");
            //reject("Bad idea!");
        }, 1000);

    })
        .then(newCar => {
            console.log(newCar);

            return new Promise((resolve, reject) => {

                setTimeout(() => {
                    let car = {
                        brand: "Tesla",
                        model: "X"
                    }

                    console.log("You want to buy: ", car);
                    //reject("Low money!")
                    resolve(car);

                }, 500);

            })
        })
        .then((newCar) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    car = {
                        brand: "Tesla",
                        model: "X",
                        price: 1000000
                    }

                    resolve(car);
                }, 1000);
            })
        })
        .then((newCar) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    car = {
                        brand: "Tesla",
                        model: "X",
                        price: 1000000,
                        police: "good"
                    }

                    //resolve(car);
                    reject("Police says: Bad car")
                }, 1000);
            })
        })
        .then((newCar) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    car = {
                        brand: "Tesla",
                        model: "X",
                        price: 1000000,
                        police: "good",
                        CTO: "ready"
                    }

                    resolve(car);
                }, 1000);
            })
        })
        .then((newCar) => {
            console.log("You bought car: ", "Name: ", newCar.brand, " Model: ", newCar.model);
        })
        .catch(err => console.log(err));



