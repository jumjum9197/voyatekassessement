import * as Yup from "yup";
import { Field, FormikProvider, FormikValues, useFormik } from "formik";
import Input from "../../custom/input/input";
import Button from "../../custom/button/button";
import Select from "../../custom/select/select";
import { notification } from "antd";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateData } from "../../request/request"; // Adjust import based on your actual API setup

const EditContent = () => {
  const queryClient = useQueryClient();

  
  const RoleOptions = [
    {
      name: "Admin",
      value: "Admin",
    },
    {
      name: "Lecturer",
      value: "Lecturer",
    },

  ];

  const RoleData: any =
  RoleOptions &&
  RoleOptions?.length > 0 &&
  RoleOptions?.map((item: any, index: number) => (
      <option value={item?.value} key={index}>
        {item?.name}
      </option>
    ));

  const validationRules = Yup.object().shape({
    Email: Yup.string().email("Invalid email").required("Email is required"),
    FullName: Yup.string().required("Full Name is required"),
    Role: Yup.string().required("Role is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });
  

  const updateUserRoleCall = async (payload: any) => {
    const url = '/api/users/:id'; // Adjust URL according to your API endpoint
    return await updateData(url, payload); // Use your updateData function
  };
  
  const updateUserRoleMutation = useMutation({
    mutationFn: updateUserRoleCall,
    mutationKey: ["edit-UserRole"],
    onSuccess: () => {
      notification.success({
        message: "Success",
        description: "User role updated successfully",
      });
      queryClient.refetchQueries({ queryKey: ["get-all-category-lecturer-id"] });
    },
    onError: () => {
      notification.error({
        message: "Error",
        description: "An error occurred while updating user role",
      });
    },
  });

  const formik = useFormik<FormikValues>({
    initialValues: {
      Email: "",
      FullName: "",
      Role: "",
      password: "",
    },
    onSubmit: (data, { resetForm }) => {
      updateUserRoleMutation.mutate(data);
      resetForm();
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
            placeholder="User’s Email Address"
            displayInput="text"
            label="Email Address"
          />
          <Field
            as={Input}
            name="FullName"
            placeholder="User’s Full Name"
            displayInput="text"
            label="Full Name"
          />

          <Field
            as={Select}
            name="Role"
            placeholder="Select Role"
            label="Role"
            options={RoleData}
          />

          <Field
            as={Input}
            name="password"
            placeholder="Create a Password for User"
            displayInput="password"
            label="Create Password"
          />

          <div className="flex justify-between mt-4 gap-4">
            <Button text="Cancel Action" className="w-full mt-4 py-4 text-[#FBEAE9]" />
            <Button type="submit" text="Update User" className="w-full mt-4 py-4 text-[#FBEAE9]" />
          </div>
        </form>
      </FormikProvider>
    </main>
  );
};

export default EditContent;
