import React from "react";
import { Field, FormikProvider, FormikValues, useFormik } from "formik";
import { ReactComponent as DeleteIcon } from "../../assets/delete.svg";

import Button from "../../custom/button/button";
import { notification } from "antd";

const DeleteContent = () => {
  const formik = useFormik<FormikValues>({
    initialValues: {
      ContentCategoryName: "",
    },
    onSubmit: (data, { resetForm }) => {
      // Handle form submission logic
    },
  });

  const handleDelete = async () => {
    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // Actual delete logic would go here
      notification.success({
        message: "Success",
      });
      console.log("Deleting...");
      // Reset form after delete
      formik.resetForm();
    } catch (error) {
      console.error("Error deleting:", error);
    }
  };

  return (
    <main className="p-4">
      <section className="w-full max-w-md mx-auto">
        <p>This user and all associated data will be permanently removed. Do you wish to continue?</p>

        <div className="flex justify-center mt-4 gap-4">
          <Button text="Cancel Action" className="w-full mt-4 py-4" />
          <Button
            iconBefore={<DeleteIcon />}
            style={{ color: "#FBEAE9" }}
            bgColor="#EB9B98"
            text="Yes, Delete"
            className="w-full mt-4 py-4"
            onClick={handleDelete}
          />
        </div>
      </section>
    </main>
  );
};

export default DeleteContent;
