var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  const cart = getCart();
  cart.push({
      itemName: item,
      itemPrice: Math.floor(Math.random() * (100 - 1) + 1)
    });
  
  return `${item} has been added to your cart.`;
}

function viewCart() {
  let cartContent = 'In your cart, you have ';
  const cart = getCart();
  
  if (cart.length === 0) {
    return 'Your shopping cart is empty.';
  } else {
    if (cart.length === 1) {
      return cartContent += `${cart[i].itemName} at $${cart[i].itemPrice}.`;
    }
    
    for (let i = 0; i < cart.length; i++) {
      if (i === cart.length - 1) {
        cartContent += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`;
      } else {
        cartContent += `${cart[i].itemName} at $${cart[i].itemPrice}, `;
      }
    }
    return cartContent;
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
