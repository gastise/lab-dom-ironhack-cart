// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  let price = product.querySelector(".price span").innerHTML;

  let quantity = product.querySelector(".quantity input").value;

  let subtotalPrice = price * quantity;

  product.querySelector(".subtotal span").innerHTML = subtotalPrice;

  return subtotalPrice;
}

function calculateAll() {
  // ITERATION 2
  let singleProduct = document.getElementsByClassName('product');
  let sum = 0;
  for (let i =0; i<singleProduct.length; i++){
    sum += updateSubtotal(singleProduct[i]);
  }
  // ITERATION 3
  document.getElementById('vt').innerHTML = sum;  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
});
