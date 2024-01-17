import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router'
import './Detail.scss'
const Detail = () => {
    const [item, setItem] = useState({})
    const { id } = useParams()
    useEffect(() => {
        axios.get(`https://backend-aytaj.onrender.com/datas/${id}`).then(res => {
            setItem(res.data)
        })
    }, [id])
    return (
        <>
        <Helmet>
            <title>Detail</title>
            </Helmet>
        <div className='detailCard'>
            <img className='detailImg' width={"300px"} height={"300px"} src={item.img} alt="" />
            <div className='detailBody'>
            <h1>{item.name}</h1>
            <p className='detailDesc'>{item.desc}</p>
            </div>
        </div></>
    )
}

export default Detail