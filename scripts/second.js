// Boolean //
let trueNumber = new Number(true);
let falseNumber = new Number(false);

document.write(`true is equal at number: ${trueNumber}`);
document.write(`<br>`);
document.write(`false is equal at number: ${falseNumber}`);

// Bigger than avarage numbers //
let number = 684165145454538487438748146;
document.write(`<br>`);
document.write(number);
let bignumber = BigInt(number);
document.write(`<br>`);
document.write(bignumber);

// Decimal numbers //
let dollar = 28.634867;
document.write(`<br>`);
// After . //
document.write(dollar.toFixed(3));

// All numbers //
document.write(`<br>`);
document.write(dollar.toPrecision(3));
document.write(`<br>`);

// Array //
let cars = ["bmw", " mercedes", " volkswagen", " nissan", " porsche"];
document.write(cars);
document.write(`<br>`);

let trucks = new Array("DAF", " Scania", " Mercedes", " Volvo");
document.write(trucks);
document.write(`<br>`);
document.write(trucks[3]);

let names = new Array("Samet", "Ahmet", "Mehmet", "Osman", "Eyup");
document.write(`<br>`);
document.write(names[2]);

// pop //
document.write(`<br>`);
trucks.pop();
document.write(`Updated trucks list: ${trucks}`);

// push //
document.write(`<br>`);
trucks.push(" Ford");
document.write(`Updated trucks list: ${trucks}`);

// shift //
document.write(`<br>`);
trucks.shift();
document.write(`shift `, trucks);

// delete //
document.write(`<br>`);
delete trucks[1];
document.write(`Updated trucks list: ${trucks}`);

// unshift //
trucks.unshift("MAN");
document.write(`<br>`);
document.write(trucks);

// Connecting //
document.write(`<br>`);
document.write(cars.concat(trucks));
