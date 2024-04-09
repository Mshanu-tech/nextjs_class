import { product } from '@/utils/constants'
import Link from 'next/link'
import React from 'react'

function Product() {
  return (
    <div>
        Product
{product.map((product) => (
    <Link href={`product/${product.id}`} key={product.id}>
        <div  className='border m-2'>
<h1 className='font-bold text-3xl'>{product.name}</h1>
<h1>{product.price}</h1>
    </div>
    </Link>
))}
    </div>
  )
}

export default Product