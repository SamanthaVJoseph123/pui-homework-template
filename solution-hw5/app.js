let glazingElement = document.querySelector('#glaze-select');
let sizeElement = document.querySelector('#pack-select');

let baseBunPrice = 2.49;
// let glazingPrice = 0;
// let packSizePrice = 0;

// let constValue = 0;
let totalPrice = 0;
let glazeValue = 0;
let sizeValue = 1;

let glazingOptions = [
    {
        glazeName: 'Keep Original',
        glazePrice: 0,
    },
    {
        glazeName: "Sugar Milk",
        glazePrice: 0,
    },
    {
        glazeName: "Vanilla Milk",
        glazePrice: 0.5,
    },
    {
        glazeName: "Double Chocolate",
        glazePrice: 1.50,
    },
  ];

  let sizeOptions = [
    {
        sizeName: '1',
        sizePrice: 1,
    },
    {
        sizeName: "3",
        sizePrice: 3,
    },
    {
        sizeName: "6",
        sizePrice: 5,
    },
    {
        sizeName: "12",
        sizePrice: 10,
    },
  ];

// Glaze Options
for (let i = 0; i < glazingOptions.length; i++) {
    let option = document.createElement('option');
    option.text = glazingOptions[i].glazeName;
    option.value = glazingOptions[i].glazePrice;
    glazingElement.add(option);
}

// Size Options
for (let i = 0; i < sizeOptions.length; i++) {
    let option = document.createElement('option');
    option.text = sizeOptions[i].sizeName;
    option.value = sizeOptions[i].sizePrice;
    sizeElement.add(option);
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
