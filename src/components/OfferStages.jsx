import React from 'react'

const OfferStages = ({stage, title, active}) => {
  return (
    <div style={{cursor: 'pointer', backgroundColor: `${active ? '#ccd3dc' : '#f2f4f6'}`}} className='stage-container'>
        <div style={{marginBottom: '', display: 'flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box'}}>
            <div style={{width: '48px', height: '48px', borderRadius: '25px', backgroundColor: 'white', display:'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', fontWeight: '600', fontFamily: 'Open Sans'}}>{stage}</div>
            <div style={{fontSize: '24px', fontFamily: 'Open Sans', margin: '0', marginLeft: '20px', lineHeight: '32.68px', width: '191px'}}>{title}</div>
        </div>
        {active && <div className="underline-stage"></div>}
    </div>
  )
}

export default OfferStages