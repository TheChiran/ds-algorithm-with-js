const carMakers: string[] = ['Ford','toyota','chevy'];
const dates: Date[] = [new Date(), new Date()];

const carsByMake: string[][] = [
  ['f150'],
  ['corolla'],
  ['camaro']
];

// Help with inference when extracting values
const carNew: string = carMakers[0];


// Help with 'map'

carMakers.map((car: string): string=>{
  return car.toUpperCase();
});

// Flexible types
const importantDates: (string| Date)[] = [new Date(), '2030-10-10'];

// Tuples ===================>
