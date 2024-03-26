/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        const article = document.createElement('article');
        const title = document.createElement('h3');
        title.textContent = temple.templeName;
        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.location;
        templesElement.appendChild(article);
        article.appendChild(title);
        article.appendChild(img);
    })
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = await response.json();
}

/* reset Function */
const reset = () => {
    templesElement.innerHTML = '';
}

/* filterTemples Function */
const filterTemples = (temples) => {
    reset();
    const filtered = document.querySelector('#filtered');
    const filterValue = filtered.value;

    switch (filterValue) {
        case 'utah':
            displayTemples(temples.filter(temple => temple.location.split(',')[1].trim() == 'Utah'));
            break;
        case 'notutah':
            displayTemples(temples.filter(temple => temple.location.split(',')[1].trim() != 'Utah'));
            break;
        case 'older':
            displayTemples(temples.filter(temple => parseInt(temple.dedicated.split(',')[0].trim()) < 1950));
            break;
        case 'all':
            displayTemples(temples);
            break;
        default:
            break;
    }
}


/* Event Listener */
document.querySelector('#filtered').addEventListener('change', () => {
    filterTemples(templeList);
});


getTemples();
