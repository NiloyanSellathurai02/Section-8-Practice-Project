import React, { useState, useRef } from "react";

import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [userInput, setUserInput] = useState("");
  const [userAge, setAgeInput] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(nameInputRef.current.value);
    if (userInput.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty value).",
      });
      return;
    }
    if (+userAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.onAddUser(userInput, userAge);
    setUserInput("");
    setAgeInput("");
  };

  const userNameChangeHandler = (event) => {
    setUserInput(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setAgeInput(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            onChange={userNameChangeHandler}
            value={userInput}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            onChange={ageChangeHandler}
            value={userAge}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
