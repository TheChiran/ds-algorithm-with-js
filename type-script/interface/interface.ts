interface Reportable{
  summary(): string;
};

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(){
    return `Name: ${this.name}, Year: ${this.year}, Broken: ${this.broken}`;
  }
};

const softDrink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string{
    return `My drink has ${this.sugar} grams of sugar`;
  }
};

const printSummary = (item: Reportable): void=>{
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(softDrink);