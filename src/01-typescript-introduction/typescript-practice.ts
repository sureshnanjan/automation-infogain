/**
 * User interface examples and usage demonstation
 */
interface User {
    id: number;
    first_name: string;
    last_name: string;
    email_id: string;
    isActive: boolean;
}

//created By Manjunath
const user1: User = {id: 1115102, first_name: "Manjunath", last_name: "Naik", email_id: "manjunath@gmail.com",
    isActive: true};
function userInfo(user:User):void{
    console.log(`User ID: ${user.id}`);
    console.log(`User Name: ${user.first_name} ${user.last_name}`);
    console.log(`User Email: ${user.email_id}`);
   
}
userInfo(user1);

interface Training{
    training_Topic:string;
    trainer_Cost:number;
    training_Details:string;
    getTrainingDetails(): string;
}

class AutomationTraining implements Training {
    constructor(public training_Topic: string, public trainer_Cost: number, public training_Details: string){}

    getTrainingDetails():string{
    return `Topic: ${this.training_Topic} Cost: ${this.trainer_Cost}
     Details: ${this.training_Details}`;
    }
}

const automationTraining = new AutomationTraining("Playwright", 10000, "Playwright training by Suresh Sir")
console.log(automationTraining.getTrainingDetails());


//enum execise
enum LocatorStrategy {
    ID = 'id',
    CSS = 'css',
    XPATH = 'xpath',
    TEXT = 'text'
}
//created By Manjunath
let csslocator:LocatorStrategy= LocatorStrategy.CSS;
let idlocator:LocatorStrategy= LocatorStrategy.ID;
let xpathlocator:LocatorStrategy= LocatorStrategy.XPATH;
let textlocator:LocatorStrategy= LocatorStrategy.TEXT;