import React, { useState } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

const BlogCard = ({img, date, title, info}) => {
    const [readMore, setReadMore] = useState(false);

    const handleReadMore = ()=>{
        setReadMore(!readMore)
    }
  return (
    
<div className='blog-card'>
    <div className="stage-img-container">
        <img src={img} alt="stage1" />
    </div>
    <p style={{margin: '0', fontFamily: 'Open Sans', fontWeight: '400', fontSize: '16px', lineHeight: '22px', color: '#002550'}}>Real Estate, Analysis</p>
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <div className='date'>
            <img style={{marginBottom: '1px'}} src="./images/cal-logo.svg" alt="cal" />
            <p style={{fontFamily: 'Open Sans', fontWeight: '600', fontSize: '16px', lineHeight: '21.8px', marginLeft: '14px'}}>{date}</p>
        </div>
        <p className='by-admin-text'>By Admin</p>
    </div>
    <div>
        <p style={{marginLeft: '-2px', marginBottom: '14px'}} className="stage-title">{title}</p>
        <div className="team-info">{readMore ? info : `${info.substring(0,212)}`}</div>
    </div>
    <button onClick={handleReadMore} className='view-btn' style={{width: '182px'}}>View More<AiOutlineArrowRight size={18} color='#01244A' style={{marginLeft: '10px', color: '#01244A'}}/></button>
</div>
  )
}

export default BlogCard