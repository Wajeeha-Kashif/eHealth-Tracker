import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { db } from "../../firebase";
import { updateDoc, doc, getDocs, collection } from "@firebase/firestore";
import { async } from "@firebase/util";

export default function AdminProfileupdate() {
    const userCollectionRef = collection(db, "admin");
    const navigate=useNavigate();
    const update_button = {
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
      const updateUser = async (values) => {
        var id="bjDUDWfBgvMUsjbtRFzurnqKR1l1";

        console.log(values);
    
        const userDoc = doc(db, "admin", id);
        const newData = {
          Firstname: values.firstName,
          Lastname: values.lastName,
        };
        try{
        await updateDoc(userDoc, newData);
        navigate('/adminprofile')
      }
        catch(e)
        {
          console.log(e);
        }
      };

  return (
    <div className="update">
      <div className="update-container">
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
          }}
          validationSchema={Yup.object().shape({
            firstName: Yup.string().max(255).required("FirstName is required"),
            lastName: Yup.string().max(255).required("LastName is required"),
          })}
          enableReinitialize={true}
          onSubmit={(values) => updateUser(values)}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
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

              </Grid>

              <button type="submit" style={update_button}>
                Update
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  )
}
