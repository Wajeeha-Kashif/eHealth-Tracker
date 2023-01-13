import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import {
    doc,
    deleteDoc,
    getDocs,
    addDoc,
    collection,
  } from "@firebase/firestore";
  import { Route, useNavigate } from "react-router-dom";

export default function AdminPatientsList() {
    const userCollectionRef = collection(db, "user");
    const [users, setUsers] = useState([]);
    const [reload, setReload] = useState(0);
    const navigate = useNavigate();
  
    useEffect(() => {
      const getUsers = async () => {
        const data = await getDocs(userCollectionRef);
  
        setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
      getUsers();
    }, [reload]);
  
    const deleteUser = async (id) => {
      const userDoc = doc(db, "user", id);
      deleteDoc(userDoc);
      setReload(1);
    };
  
    const tablecss = {
      backgroundColor: "gold",
      borderStyle: "solid",
      borderColor: "grey",
      borderWidth: "5px",
    };
  
    return (
          <div>
        <div style={{ backgroundColor: "lightblue", borderStyle: "groove" }}>
          {users.map((user) => {
            return (
              <div style={{ borderStyle: "outset" }}> 
                <h4>First Name: {user.Firstname}</h4>
                <h4>Last Name: {user.Lastname}</h4>
                <p>Email: {user.Email}</p>
                <button
                  style={{ margin: "3px" }}
                  onClick={() => {
                    deleteUser(user.id);
                  }}
                  >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
  
      </div>
    )
  }