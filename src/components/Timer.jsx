import React, { useState, useEffect } from 'react';
export default function Timer() {
  const [seconds, setSeconds] = useState(30);
  


  useEffect(()=>{
    const intervalId = setInterval(() => {
        setSeconds(prevSeconds => (prevSeconds>0)?prevSeconds-1:prevSeconds);
      }, 1000);
      return () => clearInterval(intervalId);
  }, []);

  return (
    <>
  <div>
    Elapsed Time: {seconds}s
  </div>
  </>
    );
}
