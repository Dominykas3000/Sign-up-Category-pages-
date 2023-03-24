import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import "./Form.css";
import { Typography } from "@mui/material";

function Select(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div className="form-control">
      {/* <label className="Box-label" htmlFor={name}>
        {label}
      </label> */}
      <Typography>{label} </Typography>
      <br />
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
