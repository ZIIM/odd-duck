'use strict';

const products = [];
const image1Element = document.getElementById('image1');
const image2Element = document.getElementById('image2');
const image3Element = document.getElementById('image3');
const productContainer = document.getElementById('product-container');
const resultButton = document.getElementById('resultButton');
let rounds = 25;

function Product(name, src) {
  this.name = name;
  this.src = src;
  this.timesClicked = 0;
  this.timesSeen = 0;
  products.push(this);
}

new Product('bag', 'bag.jpg');
new Product('banana', 'banana.jpg');
new Product('bathroom', 'bathroom.jpg');
new Product('boots', 'boots.jpg');
new Product('breakfast', 'breakfast.jpg');
new Product('bubblegum', 'bubblegum.jpg');
new Product('chair', 'chair.jpg');
new Product('cthulu', 'cthulu.jpg');
new Product('dog-duck', 'dog-duck.jpg');
new Product('dragon', 'dragon.jpg');
new Product('pen', 'pen.jpg');
new Product('pet-sweep', 'pen-sweep.jpg');
new Product('scissors', 'scissors.jpg');
new Product('shark', 'shark.jpg');
new Product('sweep', 'sweep.png');
new Product('tauntaun', 'tauntaun.jpg');
new Product('unicorn', 'unicorn.jpg');
new Product('water-can', 'water-can.jpg');
new Product('wine-glass', 'wine-glass.jpg');


displayRandomProducts();
console.log(products);

function displayRandomProducts() {
  let randomProductIndex1 = Math.floor(Math.random() * products.length);
  let randomProductIndex2 = Math.floor(Math.random() * products.length);
  let randomProductIndex3 = Math.floor(Math.random() * products.length);

  while(randomProductIndex1 === randomProductIndex2) {
    randomProductIndex2 = Math.floor(Math.random() * products.length);
  }
//while(image1Element.alt === products[randomProductIndex1].name) test

  image1Element.src = products[randomProductIndex1].src;
  image1Element.alt = products[randomProductIndex1].name;
  image2Element.src = products[randomProductIndex2].src;
  image2Element.alt = products[randomProductIndex2].name;
  image3Element.src = products[randomProductIndex3].src;
  image3Element.alt = products[randomProductIndex3].name;
  products[randomProductIndex1].timesSeen++;
  products[randomProductIndex2].timesSeen++;
  products[randomProductIndex3].timesSeen++;
}

// code that runs when a user has voted 
function handleProductClicks(event) {
  // console.log(event.target.alt); test
    if (event.target === productContainer) {
        alert ('Please click on a Product');
    return;
    }

    if (rounds > 0){
  for (let i = 0; i < products.length; i++) {
    if (products[i].name === event.target.alt) {
      products[i].timesClicked++;
      break;
    };
  }
  console.log(products);
  displayRandomProducts();
  rounds--;
} else {
    alert('No more rounds')
    productContainer.removeEventListener('click',handleProductClicks);
}
}

productContainer.addEventListener('click', handleProductClicks);
productContainer.removeEventListener('click', handleProductClicks);