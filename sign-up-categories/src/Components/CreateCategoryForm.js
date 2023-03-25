import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../FormControl/FormikControl.js";
import { Button } from "@mui/material";
function CreateCategoryForm(props) {
  const initialValues = {
    category: "",
  };

  const validationSchema = Yup.object({
    category: Yup.string().required("Please write a name for the Department"),
  });

  return (
    <div>
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
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "16px",
                  width: "100%",
                }}
              >
                <FormikControl
                  control="input"
                  type="text"
                  label="Department Name"
                  name="category"
                />
                <Button
                  style={{
                    margin: "0 auto",
                    display: "block",
                    marginTop: "16px",
                    boxShadow: "none",
                    size: "large",
                    height: "60px",
                    width: "75%",
                    borderRadius: "8px",
                    backgroundColor: "#f8445b",
                    color: "black",
                  }}
                  variant="contained"
                  type="submit"
                  disabled={!formik.isValid}
                >
                  Add new Department
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default CreateCategoryForm;
