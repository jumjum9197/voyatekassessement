import React from "react";
import { Field, FormikProvider, FormikValues, useFormik } from "formik";
import { ReactComponent as Delete } from "../../assets/delete.svg";

import Button from "../../custom/button/button";

const DeleteContent = () => {


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
        <section className="w-full max-w-md mx-auto" >
            <p>This user and all associated data will be permanently removed. Do you wish to continue</p>
        
        
          <div className="flex justify-center mt-4 gap-4">
            <Button text="Cancel Action" className="w-full mt-4 py-4" />
            <Button iconBefore={<Delete/>} style={{color:'#FBEAE9'}} bgColor="#EB9B98" text="Yes, Delete" className="w-full mt-4 py-4 " />


          </div>
        </section>
    </main>
  );
};

export default DeleteContent;
