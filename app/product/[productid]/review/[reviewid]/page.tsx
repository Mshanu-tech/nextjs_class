import React from 'react'

function ReviewId({params}:{params : {productid:string, reviewid:string}}) {
    const {productid,reviewid} = params
  return (
    <div>ProductId {productid} ReviewId{reviewid}</div>
  )
}

export default ReviewId