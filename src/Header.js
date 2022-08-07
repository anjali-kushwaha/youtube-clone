import React, {useState} from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';
import {Link} from "react-router-dom";

//import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function header() {
  //useState("") countantly make search botton empty
  const[inputSearch ,setInputSearch] =useState("");

  return (
    <div className='header'>
      <div className='header__left' >
      <MenuIcon />
        <img
        className='header__logo' 
        src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="" />
      

      </div>
      
    <div className='header__input'>
    <input onchange={e=> setInputSearch(e.target.value)} vlaue={inputSearch} placeholder='Search' type="text" />
     <Link to={`/search/${inputSearch}`}>
     <SearchIcon className='header__inputButton'/>
     </Link>
    </div>
    
    <div className='header__icons'>
    <VideoCallIcon className='icon' />
    <AppsIcon className='icon' />
    <NotificationsIcon className='icon' />
    <Avatar className='icon'/>
    </div>
  

    </div>
  )
}

export default header