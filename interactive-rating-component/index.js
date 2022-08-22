let card = document.getElementById("card");
let submitbtn = document.querySelector(".submit-btn");
let success = document.querySelector(".submit-card-container");
let ratings = document.querySelectorAll(".rating");
let selectedRating = document.querySelector(".selected-rating");
let value;

ratings.forEach((rating) => {
  rating.addEventListener("click", function (e) {
    value = e.target.textContent;
    ratings.forEach((ratingbtn) => {
      ratingbtn.removeAttribute("id", "selected");
    });
    rating.setAttribute("id", "selected");
  });
});

function submit() {
  card.style.display = "none";
  success.style.display = "grid";
  selectedRating.textContent = "You selected " + value + " out of 5";
}
