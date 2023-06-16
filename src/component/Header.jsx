import React from 'react'
import { useSelector } from 'react-redux'

export const Header = () => {

    const cartData = useSelector((state)=>state.cart)
  return (
    <div>Header
        {
            cartData?.value?.map((item)=>{
                return <div>{item.name}</div>
            })
        }

    </div>
  )
}
