import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "@firebase/firestore";

const Doctorlist = () => {
  const Doctors = collection(db, "doctor");
  const [reload, setReload] = useState(false);
  const [doctorslist, setDoctors] = useState([]);
  const [name,setName]=useState("");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(Doctors);

      setDoctors(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, [reload]);

  const SearchDoctor = (e) => {
    e.preventDefault();
    console.log(name);
    setDoctors(
      doctorslist.filter((doctorslist) =>
        doctorslist.Firstname.toLowerCase().includes(name.toLowerCase())
      )
    );
  };

  const printDoctor = () => {
    const getUsers = async () => {
      const data = await getDocs(Doctors);

      setDoctors(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  };

  const input = {
    display: "flex",
    alignItems: "center",
    justifyContent:"center",
    marginLeft:"35rem",
    width: "500px",
    cursor: "pointer",
    background: "white",
    color: "black",
    borderradius: "50%",
    fontsize: "1.2em",
    
  };

  const button_css = {
    position: "absolute",
    top: 118,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#009bff",
    color: "white",
    fontSize: "medium",
    marginLeft: "67rem",
    padding: "3px",
    borderRadius: "5px",
    borderColor: "#009bff",
    cursor: "pointer",
  };

  const pstyle = {
    display: "block",
    backgroundColor:"white",
    marginLeft: "47rem",
    marginTop: "0px",
    width: "11rem",
    height: "5rem",
    padding: "20px",
    border: "5px solid blue",   
};
  return (
    <div
      style={{
        backgroundImage: `url("https://assets-global.website-files.com/5eff9c5e4dba181f8aa2d1e0/614df8c99e2b514e7732b455_OnlineHealthcareForms.jpeg")`,
        height: "100vh",
      }}
    >

      <h1 style={{marginBottom:"10px"}}>All Doctors List</h1>
      <form
        onSubmit={(e) => {
          SearchDoctor(e);
        }}
      >
        <input
          onChange={(e) => {
            setName(e.target.value);
            printDoctor();
          }}
          style={input}
          placeholder=" 🔍 Search"
        />
        <button type="submit" style={button_css}>
          Search
        </button>
      </form>

      <div style={{marginTop:"20px"}}>
      {doctorslist.map((doctor) => (
        <div key={doctor.id} style={{padding:"10px"}}>
          <h6 style={pstyle}>
            Dr. {doctor.Firstname} {doctor.Lastname}
          </h6>  
        </div>
      ))}
      </div>
    </div>
  );
};

export default Doctorlist;
