import React from 'react'
import UserPage from './userPage'

export default function () {
  const handleShow = () => {
    alert("Thank you for subscribing to premium, your premium package will be active after our admin approves your transaction. Thank you")
  };
  return (
    <div className='d-flex'>
        <UserPage />
        <div className='text-center mx-auto my-auto'>
          <div className='m-2 d-grid mx-auto'>
            <p className='fw-bold fs-1'>Premium</p>
            <p>Pay now and access all the latest books from <span className='wowlog fs-5'>WOW</span> </p>
            <p> <span className='wowlog fs-5'>WOW</span> :0812312312</p>
            <input type="text" placeholder='Input your account number' className='p-2 bg-secondary bg-opacity-10 rounded-3 my-2' />
            <input type="file" />
            <button className='my-2 rounded-3 bg-danger px-5' onClick={handleShow}>Submit</button>            
          </div>
        </div>
    </div>
  )
}