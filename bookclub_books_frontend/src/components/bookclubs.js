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
        return console.log(bookclubs);
      })
      .then(() => {
        this.renderBookClubs();
      });
  }

  renderBookClubs() {
    const bookClubsList = document.getElementById("bookclubs-list");
    bookClubsList.innerHTML = "bookclub here";
  }
}
