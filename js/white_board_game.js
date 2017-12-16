function white_board_game() {

    this.game_description = "Press on your key when white board appears";
    this.game_count = getRandomInt(3, 5);
    this.game_number = 0
    this.setinterval_id = false
    this.intervals_array = []
    this.bg_worker_counter = 0;
    for (var i = 0; i < this.game_count; ++i) {
        this.intervals_array[i] = (getRandomInt(4, 9) * 1000)
    }


    this.open_board = function () {
        $("#board").css("background-color", "white")

    }


    this.start_game = function () {
        finished = false
        game_description_text_obj.innerHTML = this.game_description
        $("#game_content").load("white_board_game.html")
        setinterval_id = setTimeout(this.bg_worker, this.intervals_array[this.game_number])

    };


    this.restart_game = function () {
        console.log("restart white")
        wins = false
        $("#board").css("background-color", "black")
        if (setinterval_id) {
            clearTimeout(setinterval_id)
        }
        setinterval_id = setTimeout(this.bg_worker, this.intervals_array[this.game_number])
    };

    this.bg_worker = function () {

        console.log("white")
        console.log(intervals_array[game_number])
        wins = true
        this.open_board()
        this.game_number++
        console.log(this.game_number)
        console.log(this.game_count)
        if (this.game_number >= this.game_count) {
            finished = true
            console.log("finished white")

        }

    };

    this.stop_game = function () {
        //stop game
        clearTimeout(setinterval_id)
        wins = false
    }

    if (!(this instanceof white_board_game)) {
        return new white_board_game();
    }


}
