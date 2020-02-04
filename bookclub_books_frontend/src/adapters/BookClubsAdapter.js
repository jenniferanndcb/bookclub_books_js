class BookClubsAdapter {
  constructor() {
    this.baseUrl = "http://localhost:3000/bookclubs";
  }

  getBookClubs() {
    return fetch(this.baseUrl).then(res => res.json());
  }

  createBookClub(value, bookDetails) {
    const bookclub = {
      name: value,
      book: bookDetails
    };

    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },

      body: JSON.stringify(bookclub)
    };

    return fetch(this.baseUrl, configObj).then(res => res.json());
  }

  getBookClub(id) {
    return fetch(`${this.baseUrl}/${id}`).then(res => res.json());
  }

  deleteBookClub(id) {
    let configObj = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify()
    };
    return fetch(`${this.baseUrl}/${id}`, configObj)
      .then(res => res.json())
      .then(data => {
        window.location.reload();
      });
  }
}
