function Book(title, author, pages, read) {
    this.author;
    this.title;
    this.pages;
    this.read;
}

let myLibrary = [];
let book1 = new Book(
    "Lord of the onion rings",
    "Burger King",
    49,
    false);
let book2 = new Book(
    "How to kill a mean pigeon",
    "Terrance Hill",
    143,
    false);
let book3 = new Book(
    "The young men of the backlines",
    "Beatrice Alberkurkley",
    403,
    false);
let book4 = new Book(
    "My life as an astral trash lover",
    "Stella",
    203,
    false);

myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);
myLibrary.push(book4);

function addBookToLibrary() {

}