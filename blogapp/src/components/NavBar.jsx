import React from 'react'
import {Routes,Route,useNavigate} from 'react-router-dom'
import News from './News';
const NavBar = () => {
  const navigate=useNavigate();
  const navigateToNews =()=>{
    navigate('/news');
  };
  return (
    <div>
<ul className='nav'>
    <li><a href="#">Home</a></li>
    <li><button onClick={navigateToNews}>News</button></li>
    <li><a href="#">Signup</a></li>
    <li className='float'><a href="#">Signin</a></li>
</ul>
<Routes>
<Route path="/news" element={<News/>}/>

</Routes>
    </div>
  )
}

export default NavBar