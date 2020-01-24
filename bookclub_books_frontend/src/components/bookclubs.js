class BookClubs {
  constructor() {
    this.bookclubs = [];
    this.adapter = new BookClubsAdapter();
    this.fetchAndLoadBookClubs();
    this.eventListeners();
  }

  eventListeners() {
    this.joinButton = document.getElementsByClassName("joinButton");
    this.joinButton.addEventListerner("click", this.renderBookClub());
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

  renderBookClub() {
    alert("clicked");
  }
}
