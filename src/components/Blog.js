import React,{useState, useEffect} from 'react'
import axios from 'axios';
import Bio from './Bio';
import Portfolio from './Portfolio.js';
import Bloger from './Bloger';
import BlogArticel from './BlogArticel';

import { SpinnerCircular } from 'spinners-react'; 
import '../styles/Work.css';

const Blog = (url) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData =async() => {
      setLoading(true)
      const response = await axios.get
      ("https://graph.instagram.com/me/media?grant_type=ig_refresh_token&fields=id,caption,media_url,permalink,children{media_url},timestamp,username&access_token=IGQVJVOTVOOUd6NzZAKN1lTVzZAETzV6QnNTWkNBWEpNRHNodjIwZAE5MUlA1NGlTTjkyRGJEd2VuajdDUzB4UDFBMzZAoU05yeE9pb3BlbXBDUzZA4Mkk2QkpPbUJQbzBwYUdIaTBvUVhLQ1M1eDZAKbVRZAawZDZD")
     
      if (response.status === 200) {
      
        setData(response.data.data)
      } else {
        // show some toaster
      }
    
      setLoading(false)
    }

    fetchData()
  },[])



  return (
    <>
    {loading ? <SpinnerCircular className="spinner" size={83} thickness={33} speed={62} color="rgba(172, 57, 62, 1)" secondaryColor="rgba(172, 57, 57, 0.25)" /> : (
      <>
    
       <p className="works_header">Blog by <span>L'oeil d'Emelie </span></p>
      

       <BlogArticel posts={data} />
       </>
    )}
    </>
  )
}

export default Blog