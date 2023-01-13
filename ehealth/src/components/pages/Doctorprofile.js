import React from "react";
import { useState, useEffect } from "react";
import { db } from "../../firebase";
import { getDocs, collection, deleteDoc, doc } from "@firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function Doctorprofile(props) {
    const userCollectionRef1 = collection(db, "doctor");
    //For Storing the data from database in users array
    const [users, setUsers] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const [reload, setReload] = useState(false);
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");
    const [userName, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const getDoctors = async () => {
          const data = await getDocs(userCollectionRef1);
         
          setDoctors(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getDoctors();
      }, [reload]);
      
      useEffect(() => {
        if (users.FirstName==null){
          doctors.forEach((doctors) => {
            if (doctors.id === props.user_id) {
              setFirstname(doctors.Firstname);
              setLastname(doctors.Lastname);
              setEmail(doctors.Email);
              console.log("hello");
              console.log(doctors.FirstName);
      
            }
          });
        }
      });

      const deleteUser = async (id) => {
        const userDoc = doc(db, "doctor", id);
        deleteDoc(userDoc);
      };

      const css_button = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        fontSize: "medium",
        padding: "5px",
        marginTop: "10px",
        borderRadius: "5px",
        borderColor:"#009bff",
        cursor: "pointer",
      };

  return (
    <div className="profile">
      <div className="profile-container">
        <h2>FirstName : {firstName}</h2>
        <h2>LastName : {lastName}</h2>
        <h2>Email : {email}</h2>
        <button style={css_button} onClick={() => navigate("/doctorprofileupdate")}>
          Update
        </button>
        <button
          type="submit"
          style={css_button}
          onClick={() => {
            deleteUser(props.user_id);
            navigate("/login");
          }}
        >
          Delete
        </button>
      </div>
    </div>
  )
}
