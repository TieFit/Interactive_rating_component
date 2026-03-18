let selectedRating = null;

const ratings = document.querySelector('.ratings');
const ratingButtons = ratings.querySelectorAll('.rating');
const submitButton = submitButton.querySelector('.submitButton');

ratingButtons.forEach(function(ratingButtons) {
    ratingButtons.addEventListener("click", function() {
        selectedRating = event.target.getAttribute('data-rating');
        //console.log(selectedRating);
    });
});

while (selectedRating == null) {

}