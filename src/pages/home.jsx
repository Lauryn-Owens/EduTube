import React from 'react';


//import css stylesheets
import "../styles/pages/home/home.css";

//import images
import childLearning from "../assets/images/pages/home/childLearning.jpg";
import lightbulb from "../assets/images/pages/home/lightbulb.png";
import arrowsMoreUp from "../assets/images/pages/home/arrowsMoreUp.png";
import handshake from "../assets/images/pages/home/handshake.png";
import navigateArrow from "../assets/images/pages/home/navigateArrow.png";
import laptopClassroom from "../assets/images/pages/home/laptopClassroom.jpg";
function Home() {
  return (
    <div>
       <section
        className='w-9/12 h-80 m-auto mt-24 flex gap-10 '
       >
        <section className='w-full h-full'>
        <h3 className='w-full text-2xl font-bold'>Fuel a love for <br/>
         learning that leads to <br/>
         meaningful, <br/>
         measurable growth 
        </h3>
        <p className='mt-4'>Discover why we've been trusted with millions of teachable
            moments for 15 years and counting.
        </p>
        <button className='block w-11/12 h-10 mt-4 text-white tracking-tight font-bold  rounded-md bg-slate_blue  hover:bg-pastel_purple'>Browse Videos</button>
        <button className='block w-11/12 h-10 mt-4 text-white tracking-tight font-bold  rounded-md bg-slate_blue  hover:bg-pastel_purple'>Purchase Subscription</button>
        </section>
        <section className='w-full h-full'>
            <img className='block h-full rounded-lg' src={childLearning} alt="Child learning by watching educational video on EduTube" />
        </section>
        </section> 
        <section className='curved_borders mt-20 pb-12 border-none bg-lilac text-center'>
            <h5 className='pt-12 text-xl'>Proven learning outcomes that you can see, hear, and <div className='text-center'>track</div></h5>
            <section  className='mt-14 mb-10'>
                <div className='w-28 h-28 m-auto mb-4 flex justify-center items-center  bg-slate_blue rounded-full'>
                <img src={lightbulb} alt="lightbulb" />
 
                </div>
                <p className='w-6/12 m-auto font-bold'>Make learning stick by helping kids connect complex concepts 
                    to the real-world experiences.
                </p>
            </section>
            <section className='mt-8 mb-10'>
            <div className='w-28 h-28 m-auto mb-4 flex justify-center items-center  bg-slate_blue rounded-full'>
            <img src={arrowsMoreUp} alt="two arrows going upward" />
              </div>
                
                <p className='w-6/12 m-auto font-bold'>Ensure and track progress for every learner with measurable milestones and reporting.
                </p>
            </section>
            <section className='mt-8 mb-10'>
            <div className='w-28 h-28 m-auto mb-4 flex justify-center items-center  bg-slate_blue rounded-full'>
            <img src={handshake} alt="handshake" />
             </div>
               
                <p className='w-6/12 m-auto font-bold'>Build the critical and essential literacy skills kids need for lifelong learning and success.
                </p>
            </section>
            <div className=' w-8/12 h-80 min-h-28 m-auto border-2  border-white  rounded-md'>
                <h6 className='mt-8 mb-4 uppercase tracking-tight'>Spotlight</h6>
                <p className=' text-xl font-bold mb-4'>Proven to strengthen essential literacy skills</p>
                <p className='mb-8'>Learn more about EduTube efficacy and evidence-based learning design.</p>
                <button className='m-auto w-8/12 p-2 text-white font-bold bg-slate_blue hover:bg-pastel_purple tracking-tight flex justify-center items-center gap-2 rounded-md'>Explore Research
                    <img className='w-6 h-6' src={navigateArrow} alt="upright slanted arrow facing northeast in a white circle" />
                     </button>
            </div>
        </section>
        <h5 className='mt-12 mb-12 text-2xl text-center font-bold'>Discover solutions to meet every learning goal</h5>
        <section className='w-10/12 m-auto mt-14 flex gap-4'>
            <div className='w-full'>
            <p className='font-medium'>For Everyone</p>
            <p className='mb-4 font-thin'>EduTube for all ages</p>
            <p className='pl-4 border-l-4 border-l-slate_blue'>&quot; If I had to choosee only one digital educational video platform in my classroom, EduTube wins hands down.&quot;<br/>
            &#45; John Doe, MD University of Michigan
            </p>
            <p className='mt-8 font-thin text-slate_blue'>Elevate everyday learning</p>
            </div>
            <div className='w-full flex items-center'>
                <img src={laptopClassroom} alt="students gathered around laptop learning from educational video" />
            </div>
        </section>
        {/**ADD MORE LATER */}
        <section className='curved_border mt-20 bg-lilac'>
            <div className='flex  justify-center items-center'>
                <div>
                    <img src="" alt="trophy with a filled star in the middle" />
                    <p>Proven Effective</p>
                    <p>ADD TEXT LATER</p>
                </div>
                <div>
                    <img src="" alt="" />
                    <p>Digital Promise Approved</p>
                    <p>Add TEXT LATER</p>
                </div>
            </div>
        </section>
        
    </div>
  )
}

export default Home;