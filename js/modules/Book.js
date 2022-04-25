export default class Book {
  id = new Date().getMilliseconds();

  constructor(title, author, id = null) {
    this.title = title;
    this.author = author;
    if (id !== null) {
      this.id = id;
    }
  }

  createNode() {
    const node = document.createElement('li');
    node.innerHTML = `
        <span><span class="book-title">${this.title}</span> by ${this.author}</span> 
    `;
    const button = document.createElement('button');
    button.type = 'button';
    button.innerText = 'Remove';
    button.classList.add('book-button');
    button.setAttribute('element-id', this.id);

    node.append(button);

    return { node, button };
  }
}
