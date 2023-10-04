import React from 'react';
import BlogList from './components/BlogList';
import NavBar from './components/NavBar';
import BlogPost from './components/BlogPost'
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div>
<NavBar/>
<Header/>
<BlogList/> 
<BlogPost/>
    </div>

  );
}

export default App;
