// // Lines 1 - 21 are related to altering otherpage2.html (specific item page) with roll specific information
// //depending on which link we click on index.html, this sets 
// // the type of roll (Apple, Raisin, etc.) to rollType. 
// const queryString = window.location.search;
// const params = new URLSearchParams(queryString);
// const rollType = params.get('roll');
// let totalCartPrice = 0;

// //references the rolls object in rollsData.js
// const selectedRoll = rolls[rollType];


// if (rollType != null && rollType !== ""){
//     const rollName = rollType + " " + "Cinnamon Roll";
//     const rollPrice = selectedRoll.basePrice;
//     const rollImage = "../assets/products/" + selectedRoll.imageFile;

//     const rollHeaderElement = document.querySelector('.center-text-header');
//     rollHeaderElement.innerText = rollName;
//     const rollImageElement = document.querySelector('.item-page-box');
//     rollImageElement.src = rollImage;
//     const rollPriceElement = document.querySelector('#total-price');
//     rollPriceElement.innerText = "$" + rollPrice;
//     baseBunPrice = rollPrice;
// }

// // Lines 23 - 43 are related to creating instances of a roll and adding that to the cart. 

// //updated object Roll to have calculateItemPrice()
// class Roll{
//     constructor(rollType, rollGlazing, packSize, basePrice) {
//         this.type = rollType;
//         this.glazing = rollGlazing;
//         this.size = packSize;
//         this.base = basePrice;
//         this.itemPrice = this.calculateItemPrice();
//         this.element = null;

//     }

//     calculateItemPrice(){
//         let glazingPrice = glazingOptions[this.glazing];
//         let sizePrice = packSizeOptions[this.size];
//         let answer = (this.base + glazingPrice) * sizePrice;
//         return answer.toFixed(2);
//     }
// }

// //updated cart to contain starting items
// const cartSet = new Set();

// function addRolltoCart(type, glazing, size, basePrice){
//     const roll = new Roll(type, glazing, size, basePrice);
//     cartSet.add(roll);
//     createRollElement(roll);
// }

// // Notes:
// // glazingElement.options returns a list of all options within the glazingElement dropdown
// // glazingElement.selectedIndex gives the index of the currently selected option within glazingElement
// // glazingElement.options[glazingElement.selectedIndex] returns the option element at the currently selected index
// // .text extracts the visible text from the selected option (what is displayed to the user)

// // RESOURCES I USED: 
// // https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/selectedIndex - to learn about the selectedIndex property
// // https://playcode.io/javascript/classes - to learn about creating new instance

// function createRollElement(roll){
//     const cartContainer = document.querySelector('.entire-container-cart');

//     const template = document.querySelector('#cart-item-template');
//     const clone = template.content.cloneNode(true);
//     roll.element = clone.querySelector('.item-container-cart');

//     const rollImage = roll.element.querySelector('.cart-page-box');
//     rollImage.src = `../assets/products/${roll.type.toLowerCase()}-cinnamon-roll.jpg`;
//     rollImage.alt = `${roll.type} Cinnamon Roll`;

//     roll.element.querySelector('.inner-container-cart-page-text').innerText = `${roll.type} Cinnamon Roll`;
//     roll.element.querySelector('.glazing').innerText = `Glazing: ${roll.glazing}`;
//     roll.element.querySelector('.pack-size').innerText = `Pack Size: ${roll.size}`;
//     roll.element.querySelector('.cart-page-price-one').innerText = `$${roll.itemPrice}`;

//     const removeButton = roll.element.querySelector('.underline-cart-page');
//     removeButton.addEventListener('click', () => deleteRollFromCart(roll));
    
//     cartContainer.appendChild(roll.element);
//     updateTotalCartPrice();
// }

// function updateTotalCartPrice(){
//     totalCartPrice = 0;
//     cartSet.forEach(roll => {
//         totalCartPrice += parseFloat(roll.itemPrice);
//     })

//     const finalCartPrice = document.querySelector('.total-cart-price');
//     if (finalCartPrice) {
//         finalCartPrice.innerText = "$" + totalCartPrice.toFixed(2);
//     }
// }

// function deleteRollFromCart(roll){
//     roll.element.remove();
//     cartSet.delete(roll);
//     updateTotalCartPrice();
// }

// function initializeCart(){
//     const initialCartItems = [
//         new Roll("Original", "Sugar Milk", "1", 2.49),
//         new Roll("Walnut", "Vanilla Milk", "12", 3.49),
//         new Roll("Raisin", "Sugar Milk", "3", 2.99),
//         new Roll("Apple", "Original", "3", 3.49),
//     ];

//     initialCartItems.forEach(roll => {
//         cartSet.add(roll);
//         createRollElement(roll);
//     });
// }

// initializeCart();


// number 2
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll')
const selectedRoll = rolls[rollType];

let cart = [];
let baseBunPrice = selectedRoll.basePrice;

const rollName = `${rollType} Cinnamon Roll`
const rollImage = `../assets/products/${selectedRoll.imageFile}`;
// const rollPrice = selectedRoll.basePrice;

document.querySelector('.center-text-header').innerText = rollName;
document.querySelector('.item-page-box').src = rollImage;
document.querySelector('#total-price').innerText = `$${baseBunPrice.toFixed(2)}`;
// rollPriceElement.innerText = "$" + rollPrice;

class Roll{
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
        this.element = null;
    }
}

const rollSet = new Set();

function addNewRollItem(rollType, rollGlazing, packSize, basePrice) {
    const rollItem = new Roll(rollType, rollGlazing, packSize, basePrice);
    rollSet.add(rollItem);
    rollSet.add(rollItem);
    createElement(rollItem)
    // return rollItem;
}

function createElement(rollItem) {
    const template = document.querySelector('#cart-item-template');
    const clone = template.content.cloneNode(true);
    
    rollItem.element = clone.querySelector('.container-cart-page');
    
    const btnDelete = rollItem.element.querySelector('.item-delete');
    console.log(btnDelete);
    btnDelete.addEventListener('click', () => {
        deleteNote(rollItem);
    });
    
    const rollItemListElement = document.querySelector('#cart-item-list');
    rollItemListElement.prepend(rollItem.element);
    updateElement(rollItem);
    }

function addRolltoCart(){
    // let glazeType = glazingElement.text;
    // let sizeType = sizeElement.text;
    let glazeType = glazingElement.options[glazingElement.selectedIndex].text;
    let sizeType = sizeElement.options[sizeElement.selectedIndex].text;

    addedRoll = new Roll(rollType,glazeType,sizeType,baseBunPrice);
    cart.push(addedRoll);
    console.log(cart);
}

function updateElement(rollItem) {
    const rollItemImage = rollItem.element.querySelector('.cart-page-box')
    const rollItemName = rollItem.element.querySelector('.item-name');
    const rollItemGlazing = rollItem.element.querySelector('glazing');
    const rollItemSize = rollItem.element.querySelector('.pack-size');
    const rollItemPrice = rollItem.element.querySelector('.price');

    rollItemName.innerText = rollItem.type;
    rollItemGlazing.innerText = rollItem.glazing;
    rollItemSize.innerText = rollItem.size;
    rollItemPrice.innerText = rollItem.basePrice;
  }

  function deleteRollItem(rollItem) {
    rollItem.element.remove();
    rollSet.delete(rollItem);
  }
  
  const rollItem1 = addNewRollItem(
    "Original", 
    "Vanilla Milk", 
    "12", 
    "2.49"
    );
  
  for (const rollItem of rollSet) {
    console.log(rollItem);
    createElement(rollItem);
  }
