import React, {useState, useContext} from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import img from '../img/landing.png'
import img1 from '../img/iconlandingpage.png'
import { UserContext } from '../../context/userContext';
import { useNavigate } from 'react-router-dom';
import { API } from "../../config/api";

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
    const nav = useNavigate();
    const [state, dispatch] = useContext(UserContext);
    
    const [form, setForm] = useState({
    email: "",
    password: ""
  })

  const { email, password } = form;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-type": "application/json"
        }
      }

      const body = JSON.stringify(form)

      const response = await API.post('/login', body, config)

      console.log(response.data.data)

      if (response.status === 200) {
        
        // Status check
        if (response.data.data.role === 'admin') {
          nav('/admin-income');
        }else{
          nav('/user');
        }
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: response.data.data,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };
    return (
      <Modal show={showL} onHide={handleCloseL}>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
              <Modal.Title className="text-center fw-1 fs-1 t-red my-3">Login</Modal.Title>
              <Form.Control value={email} onChange={handleChange} id='email' name='email' type="email" placeholder="Enter email" className="border-2 border-danger my-3" />
              <Form.Control value={password} onChange={handleChange} id='password' name='password' type="password" placeholder="Password" className="border-2 border-danger my-3" />
              <Button className='mx-auto fw-bold my-3 w-100' variant="danger" type="submit"> Sign In </Button>
              <p className="text-center"> Don't have an account ? Click <span onClick={switchL} className="fw-bold" >Here</span></p>
          </Form>
        </Modal.Body>
      </Modal>
    );
  };
  const Register = () => {
    const [form, setForm] = useState({
      fullname: "",
      email: "",
      password: "",
      address: "",
      phone: "",
      gender: "",
    });

    const {fullname, email, password, address, phone, gender} = form

    const handleChangeF = async (e) =>{
      setForm({
        ...form,
        [e.target.name]: e.target.value
      })
    }

    const handleSR = async (e) =>{
      try {
        e.preventDefault();

        const settings = {
          headers:{
            "Content-Type": "application/json"
          }
        }
        const body = JSON.stringify(form)

        const response = await API.post('/register', body, settings)
        console.log(response)

        if(response.status === 200){
          switchR()
        }
      } catch (error) {
        console.log(error.message)
      }
    }

    return (
      <Modal show={showR} onHide={handleCloseR}>
        <Modal.Body>
          <Form >
              <Modal.Title className="text-center fs-1 fw-1 t-red my-3"> Register </Modal.Title>
              <Form.Control onChange={handleChangeF} value={email} type="email" placeholder="Enter email" name="email"  className="border-2 border-danger my-3" />
              <Form.Control onChange={handleChangeF} value={password} type="password" placeholder="Password" name="password" className="border-2 border-danger my-3" />
              <Form.Control onChange={handleChangeF} value={fullname} type="text" placeholder="Full Name" name="fullname" className="border-2 border-danger my-3" />
              <Form.Control onChange={handleChangeF} value={address} type="text" placeholder="Address" name="address" className="border-2 border-danger my-3" />
              <Form.Control onChange={handleChangeF} value={phone} type="text" placeholder="Phone" name="phone" className="border-2 border-danger my-3" />
              <Form.Control onChange={handleChangeF} value={gender} type="text" placeholder="Gender" name="gender" className="border-2 border-danger my-3" />
              <Button className='mx-auto fw-bold my-3 w-100' variant="danger" onClick={handleSR} type="submit">
                Register
              </Button>
              <p className="text-center"> Already have an account ? Click <span onClick={switchR} className="fw-bold" > Here </span></p>
          </Form>
        </Modal.Body>
      </Modal>
    );
  };

    return(
        <div className='container pos done d-flex justify-content-around'>
          <div className='d-flex'>
              <p className='my-auto d-grid sizet'>
                <img src={img1} className='w-100' alt="WindowOfWorld" />
                Sign-up now and subscribe to enjoy all the cool and latest books - The best book rental service provider in Indonesia
                <span className='d-flex justify-content-between my-3'>
                  <button onClick={handleShowR} className='btn btn-danger btn-outline-light border-2 px-5 border-rounded border-danger'>Sign Up</button>
                  <button onClick={handleShowL} className='btn border-2 px-5 border-rounded border-danger'>Sign In</button>
                </span>
              </p>
                <img src={img} className="done" alt="" />
          </div>
          {<Register />}
          {<Login />}
        </div>
    )
}
