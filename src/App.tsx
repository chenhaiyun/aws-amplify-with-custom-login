import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Amplify, { Auth, Hub } from "aws-amplify";

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const App: React.FC = (): JSX.Element => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const getUser = async () => {
    setLoading(true);
    try {
      const user = await Auth.currentAuthenticatedUser();
      if (user) {
        setCurrentUser(user);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    Hub.listen("auth", (event) => {
      console.info("event:", event);
      if (event?.payload?.data?.message) {
        alert(event?.payload?.data?.message);
        return;
      } else {
        getUser();
      }
    });
  }, []);

  if (loading) {
    return <div className="loading">Loading</div>;
  }
  return <div className="App">{currentUser ? <Home /> : <Login />}</div>;
};

export default App;
