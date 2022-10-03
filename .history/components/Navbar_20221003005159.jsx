import Link from 'next/link'
import React from 'react'
import style from "../styles/Navbar.module.css"
const Navbar = () => {
  return (
    <div className={style.cointainer}>
      <Link href="/">Productivity</Link>
      <ul>
      <li className={style.listItem}>
      <Link href="/products/design">DESIGN</Link>
      </li>
      <li className={style.listItem}>
          <Link href="/products/development">DEVELOPMENT</Link>
        </li>
        <li className={style.listItem}>
          <Link href="/products/production">PRODUCTION</Link>
        </li>
        <li className={style.listItem}>
          <Link href="/products/photography">PHOTOGRAPHY</Link>
        </li>
        <li className={style.listItem}>
          <Link href="/contact">CONTACT</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
