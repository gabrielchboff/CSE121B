/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {};
/* Populate Profile Object with placesLive objects */
myProfile = {
    name: "Gabriel",
    photo: "linkedin_foto.png",
    favoriteFoods: ["pizza", "burgers", "tacos", "pasta"],
    hobbies: ["drawing", "coding", "gaming", "chess"],
    placesLived: [
        
    ]
}

myProfile.placesLived.push({
    place: "Caxias do Sul, Brazil",
    length: "13 years"   
})

myProfile.placesLived.push({
    place: "Sao Paulo, Brazil",
    length: "2 years"
})

myProfile.placesLived.push({
    place: "Porto Alegre, Brazil",
    length: "2 years"
})

myProfile.placesLived.push({
    place: "Londrina, Brazil",
    length: "4 years"
})

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
let photo = document.querySelector('#photo')
photo.setAttribute('src', myProfile.photo);
photo.setAttribute('alt', myProfile.name);


/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food => {
  let li = document.createElement('li');
  li.textContent = food;
  document.querySelector('#favorite-foods').appendChild(li);
});


/* Hobbies List */

/* Places Lived DataList */


