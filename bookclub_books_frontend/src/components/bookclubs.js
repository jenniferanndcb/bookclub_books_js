class BookClubs {
  constructor() {
    this.bookclubs = [];
    this.adapter = new BookClubsAdapter();
    this.fetchAndLoadBookClubs();
  }

  fetchAndLoadBookClubs() {
    this.adapter.getBookClub().then(bookclubs => {
      console.log(bookclubs);
    });
  }
}
