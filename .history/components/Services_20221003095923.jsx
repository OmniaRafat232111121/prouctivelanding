import React from 'react'
import style from "../styles/Services.module.css"
const Services = ({services}) => {
  return (
    <div className={style.container}>
    <div className={style.info}>
    <h2 className={style.title}>What we can Do?</h2>
    <h2 className={style.subtitle}>Services we can help you with</h2>
    {Services.map((service)=>(
        <Link key={service.id} href={`/products/${service.name}`} passHref>
        <div className={style.service}>
        <div className={style.catInfo}>{service.desc}</div>
        <span className={style.cat}>{service.title}</span>
        <div className={style.media}>
          {service.video ? (
            <video
              className={style.video}
              src={`/img/${service.video}`}
              autoPlay
              loop
            />
          ) : (
            <Image
              src={`${process.env.NEXT_PUBLIC_URL}/img/${service.photo}`}
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="cover"
              alt=""
            />
          )}
        </div>
      </div>
    </Link>
    ))}
    </div>
      
    </div>
  )
}

export default Services
