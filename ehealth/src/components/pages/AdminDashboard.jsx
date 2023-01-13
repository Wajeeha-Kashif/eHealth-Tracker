import React, { useState, useEffect }from 'react'
import fb from "../../firebase"
import "../../App.css";
import {
    Grid,
    FormControl,
    FormHelperText,
    InputLabel,
    OutlinedInput,
  } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const db = fb.firestore()
const Hospitals = db.collection('hospital');
const storageRef = fb.storage().ref();

const add_button = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#009bff",
    color: "white",
    fontSize: "medium",
    marginLeft: "29rem",
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

const AdminDashboard = () => {
    
    const [name , SetName] = useState("");
    const [city , SetCity] = useState("");
    const [address , SetAddress] = useState("");
    const [cover, SetCover] = useState(null);

    const handleCoverImgChange=(e)=>{
        if(e.target.files[0]) {
            SetCover(e.target.files[0]);
        }
    };

    const submit = (e) =>{
        e.preventDefault();

        const uploadtask = storageRef.child('/img/' +cover.name).put(cover);
        uploadtask.on(
            'state_changed',
            snapshot=>{},
            error=>{
                console.log(error);
            },
            ()=>{
                storageRef.child('/img/' +cover.name).getDownloadURL().then(url=>{
                    console.log("img url:", url);
                    Hospitals.add({
                     Name:name,
                     City:city,
                     Address:address,
                     CoverImg: url
                    }).then((docRef)=>{
                        alert("data successfully submit")
                    }).catch((error)=>{
                        console.log("error:",error);
                    });
                })
            }
        )
    }

    return (
        <div className="login">
            <ThemeProvider theme={theme}>
        <div className="login-container">
             <form onSubmit={(event) => {submit(event)}}>

           {/* <h1>Admin Dashboard</h1>*/}
            <h1>Add Hospital</h1>

            <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <FormControl
                     fullWidth
                    >
                      <InputLabel htmlFor="hospitalname">Hospital name</InputLabel>
                      <OutlinedInput
                        type="text" placeholder="Hospital name" 
                        onChange={(e)=>{SetName(e.target.value)}} required />
                    </FormControl>
                  </Grid>

                  <Grid item xs={6}>
                    <FormControl
                      fullWidth
                    >
                      <InputLabel htmlFor="city">City</InputLabel>
                      <OutlinedInput
                      type="text" placeholder="City" 
                      onChange={(e)=>{SetCity(e.target.value)}} required />
                    </FormControl>
                  </Grid>

                  <Grid item xs={12}>
                    <FormControl
                      fullWidth
                    >
                      <InputLabel htmlFor="address">Address</InputLabel>
                      <OutlinedInput
                      name="content" type="text" placeholder="write hospital address here" 
                      rows="10" cols="150" onChange={(e)=>{SetAddress(e.target.value)}} required />
                    </FormControl>
                  </Grid>

                  <Grid item xs={12}>
                    <FormControl
                      fullWidth
                    >
                      <InputLabel htmlFor="image"></InputLabel>
                      <OutlinedInput
                      type="file" name="coverimg" accept="image/*" onChange={(e)=>handleCoverImgChange(e)} />
                    </FormControl>
                  </Grid>
                  </Grid>
                  <button type="submit" style={add_button}>Add Hospital</button>





            {/* <input type="text" placeholder="Hospital name" 
            onChange={(e)=>{SetName(e.target.value)}} required />

            <input type="text" placeholder="City" 
            onChange={(e)=>{SetCity(e.target.value)}} required />

            <textarea  name="content" type="text" placeholder="write hospital address here" 
            rows="10" cols="150" onChange={(e)=>{SetAddress(e.target.value)}} required >
            </textarea>
    
             <input type="file" name="coverimg" accept="image/*" onChange={(e)=>handleCoverImgChange(e)} />
            

    <button type="submit">Submit</button>*/}
        </form>
        </div>  
        </ThemeProvider>  
    </div>
   
    );
  };

export default AdminDashboard;