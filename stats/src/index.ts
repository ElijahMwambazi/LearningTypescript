import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { HtmlReport } from "./reportTargets/HtmlReport";
// import { ConsoleReport } from "./reportTargets/ConsoleReport";
import {WinsAnalysis} from "./analyzers/WinsAnalysis"
import {Summary} from "./Summary";


// Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader("football.csv")

// Create an instance of matchreader and pass in something satisfying the
//  the 'DataReader interface
const matchReader = new MatchReader(csvFileReader)
matchReader.load()

const summary = new Summary(new WinsAnalysis("Man United"), new HtmlReport())
summary.builAndPrintReport(matchReader.matches)