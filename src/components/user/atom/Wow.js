import React from 'react'
import { useNavigate } from 'react-router-dom';
import img from '../../img/iconnavbar.png'

export default function Wow() {
    let nav = useNavigate();

    const user=()=>{
        nav('/user')
    }
  return (
    <div onClick={user} className='cursor my-3'>
      <img src={img} alt="WindowOfWorld" />
    </div>
  )
}
