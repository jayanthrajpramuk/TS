/**
 * Created by a028515 on 31-10-2017.
 */

class Utility {

    static getInputValue(elementId: string): string | undefined {

        let inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementId);
        if (inputElement.value === '') {
            return undefined;
        } else {
            return inputElement.value;
        }

    }

}
