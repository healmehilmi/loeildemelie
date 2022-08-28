import React, {useState, useEffect} from 'react'
import axios from 'axios';
import '../styles/Container.css';
import {Link, NavLink} from "react-router-dom";


const Bio = (props) => {
    const [data, setData] = useState([])
  
  useEffect(() => {
    if (Array.isArray(props.posts)) {
      
      setData(props.posts)
    }
  },[props.posts])

  const renderItems = () => {
    let apiResults = [...data]
    let bioData = []

    if (apiResults) {
      
      apiResults.forEach(ele => {
     
        if (ele && ele.caption.includes('#loeildemelieblogger')) {
          bioData.push(
            <div className="container_place">
                    <div className="text_containers">
                    <video className="container_img" key={ele.id} src={ele.media_url}  autoPlay muted loop>
                         <source src="movie.mp4" type="video/mp4"/>
                        </video>

                        <div className="container_text">
                        <p className="blog_username" key={ele.id}> written by {ele.username} </p>

                           <p className="bio_caption" key={ele.id}>{ele.caption.split(' ').slice(1).join(' ')}</p>
                           <NavLink to="/Blog">
                           <button className="site_button">Go to Blog</button>
                          </NavLink>
                          
                          
                        </div>   
                    </div>
                </div>
          )
        }
      });
    }

    return bioData;

  }
        return (
          <div>
            
            {renderItems()} 
          </div>
        )
    }

    export default Bio;
    