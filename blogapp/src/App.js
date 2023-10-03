import React from 'react';
import BlogList from './components/BlogList';
import NavBar from './components/NavBar';
import BlogPost from './components/BlogPost'
import './App.css';
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
