/**
 * https://petstore.swagger.io/
 * 
 * @author: Manikandan Selvam
 * @interface: Creating Models for petstore APIs
 */
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
/**
* @description: Display the values of the User interface
* @param user: contains values for the interface User
*/
function displayUser(user:User):void{
    console.log(`User Details: ${user.id}, ${user.username}, ${user.firstName}, ${user.lastName}, ${user.email}, ${user.password}, ${user.phone}, ${user.userStatus}`);
}
//intialize values for Users
let userDetails : User={
    id:101,
    username: "Manikandan Selvam",
    firstName: "Manikandan",
    lastName: "Selvam",
    email: "manikandanselvam@gmail.com",
    password: "123456",
    phone: "987456321",
    userStatus: 111
}
//calling displayUser function
displayUser(userDetails);