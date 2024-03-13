import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import styles from "./login.module.css";
import { useUser } from "../../context/UserContext";
// Code: Login page
function Login() {
  const [loginUser, setLoginUser] = useState({});
  const { loginUser: submitUser } = useUser();
  function handleLoginUser(e) {
    e.preventDefault();
    submitUser(loginUser)
    }
  return (
    <Form action="/login" onSubmit={handleLoginUser}>
      <Input title="Email" type="email" name="email" placeholder="johndoe@email.com" value={loginUser.email} onChange={e=> setLoginUser({...loginUser, email: e.target.value})} />
      <Input title="Password" type="password" name="password" placeholder="********" value={loginUser.password} onChange={e=> setLoginUser({...loginUser, password: e.target.value})}/>
      <Button>Login</Button>
    </Form>
  )
}

export default Login
