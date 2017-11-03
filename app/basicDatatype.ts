/**
 * Created by a028515 on 29-10-2017.
 */

// var , const , let variables

// void : no type.
// null , undefined
//never : which will never come.
// any : can be anything


// Union types
var unionType: string | number;
unionType = "string";
unionType = 9;

//Error here as well
/*console.log(someRandomStr1);
var someRandomStr1 = "Hello TS";*/


var someRandomStr = "Hello TS";
console.log(someRandomStr);


let someRandomStr2 = "Hello TS";
console.log(someRandomStr2);

const  constVar = "Hey"
console.log(constVar);



// trying to change the const var resulting in error
/*constVar = "abc";*/

// this gives error. Hoisting , TS concept

/*console.log(someRandomStr3);
let someRandomStr3 = "Hello TS";*/


// TYPE ASSERTION

let value : any = 5;
let convertedstr:string = (<number>value).toFixed(3); // type checking during operation

let convertedstr2:string = (value as number).toFixed(3); // style 2

// TYPE ANNOTATION FOR FUNCTION

function booringFun(variable1: any , variable2: any) {
    return "booring func"
}

// ? here implies it is optional
function withTypeAnnotation(variable1: number, varianle2?: string):string {
    return "withTypeAnnotation";
}

// DEFAULT INITALIZATION FOR PARAMETER

function defaultInit(greet: string = "Good Morninf"): void {
    console.log(greet);
}

defaultInit(); // good morning

defaultInit("Good Afternoon") // Good afternoon

// ARROW FUNCTIONS

let squareit = (x: number): number => x * x; // implicit return statement as its 1 line. no () as only 1 param

let adder = (a: number,b: number): number => a+b;

let multiline = (a: number, b: number): number => {
    return a+b*a+b;
}

let greet = (): string => { // () as no param
    return "Hello TS";
}

let scored = [80,90,81,92,39,91];
let highScores = [];

highScores = scored.filter((elem, index, scored) => {
                return elem > 90;
});

console.log(highScores);

// STATIC MEMBERS

class staticClassEx {
    public name: string;
    static _variable: string;

    constructor(){
        console.log("This is in Static Class ex")
    }


    static getNameStatic():string {
        return "cannot access this.name as name is instance variable"
    }

    getNameStatic():string {
        return this.name;
    }
}

staticClassEx._variable = "wow";
staticClassEx.getNameStatic();

let stInstance = new staticClassEx();
// stInstance._variable  => not


class parentEx extends  staticClassEx {
    readonly  name: string;
    constructor(inputName) {
        super();
        this.name = inputName;
        console.log(this.name);
    }

}

let pobj = new parentEx("Jayanth");



// PUZZLE / CONCEPT

var fuzzyName; // in JS , initially type will not be there. undefined. But in TS it will be assigned to any
var fuzzyName2 = "Fuzzy"; // here ts and js will be string
