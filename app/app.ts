/**
 * Created by a028515 on 28-10-2017.
 */
function startGames() {
    let playerName: string = "Jayanth";
    logPlayerName(playerName);
    console.log("This is in startGames");
    var message: HTMLElement | null  = document.getElementById("messages");
    message!.innerText = "Lets play a game :" + `${playerName}`;



}

function logPlayerName(name) {
    console.log(`New Game started for Player : ${name}`);
}


document.getElementById("startGame")!.addEventListener('click',startGames);