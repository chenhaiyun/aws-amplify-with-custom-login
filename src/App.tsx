import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Amplify, { Hub } from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const App: React.FC = (): JSX.Element => {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    Hub.listen("auth", (event) => {
      console.info("event:", event);
      if (event.payload.data.message) {
        alert(event.payload.data.message);
        return;
      } else {
        setCurrentUser(event.payload.data);
      }
    });
  }, []);
  return <div className="App">{currentUser ? <Home /> : <Login />}</div>;
};

export default App;
