import React from 'react';
import{Link} from 'react-router-dom';

const Error = () => {
  return (
    <main className='flex flex-col gap-8 items-center justify-center mt-12'>
      <h1>404 - Not Found</h1>
      <p>The page you're looking for does not exist.</p>
      <Link to="/" className=' text-pastel_purple hover:underline'>Go Home</Link>
    </main>
  );
};

export default Error;
