import "./App.css";
import React, { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  let welcomeMessage = `Welcome to the App, hope you have a good time, ${firstName} ${middleName} ${lastName}!`;

  return (
    <>
      {welcomeMessage}
      <form action="/submit" method="POST">
        {/* input field for first name */}
        <input
          type="text"
          name="firstName"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        {/* input field for middle name */}
        <input
          type="text"
          name="middleName"
          onChange={(e) => {
            setMiddleName(e.target.value);
          }}
        />
        {/* input field for last name */}
        <input
          type="text"
          name="lastName"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
      </form>
    </>
  );
}

export default App;
