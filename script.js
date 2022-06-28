let book_name = document.querySelector("#book_name");
let author_name = document.querySelector("#author_name");
let pages_num = document.querySelector("#page_num");
let read_check =document.querySelector("#page_check");
let add_book = document.querySelector("#add_book")

let myLibrary = [];
const size = 4;

//get book from user 
function addBookToLibrary() {
  for(let i = 0; i < size; i++){    
    myLibrary[i] = prompt('Enter' + (i+1));
  }
  return myLibrary
}

//iterate through array to get info
function Book(myLibrary) {
  for(let i = 0; i < size; i++){
  this.name = myLibrary[0];
  this.author = myLibrary[1];
  this.pages = myLibrary[2];
  this.read = myLibrary[3];
  }
}

//make a card and add to page
Book.prototype.makeCard = function(){
  console.log(this.name + ', ' +this.author +', '+ this.pages + " pages. Have read?" + this.read )
}

const book = new Book(addBookToLibrary())

book.makeCard();