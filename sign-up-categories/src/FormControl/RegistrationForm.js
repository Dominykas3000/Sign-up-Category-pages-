import React from "react";
import Grid from "@mui/material/Grid";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl.js";
import { Button, Paper } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import "./Form.css";
function RegistrationForm(props) {
  const genderOptions = [
    { key: "Female", value: "female" },
    { key: "Male", value: "male" },
    { key: "Prefer not to say", value: "non-disclosed" },
  ];

  const SeniorityOptions = [
    { key: "Intern", value: "Intern" },
    { key: "Junior", value: "Junior" },
    { key: "Mid", value: "Mid" },
    { key: "Senior", value: "Senior" },
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
    age: Yup.number()
      .required("Required")
      .min(18, "Employee must be at least 18 years old")
      .max(100, "Employee must be at most 100 years old"),
    gender: Yup.string().required("Required"),
    category: Yup.string().required("Required"),
    seniority: Yup.string().required("Required"),
  });

  let theme = createTheme();

  theme.typography.h3 = {
    fontSize: "1.5rem",
    "@media (min-width:800px)": {
      fontSize: "2.5rem",
    },
    "@media(max-width: 600px) ": {
      fontSize: "1rem",
    },

    [theme.breakpoints.up("md")]: {
      fontSize: "2.5rem",
    },
  };

  return (
    <Paper
      variant="outlined"
      elevation={24}
      sx={{
        backgroundColor: "#e8eae3",
        width: "100%",
        border: "1px solid #373833",
        borderRadius: "8px",
        boxShadow: "1px 8px 120px 31px rgba(55,56,51,0.30)",
      }}
    >
      <div
        style={{
          margin: "16px",
        }}
      >
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
                  <Grid container columns={{ xs: 2, sm: 2 }}>
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
                        type="text"
                        label="Last Name"
                        name="lastName"
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
                        type="email"
                        label="Email"
                        name="email"
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
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    alignItems: "center",
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
                    label="Department"
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
                    backgroundColor: "#f8445b",
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
      </div>
    </Paper>
  );
}

export default RegistrationForm;
