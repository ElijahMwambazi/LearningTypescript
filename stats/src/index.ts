import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { HtmlReport } from "./reportTargets/HtmlReport";
// import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Summary";

const matchReader = MatchReader.fromCsv("football.csv");
const summary = Summary.summaryAnalysisWithHtmlReport("Man United");

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
