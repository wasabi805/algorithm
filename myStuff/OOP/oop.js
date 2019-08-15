console.log('hello')



// const book1 = {
//     title: "Book One",
//     author: "John Doe",
//     year: 2013,
//     getSummary: function () {
//         return `${this.title} was written by ${this.author} in ${this.year}.`
//     }
// };
//
//
// console.log(book1.getSummary());
//
// const book2 = {
//     title: "Book Two",
//     author: "Tim Ocampo",
//     year: 2018,
//     getSummary: function () {
//         return `${this.title} was written by ${this.author} in ${this.year}.`
//     }
// };
//
// console.log(Object.values(book2));


//LETS NOT DO THIS TWICE, LETS MAKE Constructors
//  simply a function

//Constructor
function Book( title, author, year ) {
    console.log('Book instantiated');
    this.title = title;
    this.author = author;
    this.year = year;
}

//prototypes : put you methods in here instead of the constructor
//THESE come in handy when you dont want every book to give summary, just the ones you call the method on
Book.prototype.getSummary= function () {
    return `${this.title} was written by ${this.author} in ${this.year}.`;
};

//call new instance of book
const book1 = new Book('X-Men' , 'John Romita Jr', '1987');

console.log(book1.getSummary());


function Magazine(title, author, year , month) {
    Book.call(this, title , author, year);
    this.month = month
}

//NOTE : Here is how to inherit prototypes
Magazine.prototype = Object.create(Book.prototype);


magazine1 = new Magazine('WIRED' , 'Tony Stark' , '2019' , 'Jan');
magazine2 = new Magazine('House of M', 'Brian Micheal Bendis' , 2011)
console.log(magazine1);

let houseOfM = magazine2.getSummary();

console.log(houseOfM);
