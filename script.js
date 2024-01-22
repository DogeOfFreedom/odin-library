function Book(title, author, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

let myLibrary = [];
const book1 = new Book(
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

function populateBookTable() {
    const book_table = document.querySelector("table");

    for(let book of myLibrary) {
        let {title, author, pages, read} = book;
        let book_attributes = [title, author, pages, read];
        const new_row = createNewBookEntry(book_attributes);
        book_table.appendChild(new_row);        
    }
}

function createNewBookEntry(attributes) {
    const new_row = document.createElement("tr");
    for(let attribute of attributes) {
        const new_cell = document.createElement("td")
        new_cell.textContent = attribute;
        new_row.appendChild(new_cell);
    }
    return new_row;
}


const dialog = document.querySelector("dialog");
const add_book_btn = document.querySelector(".add-book-btn");
const cancel_btn = document.querySelector(".cancel-btn");
add_book_btn.addEventListener("click", () => {
    dialog.showModal();
});
cancel_btn.addEventListener("click", () => {
    dialog.close();
})

const submit_btn = document.querySelector(".submit-btn");
submit_btn.addEventListener("click", (e) => {
    e.preventDefault();
    let title = document.querySelector("input[name='title']").value;
    let author = document.querySelector("input[name='author']").value;
    let pages = document.querySelector("input[name='pages']").value;
    let read = document.querySelector("select[name='read']").value;
    const book_table = document.querySelector("table");
    const new_row = createNewBookEntry([title, author, pages, read]);
    book_table.appendChild(new_row);
    dialog.close();
})

populateBookTable();