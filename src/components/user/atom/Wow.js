import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Wow() {
    let nav = useNavigate();

    const user=()=>{
        nav('/user')
    }
  return (
    <div onClick={user} className='cursor my-3'>
        <p className='d-grid'>
            <span className='wowlog'>WOW</span>
            <span className='logwow'>WINDOW OF WORLD</span>
        </p>
    </div>
  )
}
