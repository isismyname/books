import React, { useEffect, useState } from 'react'
import { API } from '../../config/api'
import Atomlist from './Atomlist'
import Navadmin from './Navadmin'

export default function ListBook() {
    const [allBook, setAllBook] =  useState([])

    const getBooks = async () =>{
        try {
            const response = await API.get('/books')
            setAllBook(response.data.data.books)
            console.log(response)
        } catch (error) {
            console.log(error.message)            
        }
    }

    useEffect(() => {
        getBooks()
    }, [])
    
    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    };

  return (
    <div>
        <Navadmin/>
        <div className='m-5'>
            <table border='2' className='table table-bordered border-2 border-dark'>
                <tr className='text-dark text-center bg-dark bg-opacity-25 '>
                    <th className='border-dark border-2'>Author</th>
                    <th className='border-dark border-2'>Title</th>
                    <th className='border-dark border-2'>Describe</th>
                    <th className='border-dark border-2'>Book File</th>
                    <th className='border-dark border-2'>Publication Date</th>
                    <th className='border-dark border-2'>Language</th>
                    <th className='border-dark border-2'>Topic</th>
                    <th className='border-dark border-2'>ISBN</th>
                    <th className='border-dark border-2'>Image</th>
                    <th className='border-dark border-2'>edit</th>
                </tr>
                {allBook.map((item, index) =>(
                    <Atomlist item={item} index={index} />
                ))}
            </table>
        </div>
    </div>
  )
}