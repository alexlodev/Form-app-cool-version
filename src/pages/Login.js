import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import FirebaseApp from "../constants/base";
import { AuthContext } from "../constants/auth";
import "./styles/login.css";
import logo from "../assets/logo.svg";


//////Login page////////


const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await FirebaseApp.auth().signInWithEmailAndPassword(
          email.value,
          password.value
        );
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className="loginWrapper">
      <div className="loginContein">
        <img className="logo" src={logo} alt=""></img>
        <form onSubmit={handleLogin} name="loginForm" className="Login-form">
          <input
            id="mailLogin"
            type="text"
            name="email"
            placeholder="Correo eletrónico"
          ></input>{" "}
          <br />
          <input
            id="mailPassword"
            type="password"
            name="password"
            placeholder="Contraseña"
          ></input>
          <br />
          <button className="buttonLogin" type="submit">
            Entrar{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default withRouter(Login);
