import React, { useState, useEffect } from "react";
import * as classes from "./style.js";
import firebase from "firebase";
import { firebaseConfig } from "../../../Functions/Verification";
export default function Form(props) {
  const [resendAllow, setResendAllow] = useState(false);
  const resendHandler = (event) => {
    event.preventDefault();
    if (resendAllow) {
      if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      } else {
        firebase.app(); // if already initialized, use that one
      }
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          if (user.emailVerified == false) {
            user.sendEmailVerification();
          }
        }
      });
      props.updateStartDate();
    }
  };
  useEffect(() => {
    if (props.timesLeft > 60) {
      setResendAllow(true);
    } else {
      setResendAllow(false);
    }
  }, [props.timesLeft]);

  return (
    <form className={classes.FormContainer}>
      <div className={classes.Label}>
        Please confirm your email by clicking on the link in the confirmation
        email that we sent to{" "}
        <text style={{ color: "rgba(37, 67, 83, 0.75)" }}>{props.email}</text>
      </div>
      <button
        onClick={resendHandler}
        style={{ marginBottom: "15px" }}
        className={classes.SubmitButton}
      >
        {resendAllow
          ? "Resend"
          : `Resend in ${Math.floor(60 - props.timesLeft)}s`}
      </button>
      <div className={classes.SignOut}>Sign out</div>
    </form>
  );
}
