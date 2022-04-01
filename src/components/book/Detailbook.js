import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import Wow from '../user/atom/Wow'
import Atomprofile from '../user/atom/Atomprofile'
import Subs from '../user/atom/Subs'
import Logout from '../user/atom/Logout'
import img from '../img/diary.jpeg'
import { useNavigate, useParams } from 'react-router-dom';
import ButtonAddList from '../user/atom/ButtonAddList'
import { API } from '../../config/api'

export default function Detailbook() {
    const [list, setList] = useState(0);
    let nav = useNavigate();
    
    const paging=()=>{
        nav('/pages-book')
    }
    const { id } = useParams();
    const [details, setDetails] = useState([])

      const getAllBook = async () => {
        try {
          const res = await API.get('/book/' + id)
          setDetails(res.data.data.book)
          console.log("DETAILS =>", res.data.data.book)
        } catch (error) {
          console.log(error)
        }
      }
    //   s
      useEffect(() => {
          getAllBook()
          return () => {
              setDetails(id)
          }
      }, [])
  return (
    <div className='d-flex'>
        <div className='d-grid h-50 text-center px-5'>
            <Wow />
            <hr />
            <Atomprofile />
            <Subs quantity={list} />
            <hr />
            <Logout />
        </div>
        <div className='d-grid m-3'>
            <div className='d-flex'>
                <img src={img} className='detail' alt="DiaryBook" />
                <div className='d-grid'>
                    <div className='d-flex'>
                        <div className='mx-5'>
                            {/* <p className='fw-bold fs-4'> {details.title} </p> */}
                            {/* <p> {details.author} </p> */}
                            <p className='fw-bold fs-4'>Publication Date</p>
                            {/* <p> {details.publicationdate} </p> */}
                            <p className='fw-bold fs-4'>Topics</p>
                            {/* <p> {details.genre} </p> */}
                        </div>
                        <div className='mx-5'>
                            <p className='fw-bold fs-4'>ISBN</p>
                            {/* <p> {details.isbn} </p> */}
                            <p className='fw-bold fs-4'>Language</p>
                            {/* <p> {details.language} </p>  */}
                        </div>
                    </div>    
                </div>
            </div>
            <div className='my-auto'>
                <p className='fs-3 fw-bold'>About This Book</p>
                {/* <p> {details.describe} </p> */}
            </div>
            <div className='d-flex justify-content-between'>
                <ButtonAddList clickHere={()=> setList(list +1)} />
                <Button onClick={paging} className='btn btn-secondary px-5 text-center'>Read Book <img src="https://img.icons8.com/fluency-systems-filled/48/000000/sort-right.png" alt='Icon' className='icons'/></Button>
            </div>
        </div>
    </div>
  )
}
