const app = new App();

// document.addEventListener("DOMContentLoaded", function() {
//   fetchBookClubs();
// });

// function fetchBookClubs() {
//   fetch("http://localhost:3000/bookclubs")
//     .then(function(res) {
//       return res.json();
//     })
//     .then(function(data) {
//       return data.map(function(bookclub) {
//         return renderBookClub(bookclub);
//       });
//     });
// }

// function renderBookClub(bookclub) {
//   const bookclubList = document.getElementById("bookclubs-list");
//   const card = document.createElement("div");
//   card.className = "card";

//   bookclubList.append(card);

//   const h2 = document.createElement("h2");
//   h2.innerText = bookclub.name;

//   const h3 = document.createElement("h3");
//   h3.innerText = "Currently Reading:";

//   const bookTitle = document.createElement("h3");
//   let cr = bookclub.books.find(book => book.currently_reading === true);
//   console.log(cr.title);

//   //book details (book.title/book.author/book.image) where currently_reading is true where bookclub_id is == this.bookclub_id
//   //link for previous reads
//   //button to join a bookclub
//   //button to suggest a book once joined

//   card.append(h2, h3);
// }

//renderBook as separate function
//app.js --> class App {
//review JS OOP + static functions + get HTML (instance of the class knows how to to render itself)
