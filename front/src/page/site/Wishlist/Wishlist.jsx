import React, { useContext } from 'react'
import MainContext from '../../../context'
import { Toaster } from 'react-hot-toast'
import './Wishlist.scss'
import { Helmet } from 'react-helmet'

const Wishlist = () => {
  const{wishlist,handleDelete}=useContext(MainContext)
 
  return (
    <>
    <Helmet><title>Wishlist</title></Helmet>
    <div className='cardsWishlist'>
                     {wishlist.map((item, index) => (
                      <div className='wishlistCard'>
                      <img src={item?.img} alt="" />
                      <div className="cardBody">
                        <p className='wishName'><b>{item?.name}</b></p>
                        <p className='wishPrice'>{item?.price} Azn</p>
                            <button className='deleteWishlist' onClick={()=> handleDelete(item._id)}>Delete</button>
                           <Toaster/>
                            </div>
                            </div>
                    )) }
              
               
            </div></>
  )
}

export default Wishlist