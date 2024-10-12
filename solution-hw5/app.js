// selects the dropdown elements for glazing and size
// holds a reference to the <select> elements
let glazingElement = document.querySelector('#glaze-select');
let sizeElement = document.querySelector('#pack-select');

// setting default values
let baseBunPrice = 2.49;
let totalPrice = 0;
let glazeValue = 0;
let sizeValue = 1;

//objects defining prices of glazes and sizes
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

//populating dropdowns
for (let glaze in glazingOptions) {
    let option = document.createElement('option');
    //creating a new option element on ever iteration
    option.text = glaze;
    option.value = glazingOptions[glaze];
    //setting the text and value of each option
    glazingElement.add(option);
    //adding option to glazingElement
}

//similar process as for loop above
for (let size in packSizeOptions) {
    let option = document.createElement('option');
    option.text = size;
    option.value = packSizeOptions[size];
    sizeElement.add(option);
}

//parseFloat converts given string to number
//calls updateTotalPrice
function glazingChange(element){
    glazeValue = parseFloat(element.value);
    updateTotalPrice(glazeValue, sizeValue);
}

//similar process as glazingChange
function sizeChange(element){
    sizeValue = parseFloat(element.value);
    updateTotalPrice(glazeValue, sizeValue);
}

//function calculates new ItemPrice and inputs into page
function updateTotalPrice(glazeValue, sizeValue) {
    ItemPrice = (baseBunPrice + glazeValue) * sizeValue;
    document.querySelector('#total-price').innerText = "$" + ItemPrice.toFixed(2);
}
