import React, { useRef } from "react";
import * as classes from "./style.js";

export default function Form() {
  const email = useRef();
  const password = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form className={classes.FormContainer}>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&display=swap');
      </style>

      <div style={{ marginBottom: "30px" }}>
        <div>
          <label className={classes.Label} for="email">
            Email
          </label>
        </div>
        <input className={classes.InputField} type="email" id="email" />
      </div>
      <div style={{ marginBottom: "30px" }}>
        <div>
          <label className={classes.Label} for="password">
            Password <text>(min 8 symbols)</text>
          </label>
        </div>
        <input className={classes.InputField} type="password" id="password" />
      </div>
      <button onClick={submitHandler} className={classes.SubmitButton}>
        Create account
      </button>
    </form>
  );
}
