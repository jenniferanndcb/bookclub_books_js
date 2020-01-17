document.addEventListener("DOMContentLoaded", function() {
  fetchBookClubs();
});

function fetchBookClubs() {
  fetch("http://localhost:3000/bookclubs").then(function(res) {
    return console.log(res);
  });
}
