import React from "react";
import { useState, useEffect } from "react";
import { db } from "../../firebase";
import { getDocs, collection, deleteDoc, doc } from "@firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function ViewAppointment(props) {
  const userCollectionRef = collection(db, "appointment");
  const userCollectionRef1 = collection(db, "doctor");
  //For Storing the data from database in users array
  const [doctors, setDoctors] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [reload, setReload] = useState(false);
  const [firstName, setFirstname] = useState("");

  const [doctor, setDoctor] = useState("");
  const [patient, setPatient] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  const [myArray, setMyArray] = useState([]);
  const [timeArray, setTimeArray] = useState([]);
  const [dateArray, setDateArray] = useState([]);

  const navigate = useNavigate();


  
  useEffect(() => {
    const getDoctors = async () => {
      const data = await getDocs(userCollectionRef1);
      setDoctors(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
     
    };
    getDoctors();
  }, [reload]);

  useEffect(() => {
    const getAppoint = async () => {
      const appoint = await getDocs(userCollectionRef);
     
      setAppointments(appoint.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getAppoint();
  }, [reload]);

  console.log("Appointment");
  console.log(props.user_id);
  console.log(doctors);
  console.log(appointments)

  useEffect(() => {
  
    console.log(props.id)
      doctors.forEach((doctors) => {
        if (doctors.id === props.user_id) {
          setFirstname(doctors.Firstname);
          let patient1 = "";
          let time1 = "";
          let date1= "";
          let i=0;
          appointments.forEach((appointments)=>
          {
            if(firstName== appointments.Doctor){
                setDoctor(appointments.Doctor);

                if(i===0){
                  i=i+2;
                  patient1= appointments.Patient;
               setPatient(patient1);

               time1= appointments.Time;
               setTime(time1);
        
               date1= appointments.Date;
                setDate(date1);

                }
                else{
                patient1= patient1+ " "+appointments.Patient;
               setPatient(patient1);

               time1= time1+" "+appointments.Time;
               setTime(time1);
        
               date1= date1+ " "+appointments.Date;
                setDate(date1);}
            }
          })

          console.log("hello");
          console.log(doctors.Firstname);
         
        }
      });
     
      copyData();});

  const copyData = async () => {
    setMyArray(patient.split(" "));
     console.log("my Array: ",myArray);
     setDateArray(date.split(" "));
     console.log("Date Array: ",dateArray);
     setTimeArray(time.split(" "));
     console.log("Time Array: ",timeArray);
  };

  return (
    <div className="profile">

      { myArray.map((x, i) =>  (
        <div className="profile">
        <div className="profile-container">
        <h2>Doctor : {doctor}</h2>   
        <h2>
       { ["Patient :  ",x  ]}</h2>
       <h2>
       { ["\nDate : ",dateArray[i] ]}</h2>
       <h2>{ ["\nTime : ",timeArray[i] ]}</h2>
       </div>
       </div>  
      )
      ) }
    </div>
  );
}
