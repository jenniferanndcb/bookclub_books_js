document.addEventListener("DOMContentLoaded", function() {
  fetchBookClubs();
});

function fetchBookClubs() {
  fetch("http://localhost:3000/bookclubs")
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      return data.map(function(bookclub) {
        return renderBookClub(bookclub);
      });
    });
}

function renderBookClub(bookclub) {
  const bookclubList = document.getElementById("bookclubs-list");
  const card = document.createElement("div");
  card.className = "card";

  bookclubList.append(card);

  const h2 = document.createElement("h2");
  h2.innerText = bookclub.name;

  card.append(h2);
}
