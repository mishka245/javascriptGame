function white_board_game() {
    this.game_description = "Press on your key when white board appears";
    this.game_count = getRandomInt(3, 5);
    this.game_number = 0
    this.finished = false
    this.setinterval_id = null
    this.intervals_array = new Array(this.game_count)
    this.bg_worker_counter = 0;

    for (var i = 0; i < this.intervals_array.length; ++i) {
        this.intervals_array[i] = (getRandomInt(4, 9) * 100)
    }


    this.open_board = function () {
        $("#board").css("color", "white")
        this.wait = true


    }


    this.start_game = function () {
        game_description_text_obj.innerHTML = this.game_description
        $("#game_content").load("white_board_game.html")
        this.setinterval_id = setInterval(this.bg_worker, 100)


    };


    this.restart_game = function () {
        $("#board").css("color", "black")
        if (this.setinterval_id) {
            clearInterval(this.setinterval_id)
        }
        this.setinterval_id = setInterval(this.bg_worker, 100)
    };


    this.bg_worker = function () {
        this.bg_worker_counter += 100;
        console.log(this.bg_worker_counter)
        console.log(this.game_number)
        if (this.bg_worker_counter == this.intervals_array[this.game_number]) {
            wins = true
            this.open_board()
            this.bg_worker_counter = 0
            this.game_number++
            clearInterval(this.setinterval_id)
        }
        if (this.game_number == this.game_count - 1) {
            this.finished = true
        }
    };


    this.stop_game = function () {
        //stop game
        clearInterval(this.setinterval_id)
    }
}
