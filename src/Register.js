import React from "react";

import RegisterForm from "./components/register-form";

function Register(props) {
  return (
    <>
      <h1>Your Application has been approved</h1>
      <p>Please register for a new account</p>
      {props.location.state && (
        <RegisterForm submission={props.location.state.submission} />
      )}
    </>
  );
}

export default Register;
