import './App.css';
import Work from './components/Work'
import About from './components/About'

import Blog from './components/Blog'
import BlogPost from './components/BlogPost'
import Contact from './components/Contact'
import Header from './components/Header'
import Footer from './components/Footer'
import AboutCotest  from './components/AboutCotest'

import Tags from './components/works/Tags'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { HashRouter } from 'react-router-dom'


function App() {

  return (
    
    <div className="App">

        <Header/>
        <Routes>
  
          <Route path="/" element={<Work />}/>
          <Route path="/About" element={<About />}/>
          <Route path="/Blog" element={<Blog />}/>
          <Route path="/Contact" element={<Contact />}/>
          <Route path="/Blog/:id" element={<BlogPost />}/>
         
          
          <Route path="/test" element={<AboutCotest />}/>

         <Route path="/tags/:hash" element={<Tags />}/>

        </Routes>   
      
        <Footer/>
      
      </div>
  );
}

export default App;
