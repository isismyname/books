import React from 'react'
import { Button } from 'react-bootstrap'

export default function ButtonAddList(props) {
  return (
    <div>
        <Button onClick={props.clickHere} className='btn btn-danger btn-outline-light px-5 text-center'>Add List <img src="https://img.icons8.com/fluency-systems-filled/48/000000/add-list.png" alt='Icon' className='icons'/> </Button>
    </div>
  )
}
