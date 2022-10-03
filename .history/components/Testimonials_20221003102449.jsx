import React from 'react'
import style from "../styles/Testimonials.module.css"
import Circle from "./Circle";
const Testimonials = () => {
  return (
    <div className={style.container}>
    <Circle top="-70vh" left="0" right="0" backgroundColor="darkblue"/>
    <h1 className={style.title}>Testimonials</h1>
    <div className={style.w}>
    </div>
    </div>
  )
}

export default Testimonials
