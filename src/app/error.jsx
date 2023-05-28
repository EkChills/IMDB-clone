"use client"

import React, {useEffect} from 'react'

export default function Error({error, reset}) {
  useEffect(() => {
    console.log(error);
  },[error])	// Only re-call the error handler upon component un-rendering.

  return (
    <div className='text-center mt-10'>
      <h1>Something went wrong</h1>
      <button className='hover:text-amber-600' onClick={() => reset()}>Try again</button>
    </div>
  )
}
