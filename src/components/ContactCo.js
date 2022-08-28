import React, {useState, useEffect} from 'react'
import axios from 'axios';
import '../styles/Co.css';
import {Link, NavLink} from "react-router-dom";


const ContactCo = (props) => {
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
            <div className="coplace">
                    <div className="img_co" key={ele.id} style={{backgroundImage: `url('${ele.media_url}')`}}>
                    </div>
                    <div className="co_text">
                    <h3 className="bio_head" key={ele.id}>@{ele.username}</h3>

                        <p className="co_caption" key={ele.id}>{ele.caption.split(' ').slice(1).join(' ')}</p>
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

    export default ContactCo;
    