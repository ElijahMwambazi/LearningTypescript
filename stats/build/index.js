"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
// Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader_1.CsvFileReader("football.csv");
// Create an instance of matchreader and pass in something satisfying the
//  the 'DataReader interface
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
const summary = Summary_1.Summary.summaryAnalysisWithHtmlReport("Man United");
summary.buildAndPrintReport(matchReader.matches);
