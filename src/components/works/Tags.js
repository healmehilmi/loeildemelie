import React,{useState, useEffect} from 'react'
import axios from 'axios';


import {useParams} from "react-router-dom"
import { SpinnerCircular } from 'spinners-react'; 
import '../../styles/Work.css';

const Tags = (url) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const {hashs} = useParams()
  
  useEffect(() => {
    const fetchData =async() => {
      setLoading(true)
      const response = await axios.get("https://graph.instagram.com/me/media?grant_type=ig_refresh_token&fields=id,caption,media_url,permalink,children{media_url},timestamp,username&access_token=IGQVJYbXJMWGZAsNXZAaWTJFUnpaN29CN29QeC0zRk52X2R5Nk9vVUYxclh4V2IyeU5xQ0w0bTBseTNsSG02QVJ4YVdRajFBbC1mcWkxVllZAMDFxekYyUEJTbGo0RGNlaEhwUXlQaDhQS1laZAWtucW9QVgZDZD")
     
      if (response.status === 200) {
      
        const posts = response.data.data;
          posts.find(data.caption.split() === hashs)
          this.setState({ posts });
          console.log("yehh",posts)

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
    
       <p className="works_header">Tags by <span>L'oeil d'Emelie </span></p>

       
       </>
    )}
    </>
  )
}

export default Tags