let router = function(route,products){
    route = route || location.hash.slice(1) || 'login';

    var temp = route.split('?');
    var callFn = temp[0] || false;

    //fire away...
    if(callFn){
        controllers[callFn](products);
    }
};