// import React, { useEffect, useState } from 'react'
// import { Card, Col } from 'react-bootstrap'
// import { useNavigate, useParams } from 'react-router-dom'
// import { API } from '../../config/api'

// export default function DataFake({item}) {
  

//   const [books, setBooks] = useState([])


//   const getAll = async () => {
//     try {
//       const res = await API.get('/books')
//       setBooks(res.data.data.books)
//       // console.log("BOOKS =>", res.data.data)
//     } catch (error) {
//       console.log(error.message)
//     }
//   }
//   useEffect(() => {
//     getAll();
//     getAllTransaction(id);
//   }, [])
//   return (
//   )
// }
