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
        Sign up a new employee 
      </Typography>
      <div className="paper-container">
        <RegistrationForm
          onSubmit={props.onSubmit}
          categories={props.categories}
        />
      </div>
    </div>
  );
}
