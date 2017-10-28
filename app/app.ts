/**
 * Created by a028515 on 28-10-2017.
 */
function startGames() {
    var message  = document.getElementById("messages");
    message.innerText = "Welcome. Lets play a game !!";
}


document.getElementById("startGame").addEventListener('click',startGames);