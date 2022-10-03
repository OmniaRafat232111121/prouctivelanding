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
export const geStaticProps=async(context)=>{
    const name=context
    return{
        props:{product}
    }
}