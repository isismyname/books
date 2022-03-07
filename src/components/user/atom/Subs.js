import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Subs(props) {
    let nav= useNavigate();
    const subs=()=>{
      nav('/subscribing')
    }
  return (
    <div onClick={subs} className='d-flex cursor my-3'>
        <img src="https://img.icons8.com/ios-glyphs/30/000000/add-book.png" alt='done'/>
        <div className='d-flex mx-3'>
          <p className='my-auto'>Subscribe</p>
          <p className='my-auto mx-1 props'>{props.quantity}</p>
        </div>
    </div>
  )
}
