/**
 * Created by a028515 on 31-10-2017.
 */

class Developper {
    departmet: string;
    private _title: string;

    // this keyword is important

    // Property accessor methods : get , set
    get title(): string {
        return this._title;
    }

    set title(title: string){
        this._title = title.toUpperCase();
    }

    documentsRequired(document: String): void {
        console.log("Document"+document);
}
}
