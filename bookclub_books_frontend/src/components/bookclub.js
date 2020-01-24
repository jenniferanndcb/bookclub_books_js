class BookClub {
  constructor(bookClubJSON) {
    this.id = bookClubJSON.id;
    this.name = bookClubJSON.name;
    this.books = bookClubJSON.books;
  }


  renderBookClubCard() {
    return `<div class ="card">
    <h2>${this.name}</h2>
    <h3>${this.findCurrentlyReading() || "We are on a break."}</h3>
    <button class="joinButton">Join Club</button>
    </div>`;
  }

  findCurrentlyReading() {
    let book = this.books.find(book => book.currently_reading);
    return book ? this.renderBook(book) : false;
  }

  renderBook(book) {
    return `<div class="bookdetails">
    <h3>${book.title}</h3>
    <h4>by ${book.author}</h4>
    </div>`;
  }

  // <img src= ${book.image}/>

  
}
