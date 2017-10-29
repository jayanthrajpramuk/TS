/**
 * Created by a028515 on 28-10-2017.
 */
function startGames() {
    console.log("This is a New Game");
    console.log("This is a New Game 2");
    var message  = document.getElementById("messages");
    message.innerText = "Lets play a game !!. Its your Game !";
}


document.getElementById("startGame").addEventListener('click',startGames);