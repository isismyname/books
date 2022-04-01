import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { API } from '../../config/api'

export default function Atomlist({item}) {
    let nav = useNavigate()
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

    const editBook = () =>{
        nav('/admin-update-book/:id')
    }

    useEffect(() => {
        getBooks()
    }, [])
  return (
    <tr className='text-center'>
        <td className='border-dark border-2'> {item.author} </td>
        <td className='border-dark border-2'> {item.title} </td>
        <td className='border-dark border-2'> {item.describe} </td>
        <td className='border-dark border-2'> {item.bookfile} </td>
        <td className='border-dark border-2'> {item.publicationdate} </td>
        <td className='border-dark border-2'> {item.language} </td>
        <td className='border-dark border-2'> {item.topic} </td>
        <td className='border-dark border-2'> {item.isbn} </td>
        <td className='border-dark border-2'> {item.image} </td>
        <td onClick={editBook} className='border-dark border-2'> edit </td>
    </tr>
  )
}
