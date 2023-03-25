import React from "react";
import RegistrationForm from "../FormControl/RegistrationForm";
import "./Pages.css";
import { Typography } from "@mui/material";

export default function SignUpPage(props) {
  return (
    <div className="reg-form-container">
      <Typography
        variant="h2"
        className="reg-form-title"
        sx={{
          color: "black",
        }}
      >
        Sign up a new employee and give a category (department) to be placed in
      </Typography>
      <div
        style={{
          paddingTop: "1.5em",
          margin: "15px",
        }}
      >
        <RegistrationForm
          onSubmit={props.onSubmit}
          categories={props.categories}
        />
      </div>
    </div>
  );
}
