import React from 'react'
import './styles/mainpage.css'
import BlogCard from './BlogCard'
import Arrow from './Arrow'

const Blogs = () => {
  return (
    <div className='blog-container'>
      <div className="offering-blog-container">
        <p className="blog-title">Blogs</p>
        <div className="underline-blog-title"></div>
      </div>
      <div style={{width: '1710px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '35px'}}>
        <Arrow dir='left' size={20} />
        <BlogCard img='./images/blog1.png' date='09 jun 2022' title='Guide for personal property Buying' info='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididuut labore dolore magna aliqua do eiusmod...'/>
        <BlogCard img='./images/blog2.png' date='09 jun 2022' title='Guide for personal property Buying' info='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididuut labore dolore magna aliqua do eiusmod...'/>
        <BlogCard img='./images/blog3.png' date='09 jun 2022' title='Guide for personal property Buying' info='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididuut labore dolore magna aliqua do eiusmod...'/>
        <Arrow dir='right' size={20} />
      </div>
    </div>
  )
}

export default Blogs