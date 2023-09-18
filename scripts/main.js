//  Karsilastirma Operatorleri //
//"<"(Kucuk) Operatoru //
let student1 = 15;
let student2 = 20;
document.write("Is student1 is smaller than student2? ", student1 < student2);
document.write(
  "<br>Is student1 is smaller than student2? ",
  student2 < student1
);

//">="  Buyuk veya esit //
let cardTotal = 250;
let freeShippingMust = 300;
let sellers = 3;
let specitialItem = true;
document.write(
  "<br>Is card's total is higher or eqaul to 300? ",
  cardTotal >= freeShippingMust
);

// Mantiksal Operators //
// "&&" ve //
document.write(
  "<br>Is card's total is higher or eqaul to 300? and there should be one seller?",
  cardTotal >= freeShippingMust && sellers <= 1
);

// "||" Her iki sattan biri //
document.write(
  "<br>Is card's total is higher or eqaul to 300? (There should be one seller yes? or the item is special item?) ",
  cardTotal >= freeShippingMust || specitialItem === false
);

// Strings //
//String = //
let name = "Sam Dursun's father Erdal";
let hiText = 'Welcome to Udemig "Ahmet" ';
document.write("<br>Student Name: ", name);
document.write("<br>");
document.write(hiText);
document.write("<br>");
let totalTeachers = 15;
let teacher = new String("totalTeachers");
console.log(teacher);

// \n (in console) //
let welcomeText = "Sam Dursuns father Erdal \n= Welcome to Udemig Ahmet";
console.log(welcomeText);
// length //
document.write("Welcome Texts chacter count: ", welcomeText.length);
document.write("<br>");
// slice //
document.write("Students Father: ", welcomeText.slice(18, 24));

let userName = "Sam";
let userLstName = "Dursun";
document.write("<br>");

// bastan baslatarak karakter alir //
document.write(
  "User's Avatar: ",
  userName.slice(0, 1) + userLstName.slice(0, 1)
);
document.write("<br>");
// slice ile metnin sonundan karakter alma //
let nameStarCount = "*".repeat(userName.length - 2);
let LstNameStarCount = "*".repeat(userLstName.length - 2);
document.write(
  "Next patient: ",
  userName.slice(0, 1) +
    nameStarCount +
    userName.slice(-1).toUpperCase() + // Upper Case //
    " " +
    userLstName.slice(0, 1) +
    LstNameStarCount +
    userLstName.slice(-1).toLowerCase() // Lower Case //
);

// replace //
document.write("<br>");
document.write(welcomeText.replace("Ahmet", "Hasan"));

// replaceALL //
document.write("<br>");
document.write(welcomeText.replaceAll("Ahmet", "Osman"));

// concat //
let avatarNameFirstLetter = userName.slice(0, 1);
let avatarLstNameFirstLetter = userLstName.slice(0, 1);
let avatar = "";
document.write("<br>");
document.write(
  "Concat Avatar: ",
  avatar.concat(avatarNameFirstLetter, avatarLstNameFirstLetter)
);

// includes //
let card = "Macbook Iphone Samsung LG ASUS PS5";
document.write("<br>");
document.write(card.includes("Samsung", 21));

// Literal Template //
let myName = "Mehmet";
let myLstName = "Seyhan";
document.write("<br>");
document.write("My is " + myName + " and my last name is " + myLstName);

// backtick`` //
document.write("<br>");
document.write(`My is ${myName} and my last name is ${myLstName}`);

// Math //
let number = 954967142732167516735;
document.write("<br>");
document.write(`number: ${number}`);

// isNAN //
document.write("<br>");
document.write(`number: ${isNaN(number)}`);
document.write("<br>");
document.write(`test: ${isNaN(myName)}`);

// Sayilari Yaziya Cevirme //
let stringNumber = number.toString();
document.write("<br>");
document.write(typeof stringNumber);
document.write("<br>");
let stringNumber2 = new String(number);
document.write(typeof stringNumber2);

// Yazilari Sayiya Cevirme //
let price = 12.54;
document.write("<br>");
document.write(price);

let priceNumber = new Number(price);
document.write("<br>");
document.write(typeof priceNumber);
document.write("<br>");
document.write(`Integer : ${parseInt(priceNumber)}`);
document.write("<br>");
document.write(`Full Number : ${parseFloat(priceNumber)}`);
