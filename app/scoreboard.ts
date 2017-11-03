/**
 * Created by a028515 on 31-10-2017.
 */
///<reference path="result.ts"/>


class ScoreBoard {
    private results: Results[] = [];

    addResult(newResult:Results){
        this.results.push(newResult);
    }

    updateScoreBoard(): void {
        let output = "<h2>Score Board</h2>";
        for(let i=0; i<=this.results.length; i++){
            let result: Results = this.results[i];
            output = output + "<h4>";
            output = output +  result.playerName + ":"+result.problemCount+":"+result.score;
            output = output + "<h4>";

            let scoreElem: HTMLElement = <HTMLElement>document.getElementById("scores");
            scoreElem.innerText = output;

        }
}
}