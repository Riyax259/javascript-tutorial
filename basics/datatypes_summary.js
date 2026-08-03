//primitive and non primitive

//primitive(call by value) : string  , number , bool , null , undefined , symbol , bigint
const id= Symbol('123')
const anotherid=Symbol('123')

console.log( id);
console.log(anotherid);
console.log(id==anotherid);

const bign=199347390030123230948234n //bigint



//non-primitive (refernce type) :array , objects , functions

const heors= ["superman " , "ironman" , "thor"]; //array

//object
let myobj=
{
 name : "riya",
 age : 23,

}

const myfunction =function () {
    console.log("hello world");
    //function declarationas as a  variable
    //typeof is function or object function
}


//memory allocation : stack (primitve) or heap (non-primitve)




