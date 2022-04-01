// import React, { useState } from "react";
// import { Card, Col, Table } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import { API } from "../../config/api";

// export default function BookCard({ item }) {
//     const [book, setBook] = useState([])

//     const idBook = async (id) =>{
//         try {
//             const response = await API.get('/book/' + id)
//             setBook(response.data.data)
//         } catch (error) {
//             console.log(error.message)  
//         }
//     }
//   return (
//         <div>
//             <Table responsive="sm">
//                 <tbody>
//                 <tr>
//                     <td>{item.author}</td>
//                     <td>{item.title}</td>
//                     <td>{item.describe}</td>
//                     <td>{item.publicationdate}</td>
//                     <td>{item.topic}</td>
//                     <td>{item.image}</td>
//                 </tr>
//                 </tbody>
//             </Table>
//         </div>     
//     )
// }
