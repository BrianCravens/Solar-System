const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

const planetContainer = document.querySelector("#planets")
planets.forEach(planet => {
        planetContainer.innerHTML += `${planet}  `
    })
   
/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/

// const planetEl = document.getElementById("planets")

const planetEL = planets.map(string =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
})
console.log(planetEL)
/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/
const planetE = planets.filter(planetE =>{
    return planetE.includes(`e`)
})
console.log(planetE)
/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/