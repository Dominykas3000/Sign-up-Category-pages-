import React from "react";
import { Field } from "formik";
import "./Form.css";
import { TextField } from "formik-material-ui";
function Input(props) {
  const { label, name, ...rest } = props;
  return (
    <div className="form-control">
      <Field
        component={TextField}
        variant="outlined"
        sx={{ width: "100%", pb: "26px" }}
        placeholder={label}
        fullWidth
        id={name}
        name={name}
        {...rest}
      />
      {/* <ErrorMessage name={name} component={TextError} /> */}
    </div>
  );
}

export default Input;
