// console is an object
// . is a member access operator
//typeof is a keyword
// keywords are reserve words taken by the language,
// Library or Framework


// Concatenation, matlab mila kar values ko likhna
// console.log("Hello" + " " + "World")

// console.log("===== My Name is Shabbir Afzal Khan ====")
// console.log("I am an instructor in Aptech Metro Stargate")
// console.log("I am a .Net Developer And Flutter Mobile App Developer")

// Declaration, to tell program that there 
// is a variable
// var y; //terminator

// Initialization, to asign value to a variable
// y = 40;


// Task : Re-Initialization

// Declaration as well as initialization
// var x = 30;

// 40





let x = 90;
let y = 50;



// Two Variable

// x = x + y // x = 110
// y = x - y // y = 40
// x = x - y // x = 70

// Third Variable
// z = y;  // z = 200
// y = x; // y = 90
// x = z; // x = 200





// Arithmatic operator

// let num1 = 20;

// let num2 = 50;


// num1 += num2; //70
// num2 = num1++ //71
// num1 -= num2 // 70 - 71

// console.log(num1) // shehroz 50, husnain 1 , Urooj 21 , ahmed 50
// //Aman 70, jawad 30


// num1 = num1 + num2 // 70

// num2 = num2 - num1; // 50 - 70 = -20

// num1 = num2 * 5 // -100

// num2 = num1 / 3 // -33.33

// console.log("The Value of Num2 is " + num2)


// Army Ki Bharti

// Shabham
// let age = 27;
// 7 year
// True
// Logical And Operator
// if else Ladder
// if (age >= 18 && age <= 25) {
//     console.log("Welcome to Army")
// }
// else if (age <= 0) {
//     console.log("Invalid Age")
// }
// else if (age < 18) {
//     console.log("Thorha Wait Karo")
// }
// else {
//     console.log("Sorry, Tumse na ho payega")
// }


// Comments
// Authentication
// var email = prompt("Apni Email Batao")
// var pass = prompt("Password Batao")

// Nahi Hota
// if (email != 'maazr4705@gmail.com') {
//     console.log("Apki Email Sahi nahi hn")
// }
// else if (pass != 'Maaz@12345') {
//     console.log("Apka Password Sahi nahi hn")
// }
// else {
//     alert("Login Successfull")
//     // console.log("Email Ya Password Ghalat hn")
// }

// Switch Case

// let Country = prompt("Konse Mulk se ho Janaab/Muhtarma") //PAKISTAN


// switch (Country.toLowerCase()) {
//     case "pakistan":

//         let city = prompt("Ustaad Aap Konse Sheher se hn");

//         switch (city.toLowerCase()) {
//             case "karachi":
//                 console.log("Favourite Food is Biryani");
//                 break;
//             default:
//                 console.log("ye sheher pakistan mn nahi hn maazrat");
//                 break;
//         }

//         break;


//     case "india":
//         console.log("Cities Are Mumbai,Lucknow and Hyderabad");
//         break;

//     case "saudiarab":
//         console.log("Cities Are Makkah,Madina And Taif");
//         break;

//     default:
//         console.log("is Country mn Hum Available Nahi, Mazrat✌");
//         break;
// }


//Array

//Index

let userData = [
    {
        userName: "Maaz",
        userEmail: "maaz@gmail.com",
        userContact: "0315648256",
        userPassword: "1234"
    },
    {
        userName: "Ahmed",
        userEmail: "ahmed@gmail.com",
        userContact: "0356154651",
        userPassword: "5689"
    }

]

// Array of Object
// for (const element of userData) {
//     console.log(element.userName)
// }

// for (let i = 0; i < userData.length; i++) {
//     console.log(userData[i].userEmail)
// }

//Curly Braces
//Object


//Concatenation
// console.log("User Name is " + userData.userName)

// console.log("Contact Number is " + userData.userCon0tact)

//true,false

// while (navigator.onLine) {
//     alert("Net Chal Raha hn")
// }

// let num1 = 1000;
// let num2 = 10;


// User Define
// Non Parameterized
//Paranthesis
function Addition(num1, num2, num3, num4) {

    let result = num1 + num2 + num3 + num4;
    //Concatenation
    alert("The Sum is " + result)

}

function Subtraction() {

    let result = num1 - num2;
    //Concatenation
    alert("The Subtraction Result is " + result)

}

function Multiplication() {

    //asterik
    let result = num1 * num2;
    //Concatenation
    alert("The Product is " + result)

}


function Division() {

    //forward slash
    let result = num1 / num2;
    //Concatenation
    alert("The Division Result is " + result)

}

// User Define
//Parameterized
// function ageCheck(age) {
//     if (age >= 18) {
//         alert("Valid Person")
//     }
//     else {
//         alert("Invalid Person")
//     }
// }

// ageCheck(25)


// Funtion Invokation / Calling
// Addition(60, 100, 60, 83)
// Subtraction();
// Multiplication();
// Division();


function SquareMaaloomKaro(num) {
    let result = num * num
    alert("The Square of " + num + " is " + result)
}

function CubeMaaloomKaro(num) {
    let result = num * num * num
    alert("The Cube of " + num + " is " + result)
}


function totalValueMaloomKaro(num, power) {
    let result = 1;
    for (i = 10; i < power; i++) {
        result *= num
    }

    // console.log(result)
    // return result; //625
}


// let functionresult = totalValueMaloomKaro(5, 4)

// console.log(functionresult)

// DOM (Document Object Model)


let button = document.getElementById("hamburger-button")
let closebtn = document.getElementById("close-button")
let list = document.getElementById("nav-list")

button.addEventListener("click", function () {
    list.classList.add("active");
    closebtn.style.display = "block";

})

closebtn.addEventListener("click", function () {
    list.classList.remove("active");
    closebtn.style.display = "none";

})



