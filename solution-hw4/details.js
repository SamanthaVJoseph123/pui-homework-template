// First, we get the query string from the URL. This is the list of parameters
// that begins with a question mark. (These are known as "search parameters")
const queryString = window.location.search;
 // Then, we use the query string to create a URLSearchParams object:
const params = new URLSearchParams(queryString);
// Finally, we can access the parameter we want using the "get" method:
const chosenRoll = params.get('roll')

// My code below
const rollData = rolls[chosenRoll];

// // Now, we will use the URL parameter to update our page.

// // Update the header text
// const headerElement = document.querySelector('#animal-header-text');
// headerElement.innerText = 'Here is the ' + chosenAnimal + '!'
const headerElement = document.querySelector ("#roll-header");
headerElement.innerText = chosenRoll + 'Cinnamon Roll!';

// // Update the image
// const animalImage = document.querySelector('#animal-img');
// animalImage.src = './assets/warhol-' + chosenAnimal + '.png';
// EXAMPLE: img src="../assets/logo/logo-01.svg" 
const rollImage = document.querySelector('#roll-img');
rollImage.src = '../assets/assets/products/${rollData.imageFile;}'
rollImage.alt = '${chosenRoll} cinnamon roll';

// Update this variable
// QUESTION: use Let here? Or const?
let baseBunPrice = rollData.baseBunPrice;
document.querySelector('#total-price').innterText = '$${baseBunPrice.toFixed(2)}';

// QUESTION: do we have to call these functions here?
glazingChange(document.querySelector('#glaze-select'));
sizeChange(document.querySelector('#pack-select'))
updateTotalPrice();

// newly added:

let cart = [];

function addToCart(){
    const selectedGlazing = document.querySelector('#glaze-select').value;
    const selectedPackSize = document.querySelector('#glaze-select').value;

    const cartItem = {
        rollType: rollType,
        glazing: selectedGlazing,
        packSize: selectedPackSize,
        basePrice: baseBunPrice,
        finalPrice: totalPrice
    };

    cart.push(cartItem)

    alert('${chosenRoll} Cinnamon Roll added to cart!')
}