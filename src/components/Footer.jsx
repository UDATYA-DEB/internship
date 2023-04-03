import React from 'react'
import './styles/footer.css'
import { AiOutlineLinkedin } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-menu'>
            <img src="./images/logo-white.svg" alt="logo" />
            <div >
                <p style={{marginTop: '0', fontFamily: 'Open Sans', fontSize: '28px', fontWeight: '700', color: 'white'}}>Company</p>
                <p style={{fontFamily: 'Open Sans', fontSize: '20px', lineHeight: '27.24px', color: 'white'}}>Home</p>
                <p style={{fontFamily: 'Open Sans', fontSize: '20px', lineHeight: '27.24px', color: 'white'}}>Our Offerings</p>
                <p style={{fontFamily: 'Open Sans', fontSize: '20px', lineHeight: '27.24px', color: 'white'}}>Our Team</p>
                <p style={{fontFamily: 'Open Sans', fontSize: '20px', lineHeight: '27.24px', color: 'white'}}>Contact Us</p>
            </div>
            <div >
                <p style={{marginTop: '0', fontFamily: 'Open Sans', fontSize: '28px', fontWeight: '700', color: 'white'}}>Useful Link</p>
                <p style={{fontFamily: 'Open Sans', fontSize: '20px', lineHeight: '27.24px', color: 'white'}}>Blog</p>
                <p style={{fontFamily: 'Open Sans', fontSize: '20px', lineHeight: '27.24px', color: 'white'}}>FAQ's</p>
            </div>
            <div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                <img src="./images/email.svg" alt="email" style={{marginRight: '20px', width: '40px', height: '32px'}}/>
                    <div>
                        <p style={{marginTop: '0', margin: '0', fontFamily: 'Open Sans', fontSize: '24px', fontWeight: '700', color: 'white'}}>Email:</p>
                        <p style={{margin: 0, marginTop: '10px', fontFamily: 'Open Sans', fontSize: '20px', lineHeight: '27.24px', color: 'white'}}>support@inreglobal.com</p>
                    </div>
                </div>
                <div style={{display: 'flex', alignItems: 'center', marginTop: '21px'}}>
                    <img src="./images/phone.svg" alt="email" style={{marginRight: '20px', width: '40px', height: '32px'}}/>
                    <div>
                        <p style={{marginTop: '0', margin: '0', fontFamily: 'Open Sans', fontSize: '24px', fontWeight: '700', color: 'white'}}>Phone:</p>
                        <p style={{margin: 0, marginTop: '10px', fontFamily: 'Open Sans', fontSize: '20px', lineHeight: '27.24px', color: 'white'}}>+91 | 7019305889</p>
                    </div>
                </div>
            </div>
        </div>
        <div style={{boxSizing: 'border-box' ,display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '1920px', height: '70px', paddingLeft: '137px', paddingRight: '127px'}}>
            <p style={{fontFamily: 'Open Sans', fontSize: '18px', fontWeight: '600', lineHeight: '24.51px', color: 'white'}}>Copyright 2023. Designed by INRE Global</p>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '597px'}}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <AiOutlineLinkedin size={19} style={{color: 'white', marginRight: '15px'}}/>
                    <p style={{margin: '0', fontFamily: 'Open Sans', fontSize: '18px', fontWeight: '600', lineHeight: '24.51px', color: 'white'}}>LinkedIn</p>
                </div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <AiOutlineLinkedin size={19} style={{color: 'white', marginRight: '15px'}}/>
                    <p style={{margin: '0', fontFamily: 'Open Sans', fontSize: '18px', fontWeight: '600', lineHeight: '24.51px', color: 'white'}}>Facebook</p>
                </div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <AiOutlineLinkedin size={19} style={{color: 'white', marginRight: '15px'}}/>
                    <p style={{margin: '0', fontFamily: 'Open Sans', fontSize: '18px', fontWeight: '600', lineHeight: '24.51px', color: 'white'}}>Twitter</p>
                </div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <AiOutlineLinkedin size={19} style={{color: 'white', marginRight: '15px'}}/>
                    <p style={{margin: '0', fontFamily: 'Open Sans', fontSize: '18px', fontWeight: '600', lineHeight: '24.51px', color: 'white'}}>Instagram</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer