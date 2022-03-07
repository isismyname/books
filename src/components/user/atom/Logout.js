import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../context/userContext';

export default function Logout() {
    let nav = useNavigate();
    const [state, dispatch] = useContext(UserContext);
    const logout = () => {
      console.log(state);
      dispatch({
        type: "LOGOUT",
      });
      nav("/");
    };
  return (
    <div>
        <div onClick={logout} className='d-flex cursor'>
            <img src="https://img.icons8.com/ios-glyphs/30/000000/exit.png" alt='done'/>
            <p className='my-auto mx-3'>Logout</p>                
        </div>
    </div>
  )
}
