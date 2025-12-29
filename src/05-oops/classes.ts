import { features } from "process";

class SomeClass {
    // Members and methods
    field1: string;
    field2: number;

    constructor() {
        this.field1 = "";
        this.field2 = 0;
    }

    method1(): void {}
}
// Author
class Employee {
    // Members 
    public empid: number;
    private empname: string;
    private jposition: string; // job position
    //private // Encapsulation - Hidig implemantation Details
    // Access Modifiers - public, private, protected

    // Getters and Setters 

    get EmpId(){
        return this.empid
    }

    set EmpId(value: number){

        if(value > 10000){
            throw new Error("Invalid Range Can be only within 100000")
        }
        this.empid = value
    }

    public getEmpId(): number {
        return this.empid;
    }

    public getSalary(){

    }

}

class Human{
    color: string;
    nationality: string;
    name: string;
}

interface HumanCpability{
    eat();
    sleep();
    call();
}

class Female extends Human implements HumanCpability{
    eat() {
        throw new Error("Method not implemented.");
    }
    sleep() {
        throw new Error("Method not implemented.");
    }
    call() {
        throw new Error("Method not implemented.");
    }
    female_attribs: string;
    
}




class Male{
    male_attrib: string; 
};



//const mymale = new Male();
const myfemale:Human = new Female();
myfemale.color
const f1:Female = new Female();
//f1.
const f2:HumanCpability = new Female();
//myfemale.


// Automation Execute on all Browser
class Chrome implements Executable{
    execute() {
        throw new Error("Method not implemented.");
    }
}
class Edge implements Executable{
    execute() {
        throw new Error("Method not implemented.");
    }
}
class FF implements Executable{
    execute() {
        throw new Error("Method not implemented.");
    }
}
interface Executable{
    execute();
}

const browsers:Executable[] = [new Chrome(), new Edge(), new FF()]
// Execute Test Cases on all Browsers
browsers.forEach((a)=>{
    a.execute();
    
});

class B1{
    b1_value:
}
class B2{
    b2_value
}

interface I1{
    i1_behavipur();
}
interface I2{
    i2_behavior();
}


//Female - Employee, Mother, Friends, HRBehavioru, Programmer
// Human
// TypesScript or Java Script Strict OOPS
// Duck Typing / Loosely Types Language
class D1 extends B2 implements I1,I2{
    i2_behavior() {
        throw new Error("Method not implemented.");
    }
    i1_behavipur() {
        throw new Error("Method not implemented.");
    }
}

abstract class Species{
   abstract Eat(); // Abstract Thing Each implementation can differ
   Move(){}
   Sleep(){}
}

// An Interface is a pure abstract class
abstract class MyInterafce {
    abstract Method1();
    abstract Method2();
}

interface MyInterface1{
    Methodd();
    Method2();
}

class Dog extends Species{
    Eat() {
        throw new Error("Method not implemented.");
    }
}
class Cat extends Species{
    Eat() {
        console.log("Cat is eating fish");
    }
}
class Peacock extends Species{
    Eat() {
        throw new Error("Method not implemented.");
    }
}


const d1Inst:I2 = new D1();
//d1Inst.



// Consumer
const empsuresh = new Employee();
//empsuresh.empid = 200000000000;
empsuresh.EmpId = 3000000000;

const instance = new SomeClass();
instance.field1 = "value";
instance.field2 = 42;
instance.method1();

const mycoll = [];

class A{
    // Instance Members 
    public A_Public;
    private A_Private;
    protected A_Protected;
    constructor(){
       //this.

    }
    constructor(a:number, b:string){

    }

    static stat_member;

   
}

class D extends A{
    constructor(){
        super();
        // Derived Specific Tasls I do here
        this;
        
    }
  
    

}

const userInstance = new A(); // Creating and INstance
// A.stat_member = 
const derived = new D();
//derived.






