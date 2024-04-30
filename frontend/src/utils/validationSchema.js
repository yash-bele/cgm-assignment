import * as yup from "yup";

export const validationSchema = yup.object({
  userName: yup
    .string()
    .required("Enter username!")
    .matches(/^[aA-zZs]+$/, "Please use only letter and numbers!"),
  email: yup
    .string()
    .required("Please enter your email!")
    .email("Invalid email!")
    .matches(/@[^.]*\./, "Invalid email format!"),
  password: yup
    .string()
    .required("Please enter your password!")
    .matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/, "Password must contain at least 8 characters, one uppercase, one number and one special case character!"),
});
