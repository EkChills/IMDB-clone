import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function MenuItem({title, address, Icon}) {
  return (
    <div>
      <Link href={address} className='mx-4 lg:mx-6 hover:text-amber-600' >
        <FontAwesomeIcon icon={Icon}  className='text-2xl w-[1.5rem] sm:hidden mx-4 ' />
        <p className='hidden sm:inline my-2 text-sm ' >{title}</p>
      </Link>
    </div>
  )
}
