import React, { useContext } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import validation from "./validation";
import ThemeContext from "../contexts/ThemeContext";

export default function Signup() {
  const{theme, setTheme} = useContext(ThemeContext)
  return (
    <div className={theme}>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
          passwordConfirm: "",
        }}
        onSubmit={(values) => {
          alert(JSON.stringify(values));
        }}
        validationSchema={validation}
      >
        <Form>
          <label htmlFor="email">Email</label>
          <Field id="email" name="email" placeholder="jane@acme.com" />
          <ErrorMessage name="email" component="div" />
          <br /> <br />
          <label htmlFor="password">Password</label>
          <Field id="password" name="password" type="password" />
          <ErrorMessage name="password" component="div" />
          <label htmlFor="passwordConfirm">Confirm Password</label>
          <Field id="passwordConfirm" name="passwordConfirm" type="password" />
          <ErrorMessage name="passwordConfirm" component="div" />
          <br />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}
