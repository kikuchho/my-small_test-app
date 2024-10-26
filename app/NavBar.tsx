'use client'
import Link from 'next/link'
import React from 'react'
import {AiFillBug} from 'react-icons/ai'
import { usePathname } from 'next/navigation'
import classnames from 'classnames'

// nav element 
const NavBar = () => {

    const links = [
        {label: 'Dashboard', href: '/'},
        {label: "Issues", href:'/issues' },
    ]

    const thepath = usePathname()
    console.log(thepath)

    
  return (
    // this flex container will make children laid out horizontaly 
    // text zinc lets you change color 
    //text-zinc-500  hover:text-zinc-800   transition-colors
    <nav className='flex space-x-6 border-b-2 mb-3 px-7 items-center'> 
        <Link href="/" > <AiFillBug/>   </Link>
    <ul className='flex space-x-3'> 
        {links.map( link => 
            <Link key={link.href} href={link.href}
            className={classnames({
                'text-zinc-900': link.href === thepath,
                'text-zinc-500' : link.href =  thepath,
                'hover:text-zinc-800 transition-colors':  true 
                })  } >  
            {link.label} </Link>
         )}
        <li>
            <Link href="/issues"> Isssues </Link>
        </li>

    </ul>
    
    </nav>
  )
}

export default NavBar