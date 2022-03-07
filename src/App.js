import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
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


function App() {
  return (
  <Router>
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/user' element={<List/>} />
      <Route exact path='/profile' element={<Profile/>} />
      <Route exact path='/update-profile' element={<UpdateUser/>} />
      <Route exact path='/subscribing' element={<Subscribe/>} />
      <Route exact path='/detail-book' element={<Detailbook/>} />
      <Route exact path='/pages-book' element={<Pages/>} />
      <Route exact path='/admin-income' element={<Income/>} />
      <Route exact path='/admin-add-book' element={<AddBook/>} />
      <Route exact path='/admin-profile-update' element={<UpdateAdmin/>} />
    </Routes>
  </Router>
  );
}

export default App;
