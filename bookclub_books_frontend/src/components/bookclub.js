class BookClub {
  constructor(bookClubJSON) {
    this.id = bookClubJSON.id;
    this.name = bookClubJSON.name;
    this.books = bookClubJSON.books;
    this.bceventListeners();
  }

  bceventListeners() {
    this.delete = document.getElementById(`button-${this.id}`);
    this.delete.addEventListener("click", console.log("clicked"));
  }

  renderBookClubCard() {
    return `<div class ="card">
    <h2>${this.name}</h2>
    <h3>${this.findCurrentlyReading() || "We are on a break."}</h3>
    <button class="bc-button" id="${this.id}">See Details</button>
    </div>`;
  }

  findCurrentlyReading() {
    let book = this.books.find(book => book.currently_reading);
    return book ? this.renderCRBook(book) : false;
  }

  renderCRBook(book) {
    return `<div class="bookdetails">
    <div class="book_img">
    <img src= ${book.image}>
    </div>
    <h3>${book.title}</h3>
    <h4>by ${book.author}</h4>
    </div>`;
  }

  renderBookClubDeets() {
    return `<div class="bcdeets_container">
    <div class="page_title">
    <h2>${this.name}</h2>
    </div>
    <div class="cr_reading">
    <h3>Currently Reading: </h3>
    ${this.findCurrentlyReading()}
    </div>
    <div class="bookshelf">
    <h3>Bookshelf</h3>
    <ul>
    ${this.books
      .map(book => `<li>${book.title} by ${book.author}</li>`)
      .join("")}
    </ul>
    </div>
    ${this.renderBookClubButtons()}
    </div>
    `;
  }

  renderBookClubButtons() {
    return `
    <div id="delete">
    <button class="del-button" id="button-${this.id}">Delete</button>
    </div>
    `;
  }
}
