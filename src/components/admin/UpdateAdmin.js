import React, { useEffect, useState } from 'react'
import Navadmin from './Navadmin'
import { API } from '../../config/api'

export default function UpdateAdmin() {

  const [user, setUser] = useState([])

  const [form, setForm] = useState({
    phone: "",
    gender: "",
    address: "",
  });

  const getUser = async (id) => {
    try {
        const response = await API.get('/user/' + id)
        setUser(response.data.data.user)
    } catch (error) {
        console.log(error)
    }
}
  

  const {phone, gender, address} = form

  const handleChangeU = async (e) =>{
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSU = async (id) =>{
    try {
      const handleShow=()=>{
          alert("Update Profile Success")
      }

      const settings = {
        headers:{
          "Content-Type": "application/json"
        }
      }
      const body = JSON.stringify(form)

      const response = await API.patch('/user/' + id, body, settings)
      console.log(response)

      if(response.status === 200){
        handleShow()
      }
    } catch (error) {
      console.log(error.message)
    }
  }
  useEffect(() => {
    getUser();
  }, [])


  return (
    <div className='d-grid'>
        <Navadmin/>
        <div className='text-center mx-auto w-25 my-auto'>
          <div className='m-2 d-grid mx-auto'>
            <form onSubmit={handleSU}>
                <p className='fw-bold fs-1'>Update Profile</p>
                <input onChange={handleChangeU} value={phone} type="text" name='phone' placeholder='Phone' className='p-2 bg-secondary bg-opacity-10 rounded-3 my-2' />
                <input onChange={handleChangeU} value={gender} type="text" name='gender' placeholder='Gender' className='p-2 bg-secondary bg-opacity-10 rounded-3 my-2' />
                <input onChange={handleChangeU} value={address} type="text" name='address' placeholder='Address' className='p-2 bg-secondary bg-opacity-10 rounded-3 my-2' />
                <button className='my-2 rounded-3 bg-danger px-5'>Submit</button>          
            </form>  
          </div>
        </div>
    </div>
  )
}