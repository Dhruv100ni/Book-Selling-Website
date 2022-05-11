import React from 'react'
import '../components/pages/Contac.css'

const Contact = () => {
  return (
    <div>
      <div>
      <div className='contact_info'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              {/* Phone Number */}
              <div className='contact_info_item d-flex justify-content-start align-items-center'>
              <i class="fa fa-mobile" aria-hidden="true"></i>
                <div className='contact_info_title'>
                  Phone Number
                </div>
                <div className='contact_info_text'>
                  +91 1111 543 2198
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Email */}
      <div className='contact_info'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <div className='contact_info_item d-flex justify-content-start align-items-center'>
              <i class="fa fa-envelope" aria-hidden="true"></i>
                <div className='contact_info_title'>
                  E-Mail
                </div>
                <div className='contact_info_text'>
                  bhanusoni@jklu.edu.in
                  dhruvsoni@jklu.edu.in
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Address */}
      <div className='contact_info'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <div className='contact_info_item d-flex justify-content-start align-items-center'>
                <div className='contact_info_title'>
                  Address
                </div>
                <div className='contact_info_text'>
                  JK Lakshmipat University
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>

      </div>

      {/* Contact Us Form */}
      <div className='contact_form'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-10 offset-lg-1'>
              <div className='contact_form_container py-5'>
                <div className='contact_info_title'>
                  Get in Touch
                </div>
                <form id='contact_form'>
                  <div className='contact_form_name d-flex justify-content-between align-items-between'>
                    <input type='text' id='contact_form_name' className='contact_form_Name input _field' placeholder='Your Name' required='true'/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type='email' id='contact_form_email' className='contact_form_email input _field' placeholder='Your Email' required='true'/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type='text' id='contact_form_phone' className='contact_form_phone input _field' placeholder='Your Phone Number' required='true'/> <br/>
                    <div className='contact_form_text mt-5'>
                      <textarea className="text_field contact_form_message" id='contact_form_message' placeholder='Your Message' required='true' rows='10' cols='30'></textarea>
                    </div>
                  </div>
                </form>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Us Form Button */}
      <div className='contact_form_button'>
        <button type='submit' className='button contact_submit_button'>Send Message</button>
      </div>
    </div>
  )
}

export default Contact