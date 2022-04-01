import React, { useEffect, useState } from 'react'
import { InputGroup, SplitButton, Dropdown, Button } from 'react-bootstrap'
import { API } from '../../config/api';
// import Modal from './ModalDelete'

export default function IncomeAtom ({item}) {
  const [transaction, setTransaction] = useState([]);
  
  const getTransaction = async () =>{
    try {
        const response = await API.get('/transactions')
        setTransaction(response.data.data.transactions)
        // console.log(response)
    } catch (error) {
        console.log(error.message)
    }
}

  const hApprove = async (id) =>{
        try {
  
          const settings = {
            headers:{
              "Content-Type": "application/json"
            }
          }
          const body = JSON.stringify({
              paymentstatus: "Approve"
          })
  
          const response = await API.patch('/transaction/' + id, body, settings)
          setTransaction(response.data.data.transaction)
          // console.log(response.data.data)
        } catch (error) {
          console.log(error)
        }
      }
      const hPending = async (id) =>{
        try {
  
          const settings = {
            headers:{
              "Content-Type": "application/json"
            }
          }
          const body = JSON.stringify({
              paymentstatus: "Pending"
          })
  
          const response = await API.patch('/transaction/' + id, body, settings)
          setTransaction(response.data.data.transaction)
          // console.log(response.data.data)
        } catch (error) {
          console.log(error.message)
        }
      }
      const hCancel = async (id) =>{
        try {
  
          const settings = {
            headers:{
              "Content-Type": "application/json"
            }
          }
          const body = JSON.stringify({
              paymentstatus: "Cancel"
          })
  
          const response = await API.patch('/transaction/' + id, body, settings)
          setTransaction(response.data.data.transaction)
          // console.log(response.data.data)
        } catch (error) {
          console.log(error.message)
        }
      }
      // console.log(hApprove)
      useEffect(() => {
          getTransaction();
          return ()=>{
            setTransaction()
          }
      }, [])
    return (
    <tr className="bg-dark text-center bg-opacity-50">
            <td className='border-dark border-2'>{item.user.fullname}</td>
            <td className='border-dark border-2'>{item.remainingactive}</td>
            <td className='border-dark border-2'>{item.status}</td>
            <td className='border-dark border-2'>{item.userstatus}</td>            
            {item.userstatus === 'Approve' ? (
              <td className='border-dark border-2'>Approve</td>
            ) : null }
            {item.userstatus === 'Pending' ? (
              <td className='border-dark border-2'>Pending</td>
            ) : null }
            {item.userstatus === 'Cancel' ? (
              <td className='border-dark border-2'>Cancel</td>
            ) : null }
            <td className='border-dark border-2'>{item.paymentstatus}</td>
            <td className='border-dark border-2'>{item.image}</td> 
            <td>
                <InputGroup>
                    <SplitButton
                    variant="outline-dark"
                    title="Status Payment"
                    id="segmented-button-dropdown-1"
                    >
                    <Dropdown.Item onClick={() => hApprove(item.id)} className="bg-success" >
                        Approve
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={() => hPending(item.id)} className="bg-warning" >
                        Pending
                    </Dropdown.Item>
                    <Dropdown.Divider />
                      <Dropdown.Item onClick={() => hCancel(item.id)} className="bg-danger" >
                          Cancel
                      </Dropdown.Item>
                      </SplitButton>
                  </InputGroup>
            </td>
        </tr>
  )
}

// {/* <Link className='text-decoration-none text-center' to={`/transaction` + item.id} key={index}>
//             </Link> */}