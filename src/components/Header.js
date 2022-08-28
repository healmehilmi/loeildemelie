import React from 'react'
import Logo from '../images/site_logo.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import '../styles/Header.css';
import {Link, NavLink} from "react-router-dom";

function Header() {
    return (
        <header className="site_navi">
            <Link to="/">
                <img className="site_logo" src={Logo} alt="site_logo"></img>
            </Link>
            <ul className="navi_links">
                    <li>
                        <NavLink   className={(navData) => (navData.isActive ? 'active' : '')}to="/">
                           Work
                        </NavLink>
                    </li>
                    <li>
                        <NavLink   className={(navData) => (navData.isActive ? 'active' : '')}to="/About">
                           About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink   className={(navData) => (navData.isActive ? 'active' : '')}to="/Blog">
                           Blog
                        </NavLink>
                    </li>
                    <li>
                        <NavLink   className={(navData) => (navData.isActive ? 'active' : '')}to="/Contact">
                           Contact
                        </NavLink>
                    </li>
              
               
            </ul>    
            <ul className="social_links">
                <li><a href="https://www.instagram.com/loeildemelie/"><InstagramIcon/></a></li>
                <li><a href="https://www.facebook.com/profile.php?id=100080191127977"><FacebookIcon/></a></li>
            </ul>  
            
        </header>
    )
}

export default Header
