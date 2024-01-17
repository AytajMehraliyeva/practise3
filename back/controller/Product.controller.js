const { itemModel } = require("../model/Product.model")

const itemController={
    getAll:async(req,res)=>{
        try{
            const item= await itemModel.find()
            res.status(200).send(item)
        }catch(error){
            res.status(404).send("An occures while getting items")
        }
    }, 

    getById:async(req,res)=>{
        try{
            const {id}=req.params
            const target=await itemModel.findById(id)
            res.status(200).send(target)
        }catch(error){
            res.status(404).send("An occures while getting by ID item")
        }
    }, 
    add:async(req,res)=>{
        try{
            const {name,img,price,desc}=req.body
            const newItem= new itemModel({name,img,price,desc})
            await newItem.save()
            res.status(202).send("Item added")
        }catch(error){
            res.status(404).send("An occures while adding new item")
        }
    }, 

    delete:async(req,res)=>{
        try{
            const {id}=req.params
            await itemModel.findByIdAndDelete(id)
            res.send("Item deleted!")
        } catch(error){
            res.send("An occures while deleting item")
        }
    }
}

module.exports={itemController}