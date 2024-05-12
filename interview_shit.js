// Primitive Data Type (Value Type)
// 7 types : strings,number,boolean,null,Undefined,Symbol,BigInt 
// REference Typr data type
// Arrays ,Objects and Functions
const hero = ["Shaktimaan","Nagraj"];
console.log(hero);

// Memory and Threads
// there are two types of memory -> Stack and Heap
// stack -> primitive you get a copy 
// Heap -> reference yopu get (HEAP Type memo)

// Example of by copy 

let nameOne = "nishopie"
let namecpy = nameOne
namecpy = "notnishu"
console.log(nameOne)
console.log(namecpy)

// example of by reference 
 let userOne = {
    naam : "Atankwadi-nishu"
 }
 let userTwo = userOne;
 userTwo.naam = "GoodBoiNishu"
 console.log(userOne.naam);
 console.log(userTwo.naam);

