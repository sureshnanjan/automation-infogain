import { HomePageOperations } from "@src/operations/HomePageOperations";
import { HomePage } from "@src/web-implementation/HomePage";
import { Page } from "@playwright/test";
import { Logger } from "./Logger";
import {parse} from 'csv-parse/sync';
import { promises as fs } from "fs";
import { readFileSync } from "fs";
import { join } from "path";

/**
 * Retrieves the Herokuapp application URL.
 * @returns {string} The base URL for the Heroku application used for testing environments.
 */
import { DynamicContentPageOperations } from "@src/operations/DynamicContentPageOperations";
import { DynamicContentPage } from "@src/web-implementation/DynamicContentPage";
export function getHerokuAppUrl(): string {
    // Env Files
    // URL Factory - testing , stshing, production, customer , 
    return 'https://the-internet.herokuapp.com/';
}

export async function getHerokuApp(page:Page): Promise<HomePageOperations> {
    // App Factory
    // How call a async factory method from here?
    return  HomePage.create(page);
    //app.navigate();
    //return app;

}

export async function ReadTheHugeDataFromExcel(){
    // Make a utility that can read csv or excel file and return data from coluns in sorted order
    // Implementation placeholder for reading Excel/CSV files
    // You can use libraries like 'xlsx' or 'csv-parser'
    // Example using xlsx:
    // const XLSX = require('xlsx');
    // const workbook = XLSX.readFile('file.xlsx');
    // const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    // const data = XLSX.utils.sheet_to_json(worksheet);
    // return data.sort((a, b) => a.columnName.localeCompare(b.columnName));
    //const dataTable =  
    const input = await fs.readFile('src/data/html-table-entries.csv')
    const records = parse(input, { bom: true, from:2,
  skip_empty_lines: true,  });
    //console.log(records)
    return records;
    
};

(async ()=>{
    //console.log(await ReadTheHugeDataFromExcel());
})();

const mydata = {}; 

interface SortTableUser {
  lname: string;
  fname: string;
  email: string;
  due: string;
}

/**
 * Type guard to validate User objects at runtime
 */
function isUser(value: any): value is SortTableUser {
  return (
    typeof value === "object" &&
    value !== null &&
    typeof value.lname === "string" &&
    typeof value.fname === "string" &&
    typeof value.email === "string" &&
    typeof value.due === "string"
  );
}

/**
 * Parse users from a JSON file
 */
export function ReadTheHugeDataFromJSON(filePath: string):SortTableUser[]{
  const raw = readFileSync(filePath, "utf-8");
  const data = JSON.parse(raw);
  //JSON.stringify(mydata);
  if (!Array.isArray(data)) {
    throw new Error("Invalid JSON format: expected an array");
  }
  const users: SortTableUser[] = [];

  for (const item of data) {
    if (!isUser(item)) {
      throw new Error(`Invalid user record: ${JSON.stringify(item)}`);
    }
    users.push(item);
  }

  return users;
}

// Example usage
const usersFile = join('src/data','sortable-tables-users.json');
// C:\Trainings-2025\infogain\automation-infogain\src\data\html-table-entries.csv
console.log(__dirname);
console.log(__filename);
const users = ReadTheHugeDataFromJSON(usersFile);
console.log(users);

export async function getDynamicContentPage(page:Page): Promise<DynamicContentPageOperations> {
    return  DynamicContentPage.create(page);
}