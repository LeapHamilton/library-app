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
const book3 = new Book ("How to Sell the Stars", "Richard J. Dowling", "300", "read it" )
addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);



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


/*let td1 = document.createElement('td')
td1.textContent = book.info();
*/
  table.appendChild(tr);

}