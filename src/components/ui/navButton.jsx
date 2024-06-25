import React from 'react';
import{Link} from "react-router-dom";

function NavButton({width, height, location_url, nav_text}) {
  return (
    <button className='
    rounded-md
    text-center
    capitalize
    bg-slate_blue tracking-tight font-bold
    hover:bg-lavender
    '
    style={{width:width, height:height}}
    onClick={() => {
        window.location.href=`/${location_url}`
    }}
    >
        <Link to={`/videos/${location_url}`}>{nav_text}</Link>
    </button>
  )
}

export default NavButton