import { User } from "./User";
import { Company } from "./Company";
import { Map } from "./Map";

const user = new User();
const company = new Company();
const map = new Map({ divId: "map" });

map.addMarker(user);
map.addMarker(company);
