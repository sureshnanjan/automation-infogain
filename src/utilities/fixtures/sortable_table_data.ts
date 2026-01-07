const table_data = [{fname:'',lname:'',email:'',due:''}];

interface Employee{
    fname,
    lname,
    email,
    Due
};

export class TableData{
    entries:Employee[]
    constructor(){
        // This population can be from CSV
        // JSON
        this.entries = [{fname:'john',lname:'john',email:'email@email.com',Due:100},
            {fname:'john',lname:'john',email:'email@email.com',Due:100},
            {fname:'john',lname:'john',email:'email@email.com',Due:100},
            {fname:'john',lname:'john',email:'email@email.com',Due:100}]
    }

    getRow(){}
    getSortedColumns(name:string):string[]{
        return [];
    }

}