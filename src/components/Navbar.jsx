import React from 'react'
import NavbarItem from './NavbarItem'

export default function Navbar() {
  return (
    <div className='flex justify-center items-center dark:bg-gray-600 bg-amber-100 text-lg p-4 '>
      <NavbarItem title="Trending" params="fetchTrending" />
      <NavbarItem title="Top Rated" params="fetchTopRated" />
    </div>
  )
}
