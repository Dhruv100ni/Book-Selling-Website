import React from 'react';
import '../Images/img.jpg';

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
                                <input type="text" name = "name" id ="name" autoComplete='off'
                                    placeholder='Your Name'
                                />
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