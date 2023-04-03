import React from 'react'
import './styles/navbar.css'
import Tabs from './Tabs'

const Navbar = () => {
  return (
    <div className="nav-container">
        <div className='nav-upper-container'>
            <img src="./images/logo.svg" alt="logo"/>
        </div>
        <div className='nav-lower-container'>
            <img src="./images/logo-name.svg" alt="logo-name" style={{marginTop: '10px'}}/>
            <div className='menu-container'>
                <Tabs title='Home' state={true}/>
                <Tabs title='Our Offerings' state={false}/>
                <Tabs title='Our Team' state={false}/>
                <Tabs title='Contact Us' state={false}/>
                <Tabs title='Blogs' state={false}/>
            </div>
            <button className='btn-register'>Register Now</button>
        </div>
    </div>
  )
}

export default Navbar