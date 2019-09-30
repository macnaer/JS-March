const Car = require("./modules/Car");
const Calc = require("./modules/Calc");

// const BMW = new Car("BMW", "X5", 42343);
// BMW.ShowCar();


const argv = process.argv.slice(2);


// console.log(argv);

// switch (argv[0]) {
//     case "--create":
//             console.log("Example: --create BMW x5 10000");
//             let brend = argv[1];
//             let model = argv[2];
//             let price = argv[3];
//             const car = new Car(brend, model, price);
//             car.ShowCar();
//         break;
//     case "--help":
//         console.log("--create to create new car")

//         break;
//     default:
//         console.log("Use --help to get more information");
//         break;
// }

switch (argv[0]) {
    case "--plus":
            console.log("Example: --plus 2 2");
            let a = argv[1];
            let b = argv[2];
            const calculator = new Calc();
            let res = calculator.Plus(a, b);
            console.log("res = ", res);
            console.log(a, " + ",b, " = ", res);
        break;
    case "--help":
        console.log("--create to create new car")

        break;
    default:
        console.log("Use --help to get more information");
        break;
}