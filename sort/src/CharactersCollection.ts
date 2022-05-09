export class CharactersCollection {
    constructor(public data: string) {}

    get length(): number {
        return this.data.length;
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        return (
            this.data[leftIndex].toLowerCase() >
            this.data[rightIndex].toLowerCase()
        );
    }

    swap(leftIndex: number, rightIndex: number): void {
        let charaters = this.data.split("");

        [charaters[leftIndex], charaters[rightIndex]] = [
            charaters[rightIndex],
            charaters[leftIndex],
        ];

        this.data = charaters.join("");
    }
}
