class Vehicle{
  private _color: string = 'Silver';
  // constructor(public color:string){
  //   this.color = color;
  // }
  public setColor(color: string){
    this._color = color;
  }

  public getColor(){
    return this._color;
  }

  public honk(){
    console.log('beep');
  }
}

class Car extends Vehicle{
  private drive(): void {
    console.log('vroom...peep peep...')
  }

  public starDrivingProcess():void{
    this.drive();
  }

  public summary(){
    console.log(`Color: ${this.getColor()}`);
  }
}

const car = new Car();
car.setColor('orange');
car.starDrivingProcess();
car.honk();
car.summary();