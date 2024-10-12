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

// Lines 23 - are related to creating instances of a roll and adding that to the cart. 

let cart = [];

class Roll{
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

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

// New code below: 

// class Roll{
//     constructor(rollType, rollGlazing, packSize, basePrice) {
//         this.type = rollType;
//         this.glazing = rollGlazing;
//         this.size = packSize;
//         this.base = basePrice;
//         this.calculateItemPrice();
//     }

//     calculateItemPrice(){
//         let glazingPrice = glazingOptions[this.glazing];
//         let sizePrice = packSizeOptions[this.size];
//         this.ItemPrice = (glazingPrice + this.base) * sizePrice;
//         return this.ItemPrice;
//     }
// }

// let cart = [
//     new Roll ("Original", "Sugar Milk", "1", 2.49),
//     new Roll ("Walnut", "Vanilla Milk", "12", 3.49),
//     new Roll ("Raisin", "Sugar Milk", "3", 2.99),
//     new Roll ("Apple", "Original", "3", 3.49),
// ];

// function displayOneItem(roll, container1){
//     let newItem = document.createElement('div');

//     newItem.innerHTML = `
//     <div class = "item-container-cart">
//         <div class = "container-cart-page">

//           <img class = "cart-page-box" src="../assets/products/${roll.type.toLowerCase()}-cinnamon-roll.jpg" alt="${roll.type} Cinnamon Roll" >
//           <div class = "inner-container-cart-page">
//             <h5 class="inner-container-cart-page-text">${roll.type} Cinnamon Roll</h5>
//             <h5 class="inner-container-cart-page-text">Glazing: ${roll.glazing}</h5>
//             <h5 class="inner-container-cart-page-text">Pack Size: ${roll.size}</h5>
//           </div>
//           <h2 class="cart-page-price-one">$${roll.ItemPrice.toFixed(2)}</h2>

//         </div>

//         <div class="container-underline-cart-page">
//           <h2 class="underline-cart-page">Remove</h2>
//         </div>

//       </div>
//     `;

//     container1.appendChild(newItem);
// }

// function generateFullCart(cart){
//     let container1 = document.querySelector('.entire-container-cart');
//     container1.innerHTML = '';

//     for (const roll of cart){
//         displayOneItem(roll, container1);
//         console.log("Item displayed:", roll);
//     }
    
//     updateTotalPrice();
// }

// function updateTotalPrice(){
//     let sum = 0;
//     for (const roll of cart){
//         sum += roll.ItemPrice;
//     }

//     console.log("updated Total Price", sum);
//     document.querySelector('.total-price').innerText = `$${sum.toFixed(2)}`;
// }

// // I was getting undefined for roll.
// // Should I have placed the below code in a seperate file?
// const queryString = window.location.search;
// const params = new URLSearchParams(queryString);
// const rollType = params.get('roll')

// const selectedRoll = rolls[rollType];

// if (selectedRoll) {
//     const rollName = rollType + " " + "Cinnamon Roll";
//     const rollPrice = selectedRoll.basePrice;
//     const rollImage = "../assets/products/" + selectedRoll.imageFile;

//     baseBunPrice = rollPrice;

//     const rollHeaderElement = document.querySelector('.center-text-header');
//     rollHeaderElement.innerText = rollName;
//     const rollImageElement = document.querySelector('.item-page-box');
//     rollImageElement.src = rollImage;
//     const rollPriceElement = document.querySelector('#total-price');
//     rollPriceElement.innerText = "$" + rollPrice;
//     baseBunPrice = rollPrice;
// }

// function addRolltoCart(){
//     // let glazeType = glazingElement.text;
//     // let sizeType = sizeElement.text;
//     let glazeType = glazingElement.options[glazingElement.selectedIndex].text;
//     let sizeType = sizeElement.options[sizeElement.selectedIndex].text;

//     addedRoll = new Roll(rollType,glazeType,sizeType,baseBunPrice);
//     cart.push(addedRoll);
//     console.log(cart);
// }

// generateFullCart(cart)


// //glazingElement.selectedIndex -> gets the index of the selected option in the glazingElement dropdown
// //glazingElement.options -> gets the <options> within the glazingElement
// //.text lets us edit single out the text

// // RESOURCES I USED: 
// // https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/selectedIndex - to learn about the selectedIndex property
// // https://playcode.io/javascript/classes - to learn about creating new instance
