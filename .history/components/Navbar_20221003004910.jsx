import Link from 'next/link'
import React from 'react'
import style from "../styles/Navbar.module.css"
const Navbar = () => {
  return (
    <div className={style.cointainer}>
      <Link href="/"></Link>
      <ul>
      </ul>
    </div>
  )
}

export default Navbar
