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

// check who win the game

function checkWin() {

    // It is wining position at which one player can won the game

    var win_condition = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

    // In these we take three elements from box_input according to the win_condition from mini array in every iteration

    win_condition.forEach(element => {
        var con1 = box_input[element[0]].innerText;
        var con2 = box_input[element[1]].innerText;
        var con3 = box_input[element[2]].innerText;

        //  check if con1 ,con2 and con3 are equal or not and check if they are not empty
        //  then we set game_over to true and change style attributes accordingly
        //  set winner_player to con1 if above condition is true

        if (((con1 === con2) && (con2 === con3)) && (con1 !== "")) {
            gamer_over = true;
            box_input[element[0]].setAttribute("style", "  background: rgba(255, 255, 255, 0.629);color: #4a0095;");
            box_input[element[1]].setAttribute("style", "  background: rgba(255, 255, 255, 0.629); color: #4a0095;");
            box_input[element[2]].setAttribute("style", "  background: rgba(255, 255, 255, 0.629);  color: #4a0095;");
            winner_player = con1;
            return;
        }
    });
}

// set start_game function

function start_game() {

    // In for of loop we select all elements from the box_input array and then add click eventListeners to each element.\

    for (element of box_input) {
        element.addEventListener("click", (e) => {

            // At these time we check if the element is empty or not .If it is empty then we set innerText to player_turn
            // And The check if game is over or not over. If it is not then we set game_status innerText to next player_turn after swapping it otherwise we set game_status to declared the winner in the game 

            if (e.target.innerText === "") {
                e.target.innerText = player_turn;
                swap_player_turn();
                checkWin();
                if (!gamer_over) {
                    game_status.innerText = "Player " + player_turn + " turn !!!";
                }
                else {
                    game_status.innerText = "Player " + winner_player + " wins !!!";
                }
            }
        });
    }
}

// In these first winners player is declared furhter player game status not updated in game_status.innerText 

start_game();
reset_game();


