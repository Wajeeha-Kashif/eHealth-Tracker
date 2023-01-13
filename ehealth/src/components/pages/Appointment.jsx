import React, { useState } from "react";
import { db} from "../../firebase";
import { addDoc, collection, doc } from "@firebase/firestore";
import {
  Grid,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../../App.css";

export default function Appointment() {
  const [doctor, SetDoctor] = useState("");
  const [patient, SetPatient] = useState("");
  const [date, SetDate] = useState("");
  const [time, SetTime] = useState("");
  const Appointment = collection(db, "appointment");

  const add_button = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#009bff",
    color: "white",
    fontSize: "medium",
    marginLeft: "1rem",
    marginTop: "8px",
    width: "1000px",
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
      addDoc(Appointment, {
        Doctor: doctor,
        Patient:patient,
        Date:date,
        Time:time,
      });
    } catch (e) {
      console.log(e);
    }
}

  return (
    <div className="appointment">
      <ThemeProvider theme={theme}>
        <div className="appointment-container">
          <form onSubmit={(event) => {sub(event)}}>
            <h1
              className="w-full text-center font-bold text-xl"
              style={{ marginBottom: "1rem" }}
            >
              Book Appointment
            </h1>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="patientname">Patient Name</InputLabel>
                  <OutlinedInput
                    type="text"
                    placeholder="Patient Name"
                    onChange={(e) => {
                      SetPatient(e.target.value);
                    }}
                    required
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="doctorname">Doctor Name</InputLabel>
                  <OutlinedInput
                    type="text"
                    placeholder="Doctor name"
                    onChange={(e) => {
                      SetDoctor(e.target.value);
                    }}
                    required
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="hospitalname"></InputLabel>
                  <OutlinedInput
                    type="date"
                    placeholder="Hospital name"
                    onChange={(e) => {
                      SetDate(e.target.value);
                    }}
                    required
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="hospitalname"></InputLabel>

                  <label style={lstyle}></label>
                  <select
                    onChange={(e) => {
                      SetTime(e.target.value);
                    }}
                    required
                  >
                    <option type="time" value="9:00">
                      9:00
                    </option>
                    <option type="time" value="9:30">
                      9:30
                    </option>
                    <option type="time" value="10:00">
                      10:00
                    </option>
                    <option type="time" value="10:30">
                      10:30
                    </option>

                    <option type="time" value="13:00">
                      13:00
                    </option>
                    <option type="time" value="13:30">
                      13:30
                    </option>
                    <option type="time" selected value="14:00">
                      14:00
                    </option>
                    <option type="time" value="14:30">
                      14:30
                    </option>

                    <option type="time" value="20:00">
                      20:00
                    </option>
                    <option type="time" value="20:30">
                      20:30
                    </option>
                    <option type="time" value="21:00">
                      21:00
                    </option>
                    <option type="time" value="21:30">
                      21:30
                    </option>
                  </select>
                </FormControl>
              </Grid>
              <button type="submit" style={add_button}>
                Request Appointment
              </button>
            </Grid>
          </form>
        </div>
      </ThemeProvider>
    </div>
  );
}
