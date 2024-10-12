// Lines 1 - 21 are related to altering otherpage2.html (specific item page) with roll specific information
//depending on which link we click on index.html, this sets 
// the type of roll (Apple, Raisin, etc.) to rollType. 
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll')

//references the rolls object in rollsData.js
const selectedRoll = rolls[rollType];

const rollName = rollType + " " + "Cinnamon Roll";
const rollPrice = selectedRoll.basePrice;
const rollImage = "../assets/products/" + selectedRoll.imageFile;

const rollHeaderElement = document.querySelector('.center-text-header');
rollHeaderElement.innerText = rollName;
const rollImageElement = document.querySelector('.item-page-box');
rollImageElement.src = rollImage;
const rollPriceElement = document.querySelector('#total-price');
rollPriceElement.innerText = "$" + rollPrice;
baseBunPrice = rollPrice;

// Lines 23 - 43 are related to creating instances of a roll and adding that to the cart. 

//updated object Roll to have calculateItemPrice()
class Roll{
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.base = basePrice;
        this.calculateItemPrice();
    }

    calculateItemPrice(){
        let glazingPrice = glazingOptions[this.glazing];
        let sizePrice = packSizeOptions[this.size];
        this.ItemPrice = (glazingPrice + this.base) * sizePrice;
        return this.ItemPrice;
    }
}

//updated cart to contain starting items
let cart = [
    new Roll ("Original", "Sugar Milk", "1", 2.49),
    new Roll ("Walnut", "Vanilla Milk", "12", 3.49),
    new Roll ("Raisin", "Sugar Milk", "3", 2.99),
    new Roll ("Apple", "Original", "3", 3.49),
];

function addRolltoCart(){
    let glazeType = glazingElement.options[glazingElement.selectedIndex].text;
    let sizeType = sizeElement.options[sizeElement.selectedIndex].text;

    addedRoll = new Roll(rollType,glazeType,sizeType,baseBunPrice);
    cart.push(addedRoll);
    console.log(cart);
}

// Notes:
// glazingElement.options returns a list of all options within the glazingElement dropdown
// glazingElement.selectedIndex gives the index of the currently selected option within glazingElement
// glazingElement.options[glazingElement.selectedIndex] returns the option element at the currently selected index
// .text extracts the visible text from the selected option (what is displayed to the user)

// RESOURCES I USED: 
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/selectedIndex - to learn about the selectedIndex property
// https://playcode.io/javascript/classes - to learn about creating new instance
