import React from 'react'
import  './Item.css'

const Item = (props) => {
 // console.log(props)(pour verifier les donnes renvoie par le shop)
  return (
  //  pour l'affichage de produits
   <div className='item'>
      <img src={props.image} className='img' alt="" />
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">
           $ {props.new_price}
        </div>
            <div className="item-price-old">
           $ {props.old_price}
            </div>
      </div>
    </div>
  )
}

export default Item
