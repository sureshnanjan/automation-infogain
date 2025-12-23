enum UserStatus{
    ACTIVE=1,
    INACTIVE=2
}
interface User {
    id: number;
    userName: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    userStatus: UserStatus;
  }

  const user1={
    id:10,
    userName:"ammy",
    firstName:"Amol",
    lastName:"Ledaskar",
    email:"ledaskar@gmail.com",
    password:"hasnjh@jkd",
    phone:"+919876543210",
    userStatus:UserStatus.ACTIVE
  }

  console.log(user1)