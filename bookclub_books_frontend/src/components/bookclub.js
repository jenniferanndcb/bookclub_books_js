class BookClub {
  constructor(bookClubJSON) {
    this.id = bookClubJSON.id;
    this.name = bookClubJSON.name;
    this.books = bookClubJSON.books;
    this.adapter = new BookClubsAdapter();
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
    <img src= ${book.image}/>
    <h3>${book.title}</h3>
    <h4>by ${book.author}</h4>
    </div>`;
  }

  renderBookClubDeets() {
    return `<h2>${this.name}</h2>
    Currently Reading: `;
  }
}
