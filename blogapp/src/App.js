import React from 'react';
import BlogList from './components/BlogList';
import NavBar from './components/NavBar';
import './App.css';
import BlogPost from './components/BlogPost';
function App() {
  return (
    <div>
<NavBar/>
<BlogList/> 
<BlogPost/>
    </div>

  );
}

export default App;
