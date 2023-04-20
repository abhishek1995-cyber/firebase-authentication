import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import {  useNavigate } from 'react-router-dom';
import { auth } from '../firebase'

export default function Login(){
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err , setErr ] = useState('');

    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate('/dashboard')
        })
        .catch((error) => {
            const errorMessage = error.message;
            setErr(errorMessage)
        });
       
    }
    return (
        <div className='form-card'>
        <form
         onSubmit={onLogin}>
            <label>Login</label>
            <input
             onChange={(e)=>setEmail(e.target.value)}
             type='email' 
             value={ email }
             placeholder="Your Email" />
            <input
             onChange={(e)=>setPassword(e.target.value)}
             type="password" 
             value={ password }
             placeholder="Your Password" />
            <h4>
                {err}
            </h4>  
            <button type='Submit'>Login</button>
        </form>
        </div>
    )
}