import React from 'react'

function Navbar() {
  return (
    <div className=' w-[90%] m-auto mt-4 flex justify-between'>
        <h1 className=' text-med_purple text-3xl tracking-wide font-bebas'>EduTube</h1>
        <section className='flex gap-4 items-center'>
        <button className='
        w-24
        h-10
        rounded-md
        text-center
        capitalize
        bg-slate_blue tracking-tight font-bold
         hover:bg-lavender
        '
        onClick={() => {
            window.location.href='/videos'
        }}
        >
            Videos
        </button>
        <button className='
        w-24
        h-10
        rounded-md
        text-center
        capitalize
        bg-slate_blue tracking-tight font-bold
         hover:bg-lavender
        '
        onClick={() => {
            window.location.href='/login'
        }}
        >
            Log In
        </button>  
        </section> 
    </div>
  )
}

export default Navbar