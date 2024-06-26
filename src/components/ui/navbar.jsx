import React from 'react';
import NavButton from './navButton';

function Navbar() {
  return (
    <header className=' w-[90%] m-auto mt-4 mb-8 flex justify-between'>
        <h1 className=' text-med_purple text-3xl tracking-wide font-bebas'>EduTube</h1>
        <section className='flex gap-4 items-center'>
            <NavButton width="6rem" height="2.5rem" location_url="videos" nav_text="Videos"/>
            <NavButton width="6rem" height="2.5rem" location_url="postVideo" nav_text="Post Video"/>
        </section> 
    </header>
  )
}

export default Navbar