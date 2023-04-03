import React, { useState } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

const TeamCard = ({img, title, info}) => {
    const [readMore, setReadMore] = useState(false);

    const handleReadMore = ()=>{
        setReadMore(!readMore);
    }
  return (
    <div className='team-card'>
        <div className="stage-img-container">
            <img src={img} alt="stage1" />
        </div>
        <p className="stage-title">{title}</p>
        <div>
            <div className="team-info">{readMore ? info : `${info.substring(0,212)}...`}</div>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'right', height: '16px'}}>
                <p onClick={handleReadMore} style={{cursor: 'pointer', fontFamily: 'Open Sans', fontSize: '16px', color: '#002550'}}>{readMore ? 'View Less' : 'View More'}</p>
            </div>
        </div>
    </div>
  )
}

export default TeamCard