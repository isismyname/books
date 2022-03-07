import React from 'react'
import Navadmin from './Navadmin'
import img from '../img/taylor.jpeg'

export default function UpdateAdmin() {
    const handleShow=()=>{
        alert("Update Profile Success")
    }
  return (
    <div className='d-grid'>
        <Navadmin/>
        <div className='text-center mx-auto w-25 my-auto'>
          <div className='m-2 d-grid mx-auto'>
            <p className='fw-bold fs-1'>Update Profile</p>
            <img src={img} className='pp mx-auto my-2' alt="Profile" />
            <input type="file" />
            <input type="text" placeholder='Name' className='p-2 bg-secondary bg-opacity-10 rounded-3 my-2' />
            <input type="text" placeholder='Email' className='p-2 bg-secondary bg-opacity-10 rounded-3 my-2' />
            <input type="text" placeholder='Gender' className='p-2 bg-secondary bg-opacity-10 rounded-3 my-2' />
            <input type="text" placeholder='Phone' className='p-2 bg-secondary bg-opacity-10 rounded-3 my-2' />
            <input type="text" placeholder='Address' className='p-2 bg-secondary bg-opacity-10 rounded-3 my-2' />
            <button className='my-2 rounded-3 bg-danger px-5' onClick={handleShow}>Submit</button>            
          </div>
        </div>
    </div>
  )
}