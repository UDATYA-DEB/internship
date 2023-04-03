import React from 'react'
import './styles/mainpage.css'
import Textbox from './Textbox'
import TextboxMobile from './TextboxMobile'
import TextboxDropdown from './TextboxDropdown'

const Contact = () => {
  return (
    <div className='contact-container'>
      <div className="contact-form">
        <p style={{margin: '0', marginTop: '0px', fontFamily: 'Open Sans', fontSize: '24px', fontWeight: '600', color: '#1A1A1A'}}>Get In Touch With Us To Connect</p>
        <p style={{fontFamily: 'Open Sans', fontSize: '18px', fontWeight: '600', margin: '0'}}>Contact Us</p>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <Textbox nametext='Full Name'/>
            <p style={{margin: '0', marginTop: '5px', fontFamily: 'Mulish', color: '#1A1A1A', opacity: '0.4', fontWeight: '500', fontSize: '12px'}}>Not more than 50 characters</p>
          </div>
          <div>
            <Textbox nametext='Email Address'/>
            <p style={{margin: '0', marginTop: '5px', fontFamily: 'Mulish', color: '#1A1A1A', opacity: '0.4', fontWeight: '500', fontSize: '12px'}}>Please enter a valid email address</p>
          </div>
        </div>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <TextboxMobile nametext='Mobile Number'/>
            {/* <p style={{margin: '0', marginTop: '5px', fontFamily: 'Mulish', color: '#1A1A1A', opacity: '0.4', fontWeight: '500', fontSize: '12px'}}>Not more than 50 characters</p> */}
          </div>
          <div>
            <TextboxDropdown nametext='Country'/>
            {/* <p style={{margin: '0', marginTop: '5px', fontFamily: 'Mulish', color: '#1A1A1A', opacity: '0.4', fontWeight: '500', fontSize: '12px'}}>Please enter a valid email address</p> */}
          </div>
        </div>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <TextboxDropdown nametext='Stages'/>
            {/* <p style={{margin: '0', marginTop: '5px', fontFamily: 'Mulish', color: '#1A1A1A', opacity: '0.4', fontWeight: '500', fontSize: '12px'}}>Not more than 50 characters</p> */}
          </div>
        </div>
        <button style={{width: '350px', height: '49px', fontFamily: 'Open Sans', fontWeight: '600', fontSize: '18px', color: 'white', backgroundColor: '#01244A', borderRadius: '4px'}}>Submit</button>
      </div>
      <img style={{width: '447px', height: '401px'}} src="./images/contact.png" alt="contact" />
    </div>
  )
}

export default Contact