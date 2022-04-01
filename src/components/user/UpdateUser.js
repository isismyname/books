import React, { useContext, useEffect, useState } from 'react'
import img from '../img/ed.jpeg'
import {useParams} from 'react-router-dom'
import Wow from './atom/Wow'
import Atomprofile from './atom/Atomprofile'
import Subs from './atom/Subs'
import Logout from './atom/Logout'
import { UserContext } from '../../context/userContext';
import { API } from "../../config/api";

export default function UpdateUser() {
  const {id} = useParams()
  
  const handleShow=()=>{
      alert("Update Profile Success")
  }
  
  const [userId, setUserId] = useState([])
  const [preview, setPreview] = useState(null)
  const [form, setForm] = useState({
    image: '',
    // fullname: '',
    // email: '',
    address: '',
    gender: '',
    phone: '',
  })

  const getInfo = async (id) =>{
    try {
      const response = await API.get('/user/' + id);
      // setPreview(response.data.data.user.image);
      // setForm({
      //   ...form,
      //   // fullname: response.data.data.user.fullname,
      //   // email: response.data.data.user.email,
      //   gender: response.data.data.user.gender,
      //   phone: response.data.data.user.phone,
      //   address: response.data.data.user.address,
      // })
      setUserId(response.data.data)
      console.log(response.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getInfo(id);
  }, [])

  const handleChange = (e) =>{
    setForm({
      [e.target.name] : e.target.type === 'file' ? e.target.files : e.target.value
    })

    if(e.target.type === 'file'){
      const url = URL.createObjectURL(e.target.files[0])
      setPreview(url)
    }
  }

  const handleS = async (e) =>{
    try {
      e.preventDefault()

      const settings = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }

      const formData = new FormData()
      // if(form.image){
      //   formData.set("image", form?.image[0], form?.image[0].name)
      // }
      // formData.set("fullname", form.fullname)
      // formData.set("email", form.email)
      formData.set("address", form.address)
      formData.set("gender", form.gender)
      formData.set("phone", form.phone)

      const response = await API.patch(`/user/` + userId.id , formData, settings)
      console.log(response.data.data)
      
    } catch (error) {
      console.log(error)
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
        <div className='text-center mx-auto w-25 my-auto'>
          <div className='m-2 d-grid mx-auto'>
            <form onSubmit={handleS}>
              <p className='fw-bold fs-1'>Update Profile</p>
              {/* {preview &&(
                <img onChange={handleChange} src={preview} className='pp mx-auto my-2' alt="Profile" />
              )}
              <input name='image' type="file" />
              <input onChange={handleChange} value={form.fullname} name='fullname' type="text" placeholder='Full Name' className='p-2 bg-secondary bg-opacity-10 rounded-3 my-2' />
              <input onChange={handleChange} value={form.email} name='email' type="text" placeholder='Email' className='p-2 bg-secondary bg-opacity-10 rounded-3 my-2' /> */}
              <input onChange={handleChange} value={form.address} name='address' type="text" placeholder='Address' className='p-2 bg-secondary bg-opacity-10 rounded-3 my-2' />
              <input onChange={handleChange} value={form.phone} name='phone' type="text" placeholder='Gender' className='p-2 bg-secondary bg-opacity-10 rounded-3 my-2' />
              <input onChange={handleChange} value={form.gender} name='gender' type="text" placeholder='Phone' className='p-2 bg-secondary bg-opacity-10 rounded-3 my-2' />
              <button className='my-2 rounded-3 bg-danger px-5' type='submit' onClick={handleShow}>Submit</button>  
            </form>          
          </div>
        </div>
    </div>
  )
}
