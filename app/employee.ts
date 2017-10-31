/**
 * Created by a028515 on 31-10-2017.
 */

interface Employee {
    name: string;
    age: number;
    greet: () => void;
}


class BC implements Employee {
    name: string;
    age: number;
    greet():void {
        console.log(this.name +":"+ this.age);
    }
    greetSecond = ():void => {
        console.log("greetSecond");
    }
    greet3():void {
        console.log("greetthird");
    }
}

let bcObj:BC =  new BC();
bcObj.greet();
