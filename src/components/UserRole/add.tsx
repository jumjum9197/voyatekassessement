import * as Yup from "yup";
import { Field, FormikProvider, FormikValues, useFormik } from "formik";
import Input from "../../custom/input/input";
import Button from "../../custom/button/button";
import Select from "../../custom/select/select";
import { createData } from "../../request/request";
// import { createData } from "../../api"; // Import your API functions

const AddContent = () => {
  const validationRules = Yup.object().shape({
    Email: Yup.string().email("Invalid email").required("Email is required"),
    FullName: Yup.string().required("Full Name is required"),
    Role: Yup.string().required("Role is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  const formik = useFormik<FormikValues>({
    initialValues: {
      Email: "",
      FullName: "",
      Role: "",
      password: "",
    },
    onSubmit: async (data, { resetForm }) => {
      try {
        const response = await createData(data); // Create data using the API
        console.log('Data created successfully', response);
        resetForm();
      } catch (error) {
        console.error('Error creating data', error);
      }
    },
    validationSchema: validationRules,
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

          <Field
            as={Select}
            name="Role"
            placeholder="Select Role"
            label="Role"
          />
          
          <Field
            as={Input}
            name="password"
            placeholder="Create a Password for New User"
            displayInput="password"
            label="Create Password"
          />

          <div className="flex justify-center mt-4 gap-4">
            <Button text="Cancel Action" className="w-full mt-4 py-4 text-[#FBEAE9]" />
            <Button text="Save" className="w-full mt-4 py-4 text-[#FBEAE9]" />
          </div>
        </form>
      </FormikProvider>
    </main>
  );
};

export default AddContent;
