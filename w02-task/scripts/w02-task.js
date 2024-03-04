/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = `<strong>Gabriel C. Boff</strong>`;
let currentYear = new Date().getFullYear();
let profilePicture = "";
/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */
nameElement.innerHTML = fullName;
yearElement.textContent = currentYear;
imageElement.setAttribute("alt", `Profile image of ${fullName}`);

/* Step 5 - Array */

let favoriteFoods = ["Pasta", "Sushi", "Pizza", "Ramen", "Steak", "Salad", "Tomato"];
favoriteFoods.forEach(element => {
    foodElement.innerHTML += `${element}</br>`
});

favoriteFoods.shift();
favoriteFoods.forEach(element => {
    foodElement.innerHTML += `${element}</br>`
});

favoriteFoods.pop();
favoriteFoods.forEach(element => {
    foodElement.innerHTML += `${element}</br>`
})






