import React, { useState } from "react";
import { Auth } from "aws-amplify";

const Login: React.FC = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("login");

  const handleSignIn = async (event: React.SyntheticEvent) => {
    console.info("event:", event);
    event.preventDefault();
    const reponse = Auth.signIn(email, password);
    console.info("reponse:", reponse);
  };

  const handleSignUp = async (event: React.SyntheticEvent) => {
    console.info("event:", event);
    event.preventDefault();
    const reponse = Auth.signUp(email, password);
    console.info("reponse:", reponse);
  };

  return (
    <div>
      <div className="customer-login">
        <div>User Email:</div>
        <div>
          <input
            type="text"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div>Password:</div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <div>
          {type === "login" && (
            <span
              onClick={() => {
                setType("signup");
              }}
            >
              Click To SignUp
            </span>
          )}
          {type === "signup" && (
            <span
              onClick={() => {
                setType("login");
              }}
            >
              Click To Login
            </span>
          )}
          {type === "login" && (
            <button onClick={handleSignIn}>Click To Login</button>
          )}
          {type === "signup" && (
            <button onClick={handleSignUp}>Click To SignUP</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
