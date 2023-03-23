import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import "./Form.css";
function TextArea(props) {
  const { label, name, ...rest } = props;
  return (
    <div className="form-control">
      <label className="Box-label" htmlFor={name}>
        {label}
      </label>
      <br />
      <Field as="textarea" id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default TextArea;
