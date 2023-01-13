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

export default  function HomeService() {

    const HomeService = collection(db, "homeservice");
    const [name, SetName] = useState("");
    const [date, SetDate] = useState("");
    const [description, SetDescription] = useState("");
    const [gender, SetGender] = useState("");
    const [age, SetAge] = useState("");
    const [address, SetAddress] = useState("");
    const [phone, SetPhone] = useState("");

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
          addDoc(HomeService, {
            Name:name,
            Age: age,
            Gender: gender,
            Address:address,
            Phone:phone,
            Date: date,
            Description: description,
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
                HomeService
            </h1>

            <Grid container spacing={2}>
              <Grid item xs={4}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="fullname">Full Name</InputLabel>
                  <OutlinedInput
                    type="text"
                    label="Full Name"
                    placeholder="Enter your Name"
                    onChange={(e) => {
                      SetName(e.target.value);
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
                    placeholder="Enter your Age"
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

              <Grid item xs={4}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="phone">Phone No</InputLabel>
                  <OutlinedInput
                    type="text"
                    label="Phone"
                    placeholder="Enter your Phone number"
                    onChange={(e) => {
                      SetPhone(e.target.value);
                    }}
                    required
                  />
                </FormControl>
              </Grid>

              <Grid item xs={4}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="address">Address</InputLabel>
                  <OutlinedInput
                    type="text"
                    label="Address"
                    placeholder="Enter your Address"
                    onChange={(e) => {
                      SetAddress(e.target.value);
                    }}
                    required
                  />
                </FormControl>
              </Grid>

             

              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="description"></InputLabel>
                  <TextField
                    id="outlined-multiline-static"
                    label="Description"
                    multiline
                    rows={4}
                    defaultValue="Write Description"
                    onChange={(e) => {
                        SetDescription(e.target.value);
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
  )
}