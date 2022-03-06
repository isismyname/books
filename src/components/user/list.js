import React, {useState} from 'react';
import {Row, Col, Card, Form, Button} from 'react-bootstrap'
import hero from '../img/bukuHero.png'
import UserPage from './userPage';
import DataFake from '../fakedata/DataFake';

export default function List(){
    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
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
                <UserPage />
                <div className='d-grid'>
                    <Hero />
                    <Row>
                    {DataFake.map((data, index) => (
                        <Col >
                            <Card style={{ width: '200px' }}>
                                <Card.Img variant="top" src={data.images} />
                                <Card.Body>
                                    <Card.Title>{data.title}</Card.Title>
                                    <Card.Text className='opacity-50'>{data.textby} {data.author}</Card.Text>
                                </Card.Body>
                                <Button onClick={handleShow}>Subscribe</Button>
                            </Card>
                        </Col>
                    ))}
                    </Row>
                    {/* <Modal /> */}
                </div>                
            </div>
    )
}