// java link

const garageSale = require("../block17.GuidedPractice.Starter/guided_practice_data_starter");
const coffeeMenu = require ("./coffee_data");

// coffee names

const coffeeDrinks = (item) => {
    return item.name;
};
console.log(coffeeMenu.map(coffeeDrinks));

// java is so sensitive >:(

// under 5

const coffeeUnderFive = (item) => {
    return  item.price <= 5;
};

const underFive = coffeeMenu.filter (coffeeUnderFive);

console.table(underFive);

// indiv coffee price

const coffeePrice = (item) => {
    return item.price;
};
const coffeePriceArray = coffeeMenu.map(coffeePrice);
// all coffee costs added together

const everyCoffeeTotal = (total, indivCoffee) => {
    return total + indivCoffee;
;}

const overallIncome = coffeePriceArray.reduce(everyCoffeeTotal);

console.log(overallIncome);

// Seasonal drinks

const coffeeSeasonal = (item) => {
    return item.seasonal === true;
};
const seasonal = coffeeMenu.filter(coffeeSeasonal);

console.table(seasonal);

// const coffeeDescription = (item) => {
//     return seasonal && " with imported beans";
// }


const coffeMake =  [seasonal && " with imported beans"];


console.log(coffeMake);

// console.log(seasonalCoffee);