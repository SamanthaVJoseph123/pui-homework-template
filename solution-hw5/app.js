let glazingElement = document.querySelector('#glaze-select');
let sizeElement = document.querySelector('#pack-select');

let baseBunPrice = 2.49;
// let glazingPrice = 0;
// let packSizePrice = 0;

// let constValue = 0;
let totalPrice = 0;
let glazeValue = 0;
let sizeValue = 1;

// let glazingOptions = [
//     {
//         glazeName: 'Keep Original',
//         glazePrice: 0,
//     },
//     {
//         glazeName: "Sugar Milk",
//         glazePrice: 0,
//     },
//     {
//         glazeName: "Vanilla Milk",
//         glazePrice: 0.5,
//     },
//     {
//         glazeName: "Double Chocolate",
//         glazePrice: 1.50,
//     },
//   ];

let glazingOptions = {
    "Original": 0,
    "Sugar Milk": 0,
    "Vanilla Milk": 0.5,
    "Double Chocolate": 1.5
};

//   let sizeOptions = [
//     {
//         sizeName: '1',
//         sizePrice: 1,
//     },
//     {
//         sizeName: "3",
//         sizePrice: 3,
//     },
//     {
//         sizeName: "6",
//         sizePrice: 5,
//     },
//     {
//         sizeName: "12",
//         sizePrice: 10,
//     },
//   ];

let sizeOptions = {
    "1": 1,
    "3": 3,
    "6": 5,
    "12": 10
};

// Glaze Options
if (glazingElement != null && sizeElement != null){
    for (let glaze in glazingOptions) {
        let option = document.createElement('option');
        option.text = glaze;
        option.value = glazingOptions[glaze];
        glazingElement.add(option);
    }
    
    // Size Options
    for (let size in sizeOptions) {
        let option = document.createElement('option');
        option.text = size;
        option.value = sizeOptions[size];
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
    totalPrice = (baseBunPrice + glazeValue) * sizeValue;
    document.querySelector('#total-price').innerText = "$" + totalPrice.toFixed(2);
}