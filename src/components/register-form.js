import React from "react";

import { Formik, Form, Field } from "formik";

import * as Yup from "yup";

const RegisterSchema = Yup.object().shape({
  username: Yup.string()
    .min(8, "Username must be at least 8 characters")
    .max(36, "Username can't exceed 36 characters")
    .typeError("Username must contain letters")
    .required("Please enter a username"),
  password: Yup.string()
    .min(
      8,
      "Password must contain at least 8 letters, one number, and one special character"
    )
    .max(30, "Exceeded field limit")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Password must contain at least 8 letters, one number, and one special character"
    )
    .required("Please enter passsword"),
  confirmPassword: Yup.string()
    .min(
      8,
      "Password must contain at least 8 letters, one number, and one special character"
    )
    .max(30, "Exceeded field limit")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Password must contain at least 8 letters, one number, and one special character"
    )
    .required("Please enter passsword")
    .test("passwords-match", "Passwords must match", function(value) {
      return this.parent.password === value;
    })
});

function registerForm(props) {
  function submitResponse(submission) {
    // To keep things simple, let's just log the submission and the initial application data, to the console
    const applicationData = {
      application: props,
      registration: submission
    };

    console.table(applicationData);
  }

  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
        confirmPassword: ""
      }}
      validationSchema={RegisterSchema}
      onSubmit={submittal => {
        submitResponse(submittal);
      }}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {({ errors, touched, validateForm }) => (
        <Form className="qualification-form">
          <div className="field-group">
            <label htmlFor="username">Username</label>
            <div
              className={errors.username && touched.username ? " -error" : ""}
            >
              <Field
                id="username"
                name="username"
                placeholder="username"
                type="text"
              />
            </div>
            {errors.username && touched.username && (
              <span className="error">{errors.username}</span>
            )}
          </div>
          <div className="field-group">
            <label htmlFor="password">Password</label>
            <div
              className={errors.password && touched.password ? "-error" : ""}
            >
              <Field
                id="password"
                name="password"
                placeholder="password"
                type="text"
              />
            </div>
            {errors.password && touched.password && (
              <span className="error">{errors.password}</span>
            )}
          </div>

          <div className="field-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div
              className={
                errors.confirmPassword && touched.confirmPassword
                  ? "-error"
                  : ""
              }
            >
              <Field
                id="confirmPassword"
                name="confirmPassword"
                placeholder="confirm password"
                type="text"
              />
            </div>
            {errors.confirmPassword && touched.confirmPassword && (
              <span className="error">{errors.confirmPassword}</span>
            )}
          </div>

          <p className="form-copy">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            autem in illum.
          </p>
          <button type="submit" onClick={() => validateForm()}>
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default registerForm;
