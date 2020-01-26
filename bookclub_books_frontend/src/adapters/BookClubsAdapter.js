class BookClubsAdapter {
  constructor() {
    this.baseUrl = "http://localhost:3000/bookclubs";
  }

  getBookClub() {
    return fetch(this.baseUrl).then(res => res.json());
  }

  createBookClub(value, bookDetails) {
    const bookclub = {
      name: value,
      book: bookDetails
    };

    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },

      body: JSON.stringify(bookclub)
    };

    return fetch(this.baseUrl, configObj)
      .then(res => res.json)
      .then(record => console.log(record));
  }
}
