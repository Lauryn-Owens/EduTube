import React from 'react';
import NavButton from './navButton';

function Navbar() {
  return (
    <div className=' w-[90%] m-auto mt-4 flex justify-between'>
        <h1 className=' text-med_purple text-3xl tracking-wide font-bebas'>EduTube</h1>
        <section className='flex gap-4 items-center'>
            <NavButton width="6rem" height="2.5rem" location_url="videos" nav_text="Videos"/>
            <NavButton width="6rem" height="2.5rem" location_url="login" nav_text="Login"/>
        </section> 
    </div>
  )
}

export default Navbar