import React from 'react'
import './styles/mainpage.css'
import { AiOutlineArrowRight } from 'react-icons/ai'

const Home = () => {
  return (
    <div className='home'>
        <div className='banner'>
            <div className="top-caption">
                <p style={{width: '388px', height: '210px', color: 'white', fontFamily: 'Solway', fontSize: '40px', fontWeight: '400'}}>Making your <span style={{fontSize: '48px', fontWeight: '700', color: 'yellow'}}>Real Estate </span> Purchase Journey Faster And Transperent</p>
            </div>
            <div className='top-image'>
                <img src="./images/building.png" alt="building" style={{objectFit: 'cover', objectPosition: 'center', width: '1024.5px', height: '480px', filter: 'brightness(75%)'}}/>
            </div>
        </div>
        <div className='banner-offering' style={{backgroundColor: '#e6eaee', padding: '23px 27px'}}>
          <img src="./images/toyhouse.png" alt="" style={{marginRight: '27px'}}/>
          <div className="banner-info">
            <p style={{fontSize: '36px', fontWeight: '600', margin: '0'}}>Who We Are</p>
            <p style={{margin: '0', fontSize: '18px', color: '#6c6d6f', lineHeight: '24px', textAlign: 'justify'}}>The Indian real estate sector is resilient despite global headwinds. Returns are impressive and the sector is expected to reach US$ 1 trillion in market size by 2030 (Niti Aayog report, 2021). However, the whole real estate purchase journey is very tedious and takes more than 2 years on average. Further, as the ticket size of this investment is large, security and trust become quite critical. Problems compound when you are currently away from your purchase destination. If you are experiencing difficulties in the real estate purchase journey, we are here to make it fast and transparent.</p>
            <button className='contact-btn' style={{display: 'flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box'}}>Contact Now <AiOutlineArrowRight size={18} style={{marginLeft: '10px'}}/></button>
          </div>
        </div>
    </div>
  )
}

export default Home