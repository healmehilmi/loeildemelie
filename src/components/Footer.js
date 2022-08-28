import React from 'react'
import Logo from '../images/site_logo.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import '../styles/Footer.css';
import {Link, NavLink} from "react-router-dom";
function Header() {
    return (
        <footer className="site_footer">
          
          <div className="footer_wrapper">
              <div className="footer_contact">
                <strong> Contact</strong>
                <p>email@example.com</p>
                <p>+43 7238923</p>
              </div>
              <div className="footer_fallow">
              <strong> Fallow</strong>
              <a href="https://www.instagram.com/loeildemelie/"> <p>Instagram</p></a>
              <a href="https://www.facebook.com/profile.php?id=100080191127977"> <p>Facebook</p></a>
              
              </div>
              <div className="footer_important">
              <strong> Important</strong>
                <p>AGB</p>
                <p>Impressum</p>

              </div>
          </div>
          
          <p className="footer_sign">L’oeild’Emelie / 2022</p>
          
           
            
        </footer>
    )
}

export default Header
