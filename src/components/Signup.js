import React from 'react';
import '../Images/img.jpg';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';

const Signup = () => {
    return(
        <>
        <section className='signup'>
            <div className='container mt-5'>
                <div className='signup-content'>
                    <div className='signup-from'>
                        {/* Adding sign up page */}
                        <h2 className='form-title'>Sign Up</h2>
                        <form className='register-form' id = 'register-from'>
                            <div className='form-group'>
                                <label htmlFor='name'>
                                    <i class="zmdi zmdi-account material-icons-name"></i>
                                </label>
                                <TextField id="input-with-sx" label="Your Name" variant="standard" />
                            </div>

                            <div className='form-group'>
                                <label htmlFor='email'>
                                    <i class="zmdi zmdi-email material-icons-name"></i>
                                </label>
                                <TextField id="standard-basic" label="Your Email" variant="standard" />
                            </div>

                            <div className='form-group'>
                                <label htmlFor='phone'>
                                    <i class="zmdi zmdi-phone-in-talk material-icons-name"></i>
                                </label>
                                <TextField id="standard-basic" label="Your Phone Number" variant="standard" />
                            </div>

                            <div className='form-group'>
                                <label htmlFor='work'>
                                    <i class="zmdi zmdi-slideshow material-icons-name"></i>
                                </label>
                                <TextField id="standard-basic" label="Your Profession" variant="standard" />
                            </div>

                            <div className='form-group'>
                                <label htmlFor='password'>
                                    <i class="zmdi zmdi-lock material-icons-name"></i>
                                </label>
                                <TextField id="standard-basic" label="Your Passowrd" variant="standard" />
                            </div> 

                            <div className='form-group'>
                                <label htmlFor='cpassword'>
                                    <i class="zmdi zmdi-lock material-icons-name"></i>
                                </label>
                                <TextField id="standard-basic" label="Your Confirm password" variant="standard" />
                            </div> <br/>

                            <div className='form-group form-button'>
                            <Button variant="contained">Register</Button>
                            </div>

                            
                        </form>
                    </div>
                </div>
            </div>

        </section>
        </>
    )
}

export default Signup