import { Company } from "./Company";
import {User} from "./User";
import { CustomMap } from "./CustomMap";

const user = new User();
const company = new Company();
const mapElement:HTMLElement = document.getElementById('map')!; // ! -> here is non-null assertion
const customMap = new CustomMap(mapElement);

customMap.addMarker(user);
customMap.addMarker(company);
