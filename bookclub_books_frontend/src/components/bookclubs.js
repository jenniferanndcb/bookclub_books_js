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
    bookClubsList.innerHTML = `${this.bookclubs.map(bookclub => (
      <div class="card">
        <h1>${bookclub.name}</h1>
      </div>
    ))}`;
  }
}
