import React, { useContext, useEffect } from 'react'
import MainContext from '../context'
import axios from 'axios'
import './Card.scss'
import { Toaster } from 'react-hot-toast'
import { Link } from 'react-router-dom'

const Card = () => {
    const{data,setData,setError,addToWishlist, searchItems}=useContext(MainContext)

    useEffect(()=>{
        axios.get("https://backend-aytaj.onrender.com/datas")
        .then(res=>{
            setData(res.data)
            console.log(res.data)
        }).catch(err=>{
            setError(err)
        })
    },[])
  return (
    <div className='cards'>
        {searchItems.map((item,index)=>(
            <div className='card' key={index}>
                <img src={item.img} alt="" />
                <div className='cardBody'>
               <h5>{item.name}</h5>
                <p>{item.price} Azn</p>
             <Link to={`/${item._id}`}><button className='detail'>Detail</button> <br /></Link>
                <button className='fav' onClick={()=> addToWishlist(item._id)}>Add to fav</button>
                <Toaster/>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Card