let myLibrary = [];

function Book (title,author,pages,read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function (){
      return `${book.title} by ${book.author}, ${book.pages} pages, ${book.read}`
     }
  }

function addBookToLibrary(bookToBeAdded) {
  myLibrary.push(bookToBeAdded);
}


const book1 = new Book ("Thud", "Terry Pratchett", "300", true);
const book2 = new Book ("The Hobbit", "J.R.R. Tolkein", "250", true)

addBookToLibrary(book1);
addBookToLibrary(book2);

document.getElementById("gridTable").textContent += myLibrary[0].title;
document.getElementById("gridTable").textContent += myLibrary[1].title;

