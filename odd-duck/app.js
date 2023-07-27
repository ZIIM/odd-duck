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

new Product('bag', 'img/bag.jpg');
new Product('banana', 'img/banana.jpg');
new Product('bathroom', 'img/bathroom.jpg');
new Product('boots', 'img/boots.jpg');
new Product('breakfast', 'img/breakfast.jpg');
new Product('bubblegum', 'img/bubblegum.jpg');
new Product('chair', 'img/chair.jpg');
new Product('cthulu', 'img/cthulu.jpg');
new Product('dog-duck', 'img/dog-duck.jpg');
new Product('dragon', 'img/dragon.jpg');
new Product('pen', 'img/pen.jpg');
new Product('pet-sweep', 'img/pen-sweep.jpg');
new Product('scissors', 'img/scissors.jpg');
new Product('shark', 'img/shark.jpg');
new Product('sweep', 'img/sweep.png');
new Product('tauntaun', 'img/tauntaun.jpg');
new Product('unicorn', 'img/unicorn.jpg');
new Product('water-can', 'img/water-can.jpg');
new Product('wine-glass', 'img/wine-glass.jpg');


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