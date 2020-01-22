class BookClubsAdapter {
  constructor() {
    this.baseUrl = "http://localhost:3000/bookclubs";
  }

  getBookClub() {
    return fetch(this.baseUrl).then(res => res.json());
  }
}
