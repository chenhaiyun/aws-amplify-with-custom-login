import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';

const Login: React.FC = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("login");

  const handleSignIn = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (!email) {
      alert("Email Required");
      return;
    }
    if (!password) {
      alert("Password Required");
      return;
    }
    const reponse = Auth.signIn(email, password);
    console.info("reponse:", reponse);
  };

  const handleSignUp = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (!email) {
      alert("Email Required");
      return;
    }
    if (!password) {
      alert("Password Required");
      return;
    }
    const reponse = Auth.signUp(email, password);
    console.info("reponse:", reponse);
  };

  return (
    <div>
      <div className="customer-login">
        <h3>Amplify Custom Login Demo</h3>
        <div className="login-label">User Email:</div>
        <div>
          <input
            className="login-input"
            type="text"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div className="login-label">Password:</div>
        <div>
          <input
            className="login-input"
            type="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <div>
          {type === "login" && (
            <button className="login-button" onClick={handleSignIn}>
              Click To Sign In
            </button>
          )}
          {type === "signup" && (
            <button className="login-button" onClick={handleSignUp}>
              Click To Sign Up
            </button>
          )}
          {type === "login" && (
            <div className="text-right mt-5">
              <span>No account?</span>
              <span
                className="link"
                onClick={() => {
                  setType("signup");
                }}
              >
                Sign Up
              </span>
            </div>
          )}
          {type === "signup" && (
            <div className="text-right mt-5">
              <span>Have a account?</span>
              <span
                className="link"
                onClick={() => {
                  setType("login");
                }}
              >
                Click To Sign In
              </span>
            </div>
          )}
          <div className="or">
            <span>OR</span>
          </div>
          <button
            className="login-button"
            onClick={() => {
              Auth.federatedSignIn({
                provider: CognitoHostedUIIdentityProvider.Facebook,
              });
            }}
          >
            Sign In With Facebook
          </button>

          <button
            className="login-button"
            onClick={() => {
              Auth.federatedSignIn();
            }}
          >
            Sign In With Fed
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
