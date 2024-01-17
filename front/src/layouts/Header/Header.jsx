import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div className='header'>
        <div className='headerNav'>
  <p>Tasty</p>
  <ul>
    <li>Menu</li>
   <Link to={""}><li>Home</li></Link>
 <Link to={"wishlist"}><li>Wishlist</li></Link>
    <li>Contact</li>
   <Link to={"add"}><li>Add Page</li></Link>
    </ul>
    </div>

    </div>
  )
}

export default Header