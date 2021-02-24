import React from "react";
import {
  RegistrationContainer,
  FormName,
  SubmitButton,
} from "../Registration/style";
import { useCookie } from "../../Context/CookieContext";

export default function Home(props) {
  const { deleteCookie } = useCookie();
  const signOut = () => {
    deleteCookie();
    document.cookie = "token=null; max-age=0;";
  };

  return (
    <div className={RegistrationContainer}>
      <div className={FormName}>Home page</div>
      <button onClick={signOut} className={SubmitButton}>
        Sign out
      </button>
    </div>
  );
}
