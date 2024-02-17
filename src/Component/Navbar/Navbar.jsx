import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
 


const Navbar = () => {

    const [menu , setMenu] = useState('shop')


  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="logo shopper" />
            <p>Mialy Shop</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>setMenu('shop')}> <Link to="/"  style={{textDecoration : 'none'}} > Shop {menu === 'shop' ? <hr /> : <></>} </Link>    </li>
            <li onClick={()=>setMenu('mens')}> <Link to = "/mens" style={{textDecoration : 'none'}}>Homme {menu ==='mens' ? <hr/> : <></>} </Link>  </li> 
            <li onClick={()=>setMenu('womans')}> <Link to = "/womans" style={{textDecoration : 'none'}} > Femme {menu ==='womans' ? <hr/> : <></>} </Link> </li> 
            <li onClick={()=>setMenu('kids')}> <Link to ="/kids" style={{textDecoration : 'none'}}> Enfants {menu ==='kids' ? <hr/> : <></>} </Link> </li> 
        </ul>
        <div className='nav-login-cart'>
            <button>  <Link to = "/login" style={{textDecoration : 'none'}}> Inscription </Link> </button>
          <Link to ="/cart" style={{textDecoration : 'none'}}> <img src={cart_icon} alt="cart image" /> </Link>  
            <div className="nav-cart-count">0</div>
        </div>
      
    </div>
  )
}

export default Navbar
