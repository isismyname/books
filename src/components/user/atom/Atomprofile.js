import React from 'react'
import { useNavigate } from 'react-router-dom';
import img1 from '../../img/ed.jpeg'

export default function Atomprofile() {
    let nav = useNavigate();
    const prof=()=>{
        nav('/profile')
    }
    const updateprof=()=>{
        nav('/update-profile')
    }
  return (
    <div>
        <div onClick={updateprof}>
            <img src={img1} className='pp cursor' alt="Profile" />
            <div className='my-3 text-center'>
                <p className='cursor fs-4 fw-bold'>Name</p>
                <p className='cursor fs-6'>Status</p>
            </div>
        </div>
        <hr />
        <div onClick={prof} className='cursor d-flex my-3'>
            <img src="https://img.icons8.com/ios-glyphs/30/000000/gender-neutral-user.png" alt='done'/>
            <p className='my-auto mx-3'>Profile</p>
        </div>
    </div>
  )
}
