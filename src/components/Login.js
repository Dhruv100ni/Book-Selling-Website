import {React, useState} from 'react';
import '../Images/img.jpg';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import './Signup';
import * as EmailValidator from 'email-validator';
import { getAuth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const FSignin = () => {
        console.log(email, password);
        if (EmailValidator.validate(email)) {
            signInWithEmailAndPassword(getAuth (), email, password).then(cred => {
                console.log(cred);
                document.location.href = "/";
            }).catch(error => {
                console.log(error);
            })
        }
    }
    return(
        <div>
            <section className='sign-in'>
            <div className='container mt-5'>
                <div className='signin-content'>
                <form className ="signin_form">
                <img src='https://images.unsplash.com/photo-1584801096196-592feb269e31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' width="400" height="300" alt=''></img>
                {/*<NavLink to = "/signup" className = "signup-image-link">Create an Account</NavLink> */}
                    <div className='signin-from'>
                        {/* Adding sign up page */}
                        <h2 className='form-title'>Sign In</h2>
                        <h4 className='need_account'>Need an account? <NavLink to = "./Signup" className = "signup-image-link">SignUp</NavLink></h4>
                        <form className='register-form' id = 'register-form'>
                            <div className='form-group'>
                                <label htmlFor='email'>
                                    <i className="zmdi zmdi-email material-icons-name"></i>
                                </label>
                                <TextField id="standard-basic" label="Your Email" variant="standard"  onChange={e => setEmail(e.target.value)} />
                            </div>

                            <div className='form-group'>
                                <label htmlFor='password'>
                                    <i className="zmdi zmdi-lock material-icons-name"></i>
                                </label>
                                <TextField id="standard-basic" label="Your Passowrd" variant="standard" onChange={e => setPassword(e.target.value)} />
                            </div>  <br/>

                            <div className='form-group form-button'>
                                <Button variant="contained" onClick={FSignin}>Sign In</Button>
                                
                                
                            </div>
                           
                        </form>
                    </div>
                    </form>
                </div>
            </div>

        </section>
        </div>
    )
        
}

export default Login