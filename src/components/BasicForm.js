import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";
// const validateForm = (values) => {
//   let errors = {};
//   console.log("validationform", values);
//   if (values.email.length < 5) {
//     errors.email = "Please Enter the valid Email address";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = "Invalid email address";
//   }

//   //
//   // if (values.password.length < 8) {
//   //   errors.password = "Please provide long password";
//   // } else if (values.password.length > 12) {
//   //   errors.password = "Please provide short password";
//   // }

//   //
//   else if (values.password.length < 8 || values.password.length > 10) {
//     errors.password = "Password does not match criteria";
//   }
//   console.log(errors);
//   return errors;
// };
const formValidationSchema = yup.object({
  email: yup.string().min(6, "Need bigger email"),
  password: yup
    .string()
    .min(8)
    .max(12)
    .matches(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, "Not match"),
});
export function BasicForm() {
  const { handleSubmit, values, handleChange, handleBlur, touched, errors } =
    useFormik({
      initialValues: { email: "", password: "" },
      validationSchema: formValidationSchema,
      // validate: validateForm,
      onSubmit: (values) => {
        console.log("onsubmit", values);
      },
    });
  return (
    <form onSubmit={handleSubmit}>
      <input
        id="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        type="text"
        placeholder="Enter email"
      />
      {touched.email && errors.email ? errors.email : ""}
      <input
        id="password"
        name="password"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
        type="password"
        placeholder="Enter password"
      />
      {errors.password && touched.password ? errors.password : ""}
      <button type="submit">Submit</button>
    </form>
  );
}
