function Book(title, author, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

Book.prototype.changeReadStatus = function() {
    this.read = this.read == "no" ? "no" : "yes";
}

let myLibrary = [];
const book1 = new Book(
    "Lord of the onion rings",
    "Burger King",
    49,
    "no");
let book2 = new Book(
    "How to kill a mean pigeon",
    "Terrance Hill",
    143,
    "no");
let book3 = new Book(
    "The young men of the backlines",
    "Beatrice Alberkurkley",
    403,
    "no");
let book4 = new Book(
    "My life as an astral trash lover",
    "Stella",
    203,
    "no");

myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);
myLibrary.push(book4);

function populateBookTable() {
    for(let book of myLibrary) {
        let {title, author, pages, read} = book;
        let book_attributes = [title, author, pages, read];
        createNewBookEntry(book_attributes);     
    }
}

function createNewBookEntry(attributes) {
    const book_table = document.querySelector("table");
    const new_book_row = document.createElement("tr");
    for(let attribute of attributes) {
        const new_cell = document.createElement("td")
        new_cell.textContent = attribute;
        new_book_row.appendChild(new_cell);
    }
    const new_cell = document.createElement("td")
    new_cell.classList.add("last-row-cell");
    const change_read_status_btn = document.createElement("button");
    change_read_status_btn.classList.add("book-option-btn");
    change_read_status_btn.textContent = "Change Read Status";
    const delete_book_btn = document.createElement("button");
    delete_book_btn.classList.add("book-option-btn");
    delete_book_btn.textContent = "Delete";
    delete_book_btn.style.backgroundColor = "red";
    delete_book_btn.style.color = "white";
    new_cell.appendChild(change_read_status_btn);
    new_cell.appendChild(delete_book_btn);
    new_book_row.appendChild(new_cell);
    book_table.appendChild(new_book_row);
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
    read = read ? "yes" : "no";
    const new_row = createNewBookEntry([title, author, pages, read]);
    book_table.appendChild(new_row);
    dialog.close();
})

populateBookTable();