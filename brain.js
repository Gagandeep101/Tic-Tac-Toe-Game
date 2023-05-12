var box_input = document.querySelector(".gridbox").querySelectorAll("div");
var gamer_over = false;
var game_status = document.querySelector(".game_status");
var player_turn = "0";
var winner_player = "";
var reset = document.querySelector(".replay_btn");


function reset_game() {

    // Add click eventlistener on replay button

    reset.addEventListener("click", function () {
        
        //set game_over ,player_turn and game_status to its default values

        gamer_over = false;
        player_turn = "0";
        game_status.innerHTML = "Player " + player_turn + " turns !!!";

        // In these case we select every element(div tag under .gridbox class) in the box_input set their innerText to "" and setAttribute

        Array.from(box_input).forEach(element => {
            element.setAttribute("style", "    background: rgba(246, 245, 245, 0.162);color: white;");
            element.innerText = "";
        })
    });
}

// swap the value of player_turn  

function swap_player_turn() {
    player_turn = player_turn === "0" ? "X" : "0";
}

