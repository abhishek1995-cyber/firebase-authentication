import { useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth} from "../firebase";
import { useNavigate } from "react-router-dom";


export default function Register(){
    const navigate = useNavigate();

    const [ email , setEmail] = useState('');
    const [ password, setPassword ] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [err , setErr ] = useState('');
    
    async function handleSignUp(e){
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('Passwords do not match');
          } else {
        await createUserWithEmailAndPassword(auth,email, password)
          .then((userCredential) => {
            const user = userCredential.user
            navigate("/login")
          })
          .catch((error) => {
            const errorMessage = error.message
            setErr(errorMessage)
          })
        }
      }

    return (
        <div className="form-card" >
           <form
            onSubmit={handleSignUp}>
            <label>Register</label>
            <input
             type="text" 
             placeholder="Your Name"
             />
            <input 
            onChange={(e) => setEmail(e.target.value)}
            type='email' 
            value={ email }
            placeholder="Your Email" 
            required/>
            <input 
            onChange={(e) => setPassword(e.target.value)}
            value={ password }
            type="password" 
            placeholder="Password"  
            required/>
            <input
            value={ confirmPassword }
            onChange={(e) => setConfirmPassword(e.target.value)}
             type="password" placeholder="Confirm Password" required />
            <input
             type="number" placeholder="Phone Number" required
             />
            <h4>
                {err}
            </h4>  
            <button type="submit">Sign Up</button>
           </form>
        </div>
    )
}