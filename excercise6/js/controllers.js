const controllers = {};


controllers.login = function() {
    console.log('login Controller is triggered');
    var template = views.login();
    render('app-root', template);
};

controllers.buyer = function(buyerProducts) {
    console.log('buyer Controller is triggered');
    var template = views.buyer(buyerProducts);
    render('app-root', template);
};

controllers.seller = function(products) {
    console.log('seller Controller is triggered');
    var template = views.seller(products);
    render('app-root', template);
};

controllers.admin = function(products) {
    console.log('admin Controller is triggered');
    var template = views.admin(products);
    render('app-root', template);
};

controllers.cart = function() {
    console.log('cart Controller is triggered');
    var template = views.cart();
    render('app-root', template);
};

var render = function(element_id, content) {
    document.getElementById(element_id).innerHTML = content;
};