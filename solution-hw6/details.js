const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll')
const selectedRoll = rolls[rollType];
console.log(rollType)
let cart = [];

if (rollType != null){
    let baseBunPrice = selectedRoll.basePrice;

    const rollName = `${rollType} Cinnamon Roll`
    const rollImage = `../assets/products/${selectedRoll.imageFile}`;
    // const rollPrice = selectedRoll.basePrice;

    document.querySelector('.center-text-header').innerText = rollName;
    document.querySelector('.item-page-box').src = rollImage;
    document.querySelector('#total-price').innerText = `$${baseBunPrice.toFixed(2)}`;
    // rollPriceElement.innerText = "$" + rollPrice;
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

const rollSet = new Set();

function addNewRollItem(rollType, rollGlazing, packSize, basePrice) {
    const rollItem = new Roll(rollType, rollGlazing, packSize, basePrice);
    rollSet.add(rollItem);
    return rollItem;
}

function createElement(rollItem) {
    const template = document.querySelector('#cart-item-template');
    const clone = template.content.cloneNode(true);
    
    rollItem.element = clone.querySelector('#item-list');
    
    const btnDelete = rollItem.element.querySelector('.item-delete');
    console.log(btnDelete)
    btnDelete.addEventListener('click', () => {
        deleteRollItem(rollItem);
    });
    
    const rollItemElement = document.querySelector('#cart-item-list');
    rollItemElement.prepend(rollItem.element);
    updateElement(rollItem);
}

// function addRolltoCart(){
//     // let glazeType = glazingElement.text;
//     // let sizeType = sizeElement.text;
//     let glazeType = glazingElement.options[glazingElement.selectedIndex].text;
//     let sizeType = sizeElement.options[sizeElement.selectedIndex].text;

//     addedRoll = new Roll(rollType,glazeType,sizeType,baseBunPrice);
//     cart.push(addedRoll);
//     console.log(cart);
// }

function updateElement(rollItem) {
    // rollItemName.innerText = rollItem.type;
    // rollItemGlazing.innerText = rollItem.glazing;
    // rollItemSize.innerText = rollItem.size;
    // rollItemPrice.innerText = rollItem.basePrice;

    rollItem.element.querySelector('.cart-page-box').src = `../assets/products/${rollItem.type.toLowerCase()}-cinnamon-roll.jpg`;
    rollItem.element.querySelector('.item-name').innerText = `${rollItem.type} Cinnamon Roll`;
    rollItem.element.querySelector('.glazing').innerText = `Glazing: ${rollItem.glazing}`;
    rollItem.element.querySelector('.pack-size').innerText = `Pack Size: ${rollItem.size}`;
    rollItem.element.querySelector('.price').innerText = `$${rollItem.itemPrice}`;
}

function updateTotalCartPrice() {
    let totalCartPrice = 0;
    for (const roll of rollSet){
        totalCartPrice += parseFloat(roll.itemPrice);
    }
    document.querySelector('.total-cart-price').innerText = `$${totalCartPrice.toFixed(2)}`;
}

function deleteRollItem(rollItem) {
    rollItem.element.remove();
    rollSet.delete(rollItem);
    updateTotalCartPrice();
}


addNewRollItem(
    "Original", 
    "Sugar Milk", 
    "1", 
    "2.49"
);

addNewRollItem(
    "Walnut", 
    "Vanilla Milk", 
    "12", 
    "3.49"
);

addNewRollItem(
    "Raisin", 
    "Sugar Milk", 
    "3", 
    "2.99"
);

addNewRollItem(
    "Apple", 
    "Original", 
    "3", 
    "3.49"
);


for (const rollItem of rollSet) {
    console.log(rollItem);
    createElement(rollItem);
  }

  updateTotalCartPrice()
