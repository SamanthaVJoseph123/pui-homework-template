let baseBunPrice = 2.49;


function changePrice() {
    // create two variables to store prices: glazingPrice and packSizePrice
    // use querySelector() to access the HTML element by the ID attribute
    //.value is retrieving the value from the selected <option> which has the ID attribute glaze-select
    const glazingPrice = parseFloat(document.querySelector('#glaze-select').value);
    const packSizePrice = parseFloat(document.querySelector('#pack-select').value);


    // total price calculation
    const totalPrice = (baseBunPrice + glazingPrice) * packSizePrice;


    document.querySelector('#total-price').innerText = "$" + totalPrice.toFixed(2);
    // use querySelector() again to access the HTML element by the ID attribute
    // .innerText is setting the value inside the selected HTML element
    //.toFixed() function ensures the number is rounded TWO digits after the decimal (from resource below)
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
}


document.querySelector('#glaze-select').addEventListener('change',changePrice);
document.querySelector('#pack-select').addEventListener('change',changePrice);
// Notes from Office Hours:
// Telling the program to listen for a "change", and when this happens, run this function called changePrice
// Event type: change. Event handler: changePrice.
// document.querySelector('#pack-select') specifies WHERE the function to apply itself




// Ask TA: do we need to include a loop anywhere?
// What does it mean by: Do not hardcode them into the HTML
// explain starter code provided to us
// Ask if we can do it this method

