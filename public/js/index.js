$(function(){
    // const $joke = $("#joke");
    // const $punchline = $("#punchline");
    // const $jokeList = $(".list-container .list-group");
    // const $jokeBtn =$(".joke-item")
    // let activeJoke = {};
    // const handleJokeView = function () {
    //     $jokeList = $(this).data();
    //     renderActiveJoke();
    // };
    // const renderActiveJoke = () => {
    //     if (activeJoke.id) {
    //         $joke.val($jokeList.name);
    //         $punchline.val($jokeList.punchline);
    //     } else {
    //         $joke.attr("readonly", false);
    //         $punchline.attr("readonly", false);
    //         $joke.val("Joke");
    //         $punchline.val("Punchline");
    //     }
    // };
    $("#joke-item").on("click", function(event){
        event.preventDefault();
        console.log("Testing")
    })
})
