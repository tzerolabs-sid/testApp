const inputKm = document.getElementById("number");
const calc = document.getElementById("calculate");
const carVal = document.getElementById("car");
const bikeVal = document.getElementById("bike");
const evVal = document.getElementById("ev");

let petrol = 100;
let maint = 500;

calc.addEventListener("click", computeResults);

function computeResults(e) {
    const monthlyCar = inputKm.value * 30;
    const monthlyCarCost = ((monthlyCar / 12) * 100) + 500; 
    console.log(monthlyCarCost);

    const monthlyBike = inputKm.value * 30;
    const monthlyBikeCost = ((monthlyBike / 40) * 100) + 100; 
    console.log(monthlyBikeCost);

    const monthlyEv = inputKm.value * 30;
    const monthlyEvCost = ((monthlyEv / 25) * 0.25) + 10; 
    console.log(monthlyEvCost);

    carVal.innerHTML = "INR" + " "+ monthlyCarCost ;
    bikeVal.innerHTML = "INR" + " "+ monthlyBikeCost;
    evVal.innerHTML = "INR" + " "+ monthlyEvCost;

    e.preventDefault();

    
}


