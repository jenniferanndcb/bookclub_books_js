class BookClubs {
  constructor() {
    this.bookclubs = [];
    this.adapter = new BookClubsAdapter();
    this.fetchAndLoadBookClubs();
  }

  fetchAndLoadBookClubs() {
    this.adapter
      .getBookClub()
      .then(bookclubs => {
        bookclubs.forEach(bookclub => this.bookclubs.push(bookclub));
      })
      .then(() => {
        this.renderBookClubs();
      });
  }

  renderBookClubs() {
    const bookClubsList = document.getElementById("bookclubs-list");
    bookClubsList.innerHTML = "bookclub here";
    console.log("bookclubs around:", this.bookclubs);
  }
}
