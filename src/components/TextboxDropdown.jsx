import React from 'react'

const TextboxDropdown = ({nametext}) => {
    return (
        <div className='fullname'>
            <p style={{fontFamily: 'Open Sans', fontSize: '12px', margin: '0', padding: '0 6px', backgroundColor: 'white', marginTop: '-10px', height: '15px', whiteSpace: 'nowrap', textAlign: 'center'}} >{nametext}</p>
            <input className='textbox' style={{border: 'none', fontSize: '21px', marginTop: '5px'}} type="text" />
        </div>
      )
}

export default TextboxDropdown