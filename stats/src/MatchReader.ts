import { dateStrintToDate } from "./utils";
import { MatchResult } from "./MatchResult";

interface DataReader {
    read(): void;
    data: string[][];
}

export class MatchReader {
    constructor(public reader: DataReader) {}
}
