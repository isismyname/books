import React, { useContext, useEffect, useState } from 'react'
import { useNavigate} from 'react-router-dom';
import { API } from '../../../config/api';
import { UserContext } from '../../../context/userContext';
import img1 from '../../img/ed.jpeg'
import Transactions from './Transactions'

export default function Atomprofile() {
    let nav = useNavigate();
    const prof=()=>{
        nav('/profile')
    }
    const updateprof=()=>{
        nav('/update-profile/:id')
    }

    const [state] = useContext(UserContext)
    
    const [userId, setUserId] = useState([]);
    const [trans, setTrans] = useState([])

    const seeUser = async (id) => {
        try {
            const response = await API.get('/users');
            setUserId(response.data.data)
        } catch (error) {
            console.log(error.message)            
        }
    }
    const seeStatus = async () => {
        try {
            const response = await API.get('/transactions')
            setTrans(response.data.data.transactions)
            // console.log("TRANSACTION ==>>", response)
        } catch (error) {
            console.log(error)            
        }
    }

    useEffect(()=>{
        seeUser();
        seeStatus();
    }, [])
  return (
    <div>
        <div onClick={updateprof}>
            <img src={img1} className='pp cursor' alt="Profile" />
            <div className='my-3 text-center'>
                <p className='cursor fs-4 fw-bold'>{state.user.fullname}</p>
                {trans?.map((item, index) => (
                    <Transactions item={item} index={index} />
                ))}
                {/* {trans.map((item) => (
                    <Transactions item={item}/>
                ))} */}
            </div>
        </div>
        <hr />
            <div onClick={prof} className='cursor d-flex my-3'>
                <img src="https://img.icons8.com/ios-glyphs/30/000000/gender-neutral-user.png" alt='done'/>
                <p className='my-auto mx-3'>Profile</p>
            </div>
    </div>
  )
}
