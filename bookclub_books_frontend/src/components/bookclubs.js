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
      if ((event.target.className = "join-button")) {
        this.renderBookClub();
      }
    });
  }

  renderBookClub(bookclub) {
    console.log("clicked");
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
    const bookClubsList = document.getElementById("bookclubs-list");
    bookClubsList.innerHTML = this.bookclubs.map(bookclub =>
      bookclub.renderBookClubCard()
    );
  }
}
