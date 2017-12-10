var left_score_obj = null
var right_score_obj = null
var game_description_text_obj = null
var left_score = 0
var right_score = 0
var wins = false
var games = [new white_board_game()]

function init() {
    left_score_obj.innerHTML = "Score: " + left_score
    right_score_obj.innerHTML = "Score: " + right_score
}


$(document).ready(function () {
    left_score_obj = document.getElementById("left_score")
    right_score_obj = document.getElementById("right_score")
    game_description_text_obj = document.getElementById("game_description_text")
    init()
    games[0].start_game()
});


function won_left() {
    left_score_obj.innerHTML = "Score: " + ++left_score
};


function won_right() {
    right_score_obj.innerHTML = "Score: " + ++right_score
};


function lose_left() {
    left_score_obj.innerHTML = "Score: " + --left_score
};


function lose_right() {
    right_score_obj.innerHTML = "Score: " + --right_score
};

window.onkeydown = function (e) {
    var code = e.keyCode
    if (code === 38) { //up key
        if (wins) {
            won_right();
            games[0].restart_game()
        }
        else {
            lose_right();
            games[0].restart_game()
        }
    } else if (code === 87) { //w key
        if (wins) {
            won_left();
            games[0].restart_game();
        }
        else {
            lose_right();
            games[0].restart_game()
        }
    }
};

