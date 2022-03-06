import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/home/home';
import List from './components/user/list';
import Subscribe from './components/user/Subscribe';
import Profile from './components/user/Profile';
import Detailbook from './components/book/Detailbook';
import Pages from './components/book/Pages';


function App() {
  return (
  <Router>
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/user' element={<List/>} />
      <Route exact path='/subscribing' element={<Subscribe/>} />
      <Route exact path='/profile' element={<Profile/>} />
      <Route exact path='/detail-book' element={<Detailbook/>} />
      <Route exact path='/pages-book' element={<Pages/>} />
    </Routes>
  </Router>
  );
}

export default App;
