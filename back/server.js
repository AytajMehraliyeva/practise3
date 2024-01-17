const cors=require("cors")
const express=require("express")

require('dotenv').config()
const mongoose=require("mongoose")
const ItemRouter=require('./router/Product.router')
const app=express()
const PORT=process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use("/datas", ItemRouter)

mongoose.connect("mongodb+srv://tu7lzxxdc:aytac123@cluster0.fvv4h2i.mongodb.net/").then(res=>{
    console.log("Connect to db")
})

app.listen(PORT,()=>{
    console.log("App running on 3000")
})