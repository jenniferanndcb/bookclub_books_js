class BookClubs {
  constructor() {
    this.bookclubs = [];
    this.adapter = new BookClubsAdapter();
    this.fetchAndLoadBookClubs();
    this.eventListeners();
  }

  eventListeners() {
    this.bookClubsList = document.getElementById("bookclubs-list");
    this.bookClubsList.addEventListener("click", () => {
      if (event.target.className === "bc-button") {
        this.fetchBookClub(event.target.id);
      }
    });
    this.newBookClubName = document.getElementById("new-bookclub-name");
    this.bookName = document.getElementById("book_currently_reading");
    this.bookAuthor = document.getElementById("cr_author");
    this.newBookClub = document.getElementById("new-bookclub-form");
    this.newBookClub.addEventListener("submit", this.createBookClub.bind(this));
  }

  fetchBookClub(id) {
    return fetch(this.adapter.baseUrl + `/${id}`)
      .then(res => res.json())
      .then(bookclub => bookclub.renderBookClub());
  }

  renderBookClub() {
    console.log(bookclub);
  }

  createBookClub(e) {
    e.preventDefault();
    const value = this.newBookClubName.value;
    const bookDetails = {
      title: this.bookName.value,
      author: this.bookAuthor.value
    };

    this.adapter
      .createBookClub(value, bookDetails)
      .then(bookclub => {
        this.bookclubs.push(new BookClub(bookclub));
      })
      .then(() => this.renderBookClubs());

    this.newBookClub.reset();
  }

  fetchAndLoadBookClubs() {
    this.adapter
      .getBookClub()
      .then(bookclubs => {
        bookclubs.forEach(bookclub =>
          this.bookclubs.push(new BookClub(bookclub))
        );
      })
      .then(() => {
        this.renderBookClubs();
      });
  }

  renderBookClubs() {
    this.bookClubsList.innerHTML = this.bookclubs.map(bookclub =>
      bookclub.renderBookClubCard()
    );
  }
}
