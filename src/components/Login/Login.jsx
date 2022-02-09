import React from "react";
import { NavLink } from "react-router-dom";
import { Form, Field } from 'react-final-form'


const LoginForm = (props) => {
  return (
      <div>
        <form action="">
          <div><input type="text" placeholder={"Login"}/></div>
          <div><input type="text" placeholder={"Password"}/></div>
          <div><input type={"checkbox"}/>remember me</div>
          <div><button>Login</button></div>
        </form>
      </div>
  );
};


const Login = (props) => {
  return (
      <div>
        <h1>Login</h1>
        <LoginForm />
      </div>
  );
};

export default Login;
