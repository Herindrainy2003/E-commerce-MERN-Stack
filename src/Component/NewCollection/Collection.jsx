import React from 'react'
import  './newcollection.css';
import new_Collection from '../Assets/new_collections'
import Item  from '../Item/Item';


const Collection = () => {
  return (
    <div className='new-collections'>
      <h1>NOUVEAU COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_Collection.map((item , index)=>{
            return <Item key={index} id={item.id} name={item.name} image ={item.image} new_price ={item.new_price} old_price = {item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default Collection
