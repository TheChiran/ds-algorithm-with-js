import {faker} from "@faker-js/faker";
import { Mappable } from "./Mappable.interface";

export class User implements Mappable{
  name: string;
  color: string = 'red';
  location: {
    lat: number;
    lng: number;
  };

  constructor(){
    this.name = faker.name.firstName('male');
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }

  markerContent(): string{
    return `User name: ${this.name}`;
  }
}