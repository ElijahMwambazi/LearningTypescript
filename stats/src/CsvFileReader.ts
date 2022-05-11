import fs from "fs";
import { dateStrintToDate } from "./utils";
import { MatchResult } from "./matchResult";

type MatchData = [Date, string, string, number, number, MatchResult, string];
export class CsvFileReader {
    data: MatchData[] = [];

    constructor(public fileName: string) {}

    read(): void {
        this.data = fs
            .readFileSync(this.fileName, {
                encoding: "utf-8",
            })
            .split("\n")
            .map(function (row: string): string[] {
                return row.split(",");
            })
            .map(function (row: string[]): MatchData {
                return [
                    dateStrintToDate(row[0]),
                    row[1],
                    row[2],
                    parseInt(row[3]),
                    parseInt(row[4]),
                    row[5] as MatchResult,
                    row[6],
                ];
            });
    }
}
