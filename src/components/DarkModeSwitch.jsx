'use client'

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from 'next-themes'

export default function DarkModeSwitch() {
  const { systemTheme, theme,setTheme} = useTheme()
  console.log(theme);
  const currentTheme = theme === 'system' ? systemTheme : theme
  return (
    <>
      {currentTheme === "dark" ? (<FontAwesomeIcon  onClick={() => setTheme('light')} className='w-[1.5rem] hover:text-amber-500 hover:cursor-pointer' icon={faSun} />) :
      (<FontAwesomeIcon className='w-[1.5rem]  hover:text-amber-500 hover:cursor-pointer' icon={faMoon}  onClick={() => setTheme('dark')} />)
      }
    </>
  )}

