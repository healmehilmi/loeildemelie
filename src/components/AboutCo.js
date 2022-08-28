import React, {useState, useEffect , useCallback} from 'react'
import axios from 'axios';
import '../styles/Container.css';
import Carousel from 'react-grid-carousel'
import {Link, NavLink} from "react-router-dom";

const ContactCo = (props) => {

    const [posts, setPosts] = useState([])
    const [isHover, setIsHover] = useState(false)

    const handleHover = useCallback(() => {
      setIsHover(state => !state)
    }, [])

    useEffect(() => {
    setPosts(props.posts)
    },[props.posts])

    const renderData2 = () => {
        let myPosts = [...posts]
        let array = []
        
     

      

        myPosts.forEach((ele) => {
            if (ele.caption.includes("#aboutloeildemelie")) {
                array.push(
                    <div>
                        <div className="main_about">
                            <div className="carousel_wrapper" onMouseLeave={handleHover} onMouseEnter={handleHover}>
                                <Carousel className="carousel_box"
                                    cols={1} rows={1} gap={10} loop showDots dotColorActive="#ffff" dotColorInactive="#bbb5b1"  hideArrow={!isHover}   >
                                    {ele.children.data.map((item) => {
                                    
                                        return <Carousel.Item>
                                        <img className="Carousel_img" src={item.media_url} />

                                        </Carousel.Item>
                                        
                                    })}
                                 </Carousel>
                            </div>
                            <div className="about_text">
                                <h3 className="bio_head" key={ele.id}>@{ele.username}</h3>

                                <p className="bio_caption" key={ele.id}>{ele.caption.split(' ').slice(1).join(' ')}</p>
                                <p key={ele.id}>{ele.like_count}</p>
                                <NavLink to="/Contact">
                                <button className="site_button">Let's work together</button>
                                </NavLink>
                          
                          
                        </div>  
                        </div>    
                   </div>
                )
            }
        })

        return array;
    }


    return (
    
    <div className="menu_item">
          <p className="works_header">About <span>L'oeil d'Emelie </span></p>

         {renderData2()}
     
    </div>
   
    )
}

    export default ContactCo;
    