import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db} from "../../firebase";
import { collection, addDoc } from "@firebase/firestore";
import {
  Grid,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function WritePrescription() {
  const Prescription = collection(db, "prescription");
  const [doctor, SetDoctor] = useState("");
  const [patient, SetPatient] = useState("");
  const [date, SetDate] = useState("");
  const [data, SetData] = useState("");
  const [gender, SetGender] = useState("");
  const [age, SetAge] = useState("");
  const navigate = useNavigate();
  const submit_button = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#009bff",
    color: "white",
    fontSize: "medium",
    marginLeft: "52rem",
    marginTop: "10px",
    padding: "5px",
    borderRadius: "5px",
    borderColor: "#009bff",
    cursor: "pointer",
  };

  const lstyle = {
    marginRight: "45rem",
    font: "Arial",
    padding: "5px",
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#42a5f5",
      },
    },
  });

  const sub = (e) => {
    e.preventDefault();

    try {
      addDoc(Prescription, {
        Doctor: doctor,
        Patient: patient,
        Gender: gender,
        Age: age,
        Date: date,
        Data: data,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const currencies = [
    {
      value: "male",
      label: "Male",
    },
    {
      value: "female",
      label: "Female",
    },
  ];

  return (
    <div className="login">
      <ThemeProvider theme={theme}>
        <div className="login-container">
          <form
            onSubmit={(event) => {
              sub(event);
            }}
          >
            <h1
              className="w-full text-center font-bold text-xl"
              style={{ marginBottom: "1rem", color: "grey" }}
            >
              Prescription
            </h1>

            <Grid container spacing={2}>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="doctorname">Doctor Name</InputLabel>
                  <OutlinedInput
                    type="text"
                    label="DoctorName"
                    placeholder="Enter your Name"
                    onChange={(e) => {
                      SetDoctor(e.target.value);
                    }}
                    required
                  />
                </FormControl>
              </Grid>

              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="patientname">Patient Name</InputLabel>
                  <OutlinedInput
                    type="text"
                    label="PatientName"
                    placeholder="Enter Patient name"
                    onChange={(e) => {
                      SetPatient(e.target.value);
                    }}
                    required
                  />
                </FormControl>
              </Grid>

              <Grid item xs={4}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="age">Age</InputLabel>
                  <OutlinedInput
                    type="number"
                    label="Age"
                    placeholder="Enter the Age"
                    onChange={(e) => {
                      SetAge(e.target.value);
                    }}
                    required
                  />
                </FormControl>
              </Grid>

              <Grid item xs={4}>
                <FormControl fullWidth>
                  <TextField
                    id="outlined-select-currency-native"
                    select
                    label="Gender"
                    value={gender}
                    onClick={(e) => {
                      SetGender(e.target.value);
                    }}
                    required
                    SelectProps={{
                      native: true,
                    }}
                  >
                    {currencies.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                </FormControl>
              </Grid>

              <Grid item xs={4}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="date"></InputLabel>
                  <OutlinedInput
                    type="date" 
                    onChange={(e) => {
                      SetDate(e.target.value);
                    }}
                    required
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="data"></InputLabel>
                  <TextField
                    id="outlined-multiline-static"
                    label="Write"
                    multiline
                    rows={4}
                    defaultValue="Write prescription"
                    onChange={(e) => {
                      SetData(e.target.value);
                    }}
                    required
                  />
                </FormControl>
              </Grid>

              <button type="submit" style={submit_button}>
                Submit
              </button>
            </Grid>
          </form>
        </div>
      </ThemeProvider>
    </div>
  );
}
