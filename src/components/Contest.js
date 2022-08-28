import React, {useState, useEffect} from 'react'
import axios from 'axios';
import '../styles/Container.css';
import {Link, NavLink} from "react-router-dom";
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
//<img className="contest_img" key={ele.id} src={ele.media_url} alt="image"/>
import InstagramIcon from '@mui/icons-material/Instagram';
import AcUnitIcon from '@mui/icons-material/AcUnit';
const Contest = (props) => {
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
        if (ele && ele.caption.includes('#contestofmonth')) {
          bioData.push(

            <div className="container_place">
            <div className="contest_container">
           
                <img className="container_img" key={ele.id} src={ele.media_url} alt="image"/>


                <div className="container_text">
                <p className="contest_header"><AcUnitIcon/>Contest of <span>Month </span></p>

                   <p className="bio_caption" key={ele.id}>{ele.caption.split(' ').slice(1).join(' ')}</p>
                  
                  <a className="contest_button" key={ele.id} href={ele.permalink}>Go to post.</a>

                  
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

    export default Contest;
    