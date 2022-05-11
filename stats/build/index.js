"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const matchResult_1 = require("./matchResult");
const reader = new CsvFileReader_1.CsvFileReader("football.csv");
reader.read();
let manUnitedWins = 0;
for (let match of reader.data) {
    if (match[1] === "Man United" && match[5] === matchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === "Man united" && match[5] === matchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
