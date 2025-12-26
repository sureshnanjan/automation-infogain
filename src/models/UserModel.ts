
/**
 * UserModel interface representing UserModel section in petstore.swagger.
 * @interface UserModel
 */
enum UserStatus {
    Inactive = 0,
    Active = 1
}
interface UserModel {
    id: number;
    username: string;
    first_Name: string;
    last_Name: string;
    email: string;
    password: string;
    phone: string;
    user_Status: UserStatus;
}

const newUser: UserModel = {
    id: 101,
    username: "Mnaik",
    first_Name: "Manjunath",
    last_Name: "Naik",
    email: "manjunath@xyz.com", 
    password: "Pa$$word@123",
    phone: "123-456-7890",
    user_Status: UserStatus.Active
}

console.log(newUser);