import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import {  signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase'

export default function Dashboard() {
    const navigate = useNavigate();
    const [ email, setEmail ] = useState('')
 
    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/");
        }).catch((error) => {
        // An error happened.
        });
    }

useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
          const email = user.email;
          setEmail(email)
        } 
      });
},[])
  return (
    <div className="dash-card">
      <div className="dash-box">
        <button onClick={handleLogout} >Logout</button>
        <h2>{email}</h2>
      </div>
      <p>Hello world</p>
    </div>
  );
}
