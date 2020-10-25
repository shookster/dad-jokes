$(document).ready(() => {
    const ratingSelect = $("form#your-rating");
    const ratingInput = $("select#choice");
    ratingSelect.on("submit", function(event){
        event.preventDefault();
        console.log("testing");
        var ratingData = {
            rating: ratingInput.val().trim()
        };
        if(!ratingData.rating){
            alert("Don't You Want to Rate?");
            return;
        };

        submitRating(ratingData.rating);
        ratingInput.val("");
    })
    function submitRating(rating) {
        $.post("/api/submitRating", {
            rating: rating
        }).then(function() {
            window.location.reload();
        }).catch(function(err) {
            console.log(err);
        })
    }
})