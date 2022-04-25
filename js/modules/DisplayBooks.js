import Book from './Book.js';

export default class DisplayBooks {
  books = [];

  booksContainer = document.getElementById('books-cont');

  constructor() {
    if (localStorage.getItem('books')) {
      this.books = JSON.parse(localStorage.getItem('books')).map((book) => new Book(book.title, book.author, book.id));
    }
  }

  addBook(title, author) {
    const newBook = new Book(title, author);
    this.books.push(newBook);
    this.render();
    this.saveBooks();
  }

  removeBook(id) {
    this.books = this.books.filter((book) => book.id !== id);
    this.render();
    this.saveBooks();
  }

  render() {
    this.booksContainer.innerHTML = '';
    if (this.books.length === 0) {
      this.booksContainer.innerHTML = '<h3>There are no books.</h3>';
      return;
    }
    for (let i = 0; i < this.books.length; i += 1) {
      const bookData = this.books[i].createNode();
      bookData.button.onclick = () => {
        this.removeBook(this.books[i].id);
      };
      this.booksContainer.append(bookData.node);
    }
  }

  saveBooks() {
    localStorage.setItem('books', JSON.stringify(this.books));
  }
}