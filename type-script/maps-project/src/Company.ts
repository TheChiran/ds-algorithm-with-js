import { faker } from '@faker-js/faker';
import { Mappable } from './Mappable.interface';

export class Company implements Mappable{
  companyName:string;
  catchPhrase:string;
  color: string = 'green';
  location:{
    lat: number;
    lng: number;
  };

  constructor(){
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }

  markerContent(): string{
    return `
      <div>
      <h2>Company name: ${this.companyName}</h2>
      <h3>Catch Phrase: ${this.catchPhrase}</h3>
      </div>
    `;
  }

}