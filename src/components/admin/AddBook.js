import React from 'react'
import Navadmin from './Navadmin'

export default function AddBook() {
    const handleShow =()=>{
        alert("The Book will Added to List")
    }
  return (
    <div>
        <Navadmin />
        <div className='text-center mx-auto w-50 my-auto'>
          <div className='m-2 d-grid mx-auto'>
            <p className='fw-bold fs-1'>Add Book</p>
            <input type="text" placeholder='Title' className='p-2 bg-secondary bg-opacity-10 rounded-3 my-2' />
            <input type="text" placeholder='Publication' className='p-2 bg-secondary bg-opacity-10 rounded-3 my-2' />
            <input type="text" placeholder='Usage' className='p-2 bg-secondary bg-opacity-10 rounded-3 my-2' />
            <input type="text" placeholder='Topics' className='p-2 bg-secondary bg-opacity-10 rounded-3 my-2' />
            <input type="text" placeholder='Collection' className='p-2 bg-secondary bg-opacity-10 rounded-3 my-2' />
            <input type="text" placeholder='Language' className='p-2 bg-secondary bg-opacity-10 rounded-3 my-2' />
            <input type="file" />
            <button className='my-2 rounded-3 bg-danger px-5' onClick={handleShow}>Submit</button>            
          </div>
        </div>
    </div>
  )
}
