import * as Yup from "yup";
export const formValidation = Yup.object({
  title: Yup.string()
    .required("Title is required")
    .min(3, "Title must be atleast 3 characters"),
  description: Yup.string()
    .required("Description is required")
    .min(10, "Description must be atleast 10 characters"),
  status: Yup.string().required("Status is required"),
  priority: Yup.string().required("Priority is required"),
});
