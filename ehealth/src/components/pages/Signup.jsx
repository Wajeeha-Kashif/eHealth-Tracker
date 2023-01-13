import React, { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { db, auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, collection, doc } from "@firebase/firestore";
import {
  Grid,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
export default function Signup() {
  const userCollectionRef = collection(db, "doctor");
  const userCollectionRef1 = collection(db, "user");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  var user_id = "";
  var choice = "";
  const signup_button = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#009bff",
    color: "white",
    fontSize: "medium",
    marginLeft: "21.5rem",
    marginTop: "10px",
    padding: "5px",
    borderRadius: "5px",
    borderColor: "#009bff",
    cursor: "pointer",
  };
  const theme = createTheme({
    palette: {
      primary: {
        main: "#42a5f5",
      },
    },
  });
  const createUser = async (values) => {
    console.log(values);
    console.log(values.email);
    console.log(values.password);
   // setError(false);
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User signed in");
        //navigate("/");
        console.log(user.uid);
        user_id = user.uid;
        console.log("variable");
        console.log(user_id);

        if (values.category == "Doctor") {
          setDoc(doc(db, "doctor", user_id), {
            Firstname: values.firstName,
            Lastname: values.lastName,
            Age: values.age,
            Phone: values.phone,
            Password: values.password,
            Email: values.email,
            Category: values.category,
          });
        }
        if (values.category == "Patient") {
          setDoc(doc(db, "user", user_id), {
            Firstname: values.firstName,
            Lastname: values.lastName,
            Age: values.age,
            Phone: values.phone,
            Password: values.password,
            Email: values.email,
            Category: values.category,
          });
        }
      })
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        setError(true);
        console.log(error);
        console.log("Error");
      });
  };
  return (
    <div className="signup">
      <ThemeProvider theme={theme}>
        <div className="signup-container">
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              phone: "",
              email: "",
              password: "",
              age: "",
              category: "",
            }}
            validationSchema={Yup.object().shape({
              firstName: Yup.string()
                .max(255)
                .required("FirstName is required"),
              lastName: Yup.string().max(255).required("LastName is required"),
              phone: Yup.number().required("Contact is Required"),
              email: Yup.string()
                .email("Invalid Email")
                .required("Email is required"),
              password: Yup.string().max(255).required("Password is required"),
              age: Yup.number().required("Age is Required"),
              category: Yup.string()
                .max(255)
                .required("This field is required"),
            })}
            enableReinitialize={true}
            onSubmit={(values) => createUser(values)}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values,
            }) => (
              <form onSubmit={(values) => handleSubmit(values)}>
                <Grid container spacing={5}>
                  <Grid item xs={6}>
                    <FormControl
                      fullWidth
                      error={Boolean(touched.firstName && errors.firstName)}
                    >
                      <InputLabel htmlFor="firstName">FirstName</InputLabel>
                      <OutlinedInput
                        id="firstName"
                        type="text"
                        value={values.firstName}
                        name="firstName"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        label="FirstName"
                        inputProps={{}}
                      />
                      {touched.firstName && errors.firstName && (
                        <FormHelperText
                          error
                          id="standard-weight-helper-text-title"
                        >
                          {errors.firstName}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>

                  <Grid item xs={6}>
                    <FormControl
                      fullWidth
                      error={Boolean(touched.lastName && errors.lastName)}
                    >
                      <InputLabel htmlFor="lastName">LastName</InputLabel>
                      <OutlinedInput
                        id="lastName"
                        type="text"
                        value={values.lastName}
                        name="lastName"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        label="LastName"
                        inputProps={{}}
                      />
                      {touched.lastName && errors.lastName && (
                        <FormHelperText
                          error
                          id="standard-weight-helper-text-title"
                        >
                          {errors.lastName}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>

                  <Grid item xs={6}>
                    <FormControl
                      fullWidth
                      error={Boolean(touched.phone && errors.phone)}
                    >
                      <InputLabel htmlFor="phone">Contact</InputLabel>
                      <OutlinedInput
                        id="phone"
                        type="text"
                        value={values.phone}
                        name="phone"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        label="phone"
                        inputProps={{}}
                      />
                      {touched.phone && errors.phone && (
                        <FormHelperText
                          error
                          id="standard-weight-helper-text-title"
                        >
                          {errors.phone}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>

                  <Grid item xs={6}>
                    <FormControl
                      fullWidth
                      error={Boolean(touched.email && errors.email)}
                    >
                      <InputLabel htmlFor="email">Email</InputLabel>
                      <OutlinedInput
                        id="email"
                        type="text"
                        value={values.email}
                        name="email"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        label="email"
                        inputProps={{}}
                      />
                      {touched.email && errors.email && (
                        <FormHelperText
                          error
                          id="standard-weight-helper-text-title"
                        >
                          {errors.email}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>

                  <Grid item xs={6}>
                    <FormControl
                      fullWidth
                      error={Boolean(touched.password && errors.password)}
                    >
                      <InputLabel htmlFor="password">Password</InputLabel>
                      <OutlinedInput
                        id="password"
                        type="password"
                        value={values.password}
                        name="password"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        label="password"
                        inputProps={{}}
                      />
                      {touched.password && errors.password && (
                        <FormHelperText
                          error
                          id="standard-weight-helper-text-title"
                        >
                          {errors.password}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>

                  <Grid item xs={6}>
                    <FormControl
                      fullWidth
                      error={Boolean(touched.age && errors.age)}
                    >
                      <InputLabel htmlFor="age">Age</InputLabel>
                      <OutlinedInput
                        id="age"
                        type="number"
                        value={values.age}
                        name="age"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        label="age"
                        inputProps={{}}
                      />
                      {touched.age && errors.age && (
                        <FormHelperText
                          error
                          id="standard-weight-helper-text-title"
                        >
                          {errors.age}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>

                  <Grid item xs={12}>
                    <FormControl
                      fullWidth
                      error={Boolean(touched.category && errors.category)}
                    >
                      <InputLabel htmlFor="category">
                        Doctor / Patient
                      </InputLabel>
                      <OutlinedInput
                        id="category"
                        type="text"
                        value={values.category}
                        name="category"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        label="category"
                        inputProps={{}}
                      />
                      {touched.category && errors.category && (
                        <FormHelperText
                          error
                          id="standard-weight-helper-text-title"
                        >
                          {errors.category}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                </Grid>

                {error === true ? (
                  <p style={{ color: "red", fontSize: "15px" }}>
                    Account already present
                  </p>
                ) : (
                  <></>
                )}

                <button type="submit" style={signup_button}>
                  Signup
                </button>
              </form>
            )}
          </Formik>
        </div>
      </ThemeProvider>
    </div>
  );
}
