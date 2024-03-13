import Button from "../../ui/Button";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import styles from "./login.module.css";
import { useUser } from "../../context/UserContext";
import { useState } from "react";
// Code: Login page
function Register() {
  const [registerUser, setRegisterUser] = useState({});
  const { registerUser: submitUser } = useUser();
  function handleRegisterUser(e) {
    e.preventDefault();
    submitUser(registerUser)
    // console.log(registerUser);
  }
  return (
    <Form action="/login" onSubmit={handleRegisterUser}>
      <Input title="Username" type="text" name="username" placeholder="user123" onChange={e=> setRegisterUser({...registerUser, username: e.target.value})} value={registerUser.username} />
      <Input title="Email" type="email" name="email" placeholder="johndoe@email.com" onChange={e=> setRegisterUser({...registerUser, email: e.target.value})} value={registerUser.email} />
      <Input title="Password" type="password" name="password" placeholder="********" onChange={e=> setRegisterUser({...registerUser, password: e.target.value})} value={registerUser.password} />
      <Button>Register</Button>
    </Form>
  )
}



export default Register
