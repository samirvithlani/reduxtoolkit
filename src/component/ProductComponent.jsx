import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/CartSlice'

export const ProductComponent = () => {

    const dispatch = useDispatch()
    const cartData = useSelector((state)=>state.cart)
    console.log("ProductComponent",dispatch)
    console.log("ProductComponent",cartData)
  return (
    <div>

        <button onClick={()=>dispatch(addToCart({id:1, name:"test"}))}>Add to cart</button>
    </div>
  )
}
