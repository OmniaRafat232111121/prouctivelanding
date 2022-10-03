import React from 'react'
import style from "../styles/Services.module.css"
const Services = () => {
  return (
    <div className={style.container}>
    <div className={style.info}>
    <h2 className={style.title}>What we can Do?</h2>
    <h2 className={style.subtitle}>Services we can help you with</h2>
    {Services.map((services)=>(
        <Link></Link>
    ))}
    </div>
      
    </div>
  )
}

export default Services
