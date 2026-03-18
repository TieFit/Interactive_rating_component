let selectedRating = null;

const ratings = document.querySelector('.ratings');
const ratingButtons = ratings.querySelectorAll('.rating');
const submitButton = document.querySelector('.submitButton');
const ratingState = document.querySelector('.rating_state');
const thankYouState = document.querySelector('.thank_you_state');

ratingButtons.forEach(function(ratingButtons) {
    ratingButtons.addEventListener("click", function(event) {
        selectedRating = event.target.getAttribute('data-rating');
    });
});

submitButton.addEventListener("click", function() {
    if (!selectedRating) {
        alert('Please select a rating before submitting.');
        return;
    }
    ratingState.classList.add('hidden');
    thankYouState.classList.remove('hidden');
    selectedRatingThanks.textContent = `You selected ${selectedRating} out of 5`;
});