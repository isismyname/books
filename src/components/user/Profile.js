import React, { useEffect, useContext, useState } from 'react'
import {Card, Col, Row} from 'react-bootstrap'
import img from '../img/ed.jpeg'
import { useNavigate, useParams } from 'react-router-dom'
import Wow from './atom/Wow'
import Atomprofile from './atom/Atomprofile'
import Subs from './atom/Subs'
import Logout from './atom/Logout'
import { API } from '../../config/api'
import {UserContext} from '../../context/userContext'

export default function Profile() {
    // console.clear()
    // let {id} = useParams()
    let nav = useNavigate();
    let {id} = useParams()

    const prof=()=>{
        nav('/edit-profile/:id')
    }

    const detailb=()=>{
        nav('/detail-book/:id')
    }
    
    const [books, setBooks] = useState([])

    const getAll = async () => {
      try {
        const res = await API.get('/books')
        setBooks(res.data.data.books)
        // console.log("BOOKS =>", res.data.data)
      } catch (error) {
        console.log(error.message)
      }
    }

    useEffect(() => {
      getAll();
    //   getAllTransaction(id);
    }, [])

    const [state] = useContext(UserContext)
    
    const [userId, setUserId] = useState([]);

    const seeUser = async (id) => {
        try {
            const response = await API.get('/users');
            setUserId(response.data.data)
        } catch (error) {
            console.log(error.message)            
        }
    }

    useEffect(()=>{
        seeUser();
    }, [])
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
            {/* {userId?.map((data, index)=>( */}
            <div className='d-flex justify-content-between bg-danger bg-opacity-25 rounded-3'>
                <div className='d-grid mx-2'>
                    <div className='d-flex my-auto'>
                        <img alt='Icon' className='icons my-auto' src="https://img.icons8.com/external-nawicon-glyph-nawicon/64/000000/external-email-communication-nawicon-glyph-nawicon-2.png"/>
                        <div className='d-grid mx-3 my-auto'>
                            <p>email</p>
                            <p> {state.user.email} </p>
                        </div>
                    </div>
                    <div className='d-flex my-auto'>
                        <img alt='Icon' className='icons my-auto' src="https://img.icons8.com/ios-filled/50/000000/gender.png"/>
                        <div className='d-grid mx-3 my-auto'>
                            <p>Name</p>
                            <p> {state.user.fullname} </p>
                        </div>
                    </div>
                    <div className='d-flex my-auto'>
                        <img alt='Icon' className='icons my-auto' src="https://img.icons8.com/ios-filled/50/000000/apple-phone.png"/>
                        <div className='d-grid mx-3 my-auto'>
                            <p>Gender</p>
                            <p> {userId?.phone ? userId?.phone : "-"} </p>
                        </div>
                    </div>
                    <div className='d-flex my-auto'>
                        <img alt='Icon' className='icons my-auto' src="https://img.icons8.com/ios-filled/50/000000/address--v1.png"/>
                        <div className='d-grid mx-3 my-auto'>
                            <p>Address</p>
                            <p> {userId?.address ? userId?.address : "-"}</p>
                        </div>
                    </div>
                </div>
                <div className='d-grid mx-2 w-25'>
                    <img src={img} className='pprofile' alt="Profile" />
                    <button onClick={prof} className='btn btn-danger my-3'>Edit Profile</button>
                </div>
            </div>
            {/* ))} */}
            <Row className='my-5'>
                <p className='fw-bold fs-1'>My List Book</p>
                {books.map((item) =>(
                    <Col>
                        <Card onClick={detailb} className='cursor' style={{ width: '200px' }}>
                            <Card.Img variant="top" src={item.image} />
                            <Card.Body>
                                <Card.Title> {item.title} </Card.Title>
                                <Card.Text className='opacity-50'> {item.author} </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    ))}
            </Row>
        </div>
    </div>
  )
}
