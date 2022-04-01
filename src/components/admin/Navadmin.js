import React, { useContext } from 'react'
import img from '../img/taylor.jpeg'
import img1 from '../img/iconnavbar.png'
import { Dropdown, Button, ButtonGroup } from 'react-bootstrap'
import { useNavigate, Link } from 'react-router-dom'
import { UserContext } from '../../context/userContext'


export default function Navadmin() {
    let nav = useNavigate();
    const update=()=>{
        nav('/admin-profile-update')
    }
    const profile=()=>{
        nav('/admin-profile-update')
    }
    const income=()=>{
        nav('/admin-income')
    }
    const book=()=>{
        nav('/admin-add-book')
    }
    const updating=()=>{
        nav('/admin-update-book')
    }
    const list=()=>{
        nav('/admin-list')
    }
    const detail=()=>{
        nav('/detail-book/:id')
    }
    const [state, dispatch] = useContext(UserContext);
    const logout = () => {
      console.log(state);
      dispatch({
        type: "LOGOUT",
      });
      nav("/");
    };
  return (
    <div>
        <div className='d-flex justify-content-between m-4'>
            <div>
                <img src={img1} alt="WindowOfWorld" />
            </div>
            <div>
                <Dropdown as={ButtonGroup}>
                    <Button onClick={update} variant="no">
                        <img src={img} className='ppp' alt="Admin"/>
                    </Button>

                    <Dropdown.Toggle split variant="no" id="dropdown-split-basic" />

                    <Dropdown.Menu>
                        <Dropdown.Item className='text-center d-flex' onClick={profile}>
                                <div className='d-flex'>
                                    <img src="https://img.icons8.com/ios-glyphs/30/000000/gender-neutral-user.png" alt='done'/>
                                    <p className='mx-auto my-auto'>Update Profile</p>
                                </div>
                        </Dropdown.Item>
                        <hr />
                        <Dropdown.Item className='text-center d-flex' onClick={book}>
                                <div className='d-flex'>
                                    <img className='icons' src="https://img.icons8.com/ios-filled/50/000000/add-book.png" alt='Addbook-Icon'/>
                                    <p className='mx-auto my-auto'>Add Book</p>    
                                </div>
                        </Dropdown.Item>
                        <hr />
                        <Dropdown.Item className='text-center d-flex' onClick={list}>
                                <div className='d-flex'>
                                    <img className='icons' src="https://img.icons8.com/ios-filled/50/000000/add-book.png" alt='Addbook-Icon'/>
                                    <p className='mx-auto my-auto'>List Book</p>    
                                </div>
                        </Dropdown.Item>
                        <hr />
                        <Dropdown.Item className='text-center d-flex' onClick={income}>
                                <div className='d-flex'>
                                    <img className='icons' src="https://img.icons8.com/external-smashingstocks-mixed-smashing-stocks/68/000000/external-income-finance-trading-and-banking-smashingstocks-mixed-smashing-stocks.png" alt='Income-Icon'/>
                                    <p className='mx-auto my-auto'>Income</p>
                                </div>
                        </Dropdown.Item>
                        <hr />
                        <Dropdown.Item className='text-center d-flex' onClick={logout} >
                                <div className='d-flex'>
                                    <img className='icons' src="https://img.icons8.com/ios-glyphs/30/000000/exit.png" alt='Logout-Icon'/>
                                    <p className='mx-auto my-auto'>Logout</p>  
                                </div>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    </div>
  )
}
