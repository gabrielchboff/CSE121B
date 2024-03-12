/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
   return number1 + number2 
}

// Faster style
//document.getElementById("addNumbers").onclick = function() {
//    document.getElementById("sum").value = add(addNumber1, addNumber2);
//}

document.querySelector("#addNumbers").addEventListener("click", function() {
    let addNumber1 = Number(document.getElementById("add1").value);
    let addNumber2 = Number(document.getElementById("add2").value);


    document.querySelector("#sum").value = add(addNumber1, addNumber2);
})

/* Function Expression - Subtract Numbers */

function subtract(number1, number2) {
    return number1 - number2;
}


document.querySelector("#subtractNumbers").addEventListener("click", function() {
    let subtractNumber1 = Number(document.getElementById("subtract1").value);
    let subtractNumber2 = Number(document.getElementById("subtract2").value);
    document.querySelector("#difference").value = subtract(subtractNumber1, subtractNumber2);
})


/* Arrow Function - Multiply Numbers */

const multiply = (number1, number2) => number1 * number2;

document.querySelector("#multiplyNumbers").addEventListener("click", function() {
    let factor1 = Number(document.getElementById("factor1").value);
    let factor2 = Number(document.getElementById("factor2").value);
    document.querySelector("#product").value = multiply(factor1, factor2);
})

/* Open Function Use - Divide Numbers */


const divide = (number1, number2) => number1 / number2;

document.querySelector("#divideNumbers").addEventListener("click", function() {
    let dividend = Number(document.getElementById("dividend").value);
    let divisor = Number(document.getElementById("divisor").value);
    document.querySelector("#quotient").value = divide(dividend, divisor);
})


/* Decision Structure */
const discout = (subtotal, isMember) => {
    if (isMember) {
        return subtotal - (subtotal * 0.2)
    } else {
        return subtotal
    }
}

document.querySelector("#getTotal").addEventListener("click", function() {
    let subtotal = Number(document.getElementById("subtotal").value);
    let isMember = document.getElementById("member").checked;
    let total = discout(subtotal, isMember);
    document.querySelector("#total").innerHTML = `$${total.toFixed(2)}`;


})

/* ARRAY METHODS - Functional Programming */

let numbers = [];
for (let i = 1; i <= 13; i++) {
  numbers.push(i);
}

/* Output Source Array */
document.querySelector("#array").innerHTML = numbers;

/* Output Odds Only Array */
let odds = numbers.filter(number => number % 2 !== 0);
document.querySelector("#odds").innerHTML = odds;;

/* Output Evens Only Array */
let evens = numbers.filter(number => number % 2 === 0);
document.querySelector("#evens").innerHTML = evens;

/* Output Sum of Org. Array */
let sum = numbers.reduce((a, b) => a + b);
document.querySelector("#sumOfArray").innerHTML = sum;

/* Output Multiplied by 2 Array */
let multiplied = numbers.map(number => number * 2);
document.querySelector("#multiplied").innerHTML = multiplied;

/* Output Sum of Multiplied by 2 Array */
let sumOfMultiplied = multiplied.reduce((a, b) => a + b);
document.querySelector("#sumOfMultiplied").innerHTML = sumOfMultiplied;
