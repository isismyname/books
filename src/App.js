import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Routes, Route, useNavigate} from 'react-router-dom';
import { useContext, useState, useEffect } from "react";

import Home from './components/home/home';
import List from './components/user/List';
import Subscribe from './components/user/Subscribe';
import Profile from './components/user/Profile';
import Detailbook from './components/book/Detailbook';
import Pages from './components/book/Pages';
import Income from './components/admin/Income';
import AddBook from './components/admin/AddBook';
import UpdateUser from './components/user/UpdateUser';
import UpdateAdmin from './components/admin/UpdateAdmin';

import { API, setAuthToken } from './config/api'
import { UserContext } from './context/userContext';
import UpdateBook from './components/admin/UpdateBook';
import ListBook from './components/admin/ListBook';
// import BookCard from './components/admin/BookCard';


if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  // console.clear();
  let navigate = useNavigate();
  const [state, dispatch] = useContext(UserContext);
  useEffect(() => {
    if (state.isLogin === false) {
      navigate('/');
    } else {
      if (state.user.role === 'admin') {
        navigate('/admin-income');
      } else if(state.user.role === 'user'){
        navigate('/user');
      }else{
        navigate('/')
      }
    }
    // eslint-disable-next-line
  }, [state]);
  
  const checkUser = async () => {
    try {
      const response = await API.get("/check-auth");
      
      if (response.status === 404) {
        return dispatch({
          type: "AUTH_ERROR",
        });
      }
      
      let payload = response.data.data.user;
      
      payload.token = localStorage.token;
      dispatch({
        type: "USER_SUCCESS",
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkUser();
    // eslint-disable-next-line
  }, []);
  return (
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/user' element={<List/>} />
      <Route exact path='/profile' element={<Profile/>} />
      <Route exact path='/update-profile/:id' element={<UpdateUser/>} />
      <Route exact path='/subscribing' element={<Subscribe/>} />
      <Route exact path='/detail-book/:id' element={<Detailbook/>} />
      <Route exact path='/pages-book' element={<Pages/>} />
      <Route exact path='/admin-income' element={<Income/>} />
      <Route exact path='/admin-list' element={<ListBook/>} />
      {/* <Route exact path='/book-detail' element={<BookCard/>} /> */}
      <Route exact path='/admin-add-book' element={<AddBook/>} />
      <Route exact path='/admin-update-book/:id' element={<UpdateBook/>} />
      <Route exact path='/admin-profile-update' element={<UpdateAdmin/>} />
    </Routes>
  );
}

export default App;