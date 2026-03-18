let selectedRating = null;

const ratings = document.querySelector('.ratings');
const buttons = ratings.querySelectorAll('.rating');

buttons.forEach(function(buttons) {
    buttons.addEventListener("click", function() {
        console.log("clicked");
    });
});