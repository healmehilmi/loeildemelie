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
        if (ele && ele.caption.includes('#whoisloeildemelie')) {
          bioData.push(
            <div className="container_place">
                    <div className="text_containers">
                        <div className="container_text">
                        <h3 className="bio_head" key={ele.id}>@{ele.username}</h3>

                           <p className="bio_caption" key={ele.id}>{ele.caption.split(' ').slice(1).join(' ')}</p>
                           <p key={ele.id}>{ele.like_count}</p>
                           <NavLink to="/Contact">
                           <button className="site_button">Let's work together</button>
                          </NavLink>
                          
                          
                        </div>   
                        <img className="container_img" key={ele.id} src={ele.media_url} alt="image"/>

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
    