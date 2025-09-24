import * as Yup from "yup";

export const initialValues={
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  }
  export const  validationSchema=Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    department: Yup.string().required("Department is required"),
  })