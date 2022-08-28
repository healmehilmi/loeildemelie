import React from 'react';
import {useParams} from "react-router-dom";
import  Blog  from "./Blog"
import {useState, useEffect} from 'react'
import axios from 'axios';
import { SpinnerCircular } from 'spinners-react'; 
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import {Link, NavLink} from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const BlogPost = () => {
const {id} = useParams()
 // const {data}= Blog('http://localhost:3000/Blog/' + id);

 const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [singleData, setSingleData] = useState(null)

  useEffect(() => {
    const fetchData =async() => {
      setLoading(true)
      const response = await axios.get("https://graph.instagram.com/me/media?grant_type=ig_refresh_token&fields=id,caption,media_url,permalink,children{media_url},timestamp,username&access_token=IGQVJVcEVIaC1OakIzNDVKR1BIY0g3SUJsQWhrbXRzRVNKaFp0NXVJVThsc2JNekE1Qy1VS3FCVG1QM3RJenczaGZAJby0ySFFSTjl0elVGU3ZAQR0JDRzlQUUFqUENyZA29kby1TVEZAoeDFsdUFodHRrNwZDZD")
     
      if (response.status === 200) {
        let adapter = response.data.data
        const result = adapter.find(ele => ele.id === id)
        setSingleData(result)
        setData(response.data.data)
      } else {
        // show some toaster
      }
    
      setLoading(false)
    }

    fetchData()
  },[])

  /////

  console.log("dataaaaaaaa", singleData);
  
  return (
    <>
    {loading ? <SpinnerCircular className="spinner" size={83} thickness={33} speed={62} color="rgba(172, 57, 62, 1)" secondaryColor="rgba(172, 57, 57, 0.25)" /> : (
      <>
       <div className="coplace">
                    <div className="img_co" key={singleData && singleData.id} style={{backgroundImage: `url('${singleData && singleData.media_url}')`}}>
                    </div>
                    <div className="co_text">
                    <span className="blog_date" key={singleData && singleData.id}>   <BookmarkBorderIcon />{singleData && singleData.timestamp.slice(0, 10)} </span>

                      <p className="blog_username" key={singleData && singleData.id}> written by {singleData && singleData.username} </p>
                        <p className="co_caption" key={singleData && singleData.id}>{singleData && singleData.caption.split(' ').slice(1).join(' ')}</p>
                        <Link  to={`/Blog`} >
                      <button className="site_button" ><ArrowBackIcon/>Back</button>
                    </Link>
                    </div>   
                  
                    
                   
            </div>

       </>
    )}
    </>
  )

  
}

export default BlogPost
