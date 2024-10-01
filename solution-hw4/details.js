const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll')

const currentRoll = rolls[rollType];

let cart = [];

const rollName = rollType + " " + "Cinnamon Roll";
const rollPrice = currentRoll.basePrice;
const rollImage = "../assets/products/" + currentRoll.imageFile;

const rollHeaderElement = document.querySelector('.center-text-header');
rollHeaderElement.innerText = rollName;

const rollImageElement = document.querySelector('.item-page-box');
rollImageElement.src = rollImage;

const rollPriceElement = document.querySelector('#total-price');
rollPriceElement = "$" + rollPrice;
baseBunPrice = rollPrice;

class Roll{
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

function addRolltoCart(){
    //add on click to the button so it nows to run this function when you click it
    //create a class variable and set it equal to roll(blah)
    //inside roll, the blah needs to be filled out. 
    //include all the information using the already assigned variables
    //append that class variable into cart
    
    

}
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/selectedIndex
// Explains the selectedIndex property: Whichever option the user chooses, 
// with 0 being the first option, it will return that index