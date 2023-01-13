import React from "react";
import { useState, useEffect } from "react";
import { db } from "../../firebase";
import { getDocs, collection, deleteDoc, doc } from "@firebase/firestore";
import { useNavigate } from "react-router-dom";


export default function Adminprofile() {
    const userCollectionRef = collection(db, "admin");
  //For Storing the data from database in users array
  const [users, setUsers] = useState([]);
  const [reload, setReload] = useState(false);
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);

      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, [reload]);

  useEffect(() => {
    users.forEach((users) => {
      if (users.id) {
        setFirstname(users.Firstname);
        setLastname(users.Lastname);
        setEmail(users.Email);
        console.log("hello");
        console.log(users.FirstName);
      }
    });
  });

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
        <button style={css_button} onClick={() => navigate("/adminprofileupdate")}>
          Update
        </button>
      </div>
    </div>
  );
}
