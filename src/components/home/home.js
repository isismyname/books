import React, {useState} from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import img from '../img/landing.png'

export default function Home() {
  const [showL, setShowL] = useState(false);
  const handleCloseL = () => setShowL(false);
  const handleShowL = () => setShowL(true);
    
  const [showR, setShowR] = useState(false);
  const handleCloseR = () => setShowR(false);
  const handleShowR = () => setShowR(true);

  const switchL =()=>{
    setShowR(true)
    setShowL(false)
  } 
  const switchR =()=>{
      setShowR(false)
      setShowL(true)
  }        

  const Login = () => {
    return (
      <Modal show={showL} onHide={handleCloseL}>
        <Modal.Body>
          <Form>
              <Modal.Title className="text-center fw-1 fs-1 t-red my-3">Login</Modal.Title>
              <Form.Control type="email" placeholder="Enter email" className="border-2 border-danger my-3" />
              <Form.Control type="password" placeholder="Password" className="border-2 border-danger my-3" />
              <Button className='mx-auto fw-bold my-3 w-100' variant="danger" type="submit"> Sign In </Button>
              <p className="text-center"> Don't have an account ? Click <span onClick={switchL} className="fw-bold" >Here</span></p>
          </Form>
        </Modal.Body>
      </Modal>
    );
  };
  const Register = () => {
    return (
      <Modal show={showR} onHide={handleCloseR}>
        <Modal.Body>
          <Form >
              <Modal.Title className="text-center fs-1 fw-1 t-red my-3"> Register </Modal.Title>
              <Form.Control type="email" placeholder="Enter email" name="email"  className="border-2 border-danger my-3" />
              <Form.Control type="password" placeholder="Password" name="password" className="border-2 border-danger my-3" />
              <Form.Control type="text" placeholder="Full Name" name="fullName" className="border-2 border-danger my-3" />
              <Button className='mx-auto fw-bold my-3 w-100' variant="danger" onClick={switchR} type="submit">
                Register
              </Button>
              <p className="text-center"> Already have an account ? Click <span onClick={switchR} className="fw-bold" > Here </span></p>
          </Form>
        </Modal.Body>
      </Modal>
    );
  };

    return(
        <div className='container my-4 pos done d-flex justify-content-around py-4'>
          <div className='d-flex'>
              <p className='my-auto d-grid sizet'>
                <span className='headingtext'>WOW</span>
                <span className='subtext'>WINDOW OF WORLD</span>
                Sign-up now and subscribe to enjoy all the cool and latest books - The best book rental service provider in Indonesia
                <span className='d-flex justify-content-between my-3'>
                  <button onClick={handleShowR} className='btn btn-danger btn-outline-light border-2 px-5 border-rounded border-danger'>Sign Up</button>
                  <button onClick={handleShowL} className='btn btn-light border-2 px-5 border-rounded border-danger'>Sign In</button>
                </span>
              </p>
                <img src={img} className="done" alt="" />
          </div>
          {<Register />}
          {<Login />}
        </div>
    )
}
