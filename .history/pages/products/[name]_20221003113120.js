import React from 'react'
import { data } from '../../data'

 export const Product = () => {
  return (
    <div>
      
    </div>
  )
}
export const getStaticPath=async()=>{
    const products=data;
    const paths=products.map((item)=>{
        return{
            params:{name:item.name}
        }
    });
    return{
        paths,
        fallback:false
    }
}
export const geStaticProps=asyn(context)=>{
    return{
        props:{product}
    }
}