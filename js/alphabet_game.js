function alphabet_game() {

    this.game_description = "Press on your key if alphabet is in right order!!!";
    this.alphabets = [["ABCDEFGHIJKLMNOPQRSTUVWXYZ", false], ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", true], ["ABCDEFGHIKJLMNOPQRSTUVWXYZ", false], ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", true]
        , ["ABCDEFGHIJKLMNOPQRSTUVXWYZ", false], ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", true], ["ABCDEFGHIJKLMNOPQRTSUVWXYZ", false], ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", true], ["ABDCEFGHIJKLMNOPQRSTUVWXYZ", false],
        ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", true]]
    this.alphabet_number = getRandomInt(0, this.alphabets.length - 1)
    this.game_count = getRandomInt(5, 7)
    this.alph_game_number = 0
    this.wait_time = 5000
    this.bg_worker_id = null


    this.start_game = function () {
        finished = false
        game_description_text_obj.innerHTML = this.game_description
        $("#game_content").load("alphabet_game.html", function () {
            document.getElementById("alphabet-text").innerHTML = alphabets[alphabet_number][0]
            wins = alphabets[alphabet_number][1]
            bg_worker_id = setTimeout(bg_worker, this.wait_time)
        })

    };


    this.restart_game = function () {

        console.log("restart alphabet")
        if (bg_worker_id) {
            clearTimeout(bg_worker_id)
        }
        bg_worker_id = setTimeout(this.bg_worker, this.wait_time)
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

        console.log("alphabet")
        alph_game_number++
        console.log(alph_game_number)
        console.log(game_count)
        if (alph_game_number >= game_count ) {
            finished = true
            console.log("finished alphabet")
        }
        else {
            this.restart_game()
        }

    };

    this.stop_game = function () {
        //stop game
        clearTimeout(bg_worker_id)
        wins = false
    }

    if (!(this instanceof alphabet_game)) {
        return new alphabet_game();
    }


}
