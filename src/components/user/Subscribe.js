import React, { useState } from 'react'
import Wow from './atom/Wow'
import wind from '../img/subs.png'
import Atomprofile from './atom/Atomprofile'
import Subs from './atom/Subs'
import Logout from './atom/Logout'
import { API } from '../../config/api'

export default function Subscribe() {
  const [preview, setPreview] = useState(null);
  
  const handleShow = () => {
    alert("Thank you for subscribing to premium, your premium package will be active after our admin approves your transaction. Thank you")
  };
  
  const [form, setForm] =  useState({
    accountnumber: ''
  });
  
  const handleChange = (e) =>{
    setForm({
      ...form,
      [e.target.name]: e.target.type === "file" ? e.target.files : e.target.value
    })

    if(e.target.type === "file"){
      const url = URL.createObjectURL(e.target.files[0])
      setPreview(url)
    }
  }

  const hSubmit = async (e) =>{
    try {
      e.preventDefault();
  
      const settings = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }
  
      const formData = new FormData()
      formData.set("accountnumber", form.accountnumber)
      formData.set("image", form.image[0], form.image[0].name)
  
      const response = await API.post('/transaction', formData, settings)
      console.log(response)
      if(response.status === 200){
        handleShow()
      };
    } catch (error) {
      console.log(error.message)
      
    }
  }

  return (
    <div className='d-flex'>
      <div className='d-grid h-50 text-center px-5'>
          <Wow />
          <hr />
          <Atomprofile />
          <Subs />
          <hr />
          <Logout />
      </div>
        <div className='text-center mx-auto my-auto'>
          <form className='m-2 d-grid mx-auto w-50' onSubmit={hSubmit}>
            <p className='fw-bold fs-1'>Premium</p>
            <p>Pay now and access all the latest books from <img src={wind} alt="Window of World" /> </p>
            <p> <img src={wind} alt="Window of World" /> :0812312312</p>
            <input onChange={handleChange} name='accountnumber' type="text" placeholder='Input your account number' className='p-2 bg-secondary bg-opacity-10 rounded-3 my-2' />
            {preview &&(
              <img src={preview} className="w-50 mx-auto rounded" alt="Proof Transfer" />
            )}
            <input onChange={handleChange} name='image' type="file" />
            <button className='my-2 rounded-3 bg-danger px-5'>Submit</button> 
          </form>
        </div>
    </div>
  )
}
