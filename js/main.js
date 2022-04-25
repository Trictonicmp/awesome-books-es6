import { Book } from './modules/Book.js';
import { DisplayBooks } from './modules/DisplayBooks.js';

const today = document.getElementById('today');
let display = null;

window.onload = () => {
  display = new DisplayBooks();
  display.render();
  today.textContent = new Date().toString();
};

document.forms[0].onsubmit = (event) => {
  event.preventDefault();
  const thisForm = event.target;
  const title = thisForm[0].value;
  const author = thisForm[1].value;
  const newBook = new Book(title, author);
  display.addBook(newBook);
  thisForm.reset();
};

const changePage = (link) => {
  const sections = document.querySelectorAll('section');
  sections.forEach((section) => {
    if (section.classList.contains(link)) {
      section.classList.remove('hidden');
    } else {
      section.classList.add('hidden');
    }
  });
}

const pageLinks = document.querySelectorAll('[data-section]');

pageLinks.forEach((link) => {
  link.onclick = (event) => {
    event.preventDefault();
    changePage(link.dataset.section);
  };
});


export const removeBook = (bookId) => {
  display.removeBook(bookId);
}

