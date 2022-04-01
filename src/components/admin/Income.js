import React, { useEffect, useState } from 'react'
import { API } from '../../config/api'
import Navadmin from './Navadmin'
import IncomeAtom from './IncomeAtom'
import Masonry from 'react-masonry-css'

export default function Income(item, index) {
    const [transaction, setTransaction] = useState([])

    const getTransaction = async () =>{
        try {
            const response = await API.get('/transactions')
            setTransaction(response.data.data.transactions)
            console.log(response)
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getTransaction();
        return () => {
            setTransaction([])
        }
    }, [])
    const breakpointColumnsObj = {
      default: 6,
      1100: 4,
      700: 3,
      500: 2,
    };

  return (
    <div>
        <Navadmin/>
        <div className='mx-5'>
            <table border='2' className='my-5 table table-bordered border-2 border-dark'>
                <tr className='text-dark text-center bg-dark bg-opacity-25'>
                    <th className='border-dark border-2'>Name</th>
                    <th className='border-dark border-2'>Active Account</th>
                    <th className='border-dark border-2'>Status</th>
                    <th className='border-dark border-2'>Status User</th>
                    <th className='border-dark border-2'>Status Payment</th>
                    <th className='border-dark border-2'>Transfer Proof</th>
                    <th className='border-dark border-2'>Action</th>
                </tr>
                {transaction.map((item, index)=>(
                        <IncomeAtom item={item} index={index} />
                ))}
            </table>       
        </div>
    </div>
  )
}