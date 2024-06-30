
import React, { useState, useEffect } from 'react';

function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const errorHandler = (error, errorInfo) => {
      // update state to trigger the fallback ui
      setHasError(true);
      // log the error to an error reporting service
      console.error('Error caught by ErrorBoundary:', error, errorInfo);
    };

    // attach error handler
    window.addEventListener('error', errorHandler);

    //clean up error handler
    return () => {
      window.removeEventListener('error', errorHandler);
    };
  }, []);

  if (hasError) {
    // fallback UI when there's an error
    return <h1>Something went wrong. Please try again later.</h1>;
  }

  // render children components normally if no error
  return children;
}

export default ErrorBoundary;