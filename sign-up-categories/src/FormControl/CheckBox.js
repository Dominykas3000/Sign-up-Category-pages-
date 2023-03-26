import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import "./Form.css";
import { FormControl, FormControlLabel, Typography } from "@mui/material";
function CheckBox(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div className="form-control">
      
      <Typography>{label} </Typography>

      <FormControl>
        <Field name={name} {...rest}>
          {({ field }) => {
            return options.map((option) => {
              return (
                <React.Fragment key={option.key}>
                  <FormControlLabel
                    control={
                      <input
                        component={CheckBox}
                        type="checkbox"
                        id={option.value}
                        {...field}
                      
                        value={option.value}
                        checked={field.value.includes(option.value)}
                      />
                    }
                    label={option.key}
                  />
                </React.Fragment>
              );
            });
          }}
        </Field>
      </FormControl>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default CheckBox;
