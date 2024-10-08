class Roll{
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll')

const selectedRoll = rolls[rollType];

let cart = [];

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

function addRolltoCart(){
    // let glazeType = glazingElement.text;
    // let sizeType = sizeElement.text;
    let glazeType = glazingElement.options[glazingElement.selectedIndex].text;
    let sizeType = sizeElement.options[sizeElement.selectedIndex].text;

    addedRoll = new Roll(rollType,glazeType,sizeType,baseBunPrice);
    cart.push(addedRoll);
    console.log(cart);
}

//glazingElement.selectedIndex -> gets the index of the selected option in the glazingElement dropdown
//glazingElement.options -> gets the <options> within the glazingElement
//.text lets us edit single out the text

// RESOURCES I USED: 
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/selectedIndex - to learn about the selectedIndex property
// https://playcode.io/javascript/classes - to learn about creating new instance
