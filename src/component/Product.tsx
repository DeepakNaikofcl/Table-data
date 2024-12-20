import React from 'react'

export default function Product() {


    const data = ["Deepak","Mani","Lalith","Venu"]

  return (
    <div>

        {
            data.map( (x) => (<li>{x}</li>))
        }
    </div>
  )
}
