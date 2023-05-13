var player_input = document.querySelectorAll(".box");
var reset_btn = document.querySelector(".replay_btn");
var game_status = document.querySelector(".game_status");
var win_condition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
var options = ["", "", "", "", "", "", "", "", ""];
var running = false;
var current_player = "X";

function start_game() {
    player_input.forEach(box => box.addEventListener("click", clickedbox));
    reset_btn.addEventListener("click", restart_game);
    game_status.innerText = current_player + " turn's !!!";
    running = true;
}
function clickedbox() {
    const box_index = this.getAttribute("cellIndex");
    if (options[box_index] != "" || !running) {
        return;
    }
    update_box(this, box_index);
    check_win();
}
function update_box(box, index) {
    options[index] = current_player;
    box.innerText = current_player;
}
function swap_player_turns() {
    current_player = (current_player == "X") ? "0" : "X";
    game_status.innerText = current_player + " turn's !!!";
}
function check_win() {
    let round_won = false;
    for (let i = 0; i < win_condition.length; i++) {
        const condition = win_condition[i];
        const con1 = options[condition[0]];
        const con2 = options[condition[1]];
        const con3 = options[condition[2]];
        if (con1 == "" || con2 == "" || con3 == "") {
            continue;
        }
        if (con1 == con2 && con1 == con3) {
            round_won = true;
            player_input[condition[0]].setAttribute("style","  background: rgba(255, 255, 255, 0.629);color: #4a0095;");
            player_input[condition[1]].setAttribute("style","  background: rgba(255, 255, 255, 0.629);color: #4a0095;");
            player_input[condition[2]].setAttribute("style","  background: rgba(255, 255, 255, 0.629);color: #4a0095;");
            break;
        }
    }
    if (round_won) {
        game_status.innerText = current_player + " wins !!!";
        running = false;
    }
    else if(!options.includes("")){
        game_status.innerText ="It's Tie !!!";
        running = false;
    }
    else{
        swap_player_turns();
    }
}
function restart_game() {
    current_player="X";
    options = ["", "", "", "", "", "", "", "", ""];
    game_status.innerText = current_player + " turn's !!!";
    player_input.forEach(player_input=>{
        player_input.setAttribute("style","  background: rgba(246, 245, 245, 0.162);color: white;");
        player_input.innerText="";
    });
    running=true;
}

start_game();