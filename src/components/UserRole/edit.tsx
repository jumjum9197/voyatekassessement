import * as Yup from "yup";
import { Field, FormikProvider, FormikValues, useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import Input from "../../custom/input/input";
import Button from "../../custom/button/button";
import Select from "../../custom/select/select";
import { notification } from "antd";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import request from "../../request/request";

const EditContent = () => {

    const queryClient = useQueryClient();

  const validationRules = Yup.object().shape({
    Email: Yup.string().email("Invalid email").required("Email is required"),
    FullName: Yup.string().required("Full Name is required"),
    Role: Yup.string().required("Role is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });
  
   const CreateUserRoleCall = async (payload: any) => {
    const url ='/api/users/:id';
    return await request.put(url,payload);
  };
  
    const UploadUserRoleMutation = useMutation({
    mutationFn: CreateUserRoleCall,
    mutationKey: ["edit-UserRole"],
  });


  const UploadUserRoleHandler = async (
    data: FormikValues,
  ) => {
    const uploadContent = {
        Email: data?.Email,
      FullName: data?.FullName,
      Role: data?.Role,
      password: data?.password,
    
    };


    try {
      await UploadUserRoleMutation.mutateAsync(uploadContent, {
        onSuccess: () => {
          notification.success({
            message: "Success",
            description: data.Message,
          });
          queryClient.refetchQueries({ queryKey: ["get-all-category-lecturer-id"] });
        },
      });
    } catch (error: any) {
      notification.error({
        message: "Error",
        description: "An error occurred",
      });
    }
  };

  const formik = useFormik<FormikValues>({
    initialValues: {
      Email: "",
      FullName: "",
      Role: "",
      password: "",
    },
    onSubmit: (data, { resetForm }) => {
      // Handle form submission logic
      UploadUserRoleHandler(data)
      console.log(data);
      resetForm();
    },
    validationSchema: validationRules,
  });

 

  return (
    <main className="p-4">
      <FormikProvider value={formik}>
        <form
          className="w-full max-w-md mx-auto"
          onSubmit={formik.handleSubmit}
        >
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

          <Select name="Role" placeholder="Select Role" label="Role" />

          <div className="flex justify-center mt-4">
            <Button text="Update User" className="w-full mt-4 py-4" />
          </div>
        </form>
      </FormikProvider>
    </main>
  );
};

export default EditContent;
