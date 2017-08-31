const views = {};

let takeAction = function(data, prodName,loggeduser) {

    let productlist = JSON.parse(localStorage.getItem("products"));
    for (let i = 0; i < productlist.length; i++) {
        if (prodName == productlist[i].name) {
            if (data == 'Add') {
                productlist[i].added = true;
                alert(prodName + ' is added');
            } else {
                productlist[i].added = false;
                alert(prodName + ' is removed');
            }

        }
    }
    localStorage.removeItem("products");
    localStorage.setItem('products', JSON.stringify(productlist));
    UpdateProducts(loggeduser);
}

function addAmountToCart(amount){
    localStorage.setItem('productAmount',amount);
    location.href='#cart';
}

function addItem(){
    alert('Functionality not available');
}

views.login = function() {
    let template = ` <h1>Login to Holland Product Basket</h1>
    <form class="url-form" onsubmit="event.preventDefault(); fetchProduct();">
        <label for="user">User:&nbsp;</label>
        <input id="user" class="text" type="text" name="user" placeholder="admin/buyer/seller"> &nbsp;&nbsp;
        <input class="submit" type="submit" name="submit" value="login">
    </form> `;

    return template;
}

views.buyer = function(buyerProducts) {
    let template = `
    <div><h1 class="view-title">Buyer Page</h1><a href="login.html#login">LogOff</a></div>
                    <ul class="buyer"> `;
    for (let i = 0; i < buyerProducts.length; i++) {
        template += `<li class="products-list">
                    <div class="product-item">
                    <h2>${buyerProducts[i].name}</h2>
              <p class="product-price">${buyerProducts[i].price}</p>
              <button onclick="addAmountToCart('${buyerProducts[i].price}')">Buy Now!</button>
          </div>
      </li>
      `
    }

    template += `</ul>`;

    return template;
}

views.seller = function(allProducts) {
    let template = `<div id="seller"><h1 class="view-title">Seller Page</h1><a href="login.html#login">LogOff</a>
                    <ul class="seller"> `;
    for (let i = 0; i < allProducts.length; i++) {
        let added = 'Add';
        if (allProducts[i].added) {
            added = 'Remove'
        }
        template += ` <li class="products-list">
          <div class="product-item">
              <h2>${allProducts[i].name}</h2>
              <p class="product-price">${allProducts[i].price}</p>
              <button  onclick="takeAction('${added}','${allProducts[i].name}','seller')" class="${added}-item">${added}</button>
          </div>
      </li>
      `
    }

    template += `</ul></div>`;

    return template;
}



views.admin = function(allProducts) {
    let templateProducts = `<div id="seller"><h1 class="view-title">ADMIN Page</h1><a href="#login">LogOff</a>
                     <h1>Manage products</h1>
                     <ul class="seller"> `;
    for (let i = 0; i < allProducts.length; i++) {
        let added = 'Add';
        if (allProducts[i].added) {
            added = 'Remove'
        }
        templateProducts += ` <li class="products-list">
          <div class="product-item">
              <h2>${allProducts[i].name}</h2>
              <p class="product-price">${allProducts[i].price}</p>
              <button  onclick="takeAction('${added}','${allProducts[i].name}','admin')" class="${added}-item">${added}</button>
          </div>
      </li>
      `
    }

    templateProducts += `</ul></div>`;

    let template = templateProducts + `
  
    <div class="admin">
            <div class="seller">
                <h1>Manage Sellers</h1>
                <ul class="seller-block">
                    <li class="products-list">
                        <div class="product-item">
                            <h2>Seller 1</h2>
                            <button onclick="addItem()" class="add-item">Remove</button>
                        </div>
                    </li>
                    <li class="products-list">
                        <div class="product-item">
                            <h2>Seller 2</h2>
                            <button onclick="addItem()" class="remove-item">Add</button>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="buyer">
                <h1>Manage Buyers</h1>
                <ul class="buyer-block">
                    <li class="products-list">
                        <div class="product-item">
                            <h2>Buyer 1</h2>
                            <button onclick="addItem()" class="add-item">Remove</button>
                        </div>
                    </li>
                    <li class="products-list">
                        <div class="product-item">
                            <h2>Buyer 2</h2>
                            <button onclick="addItem()" class="remove-item">Add</button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
  `;
    return template;
}

views.cart = function() {
    let template = `<h1 class="view-title">Pay using Paypal</h1 ><a href="login.html#login">LogOff</a>
                    <div id='paypal-button-container'></div>
                    `;
    
    return template;
}
