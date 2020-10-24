const $joke = $(".joke");
const $punchline = $(".punchline");
const $jokeList = $(".list-container .list-group");
let activeJoke = {};
const handleJokeView = function () {
    console.log("clicked")
    activeJoke = $(this).data();
    renderActiveJoke();
};
const renderActiveJoke = () => {
    if (activeJoke.id) {
        $joke.val(activeJoke.joke);
        $punchline.val(activeJoke.punchline);
    } else {
        $joke.attr("readonly", false);
        $punchline.attr("readonly", false);
        $joke.val("Joke");
        $punchline.val("Punchline");
    }
};
$jokeList.on("click", ".joke-item", handleJokeView);