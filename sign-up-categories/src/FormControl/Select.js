import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import "./Form.css";
import { Typography } from "@mui/material";

function Select(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div className="form-control">
      <Typography variant="h6"
        style={{
          margin: "5px",
          textAlign: "center"
      }}
      >{label} </Typography>
      <div className="box">
        <Field as="select" title="select" id={name} name={name} {...rest}>
          {options.map((option) => {
            return (
              <option key={option.key} value={option.value}>
                {option.key}
              </option>
            );
          })}
        </Field>
        <ErrorMessage name={name} component={TextError} />
      </div>
    </div>
  );
}

export default Select;
