import "./App.css";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import Profile from "./components/pages/Profile";
import Update from "./components/pages/Update";
import Aboutus from "./components/pages/Aboutus";
import Blogs from "./components/pages/Blogs";
import News from "./components/pages/News";
import Navbar from "./components/pages/Navbar";
import Footer from "./components/pages/Footer";
import Home from "./components/pages/Home";
import ViewHospitals from "./components/pages/ViewHospitals";
import Doctorlist from "./components/pages/Doctorlist";
import Services from "./components/pages/Services";
import Appointment from "./components/pages/Appointment";
import AdminDashboard from "./components/pages/AdminDashboard";
import AdminDoctorsList from "./components/pages/AdminDoctorsList";
import AdminPatientsList from "./components/pages/AdminPatientsList";
import Adminprofile from "./components/pages/Adminprofile";
import AdminProfileupdate from "./components/pages/AdminProfileupdate";
import Doctorprofile from "./components/pages/Doctorprofile";
import Doctorprofileupdate from "./components/pages/Doctorprofileupdate";
import ViewAppointment from "./components/pages/ViewAppointment";
import WritePrescription from "./components/pages/WritePrescription";
import HomeService from "./components/pages/HomeService";
import HomeServicesList from "./components/pages/HomeServicesList";
import ViewPrescription from "./components/pages/ViewPrescription";
function App() {
  const [value, setValue] = useState(false);
  const [id, setId] = useState("");
  const handleCallback = (childData, id) => {
    setValue(childData);
    setId(id);
  };
  console.log("App.js");
  console.log(value);
  console.log(id);
  
  return (
    <div className="App">
      <Router>
        <Navbar state={value} id={id}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/profile" element={<Profile user_id={id}/>} />
          <Route path="/update" element={<Update user_id={id} />} />
          <Route path="/appointment" element={<Appointment user_id={id} />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/services" element={<Services/>} />
          <Route path="/hospitals" element={<ViewHospitals />} />
          <Route path="/doctors" element={<Doctorlist user_id={id} />} />
          <Route path="/admindashboard" element={<AdminDashboard user_id={id} />} />
          <Route path="/news" element={<News />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="admindoctorlist" element={<AdminDoctorsList />} />
          <Route path="adminpatientlist" element={<AdminPatientsList />} />
          <Route path="adminprofile" element={<Adminprofile />} />
          <Route path="adminprofileupdate" element={<AdminProfileupdate />} />
          <Route path="doctorprofile" element={<Doctorprofile user_id={id} />} />
          <Route path="doctorprofileupdate" element={<Doctorprofileupdate user_id={id} />} />
          <Route path="doctorappointment" element={<ViewAppointment user_id={id} />} />
          <Route path="writeprescription" element={<WritePrescription />} />
          <Route path="homeservice" element={<HomeService/>} />
          <Route path="homeservicelist" element={<HomeServicesList/>} />
          <Route path="viewprescription" element={<ViewPrescription user_id={id} />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/login"
            element={<Login isloggedin={handleCallback} />}
          />
        
        </Routes>
      </Router>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
