//Packages
import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
} from "@mui/material";
import "./style.css";
import { db } from "../../firebase";
import {
  getDocs,
  collection,
} from "@firebase/firestore";
import { useNavigate, NavLink } from "react-router-dom";

//Icons
import AccessibilityOutlinedIcon from "@mui/icons-material/AccessibilityOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import HealthAndSafetyOutlinedIcon from "@mui/icons-material/HealthAndSafetyOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";

function Navbar(props) {
  console.log("Navbar");
  console.log(props.state);
  console.log(props.id);
 
  const navigate = useNavigate();
  const button_css = {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    borderRadius: "10px",
    borderColor: "#009bff",
    fontSize: "medium",
    cursor: "pointer",
  };
  const button_css1 = {
    display: "flex",
    marginLeft: "15rem",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    borderRadius: "10px",
    borderColor: "#009bff",
    fontSize: "medium",
    cursor: "pointer",
  };

  const userCollectionRef = collection(db, "user");
  const [patients, setPatients] = useState([]);
  const [pat, setPat]=useState(0);
  const userCollectionRef1 = collection(db, "doctor");
  const [doctors, setDoctors] = useState([]);
  const [doc, setDoc]=useState(0);
  const [admin, setAdmin]=useState(0);
  console.log(pat);

  const getPatients = async () => {
    const data = await getDocs(userCollectionRef);
    setPatients(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log("useeffect");
    console.log(props.id);
    setPatient();
  };
  //getPatients();
  const getDoctors = async () => {
       const data = await getDocs(userCollectionRef1);

       setDoctors(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
       setDoctor();
     };
  useEffect(() => {
   
    getPatients();
  },[props]);

  const setPatient=()=>{
    console.log("check patient in array")
    console.log(pat);
    patients.forEach((patients) => {
      console.log(patients.id);
      if (patients.id === props.id) {
        setPat(1);
      }
    });
    console.log("Patient:");
    console.log(pat);
    if(pat===0){
      getDoctors();
    }
  }
  const setDoctor=()=>{
    console.log("check doctor in array")
    console.log(pat);
    doctors.forEach((doctors) => {
      console.log(doctors.id);
      if (doctors.id === props.id) {
        
      setDoc(1);
      }
    });
    console.log("Doctor:");
    console.log(doc);
    if(doc===0){
      if(props.id === "bjDUDWfBgvMUsjbtRFzurnqKR1l1"){
        setAdmin(1);
      }
    }
  }
  //admin=1;
  return (
    <div >
      <AppBar position="static" id="navbar">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
            <AccountBalanceOutlinedIcon />
            <NavLink className="navlinks" to="/">
              eHealthTracker
            </NavLink>
          </IconButton>
{/* ///////////////////////////////////////////////////////////////////Patient */}

{((props.state === true)&&(pat===1)) ?(
  <IconButton size="large"
  edge="start"
  color="inherit"
  aria-label="menu"
  sx={{ mr: 0 }}
>
<>
                <AccessibilityOutlinedIcon />
                <NavLink className="navlinks" to="/profile">
                  Profile
                </NavLink>
</>
  </IconButton>
):(<>
</>)}


{((props.state === true)&&(pat===1)) ?(
  <IconButton size="large"
  edge="start"
  color="inherit"
  aria-label="menu"
  sx={{ mr: 0 }}
>
<>
              <PermIdentityOutlinedIcon />
                <NavLink className="navlinks" to="/doctors">
                  Doctors
                </NavLink>
</>
  </IconButton>
):(<>
</>)}

{((props.state === true)&&(pat===1)) ?(
  <IconButton size="large"
  edge="start"
  color="inherit"
  aria-label="menu"
  sx={{ mr: 0 }}
>
<>
              <MedicalServicesOutlinedIcon />
                <NavLink className="navlinks" to="/appointment">
                  Appointment
                </NavLink>
</>
  </IconButton>
):(<>
</>)}

{((props.state === true)&&(pat===1)) ?(
  <IconButton size="large"
  edge="start"
  color="inherit"
  aria-label="menu"
  sx={{ mr: 0 }}
>
<>
              <HealthAndSafetyOutlinedIcon />
                <NavLink className="navlinks" to="/viewprescription">
                  Prescriptions
                </NavLink>
</>
  </IconButton>
):(<>
</>)}

{((props.state === true)&&(pat===1)) ?(
  <IconButton size="large"
  edge="start"
  color="inherit"
  aria-label="menu"
  sx={{ mr: 0 }}
>
<>
              <HealthAndSafetyOutlinedIcon />
                <NavLink className="navlinks" to="/hospitals">
                  Hospitals
                </NavLink>
</>
  </IconButton>
):(<>
</>)}

{((props.state === true)&&(pat===1)) ?(
  <IconButton size="large"
  edge="start"
  color="inherit"
  aria-label="menu"
  sx={{ mr: 0 }}
>
<>
              <HealthAndSafetyOutlinedIcon />
                <NavLink className="navlinks" to="/homeservice">
                  HomeService
                </NavLink>
</>
  </IconButton>
):(<>
</>)}

{/* -------------------------------------------------------Doctor */}

{((props.state === true)&&(doc===1)) ?(
  <IconButton size="large"
  edge="start"
  color="inherit"
  aria-label="menu"
  sx={{ mr: 2 }}
>
<>
                <AccessibilityOutlinedIcon />
                <NavLink className="navlinks" to="/doctorprofile">
                  Profile
                </NavLink>
</>
  </IconButton>
):(<>
</>)}


{((props.state === true)&&(doc===1)) ?(
  <IconButton size="large"
  edge="start"
  color="inherit"
  aria-label="menu"
  sx={{ mr: 2 }}
>
<>
                <HealthAndSafetyOutlinedIcon />
                <NavLink className="navlinks" to="/doctorappointment">
                  Appointments
                </NavLink>
</>
  </IconButton>
):(<>
</>)}

{((props.state === true)&&(doc===1)) ?(
  <IconButton size="large"
  edge="start"
  color="inherit"
  aria-label="menu"
  sx={{ mr: 2 }}
>
<>
                <HealthAndSafetyOutlinedIcon />
                <NavLink className="navlinks" to="/writeprescription">
                  Prescription
                </NavLink>
</>
  </IconButton>
):(<>
</>)}

{((props.state === true)&&(doc===1)) ?(
  <IconButton size="large"
  edge="start"
  color="inherit"
  aria-label="menu"
  sx={{ mr: 2 }}
>
<>
                <HealthAndSafetyOutlinedIcon />
                <NavLink className="navlinks" to="/hospitals">
                  Hospitals
                </NavLink>
</>
  </IconButton>
):(<>
</>)}

{((props.state === true)&&(doc===1)) ?(
  <IconButton size="large"
  edge="start"
  color="inherit"
  aria-label="menu"
  sx={{ mr: 2 }}
>
<>
                <HealthAndSafetyOutlinedIcon />
                <NavLink className="navlinks" to="/homeservice">
                  HomeService
                </NavLink>
</>
  </IconButton>
):(<>
</>)}


{/* ///////////////////////////////////////////////Admin */}

{((props.state === true)&&(admin===1)) ?(
  <IconButton size="large"
  edge="start"
  color="inherit"
  aria-label="menu"
  sx={{ mr: 2}}
>
<>
                <AccessibilityOutlinedIcon />
                <NavLink className="navlinks" to="/adminprofile">
                  Profile
                </NavLink>
</>
  </IconButton>
):(<>
</>)}

{((props.state === true)&&(admin===1)) ?(
  <IconButton size="large"
  edge="start"
  color="inherit"
  aria-label="menu"
  sx={{ mr: 2 }}
>
<>
              <PermIdentityOutlinedIcon />
                <NavLink className="navlinks" to="/admindoctorlist">
                  Doctors
                </NavLink>
</>
  </IconButton>
):(<>
</>)}

{((props.state === true)&&(admin===1)) ?(
  <IconButton size="large"
  edge="start"
  color="inherit"
  aria-label="menu"
  sx={{ mr: 2 }}
>
<>
              <PermIdentityOutlinedIcon />
                <NavLink className="navlinks" to="/adminpatientlist">
                  Patients
                </NavLink>
</>
  </IconButton>
):(<>
</>)}

{((props.state === true)&&(admin===1)) ?(
  <IconButton size="large"
  edge="start"
  color="inherit"
  aria-label="menu"
  sx={{ mr: 2 }}
>
<>
              <PermIdentityOutlinedIcon />
                <NavLink className="navlinks" to="/homeservicelist">
                  ServiceList
                </NavLink>
</>
  </IconButton>
):(<>
</>)}

{((props.state === true)&&(admin===1)) ?(
  <IconButton size="large"
  edge="start"
  color="inherit"
  aria-label="menu"
  sx={{ mr: 2 }}
>
<>
              <HealthAndSafetyOutlinedIcon />
                <NavLink className="navlinks" to="/admindashboard">
                  AddHospital
                </NavLink>
</>
  </IconButton>
):(<>
</>)}


{/* {((props.state === true)&&(admin===1)) ?(
  <IconButton size="large"
  edge="start"
  color="inherit"
  aria-label="menu"
  sx={{ mr: 4 }}
>
<>
                <HealthAndSafetyOutlinedIcon />
                <NavLink className="navlinks" to="/hospitals">
                  Hospitals
                </NavLink>
</>
  </IconButton>
):(<>
</>)} */}


{/* //////////////////////////////////////////////////////// */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
            <MedicalServicesOutlinedIcon />
            <NavLink className="navlinks" to="/services">
              Our Services
            </NavLink>
          </IconButton>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
            <NewspaperOutlinedIcon />
            <NavLink className="navlinks" to="/blogs">
              Blogs
            </NavLink>
          </IconButton>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
            <NewspaperOutlinedIcon />
            <NavLink className="navlinks" to="/news">
              News
            </NavLink>
          </IconButton>

          

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
            <PermIdentityOutlinedIcon />
            <NavLink className="navlinks" to="/aboutus">
              About Us
            </NavLink>
          </IconButton>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 0 }}
          >
            {props.state === true ? (
              <button
                className="button"
                style={button_css}
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Signup
              </button>
            ) : (
              <button
                className="button"
                style={button_css1}
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Signup
              </button>
            )}
          </IconButton>

          {props.state === true ? (
            <button
              className="button"
              style={button_css}
              onClick={() => {
                navigate("/login");
                setDoc(0);
                setPat(0);
                setAdmin(0);
              }}
            >
              Logout
            </button>
          ) : (
            <button
              className="button"
              style={button_css}
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
