//if (document.readyState == 'loading') {
//    document.addEventListener('DOMContentLoaded', ready)
//} else {
//    ready()
//}
//
//function ready() {
//    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
//    for (var i = 0; i < removeCartItemButtons.length; i++) {
//        var button = removeCartItemButtons[i]
//        button.addEventListener('click', removeCartItem)
//    }
//
//    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
//    for (var i = 0; i < quantityInputs.length; i++) {
//        var input = quantityInputs[i]
//        input.addEventListener('change', quantityChanged)
//    }
//
//    var addToCartButtons = document.getElementsByClassName('btn-primary')
//    for (var i = 0; i < addToCartButtons.length; i++) {
//        var button = addToCartButtons[i]
//        button.addEventListener('click', addToCartClicked)
//    }
//
//    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
//}
//
//function purchaseClicked() {
//    alert('Thank you for your purchase')
//    var cartItems = document.getElementsByClassName('cart-items')[0]
//    while (cartItems.hasChildNodes()) {
//        cartItems.removeChild(cartItems.firstChild)
//    }
//    updateCartTotal()
//}
//
//function removeCartItem(event) {
//    var buttonClicked = event.target
//    buttonClicked.parentElement.parentElement.remove()
//    updateCartTotal()
//}
//
//function quantityChanged(event) {
//    var input = event.target
//    if (isNaN(input.value) || input.value <= 0) {
//        input.value = 1
//    }
//    updateCartTotal()
//}
//
//function addToCartClicked(event) {
//    var button = event.target
//    var shopItem = button.parentElement.parentElement
//    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
//    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
//    addItemToCart(price, imageSrc)
//    updateCartTotal()
//    console.log
//}
//
//function addItemToCart(price, imageSrc) {
//    var cartRow = document.createElement('div')
//    cartRow.classList.add('cart-row')
//    var cartItems = document.getElementsByClassName('cart-items')[0]
////    for (var i = 0; i < cartItemNames.length; i++) {
////        if (cartItemNames[i].innerText == title) {
////            alert('This item is already added to the cart')
////            return
////        }
////    }
//    var cartRowContents = `
//        
//           <div class="cart-item cart-column">
//                        <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
//                    </div>
//                    <span class="cart-price cart-column">${price}</span>
//                    <div class="cart-quantity cart-column">
//                        <input class="cart-quantity-input" type="number" value="1">
//                        <button class="btn btn-danger" type="button">REMOVE</button>
//                    </div>`
//    
//    cartRow.innerHTML = cartRowContents
//    cartItems.append(cartRow)
//    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
//    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
//}
//
//function updateCartTotal() {
//    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
//    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
//    var total = 0
//    for (var i = 0; i < cartRows.length; i++) {
//        var cartRow = cartRows[i]
//        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
//        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
//        var price = parseFloat(priceElement.innerText.replace('$', ''))
//        var quantity = quantityElement.value
//        total = total + (price * quantity)
//    }
//    total = Math.round(total * 100) / 100
//    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
//}
//
//if (document.readyState === 'loading') {
//    document.addEventListener('DOMContentLoaded', ready);
//} else {
//    ready();
//}

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger');
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i];
        button.addEventListener('click', removeCartItem);
    }

    
    var quantityInputs = document.getElementsByClassName('cart-quantity-input');
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }

    var addToCartButtons = document.getElementsByClassName('btn-primary');
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i];
        button.addEventListener('click', addToCartClicked);
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked);
    
}

function removeCartItem(event) {
  const buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();
}

function quantityChanged(event) {
  const input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
}

function addToCartClicked(event) {
  alert('Item has been added to cart');
  const button = event.target;
  const shopItem = button.parentElement.parentElement;
  const price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
  const imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src;
  addItemToCart(price, imageSrc);
}

function addItemToCart(price, imageSrc) {
  const cartRow = document.createElement('div');
  cartRow.classList.add('cart-row');
  const cartItems = document.getElementsByClassName('cart-items')[0];
//  const cartItemNames = cartItems.getElementsByClassName('cart-item-title');
//  for (let i = 0; i < cartItemNames.length; i++) {
//    if (cartItemNames[i].innerText === title) {
//      alert('This item is already added to the cart');
//      return;
//    }
//  }
  const cartRowContents = `
    <div class="cart-item cart-column">
        <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
    </div>
    <span class="cart-price cart-column">${price}</span>
    <div class="cart-quantity cart-column">
        <input class="cart-quantity-input" type="number" value="1">
        <button class="btn btn-danger" type="button">REMOVE</button>
    </div>`;
  cartRow.innerHTML = cartRowContents;
  cartItems.append(cartRow);
  cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem);
  cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged);
}

   function purchaseClicked() {
    alert('Thank you for your purchase');
    
}    
    
function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0];
    var cartRows = cartItemContainer.getElementsByClassName('cart-row') `debugger`;
    var total = 0;

    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName('cart-price')[0];
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
        var price = parseFloat(priceElement.innerText.replace('$', ''));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
    }

    total = Math.round(total * 100) / 100;
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total;
}

