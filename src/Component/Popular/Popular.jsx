import React from 'react'
import './Popular.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'
const Popular = () => {
  return (
    <div className='popular'>
      {/* pour afficher le plus populaire dans le women  sur la pages de shop*/}
     
      <h1>POPULAR IN WONEN</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item , index)=>{
          //ON appelle le component Item (qui gere l'affichage) et on renvoi le props name,image...
          return <Item key={index} id={item.id} name={item.name} image ={item.image} new_price ={item.new_price} old_price = {item.old_price}/> 
        })}
      </div>
   
    </div>
  )
}

export default Popular
