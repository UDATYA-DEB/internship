import React from 'react'
import './styles/mainpage.css'
import OfferStages from './OfferStages'
import StageCards from './StageCards'

const Offerings = () => {
  return (
    <div className='offering-container'>
      <div className="offering-title-container">
        <p className="offering-title">Our Offerings</p>
        <div className="underline-offering-title"></div>
      </div>
      <p style={{fontFamily: 'Open Sans', fontSize: '16px', marginBottom: '31px'}}>This whole purchase journey can be divided into three stages. For more details, <span style={{fontWeight: '700', fontSize: '16px', textAlign: 'justify', cursor: 'pointer'}}>Click Here</span></p>
      <div style={{width: '1464px', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <OfferStages stage={1} title='Pre-Booking' active={false} />
        <OfferStages stage={2} title='Post-Booking & Pre-Registration' active={true} />
        <OfferStages stage={3} title='Post-Registration' active={false} />
      </div>
      <div style={{width: '1464px', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <StageCards img='./images/stage1.png' title='Background Verification' info='Assuring your capital is in safe hands, we provide detailed verification reports of the project and developer. These are customized and detailed...' amt={3000}/>
        <StageCards img='./images/stage2.png' title='Virtual Site Visit' info='It becomes imperative to observe your apartment or plot very closely before paying the booking amount. We are here to assist with an AI-enabled UAV...' amt={null}/>
        <StageCards img='./images/stage3.png' title='Title diligence' info='Due diligence is necessary to prevent real estate malpractices which have contributed to more than 20% of the civil cases in India. We have a panel of...' amt={null}/>
      </div>
    </div>
  )
}

export default Offerings