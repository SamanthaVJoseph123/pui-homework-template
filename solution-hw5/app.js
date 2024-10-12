let glazingElement = document.querySelector('#glaze-select');
let sizeElement = document.querySelector('#pack-select');

let baseBunPrice = 2.49;
// let glazingPrice = 0;
// let packSizePrice = 0;

// let constValue = 0;
let totalPrice = 0;
let glazeValue = 0;
let sizeValue = 1;

let glazingOptions = {
    "Keep Original": 0,
    "Sugar Milk": 0,
    "Vanilla Milk": 0.5,
    "Double Chocolate": 1.5
};

let packSizeOptions = {
    "1": 1,
    "3": 3,
    "6": 5,
    "12": 10
};

// Glaze Options
if (glazingElement && sizeElement){
    for (let glaze in glazingOptions) {
        let option = document.createElement('option');
        option.text = glaze;
        option.value = glazingOptions[glaze];
        glazingElement.add(option);
    }

    // Size Options
    for (let size in packSizeOptions) {
        let option = document.createElement('option');
        option.text = size;
        option.value = packSizeOptions[size];
        sizeElement.add(option);
    }
}

function glazingChange(element){
    glazeValue = parseFloat(element.value);
    updateTotalPrice(glazeValue, sizeValue);
}

function sizeChange(element){
    sizeValue = parseFloat(element.value);
    updateTotalPrice(glazeValue, sizeValue);
}

function updateTotalPrice(glazeValue, sizeValue) {
    ItemPrice = (baseBunPrice + glazeValue) * sizeValue;
    document.querySelector('#total-price').innerText = "$" + ItemPrice.toFixed(2);
}
