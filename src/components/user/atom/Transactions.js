import React,
{ useEffect, useState } 
from 'react'
import { useParams } from 'react-router-dom';
import { API } from '../../../config/api';

export default function Transactions({item}) {
    const {id} = useParams();
    const [transaction, setTransaction] = useState([]);
    
    const getTransactions = async () =>{
        try {
            const response = await API.get('/transactions')
            setTransaction(response.data.data.transactions)
            // console.log(response)
        } catch (error) {
            console.log(error.message)
        }
    }

    // const getTransaction = async () =>{
    //     try {
    //         const response = await API.get('/transaction/' + id)
    //         setTransaction(response.data.data.transaction)
    //         // console.log(response)
    //     } catch (error) {
    //         console.log(error.message)
    //     }
    // }

    useEffect(() => {
        // getTransaction(id)
        getTransactions();
        // return (id)=>{
        //   setTransaction(id)
        // }
        return ()=>{
            setTransaction(id)
          }
    }, [])
  return (
        <p className='cursor fs-6'>{item.status}</p>
  )
}
