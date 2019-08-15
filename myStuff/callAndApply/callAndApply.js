
//  CALL
function Product(name, price) {
    this.name = name;
    this.price = price;
}

//  Note: call() takes arguments as string
function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
}

console.log(new Food('cheese', 5).name);
// expected output: "cheese"

console.log(new Food('Ham', 7).name);


//  Apply

var person = {
    fullName: function(city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
};

var person1 = {
    firstName:"John",
    lastName: "Doe"
};

console.log(
    person.fullName.apply(
        person1, ["Oslo", "Norway"]
    ));