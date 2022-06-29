const book_name = document.querySelector("#book_name");
const author_name = document.querySelector("#author_name");
const pages_num = document.querySelector("#page_num");
const read_check =document.querySelector("#read_check");
const add_book = document.querySelector("#add_book");
const main_container = document.querySelector("#main_container");
const remove = document.querySelector(".remove");


let myLibrary = [];
const size = 4;


//get book from user and put in array
function addBookToLibrary() {
  for(let i = 0; i < size; i++){    
    myLibrary[0] = book_name.value;
    myLibrary[1] = author_name.value;
    myLibrary[2] = pages_num.value;
    myLibrary[3] = read_check.checked;
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
  const card = document.createElement('div');
  card.setAttribute('class', "card");
  main_container.appendChild(card);

  const name = document.createElement('div');
  name.setAttribute('class', "name");
  name.textContent = this.name;
  card.appendChild(name);

  const author = document.createElement('div');
  author.setAttribute('class', "author");
  author.textContent = this.author;
  card.appendChild(author);

  const pages = document.createElement('div');
  pages.setAttribute('class', "pages");
  pages.textContent = this.pages + " pages";
  card.appendChild(pages);

  const read = document.createElement('div');
  read.setAttribute('class', "read");
  if(this.read === true){
    read.textContent = "Have read";
  }
  else{
    read.textContent = "Have not read"
  }
  card.appendChild(read);

  const remove = document.createElement('button');
  remove.setAttribute('class', 'remove');
  remove.textContent = "Remove Book";
  card.appendChild(remove);
}

function removeBook(){
  
}


add_book.addEventListener('click', () => {
   const book = new Book(addBookToLibrary());
   book.makeCard();
})

remove.addEventListener('click', () => {
  removeBook();
})


