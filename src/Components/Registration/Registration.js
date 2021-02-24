import React from "react";
import Form from "./Form/Form";
import { RegistrationContainer, FormName } from "./style";
export default function Registration() {
  return (
    <div className={RegistrationContainer}>
      <div className={FormName}>Create account</div>
      <Form />
    </div>
  );
}
