//import react
import React from 'react';

// import css stylesheets
import "../styles/pages/home/home.css";

// import images
import childLearning from "../assets/images/pages/home/childLearning.jpg";
import lightbulb from "../assets/images/pages/home/lightbulb.png";
import arrowsMoreUp from "../assets/images/pages/home/arrowsMoreUp.png";
import handshake from "../assets/images/pages/home/handshake.png";
import navigateArrow from "../assets/images/pages/home/navigateArrow.png";
import laptopClassroom from "../assets/images/pages/home/laptopClassroom.jpg";

function Home() {
  return (
    <div>
       {/* introduction section */}
       <section
        className=' w-9/12 max-h-max m-auto mt-24 pb-8 flex flex-col sm:flex-row gap-10 '
       >
        <div className='w-full sm:text-center'>
          {/* heading */}
          <h3 className='w-full  text-lg md:text-2xl font-bold'>fuel a love for <br/>
           learning that leads to <br/>
           meaningful, <br/>
           measurable growth 
          </h3>
          {/* description */}
          <p className='mt-4'>discover why we've been trusted with millions of teachable
              moments for 15 years and counting.
          </p>
          {/**for the sake of this being a simple coding assessment this link goes no where
                   * in the real world i would use
                   * <NavButton  width='91.67%' height='2.5rem' location_url='/login' nav_text='Login'/>
                   * <NavButton  width='91.67%' height='2.5rem' location_url='/purchaseSubscription' nav_text='Purchase Subsription'/>
                   * but i don't want to refresh the page on user click
                   */}
          {/* buttons */}
          <button className='block w-11/12 h-10 mt-4 text-white tracking-tight font-bold  rounded-md bg-slate_blue  hover:bg-pastel_purple'>Login</button>
          <button className='block w-11/12 md:h-10 mt-4 px-8 py-2 md:py-0 md:py-2 text-white tracking-tight font-bold  rounded-md bg-slate_blue  hover:bg-pastel_purple'>Purchase Subscription</button>
        </div>
        {/* image */}
        <div className='w-full h-full'>
            <img className='block h-full rounded-lg' src={childLearning} alt="child learning by watching educational video on edutube" />
        </div>
        </section> 
        {/* learning outcomes section */}
        <section className='curved_borders mt-20 pb-12 border-none bg-lilac text-center'>
            {/* heading */}
            <h5 className='pt-12 text-xl'>proven learning outcomes that you can see, hear, and <div className='text-center'>track</div></h5>
            {/* outcome points */}
            <section  className='mt-14 mb-10'>
                <div className='w-28 h-28 m-auto mb-4 flex justify-center items-center  bg-slate_blue rounded-full'>
                <img src={lightbulb} alt="lightbulb" />
 
                </div>
                {/* description */}
                <p className='w-6/12 m-auto font-bold'>make learning stick by helping kids connect complex concepts 
                    to the real-world experiences.
                </p>
            </section>
            <section className='mt-8 mb-10'>
            <div className='w-28 h-28 m-auto mb-4 flex justify-center items-center  bg-slate_blue rounded-full'>
            <img src={arrowsMoreUp} alt="two arrows going upward" />
              </div>
                
                {/* description */}
                <p className='w-6/12 m-auto font-bold'>ensure and track progress for every learner with measurable milestones and reporting.
                </p>
            </section>
            <section className='mt-8 mb-10'>
            <div className='w-28 h-28 m-auto mb-4 flex justify-center items-center  bg-slate_blue rounded-full'>
            <img src={handshake} alt="handshake" />
             </div>
               
                {/* description */}
                <p className='w-6/12 m-auto font-bold'>build the critical and essential literacy skills kids need for lifelong learning and success.
                </p>
            </section>
            {/* spotlight section */}
            <div className=' w-8/12 h-80 min-h-28 m-auto border-2  border-white  rounded-md'>
                {/* spotlight heading */}
                <h6 className='mt-8 mb-4 uppercase tracking-tight'>spotlight</h6>
                {/* spotlight description */}
                <p className=' text-xl font-bold mb-4'>proven to strengthen essential literacy skills</p>
                <p className='mb-8'>learn more about edutube efficacy and evidence-based learning design.</p>
                {/**for the sake of this being a simple coding assessment this link goes no where
                 * in the real world i would use
                 * <NavButton  width='66%' height='2.5rem' location_url='research' nav_text='Explore Research'/>
                 * but i don't want to refresh the page on user click
                 */}
                {/* button */}
                <button className='m-auto w-8/12 p-2 text-white font-bold bg-slate_blue hover:bg-pastel_purple tracking-tight flex justify-center items-center gap-2 rounded-md'>Explore Research
                    <img className='w-6 h-6' src={navigateArrow} alt="upright slanted arrow facing northeast in a white circle" />
                     </button>
            </div>
        </section>
        {/* solutions section */}
        <h5 className='mt-12 mb-12 text-2xl text-center font-bold'>discover solutions to meet every learning goal</h5>
        <section className='w-10/12 m-auto mt-14 flex gap-4'>
            <div className='w-full'>
            {/* heading */}
            <p className='font-medium'>for everyone</p>
            {/* description */}
            <p className='mb-4 font-thin'>edutube for all ages</p>
            <p className='pl-4 border-l-4 border-l-slate_blue'>&quot; if i had to choosee only one digital educational video platform in my classroom, edutube wins hands down.&quot;<br/>
            &#45; john doe, md university of michigan
            </p>
            {/* description */}
            <p className='mt-8 font-thin text-slate_blue'>elevate everyday learning</p>
            </div>
            {/* image */}
            <div className='w-full flex items-center'>
                <img src={laptopClassroom} alt="students gathered around laptop learning from educational video" />
            </div>
        </section>
        {/* social media section */}
        <section className='curved_border mt-20 bg-lilac'>
        </section>
        
    </div>
  )
}

export default Home;
