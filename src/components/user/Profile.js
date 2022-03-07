import React from 'react'
import {Card, Col, Row} from 'react-bootstrap'
import img from '../img/ed.jpeg'
import DataFake from '../fakedata/DataFake'
import { useNavigate } from 'react-router-dom'
import Wow from './atom/Wow'
import Atomprofile from './atom/Atomprofile'
import Subs from './atom/Subs'
import Logout from './atom/Logout'

export default function Profile() {
    let nav = useNavigate();
    const prof=()=>{
        nav('/profile')
    }
    const dbook=()=>{
        nav('/detail-book')
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

        <div className='mx-auto'>
        <p className='fs-1 fw-bold'>Profile</p>
            <div className='d-flex justify-content-between bg-danger bg-opacity-25 rounded-3'>
                <div className='d-grid mx-2'>
                    <div className='d-flex my-auto'>
                        <img alt='Icon' className='icons my-auto' src="https://img.icons8.com/external-nawicon-glyph-nawicon/64/000000/external-email-communication-nawicon-glyph-nawicon-2.png"/>
                        <div className='d-grid mx-3 my-auto'>
                            <p>email</p>
                            <p>Egigans@mail.com</p>
                        </div>
                    </div>
                    <div className='d-flex my-auto'>
                        <img alt='Icon' className='icons my-auto' src="https://img.icons8.com/ios-filled/50/000000/gender.png"/>
                        <div className='d-grid mx-3 my-auto'>
                            <p>Gender</p>
                            <p>Male</p>
                        </div>
                    </div>
                    <div className='d-flex my-auto'>
                        <img alt='Icon' className='icons my-auto' src="https://img.icons8.com/ios-filled/50/000000/apple-phone.png"/>
                        <div className='d-grid mx-3 my-auto'>
                            <p>Mobile Phone</p>
                            <p>0812-1231-1231</p>
                        </div>
                    </div>
                    <div className='d-flex my-auto'>
                        <img alt='Icon' className='icons my-auto' src="https://img.icons8.com/ios-filled/50/000000/address--v1.png"/>
                        <div className='d-grid mx-3 my-auto'>
                            <p>Address</p>
                            <p>Jl.Pulo Gadung no.54B rt00/02</p>
                        </div>
                    </div>
                </div>
                <div className='d-grid mx-2 w-25'>
                    <img src={img} className='pprofile' alt="Profile" />
                    <button onClick={prof} className='btn btn-danger my-3'>Edit Profile</button>
                </div>
            </div>
            <Row className='my-5'>
                <p className='fw-bold fs-1'>My List Book</p>
                {DataFake.map((data, index) =>(
                    <Col>
                        <Card onClick={dbook} style={{ width: "150px", cursor: 'pointer' }}>
                            <Card.Img variant="top" src={data.images} />
                            <Card.Body>
                                <Card.Title>{data.title}</Card.Title>
                                <Card.Text className='opacity-50'>{data.textby} {data.author}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    </div>
  )
}
