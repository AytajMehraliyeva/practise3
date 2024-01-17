const mongoose=require("mongoose")

const itemModel=mongoose.model("itemModule", new mongoose.Schema({
    name:String,
    img:String,
    price:Number,
    desc:String
}))

module.exports={itemModel}