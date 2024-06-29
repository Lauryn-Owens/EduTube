//import react
import React from 'react';
//importing link from react router
import{Link} from 'react-router-dom';

const Error = () => {
  {/**display when user requests an unknown path  */}
  return (
    <main className='flex flex-col gap-8 items-center justify-center mt-12'>
      <h1>404 - Not Found</h1>
      <p>The page you're looking for does not exist.</p>
      {/**go back home */}
      <Link to="/" className=' text-pastel_purple hover:underline'>Go Home</Link>
    </main>
  );
};

export default Error;
