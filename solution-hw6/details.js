const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');
const selectedRoll = rolls[rollType];
console.log(rollType);

if (rollType != null){
    let baseBunPrice = selectedRoll.basePrice;

    const rollName = `${rollType} Cinnamon Roll`;
    const rollImage = `../assets/products/${selectedRoll.imageFile}`;

    document.querySelector('.center-text-header').innerText = rollName;
    document.querySelector('.item-page-box').src = rollImage;
    document.querySelector('#total-price').innerText = `$${baseBunPrice.toFixed(2)}`;
}

class Roll{
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
        this.itemPrice = this.calculateItemPrice();
        this.element = null;
    }

    calculateItemPrice(){
        let glazingPrice = parseFloat(glazingOptions[this.glazing]);
        let sizePrice = parseFloat(sizeOptions[this.size]);
        let answer = (parseFloat(this.basePrice) + glazingPrice) * sizePrice;
        return answer.toFixed(2);
    }
}

let priceArea = document.querySelector('.total-cart-price'); 
if (priceArea != null){
    console.log("I am on the cart page! This is cart:");
    retrieveFromLocalStorage();
    updateTotalCartPrice();
}

function createNewRollItem(rollType, rollGlazing, packSize, basePrice) {
    const rollItem = new Roll(rollType, rollGlazing, packSize, basePrice);
    return rollItem;
}

function createElement(rollItem) {
    const template = document.querySelector('#cart-item-template');
    const clone = template.content.cloneNode(true);
    
    rollItem.element = clone.querySelector('#item-list');
    
    const btnDelete = rollItem.element.querySelector('.item-delete');
    console.log(btnDelete);
    btnDelete.addEventListener('click', () => {
        deleteRollItem(rollItem);
    });
    
    const rollItemElement = document.querySelector('#cart-item-list');
    rollItemElement.prepend(rollItem.element);
    updateElement(rollItem);
}

function addRolltoCart(){
    let existingCart = JSON.parse(localStorage.getItem('storedItems')) || [];
    console.log("This is the existing cart before adding item:");
    console.log(existingCart);

    let glazeType = glazingElement.options[glazingElement.selectedIndex].text;
    let sizeType = sizeElement.options[sizeElement.selectedIndex].text;

    let addedRoll = new Roll(rollType, glazeType, sizeType, baseBunPrice);

    existingCart.push(addedRoll);
    console.log("This is the existing cart after adding item:");
    console.log(existingCart);
    localStorage.setItem('storedItems', JSON.stringify(existingCart));
    console.log("This is the Local Storage after adding item:");
    console.log(localStorage.getItem('storedItems'));
}

function updateElement(rollItem) {
    rollItem.element.querySelector('.cart-page-box').src = `../assets/products/${rollItem.type.toLowerCase()}-cinnamon-roll.jpg`;
    rollItem.element.querySelector('.item-name').innerText = `${rollItem.type} Cinnamon Roll`;
    rollItem.element.querySelector('.glazing').innerText = `Glazing: ${rollItem.glazing}`;
    rollItem.element.querySelector('.pack-size').innerText = `Pack Size: ${rollItem.size}`;
    rollItem.element.querySelector('.price').innerText = `$${rollItem.itemPrice}`;
}

function updateTotalCartPrice() {
    const itemArrayString = localStorage.getItem('storedItems');
    const existingCart = JSON.parse(itemArrayString) || [];

    let totalCartPrice = 0;
    for (const roll of existingCart){
        totalCartPrice += parseFloat(roll.itemPrice);
    }

    let priceArea = document.querySelector('.total-cart-price');
    if (priceArea == null){
        return;
    }
    priceArea.innerText = `$${totalCartPrice.toFixed(2)}`;
}

function deleteRollItem(rollItem) {
    let existingCart = JSON.parse(localStorage.getItem('storedItems')) || [];
    console.log("This is the existing cart before deleting an item:");
    console.log(existingCart);

    //Resource linked below for findIndex() method
    const index = existingCart.findIndex(
        item => 
            item.type === rollItem.type && 
        item.glazing === rollItem.glazing && 
        item.size === rollItem.size && 
        item.basePrice === rollItem.basePrice
    );

    rollItem.element.remove();
    if (index > -1){
        console.log("inside if statement?")
        existingCart.splice(index,1);
    }

    console.log("This is the existing cart after deleting item:");
    console.log(existingCart);
    localStorage.setItem('storedItems', JSON.stringify(existingCart));

    console.log("This is the Local Storage after deleting item:");
    console.log(localStorage.getItem('storedItems'));

    updateTotalCartPrice()
}

// function saveToLocalStorage(){
//     //cart is already an array
//     const itemArrayString = JSON.stringify(cart);

//     localStorage.setItem("storedItems", itemArrayString);

//     console.log("this is the Local Storage after saving:");
//     console.log(localStorage.getItem("storedItems"));
// }

function retrieveFromLocalStorage(){
    const itemArrayString = localStorage.getItem('storedItems');
    const itemArray = JSON.parse(itemArrayString);
    for (const itemData of itemArray) {
        const item = createNewRollItem(itemData.type, itemData.glazing, itemData.size, itemData.basePrice);
        createElement(item);
    }
}

//Resources: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
