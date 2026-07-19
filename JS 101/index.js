
// Spread Operator 

// const number = [1, 2, 3]
// const number1 = [4, 5.6]

// const number3 = [...number, ...number1]
// console.log(number3);

// JS Objects 

// // const user = {
// //     name: "hari",
// //     age: 34
// // }
// // console.log(user.name)
// // user.aderess = "ktm"
// // delete user.aderess
// // console.log(user)

// // const student = {
// //     name: "Ram",
// //     class: 8,
// //     address: "Kathmandu"
// // }
// // console.log(student);

// // console.log(student.class);

// // student.degree = "BBA"
// // console.log(student);

// // delete student.class
// // console.log(student);

// // console.log(student.name + " lives in " + student.address);

// // const students = [
// //     {
// //         name: "Ram",
// //         class: 8,
// //         address: "Kathmandu"
// //     },
// //     {
// //         name: "Ram1",
// //         class: 8,
// //         address: "Kathmandu"
// //     },
// //     {
// //         name: "Ram",
// //         class: 8,
// //         address: "Kathmandu"
// //     }
// // ]
// // console.log(students[1].address)

// // product and price | add all products price also See functions 2morrow

// // const products = [
// //     {
// //         name: "Mobile",
// //         price: 15000
// //     },

// //     {
// //         name: "Laptop",
// //         price: 55000
// //     },


// //     {
// //         name: "charger",
// //         price: 5000
// //     }
// // ]

// // console.log(products[1].name);

// // let total = 0;

// // for (i = 0; i < products.length; i++) {
// //     total += products[i].price;
// // }

// // console.log(total);

// // function name(a) {
// //     return `my name is ${a}`
// // }
// // let myname = name("HARI")
// // console.log(myname);

// // name("shyam")

// // const name1 = () => {
// //     console.log("this is funcrion12")
// // }
// // name1()



// // calculate(num1, num2, operator)

// // let num1 = Number(prompt("Enter first number:"));
// // let num2 = Number(prompt("Enter second Number:"));
// // let operator = prompt("Enter operator:");

// // function calculate(num1, num2, operator) {
// //     switch (operator) {
// //         case '+':
// //             return num1 + num2;
// //         case '-':
// //             return num1 - num2;
// //         case '*':
// //             return num1 * num2;
// //         case '/':
// //             return num2 === 0 ? "Error: cannot divide bye zero" : num1 / num2;
// //         default:
// //             return "Error: Invalid Operator";
// //     }
// // }

// // let result = calculate(num1, num2, operator);
// // console.log(`Result:- ${result}`);





// const users = [{
//     name: "ram",
//     age: 20,
//     class: 12,
//     gender: "male"
// },
// {
//     name: "hari",
//     age: 22,
//     class: 12,
//     gender: "male"
// },
// {
//     name: "shyam",
//     age: 20,
//     class: 12,
//     gender: "male"
// }];
// const mapUsers = users.map((item) => `the user name is ${item.name}the age of the users is ${item.age}`);
// console.log(mapUsers.join("\n"));




// const students = [{
//     name: "sid",
//     age: 18,
//     class: 12,
//     gender: "Male"
// },
// {
//     name: "Aryan",
//     age: 19,
//     class: 12,
//     gender: "Male"
// },
// {
//     name: "Priya",
//     age: 20,
//     class: 12,
//     gender: "female"
// }];

// //  const mapStudents = students.map((item) => `The Student name is ${item.name} The Student age is ${item.age}`);
// // console.log(mapStudents.join('\n'));

// const adults = students.filter((item) => item.age >= 19);
// const names = adults.map((item) => `${item.name}, ${item.age}`)
// console.log(names);


// Reduce 

// const nums = [1, 2, 3, 4];

// const Total = nums.reduce((acc, curr) => acc + curr, 0);
// console.log(Total);

//Module 

// import multiply, { add, subtract } from './math.js';

// console.log(add(1, 2));
// console.log(multiply(2, 3));

// Async and Await 

// async function slowTask() {
//     console.log("Start Task");

//     await new Promise(resolve => setTimeout(resolve, 3000));
//     console.log("Task after 3 secs ");
// }

// slowTask();
// console.log("This runs immediately");

// const ptag = document.querySelector("#inner")
// console.log(ptag);
// ptag.innerHTML += "this is js"
// ptag.style.color = "red"


// const myPara = document.getElementsByTagName("p");

// myPara.innerHTML = "Hello World";

// const item = [{
//     name: "Phone",
//     price: 5000,
//     model: "Android"
// },
// {
//     name: "Phone",
//     price: 7000,
//     model: "Iphone"
// },
// {
//     name: "Phone",
//     price: 8000,
//     model: "Windows"
// }
// ];

// const mapitem = item.map((gadget) => `${gadget.name} ${gadget.price} ${gadget.model}`);
// console.log(mapitem.join("\n"));

// const showItems = document.getElementById("item")
// showItems.innerHTML = mapitem;


//Function 

// function gender() {
//     document.getElementById("result").innerHTML = "This is Female";
// }

//Object male female & all button , map , filter 

// const student = [{
//     name: "Ajay",
//     age: 19,
//     gender: "Male"
// },
// {
//     name: "Jaya",
//     age: 20,
//     gender: "Female"
// }
// ];


// function all() {
//     const allStudent = student.map((std) => `${std.name}, ${std.age}, ${std.gender}`);
//     const showItems = document.getElementById("all");
//     showItems.innerHTML = allStudent.join("<br>");
// }

// document.querySelector("h1").innerHTML = "Good Bye";

//onChange 

