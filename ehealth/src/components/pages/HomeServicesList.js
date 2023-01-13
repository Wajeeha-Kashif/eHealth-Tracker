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

export default function HomeServicesList() {
    const userCollectionRef = collection(db, "homeservice");
    const [services, setServices] = useState([]);
    const [reload, setReload] = useState(0);

    
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);

      setServices(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, [reload]);

  const deleteService = async (id) => {
    const userDoc = doc(db, "homeservice", id);
    deleteDoc(userDoc);
    setReload(1)
  };

  return (
    <div  style={{ backgroundColor: "lightblue", borderStyle: "groove" }}>
        {services.map((services) => {
          return (
            <div style={{ borderStyle: "outset" }}> 
              <h4>Name: {services.Name}</h4>
              <h4>Address: {services.Address}</h4>
              <p>Phone: {services.Phone}</p>
              <button
                style={{ margin: "3px" }}
                onClick={() => {
                  deleteService(services.id);
                }}
                >
                Delete
              </button>
            </div>
          );
        })}
    </div>
  )
}
