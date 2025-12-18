//interface User
interface User
{
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    userStatus: number;
}

//Create an instance of a User object.
const user: User =
{
    id:123,
    username:"smithj",
    firstName:"John",
    lastName:"Smith",
    email:"smithj@example.com",
    password:"password123",
    phone:"123-456-7890",
    userStatus:1
}

//Logs the details of a user to the console in a formatted string.
function printUserInfo(user: User): void
{
    console.log(`User Details: 
        ID: ${user.id}
        Username:${user.username},
        First Name: ${user.firstName},
        Last Name: ${user.lastName},
        Email: ${user.email},
        Password: ${user.password},
        Phone: ${user.phone},
        User Status: ${user.userStatus}`);
}

// Execute the function to display the user information
printUserInfo(user);