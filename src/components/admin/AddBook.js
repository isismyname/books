import React, { 
  useEffect, 
  useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { API } from '../../config/api';
import Navadmin from './Navadmin'

export default function AddBook() {
  let nav = useNavigate();
  
  const [preview, setPreview] = useState(null);
  const [form, setForm] = useState({
    author: '',
    title: '',
    describe: '',
    bookfile: '',
    topic: '',
    publicationdate: '',
    language: '',
    isbn: '',
  })
  
  const handleChange=(e)=>{
    setForm({
      ...form,
      [e.target.name]: e.target.type === "file" ? e.target.files : e.target.value
    })

    if(e.target.type === "file"){
      let url= URL.createObjectURL(e.target.files[0])
      setPreview(url)
    }
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    
    const settings = {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }

    const dataInForm = new FormData();
    dataInForm.set("author", form.author)
    dataInForm.set("title", form.title)
    dataInForm.set("describe", form.describe)
    dataInForm.set("bookfile", form.bookfile)
    dataInForm.set("topic", form.topic)
    dataInForm.set("publicationdate",form.publicationdate)
    dataInForm.set("language", form.language)
    dataInForm.set("isbn", form.isbn)
    dataInForm.set("image", form.image[0], form.image[0].name)

    const response = await API.post('/book', dataInForm, settings)
    console.log(response)

    
  }

  return (
    <div>
        <Navadmin />
        <div className='text-center mx-auto w-50 my-auto'>
          <form onSubmit={handleSubmit}>
            <div className='m-2 d-grid mx-auto'>
              <p className='fw-bold fs-1'>Add Book</p>
                <input name='author' onChange={handleChange} type="text" placeholder='Author' className='p-2 bg-secondary bg-opacity-10 rounded-3 my-2' />
                <input name='title' onChange={handleChange} type="text" placeholder='Title' className='p-2 bg-secondary bg-opacity-10 rounded-3 my-2' />
                <input name='describe' onChange={handleChange} type='text' placeholder='Describe' className='p-2 bg-secondary bg-opacity-10 rounded-3 my-2' />
                <input name='bookfile' onChange={handleChange} type="text" placeholder='BookFile' className='p-2 bg-secondary bg-opacity-10 rounded-3 my-2' />
                <input name='topic' onChange={handleChange} type="text" placeholder='Genre' className='p-2 bg-secondary bg-opacity-10 rounded-3 my-2' />                
                <input name='publicationdate' onChange={handleChange} type="date" placeholder='Publication Date (yyyy/mm/dd)' className='p-2 bg-secondary bg-opacity-10 rounded-3 my-2' />
                <input name='language' onChange={handleChange} type="text" placeholder='Language' className='p-2 bg-secondary bg-opacity-10 rounded-3 my-2' />
                <input name='isbn' onChange={handleChange} type="number" placeholder='ISBN' className='p-2 bg-secondary bg-opacity-10 rounded-3 my-2' />
                {preview &&(
                  <img src={preview} className="w-50 mx-auto rounded" alt="Preview" />
                  )}
                <input name='image' onChange={handleChange} type="file" className='mx-auto' id="upload" />
              <button className='my-2 rounded-3 bg-danger px-5'>Submit</button> 
            </div>
          </form>           
        </div>
    </div>
  )
}
