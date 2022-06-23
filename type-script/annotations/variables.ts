let apples: number = 5;

let speed: string = 'fast';
let hasName: boolean = true;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red','green','blue'];
let numbers: number[] = [1,2,3,4,5];

// classes
class Car{

}
let car: Car = new Car();

interface Point{
  x: number;
  y: number;
}
// Object literal
let point: {x: number;y: number;}={
  x: 10,
  y: 20
}

// Function
const logNumber = (i: number)=>{
  console.log(i)
}

let foundWord:boolean;