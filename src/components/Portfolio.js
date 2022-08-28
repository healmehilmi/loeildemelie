import React, {useState, useEffect} from 'react'

import '../styles/Container.css';
import {Link, NavLink} from "react-router-dom";


const Portfolio = (props) => {
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

        console.log("dataaaa", ele);
        
       
        if (ele && ((ele.caption.includes('#loeilfashion')) || (ele.caption.includes('#loeilstill')) || (ele.caption.includes('#loeilarchitectural')) || (ele.caption.includes('#loeilbw'))) ) {
          bioData.push(
             <div className="portfolio_place">
                    <div className="portfolio_containers">
                    <Link  to={`/tags/${ele.caption.split(" ")[0]}`} >
                        <img  className="container_img" key={ele.id} src={ele.media_url} alt="image_portfolio"/>
                        </Link>
                        <div className="portfolio_text">
                           <p className="portfolio_caption" key={ele.id}>{ele.caption.split(" ")[0].slice(1).replace('_', ' ')}</p>
                           
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
          <div className="porfolio_wrapper">
          
            {renderItems()} 
          </div>
        )
    }

    export default Portfolio;