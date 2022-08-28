import React,{useState, useEffect} from 'react'
import axios from 'axios';
import Bio from './Bio';
import Portfolio from './Portfolio.js';
import Bloger from './Bloger';
import ContactCo from './ContactCo';

import { SpinnerCircular } from 'spinners-react'; 
import '../styles/Work.css';

const Contact = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData =async() => {
      setLoading(true)
      const response = await axios.get("https://graph.instagram.com/me/media?grant_type=ig_refresh_token&fields=id,caption,media_url,permalink,children{media_url},timestamp,username&access_token=IGQVJVcEVIaC1OakIzNDVKR1BIY0g3SUJsQWhrbXRzRVNKaFp0NXVJVThsc2JNekE1Qy1VS3FCVG1QM3RJenczaGZAJby0ySFFSTjl0elVGU3ZAQR0JDRzlQUUFqUENyZA29kby1TVEZAoeDFsdUFodHRrNwZDZD")
     
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
       <ContactCo posts={data} />
       </>
    )}
    </>
  )
}

export default Contact