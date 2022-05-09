class Vehicle {
    constructor(public color: string) {}

    public brakes = function (): boolean {
        return false;
    };

    public lights = function (): boolean {
        return true;
    };

    private drive = function (): void {
        console.log("vroom vroom");
    };

    protected honk = function (): void {
        console.log("beep beep");
    };

    public accessDrive = function (): void {
        this.drive();
    };

    public accessHonkV = function (): void {
        this.honk();
    };
}

class Car extends Vehicle {
    constructor(public wheels: number, color: string) {
        super(color);
    }

    public lights = function (): boolean {
        return false;
    };

    public accessHonkC = function (): void {
        this.honk();
    };
}

const vehicle = new Vehicle("orange");
console.log(vehicle.brakes);
console.log(vehicle.lights);
console.log(vehicle.accessDrive);
console.log(vehicle.accessHonkV);

console.log(">>>---------o---------<<<");

const car = new Car(5, "green");
console.log(car.brakes);
console.log(car.lights);
console.log(car.accessDrive);
console.log(car.accessHonkV);
console.log(car.accessHonkC);
