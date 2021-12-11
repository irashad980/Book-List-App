const title = document.querySelector("#title");
const author = document.querySelector("#author");
const year = document.querySelector("#year");
const btn = document.querySelector(".btn");
const bookList = document.querySelector("#book-list");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  if (title.value == "" && author.value == "" && year.value == "") {
    alert("Pleas Fill it up !");
  } else {
    const newRow = document.createElement("tr");

    // Creating New Title
    const newTitle = document.createElement("th");
    newTitle.innerHTML = title.value;
    newRow.appendChild(newTitle);

    // Creating New Author
    const newAuthor = document.createElement("th");
    newAuthor.innerHTML = author.value;
    newRow.appendChild(newAuthor);

    // Creating New Year
    const newYear = document.createElement("th");
    newYear.innerHTML = year.value;
    newRow.appendChild(newYear);

    bookList.appendChild(newRow);
  }
});
