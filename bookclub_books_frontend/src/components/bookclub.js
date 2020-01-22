class BookClub {
  constructor(bookClubJSON) {
    this.id = bookClubJSON.id;
    this.name = bookClubJSON.name;
    this.books = bookClubJSON.books;
  }

  renderCardAndName() {
    return `<div class ="card">
    <h2>${this.name}</h2><h3>${this.findCurrentlyReading() ||
      "We are on a break."}</h3></div>`;
  }

  findCurrentlyReading() {
    let book = this.books.find(book => book.currently_reading);
    return book ? this.renderBook(book) : false;
  }

  renderBook(book) {
    // console.log(book);
    return `<div class="bookdetails">
    <img src= ${book.image}/>
    <h3>${book.title}</h3>
    <h4>by ${book.author}</h4>
    </div>`;
  }
}
