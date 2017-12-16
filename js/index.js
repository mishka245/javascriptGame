var left_score_obj = null
var right_score_obj = null
var game_description_text_obj = null
var left_score = 0
var right_score = 0
var wins = false
var finished = false
var games = []
var games_indeces = []    // indexes for games array
var game_index = null   // index in games array
var counter = 0

function init() {
    left_score_obj.innerHTML = "Score: " + left_score
    right_score_obj.innerHTML = "Score: " + right_score
}


$(document).ready(function () {
    left_score_obj = document.getElementById("left_score")
    right_score_obj = document.getElementById("right_score")
    game_description_text_obj = document.getElementById("game_description_text")
    // games.push(white_board_game());
    games[0] = (white_board_game())
    games[1] = (alphabet_game())

    for (var i = 0; i < games.length; ++i) {
        games_indeces[i] = i
    }
    shuffle(games_indeces)
    // game_index = games_indeces.pop();
    game_index = 0
    counter++
    init()
    games[game_index].start_game()


});

function zaali() {
    clearInterval(checker)
    console.log("finaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaal")
    if (left_score > right_score) {
        game_description_text_obj.innerHTML = "Left player won!"
        $("#left_panel").css("background-color", "green")
    }
    else {
        if (left_score < right_score) {
            game_description_text_obj.innerHTML = "Right player won!"
            $("#right_panel").css("background-color", "green")
        }
        else {
            game_description_text_obj.innerHTML = "Draw!"
            $("#left_panel").css("background-color", "green")
            $("#right_panel").css("background-color", "green")

        }
    }

}

function choose_next_game() {
    console.log("choose")
    if (counter == games.length) {
        zaali()
    }
    else {
        games[game_index].stop_game()
        // game_index = games_indeces.pop();
        game_index++
        counter++
        games[game_index].start_game()
    }

}

var checker = setInterval(function () {
    //finished game checker
    // console.log(games[game_index])
    if (finished) {
        choose_next_game()
    }

}, 200)


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
            if (!finished) {
                games[game_index].restart_game()
            }
            console.log("won left")
        }
        else {
            lose_left();
            if (!finished) {
                games[game_index].restart_game()
            }

            console.log("loose left")
        }
    } else if (code === 38) { //w key
        if (wins) {
            won_right();
            if (!finished) {
                games[game_index].restart_game()
            }
        }
        else {
            lose_right();
            if (!finished) {
                games[game_index].restart_game()
            }

        }
    }
};



