(function() {
    router('login');
    window.addEventListener("hashchange", function() {
        console.log('hash changed='+location.hash.slice(1));
        if (location.hash.slice(1)!='cart' && location.hash.slice(1)!='login') {
            const loggeduser = document.getElementById('user') ? document.getElementById('user').value : location.hash.slice(1);
            getProducts(loggeduser);
        } else if ('cart' == location.hash.slice(1)) {
            router('cart');
            pay();
        } else {
            router('login');
        }

    });
})();

function getProducts(loggeduser) {

    if ('login' != location.hash.slice(1) && localStorage.getItem("users")) {
        const users = JSON.parse(localStorage.getItem("users"));
        const products = JSON.parse(localStorage.getItem("products"));

        for (let i = 0; i < users.length; i++) {
            if (users[i].user == loggeduser) {
                console.log('logged in pass ' + loggeduser);
                if (loggeduser == 'buyer') {
                    let buyerProducts = [];
                    //below logic can be done in high order fucntion filter
                    for (let i = 0; i < products.length; i++) {
                        if (products[i].added) {
                            buyerProducts.push(products[i]);
                        }
                    }
                    router(loggeduser, buyerProducts);
                } else if (loggeduser == 'seller' || loggeduser == 'admin') {
                    router(loggeduser, products);
                }

            }
        }
    } else if ('cart' == location.hash.slice(1)) {
        router('cart');
        pay();
    } else {
        router('login');
    }

}

function UpdateProducts(loggeduser) {
    if (!localStorage.getItem("products")) {
        localStorage.setItem('products', JSON.stringify(products));
    }

    getProducts(loggeduser);

}

function fetchProduct() {
    let users = [{
            'user': 'admin'
        }, {
            'user': 'buyer'
        }, {
            'user': 'seller'
        }],
        products = [{
                'name': 'product1',
                'added': true,
                'price': '1000'
            }, {
                'name': 'product2',
                'added': true,
                'price': '1000'
            }, {
                'name': 'product3',
                'added': true,
                'price': '2000'
            }, {
                'name': 'product4',
                'added': true,
                'price': '3000'
            }, {
                'name': 'product5',
                'added': true,
                'price': '6000'
            }, {
                'name': 'product6',
                'added': false,
                'price': '2000'
            }, {
                'name': 'product7',
                'added': false,
                'price': '7000'
            }, {
                'name': 'product8',
                'added': false,
                'price': '9900'
            }, {
                'name': 'product9',
                'added': false,
                'price': '1340'
            }, {
                'name': 'product10',
                'added': false,
                'price': '1000'
            },

        ]
    if (!localStorage.getItem("products")) {
        localStorage.setItem('products', JSON.stringify(products));
    }
    localStorage.setItem('users', JSON.stringify(users));
    if (document.getElementById('user')) {
        const loggeduser = document.getElementById('user').value;
        if (loggeduser == location.hash.slice(1)) {
            getProducts(loggeduser);
        } else {
            location.href = '#' + loggeduser;
        }

    }

}


function pay() {
    let productAmount=localStorage.getItem('productAmount');

    paypal.Button.render({

        env: 'sandbox', // sandbox | production

        // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create
        client: {
            sandbox: 'AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R',
            production: '<insert production client id>'
        },

        // Show the buyer a 'Pay Now' button in the checkout flow
        commit: true,

        // payment() is called when the button is clicked
        payment: function(data, actions) {

            // Make a call to the REST api to create the payment
            return actions.payment.create({
                payment: {
                    transactions: [{
                        amount: {
                            total: productAmount,
                            currency: 'EUR'
                        }
                    }]
                }
            });
        },

        // onAuthorize() is called when the buyer approves the payment
        onAuthorize: function(data, actions) {

            // Make a call to the REST api to execute the payment
            return actions.payment.execute().then(function() {
                window.alert('Payment Complete!');
            });
        }

    }, '#paypal-button-container');

}