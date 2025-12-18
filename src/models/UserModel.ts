
/**
 * UserModel interface representing a user entity.
 * @interface UserModel
 */
interface UserModel {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    userStatus: number;
}

const userDetails: UserModel = {
    id: 101,
    username: "anushaRani",
    firstName: "Anusha",
    lastName: "Rani",
    email: "anusha@example.com", 
    password: "password123!!",
    phone: "123-456-7890",
    userStatus: 1
}
console.log(userDetails);