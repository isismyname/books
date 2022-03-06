import React from 'react'
import img1 from '../img/ed.jpeg'

export default function UserPage() {
  return (
        <div className='d-grid h-50 text-center px-5'>
            <div className='my-3'>
                <p className='d-grid'>
                    <span className='wowlog'>WOW</span>
                    <span className='logwow'>WINDOW OF WORLD</span>
                </p>
            </div>
            <div>
                <img src={img1} className='pp' alt="Profile" />
                <div className='my-3 text-center'>
                    <p className='fs-4 fw-bold'>Name</p>
                    <p className='fs-6'>Status</p>
                </div>
            </div>
                <hr />
            <div>
                <div className='d-flex my-3'>
                    <img src="https://img.icons8.com/ios-glyphs/30/000000/gender-neutral-user.png" alt='done'/>
                    <p className='my-auto mx-3'>Profile</p>
                </div>
                <div className='d-flex my-3'>
                    <img src="https://img.icons8.com/ios-glyphs/30/000000/add-book.png" alt='done'/>
                    <p className='my-auto mx-3'>Subscribe</p>
                </div>
            </div>
            <hr />
            <div>
                <div className='d-flex'>
                    <img src="https://img.icons8.com/ios-glyphs/30/000000/exit.png" alt='done'/>
                    <p className='my-auto mx-3'>Logout</p>                
                </div>
            </div>
        </div>
  )
}