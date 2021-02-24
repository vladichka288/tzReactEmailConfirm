import React, { useEffect, useState } from "react";
import { FormName } from "../Registration/style";
import * as classes from "./style";
import message from "./message.svg";
import { useHistory } from "react-router";
import Form from "./Form/Form";
import { firebaseConfig } from "../../Functions/Verification";
import firebase from "firebase";
import { useCookie } from "../../Context/CookieContext";
export default function Confirm() {
  const { setCookie } = useCookie();
  const history = useHistory();
  const [user, setUser] = useState(() => {
    let userData = JSON.parse(localStorage.getItem("user"));
    if (userData != null && userData != undefined) {
      return { ...userData };
    }
  });
  const [timesLeft, setTimesLeft] = useState(() => {
    let userData = JSON.parse(localStorage.getItem("user"));
    if (userData != null && userData != undefined) {
      return (Date.now() - userData.date) / 1000;
    }
  });
  let redirect = null;
  const updateStartDate = () => {
    setUser((prevUser) => {
      localStorage.setItem(
        "user",
        JSON.stringify({ ...prevUser, date: Date.now() })
      );
      return { ...prevUser, date: Date.now() };
    });
  };
  useEffect(() => {
    let idInterval = setInterval(() => {
      if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      } else {
        firebase.app(); // if already initialized, use that one
      }
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          user.reload().then(() => {
            if (user.emailVerified) {
              user.getIdToken().then((token) => {
                setCookie();
                document.cookie = `token=${token} ;max-age=3600`;
              });
            }
          });
        }
      });
    }, 1000);
    return () => {
      clearInterval(idInterval);
    };
  }, []);
  useEffect(() => {
    if (user != null && user != undefined) {
      let idInterval = setInterval(() => {
        let seconds = (Date.now() - user.date) / 1000;
        setTimesLeft(seconds);
      }, 1000);
      return () => {
        clearInterval(idInterval);
      };
    } else {
      history.push("/postPitch");
    }
  }, [user]);

  return (
    <div className={classes.ConfirmContainer}>
      {redirect}

      <div className={classes.halfPart}>
        <div className={FormName}>Confirm account</div>
        <Form
          email={user.email}
          password={user.password}
          timesLeft={timesLeft}
          updateStartDate={updateStartDate}
        />
      </div>
      <img src={message}></img>
    </div>
  );
}
