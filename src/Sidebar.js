import React from 'react'
import SidebarRow from './SidebarRow'
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Sidebar.css'

function Sidebar() {
  return (
  <div className='sidebar'>
    <SidebarRow selected Icon={HomeIcon} title="Home" />
    <SidebarRow Icon={WhatshotIcon} title="Trending" />
    <SidebarRow Icon={SubscriptionsIcon} title="Subscription" />
    <hr/> 
    <SidebarRow Icon={VideoLibraryIcon} title="Libray" /> 
    <SidebarRow Icon={HistoryIcon} title="History" /> 
    <SidebarRow Icon={OndemandVideoIcon} title="your videos" /> 
    <SidebarRow Icon={WatchLaterIcon} title="watch latter" /> 
    <SidebarRow Icon={ThumbUpOffAltIcon} title="Liked video " /> 
    <SidebarRow Icon={ExpandMoreIcon} title="show more" /> 
   
  </div>
  )
}

export default Sidebar