import React from 'react';
import {Row, Col, Card, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import hero from '../img/bukuHero.png'
import DataFake from '../fakedata/DataFake';
import Wow from './atom/Wow'
import Atomprofile from './atom/Atomprofile'
import Subs from './atom/Subs'
import Logout from './atom/Logout'

export default function List(){
    let nav = useNavigate()
    const detailb=()=>{
        nav('/detail-book')
    }
    const handleShow = () => {
      alert("Please make a payment to read the latest books")
    };  
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

      // function Modal(){
      //   return(
      //       <Modal show={show} onHide={handleClose}>
      //         <Modal.Body>
      //           <Form>
      //               <Modal.Title className="text-center fw-1 fs-1 t-red my-3">Please make a payment to read the latest books</Modal.Title>
      //           </Form>
      //         </Modal.Body>
      //       </Modal>
      //   )
      // }

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
                    {DataFake.map((data, index) => (
                        <Col className='' >
                            <Card className='cursor' onClick={detailb} style={{ width: '200px' }}>
                                <Card.Img variant="top" src={data.images} />
                                <Card.Body>
                                    <Card.Title>{data.title}</Card.Title>
                                    <Card.Text className='opacity-50'>{data.textby} {data.author}</Card.Text>
                                </Card.Body>
                                <Button className='btn btn-danger' onClick={handleShow}>Subscribe</Button>
                            </Card>
                        </Col>
                    ))}
                    </Row>
                    {/* <Modal /> */}
                </div>                
            </div>
    )
}