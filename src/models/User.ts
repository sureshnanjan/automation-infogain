export interface User {
  id: number;
  username:string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  userStatus: number; // user status as int
}
function displayUser(user:User):void{
    console.log(`User Details: 
        ${user.id}, 
        ${user.username}, 
        ${user.firstName},
        ${user.lastName}, 
        ${user.email},
        ${user.password}, 
        ${user.phone}, 
        ${user.userStatus}`);
}
//intialize values for Users
let userDetails : User={
    id:117780,
    username: "Karthikapriya L",
    firstName: "Karthikapriya",
    lastName: "L",
    email: "karthikapriya.l@gmail.com",
    password: "@07Mithul",
    phone: "9092724267",
    userStatus: 200
}
//calling displayUser function
displayUser(userDetails);