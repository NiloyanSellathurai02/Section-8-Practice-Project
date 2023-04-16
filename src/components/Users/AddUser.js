import React, { useState } from "react";

import Card from "../UI/Card";

import styles from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [userInput, setUserInput] = useState("");
  const [userAge, setAgeInput] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (userInput.trim().length === 0 || userAge.trim().length === 0) {
      return;
    }
    if (+userAge < 1) {
      return;
    }
    console.log(userInput, userAge);
    setUserInput("");
    setAgeInput("");
  };

  const userNameChangeHandler = (event) => {
    setUserInput(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setAgeInput(event.target.value);
  };
  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          onChange={userNameChangeHandler}
          value={userInput}
        />
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          onChange={ageChangeHandler}
          value={userAge}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
