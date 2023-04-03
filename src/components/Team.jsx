import React from 'react'
import './styles/mainpage.css'
import TeamCard from './TeamCard'

const Team = () => {
  return (
    <div className='team-container'>
      <div className="offering-title-container">
        <p className="offering-title">Our Team Members</p>
        <div className="underline-team-title"></div>
      </div>
      <div style={{width: '1464px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginTop: '34px'}}>
        <TeamCard img='./images/team1.png' title='Brajesh Pathak' info='A Chartered Accountant & Company Secretary, has over a decade of experience in managing realty focused venture capital funds, and was heading Azure Capital Advisors Private Limited. He has also been'/>
        <TeamCard img='./images/team2.png' title='Deepak Shukla' info='Deepak Shukla has completed his B.Tech (hons.) from the Indian Institute of Technology (IIT) Kharagpur and obtained an MBA from the Indian Institute of Management (IIM) Ahmedabad, India. He has an overall experience of 11 years in firms like Credit Suisse, FICO, Alvarez and Marsal and The World Bank across geographies. In the past few years, his focus is in solving real world challenges using AI. He has engaged in development of voicebots for contact centres, automated training and validation for Autonomous vehicles applications.'/>
        <TeamCard img='./images/team3.png' title='Alok Kumar Singh' info='Entrepreneur with pedigree from IIT-BHU and IIML, and more than 25 years of experience in management responsibilities in top tier companies including Infosys, Infosys BPO and Azure Capital. Co-Founded Azure Capital, a Real Estate Private Equity Fund and Azven Realty, a full service Real Estate Development firm in Bangalore. Set-up and managed a SEBI registered VC fund under Azure Capital. Actively involved in mentoring and advising seed and growth stage startups  at C-Level in Visioning, Governance, Strategy Development & Implementation, Growth Planning, Goal Setting and Investment Structuring & Management.'/>
      </div>
    </div>
  )
}

export default Team