
// const number3 = [...number, ...number1]
// console.log(number3);

// const user = {
//     name: "hari",
//     age: 34
// }
// console.log(user.name)
// user.aderess = "ktm"
// delete user.aderess
// console.log(user)

// const student = {
//     name: "Ram",
//     class: 8,
//     address: "Kathmandu"
// }
// console.log(student);

// console.log(student.class);

// student.degree = "BBA"
// console.log(student);

// delete student.class
// console.log(student);

// console.log(student.name + " lives in " + student.address);

// const students = [
//     {
//         name: "Ram",
//         class: 8,
//         address: "Kathmandu"
//     },
//     {
//         name: "Ram1",
//         class: 8,
//         address: "Kathmandu"
//     },
//     {
//         name: "Ram",
//         class: 8,
//         address: "Kathmandu"
//     }
// ]
// console.log(students[1].address)

// product and price | add all products price also See functions 2morrow

// const products = [
//     {
//         name: "Mobile",
//         price: 15000
//     },

//     {
//         name: "Laptop",
//         price: 55000
//     },


//     {
//         name: "charger",
//         price: 5000
//     }
// ]

// console.log(products[1].name);

// let total = 0;

// for (i = 0; i < products.length; i++) {
//     total += products[i].price;
// }

// console.log(total);

// function name(a) {
//     return `my name is ${a}`
// }
// let myname = name("HARI")
// console.log(myname);

// name("shyam")

// const name1 = () => {
//     console.log("this is funcrion12")
// }
// name1()



// calculate(num1, num2, operator)

let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second Number:"));
let operator = prompt("Enter operator:");

function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 === 0 ? "Error: cannot divide bye zero" : num1 / num2;
        default:
            return "Error: Invalid Operator";
    }
}

let result = calculate(num1, num2, operator);
console.log(`Result:- ${result}`);




