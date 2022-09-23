import React from 'react'
import Avatar from '@mui/material/Avatar';
import './SideBar.css'
import sbtop from '../../images/sidebar-top-bg.jpg';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';

function SideBar() {

  // get user from redux store
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar_recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  )

  return (
    <div className='sidebar'>

      <div className="sidebar_top">
        <img src={sbtop} alt="" />
        <Avatar className='sidebar_avatar' src={user.photoUrl}>
          {/* if no photo, show the email first letter in avatar */}
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
        </div>

        <div className="sidebar_stats">
          <div className="sidebar_stat">
            <p>Who viewed you</p>
            <p className="sidebar_statNumber">
              2.543
            </p>
          </div>
          <div className="sidebar_stat">
            <p>Views on post</p>
            <p className="sidebar_statNumber">
              2.448
            </p>
          </div>
        </div>

      

      <div className="sidebar_Bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>



    </div>
  )
}

export default SideBar