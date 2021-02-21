import React from "react";
import Form from "./Form/Form";
import { RegistrationContainer,FormName } from "./style";
export default function Registration() {
  return (
    <div className={RegistrationContainer}>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&display=swap');
      </style>
      <div className={FormName}>Create account</div>
      <Form />
    </div>
  );
}
