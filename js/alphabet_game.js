function alphabet_game() {

    this.game_description = "Press on your key if alphabet is in right order!!!";
    this.alphabets = [["ABCDEFGHIJKLMNOPQRSTUVWXYZ", false], ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", true], ["ABCDEFGHIKJLMNOPQRSTUVWXYZ", false], ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", true]
        , ["ABCDEFGHIJKLMNOPQRSTUVXWYZ", false], ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", true], ["ABCDEFGHIJKLMNOPQRTSUVWXYZ", false], ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", true], ["ABDCEFGHIJKLMNOPQRSTUVWXYZ", false],
        ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", true]]
    this.alphabet_number = getRandomInt(0, this.alphabets.length - 1)
    this.game_count = getRandomInt(5, 7)
    this.game_number = 0
    this.wait_time = 5000
    this.bg_worker_counter = 0
    this.finished = false
    this.bg_worker_id = null


    this.start_game = function () {
        game_description_text_obj.innerHTML = this.game_description
        $("#game_content").load("alphabet_game.html", function () {
        document.getElementById("alphabet-text").innerHTML = alphabets[alphabet_number][0]
        wins = alphabets[alphabet_number][1]
        bg_worker_id = setInterval(bg_worker, 100)
        console.log("started")
        })



    };


    this.restart_game = function () {
        if(bg_worker_id){
            clearInterval(bg_worker_id)
        }
        bg_worker_id = setInterval(this.bg_worker, 100)
        while (true) {
            var tmp = getRandomInt(0, alphabets.length - 1)
            if (tmp != alphabet_number) {
                alphabet_number = tmp;
                break
            }
        }
        document.getElementById("alphabet-text").innerHTML = alphabets[alphabet_number][0]
        wins = alphabets[alphabet_number][1]
    };


    this.bg_worker = function () {
        bg_worker_counter += 100;
        if (bg_worker_counter == wait_time) {
            bg_worker_counter = 0
            game_number++
            clearInterval(bg_worker_id)
            console.log(game_number)
            console.log(game_count)
            if (game_number == game_count - 1) {
                finished = true
            }
            else {
                this.restart_game()
            }
        }
        console.log("worker")

    };

    this.stop_game = function () {
        //stop game
        clearInterval(bg_worker_id)
        wins= false
    }

    if (!(this instanceof alphabet_game)) {
        return new alphabet_game();
    }


}
