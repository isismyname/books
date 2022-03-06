import React from 'react'
import { Button } from 'react-bootstrap'
import UserPage from '../user/userPage'
import img from '../img/diary.jpeg'

export default function Detailbook() {
  return (
    <div className='d-flex'>
        <UserPage/>
        <div className='d-grid m-3'>
            <div className='d-flex'>
                <img src={img} className='detail' alt="DiaryBook" />
                <div className='d-grid'>
                    <div className='d-flex'>
                        <div className='mx-5'>
                            <p className='fw-bold fs-4'>Diary of a Wimpy Kid</p>
                            <p>Jeff Kinney</p>
                            <p className='fw-bold fs-4'>Publication Date</p>
                            <p>01-04-2007</p>
                            <p className='fw-bold fs-4'>Usage</p>
                            <p>Public Domain Mark 1.0</p>                        
                        </div>
                        <div className='mx-5'>
                            <p className='fw-bold fs-4'>Topics</p>
                            <p>Comedy, Young Adult Fiction</p>
                            <p className='fw-bold fs-4'>Collection</p>
                            <p>Yearbooks</p>
                            <p className='fw-bold fs-4'>Language</p>
                            <p>English</p> 
                        </div>
                    </div>    
                </div>
            </div>
            <div className='my-auto'>
                <p className='fs-3 fw-bold'>About This Book</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio molestias natus atque eius beatae et officia neque, ipsa inventore sint quis sed ipsam pariatur. Ipsam omnis nisi vel corporis temporibus quos? Reiciendis optio harum repudiandae nam quas quam! Esse, veniam. Atque cupiditate fugit maiores officiis accusamus fuga nihil, ullam quos explicabo, odit aut quibusdam blanditiis iure, laboriosam a quas dolor unde ratione eveniet expedita minima sed tempora. Ipsum delectus iste porro, nulla voluptas officiis itaque, commodi repudiandae aliquam molestias cupiditate at explicabo voluptates. Impedit praesentium sit magni illo dolorem numquam alias, ullam obcaecati rem eius, voluptatibus repudiandae dignissimos natus pariatur, veritatis possimus. Doloribus accusamus eos ipsam, voluptates illum quo quas tempore neque perferendis modi facere. Suscipit dolores, cumque harum omnis aliquam voluptas laborum excepturi, totam dolor facere eius sit praesentium sunt maxime! Impedit repellendus, vero ipsum nobis facere at beatae dolorum ut dolor dolorem quaerat veritatis explicabo magnam repudiandae aliquid, numquam cumque aliquam quibusdam sequi velit placeat similique ab nisi. Voluptatibus ut enim at nam laboriosam modi ipsum natus est saepe quia ad culpa, neque minus iusto a? Non harum commodi minima iure dolores ratione reiciendis libero, alias, unde provident incidunt est ex qui. Dolorem sint debitis alias quisquam incidunt.</p>
            </div>
            <div className='d-flex justify-content-between'>
                <Button className='btn btn-danger btn-outline-light px-5 text-center'>Add List <img src="https://img.icons8.com/fluency-systems-filled/48/000000/add-list.png" alt='Icon' className='icons'/> </Button>
                <Button className='btn btn-secondary px-5 text-center'>Read Book <img src="https://img.icons8.com/fluency-systems-filled/48/000000/sort-right.png" alt='Icon' className='icons'/></Button>
            </div>
        </div>
    </div>
  )
}
