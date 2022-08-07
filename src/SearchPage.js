//import OutlinedInput from '@mui/material/OutlinedInput';
import React from 'react';
import "./SearchPage.css";
import ChannelRow from "./ChannelRow.js"
//import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import VideoRow from "./VideoRow.js";

function SearchPage() {
  return (
    <div className='searchPage'>
    <div className='searchPage__filter'>
     <TuneOutlinedIcon/>
    <h2>FILTER</h2>
    </div>
    <hr/>

    <ChannelRow
    image=""
    channel="kim kim"
    verified
    sub="660k"
    noOfVideos={382}
    description="you can find amazing beauty tips"
    />
    <hr/>
    <VideoRow/>
  </div>

  )
}

export default SearchPage;