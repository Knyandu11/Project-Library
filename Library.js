const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  render();
}

function render() {
  const libraryContainer = document.getElementById('library');
  libraryContainer.innerHTML = '';

  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    bookCard.dataset.index = index;

    const title = document.createElement('h2');
    title.textContent = book.title;
    const author = document.createElement('p');
    author.textContent = `Author: ${book.author}`;
    const pages = document.createElement('p');
    pages.textContent = `Pages: ${book.pages}`;
    const read = document.createElement('p');
    read.textContent = `Read: ${book.read ? 'Yes' : 'No'}`;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', () => removeBook(index));

    const toggleReadBtn = document.createElement('button');
    toggleReadBtn.textContent = 'Toggle Read';
    toggleReadBtn.addEventListener('click', () => toggleRead(index));

    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(read);
    bookCard.appendChild(removeBtn);
    bookCard.appendChild(toggleReadBtn);

    libraryContainer.appendChild(bookCard);
  });
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  render();
}

function toggleRead(index) {
  myLibrary[index].read = !myLibrary[index].read;
  render();
}

const newBookForm = document.getElementById('new-book-form');
newBookForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = parseInt(document.getElementById('pages').value);
  const read = document.getElementById('read').checked;
  addBookToLibrary(title, author, pages, read);
  newBookForm.reset();
});

// Manually adding a few books to the library for demonstration
addBookToLibrary('The Great Gatsby', 'F. Scott Fitzgerald', 180, true);
addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', 281, false);
addBookToLibrary('1984', 'George Orwell', 328, true);