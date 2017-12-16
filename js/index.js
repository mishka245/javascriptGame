var left_score_obj = null
var right_score_obj = null
var game_description_text_obj = null
var left_score = 0
var right_score = 0
var wins = false
var games = []

function init() {
    left_score_obj.innerHTML = "Score: " + left_score
    right_score_obj.innerHTML = "Score: " + right_score
}


$(document).ready(function () {
    left_score_obj = document.getElementById("left_score")
    right_score_obj = document.getElementById("right_score")
    game_description_text_obj = document.getElementById("game_description_text")
    // games.push(white_board_game());
    games.push(alphabet_game())
    init()
    console.log(games[0])
    games[0].start_game()


});


function won_left() {
    left_score_obj.innerHTML = "Score: " + ++left_score
        var $el = $("#left_panel"),
        x = 1000,
        originalColor = $el.css("background");

    $el.css("background-color", "green");
    setTimeout(function () {
        $el.css("background", originalColor);
    }, x);
};


function won_right() {
    right_score_obj.innerHTML = "Score: " + ++right_score
        var $el = $("#right_panel"),
        x = 1000,
        originalColor = $el.css("background");

    $el.css("background-color", "green");
    setTimeout(function () {
        $el.css("background", originalColor);
    }, x);
};


function lose_left() {
    left_score_obj.innerHTML = "Score: " + --left_score

    var $el = $("#left_panel"),
        x = 1000,
        originalColor = $el.css("background");

    $el.css("background-color", "red");
    setTimeout(function () {
        $el.css("background", originalColor);
    }, x);

};


function lose_right() {
    right_score_obj.innerHTML = "Score: " + --right_score

    var $el = $("#right_panel"),
        x = 1000,
        originalColor = $el.css("background");

    $el.css("background-color", "red");
    setTimeout(function () {
        $el.css("background", originalColor);
    }, x);

};

window.onkeydown = function (e) {
    var code = e.keyCode
    if (code === 87) { //up key
        if (wins) {
            won_left();
            if (!games[0].finished) {
                games[0].restart_game()
            }
            console.log("won left")
        }
        else {
            lose_left();
            if (!games[0].finished) {
                games[0].restart_game()
            }

            console.log("loose left")
        }
    } else if (code === 38) { //w key
        if (wins) {
            won_right();
            if (!games[0].finished) {
                games[0].restart_game()
            }
        }
        else {
            lose_right();
            if (!games[0].finished) {
                games[0].restart_game()
            }

        }
    }
};



