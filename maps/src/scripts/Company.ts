import faker from "faker"; // TODO: Install faker and its type defination (@types/faker)
import { Point } from "./Map";

export class Company implements Point {
    name: string;

    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.name = faker.company.companyName();

        this.location = {
            lat: faker.address.latitude(),
            lng: faker.address.longitude(),
        };
    }

    markerContent(): string {
        return `
            <div>
            <h3><b>Name</b>: ${this.name}</h3>
            <p><b>Latitude</b>: ${this.location.lat}</p>
            <p><b>Longitude</b>: ${this.location.lng}</p>
            </div>
            `;
    }
}
