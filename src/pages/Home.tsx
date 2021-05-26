import React from "react";
import { Auth } from "aws-amplify";

const Home: React.FC = (): JSX.Element => {
  return (
    <header className="App-header">
      <p className="welcome">Welcome to React Amplify App</p>
      <div className="text-center">
        <button
          className="logout"
          onClick={() => {
            Auth.signOut();
            window.location.reload();
          }}
        >
          Sign Out
        </button>
      </div>
    </header>
  );
};

export default Home;
