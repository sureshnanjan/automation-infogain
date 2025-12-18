enum UserStatus{
    ACTIVE=1,
    INACTIVE=2
}
interface User {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    userStatus: UserStatus;
  }

  const user1={
    id:10,
    userName:"MAP",
    firstName:"Mahantesh",
    lastName:"Pujari",
    email:"M@gmail.com",
    password:"MAP4203",
    phone:"+91-4545454545",
    userStatus:UserStatus.ACTIVE
  }

  console.log(user1);