interface paramsType {params : {productid:string}}
import { product } from '@/utils/constants';
import React from 'react'

function ProductId({params}:paramsType) {
  console.log(params);
  const id:number = parseInt(params.productid)
  const products = product[id]
  return (
    <div>
        <h1>ProductId {products.id}</h1>
        <h2>ProductName {products.name}</h2>
        <h2>ProductPrice {products.price} </h2>
    </div>
  )
}

export default ProductId