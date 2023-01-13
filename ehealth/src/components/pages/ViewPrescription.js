import React from "react";
import { useState, useEffect } from "react";
import { db } from "../../firebase";
import { getDocs, collection, deleteDoc, doc } from "@firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function ViewPrescription(props) {
  const userCollectionRef = collection(db, "prescription");
  const userCollectionRef1 = collection(db, "user");
  //For Storing the data from database in users array
  const [users, setUsers] = useState([]);
  const [prescriptions, setPrescriptions] = useState([]);
  const [reload, setReload] = useState(false);
  const [firstName, setFirstname] = useState("");

  const [doctor, setDoctor] = useState("");
  const [patient, setPatient] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [data, setData] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  


  const [myArray, setMyArray] = useState([]);
  const [dataArray, setDataArray] = useState([]);
  const [dateArray, setDateArray] = useState([]);

  const navigate = useNavigate();
  
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef1);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
     
    };
    getUsers();
  }, [reload]);

  useEffect(() => {
    const getPres = async () => {
      const pres = await getDocs(userCollectionRef);
     
      setPrescriptions(pres.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPres();
  }, [reload]);

  console.log("Profile");
  console.log(props.user_id);
  console.log(users);

  useEffect(() => {
      users.forEach((users) => {
       
        if (users.id === props.user_id) {
          setFirstname(users.Firstname);
          let patient1 = "";
          let time1 = "";

          let date1= "";
          let data1= "";
          let age1= "";
          let doctor1= "";
          let gender1= "";
          let i=0;
          prescriptions.forEach((prescriptions)=>
          {
            if(firstName== prescriptions.Patient){
                setPatient(prescriptions.Patient);
                console.log("patient is ..."+patient);

                if(i===0){
                  i=i+2;
        
               date1= prescriptions.Date;
                setDate(date1);

                data1= prescriptions.Data;
                setData(data1);

                age1= prescriptions.Age;
                setAge(age1);

                gender1= prescriptions.Gender;
                setGender(gender1);

                doctor1= prescriptions.Doctor;
                setDoctor(doctor1);
                }
                else{
                
               date1= date1+ "  "+prescriptions.Date;
                setDate(date1);

                data1= data1+ "  "+prescriptions.Data;
                setData(data1);

                doctor1= doctor1+ "  "+prescriptions.Doctor;
                setDoctor(doctor1);
              }
            }
          })

          console.log("hello");
          console.log(users.Firstname);
         
        }
      });
     
      copyData();
    });

  const copyData = async () => {
    setMyArray(doctor.split("  "));
     console.log("my Array: ",myArray);
     setDateArray(date.split("  "));
     console.log("Date Array: ",dateArray);
     setDataArray(data.split("  "));
     console.log("Data Array: ",dataArray);
   
  };

  return (
    
    <div className="profile">

      
{ myArray.map((x, i) =>  (
        <div className="profile">
          
        <div className="profile-container">
         
        <h2>
       { ["Doctor :  ",x  ]}</h2>
       <h2>Patient : {patient}</h2> 
       <h2>
       { ["\nDate : ",dateArray[i] ]}</h2>
       <h2>
       { ["\nData : ",dataArray[i] ]}</h2>
       </div>
       </div>  
      )
      ) }
    </div>
  );
}
