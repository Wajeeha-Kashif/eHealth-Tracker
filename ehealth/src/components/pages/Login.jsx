import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Formik } from "formik";

import {
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  Grid,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function Login(props) {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  var user_id="";

  const login_button = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#009bff",
    color: "white",
    fontSize: "medium",
    marginLeft: "13rem",
    marginTop: "8px",
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
  useEffect(()=>{
    props.isloggedin(false,"");
  },[])

  const login = (values) => {
    // e.preventDefault();
    console.log(values.email);
    console.log(values.password);
    setError(false);
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        user_id=user.uid;
        console.log("User logged in");
        props.isloggedin(true,user_id);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        console.log("Error");
        setError(true);
      });
  };

  return (
    <div className="login">
      <ThemeProvider theme={theme}>
        <div className="login-container">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email("Invalid Email")
                .required("Email is required"),
              password: Yup.string().max(255).required("Password is required"),
            })}
            enableReinitialize={true}
            onSubmit={(values) => login(values)}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              touched,
              values,
              setFieldError,
            }) => (
              <form onSubmit={(values) => handleSubmit(values)}>
                <Grid container spacing={4}>
                  <Grid item xs={6}>
                    <FormControl
                      fullWidth
                      error={Boolean(touched.email && errors.email)}
                    >
                      <InputLabel htmlFor="email">Email</InputLabel>
                      <OutlinedInput
                        id="email"
                        type="email"
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
                </Grid>
                {error === true ? (
                  <p style={{ color: "red", fontSize: "15px" }}>
                    Credentials are wrong
                  </p>
                ) : (
                  <></>
                )}
                <button className="button" type="submit" style={login_button}>
                  Login
                </button>
              </form>
            )}
          </Formik>
          <Link to="/signup" style={{ color: "#5eaeff", marginTop: "5px" }}>
            Don't have account
          </Link>
        </div>
      </ThemeProvider>
    </div>
  );
}
