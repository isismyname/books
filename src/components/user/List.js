import React, { useEffect, useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap'
import hero from '../img/bukuHero.png'
// import DataFake from '../fakedata/DataFake';
import Wow from './atom/Wow'
import Atomprofile from './atom/Atomprofile'
import Subs from './atom/Subs'
import Logout from './atom/Logout'
import { API } from '../../config/api';
import { useNavigate, useParams } from 'react-router-dom';

export default function List(){
    function Hero() {
      return (
                <div className="container my-5">
                    <div className="d-flex rounded bg-danger">
                        <div className=''>
                            <p className='mx-2 fs-1 fw-bold'>
                                <span className='headingtext'>SUBSCRIBE</span>
                                <span className='access'> NOW TO ACCESS THE ENTIRE</span>
                                <span className='headingtext text-warning'> BOOK</span>
                            </p>
                        </div>
                        <img className='' src={hero} alt="best" />
                    </div>
                </div>
      )
    }
      let nav = useNavigate()
      let {id} = useParams()

      const detailb=()=>{
          nav('/detail-book/:id')
      }
      // const handleShow = () => {
      //   alert("Please make a payment to read the latest books")
      // };  
      
    //   const [transactions, setTransactions] = useState([])

    //   const getAllTransaction = async () => {
    //     try {
    //       const res = await API.get('/transaction/' + id)
    //       setTransactions(res.data.data.transaction)
    //       console.log("TRANSACTION =>", res.data.data.transaction)
    //       if(res.data.data.status === "SUBSCRIBE"){
    //           detailb()
    //       }else{
    //           handleShow()
    //       }
    //     } catch (error) {
    //       console.log(error.message)
    //     }
    //   }

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

    return(
            <div className='d-flex'>
                <div className='d-grid h-50 text-center px-5'>
                    <Wow />
                    <hr />
                    <Atomprofile />
                    <Subs />
                    <hr />
                    <Logout />
                </div>
                <div className='d-grid'>
                    <Hero />
                    <Row>
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