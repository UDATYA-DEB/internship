import React from 'react'
import './styles/mainpage.css'
import Home from './Home'
import Offerings from './Offerings'
import Team from './Team'
import Contact from './Contact'
import Blogs from './Blogs'

const Mainpage = () => {
  return (
    <div className='mainpage'>
        <Home/>
        <Offerings />
        <Team />
        <Blogs />
        <Contact />
    </div>
  )
}

export default Mainpage