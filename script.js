let myLibrary = [];
let hasUserReadTheBook;

document.body.addEventListener("click", function (event) {
  console.log(event.target.id);
  
  if (event.target.id == "radioRead") {
    
    hasUserReadTheBook = "Read it";
} 
  else if (event.target.id == "radioUnread") {
    hasUserReadTheBook = "Not Read"};
return hasUserReadTheBook;
});




function Book (title,author,pages,read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    //this.info = function (){
      //return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
    // }
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
let isFormLive = false;

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
  numberOfPages.setAttribute("placeholder", "200");

  let readLabel = document.createElement("label");
  readLabel.innerHTML = "Read it!"
  
  let readIt = document.createElement("input");
  readIt.setAttribute("type", "radio");
  readIt.setAttribute("name", "read");
  readIt.setAttribute("id", "radioRead");

  readLabel.appendChild(readIt);

  let notReadLabel = document.createElement("label");
  notReadLabel.innerHTML = "Haven't read it!";

  let notRead = document.createElement("input");
  notRead.setAttribute("type", "radio");
  notRead.setAttribute("name", "read");
  notRead.setAttribute("id", "radioUnread");

  notReadLabel.appendChild(notRead);


  let submitButton = document.createElement("input");
submitButton.setAttribute("type", "submit");
submitButton.setAttribute("value", "Submit");



  
  form.appendChild(newTitle);
  form.appendChild(newAuthor);
  form.appendChild(numberOfPages);
  form.appendChild(readLabel);
  form.appendChild(notReadLabel);
  form.appendChild(submitButton);

  


if (isFormLive === false) {

  document.getElementsByClassName("container")[0].appendChild(form);


  isFormLive = true;  

  document.querySelectorAll("form")[0].addEventListener("submit", nowAddBook);
  
}

  function nowAddBook () {
  
    

  const addBook = new Book (newTitle.value, newAuthor.value, numberOfPages.value, hasUserReadTheBook);
  

  for (let book of myLibrary) {
    table.deleteRow(1);
  
  }

  addBookToLibrary(addBook);

  form.remove();

  isFormLive = false;

   drawTable();

  }});
  

function drawTable() {

let table = document.getElementById('tbody');

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

  let td5 = document.createElement("button");
  td5.setAttribute("type" , "button");
  td5.setAttribute("class", "tableButtons");
 
  td5.setAttribute("id", myLibrary.indexOf(book));
 
  td5.textContent = "x";
  tr.appendChild(td5);
  
  
  table.appendChild(tr);

  
};
deleteRow();
};


drawTable();

function deleteRow() {
const buttonListeners = document.querySelectorAll(".tableButtons");

  buttonListeners.forEach(buttonListener => {
  
    buttonListener.addEventListener("click", function handleClick (event) {
   

  let rowToRemove = this.id;
  myLibrary.splice(rowToRemove, 1);
  
  document.getElementById('tbody').textContent="";
 
  drawTable();
  return console.log(myLibrary);

    })
  })
};