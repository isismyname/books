import React from 'react'
import img from '../img/taylor.jpeg'
import img1 from '../img/iconnavbar.png'
import { Dropdown, Button, ButtonGroup } from 'react-bootstrap'
import { 
    useNavigate, 
    Link } from 'react-router-dom'

export default function Navadmin() {
    let nav = useNavigate();

    const inco=()=>{
        nav('/admin-income')
    }
    const update=()=>{
        nav('/admin-profile-update')
    }
    // const addbook=()=>{
    //     nav('/admin-add-book')
    // }
    // const logo=()=>{
    //     nav('/')
    // }
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
                        <Dropdown.Item className='text-center d-flex'>
                            <Link className='text-decoration-none link-dark' to='/admin-profile-update'>
                                <div className='d-flex'>
                                    <img src="https://img.icons8.com/ios-glyphs/30/000000/gender-neutral-user.png" alt='done'/>
                                    <p className='mx-auto my-auto'>Update Profile</p>
                                </div>
                            </Link>
                        </Dropdown.Item>
                        <hr />
                        <Dropdown.Item className='text-center d-flex'>
                            <Link className='text-decoration-none link-dark' to='/admin-add-book'>
                                <div className='d-flex'>
                                    <img className='icons' src="https://img.icons8.com/ios-filled/50/000000/add-book.png" alt='Addbook-Icon'/>
                                    <p className='mx-auto my-auto'>Add Book</p>    
                                </div>
                            </Link>
                        </Dropdown.Item>
                        <hr />
                        <Dropdown.Item className='text-center d-flex'>
                            <Link className='text-decoration-none link-dark' to='/admin-income'>
                                <div className='d-flex'>
                                    <img className='icons' src="https://img.icons8.com/external-smashingstocks-mixed-smashing-stocks/68/000000/external-income-finance-trading-and-banking-smashingstocks-mixed-smashing-stocks.png" alt='Income-Icon'/>
                                    <p className='mx-auto my-auto'>Income</p>
                                </div>
                            </Link>
                        </Dropdown.Item>
                        <hr />
                        <Dropdown.Item className='text-center d-flex'>
                            <Link className='text-decoration-none link-dark' to='/'>
                                <div className='d-flex'>
                                    <img className='icons' src="https://img.icons8.com/ios-glyphs/30/000000/exit.png" alt='Logout-Icon'/>
                                    <p className='mx-auto my-auto'>Logout</p>  
                                </div>
                            </Link>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                {/* <Dropdown className="d-flex">
                    <Dropdown.Toggle className='w-75' variant="no" id="dropdown-basic">
                        <img src={img} className='ppp' alt="Admin"/>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className='text-center'>
                            <Dropdown.Item onCLick={inco}>
                                <p className='my-auto'>Income</p>
                            </Dropdown.Item>
                            <hr />
                            <Dropdown.Item onCLick={addbook}>
                                <p className='my-auto'>Add Book</p>
                            </Dropdown.Item>
                            <hr/>
                            <Dropdown.Item onCLick={logo}>
                                <p className='my-auto'>Logout</p>
                            </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown> */}
            </div>
        </div>
    </div>
  )
}
