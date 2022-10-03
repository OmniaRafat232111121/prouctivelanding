import React from 'react'
import style from "../styles/Services.module.css"
const Services = ({sercic}) => {
  return (
    <div className={style.container}>
    <div className={style.info}>
    <h2 className={style.title}>What we can Do?</h2>
    <h2 className={style.subtitle}>Services we can help you with</h2>
    {Services.map((service)=>(
        <Link key={service.id} href={`/products/${service.name}`} passHref/>
    ))}
    </div>
      
    </div>
  )
}

export default Services
