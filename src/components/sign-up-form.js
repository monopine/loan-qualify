import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import mockAPI from "./mock-api";

const SignupSchema = Yup.object().shape({
  purchasePrice: Yup.number()
    .min(100, "Purchase Price must be at least $100")
    .max(1000000, "Purchase Price must be less than $1,000,000")
    .typeError("Purchase price must be a number (no special characters)")
    .positive("Price must be greater than zero")
    .required("Please enter a purchase price"),
  autoMake: Yup.string()
    .max(30, "Exceeded field limit")
    .required("Please enter an auto make"),
  autoModel: Yup.string()
    .max(30, "Exceeded field limit")
    .required("Please enter an auto model"),
  yearlyIncome: Yup.number()
    .typeError("Income must be a number (no special characters)")
    .positive("Income must be more than zero")
    .required("Please enter your yearly income"),
  creditScore: Yup.number()
    .min(300, "Credit Score must be at least 300")
    .max(850, "Credit Score must not exceed 850")
    .typeError("Credit score must be a number (no special characters)")
    .required("Please enter your credit score")
});

function SignUpForm() {
  return (
    <>
      <Formik
        initialValues={{
          purchasePrice: "",
          autoMake: "",
          autoModel: "",
          yearlyIncome: "",
          creditScore: ""
        }}
        validationSchema={SignupSchema}
        onSubmit={submittal => {
          mockAPI(submittal);
        }}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ errors, touched, validateForm }) => (
          <Form className="signup-form">
            <div className="field-group">
              <label htmlFor="purchasePrice">Auto Purchase Price</label>
              <div
                className={`-currency ${
                  errors.purchasePrice && touched.purchasePrice ? " -error" : ""
                }`}
              >
                <Field
                  id="purchasePrice"
                  name="purchasePrice"
                  placeholder="15000"
                  type="text"
                />
              </div>
              {errors.purchasePrice && touched.purchasePrice && (
                <span className="error">{errors.purchasePrice}</span>
              )}
            </div>
            <div className="field-group">
              <label htmlFor="autoMake">Auto Make</label>
              <div
                className={errors.autoMake && touched.autoMake ? "-error" : ""}
              >
                <Field
                  id="autoMake"
                  name="autoMake"
                  placeholder="Toyota"
                  type="text"
                />
              </div>
              {errors.autoMake && touched.autoMake && (
                <span className="error">{errors.autoMake}</span>
              )}
            </div>
            <div className="field-group">
              <label htmlFor="autoModel">Auto Model</label>
              <div
                className={
                  errors.autoModel && touched.autoModel ? "-error" : ""
                }
              >
                <Field
                  id="autoModel"
                  name="autoModel"
                  placeholder="Camry"
                  type="text"
                />
              </div>
              {errors.autoModel && touched.autoModel && (
                <span className="error">{errors.autoModel}</span>
              )}
            </div>
            <div className="field-group">
              <label htmlFor="yearlyIncome">Yearly Income</label>
              <div
                className={`-currency ${
                  errors.yearlyIncome && touched.yearlyIncome ? " -error" : ""
                }`}
              >
                <Field
                  id="yearlyIncome"
                  name="yearlyIncome"
                  placeholder="50000"
                  type="number"
                />
              </div>
              {errors.yearlyIncome && touched.yearlyIncome && (
                <span className="error">{errors.yearlyIncome}</span>
              )}
            </div>
            <div className="field-group">
              <label htmlFor="creditScore">Credit Score</label>
              <div
                className={
                  errors.creditScore && touched.creditScore ? "-error" : ""
                }
              >
                <Field
                  id="creditScore"
                  name="creditScore"
                  placeholder="600"
                  type="number"
                />
              </div>
              {errors.creditScore && touched.creditScore && (
                <span className="error">{errors.creditScore}</span>
              )}
            </div>
            <p className="form-copy">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores autem in illum.
            </p>
            <button type="submit" onClick={() => validateForm()}>
              Apply
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default SignUpForm;
