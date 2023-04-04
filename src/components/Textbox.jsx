import React from 'react'
import './styles/mainpage.css'

const Textbox = ({nametext}) => {
  return (
    <div className='fullname'>
        <p style={{color: '#767980', fontFamily: 'Open Sans', fontSize: '12px', margin: '0', padding: '0 6px', backgroundColor: 'white', marginTop: '-10px', height: '15px', whiteSpace: 'nowrap', textAlign: 'center'}} >{nametext}</p>
        <input className='textbox' style={{width: '100%', opacity: '0.6',marginTop: '8px', border: 'none', fontSize: '14px'}} type="text" />
    </div>
  )
}

export default Textbox