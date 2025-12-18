/**
 * User interface for better autocomplete
 */
interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

//created By Anusha
const user1: User = {id: 1,name: "Anusha", email: "anusha@example.com",isActive: true};
function userInfo(user1:User):void{
    console.log(`User Name: ${user1.name}`);
    console.log(`User Email: ${user1.email}`);
    console.log(`User ID: ${user1.id}`);
}

interface Meeting{
    meetID:number;
    meetName:string;
    meetPassword:string
}
function meetingDetails(meet:Meeting):void{
    console.log(`ID: ${meet.meetID}, Name: ${meet.meetName}, Password: ${meet.meetPassword}`);
}

meetingDetails({meetID:123, meetName:"Training", meetPassword:"1234567"});

enum LocatorStrategy {
    ID = 'id',
    CSS = 'css',
    XPATH = 'xpath',
    TEXT = 'text'
}
//created By Anusha
let csslocator:LocatorStrategy= LocatorStrategy.CSS;
let idlocator:LocatorStrategy= LocatorStrategy.ID;
let xpathlocator:LocatorStrategy= LocatorStrategy.XPATH;
let textlocator:LocatorStrategy= LocatorStrategy.TEXT;
