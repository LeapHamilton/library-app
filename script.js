let myLibrary = [];

function Book (title,author,pages,read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function (){
      return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
     }
  }

function addBookToLibrary(bookToBeAdded) {
  myLibrary.push(bookToBeAdded);
}


const book1 = new Book ("Thud", "Terry Pratchett", "300", "read it");
const book2 = new Book ("The Hobbit", "J.R.R. Tolkein", "250", "not read");
const book3 = new Book ("How to Sell the Stars", "Richard J. Dowling", "300", "read it" );
addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

const theButton = document.getElementById("btn");


  theButton.addEventListener("click", function () {
  
  let form = document.createElement("form");
  form.setAttribute("method", "post");
  form.setAttribute("action", "submit.php");

  let newline = document.createElement("p");

  let newTitle = document.createElement("input");
  newTitle.setAttribute("type", "text");
  newTitle.setAttribute("name", "title");
  newTitle.setAttribute("placeholder", "Title");

  let newAuthor = document.createElement("input");
  newAuthor.setAttribute("type", "text");
  newAuthor.setAttribute("name", "author");
  newAuthor.setAttribute("placeholder", "Author");

  let numberOfPages = document.createElement("input");
  numberOfPages.setAttribute("type", "number");
  numberOfPages.setAttribute("name", "numberOfPages");
  numberOfPages.setAttribute("placeholder", "2");

  let readIt = document.createElement("input");
  readIt.setAttribute("type", "radio");

  let submitButton = document.createElement("input");
submitButton.setAttribute("type", "submit");
submitButton.setAttribute("value", "Submit");



  
  form.appendChild(newTitle);
  form.appendChild(newline);
  form.appendChild(newAuthor);
  form.appendChild(newline);
  form.appendChild(numberOfPages);
  form.appendChild(newline);
  form.appendChild(readIt);
  form.appendChild(newline);
  form.appendChild(submitButton);




  document.getElementsByClassName("container")[0].appendChild(form);
  
    /*let addBookTitle = prompt ("What's the title?"); 
  let addBookAuthor = prompt ("Who's the author?")
  let addBookPages = prompt ("How many pages does the book have?")
  let addBookFinished = prompt ("Have you read this book?")
const addBook = new Book (addBookTitle, addBookAuthor, addBookPages, "read it");


  */
  const addBook = new Book (newTitle, newAuthor, numberOfPages, "read it").value;
  

  for (let book of myLibrary) {
    table.deleteRow(1);

  }

  addBookToLibrary(addBook);

  drawTable();
  });



function drawTable() {

let table = document.getElementById('table');
for (let book of myLibrary) {
	let tr = document.createElement('tr');
  
  let td1 = document.createElement('td');
	td1.textContent = book.title;
	tr.appendChild(td1);

  let td2 = document.createElement('td');
	td2.textContent = book.author;
	tr.appendChild(td2);

  let td3 = document.createElement('td');
	td3.textContent = book.pages;
	tr.appendChild(td3);

  let td4 = document.createElement('td');
  td4.textContent = book.read;
  tr.appendChild(td4);

  table.appendChild(tr);
}
};


drawTable();
