import React from 'react';
import '../Images/img.jpg';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';


const Login = () => {
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
                        <form className='register-form' id = 'register-form'>
                            <div className='form-group'>
                                <label htmlFor='email'>
                                    <i class="zmdi zmdi-email material-icons-name"></i>
                                </label>
                                <TextField id="standard-basic" label="Your Email" variant="standard" />
                            </div>

                            <div className='form-group'>
                                <label htmlFor='password'>
                                    <i class="zmdi zmdi-lock material-icons-name"></i>
                                </label>
                                <TextField id="standard-basic" label="Your Passowrd" variant="standard" />
                            </div>  <br/>

                            <div className='form-group form-button'>
                                <Button variant="contained">Sign In</Button>
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