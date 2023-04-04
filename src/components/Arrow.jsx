import React from 'react'
import { RiArrowLeftSFill, RiArrowRightSFill} from 'react-icons/ri'

const Arrow = ({dir, size}) => {
  return (
    <div className='blog-arrow-container'>
        {dir === 'left' ? <RiArrowLeftSFill size={size}/> : <RiArrowRightSFill size={size}/>}
    </div>
  )
}

export default Arrow