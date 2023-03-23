import React from "react";
import Grid from "@mui/material/Grid";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl.js";
import { Button } from "@mui/material";
import "./Form.css";
function RegistrationForm(props) {
  const genderOptions = [
    { key: "Select Your Gender", value: "" },
    { key: "Female", value: "female" },
    { key: "Male", value: "male" },
    { key: "Prefer not to say", value: "non-disclosed" },
  ];

  const SeniorityOptions = [
    { key: "Select Your Seniority", value: "" },
    { key: "Intern", value: "Intern" },
    { key: "Junior", value: "Junior" },
    { key: "Mid", value: "Mid" },
    { key: "Senior", value: "Senior" },
    { key: "Prefer not to say", value: "non-disclosed" },
  ];

  const initialValues = {
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    age: "",
    gender: "",
    seniority: "",
    category: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Password must match")
      .required("Required"),
    name: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    age: Yup.string().required("Required"),
    gender: Yup.string().required("Required"),
    category: Yup.string().required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={props.onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <div
              style={{
                margin: " 0 auto",
                display: "flex",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <Grid container columns={{ xs: 2, sm: 3 }}>
                <Grid xs={1}>
                  <FormikControl
                    control="input"
                    type="text"
                    label="Name"
                    name="name"
                    variant="outlined"
                    color="primary"
                    fullWidth
                  />
                </Grid>
                <Grid xs={1}>
                  <FormikControl
                    control="input"
                    type="number"
                    label="Age"
                    name="age"
                  />
                </Grid>
                <Grid xs={1}>
                  <FormikControl
                    control="input"
                    type="password"
                    label="Password"
                    name="password"
                  />
                </Grid>
                <Grid xs={1}>
                  <FormikControl
                    control="input"
                    type="text"
                    label="Last Name"
                    name="lastName"
                  />
                </Grid>
                <Grid xs={1}>
                  <FormikControl
                    control="input"
                    type="email"
                    label="Email"
                    name="email"
                  />
                </Grid>

                <Grid xs={1}>
                  <FormikControl
                    control="input"
                    type="password"
                    label="Confirm Password"
                    name="confirmPassword"
                  />
                </Grid>
              </Grid>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignContent: "center",
              }}
            >
              <FormikControl
                control="select"
                label="Gender"
                name="gender"
                options={genderOptions}
              />

              <FormikControl
                control="select"
                label="Seniority"
                name="seniority"
                options={SeniorityOptions}
              />

              <FormikControl
                control="select"
                label="Category"
                name="category"
                options={props.categories}
              />
            </div>
            <Button
              style={{
                margin: "0 auto",
                display: "block",
                marginTop: "16px",
                boxShadow: "none",
                size: "large",
                height: "56px",
                width: "50%",
                borderRadius: "8px",
                backgroundColor: "#3f51b5",
                color: "black",
              }}
              variant="contained"
              type="submit"
              disabled={!formik.isValid}
            >
              Add new Employee
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default RegistrationForm;
