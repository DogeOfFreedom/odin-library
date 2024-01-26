class Book {
    constructor(title, author, pages, read) {
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.read = read;
    }

    changeReadStatus() {
        this.read = this.read == "no" ? "no" : "yes";
    }
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

let row_counter = 1;
function createNewBookEntry(attributes) {
    let row_identifier = "row" + row_counter; 
    const book_table = document.querySelector("table");
    const new_book_row = document.createElement("tr");
    new_book_row.id = row_identifier;
    
    for(let i=0; i<attributes.length-1; i++) {
        const new_cell = document.createElement("td");
        new_cell.textContent = attributes[i];
        new_book_row.appendChild(new_cell);
    }
    let read = attributes[3];
    const read_status_cell = document.createElement("td");
    const change_read_status_btn = document.createElement("button");
    change_read_status_btn.classList.add("book-option-btn");
    change_read_status_btn.textContent = read;
    change_read_status_btn.onclick = () => {
        let new_status = change_read_status_btn.textContent == "yes" ? "no" : "yes";
        change_read_status_btn.textContent = new_status;
    }

    read_status_cell.appendChild(change_read_status_btn);
    new_book_row.appendChild(read_status_cell);
    
    const new_cell = document.createElement("td")
    new_cell.classList.add("last-row-cell");
    const delete_book_btn = document.createElement("button");
    delete_book_btn.classList.add("book-option-btn", "delete-book-btn", row_counter);
    delete_book_btn.onclick = () => {
        const row_to_remove = document.querySelector("#" + row_identifier);
        book_table.removeChild(row_to_remove);
    }
    delete_book_btn.textContent = "Delete";
    delete_book_btn.style.backgroundColor = "red";
    delete_book_btn.style.color = "white";

    new_cell.appendChild(delete_book_btn);
    new_book_row.appendChild(new_cell);
    book_table.appendChild(new_book_row);
    row_counter++;
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
    createNewBookEntry([title, author, pages, read]);
    dialog.close();
    
    // Reset form
    const title_field = document.querySelector("input[name='title']")
    const author_field = document.querySelector("input[name='author']")
    const pages_field = document.querySelector("input[name='pages']")
    const read_status = document.querySelector("select[name='read']")
    title_field.value= "";
    author_field.value = "";
    pages_field.value = "";
    read_status.value = "yes";
    console.log("cleaned up");
})

populateBookTable();