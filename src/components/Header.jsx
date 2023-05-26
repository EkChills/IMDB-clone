import React from 'react'
import MenuItem from './MenuItem'
import Link from 'next/link'
import { faHome, faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import DarkModeSwitch from './DarkModeSwitch'

export default function Header() {
  return (
    <div className='flex items-center justify-between mx-2 py-6 max-w-6xl sm:mx-auto'>
      <div className='flex items-center '>
        <MenuItem title="HOME" address="/" Icon={faHome} />
        <MenuItem title="ABOUT" address="/about" Icon={faCircleInfo} />
      </div>
      <div className="flex items-center space-x-5" >
        <DarkModeSwitch />
        <Link href="/">
          <h2 className='text-2xl'>
            <span className='font-bold mr-1 bg-amber-500 py-1 px-2 rounded-lg '>IMDB</span>
            <span className='text-xl hidden sm:inline'>Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  )
}
