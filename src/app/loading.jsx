import Image from 'next/image'
import React from 'react'

export default function loading() {
  return (
    <div className='flex justify-center'>
      <Image src="/spinner.svg" width={50} height={50} alt='spinner' />
    </div>
  )
}
