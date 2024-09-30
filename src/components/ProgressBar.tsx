'use client'
import React from 'react'

function ProgressBar() {
  const total = 30;
  const current = 5;
  const percentage = (current/total)*100 ;
  

  return (
    <div className='w-full flex flex-col lg:flex-row h-10 bg-neutral-950 items-center justify-around '>
        <div className='w-5/6 flex  items-center relative '>
          <div className='w-full h-2 bg-white absolute z-10 rounded-lg'></div>
          <div className="h-2 bg-green-500 absolute z-20 rounded-lg" style={{ width: `${percentage}%` }}></div>
        </div>
        <div className='ml-5 '>{current}/{total}</div>
    </div>
  )
}

export default ProgressBar