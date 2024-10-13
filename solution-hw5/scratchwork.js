//PREVIOUS CODE BEFORE CHANGES
// Lines 1 - 21 are related to altering otherpage2.html (specific item page) with roll specific information
//depending on which link we click on index.html, this sets 
// the type of roll (Apple, Raisin, etc.) to rollType. 
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');
let totalCartPrice = 0;

//references the rolls object in rollsData.js
const selectedRoll = rolls[rollType];

console.log(rollType)

if (rollType != null && rollType !== ""){
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
}

// Lines 23 - 43 are related to creating instances of a roll and adding that to the cart. 

//updated object Roll to have calculateItemPrice()
class Roll{
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.base = basePrice;
        this.itemPrice = this.calculateItemPrice();
        this.element = null;

    }

    calculateItemPrice(){
        let glazingPrice = glazingOptions[this.glazing];
        let sizePrice = packSizeOptions[this.size];
        let answer = (this.base + glazingPrice) * sizePrice;
        return answer.toFixed(2);
    }
}

//updated cart to contain starting items
const cartSet = new Set();

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

// Lines 62 - 101 are related to displaying cart items in the cart 
function generateFullCart(cart){
    let cartContainer = document.querySelector('.entire-container-cart');
   cartContainer.innerHTML = '';

    totalCartPrice = 0;
   for (let itemNumber = 0; itemNumber < cart.length; itemNumber++){
        let roll = cart[itemNumber];
        displayOneItem(roll, cartContainer, itemNumber);
        let oneItemPrice = calculateOneItemPrice(roll);
        totalCartPrice += oneItemPrice;
        console.log("HELLO");
        console.log(`Item ${roll.type} price:`, oneItemPrice);
   }

   console.log("Total cart price after update:", totalCartPrice);
   displayFinalCartPrice();
}

function displayOneItem(roll, cartContainer, itemNumber){
    console.log("Displaying item ${roll.type} with itemNumber:", itemNumber);

   let newItem = document.createElement('div');
   newItem.setAttribute("item-number", itemNumber);
   newItem.innerHTML = `
   <div class = "item-container-cart">
       <div class = "container-cart-page">

         <img class = "cart-page-box" src="../assets/products/${roll.type.toLowerCase()}-cinnamon-roll.jpg" alt="${roll.type} Cinnamon Roll" >
         <div class = "inner-container-cart-page">
           <h5 class="inner-container-cart-page-text">${roll.type} Cinnamon Roll</h5>
           <h5 class="inner-container-cart-page-text">Glazing: ${roll.glazing}</h5>
           <h5 class="inner-container-cart-page-text">Pack Size: ${roll.size}</h5>
         </div>
         <h2 class="cart-page-price-one">$${roll.itemPrice}</h2>

       </div>

       <div class="container-underline-cart-page">
         <h2 class="underline-cart-page" onclick="removeRollFromCart(${itemNumber})">Remove</h2>
       </div>

     </div>
   `;

   cartContainer.appendChild(newItem);
}

function calculateOneItemPrice(roll){
    return parseFloat(roll.itemPrice);
}


function displayFinalCartPrice(){
    let finalCartPrice = document.querySelector('.total-cart-price');
    if (finalCartPrice != null){
        finalCartPrice.innerText = "$" + totalCartPrice.toFixed(2);
    }
}

function removeRollFromCart(itemNumber){
    console.log("removing item at index:", itemNumber)
    cart.splice(itemNumber, 1);
    generateFullCart(cart);
    updateTotalCartPrice();
}

function updateTotalCartPrice(){
    totalCartPrice = 0;
    for (let i = 0; i < cart.length; i++){
        let roll = cart[i];
        totalCartPrice += parseFloat(roll.itemPrice);
    }
    console.log("Updated total cart price:", totalCartPrice);
    displayFinalCartPrice();
}

generateFullCart(cart)
displayFinalCartPrice()
