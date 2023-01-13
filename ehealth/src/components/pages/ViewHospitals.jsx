import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "@firebase/firestore";
import { Col, Row } from 'antd';
import Hospital from "./Hospital";

const ViewHospitals = () => {
  const [hospitalslist, setHospitals] = useState([]);
  const [reload, setReload] = useState(false);
  const Hospitals = collection(db, "hospital");
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(Hospitals);

      setHospitals(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, [reload]);
  return (
    <div style={{marginTop:"2rem",marginBottom:"2rem"}}>
      <h2 className="w-full text-center font-bold text-xl">
        All Hopitals List
      </h2>
      
      <Row>
      {hospitalslist.map(hospital => (
         <Col xs= {24} sm= {6} md={12} lg={6}>
         <Hospital key={hospital.id} hospital={hospital}/>
          </Col>
      ))}
      </Row>
    </div>
  );
};

export default ViewHospitals;
