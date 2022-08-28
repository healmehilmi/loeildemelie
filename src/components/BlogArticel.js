import React, {useState, useEffect} from 'react'
import axios from 'axios';
import '../styles/Container.css';
import {Link, NavLink} from "react-router-dom";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

const BlogArticel = (props) => {
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
     
        if (ele && ele.caption.includes('#loeilblog')) {
          bioData.push(
            <div className="container_place">
                    <div className="text_containers">
                    <Link  to={`/Blog/${ele.id}`} >
                    <img className="container_img" key={ele.id} src={ele.media_url} alt="image"/>
                    </Link>
                        <div className="container_text">
                     
                        <span className="blog_date" key={ele.id}>   <BookmarkBorderIcon />{ele.timestamp.slice(0, 10)} </span>

                        <p className="blog_username" key={ele.id}> written by {ele.username} </p>
                 
                     

                           <p className="bio_caption" key={ele.id}>{(ele.caption.split(' ').slice(1).join(' ')).split(/\s+/).slice(0,30).join(" ").concat('...')}</p>
                           
                                <Link  to={`/Blog/${ele.id}`} >
                                <button className="site_button" >Read more</button>
                              </Link>
                            
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

    export default BlogArticel;
    