import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

const StageCards = ({img, title, info, amt}) => {
  return (
    <div className='stage-cards'>
        <div className="stage-img-container">
            <img src={img} alt="stage1" />
        </div>
        <p className="stage-title">{title}</p>
        <p className="stage-info">{info}</p>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <button className='contact-btn' style={{width: '183px'}}>Contact Us <AiOutlineArrowRight size={18} style={{marginLeft: '10px'}}/></button>
            {amt && <p style={{fontFamily: 'Open Sans', fontSize: '18px', lineHeight: '24px'}}>INR {amt}/Project</p>}
        </div>
    </div>
  )
}

export default StageCards