import fs from "fs";
import { OutputTarget } from "../Summary";

export class HtmlReport implements OutputTarget {
  print(report: string): void {
    const html = `
            <div>
                <h1>Analsis Output:</h1>
                <div>${report}</div>
            </div>
        `;

    fs.writeFileSync("report.html", html);
    console.log("Html report created successfully");
  }
}
