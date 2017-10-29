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

function booringFun(variable1 , variable2) {
    return "booring func"
}

// ? here implies it is optional
function withTypeAnnotation(variable1: number, varianle2?: string):string {
    return "withTypeAnnotation";
}