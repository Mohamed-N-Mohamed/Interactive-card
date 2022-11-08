import React from 'react'

import MobileBG from '../assets/images/bg-main-mobile.png'
import Card_Back from '../assets/images/bg-card-back.png'
import Card_Front from '../assets/images/bg-card-front.png'

const Header = () => {
  return (
    <div className="card h-52 bg-center bg-no-repeat bg-cover mb-12" style={{backgroundImage: `url(${MobileBG})`}}>
    <div className="card-img-1 relative p-2">
      <img src={Card_Back} alt=""  className='w-64 absolute left-24 top-6'/>
      <span className='card-info absolute top-20 right-14 text-white text-sm'>
        <p className='tracking-[.25em] text-xs mt-1'>000</p>
      </span>
    </div>

    <div className="card-img-2 mt-4">
    <img src={Card_Front} alt=""  className='w-64 absolute top-24 left-4'/>
      <span className='card-info absolute top-40 left-10 text-white text-sm '>
        <p className='tracking-[.25em]'>0000</p>
      </span>

      <span className='card-info absolute top-40 left-24 text-white text-sm '>
        <p className='tracking-[.25em]'>0000</p>
      </span>

      <span className='card-info absolute top-40 left-36 text-white text-sm mr-2'>
        <p className='tracking-[.25em]'>0000</p>
      </span>

      <span className='card-info absolute top-40 left-48 text-white text-sm ml-2'>
        <p className='tracking-[.25em]'>0000</p>
      </span>
    </div>
  

  </div>
  )
}

export default Header