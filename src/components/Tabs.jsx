import React from 'react'
import './styles/navbar.css'

const Tabs = ({title, state}) => {
  return (
    <div className='tab'>
        <p style={{margin: '0', fontWeight: '600', color: '#002550', fontSize: '18px'}}>{title}</p>
        {state && <div className='underline'></div>}
    </div>
  )
}

export default Tabs