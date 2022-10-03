import Link from 'next/link'
import React from 'react'
import style from "../styles/Navbar.module.css"
const Navbar = () => {
  return (
    <div className={style.cointainer}>
      <Link href="/">Productivity</Link>
      <ul>
      <li cla>
      <Link href="/products/design">DESIGN</Link>
      </li>
      </ul>
    </div>
  )
}

export default Navbar
