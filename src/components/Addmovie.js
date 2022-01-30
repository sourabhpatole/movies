import React from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
const addMovieformValidationSchema = yup.object({
  name: yup.string().required("Why you not fill name"),
  poster: yup
    .string()
    .min(5, "Need bigger poster")
    .required("Why you not fill poster"),
  rating: yup
    .number()
    .min(1, "Need better rating")
    .typeError("A number is required")
    .max(10, "Too much rating")
    .required("Why you not fill rating"),
  summary: yup
    .string()
    .min(20, "Need bigger summary")
    .required("Why you not fill summary"),
  trailer: yup
    .string()
    .min(6, "Need bigger trailer")
    .required("Why you not fill trailer"),
  // email: yup.string().min(6, "Need bigger email"),
  // password: yup
  //   .string()
  //   .min(8)
  //   .max(12)
  //   .matches(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, "Not match"),
});
export function Addmovie() {
  const { handleSubmit, values, handleChange, handleBlur, touched, errors } =
    useFormik({
      initialValues: {
        name: "",
        poster: "",
        rating: "",
        summary: "",
        trailer: "",
      },
      validationSchema: addMovieformValidationSchema,
      // validate: validateForm,
      onSubmit: (newMovie) => {
        console.log("onsubmit", newMovie);
        admovie(newMovie);
      },
    });
  const admovie = (newMovie) => {
    // setMovieList([...movieList, newMovie]);

    fetch(`https://61f2943a2219930017f50735.mockapi.io/movies`, {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then(() => history.push("/movies"));
  };

  const history = useHistory();
  return (
    <form onSubmit={handleSubmit}>
      <input
        error
        className="form-label mx-3 my-4"
        id="name"
        name="name"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Enter a name"
      />
      {touched.name && errors.name ? errors.name : ""}
      <input
        className="form-label mx-3 my-4"
        id="poster"
        name="poster"
        value={values.poster}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Enter a poster"
      />
      {touched.poster && errors.poster ? errors.poster : ""}
      <input
        className="form-label mx-3 my-4"
        id="rating"
        name="rating"
        value={values.rating}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Enter a rating"
      />
      {touched.rating && errors.rating ? errors.rating : ""}
      <input
        className="form-label mx-3 my-4"
        id="summary"
        name="summary"
        value={values.summary}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Enter a summery"
      />
      {touched.summary && errors.summary ? errors.summary : ""}
      <input
        className="form-label mx-3 my-4"
        id="trailer"
        name="trailer"
        value={values.trailer}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Enter a trailer"
      />
      {touched.trailer && errors.trailer ? errors.trailer : ""}
      <button className="btn btn-primary my-3" type="submit">
        Add Movie
      </button>
    </form>
  );
}
