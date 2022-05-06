import React from 'react';
import '../Images/img.jpg';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
    return(
        <>
        <section className='signup'>
            <div className='container mt-5'>
                <div className='signup-content'>
                <form className ="signup_form">
                <img src='https://images.unsplash.com/photo-1584801096196-592feb269e31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' width="400" height="300" alt=''></img>
                {/* <NavLink to = "/signin" className = "signin-image-link">Create an Account</NavLink>  */}
                    <div className='signup-form'>
                        {/* Adding sign up page */}
                        <h2 className='form-title'>Sign Up</h2>
                        <form className='register-form' id = 'register-form'>
                            <div className='form-group'>
                                <label htmlFor='name'>
                                    <i className="zmdi zmdi-account material-icons-name"></i>
                                </label>
                                <TextField id="input-with-sx" label="Your Name" variant="standard" />
                            </div>

                            <div className='form-group'>
                                <label htmlFor='email'>
                                    <i className="zmdi zmdi-email material-icons-name"></i>
                                </label>
                                <TextField id="standard-basic" label="Your Email" variant="standard" />
                            </div>

                            <div className='form-group'>
                                <label htmlFor='phone'>
                                    <i className="zmdi zmdi-phone-in-talk material-icons-name"></i>
                                </label>
                                <TextField id="standard-basic" label="Your Phone Number" variant="standard" />
                            </div>

                            <div className='form-group'>
                                <label htmlFor='work'>
                                    <i className="zmdi zmdi-slideshow material-icons-name"></i>
                                </label>
                                <TextField id="standard-basic" label="Your Profession" variant="standard" />
                            </div>

                            <div className='form-group'>
                                <label htmlFor='password'>
                                    <i className="zmdi zmdi-lock material-icons-name"></i>
                                </label>
                                <TextField id="standard-basic" label="Your Passowrd" variant="standard" />
                            </div> 

                            <div className='form-group'>
                                <label htmlFor='cpassword'>
                                    <i className="zmdi zmdi-lock material-icons-name"></i>
                                </label>
                                <TextField id="standard-basic" label="Your Confirm password" variant="standard" />
                            </div> <br/>

                            <div className='form-group form-button'>
                                <Button variant="contained">Register</Button>
                            </div>

                            <h4 className='register_to_login'>Already have an account? <NavLink to = "./Login" className = "login-image-link">Log In</NavLink></h4>

                            
                        </form>
                    </div>
                    </form>
                </div>
            </div>

        </section>
        </>
    )
}

export default Signup