import React from "react";
import { Field, FormikProvider, FormikValues, useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { App } from "antd";
import Input from "../../custom/input/input";
import Button from "../../custom/button/button";
import Select from "../../custom/select/select";

const AddContent = () => {

  const formik = useFormik<FormikValues>({
    initialValues: {
      ContentCategoryName: "",
    },
    onSubmit: (data, { resetForm }) => {
      // Handle form submission logic
    },
  });

  return (
    <main className="p-4">
      <FormikProvider value={formik}>
        <form className="w-full max-w-md mx-auto" onSubmit={formik.handleSubmit}>
          <Field
            as={Input}
            name="Email"
            placeholder="New User’s Email Address"
            displayInput="text"
            label="Email Address"
          />
          <Field
            as={Input}
            name="FullName"
            placeholder="New User’s Full Name"
            displayInput="text"
            label="Full Name"
          />

          <Select
            name="Role"
            placeholder="Select Role"
            label="Role"
          />

          <div className="flex justify-center mt-4">
            <Button text="Save" className="w-full mt-4 py-4" />
          </div>
        </form>
      </FormikProvider>
    </main>
  );
};

export default AddContent;
