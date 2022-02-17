import { FormEvent, useContext } from "react";

import { Input, Button } from "../components";
import { AuthContext } from "../context";

export function Login() {
  const { setIsAuth } = useContext(AuthContext);

  function login(e: FormEvent) {
    e.preventDefault();

    setIsAuth(true);

    localStorage.setItem('auth', 'true');
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={login}>
        <Input type="text" placeholder="Login" />
        <Input type="password" placeholder="password" />
        <Button>Login</Button>
      </form>
    </>
  );
}
