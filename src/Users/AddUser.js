import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";

const AddUser = (form) => {
  const [enteredUserName, setenteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const engelle = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }
    console.log(enteredUserName, enteredAge);
    setEnteredAge("");
    setenteredUserName("");
  };

  const userNameChange = (event) => {
    setenteredUserName(event.target.value);
  };

  const ageChange = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={engelle}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredUserName}
          onChange={userNameChange}
        />

        <label htmlFor="age"> Age (years)</label>
        <input id="age" type="number" value={enteredAge} onChange={ageChange} />
        <Button type="submit">Add User </Button>
      </form>
    </Card>
  );
};

export default AddUser;
