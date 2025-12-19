interface User{
    id:number,
    username:string,
    firstName:string,
    lastName:string,
    email:string,
    password:string,
    phone:string,
    userStatus:number
}

// Displaying the values of the User interface
// user: contains values for the interface User

function displayUser(user:User):void{
    console.log(`User Details: ${user.id}, ${user.username}, ${user.firstName}, ${user.lastName}, ${user.email}, ${user.password}, ${user.phone}, ${user.userStatus}`);
}
//intialize values for Users
let userDetails : User={
    id:101,
    username: "Supraja Puligandala",
    firstName: "Supraja",
    lastName: "Puligandala",
    email: "suprajapuligandala@gmail.com",
    password: "test@123",
    phone: "9849253690",
    userStatus: 111
}
//calling displayUser function
displayUser(userDetails);