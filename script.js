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

function addBookToLibrary() {
  // do stuff here
}


const book = new Book ("Thud", "Terry Pratchett", "300", "read it")
