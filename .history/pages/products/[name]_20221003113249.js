import React from 'react'
import { data } from '../../data'

 export const Product = ({pro}) => {
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
    const name=context.params.name;
    const product=data.filter((item)=>item.name===name)[0]
    return{
        props:{product}
    }
}