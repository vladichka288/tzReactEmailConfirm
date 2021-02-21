import React, { useState } from "react";
import { css } from "@emotion/css";
import * as classes from "./style.js";
var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default function Form() {
  const [passwordValidity, setPasswordValidity] = useState(false);
  const [emailValidity, setEmailValidity] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const changePasswordHandler = (event) => {
    setPassword(event.target.value);
    if (event.target.value < 8) {
      setPasswordValidity(false);
    } else {
      setPasswordValidity(true);
    }
  };
  const changeEmailHandler = (event) => {
    setEmail(event.target.value);
    if (!re.test(String(event.target.value).toLowerCase())) {
      setEmailValidity(false);
    } else {
      setEmailValidity(true);
    }
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (emailValidity && passwordValidity) {
      console.log("success");
    } else {
      console.log("bad");
    }
  };
  let passwordHintStyle = css`
    color: ${passwordValidity ? "rgba(37, 67, 83, 0.75)" : "#d54e4e;"};
  `;
  let InputField = css`
    width: 100%;
    padding: 10px 20px;
    font-weight: 500;
    font-size: 14px;
    color: rgba(37, 67, 83, 0.4);
    font-family: Montserrat;
    border: 0.5px solid #c7c7c7;
    box-sizing: border-box;
    border-radius: 3px;
    border: 2px solid ${emailValidity ? "" : " #d54e4e;"};
  `;
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
        <input
          value={email}
          onChange={changeEmailHandler}
          className={InputField}
          type="email"
          id="email"
        />
      </div>
      <div style={{ marginBottom: "30px" }}>
        <div>
          <label className={classes.Label} for="password">
            Password <text className={passwordHintStyle}>(min 8 symbols)</text>
          </label>
        </div>
        <input
          value={password}
          onChange={changePasswordHandler}
          className={classes.InputFieldPassword}
          type="password"
          id="password"
        />
      </div>
      <button onClick={submitHandler} className={classes.SubmitButton}>
        Create account
      </button>
    </form>
  );
}
