import fs from "fs";
export abstract class CsvFileReader<T> {
    data: T[] = [];

    constructor(public fileName: string) {}

    abstract mapRow(row: string[]): T;

    read(): void {
        this.data = fs
            .readFileSync(this.fileName, {
                encoding: "utf-8",
            })
            .split("\n")
            .map(function (row: string): string[] {
                return row.split(",");
            })
            .map(this.mapRow);
    }
}
