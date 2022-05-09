"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
const faker_1 = __importDefault(require("faker")); // TODO: Install faker and its type defination (@types/faker)
class Company {
    constructor() {
        this.name = faker_1.default.company.companyName();
        this.location = {
            lat: faker_1.default.address.latitude(),
            lng: faker_1.default.address.longitude(),
        };
    }
    markerContent() {
        return `
            <div>
            <h3><b>Name</b>: ${this.name}</h3>
            <p><b>Latitude</b>: ${this.location.lat}</p>
            <p><b>Longitude</b>: ${this.location.lng}</p>
            </div>
            `;
    }
}
exports.Company = Company;
