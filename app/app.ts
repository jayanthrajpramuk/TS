/**
 * Created by a028515 on 28-10-2017.
 */
function startGames() {
    let playerName: string | undefined = getInputValue("playername");
    playerName = checkPlayerName(playerName);
    logPlayerName(playerName);
    postScore(100, playerName);
   // postScore(-100, playerName);
    console.log("This is in startGames");
    var message: HTMLElement | null  = document.getElementById("messages");
    message!.innerText = "Lets play a game :" + `${playerName}` ;
}

function checkPlayerName(playerName: string | undefined): string |undefined {
    if(playerName === "" || playerName == null) {
        playerName = "Welcome Guest(Default Value)"
    } else {
        playerName = playerName;
    }
    return playerName;
}

function logPlayerName(name: string = "Welcome Guest"): void {
    console.log(`New Game started for Player : ${name}`);
}

function postScore(score: number, playerName: string = "Welcome Guest"): void {
    let logger: (value : string) => void;

    if(score < 0) {
        logger = logError;
    } else{
        logger = logMessage;
    }

    logger(`Score is : ${score}`);

let scoreElem: HTMLElement = <HTMLElement>document.getElementById("postedScores");
scoreElem!.innerText = `${score}-${playerName}`;
}

function getInputValue(elementId: string) : string | undefined {

    let inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementId);
    if(inputElement.value === '') {
            return undefined;
    } else {
        return inputElement.value;
    }

}

let logMessage = (message: string): void => {
    console.log("Regular Message : "+message)
    console.log("Template :" +`${message}`);
}


let logError = (messgae: string): void => console.error("Error");

logMessage("Welcome from Arrow Function");

document.getElementById("startGame")!.addEventListener('click',startGames);