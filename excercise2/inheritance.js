/* 1. Using prototype */

var apartments = function(name) {
    this.aptname = name;
    return this;
}

apartments.prototype.getApartName = function() {
    return this.aptname;
}

var flat = new apartments("funapartment");

console.log('using prototype: '+flat.getApartName());


/* 2. using Object create method*/

var name = {
    fname: 'Abhijeet'
}

var person = Object.create(name);

console.log('using Object.create: '+person.fname);

/* 3. ES6 */

/* ES6 has clasess and we can use keyword extend to implement inheritance */

class ApartmentsES6 {

    constructor(name) {
        this.name = name;
    }
    getApartName(){
    	return this.name;
    }

    getApartType(){
    	console.log('method of parent is called');
    	return '2bedroom';
    }

}

let apartmentsES6Child=new ApartmentsES6('funapartmentES6');
console.log('Using classes='+apartmentsES6Child.getApartName());

/*4. ES6 using extend keyword*/
class ApartmentsES6ChildExtend extends ApartmentsES6{
	constructor(name){
		super(name);
	}

	getApartName(){
    	return 'It is child method '+super.getApartName();
    }

}

let apartmentsES6ChildExtend=new ApartmentsES6ChildExtend('funapartmentES6');
console.log('using extends keyword: '+apartmentsES6ChildExtend.getApartName());
console.log('using extends keyword: '+apartmentsES6ChildExtend.getApartType());

