export interface SortableTables{
    getTitle():string;
    getDescription():string;
    getExampleData(tablename:number):SortTableUser[]; // 
    sortExample(tablename:number, column:string):string[]

}

interface SortTableUser {
    lname: string;
    fname: string;
    email: string;
    due: string;
}