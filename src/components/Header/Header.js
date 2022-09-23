import React from 'react'
import './Header.css'
import logo from '../../images/linkedin.png';
import avatar from '../../images/panda.jpg'
import HeaderOption from '../HeaderOption/HeaderOption.js';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/userSlice';
import { auth } from '../../Firebase';


function Header() {

  const dispatch = useDispatch();

  const logoutOfapp = () => {
    dispatch(logout());
  
    auth.signOut();
  }

  return (
    <div className='header'>
      <div className="header_left">
        <img src={logo} alt="" />

        <div className="header_search">
          {/* Search icon */}
          <SearchIcon />
          <input type="text" placeholder='Search' />
        </div>
      </div>

      <div className="header_right">
        <HeaderOption Icon={HomeIcon} title='Home' />
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
        <HeaderOption Icon={ChatIcon} title='Messaging' />
        <HeaderOption Icon={NotificationsIcon} title='Notifications' />
        <HeaderOption avatar={true} title='Me' onClick={logoutOfapp} />
      </div>

    </div>
  )
}

export default Header