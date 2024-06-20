import React from 'react'
import { notFound } from 'next/navigation'

function ReviewId({params}:{params : {productid:string, reviewid:string}}) {
    const {productid,reviewid} = params

    if(parseInt(reviewid) > 1000) notFound()

  return (
    <div>ProductId {productid} ReviewId{reviewid}</div>
  )
}

export default ReviewId