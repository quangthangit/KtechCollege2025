import React from 'react'
import BannerTop from './BannerTop'
import Nav from './Nav'

const Header = () => {
  return (
    <div className='w-full'>
        <BannerTop/>
        <Nav/>
    </div>
  )
}

export default Header